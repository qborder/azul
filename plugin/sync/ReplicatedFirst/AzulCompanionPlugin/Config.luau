local Enums = require("./Enums")

local configTable = {
	WS_URL = "ws://localhost:8080",

	--// Auto-Reconnect Settings
	MAX_HANDSHAKES = 5, --// Maximum handshake attempts per connection
	MAX_RECONNECTIONS = -1, --// Maximum total reconnection attempts before giving up (-1 for infinite)
	RECONNECTION_INTERVAL = 5,
	
	HEARTBEAT_INTERVAL = 30,
	BATCH_IDLE_WINDOW = 0.1,
	SCRIPT_CHANGE_DEBOUNCE = 0.35,

	--// Safety: confirmation & data-loss guards
	CONFIRM_DESTRUCTIVE = true, --// Prompt before destructive builds/pushes and large diffs
	CHANGES_THRESHOLD = 5, --// Prompt when an incoming apply affects more than this many instances
	DISPLAY_PROMPTS = "Always", --// "Always" | "Initial" | "Never"
	KEEP_UNKNOWNS = false, --// Preserve Studio-only instances not present in an incoming snapshot
	INITIAL_SYNC_PRIORITY = "Studio", --// "Studio" | "Filesystem" | "None" (see daemon)

	LIST_TYPE = Enums.listType.WHITELIST, -- or BLACKLIST
	extraClassSuffixes = {
		[".remoteevent"] = "RemoteEvent",
		[".remotefunction"] = "RemoteFunction",
		[".bindableevent"] = "BindableEvent",
		[".bindablefunction"] = "BindableFunction",
	},
	SERVICE_LIST = {
		"Workspace",
		"Lighting",
		"ReplicatedFirst",
		"ReplicatedStorage",
		"ServerScriptService",
		"ServerStorage",
		"StarterGui",
		"StarterPack",
		"StarterPlayer",
		"SoundService",
	},

	EXCLUDED_PARENTS = {
		"ServerStorage.RecPlugins", -- Folder managed by "Eye" plugin. It updates the sourcemap thousands of times. We don't need to track this.
		"Workspace.Surface Converter Storage", -- Folder managed by "Surface Converter" plugin. We don't need to track it.
	},

	AUTO_CONNECT = false,
	DEBUG_MODE = false,
	SILENT_MODE = false,
}

return configTable