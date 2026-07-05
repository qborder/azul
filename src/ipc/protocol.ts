/**
 * Wire-protocol versioning and capability negotiation shared across all IPC.
 *
 * `PROTOCOL_VERSION` is an integer that MUST be bumped whenever the on-the-wire
 * message format changes in a non-additive way. It is exchanged during the
 * handshake so daemon and plugin can warn (never hard-block) on a mismatch and
 * degrade to the lowest common feature set.
 *
 * `Capabilities` advertises optional transport features each side supports.
 * Both sides start on the safe defaults (JSON, no compression); richer
 * transports (Phase 5) are only enabled when BOTH peers advertise them.
 */
export const PROTOCOL_VERSION = 1;

export interface Capabilities {
  /** MsgPack binary framing (Phase 5). JSON remains the guaranteed fallback. */
  msgpack: boolean;
  /** Per-message compression (Phase 5). */
  compression: boolean;
}

export const DEFAULT_CAPABILITIES: Capabilities = {
  msgpack: false,
  compression: false,
};

/**
 * Resolve the capabilities both peers can actually use (logical AND of each
 * flag). Unknown/omitted remote capabilities are treated as unsupported.
 */
export function negotiateCapabilities(
  local: Capabilities,
  remote: Partial<Capabilities> | undefined,
): Capabilities {
  const safeRemote = remote ?? {};
  return {
    msgpack: Boolean(local.msgpack && safeRemote.msgpack),
    compression: Boolean(local.compression && safeRemote.compression),
  };
}

/**
 * Whether a remote protocol version is compatible with ours. Same major
 * integer is required for guaranteed compatibility; we still connect on a
 * mismatch but callers should warn the user.
 */
export function isProtocolCompatible(remoteVersion: unknown): boolean {
  return (
    typeof remoteVersion === "number" &&
    Number.isInteger(remoteVersion) &&
    remoteVersion === PROTOCOL_VERSION
  );
}
