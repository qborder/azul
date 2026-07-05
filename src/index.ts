import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as http from "http";
import { IPCServer } from "./ipc/server.js";
import { TreeManager, TreeNode } from "./fs/treeManager.js";
import { FileWriter } from "./fs/fileWriter.js";
import { FileWatcher } from "./fs/watcher.js";
import { SourcemapGenerator } from "./sourcemap/generator.js";
import { log } from "./util/log.js";
import { config, initializeConfig } from "./config.js";
import type { StudioMessage } from "./ipc/messages.js";
import { generateGUID } from "./util/id.js";
import { classifyFileName } from "./util/scriptFile.js";

/**
 * Main orchestrator for the Azul daemon
 */
export class SyncDaemon {
  private ipc: IPCServer;
  private httpServer: http.Server;
  private tree: TreeManager;
  private fileWriter: FileWriter;
  private fileWatcher: FileWatcher;
  private sourcemapGenerator: SourcemapGenerator;
  private batchDepth = 0; // Tracks nested batch processing
  private batchNeedsSourcemapRegen = false; // Defer regen until batch ends
  private stopPromise: Promise<void> | null = null;
  // Coalesces sourcemap regeneration for bursts of filesystem mutations (e.g. a
  // bulk `rm -rf` or a git branch switch) so we do at most one full rebuild.
  private fsRegenTimer: NodeJS.Timeout | null = null;
  private fsRegenPending = false;

  constructor() {
    this.tree = new TreeManager();
    this.fileWriter = new FileWriter(config.syncDir);
    this.fileWatcher = new FileWatcher();
    this.sourcemapGenerator = new SourcemapGenerator();

    // HTTP server is used for WebSocket upgrade handling.
    this.httpServer = http.createServer((_, res) => {
      res.writeHead(404);
      res.end("Not found");
    });

    this.ipc = new IPCServer(config.port, this.httpServer, {
      requestSnapshotOnConnect: false,
    });

    this.setupHandlers();
    this.httpServer.listen(config.port);
  }

  /**
   * Set up all event handlers
   */
  private setupHandlers(): void {
    // Handle messages from Studio (WebSocket)
    this.ipc.onMessage((message) => this.handleStudioMessage(message));
    this.ipc.onHandshake(() => {
      this.ipc.requestSnapshot();
    });
    this.ipc.onDisconnect(() => {
      this.handleClientDisconnect();
    });

    // Handle file changes from filesystem
    this.fileWatcher.onChange((eventType, filePath, source) => {
      this.handleFsEvent(eventType, filePath, source);
    });
  }

  /**
   * Handle incoming messages from Studio
   */
  private handleStudioMessage(message: StudioMessage): void {
    if (message.type === "batch") {
      this.batchDepth += 1;
      try {
        for (const payload of message.messages) {
          this.handleStudioMessage(payload);
        }
      } finally {
        this.batchDepth -= 1;

        // If any delete in this batch missed its prune, only regenerate once at the end
        if (this.batchDepth === 0 && this.batchNeedsSourcemapRegen) {
          this.regenerateSourcemap();
          this.batchNeedsSourcemapRegen = false;
        }
      }
      return;
    }

    switch (message.type) {
      case "fullSnapshot":
        this.handleFullSnapshot(message.data);
        break;

      case "scriptChanged":
        this.handleScriptChanged(message.data);
        break;

      case "instanceUpdated":
        this.handleInstanceUpdated(message.data);
        break;

      case "deleted":
        this.handleDeleted(message.data);
        break;

      case "ping":
        this.ipc.send({ type: "pong" });
        break;

      case "clientDisconnect":
        log.info("Studio client requested disconnect");
        this.handleClientDisconnect();
        break;

      default:
        log.warn("Unknown message type:", (message as any).type);
    }
  }

  /**
   * Handle client disconnect gracefully without closing the process
   */
  private handleClientDisconnect(): void {
    log.info("Studio client disconnected. Stopping file watcher, keeping server active...");
    void (async () => {
      await this.fileWatcher.stop();
    })();
  }

