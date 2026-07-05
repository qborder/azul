local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)
local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)
local isState = require(Util.isState)

local Container = require(Components.Container)
local Padding = require(Components.Padding)
local Corner = require(Components.Corner)
local Input = require(Components.Input)
local List = require(Components.List)
local Box = require(Components.Box)
local Dropdown = require(Components.Dropdown)
local Text = require(Components.Text)
local TextButton = require(Components.TextButton)

local New = Fusion.New
local Value = Fusion.Value
local Computed = Fusion.Computed
local Children = Fusion.Children
local ForPairs = Fusion.ForPairs
local cleanup = Fusion.cleanup
local peek = Fusion.peek

local CLASS_OPTIONS = {
	"RemoteEvent",
	"RemoteFunction",
	"BindableEvent",
	"BindableFunction",
	"Folder",
	"Configuration",
	"ModuleScript",
}

type Props = {
	Suffixes: Fusion.Value<{ [string]: string }>,
	Changed: ({ [string]: string }) -> (),
}

return function(props: Props): Frame
	local suffixes = props.Suffixes
	local newSuffix = Value("")
	local newClass = Value("RemoteEvent")

	local suffixInputRef = Value(nil)

	local function renderRow(suffixKey: string, className: string)
		local currentClass = Value(className)

		return Container({
			Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Large),
			[Children] = {
				List({
					FillDirection = Enum.FillDirection.Horizontal,
					VerticalAlignment = Enum.VerticalAlignment.Center,
					Spacing = 8,
				}),

				Box({
					Size = UDim2.new(0.4, -12, 1, 0),
					[Children] = {
						Padding({ Horizontal = 8 }),
						Text({
							Text = suffixKey,
							FontFace = Theme.Fonts.Mono,
							TextSize = Theme.TextSize.Medium,
							Size = UDim2.fromScale(1, 1),
						}),
					},
				}),

				Text({
					Text = "→",
					TextSize = Theme.TextSize.Medium,
					Color = Theme.Colors.TextDimmed,
					Size = UDim2.fromOffset(16, 20),
					TextXAlignment = Enum.TextXAlignment.Center,
				}),

				Dropdown({
					Options = CLASS_OPTIONS,
					Value = currentClass,
					Selected = function(option)
						currentClass:set(option)
						local copy = {}
						for k, v in peek(suffixes) do
							copy[k] = v
						end
						copy[suffixKey] = option
						props.Changed(copy)
					end,
				}),

				TextButton({
					Text = "✕",
					Size = UDim2.fromOffset(Theme.CompSizeY.Medium, Theme.CompSizeY.Medium),
					Activated = function()
						local copy = {}
						for k, v in peek(suffixes) do
							if k ~= suffixKey then
								copy[k] = v
							end
						end
						props.Changed(copy)
					end,
				}),
			},
		})
	end

	return Container({
		Size = UDim2.new(1, 0, 0, 0),
		AutomaticSize = Enum.AutomaticSize.Y,
		[Children] = {
			List({ Spacing = Theme.ListSpacing }),

			Container({
				Size = UDim2.new(1, 0, 0, 0),
				AutomaticSize = Enum.AutomaticSize.Y,
				[Children] = {
					List({ Spacing = 6 }),
					ForPairs(suffixes, function(suffixKey, className)
						return suffixKey, renderRow(suffixKey, className)
					end, cleanup),
				},
			}),

			New("Frame")({
				Size = UDim2.new(1, 0, 0, 1),
				BackgroundColor3 = Theme.Colors.Border,
				BorderSizePixel = 0,
			}),

			Text({
				Text = "Add Suffix Mapping",
				TextSize = Theme.TextSize.Medium,
				FontFace = Theme.Fonts.Bold,
				AutomaticSize = Enum.AutomaticSize.XY,
			}),

			Container({
				Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Large),
				[Children] = {
					List({
						FillDirection = Enum.FillDirection.Horizontal,
						VerticalAlignment = Enum.VerticalAlignment.Center,
						Spacing = 8,
					}),

					Box({
						Size = UDim2.new(0.4, -12, 1, 0),
						[Children] = {
							Padding({ Horizontal = 8 }),
							Input({
								Text = newSuffix,
								PlaceholderText = ".suffix",
								FontFace = Theme.Fonts.Mono,
								Size = UDim2.fromScale(1, 1),
								[Ref] = suffixInputRef,
								Changed = function(text)
									newSuffix:set(text)
								end,
								Finished = function(text)
									newSuffix:set(text)
								end,
							}),
						},
					}),

					Text({
						Text = "→",
						TextSize = Theme.TextSize.Medium,
						Color = Theme.Colors.TextDimmed,
						Size = UDim2.fromOffset(16, 20),
						TextXAlignment = Enum.TextXAlignment.Center,
					}),

					Dropdown({
						Options = CLASS_OPTIONS,
						Value = newClass,
						Selected = function(option)
							newClass:set(option)
						end,
					}),

					TextButton({
						Text = "＋ Add",
						Solid = true,
						Activated = function()
							local suffix = peek(newSuffix):lower():gsub("%s+", "")
							if suffix == "" then return end
							if not suffix:match("^%.") then
								suffix = "." .. suffix
							end

							local copy = {}
							for k, v in peek(suffixes) do
								copy[k] = v
							end
							copy[suffix] = peek(newClass)

							props.Changed(copy)

							newSuffix:set("")
							local tb = peek(suffixInputRef)
							if tb then tb.Text = "" end
						end,
					}),
				},
			}),
		},
	})
end
