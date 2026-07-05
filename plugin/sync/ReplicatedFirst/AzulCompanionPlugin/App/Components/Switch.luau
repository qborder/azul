local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)
local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)
local isState = require(Util.isState)

local New = Fusion.New
local Value = Fusion.Value
local Hydrate = Fusion.Hydrate
local Computed = Fusion.Computed
local Children = Fusion.Children
local OnEvent = Fusion.OnEvent
local Spring = Fusion.Spring
local peek = Fusion.peek

local COMPONENT_ONLY_PROPS = {
	"Changed",
	"Value",
}

type Props = {
	Changed: ((value: boolean) -> ())?,
	Value: Fusion.CanBeState<boolean>?,
	[any]: any,
}

return function(props: Props): TextButton
	local value = isState(props.Value) and props.Value or Value(props.Value or false)

	local bgSpring = Spring(Computed(function(use)
		return if use(value) then use(Theme.Colors.Brand) else use(Theme.Colors.Border)
	end), Theme.SpringSpeed, Theme.SpringDamping)

	local thumbPosSpring = Spring(Computed(function(use)
		return if use(value) then UDim2.new(1, -20, 0.5, -8) else UDim2.new(0, 4, 0.5, -8)
	end), Theme.SpringSpeed, Theme.SpringDamping)

	return Hydrate(New("TextButton")({
		Size = UDim2.fromOffset(42, 22),
		BackgroundColor3 = bgSpring,
		AutoButtonColor = false,
		Text = "",
		BorderSizePixel = 0,
		[OnEvent("Activated")] = function()
			value:set(not peek(value))
			if props.Changed then props.Changed(peek(value)) end
		end,
		[Children] = {
			New("UICorner")({
				CornerRadius = UDim.new(0, 11),
			}),
			-- Thumb Circle
			New("Frame")({
				Size = UDim2.fromOffset(16, 16),
				Position = thumbPosSpring,
				BackgroundColor3 = Theme.Colors.TextBranded,
				BorderSizePixel = 0,
				[Children] = {
					New("UICorner")({
						CornerRadius = UDim.new(0, 8),
					}),
				},
			}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end