  /**
   * Handle full snapshot from Studio
   */
  private handleFullSnapshot(data: any[]): void {
    log.info("Received full snapshot from Studio");

    // Update tree
    this.tree.applyFullSnapshot(data);

    // Write all scripts to filesystem
    this.fileWriter.writeTree(this.tree.getAllNodes());

    // Remove any pre-existing files that are no longer mapped (optional)
    this.cleanupOrphanFiles();

    // Start file watching
    this.fileWatcher.watch(this.fileWriter.getBaseDir());

    // Generate sourcemap
    this.regenerateSourcemap();

    // Log statistics
    const stats = this.tree.getStats();
    log.success(
      `Sync complete: ${stats.scriptNodes} scripts, ${stats.totalNodes} total nodes`,
    );
  }

  /**
   * Handle script source change
   */
  private handleScriptChanged(message: {
    guid: string;
    source: string;
    path: string[];
    className: string;
  }): void {
    const { guid, source, path: instancePath, className } = message;

    // Update tree
    this.tree.updateScriptSource(guid, source);

    // Get or create node
    let node = this.tree.getNode(guid);
    if (!node) {
      // Create new node if it doesn't exist
      this.tree.updateInstance({
        guid,
        className,
        name: instancePath[instancePath.length - 1],
        path: instancePath,
        source,
      });
      node = this.tree.getNode(guid);
    }

    if (node) {
      // Precompute path and suppress watcher before writing to avoid race conditions
      const filePath = this.fileWriter.getFilePath(node, this.tree.getAllNodes());
      this.fileWatcher.suppressNextChange(filePath, source);

      // Write to filesystem
      this.fileWriter.writeScript(node, this.tree.getAllNodes());

      // Incrementally update sourcemap entry for this script
      this.sourcemapGenerator.upsertSubtree(
        node,
        this.tree.getAllNodes(),
        this.fileWriter.getAllMappings(),
        config.sourcemapPath,
        undefined,
        false,
      );
    }
  }

  /**
   * Handle instance update (rename, move, etc.)
   */
  private handleInstanceUpdated(data: any): void {
    const update = this.tree.updateInstance(data);
    const node = update?.node;

    if (!node) {
      return;
    }

    const nodesToUpdate: Map<string, TreeNode> = new Map();

    if (this.isSyncableClass(node.className)) {
      nodesToUpdate.set(node.guid, node);
    }

    if (update.pathChanged || update.nameChanged || update.parentChanged) {
      for (const child of this.tree.getDescendantSyncableNodes(node.guid)) {
        nodesToUpdate.set(child.guid, child);
      }
    }

    for (const syncableNode of nodesToUpdate.values()) {
      const filePath = this.fileWriter.getFilePath(syncableNode, this.tree.getAllNodes());
      if (this.isScriptClass(syncableNode.className)) {
        this.fileWatcher.suppressNextChange(filePath, syncableNode.source);
      } else {
        const payload = {
          properties: syncableNode.properties || {},
          attributes: syncableNode.attributes || {},
          tags: syncableNode.tags || [],
        };
        this.fileWatcher.suppressNextChange(filePath, JSON.stringify(payload, null, 2));
      }
      this.fileWriter.writeScript(syncableNode, this.tree.getAllNodes());
    }

    const shouldUpdateSourcemap =
      update.isNew ||
      update.pathChanged ||
      update.nameChanged ||
      update.parentChanged ||
      this.isSyncableClass(node.className);

    if (shouldUpdateSourcemap) {
      this.sourcemapGenerator.upsertSubtree(
        node,
        this.tree.getAllNodes(),
        this.fileWriter.getAllMappings(),
        config.sourcemapPath,
        update.prevPath,
        update.isNew,
      );
    }

    this.fileWriter.cleanupEmptyDirectories();
  }

