local ReplicatedFirst = game:GetService("ReplicatedFirst")

--[[
	Azul UI Module
	Component-based dock widget UI for the companion plugin
]]

local UI = {}

local AzulService = require("../AzulService")
local Config = require("../Config")
local Enums = require("../Enums")

local fusion = require("../Packages/fusion")
local Theme = require("./Theme")
local Toolbar = require("./Components/Plugin/Toolbar")
local ToolbarButton = require("./Components/Plugin/ToolbarButton")
local Widget = require("./Components/Plugin/Widget")
local Container = require("./Components/Container")
local List = require("./Components/List")
local Padding = require("./Components/Padding")
local Image = require("./Components/Image")
local Text = require("./Components/Text")
local TextButton = require("./Components/TextButton")
local Checkbox = require("./Components/Checkbox")
local OptionSelector = require("./Components/OptionSelector")
local Input = require("./Components/Input")
local ScrollingContainer = require("./Components/ScrollingContainer")
local Box = require("./Components/Box")
local IconButton = require("./Components/IconButton")
local Assets = require("./Assets")
local Collapsible = require("./Components/Collapsible")

local Value = fusion.Value
local Computed = fusion.Computed
local Children = fusion.Children
local OnEvent = fusion.OnEvent
local Ref = fusion.Ref
local Observer = fusion.Observer
local peek = fusion.peek

UI.__index = UI

export type CallbackFunctions = {
	onStartSync: () -> (),
	onStopSync: () -> (),
	onAutoConnectChanged: (boolean) -> ()?,
	onDebugModeChanged: (boolean) -> ()?,
	onSilentModeChanged: (boolean) -> ()?,
	onConfigChanged: (string, any) -> (),
	onSettingsScopeChanged: (string) -> (),
	onSourcemapReload: () -> (),
}

type AzulUI = {
	plugin: Plugin,
	config: { any },
	callbacks: CallbackFunctions,
	LOGO: string,
	LOGO_SYNCED: string,
	settingsScope: string,
	rebuildServiceSet: () -> (),

	isSyncEnabled: boolean,

	azulWidget: DockWidgetPluginGui,
	connectButton: PluginToolbarButton,

	icon: fusion.Value<string>,
	isOpen: fusion.Value<boolean>,
	syncEnabled: fusion.Value<boolean>,
	handshakeComplete: fusion.Value<boolean>,
	autoConnect: fusion.Value<boolean>,
	debugMode: fusion.Value<boolean>,
	silentMode: fusion.Value<boolean>,
	settingsScopeValue: fusion.Value<string>,
	listTypeValue: fusion.Value<string>,

	wsUrlRef: fusion.Value<TextBox?>,
	heartbeatRef: fusion.Value<TextBox?>,
	batchIdleRef: fusion.Value<TextBox?>,
	scriptDebounceRef: fusion.Value<TextBox?>,

	maxHandshakesRef: fusion.Value<TextBox?>,
	maxReconnectionsRef: fusion.Value<TextBox?>,
	reconnectionIntervalRef: fusion.Value<TextBox?>,
	
	serviceListRef: fusion.Value<TextBox?>,
	excludedParentsRef: fusion.Value<TextBox?>,

	GetSyncState: (AzulUI) -> boolean,
	UpdateSyncState: (AzulUI, boolean) -> (),
	UpdateHandshakeState: (AzulUI, boolean) -> (),
	UpdateConfig: (AzulUI) -> (),
	SetSettingsScope: (AzulUI, any) -> (),
}

UI.logo = "rbxassetid://134336592598474"
UI.syncedLogo = "rbxassetid://103599828888609"

local function infoPrint(...)
	print(`[Azul]: `, ...)
end

local function debugPrint(...)
	if not Config.DEBUG_MODE then return end
	print(`[🐛 Azul::{script}]: `, ...)
end

--- Utility function to validate number input from TextBoxes. If the number is valid, it calls the provided callback with the number value.
local function validateNumberInput(newValue: string, callback: (number) -> (), allowNegative: boolean?)
	local numberValue = tonumber(newValue)

	if not numberValue then
		warn(`[Azul::{script}]: Invalid number input: {newValue}`)
		return
	end

	if not allowNegative and numberValue <= 0 then
		warn(`[Azul::{script}]: Number input must be greater than 0: {newValue}`)
		return
	elseif numberValue == 0 then
		warn(`[Azul::{script}]: Number input cannot be 0`)
		return
	end

	callback(numberValue)
end

