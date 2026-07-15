import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { log } from "./util/log.js";

/**
 * Configuration for the sync daemon
 */

export interface AzulConfig {
  //////// Daemon Settings ////////

  /** WebSocket server port */
  port: number;

  /** Enable debug mode */
  debugMode: boolean;

  //////// Sync Settings ////////

  /** Directory where synced files will be stored (relative to project root) */
  syncDir: string;

  /** Path where sourcemap.json is written (relative to project root) */
  sourcemapPath: string;

  /** File extension for scripts */
  scriptExtension: string;

  /** Debounce delay for file watching (ms) */
  fileWatchDebounce: number;

  /** Delete unmapped files in syncDir after a new connection/full snapshot */
  deleteOrphansOnConnect: boolean;

  /** Suffix ModuleScript names with ".module"? */
  suffixModuleScripts: boolean;

  /** Check for Daemon updates? (Uses NPM API) */
  checkForUpdates: boolean;

  /** Suffixes and class name mappings for specific non-script instances */
  extraClassSuffixes: Record<string, string>;

  /**
   * Which side wins the INITIAL reconcile when the plugin connects.
   * - "studio":     Studio's snapshot overwrites the filesystem (default; today's behavior).
   * - "filesystem": the local filesystem is reconciled INTO Studio on connect.
   * - "none":       connect and track live only; no initial overwrite in either direction.
   */
  initialSyncPriority: "studio" | "filesystem" | "none";
}

export const defaultConfig: Readonly<AzulConfig> = {
  port: 8080,
  debugMode: false,
  syncDir: "./sync",
  sourcemapPath: "./sourcemap.json",
  scriptExtension: ".luau",
  fileWatchDebounce: 100,
  deleteOrphansOnConnect: true,
  suffixModuleScripts: false,
  checkForUpdates: true,
  extraClassSuffixes: {
    ".remoteevent": "RemoteEvent",
    ".remotefunction": "RemoteFunction",
    ".bindableevent": "BindableEvent",
    ".bindablefunction": "BindableFunction",
  },
  initialSyncPriority: "studio",
};

export const config: AzulConfig = { ...defaultConfig };

let initialized = false;

export function _resetConfig(): void {
  initialized = false;
  Object.assign(config, defaultConfig);
}

export function getUserConfigPath(): string {
  const configRoot = getPlatformConfigRoot();
  return path.join(configRoot, "azul", "config.json");
}

export function initializeConfig(): void {
  if (initialized) {
    return;
  }

  initialized = true;

  const configPath = getUserConfigPath();
  ensureUserConfigExists(configPath);

  const userConfig = readUserConfig(configPath);
  if (!userConfig) {
    return;
  }

  addMissingFields(userConfig);

  Object.assign(config, userConfig);

  // Load project-local configuration if present
  const localConfigPath = path.resolve(process.cwd(), "azul.json");
  if (fs.existsSync(localConfigPath)) {
    try {
      const raw = fs.readFileSync(localConfigPath, "utf8");
      const parsed = JSON.parse(raw);
      if (isRecord(parsed)) {
        const sanitized = sanitizeConfig(parsed);
        Object.assign(config, sanitized);
        log.debug(`Loaded local project config from: ${localConfigPath}`);
      }
    } catch (error) {
      log.warn(`Failed to read local project config: ${error}`);
    }
  }
}

function getPlatformConfigRoot(): string {
  if (process.platform === "win32") {
    return process.env.APPDATA ?? path.join(os.homedir(), "AppData", "Roaming");
  }

  if (process.platform === "darwin") {
    return path.join(os.homedir(), "Library", "Application Support");
  }

  return process.env.XDG_CONFIG_HOME ?? path.join(os.homedir(), ".config");
}

function ensureUserConfigExists(configPath: string): void {
  try {
    const configDir = path.dirname(configPath);
    fs.mkdirSync(configDir, { recursive: true });

    if (!fs.existsSync(configPath)) {
      fs.writeFileSync(
        configPath,
        `${JSON.stringify(defaultConfig, null, 2)}\n`,
        "utf8",
      );
    }
  } catch (error) {
    log.warn("Failed to initialize Azul user config file:", error);
  }
}

function addMissingFields(target: Partial<AzulConfig>): void {
  Object.assign(target, { ...defaultConfig, ...target });

  try {
    const configPath = getUserConfigPath();
    fs.writeFileSync(
      configPath,
      `${JSON.stringify(target, null, 2)}\n`,
      "utf8",
    );
  } catch (error) {
    log.warn("Failed to add missing fields to Azul user config:", error);
  }
}

function readUserConfig(configPath: string): Partial<AzulConfig> | null {
  try {
    const raw = fs.readFileSync(configPath, "utf8");
    const parsed = JSON.parse(raw);

    if (!isRecord(parsed)) {
      return null;
    }

    return sanitizeConfig(parsed);
  } catch (error) {
    log.warn("Failed to read Azul user config file:", error);
    return null;
  }
}

function sanitizeConfig(input: Record<string, unknown>): Partial<AzulConfig> {
  const sanitized: Partial<AzulConfig> = {};

  if (isPositiveInteger(input.port)) {
    sanitized.port = input.port;
  }

  if (typeof input.debugMode === "boolean") {
    sanitized.debugMode = input.debugMode;
  }

  if (isNonEmptyString(input.syncDir)) {
    sanitized.syncDir = input.syncDir;
  }

  if (isNonEmptyString(input.sourcemapPath)) {
    sanitized.sourcemapPath = input.sourcemapPath;
  }

  if (isNonEmptyString(input.scriptExtension)) {
    sanitized.scriptExtension = input.scriptExtension;
  }

  if (isPositiveInteger(input.fileWatchDebounce)) {
    sanitized.fileWatchDebounce = input.fileWatchDebounce;
  }

  if (typeof input.deleteOrphansOnConnect === "boolean") {
    sanitized.deleteOrphansOnConnect = input.deleteOrphansOnConnect;
  }

  if (typeof input.suffixModuleScripts === "boolean") {
    sanitized.suffixModuleScripts = input.suffixModuleScripts;
  }

  if (typeof input.checkForUpdates === "boolean") {
    sanitized.checkForUpdates = input.checkForUpdates;
  }

  if (
    input.extraClassSuffixes &&
    typeof input.extraClassSuffixes === "object" &&
    !Array.isArray(input.extraClassSuffixes)
  ) {
    const suffixes: Record<string, string> = {};
    for (const [key, val] of Object.entries(input.extraClassSuffixes)) {
      if (typeof key === "string" && typeof val === "string") {
        suffixes[key] = val;
      }
    }
    sanitized.extraClassSuffixes = suffixes;
  }

  if (
    input.initialSyncPriority === "studio" ||
    input.initialSyncPriority === "filesystem" ||
    input.initialSyncPriority === "none"
  ) {
    sanitized.initialSyncPriority = input.initialSyncPriority;
  }

  return sanitized;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isPositiveInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value > 0;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