  /**
   * Handle instance deletion
   */
  private handleDeleted(message: { guid: string }): void {
    const { guid } = message;
    const node = this.tree.getNode(guid);

    // If the node is already gone (e.g., child deletes after parent delete), fall back to full cleanup
    if (!node) {
      log.debug(`Delete ignored for unknown guid: ${guid}`);
      this.fileWriter.deleteScript(guid);
      // this.regenerateSourcemap();
      this.fileWriter.cleanupEmptyDirectories();
      return;
    }

    // Capture all syncable descendants (and the node itself if syncable) before we delete the tree nodes
    const nodesToDelete: { guid: string; filePath: string | null }[] = [];
    const collectSyncable = (syncableNode: TreeNode): void => {
      const filePath = this.fileWriter.getFilePath(syncableNode, this.tree.getAllNodes());
      nodesToDelete.push({ guid: syncableNode.guid, filePath });
    };

    if (this.isSyncableClass(node.className)) {
      collectSyncable(node);
    }
    for (const child of this.tree.getDescendantSyncableNodes(node.guid)) {
      collectSyncable(child);
    }

    const pathSegments = node.path;

    // Delete from tree (removes node and descendants)
    this.tree.deleteInstance(guid);

    // Delete files for all affected syncables
    for (const entry of nodesToDelete) {
      if (entry.filePath) {
        this.fileWatcher.suppressNextChange(entry.filePath);
      }
      const removed = this.fileWriter.deleteScript(entry.guid);
      if (!removed && entry.filePath) {
        this.fileWriter.deleteFilePath(entry.filePath);
      }
    }

    // Remove subtree from sourcemap
    const outputPath = config.sourcemapPath;
    const pruned = this.sourcemapGenerator.prunePath(
      pathSegments,
      outputPath,
      this.tree.getAllNodes(),
      this.fileWriter.getAllMappings(),
      node.className,
      node.guid,
    );

    // If prune failed to find the path (e.g., sourcemap drift), rebuild once to stay consistent
    if (!pruned) {
      if (this.batchDepth > 0) {
        // Defer regeneration until the batch completes to avoid repeated full rebuilds
        this.batchNeedsSourcemapRegen = true;
        log.debug("Regenerating sourcemap after batched prune miss");
      } else {
        log.debug("Regenerating sourcemap due to prune miss");
        this.regenerateSourcemap();
      }
    }

    this.fileWriter.cleanupEmptyDirectories();
  }

