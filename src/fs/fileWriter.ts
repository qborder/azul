import * as fs from "fs";
import * as path from "path";
import { TreeNode } from "./treeManager.js";
import { config } from "../config.js";
import { log } from "../util/log.js";

/**
 * Mapping of GUID to file path
 */
export interface FileMapping {
  guid: string;
  filePath: string;
  className: string;
}

/**
 * Handles writing the virtual tree to the filesystem
 */
export class FileWriter {
  private baseDir: string;
  private fileMappings: Map<string, FileMapping> = new Map();
  private pathToGuid: Map<string, string> = new Map(); // Reverse index for O(1) path lookups

  constructor(baseDir: string = config.syncDir) {
    this.baseDir = path.resolve(baseDir);
    this.ensureDirectory(this.baseDir);
  }

  /**
  /**
   * Write all syncable nodes to the filesystem
   */
  public writeTree(nodes: Map<string, TreeNode>): void {
    log.info("Writing tree to filesystem...");

    // Clear existing mappings
    this.fileMappings.clear();
    this.pathToGuid.clear();

    // Collect all syncable nodes for batch writing
    const syncableNodes: TreeNode[] = [];
    for (const node of nodes.values()) {
      if (this.isSyncableNode(node)) {
        syncableNodes.push(node);
      }
    }

    this.writeBatch(syncableNodes);

    log.success(`Wrote ${this.fileMappings.size} syncable nodes to filesystem`);
  }

  /**
   * Write multiple syncables in a batch for improved I/O efficiency
   */
  public writeBatch(nodes: TreeNode[]): void {
    // Pre-compute all file paths and collect writes
    const writes: { node: TreeNode; filePath: string; dirPath: string }[] = [];
    const dirsToCreate = new Set<string>();
    const batchPathToGuid = new Map<string, string>();

    const pathMap = new Map<string, TreeNode>();
    for (const node of nodes) {
      pathMap.set(node.path.join("/"), node);
    }

    for (const node of nodes) {
      if (!this.isSyncableNode(node)) continue;
      if (this.isScriptNode(node) && node.source === undefined) continue;
      const filePath = this.getFilePathWithCollisionMap(node, batchPathToGuid, pathMap);
      const dirPath = path.dirname(filePath);
      writes.push({ node, filePath, dirPath });
      dirsToCreate.add(dirPath);
      batchPathToGuid.set(path.resolve(filePath), node.guid);
    }

    // Batch create all directories first (sorted by depth to ensure parents exist)
    const sortedDirs = Array.from(dirsToCreate).sort(
      (a, b) => a.length - b.length,
    );
    for (const dir of sortedDirs) {
      this.ensureDirectory(dir);
    }

    for (const { node, filePath } of writes) {
      try {
        this.writeSyncableNode(node, filePath);

        this.fileMappings.set(node.guid, {
          guid: node.guid,
          filePath: filePath,
          className: node.className,
        });
        this.pathToGuid.set(path.resolve(filePath), node.guid);

        log.script(this.getRelativePath(filePath), "updated");
      } catch (error) {
        log.error(`Failed to write syncable ${filePath}:`, error);
      }
    }
  }

