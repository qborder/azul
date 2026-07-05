local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local animate = require(Util.animate)
local stripProps = require(Util.stripProps)
local getState = require(Util.getState)
local isState = require(Util.isState)

local Corner = require(Components.Corner)
local List = require(Components.List)
local Box = require(Components.Box)
local Container = require(Components.Container)

local New = Fusion.New
local Value = Fusion.Value
local Hydrate = Fusion.Hydrate
local OnEvent = Fusion.OnEvent
local Computed = Fusion.Computed
local Children = Fusion.Children
local ForValues = Fusion.ForValues
local cleanup = Fusion.cleanup
local peek = Fusion.peek
local Spring = Fusion.Spring

local BUTTON_COMPONENT_ONLY_PROPS = {
	"Activated",
	"IsSelected",
	"IsFirst",
	"IsLast",
}

type ButtonProps = {
	Activated: () -> (),
	IsSelected: Fusion.CanBeState<boolean>,
	IsFirst: boolean,
	IsLast: boolean,
	[any]: any,
}

local function Button(props: ButtonProps): TextButton
	local isHovered = Value(false)
	local isPressed = Value(false)

	local state = getState({
		Hovered = isHovered,
		Pressed = isPressed,
	})

	return Hydrate(New("TextButton")({
		Size = UDim2.fromScale(1, 1),
		FontFace = Theme.Fonts.Regular,
		AutoButtonColor = false,
		TextSize = Theme.TextSize.Medium,
		BackgroundTransparency = 1,
		TextColor3 = animate(
			Computed(function(use)
				if use(props.IsSelected) then
					return use(Theme.Colors.TextBranded)
				elseif use(isHovered) then
					return use(Theme.Colors.Text)
				else
					return use(Theme.Colors.TextDimmed)
				end
			end),
			state
		),
		[OnEvent("InputBegan")] = function(input)
			if input.UserInputType == Enum.UserInputType.MouseMovement then
				isHovered:set(true)
			elseif input.UserInputType == Enum.UserInputType.MouseButton1 then
				isPressed:set(true)
			end
		end,
		[OnEvent("InputEnded")] = function(input)
			if input.UserInputType == Enum.UserInputType.MouseMovement then
				isHovered:set(false)
			elseif input.UserInputType == Enum.UserInputType.MouseButton1 then
				isPressed:set(false)
			end
		end,
		[OnEvent("Activated")] = function()
			if props.Activated then props.Activated() end
		end,
	}))(stripProps(props, BUTTON_COMPONENT_ONLY_PROPS))
end

local COMPONENT_ONLY_PROPS = {
	"Selected",
	"Options",
	"Value",
}

type Props = {
	Selected: ((option: string) -> ())?,
	Options: { string },
	Value: Fusion.CanBeState<string>?,
	[any]: any,
}

return function(props: Props): Frame
	local value = isState(props.Value) and props.Value or Value(props.Value or props.Options[1])

	local selectedIndex = Computed(function(use)
		return table.find(props.Options, use(value)) or 1
	end)

	local animIndex = Spring(selectedIndex, 22, 0.8)

	local slidingPosition = Computed(function(use)
		local idx = use(animIndex)
		return UDim2.fromScale((idx - 1) / #props.Options, 0)
	end)

	local slidingSize = UDim2.fromScale(1 / #props.Options, 1)

	return Hydrate(Box({
		Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Small),
		AutomaticSize = Enum.AutomaticSize.None,
		[Children] = {
			-- Sliding background layer
			Container({
				Size = UDim2.fromScale(1, 1),
				ZIndex = 1,
				[Children] = {
					New("Frame")({
						Size = slidingSize,
						Position = slidingPosition,
						BackgroundColor3 = Theme.Colors.Brand,
						BorderSizePixel = 0,
						[Children] = {
							Corner({}),
						},
					}),
				},
			}),

			-- Foreground buttons layer
			Container({
				Size = UDim2.fromScale(1, 1),
				BackgroundTransparency = 1,
				ZIndex = 2,
				[Children] = {
					List({
						FillDirection = Enum.FillDirection.Horizontal,
						HorizontalFlex = Enum.UIFlexAlignment.Fill,
						Spacing = 0,
					}),
					ForValues(props.Options, function(_, option)
						return Button({
							Text = option,
							IsSelected = Computed(function(use)
								return use(value) == option
							end),
							Activated = function()
								if option == peek(value) then return end

								value:set(option)

								if props.Selected then props.Selected(option) end
							end,
							IsFirst = option == props.Options[1],
							IsLast = option == props.Options[#props.Options],
						})
					end, cleanup),
				},
			}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end