  /**
   * Handle filesystem events (add, change, unlink)
   */
  private handleFsEvent(
    eventType: "add" | "change" | "unlink",
    filePath: string,
    source?: string,
    extraData?: { properties?: any; attributes?: any; tags?: any },
  ): void {
    const guid = this.fileWriter.getGuidByPath(filePath);

    if (eventType === "unlink") {
      if (!guid) return;
      const node = this.tree.getNode(guid);
      if (!node) return;

      log.info(`File deleted externally: ${path.relative(this.fileWriter.getBaseDir(), filePath)}`);

      // Capture path/class before removing the node so we can prune the
      // sourcemap incrementally instead of doing a full O(n) rebuild per delete.
      const prunePathSegments = [...node.path];
      const prunedClassName = node.className;
      const prunedGuid = node.guid;

      // Remove from local tree
      this.tree.deleteInstance(guid);

      // Remove from fileWriter mappings
      this.fileWriter.deleteMapping(guid);

      // Send delete message to Studio
      this.ipc.send({
        type: "deleted",
        data: { guid },
      });

      // Incrementally prune the removed subtree from the sourcemap. Only fall
      // back to a (coalesced) full regeneration if the targeted prune misses,
      // which keeps bulk deletes from being quadratic.
      const pruned = this.sourcemapGenerator.prunePath(
        prunePathSegments,
        config.sourcemapPath,
        this.tree.getAllNodes(),
        this.fileWriter.getAllMappings(),
        prunedClassName,
        prunedGuid,
      );
      if (!pruned) {
        this.scheduleDeferredSourcemapRegen();
      }
      this.fileWriter.cleanupEmptyDirectories();
    } else if (eventType === "change" && guid) {
      log.info(
        `File changed externally: ${path.relative(this.fileWriter.getBaseDir(), filePath)}`,
      );

      const node = this.tree.getNode(guid);
      if (!node) return;

      const isScript = this.isScriptClass(node.className);
      if (isScript) {
        if (node.source === source) {
          log.debug(
            `Skipping Studio patch for unchanged file: ${path.relative(this.fileWriter.getBaseDir(), filePath)}.`,
          );
          return;
        }

        // Update tree
        this.tree.updateScriptSource(guid, source || "");

        // Send patch to Studio
        this.ipc.patchScript(guid, source || "");
      } else {
        // Properties/attributes/tags changed on an extra class instance
        if (extraData) {
          const propertiesChanged = JSON.stringify(node.properties || {}) !== JSON.stringify(extraData.properties || {});
          const attributesChanged = JSON.stringify(node.attributes || {}) !== JSON.stringify(extraData.attributes || {});
          const tagsChanged = JSON.stringify(node.tags || []) !== JSON.stringify(extraData.tags || []);

          if (!propertiesChanged && !attributesChanged && !tagsChanged) {
            log.debug(`Skipping Studio update for unchanged extra-class file.`);
            return;
          }

          const updatedData = {
            guid,
            className: node.className,
            name: node.name,
            path: node.path,
            parentGuid: node.parentGuid,
            properties: extraData.properties,
            attributes: extraData.attributes,
            tags: extraData.tags,
          };

          this.tree.updateInstance(updatedData);

          this.ipc.send({
            type: "instanceUpdated",
            data: updatedData,
          });
        }
      }
    } else if (eventType === "add" || (eventType === "change" && !guid)) {
      // If a mapping already exists for this path, treat it as a change
      if (guid) {
        this.handleFsEvent("change", filePath, source, extraData);
        return;
      }

      const newGuid = generateGUID();
      const relPath = path.relative(this.fileWriter.getBaseDir(), filePath);
      const parts = relPath.split(path.sep).filter(Boolean);
      if (parts.length === 0) return;

      const fileName = parts[parts.length - 1];
      const { className, instanceName, isScript } = classifyFileName(fileName);
      const parentSegments = parts.slice(0, -1);
      const cleanParentSegments = parentSegments.map((seg) => classifyFileName(seg).instanceName);
      const instancePath = [...cleanParentSegments, instanceName];

      log.info(`File created externally: ${relPath}`);

      // Ensure intermediate folders exist in the tree and in Studio
      let currentSegments: string[] = [];
      let parentGuid: string | null = "root";

      for (let i = 0; i < parentSegments.length; i++) {
        const rawSegment = parentSegments[i];
        const cleanSegment = cleanParentSegments[i];
        currentSegments.push(cleanSegment);
        let folderNode = this.tree.getNodeByPath(currentSegments);
        if (!folderNode) {
          const { className: parentClass } = classifyFileName(rawSegment);
          const folderGuid = generateGUID();
          const folderData = {
            guid: folderGuid,
            className: parentClass,
            name: cleanSegment,
            path: [...currentSegments],
            parentGuid,
          };
          this.tree.updateInstance(folderData);
          folderNode = this.tree.getNode(folderGuid)!;

          // Send folder creation to Studio
          this.ipc.send({
            type: "instanceUpdated",
            data: folderData,
          });
        }
        parentGuid = folderNode.guid;
      }

      // Create the node in tree
      const data: any = {
        guid: newGuid,
        className,
        name: instanceName,
        path: instancePath,
        parentGuid,
      };
      if (isScript) {
        data.source = source || "";
      } else if (extraData) {
        data.properties = extraData.properties;
        data.attributes = extraData.attributes;
        data.tags = extraData.tags;
      }
      this.tree.updateInstance(data);

      // Register mapping in fileWriter
      this.fileWriter.registerMapping(newGuid, filePath, className);

      // Send creation to Studio
      this.ipc.send({
        type: "instanceUpdated",
        data,
      });

      // Regenerate sourcemap
      this.regenerateSourcemap();
    }
  }