local function section(title: string, children: { Instance })
	return Container({
		Size = UDim2.fromScale(1, 0),
		AutomaticSize = Enum.AutomaticSize.Y,
		[Children] = {
			List({
				Spacing = 6,
			}),
			Text({
				Text = title,
				FontFace = Theme.Fonts.Bold,
				TextSize = Theme.TextSize.Medium,
				Size = UDim2.fromScale(1, 0),
				AutomaticSize = Enum.AutomaticSize.Y,
			}),
			children,
		},
	})
end

local function infoText(text: string)
	return Text({
		Text = text,
		TextSize = Theme.TextSize.Small,
		Color = Theme.Colors.TextDimmed,
		RichText = true,
		Size = UDim2.fromScale(1, 0),
		AutomaticSize = Enum.AutomaticSize.Y,
	})
end

local function labeledToggle(label: string, value: fusion.Value<boolean>, changed: (boolean) -> ())
	return Container({
		Size = UDim2.fromScale(1, 0),
		AutomaticSize = Enum.AutomaticSize.Y,
		[Children] = {
			List({
				FillDirection = Enum.FillDirection.Horizontal,
				VerticalAlignment = Enum.VerticalAlignment.Center,
				Spacing = 8,
			}),
			Checkbox({
				Value = value,
				Changed = changed,
			}),
			Text({
				Text = label,
				TextSize = Theme.TextSize.Medium,
				AutomaticSize = Enum.AutomaticSize.XY,
			}),
		},
	})
end

local function labeledInput(label: string, ref: fusion.Value<TextBox?>, props: { [string]: any })
	return Container({
		Size = UDim2.fromScale(1, 0),
		AutomaticSize = Enum.AutomaticSize.Y,
		[Children] = {
			List({
				Spacing = 4,
			}),
			Text({
				Text = label,
				TextSize = Theme.TextSize.Small,
				Color = Theme.Colors.TextDimmed,
				AutomaticSize = Enum.AutomaticSize.XY,
			}),
			Box({
				Size = props.BoxSize or UDim2.new(1, 0, 0, Theme.CompSizeY.Medium),
				AutomaticSize = Enum.AutomaticSize.None,
				[Children] = {
					Padding({
						Padding = 6,
						Vertical = false,
					}),
					Input {
						Text = props.Text or "",
						PlaceholderText = props.Placeholder or "",
						TextWrapped = props.TextWrapped or false,
						MultiLine = props.MultiLine or false,
						ClearTextOnFocus = false,
						Size = UDim2.fromScale(1, 1),
						[Ref] = ref,
						Changed = props.Changed,
						Finished = props.Finished,
					},
				},
			}),
		},
	})
end

