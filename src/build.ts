import path from "node:path";
import fs from "node:fs";
import { IPCServer } from "./ipc/server.js";
import { config } from "./config.js";
import { log } from "./util/log.js";
import { SnapshotBuilder } from "./snapshot.js";
import { RojoSnapshotBuilder } from "./snapshot/rojo/index.js";
import type { InstanceData } from "./ipc/messages.js";
import {
  applySourcemapProperties,
  buildInstancesFromSourcemap,
  loadSourcemapPropertyIndex,
} from "./sourcemap/propertyLoader.js";

interface BuildOptions {
  syncDir?: string;
  rojoMode?: boolean;
  rojoProjectFile?: string;
  applySourcemapProperties?: boolean;
  useSourcemapAsSource?: boolean;
  sourcemapPath?: string;
  destructive?: boolean;
}

export class BuildCommand {
  private ipc: IPCServer;
  private syncDir: string;
  private rojoMode: boolean;
  private rojoProjectFile?: string;
  private applySourcemapProperties: boolean;
  private useSourcemapAsSource: boolean;
  private sourcemapPath: string;
  private destructive: boolean;

  constructor(options: BuildOptions = {}) {
    this.syncDir = path.resolve(options.syncDir ?? config.syncDir);
    this.rojoMode = Boolean(options.rojoMode);
    this.rojoProjectFile = options.rojoProjectFile;
    this.applySourcemapProperties = options.applySourcemapProperties !== false;
    this.useSourcemapAsSource = options.useSourcemapAsSource === true;
    this.sourcemapPath = path.resolve(
      options.sourcemapPath ?? config.sourcemapPath,
    );
    this.destructive = options.destructive === true;
    this.ipc = new IPCServer(config.port, undefined, {
      requestSnapshotOnConnect: false,
    });
  }

  public async run(): Promise<void> {
    const builder = this.rojoMode
      ? new RojoSnapshotBuilder({
          projectFile: this.rojoProjectFile,
          cwd: process.cwd(),
          destPrefix: [],
        })
      : new SnapshotBuilder({
          sourceDir: this.syncDir,
          destPrefix: [],
          skipSymlinks: true,
        });

    if (this.rojoMode) {
      log.info(
        `Preparing Rojo compatibility build from ${
          this.rojoProjectFile ?? "default.project.json"
        }`,
      );
    } else {
      log.info(`Preparing build snapshot from ${this.syncDir}`);
    }
    let instances: InstanceData[] = [];

    if (!this.rojoMode && this.useSourcemapAsSource) {
      const built = buildInstancesFromSourcemap(this.sourcemapPath);
      if (!built) {
        log.warn(
          "Falling back to filesystem build because sourcemap import failed.",
        );
      } else {
        instances = built;
      }
    }

    if (instances.length === 0) {
      try {
        instances = await builder.build();
      } catch (error) {
        log.error(`${error}`);
        return;
      }
    }

    if (
      !this.rojoMode &&
      this.applySourcemapProperties &&
      !this.useSourcemapAsSource
    ) {
      const index = loadSourcemapPropertyIndex(this.sourcemapPath);
      const applied = applySourcemapProperties(instances, index);
      if (applied <= 0) {
        if (!index && fs.existsSync(this.sourcemapPath)) {
          log.warn(
            "Sourcemap present but could not be parsed; continuing without properties.",
          );
        } else {
          log.info(
            "No packed properties found in sourcemap; continuing with script/folder snapshot only.",
          );
        }
      }
    }

    log.info(`Waiting for Studio to connect on port ${config.port}...`);

    await new Promise<void>((resolve) => {
      let ackTimeout: NodeJS.Timeout | null = null;
      const cleanClose = () => {
        if (ackTimeout) {
          clearTimeout(ackTimeout);
          ackTimeout = null;
        }
        this.ipc.close();
        resolve();
      };

      this.ipc.onMessage((message) => {
        if (message.type === "applied" && message.operation === "build") {
          log.success(
            `Build applied successfully: ${message.created ?? 0} created, ${message.updated ?? 0} updated`,
          );
          cleanClose();
        } else if (message.type === "rejected" && message.operation === "build") {
          log.warn(`Build rejected: ${message.reason ?? "unknown reason"}`);
          cleanClose();
        }
      });

      this.ipc.onConnection(() => {
        log.info("Studio connected. Waiting for handshake...");
      });

      this.ipc.onHandshake(() => {
        log.info("Handshake complete. Sending build snapshot...");
        this.ipc.send({
          type: "buildSnapshot",
          data: instances,
          destructive: this.destructive,
          reason: this.destructive ? "Destructive build" : "Build command",
        });
        log.success(`Sent ${instances.length} instances`);

        const remoteVersion = this.ipc.getRemoteProtocolVersion();
        if (remoteVersion !== null && remoteVersion >= 1) {
          log.info("Waiting for Studio to apply build snapshot...");
          ackTimeout = setTimeout(() => {
            log.warn("Timed out waiting for Studio build ack.");
            cleanClose();
          }, 60000);
        } else {
          // Fall back to simple delay for backwards compatibility
          setTimeout(cleanClose, 200);
        }
      });
    });
  }
}
