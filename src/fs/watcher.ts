import * as chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";
import { log } from "../util/log.js";
import { config } from "../config.js";

export type FileChangeHandler = (
  eventType: "add" | "change" | "unlink",
  filePath: string,
  source?: string,
  extraData?: { properties?: any; attributes?: any; tags?: any },
) => void;

/**
 * Watches the filesystem for changes and notifies handlers
 */
export class FileWatcher {
  private watcher: chokidar.FSWatcher | null = null;
  private changeHandler: FileChangeHandler | null = null;
  private debounceTimers: Map<string, NodeJS.Timeout> = new Map();
  private suppressedUntil: Map<string, number> = new Map();
  private expectedContents: Map<string, string> = new Map();

  /**
   * Start watching a directory
   */
  public watch(directory: string): void {
    if (this.watcher) {
      log.warn("Watcher already running, stopping it first");
      this.stop();
    }

    log.info(`Starting file watcher on: ${directory}`);

    this.watcher = chokidar.watch(directory, {
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 100,
        pollInterval: 50,
      },
    });

    this.watcher.on("change", (filePath) => {
      this.handleFileEvent("change", filePath);
    });

    this.watcher.on("add", (filePath) => {
      this.handleFileEvent("add", filePath);
    });

    this.watcher.on("unlink", (filePath) => {
      this.handleFileUnlink(filePath);
    });

    this.watcher.on("addDir", (dirPath) => {
      this.handleDirectoryEvent("add", dirPath);
    });

    this.watcher.on("unlinkDir", (dirPath) => {
      this.handleDirectoryUnlink(dirPath);
    });

    this.watcher.on("error", (error) => {
      log.error("File watcher error:", error);
    });