--[=[
	Initializes the plugin UI, sets up callbacks, and manages sync state
]=]
function UI.new(plugin, callbacks, settingsScope, helpers): AzulUI
	local self = {} :: AzulUI
	setmetatable(self, UI)

	-- Store references
	self.plugin = plugin
	self.callbacks = callbacks
	self.LOGO = UI.logo
	self.LOGO_SYNCED = UI.syncedLogo
	self.settingsScope = settingsScope
	self.rebuildServiceSet = helpers.rebuildServiceSet

	-- Track sync enabled state locally
	self.isSyncEnabled = false

	self.icon = Value(self.LOGO)
	self.isOpen = Value(true)
	self.syncEnabled = Value(false)
	self.handshakeComplete = Value(false)
	self.autoConnect = Value(Config.AUTO_CONNECT)
	self.debugMode = Value(Config.DEBUG_MODE)
	self.silentMode = Value(Config.SILENT_MODE)
	self.settingsScopeValue = Value(settingsScope == Enums.scope.GLOBAL and "Global" or "Project")
	self.listTypeValue = Value(Config.LIST_TYPE == Enums.listType.WHITELIST and "Whitelist" or "Blacklist")

	self.wsUrlRef = Value(nil)
	self.heartbeatRef = Value(nil)
	self.batchIdleRef = Value(nil)
	self.scriptDebounceRef = Value(nil)

	self.maxHandshakesRef = Value(nil)
	self.maxReconnectionsRef = Value(nil)
	self.reconnectionIntervalRef = Value(nil)

	self.serviceListRef = Value(nil)
	self.excludedParentsRef = Value(nil)
	self.settingsWidget = Value(nil)
	self.helpWidget = Value(nil)

	self.connectButton = ToolbarButton({
		Toolbar = Toolbar({
			Name = "Azul",
		}),
		Name = "Azul",
		ToolTip = "Open Azul",
		Image = self.icon,
		[OnEvent("Click")] = function()
			self.isOpen:set(not peek(self.isOpen))
		end,
	})

	local function createSettingsWidget()
		local settingsOpen = Value(true)
		local widget = Widget({
			Name = "Azul Settings",
			Id = "AzulSettings",
			MinimumSize = Vector2.new(300, 320),
			FloatingSize = Vector2.new(350, 480),
			InitialDockTo = Enum.InitialDockState.Float,
			InitialEnabled = true,
			Enabled = settingsOpen,
			Closed = function()
				local w = peek(self.settingsWidget)
				if w then
					w:Destroy()
					self.settingsWidget:set(nil)
				end
			end,
			[Children] = {
				Container({
					Size = UDim2.fromScale(1, 1),
					BackgroundColor3 = Theme.Colors.Background,
					BackgroundTransparency = 0,
					[Children] = {
						ScrollingContainer({
							ScrollBar = true,
							[Children] = {
								Padding {
									Padding = Theme.WidgetPadding,
								},
								List({
									Spacing = Theme.ListSpacing,
								}),

								-- General Settings Collapsible
								Collapsible({
									Title = "General Settings",
									Expanded = true,
									Elements = {
										Container({
											Size = UDim2.new(1, 0, 0, 0),
											AutomaticSize = Enum.AutomaticSize.Y,
											[Children] = {
												Padding({ Left = 8, Right = 8, Top = 8, Bottom = 8 }),
												List({ Spacing = Theme.ListSpacing }),

												labeledToggle("Auto Connect", self.autoConnect, function(newValue)
													Config.AUTO_CONNECT = newValue
													if self.callbacks.onAutoConnectChanged then
														self.callbacks.onAutoConnectChanged(newValue)
													end
												end),
												infoText("Automatically attempts to connect to Daemon on startup."),

												labeledToggle("Silent Mode", self.silentMode, function(newValue)
													Config.SILENT_MODE = newValue
													if self.callbacks.onSilentModeChanged then
														self.callbacks.onSilentModeChanged(newValue)
													end
												end),
												infoText("Suppresses all console output except errors."),

												labeledToggle("Debug Mode", self.debugMode, function(newValue)
													Config.DEBUG_MODE = newValue
													if self.callbacks.onDebugModeChanged then
														self.callbacks.onDebugModeChanged(newValue)
													end
												end),
												infoText("Enables verbose logging in the output console."),

												Text({
													Text = "Settings Scope",
													TextSize = Theme.TextSize.Small,
													Color = Theme.Colors.TextDimmed,
													AutomaticSize = Enum.AutomaticSize.XY,
												}),
												OptionSelector({
													Options = { "Global", "Project" },
													Value = self.settingsScopeValue,
													Selected = function(option)
														local scope = option == "Global" and Enums.scope.GLOBAL or Enums.scope.PROJECT
														self.callbacks.onSettingsScopeChanged(scope)
													end,
												}),
											}
										})
									},
								}),

								-- Connection Details Collapsible
								Collapsible({
									Title = "Connection Details",
									Expanded = false,
									Elements = {
										Container({
											Size = UDim2.new(1, 0, 0, 0),
											AutomaticSize = Enum.AutomaticSize.Y,
											[Children] = {
												Padding({ Left = 8, Right = 8, Top = 8, Bottom = 8 }),
												List({ Spacing = Theme.ListSpacing }),

												labeledInput("Heartbeat Interval (seconds)", self.heartbeatRef, {
													Text = tostring(Config.HEARTBEAT_INTERVAL),
													Finished = function(text)
														if text == "" then return end
														validateNumberInput(text, function(value)
															self.callbacks.onConfigChanged("HEARTBEAT_INTERVAL", value)
														end)
													end,
												}),
												labeledInput("Batch Idle Window (seconds)", self.batchIdleRef, {
													Text = tostring(Config.BATCH_IDLE_WINDOW),
													Finished = function(text)
														if text == "" then return end
														validateNumberInput(text, function(value)
															self.callbacks.onConfigChanged("BATCH_IDLE_WINDOW", value)
														end)
													end,
												}),
												labeledInput("Script Change Debounce (seconds)", self.scriptDebounceRef, {
													Text = tostring(Config.SCRIPT_CHANGE_DEBOUNCE),
													Finished = function(text)
														if text == "" then return end
														validateNumberInput(text, function(value)
															self.callbacks.onConfigChanged("SCRIPT_CHANGE_DEBOUNCE", value)
														end)
													end,
												}),
												labeledInput("Maximum Handshake Attempts", self.maxHandshakesRef, {
													Text = tostring(Config.MAX_HANDSHAKES),
													Finished = function(text)
														if text == "" then return end
														validateNumberInput(text, function(value)
															self.callbacks.onConfigChanged("MAX_HANDSHAKES", value)
														end)
													end,
												}),
												labeledInput("Maximum Reconnection Attempts", self.maxReconnectionsRef, {
													Text = tostring(Config.MAX_RECONNECTIONS),
													Placeholder = "-1 for infinite attempts",
													Finished = function(text)
														if text == "" then return end
														validateNumberInput(text, function(value)
															self.callbacks.onConfigChanged("MAX_RECONNECTIONS", value)
														end, true)
													end,
												}),
												labeledInput("Reconnection Interval (seconds)", self.reconnectionIntervalRef, {
													Text = tostring(Config.RECONNECTION_INTERVAL),
													Finished = function(text)
														if text == "" then return end
														validateNumberInput(text, function(value)
															self.callbacks.onConfigChanged("RECONNECTION_INTERVAL", value)
														end)
													end,
												}),
											}
										})
									},
								}),

								-- Service Filters Collapsible
								Collapsible({
									Title = "Service Filters",
									Expanded = false,
									Elements = {
										Container({
											Size = UDim2.new(1, 0, 0, 0),
											AutomaticSize = Enum.AutomaticSize.Y,
											[Children] = {
												Padding({ Left = 8, Right = 8, Top = 8, Bottom = 8 }),
												List({ Spacing = Theme.ListSpacing }),

												Text({
													Text = "List Type",
													TextSize = Theme.TextSize.Small,
													Color = Theme.Colors.TextDimmed,
													AutomaticSize = Enum.AutomaticSize.XY,
												}),
												OptionSelector({
													Options = { "Whitelist", "Blacklist" },
													Value = self.listTypeValue,
													Selected = function(option)
														self.callbacks.onConfigChanged(
															"LIST_TYPE",
															option == "Whitelist" and Enums.listType.WHITELIST
																or Enums.listType.BLACKLIST
														)
													end,
												}),
												labeledInput("Service List (comma-separated)", self.serviceListRef, {
													Text = table.concat(Config.SERVICE_LIST, ", "),
													BoxSize = UDim2.new(1, 0, 0, Theme.CompSizeY.Medium * 2),
													Finished = function(text)
														local items = AzulService.parseCommaSeparatedList(text)
														self.callbacks.onConfigChanged("SERVICE_LIST", items)
													end,
												}),
												labeledInput("Excluded Parents (comma-separated)", self.excludedParentsRef, {
													Text = table.concat(Config.EXCLUDED_PARENTS, ", "),
													BoxSize = UDim2.new(1, 0, 0, Theme.CompSizeY.Medium * 2),
													Finished = function(text)
														local items = AzulService.parseCommaSeparatedList(text)
														self.callbacks.onConfigChanged("EXCLUDED_PARENTS", items)
													end,
												}),
											}
										})
									},
								}),

								-- Developer Tools Collapsible
								Collapsible({
									Title = "Developer Tools",
									Expanded = false,
									Elements = {
										Container({
											Size = UDim2.new(1, 0, 0, 0),
											AutomaticSize = Enum.AutomaticSize.Y,
											[Children] = {
												Padding({ Left = 8, Right = 8, Top = 8, Bottom = 8 }),
												List({ Spacing = Theme.ListSpacing }),

												TextButton({
													Text = "Reload Sourcemap",
													Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Medium),
													Activated = function()
														self.callbacks.onSourcemapReload()
													end,
												}),
												infoText("Force reload the sourcemap file from disk to reset the sync state."),
												
												TextButton({
													Text = "Open Place Configuration",
													Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Medium),
													Activated = function()
														helpers.openPlaceConfig()
													end,
												}),
												infoText("Open the per-place configuration script in ServerStorage."),
											}
										})
									},
								}),
							},
						}),
					},
				}),
			},
		})

		task.defer(function()
			self:UpdateConfig()
		end)

		return widget
	end

	local function createHelpWidget()
		local helpOpen = Value(true)
		local widget = Widget({
			Name = "Azul Help",
			Id = "AzulHelp",
			MinimumSize = Vector2.new(300, 300),
			FloatingSize = Vector2.new(340, 380),
			InitialDockTo = Enum.InitialDockState.Float,
			InitialEnabled = true,
			Enabled = helpOpen,
			Closed = function()
				local w = peek(self.helpWidget)
				if w then
					w:Destroy()
					self.helpWidget:set(nil)
				end
			end,
			[Children] = {
				Container({
					Size = UDim2.fromScale(1, 1),
					BackgroundColor3 = Theme.Colors.Background,
					BackgroundTransparency = 0,
					[Children] = {
						Padding {
							Padding = Theme.WidgetPadding,
						},
						List({
							VerticalAlignment = Enum.VerticalAlignment.Center,
							Spacing = Theme.ListSpacing,
						}),
						infoText("<b>How to connect:</b>\n1. Run the daemon on your computer by running <font family='rbxasset://fonts/families/RobotoMono.json'>azul</font> in a terminal.\n2. Ensure the daemon's port matches the WebSocket URL in the settings (default: ws://localhost:8080).\n3. Click 'Connect' on the home screen.\n\n<b>HTTP Service requirement:</b>\nTo synchronize files, allow HTTP requests in Studio:\nHome → Game Settings → Security → Enable 'Allow HTTP Requests'"),
						
						infoText("<b>Troubleshooting:</b>\n- If synchronization fails, click 'Reload Sourcemap' in the Settings under 'Tools' tab.\n- Verify port 8080 is not blocked by your firewall.\n- Make sure the daemon is running in the correct folder."),
					},
				}),
			},
		})
		return widget
	end

	local function renderHomeView()
		return {
			-- Header Container
			Container({
				Size = UDim2.new(1, 0, 0, 48),
				AutomaticSize = Enum.AutomaticSize.None,
				[Children] = {
					-- Left side (Logo + Name)
					Container({
						Size = UDim2.fromScale(0.7, 1),
						AutomaticSize = Enum.AutomaticSize.None,
						[Children] = {
							List({
								FillDirection = Enum.FillDirection.Horizontal,
								VerticalAlignment = Enum.VerticalAlignment.Center,
								Spacing = 10,
							}),
							Image({
								Size = UDim2.fromOffset(36, 36),
								Image = self.icon,
							}),
							Text({
								Text = "<b>Azul</b>",
								FontFace = Theme.Fonts.Mono,
								TextSize = Theme.TextSize.Heading,
								Color = Theme.Colors.Text,
								AutomaticSize = Enum.AutomaticSize.Y,
							}),
						},
					}),
					-- Right side (Version)
					Text({
						Text = `v{AzulService.VERSION}`,
						FontFace = Theme.Fonts.Regular,
						TextSize = Theme.TextSize.Small,
						Color = Theme.Colors.TextDimmed,
						AnchorPoint = Vector2.new(1, 0.5),
						Position = UDim2.fromScale(1, 0.5),
						TextXAlignment = Enum.TextXAlignment.Right,
						AutomaticSize = Enum.AutomaticSize.XY,
					}),
				},
			}),

			-- Clean URL Input Box (Monospace, Centered, Centered Text)
			Box({
				Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Large),
				AutomaticSize = Enum.AutomaticSize.None,
				[Children] = {
					Padding({
						Padding = 8,
						Vertical = false,
					}),
					Input({
						Text = Config.WS_URL,
						PlaceholderText = "ws://localhost:8080",
						TextXAlignment = Enum.TextXAlignment.Center,
						FontFace = Theme.Fonts.Mono,
						TextSize = Theme.TextSize.Medium,
						Size = UDim2.fromScale(1, 1),
						[Ref] = self.wsUrlRef,
						Finished = function(text)
							if text == "" then return end
							self.callbacks.onConfigChanged("WS_URL", text)
						end,
					}),
				},
			}),

			-- Action Row
			Container({
				Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Large),
				AutomaticSize = Enum.AutomaticSize.None,
				[Children] = {
					List({
						FillDirection = Enum.FillDirection.Horizontal,
						VerticalAlignment = Enum.VerticalAlignment.Center,
						Spacing = 8,
					}),

					IconButton({
						Icon = Assets.Icons.Help,
						Activated = function()
							local w = peek(self.helpWidget)
							if w then
								w:Destroy()
								self.helpWidget:set(nil)
							else
								self.helpWidget:set(createHelpWidget())
							end
						end,
					}),

					IconButton({
						Icon = Assets.Icons.Settings,
						Activated = function()
							local w = peek(self.settingsWidget)
							if w then
								w:Destroy()
								self.settingsWidget:set(nil)
							else
								self.settingsWidget:set(createSettingsWidget())
							end
						end,
					}),

					TextButton({
						Text = Computed(function(use)
							if not use(self.syncEnabled) then return "Connect" end
							if use(self.handshakeComplete) then return "Disconnect" end
							return "Awaiting Daemon..."
						end),
						Size = UDim2.new(1, -(Theme.CompSizeY.Large * 2 + 16), 1, 0),
						Solid = true,
						Activated = function()
							if peek(self.syncEnabled) then
								self.callbacks.onStopSync()
							else
								self.callbacks.onStartSync()
							end
						end,
					}),
				},
			}),
		}
	end

	local widget = Widget({
		Name = "Azul",
		Id = "Azul",
		MinimumSize = Vector2.new(300, 160),
		FloatingSize = Vector2.new(345, 180),
		InitialDockTo = Enum.InitialDockState.Float,
		InitialEnabled = true,
		Enabled = self.isOpen,
		[Children] = {
			Container({
				Size = UDim2.fromScale(1, 1),
				AutomaticSize = Enum.AutomaticSize.None,
				BackgroundColor3 = Theme.Colors.Background,
				BackgroundTransparency = 0,
				[Children] = {
					Padding({
						Padding = Theme.WidgetPadding,
					}),
					List({
						VerticalAlignment = Enum.VerticalAlignment.Center,
						Spacing = Theme.ListSpacing,
					}),
					renderHomeView(),
				},
			}),
		},
	})

	self.azulWidget = widget

	plugin.Unloading:Once(Observer(self.isOpen):onChange(function()
		self.connectButton:SetActive(peek(self.isOpen))
	end))

	self.connectButton:SetActive(peek(self.isOpen))

	return self
