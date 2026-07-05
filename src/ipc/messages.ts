/**
 * Types for communication protocol between Studio and Daemon
 */

export type InstanceClassName =
  | "Script"
  | "LocalScript"
  | "ModuleScript"
  | "Folder"
  | "Model"
  | "Part"
  | "MeshPart"
  | "Tool"
  | "Configuration"
  | string; // Allow any Roblox class

/**
 * Represents a single instance in the DataModel
 */
export interface InstanceData {
  guid: string;
  className: InstanceClassName;
  name: string;
  path: string[]; // ["ReplicatedStorage", "Modules", "Foo"]
  parentGuid?: string | null; // parent instance GUID
  source?: string; // Only present for Script/LocalScript/ModuleScript
  properties?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
  tags?: string[];
}

export interface SnapshotRequestOptions {
  includeProperties?: boolean;
  scriptsAndDescendantsOnly?: boolean;
}

/**
 * Messages from Studio → Daemon
 */
export type StudioPayloadMessage =
  | FullSnapshotMessage
  | InstanceUpdatedMessage
  | ScriptChangedMessage
  | DeletedMessage
  | PingMessage
  | ClientDisconnect
  | PushConfigMessage
  | HandshakeMessageStudio
  | AppliedMessage
  | RejectedMessage;

export interface BatchMessage {
  type: "batch";
  messages: StudioPayloadMessage[];
}

export type StudioMessage = StudioPayloadMessage | BatchMessage;

export interface FullSnapshotMessage {
  type: "fullSnapshot";
  data: InstanceData[];
}

export interface InstanceUpdatedMessage {
  type: "instanceUpdated";
  data: InstanceData;
}

export interface ScriptChangedMessage {
  type: "scriptChanged";
  data: {
    guid: string;
    path: string[];
    className: InstanceClassName;
    source: string;
  };
}

export interface DeletedMessage {
  type: "deleted";
  data: {
    guid: string;
  };
}

export interface PingMessage {
  type: "ping";
}

export interface ClientDisconnect {
  type: "clientDisconnect";
}

export interface PushConfigMessage {
  type: "pushConfig";
  config: PushConfig;
}

/**
 * Studio → Daemon: acknowledges that a one-shot operation (build/push/pack)
 * finished applying. Makes the daemon deterministic instead of racing a timer.
 */
export interface AppliedMessage {
  type: "applied";
  /** Correlates with the operation the daemon initiated. */
  operation?: "build" | "push" | "pack" | "instanceUpdated" | string;
  created?: number;
  updated?: number;
  message?: string;
}

/**
 * Studio → Daemon: the plugin declined to apply an operation (e.g. the user
 * cancelled a destructive/large change at the confirmation prompt). The daemon
 * should treat this as a clean no-op, not an error.
 */
export interface RejectedMessage {
  type: "rejected";
  operation?: "build" | "push" | "pack" | string;
  reason?: string;
}

export interface HandshakeAckMessage {
  type: "handshakeAck";
  extraClassSuffixes?: Record<string, string>;
  /** Integer wire-protocol version of the daemon (see ipc/protocol.ts). */
  protocolVersion?: number;
  /** Human-readable daemon version (package.json), for display only. */
  daemonVersion?: string;
  /** Optional transport capabilities the daemon supports. */
  capabilities?: { msgpack?: boolean; compression?: boolean };
  /** Effective initial-sync priority the daemon will use on connect. */
  initialSyncPriority?: "studio" | "filesystem" | "none";
}

export interface HandshakeMessageStudio {
  type: "handshakeStudio";
  /** Integer wire-protocol version of the plugin (see AzulService). */
  protocolVersion?: number;
  /** Human-readable plugin version (AzulService.VERSION), for display only. */
  pluginVersion?: number | string;
  /** Optional transport capabilities the plugin supports. */
  capabilities?: { msgpack?: boolean; compression?: boolean };
}

/**
 * Messages from Daemon → Studio
 */
export type DaemonMessage =
  | PatchScriptMessage
  | RequestSnapshotMessage
  | PongMessage
  | DaemonDisconnectMessage
  | ErrorMessage
  | BuildSnapshotMessage
  | RequestPushConfigMessage
  | PushSnapshotMessage
  | HandshakeAckMessage
  | DeletedMessage
  | InstanceUpdatedMessage;

export interface PatchScriptMessage {
  type: "patchScript";
  guid: string;
  source: string;
}

export interface RequestSnapshotMessage {
  type: "requestSnapshot";
  options?: SnapshotRequestOptions;
}

export interface PongMessage {
  type: "pong";
}

export interface DaemonDisconnectMessage {
  type: "daemonDisconnect";
}

export interface ErrorMessage {
  type: "error";
  message: string;
}

export interface BuildSnapshotMessage {
  type: "buildSnapshot";
  data: InstanceData[];
  destructive?: boolean;
  /** Human-readable reason shown in the plugin confirmation prompt. */
  reason?: string;
}

export interface RequestPushConfigMessage {
  type: "requestPushConfig";
}

export interface PushSnapshotMessage {
  type: "pushSnapshot";
  mappings: PushSnapshotMapping[];
}

export interface PushSnapshotMapping {
  destination: string[];
  destructive?: boolean;
  instances: InstanceData[];
}

export interface PushConfig {
  mappings: PushConfigMapping[];
  port?: number;
  debugMode?: boolean;
  deleteOrphansOnConnect?: boolean;
}

export interface PushConfigMapping {
  source: string;
  destination: string[];
  destructive?: boolean;
  rojoMode?: boolean;
  fromSourcemap?: string;
}