  /**
   * Write or update a single syncable node
   */
  public writeScript(node: TreeNode, allNodes?: Map<string, TreeNode>): string | null {
    if (!this.isSyncableNode(node)) {
      return null;
    }

    // Allow empty-string sources on new scripts; only skip if source is truly undefined
    if (this.isScriptNode(node) && node.source === undefined) {
      return null;
    }

    const pathMap = new Map<string, TreeNode>();
    if (allNodes) {
      for (const n of allNodes.values()) {
        pathMap.set(n.path.join("/"), n);
      }
    }

    const existingMapping = this.fileMappings.get(node.guid);
    const filePath = this.getFilePathWithCollisionMap(node, undefined, pathMap);
    const dirPath = path.dirname(filePath);
    const previousPath = existingMapping?.filePath;
    const pathChanged = previousPath && previousPath !== filePath;

    // Ensure directory exists
    this.ensureDirectory(dirPath);

    // Write file
    try {
      this.writeSyncableNode(node, filePath);

      // If the target path changed for this guid, remove the old file to avoid stale copies
      if (pathChanged && previousPath && fs.existsSync(previousPath)) {
        fs.unlinkSync(previousPath);
        this.pathToGuid.delete(path.resolve(previousPath));
        this.cleanupParentsIfEmpty(path.dirname(previousPath));
      }

      // Update mapping and reverse index
      this.fileMappings.set(node.guid, {
        guid: node.guid,
        filePath: filePath,
        className: node.className,
      });
      this.pathToGuid.set(path.resolve(filePath), node.guid);

      log.script(this.getRelativePath(filePath), "updated");
      return filePath;
    } catch (error) {
      log.error(`Failed to write syncable ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Delete a script file
   */
  public deleteScript(guid: string): boolean {
    const mapping = this.fileMappings.get(guid);
    if (!mapping) {
      return false;
    }

    try {
      const deleted = this.deleteFilePathInternal(mapping.filePath);
      this.fileMappings.delete(guid);
      this.pathToGuid.delete(path.resolve(mapping.filePath));
      return deleted;
    } catch (error) {
      log.error(`Failed to delete script ${mapping.filePath}:`, error);
      return false;
    }
  }

  /**
   * Delete a script file by path even if the mapping is missing
   */
  public deleteFilePath(filePath: string): boolean {
    try {
      return this.deleteFilePathInternal(filePath);
    } catch (error) {
      log.error(`Failed to delete script ${filePath}:`, error);
      return false;
    }
  }

  /**
   * Get the filesystem path for a node
   */
  public getFilePath(node: TreeNode, allNodes?: Map<string, TreeNode>): string {
    const pathMap = new Map<string, TreeNode>();
    if (allNodes) {
      for (const n of allNodes.values()) {
        pathMap.set(n.path.join("/"), n);
      }
    }
    return this.getFilePathWithCollisionMap(node, undefined, pathMap);
  }

  /**
   * Get the filesystem path for a node, with optional collision map for batch operations
   */
  private getFilePathWithCollisionMap(
    node: TreeNode,
    batchCollisionMap?: Map<string, string>,
    pathMap?: Map<string, TreeNode>,
  ): string {
    const isFile = this.isNodeFile(node);
    let desiredPath: string;

    if (isFile) {
      const fileName = this.getScriptFileName(node);
      desiredPath = path.join(this.getDirectoryPath(node, pathMap), fileName);
    } else {
      desiredPath = path.join(this.getDirectoryPath(node, pathMap), "init.json");
    }

    const normalizedDesiredPath = path.resolve(desiredPath);

    // Check for collisions in both the persistent mappings and the batch collision map
    const existingGuid = this.findGuidByFilePath(desiredPath);
    const batchGuid = batchCollisionMap?.get(normalizedDesiredPath);
    const collision = existingGuid || batchGuid;

    // If another GUID already owns this path, disambiguate using a stable suffix
    if (collision && collision !== node.guid) {
      const uniqueName = this.getDisambiguatedScriptFileName(node);
      if (isFile) {
        desiredPath = path.join(this.getDirectoryPath(node, pathMap), uniqueName);
      } else {
        desiredPath = path.join(
          this.getDirectoryPath(node, pathMap) + `__${node.guid.slice(0, 8)}`,
          "init.json",
        );
      }
    }

    return desiredPath;
  }

  /**
   * Get the appropriate filename for a script node
   */
  private getScriptFileName(node: TreeNode): string {
    const suffix = this.getSuffixForClass(node.className);
    if (suffix) {
      return `${this.sanitizeName(node.name)}${suffix}`;
    }

    const ext = config.scriptExtension;
    let name = this.sanitizeName(node.name);

    const existingMapping = this.fileMappings.get(node.guid);
    let existingSuffix = "";
    if (existingMapping) {
      const oldFileName = path.basename(existingMapping.filePath);
      const base = oldFileName.replace(/\.luau$/i, "").replace(/\.lua$/i, "");
      const match = base.match(/\.(server|client|module|legacy|local)$/);
      if (match) {
        existingSuffix = match[0];
      }
    }

    if (existingSuffix) {
      name = `${name}${existingSuffix}`;
    } else {
      if (node.className === "Script") {
        name = `${name}.server`;
      } else if (node.className === "LocalScript") {
        name = `${name}.client`;
      } else if (node.className === "ModuleScript") {
        if (config.suffixModuleScripts) {
          name = `${name}.module`;
        }
      }
    }

    return `${name}${ext}`;
  }

  private getDisambiguatedScriptFileName(node: TreeNode): string {
    const baseFileName = this.getScriptFileName(node);
    const suffix = this.getSuffixForClass(node.className);
    const guidSuffix = `__${node.guid.slice(0, 8)}`;

    if (suffix) {
      const stem = baseFileName.slice(0, -suffix.length);
      return `${stem}${guidSuffix}${suffix}`;
    }

    const ext = config.scriptExtension;
    if (!baseFileName.endsWith(ext)) {
      return `${baseFileName}${guidSuffix}`;
    }

    const stem = baseFileName.slice(0, -ext.length);
    const classSuffixMatch = stem.match(/(\.(?:server|client|module|legacy|local))$/);
    if (classSuffixMatch) {
      const classSuffix = classSuffixMatch[1];
      const rawName = stem.slice(0, -classSuffix.length);
      return `${rawName}${guidSuffix}${classSuffix}${ext}`;
    }

    return `${stem}${guidSuffix}${ext}`;
  }

  /**
   * Sanitize a name for use in filesystem
   */
  private sanitizeName(name: string): string {
    // Replace invalid filesystem characters
    return name.replace(/[<>:"|?*]/g, "_");
  }

  /**
   * Check if a node is a script
   */
  private isScriptNode(node: TreeNode): boolean {
    return (
      node.className === "Script" ||
      node.className === "LocalScript" ||
      node.className === "ModuleScript"
    );
  }

  private isSyncableNode(node: TreeNode): boolean {
    if (this.isScriptNode(node)) return true;
    const classNameLower = node.className.toLowerCase();
    return Object.values(config.extraClassSuffixes).some((val) => val.toLowerCase() === classNameLower);
  }

  private isNodeFile(node: TreeNode): boolean {
    if (this.isScriptNode(node)) return true;
    return node.children.size === 0;
  }

  private getSuffixForClass(className: string): string | undefined {
    const classNameLower = className.toLowerCase();
    for (const [suffix, val] of Object.entries(config.extraClassSuffixes)) {
      if (val.toLowerCase() === classNameLower) {
        return suffix;
      }
    }
    return undefined;
  }


  private getDirectoryPath(
    node: TreeNode,
    pathMap?: Map<string, TreeNode>,
  ): string {
    const dirSegments = this.isNodeFile(node)
      ? node.path.slice(0, Math.max(0, node.path.length - 1))
      : node.path;

    const parts: string[] = [];
    const currentPath: string[] = [];

    for (const segment of dirSegments) {
      currentPath.push(segment);
      const pathStr = currentPath.join("/");
      const matchedNode = pathMap?.get(pathStr);
      let suffix = "";
      if (matchedNode) {
        const classSuffix = this.getSuffixForClass(matchedNode.className);
        if (classSuffix && matchedNode.children?.size > 0) {
          suffix = classSuffix;
        }
      }
      parts.push(this.sanitizeName(segment) + suffix);
    }

    return path.join(this.baseDir, ...parts);
  }

  private writeSyncableNode(node: TreeNode, filePath: string): void {
    if (this.isScriptNode(node)) {
      fs.writeFileSync(filePath, node.source || "", "utf-8");
    } else {
      const data = {
        properties: node.properties || {},
        attributes: node.attributes || {},
        tags: node.tags || [],
      };
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    }
  }

  /**
   * Ensure a directory exists
   */
  private ensureDirectory(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  /**
   * Internal helper to remove a file and clean mapping
   */
  private deleteFilePathInternal(filePath: string): boolean {
    const normalized = path.resolve(filePath);

    if (fs.existsSync(normalized)) {
      fs.unlinkSync(normalized);
      log.script(this.getRelativePath(normalized), "deleted");
      this.cleanupParentsIfEmpty(path.dirname(normalized));
    }

    const guid = this.pathToGuid.get(normalized);
    if (guid) {
      this.fileMappings.delete(guid);
      this.pathToGuid.delete(normalized);
    }

    return true;
  }

  /**
   * Find the GUID that currently owns a file path, if any
   */
  private findGuidByFilePath(filePath: string): string | undefined {
    const normalized = path.resolve(filePath);
    for (const [guid, mapping] of this.fileMappings) {
      if (path.resolve(mapping.filePath) === normalized) {
        return guid;
      }
    }
    return undefined;
  }

  /**
   * Get path relative to base directory
   */
  private getRelativePath(filePath: string): string {
    return path.relative(this.baseDir, filePath);
  }

  /**
   * Get file mapping by GUID
   */
  public getMapping(guid: string): FileMapping | undefined {
    return this.fileMappings.get(guid);
  }

  /**
   * Get GUID by file path
   */
  public getGuidByPath(filePath: string): string | undefined {
    const resolved = path.resolve(filePath);
    const guid = this.pathToGuid.get(resolved);
    if (guid) return guid;

    const initJsonPath = path.resolve(filePath, "init.json");
    const initGuid = this.pathToGuid.get(initJsonPath);
    if (initGuid) return initGuid;

    if (path.basename(resolved).toLowerCase() === "init.json") {
      const parentDir = path.dirname(resolved);
      const parentGuid = this.pathToGuid.get(parentDir);
      if (parentGuid) return parentGuid;
    }

    return undefined;
  }

  /**
   * Get all file mappings
   */
  public getAllMappings(): Map<string, FileMapping> {
    return this.fileMappings;
  }

  /**
   * Register a file mapping without writing to disk
   */
  public registerMapping(guid: string, filePath: string, className: string): void {
    this.fileMappings.set(guid, {
      guid,
      filePath,
      className,
    });
    this.pathToGuid.set(path.resolve(filePath), guid);
  }

  /**
   * Delete a file mapping in memory
   */
  public deleteMapping(guid: string): void {
    const mapping = this.fileMappings.get(guid);
    if (mapping) {
      this.fileMappings.delete(guid);
      this.pathToGuid.delete(path.resolve(mapping.filePath));
    }
  }

  /**
   * Get the base directory
   */
  public getBaseDir(): string {
    return this.baseDir;
  }

  /**
   * Clean up empty directories
   */
  public cleanupEmptyDirectories(): void {
    this.cleanupEmptyDirsRecursive(this.baseDir);
  }

  private cleanupEmptyDirsRecursive(dirPath: string): boolean {
    if (!fs.existsSync(dirPath)) {
      return false;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    // Recursively check subdirectories
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subPath = path.join(dirPath, entry.name);
        this.cleanupEmptyDirsRecursive(subPath);
      }
    }

    // Check if directory is now empty
    const updatedEntries = fs.readdirSync(dirPath);
    if (updatedEntries.length === 0 && dirPath !== this.baseDir) {
      fs.rmdirSync(dirPath);
      return true;
    }

    return false;
  }

  /**
   * Walk up from a directory and remove empty parents until baseDir is reached.
   */
  private cleanupParentsIfEmpty(startDir: string): void {
    let current = path.resolve(startDir);
    const root = this.baseDir;

    while (current.startsWith(root)) {
      if (current === root) {
        break;
      }

      const entries = fs.existsSync(current)
        ? fs.readdirSync(current, { withFileTypes: true })
        : [];

      if (entries.length === 0) {
        fs.rmdirSync(current);
        current = path.dirname(current);
      } else {
        break;
      }
    }
  }
}