end

function UI:GetSyncState()
	return self.isSyncEnabled
end

function UI:UpdateSyncState(enabled: boolean)
	self.isSyncEnabled = enabled
	self.syncEnabled:set(enabled)
	self.icon:set(if enabled then self.LOGO_SYNCED else self.LOGO)
	if not enabled then self.handshakeComplete:set(false) end
end

function UI:UpdateHandshakeState(complete: boolean)
	self.handshakeComplete:set(complete)
end

function UI:SetSettingsScope(scope)
	self.settingsScope = scope
	self.settingsScopeValue:set(if scope == Enums.scope.GLOBAL then "Global" else "Project")
end

function UI:UpdateConfig()
	self = self :: AzulUI

	self.autoConnect:set(Config.AUTO_CONNECT)
	self.debugMode:set(Config.DEBUG_MODE)
	self.silentMode:set(Config.SILENT_MODE)
	self.settingsScopeValue:set(if self.settingsScope == Enums.scope.GLOBAL then "Global" else "Project")
	self.listTypeValue:set(if Config.LIST_TYPE == Enums.listType.WHITELIST then "Whitelist" else "Blacklist")

	local wsUrlInput = peek(self.wsUrlRef)
	if wsUrlInput then wsUrlInput.Text = Config.WS_URL end

	local heartbeatInput = peek(self.heartbeatRef)
	if heartbeatInput then heartbeatInput.Text = tostring(Config.HEARTBEAT_INTERVAL) end

	local batchIdleInput = peek(self.batchIdleRef)
	if batchIdleInput then batchIdleInput.Text = tostring(Config.BATCH_IDLE_WINDOW) end

	local scriptDebounceInput = peek(self.scriptDebounceRef)
	if scriptDebounceInput then scriptDebounceInput.Text = tostring(Config.SCRIPT_CHANGE_DEBOUNCE) end


	local maxConnectionsInput = peek(self.maxHandshakesRef)
	if maxConnectionsInput then maxConnectionsInput.Text = tostring(Config.MAX_HANDSHAKES) end

	local maxReconnectionsInput = peek(self.maxReconnectionsRef)
	if maxReconnectionsInput then maxReconnectionsInput.Text = tostring(Config.MAX_RECONNECTIONS) end

	local reconnectionIntervalInput = peek(self.reconnectionIntervalRef)
	if reconnectionIntervalInput then reconnectionIntervalInput.Text = tostring(Config.RECONNECTION_INTERVAL) end


	local serviceListInput = peek(self.serviceListRef)
	if serviceListInput then serviceListInput.Text = table.concat(Config.SERVICE_LIST, ", ") end

	local excludedParentsInput = peek(self.excludedParentsRef)
	if excludedParentsInput then excludedParentsInput.Text = table.concat(Config.EXCLUDED_PARENTS, ", ") end
end

return UI