    this.watcher.on("ready", () => {
      log.success("File watcher ready");
    });
  }

  /**
   * Handle a file event (add or change) with debouncing
   */
  private handleFileEvent(eventType: "add" | "change", filePath: string): void {
    // Clear existing timer for this file
    const existingTimer = this.debounceTimers.get(filePath);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // Set new debounced timer
    const timer = setTimeout(() => {
      this.processFileEvent(eventType, filePath);
      this.debounceTimers.delete(filePath);
    }, config.fileWatchDebounce);

    this.debounceTimers.set(filePath, timer);
  }

  /**
   * Process a file event after debouncing
   */
  private processFileEvent(eventType: "add" | "change", filePath: string): void {
    const normalizedPath = path.resolve(filePath);

    // Only process script or extra class files
    if (!this.isScriptFile(filePath)) {
      return;
    }

    try {
      if (!fs.existsSync(normalizedPath)) {
        return;
      }

      let source: string | undefined = undefined;
      let extraData: { properties?: any; attributes?: any; tags?: any } | undefined = undefined;

      const isScript = filePath.endsWith(".lua") || filePath.endsWith(".luau");
      if (isScript) {
        source = fs.readFileSync(filePath, "utf-8");
      } else {
        const raw = fs.readFileSync(filePath, "utf-8");
        try {
          extraData = JSON.parse(raw);
        } catch (error) {
          log.warn(`Failed to parse JSON file ${filePath}:`, error);
        }
      }

      // Skip if this change was produced by a Studio-originated write.
      const expectedSource = this.expectedContents.get(normalizedPath);
      if (expectedSource !== undefined) {
        const matches = isScript ? source === expectedSource : fs.readFileSync(filePath, "utf-8") === expectedSource;
        if (matches) {
          log.debug(
            `File ${eventType} suppressed (Studio-originated content match): ${normalizedPath}`,
          );
          this.suppressedUntil.delete(normalizedPath);
          this.expectedContents.delete(normalizedPath);
          return;
        }

        // Expected content mismatched, so this is an external change. Clear stale suppression.
        this.suppressedUntil.delete(normalizedPath);
        this.expectedContents.delete(normalizedPath);
      } else {
        // No expected content, but check if we're still within a suppression window
        const now = Date.now();
        const suppressUntil = this.suppressedUntil.get(normalizedPath);
        if (suppressUntil && suppressUntil > now) {
          log.debug(
            `File ${eventType} suppressed (Studio-originated): ${normalizedPath}`,
          );
          return;
        }

        // Clear the suppression if it's expired
        if (suppressUntil && suppressUntil <= now) {
          this.suppressedUntil.delete(normalizedPath);
          this.expectedContents.delete(normalizedPath);
        }
      }

      log.debug(`File ${eventType}d: ${normalizedPath}`);

      if (this.changeHandler) {
        this.changeHandler(eventType, normalizedPath, source, extraData);
      }
    } catch (error) {
      log.error(`Failed to read ${eventType}d file ${filePath}:`, error);
    }
  }

  /**
   * Handle an unlink (deletion) event immediately
   */
  private handleFileUnlink(filePath: string): void {
    // Clear any pending add/change timers for this path
    const existingTimer = this.debounceTimers.get(filePath);
    if (existingTimer) {
      clearTimeout(existingTimer);
      this.debounceTimers.delete(filePath);
    }

    const normalizedPath = path.resolve(filePath);

    if (!this.isScriptFile(filePath)) {
      return;
    }

    // Check suppression for unlink
    const now = Date.now();
    const suppressUntil = this.suppressedUntil.get(normalizedPath);
    if (suppressUntil && suppressUntil > now) {
      log.debug(
        `File unlink suppressed (Studio-originated): ${normalizedPath}`,
      );
      this.suppressedUntil.delete(normalizedPath);
      this.expectedContents.delete(normalizedPath);
      return;
    }

    if (suppressUntil && suppressUntil <= now) {
      this.suppressedUntil.delete(normalizedPath);
      this.expectedContents.delete(normalizedPath);
    }

    log.debug(`File unlinked: ${normalizedPath}`);

    if (this.changeHandler) {
      this.changeHandler("unlink", normalizedPath);
    }
  }

  /**
   * Check if a file is a script file
   */
  private handleDirectoryEvent(eventType: "add", dirPath: string): void {
    const lower = dirPath.toLowerCase();
    let isExtraClassDir = false;
    for (const suffix of Object.keys(config.extraClassSuffixes)) {
      if (lower.endsWith(suffix.toLowerCase())) {
        isExtraClassDir = true;
        break;
      }
    }

    if (!isExtraClassDir) return;

    const existingTimer = this.debounceTimers.get(dirPath);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    const timer = setTimeout(() => {
      this.processDirectoryEvent(eventType, dirPath);
      this.debounceTimers.delete(dirPath);
    }, config.fileWatchDebounce);

    this.debounceTimers.set(dirPath, timer);
  }

  private processDirectoryEvent(eventType: "add", dirPath: string): void {
    const normalizedPath = path.resolve(dirPath);
    const initJsonPath = path.join(normalizedPath, "init.json");
    let extraData: any = undefined;
    if (fs.existsSync(initJsonPath)) {
      try {
        extraData = JSON.parse(fs.readFileSync(initJsonPath, "utf-8"));
      } catch (error) {
        log.warn(`Failed to parse init.json in directory ${dirPath}:`, error);
      }
    }

    log.debug(`Directory ${eventType}d: ${normalizedPath}`);

    if (this.changeHandler) {
      this.changeHandler(eventType, normalizedPath, undefined, extraData);
    }
  }

  private handleDirectoryUnlink(dirPath: string): void {
    const existingTimer = this.debounceTimers.get(dirPath);
    if (existingTimer) {
      clearTimeout(existingTimer);
      this.debounceTimers.delete(dirPath);
    }

    const normalizedPath = path.resolve(dirPath);

    let isExtraClassDir = false;
    const lower = dirPath.toLowerCase();
    for (const suffix of Object.keys(config.extraClassSuffixes)) {
      if (lower.endsWith(suffix.toLowerCase())) {
        isExtraClassDir = true;
        break;
      }
    }

    if (!isExtraClassDir) return;

    log.debug(`Directory unlinked: ${normalizedPath}`);

    if (this.changeHandler) {
      this.changeHandler("unlink", normalizedPath);
    }
  }

  private isScriptFile(filePath: string): boolean {
    const lower = filePath.toLowerCase();
    if (lower.endsWith(".lua") || lower.endsWith(".luau")) {
      return true;
    }
    for (const suffix of Object.keys(config.extraClassSuffixes)) {
      if (lower.endsWith(suffix.toLowerCase())) {
        return true;
      }
    }
    if (path.basename(lower) === "init.json") {
      return true;
    }
    return false;
  }

  /**
   * Register a handler for file changes
   */
  public onChange(handler: FileChangeHandler): void {
    this.changeHandler = handler;
  }

  /**
   * Suppress the next change event for a specific file path (normalized)
   */
  public suppressNextChange(filePath: string, expectedSource?: string): void {
    const normalizedPath = path.resolve(filePath);
    const until = Date.now() + 1000; // 1s window to absorb duplicate events
    this.suppressedUntil.set(normalizedPath, until);

    if (expectedSource !== undefined) {
      this.expectedContents.set(normalizedPath, expectedSource);
    } else {
      this.expectedContents.delete(normalizedPath);
    }
  }

  /**
   * Stop watching
   */
  public async stop(): Promise<void> {
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
      log.info("File watcher stopped");
    }

    // Clear all pending timers
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();
    this.suppressedUntil.clear();
    this.expectedContents.clear();
  }
}