  /**
   * Regenerate the sourcemap
   */
  private regenerateSourcemap(): void {
    // Write sourcemap into the sync directory so Luau-LSP can find it
    const outputPath = config.sourcemapPath;
    this.sourcemapGenerator.generateAndWrite(
      this.tree.getAllNodes(),
      this.fileWriter.getAllMappings(),
      outputPath,
    );
  }

  /**
   * Coalesce a full sourcemap regeneration across a burst of filesystem
   * mutations. Used as the fallback when an incremental prune misses, so a bulk
   * delete performs a single rebuild instead of one per file (which is O(n^2)).
   */
  private scheduleDeferredSourcemapRegen(): void {
    this.fsRegenPending = true;
    if (this.fsRegenTimer) {
      return;
    }
    this.fsRegenTimer = setTimeout(() => {
      this.fsRegenTimer = null;
      if (!this.fsRegenPending) {
        return;
      }
      this.fsRegenPending = false;
      log.debug("Running coalesced sourcemap regeneration after filesystem burst");
      this.regenerateSourcemap();
    }, Math.max(config.fileWatchDebounce, 100));
  }

  /**
   * Start the daemon
   */
  public start(): void {
    log.info("🚀 Azul daemon starting...");
    log.info(`Sync directory: ${config.syncDir}`);
    log.info(`HTTP/WebSocket port: ${config.port}`);
    log.info("");
    log.success(`Server listening on http://localhost:${config.port}`);
    log.info("Waiting for Studio connection...");
  }

  /**
   * Stop the daemon
   */
  public async stop(): Promise<void> {
    if (this.stopPromise) {
      return this.stopPromise;
    }

    this.stopPromise = (async () => {
      log.info("Stopping daemon...");
      if (this.fsRegenTimer) {
        clearTimeout(this.fsRegenTimer);
        this.fsRegenTimer = null;
        this.fsRegenPending = false;
      }
      await this.fileWatcher.stop();
      this.ipc.send({ type: "daemonDisconnect" });
      await new Promise((resolve) => setTimeout(resolve, 50));
      this.ipc.close();
      await new Promise<void>((resolve, reject) => {
        this.httpServer.close((error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      });
      log.info("Daemon stopped");
    })();

    return this.stopPromise;
  }

  private isScriptClass(className: string): boolean {
    return (
      className === "Script" ||
      className === "LocalScript" ||
      className === "ModuleScript"
    );
  }

  private isSyncableClass(className: string): boolean {
    if (this.isScriptClass(className)) return true;
    const classNameLower = className.toLowerCase();
    return Object.values(config.extraClassSuffixes).some((val) => val.toLowerCase() === classNameLower);
  }

  /**
   * Delete files under syncDir that are not mapped to any instance (opt-in).
   */
  private cleanupOrphanFiles(): void {
    if (!config.deleteOrphansOnConnect) {
      return;
    }

    const baseDir = this.fileWriter.getBaseDir();
    const mapped = new Set<string>();

    for (const mapping of this.fileWriter.getAllMappings().values()) {
      mapped.add(path.resolve(mapping.filePath));
    }

    let removedFiles: string[] = [];

    const walk = (dir: string): void => {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(fullPath);
        } else {
          if (!mapped.has(path.resolve(fullPath))) {
            try {
              fs.unlinkSync(fullPath);
              removedFiles.push(entry.name);
            } catch (error) {
              log.warn("Failed to delete orphan file:", fullPath, error);
            }
          }
        }
      }
    };

    walk(baseDir);
    if (removedFiles.length > 0) {
      this.fileWriter.cleanupEmptyDirectories();
      log.success(
        `Removed ${removedFiles.length} orphan file(s) from sync directory (${removedFiles.join(", ")})`,
      );
    }
  }
}

// Allow direct execution (`node dist/index.js`) while preventing side effects when imported by the CLI
const isDirectRun =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isDirectRun) {
  initializeConfig();
  const daemon = new SyncDaemon();
  daemon.start();

  // Handle graceful shutdown
  process.on("SIGINT", async () => {
    console.log("\n");
    console.log("Received SIGINT, shutting down...");
    await daemon.stop();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    await daemon.stop();
    process.exit(0);
  });
}
