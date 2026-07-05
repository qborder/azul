--!strict
local AzulService = {}
AzulService.VERSION = 44
-- Integer wire-protocol version. MUST match the daemon's PROTOCOL_VERSION
-- (src/ipc/protocol.ts). Bump when the on-the-wire message format changes.
AzulService.PROTOCOL_VERSION = 1

-- Services
local ScriptEditorService = game:GetService("ScriptEditorService")
local HttpService = game:GetService("HttpService")
local AssetService = game:GetService("AssetService")
local InsertService = game:GetService("InsertService")
local ChangeHistoryService = game:GetService("ChangeHistoryService")

-- Modules
local Serializer = require("./Serializer")
local Config = require("./Config")
local Enums = require("./Enums")

-- Logging helpers
local function debugPrint(...)
	if Config.SILENT_MODE or not Config.DEBUG_MODE then return end
	print(`[🐛 AzulService]:`, ...)
end

local function infoPrint(...)
	if Config.SILENT_MODE then return end
	print(`[AzulService]:`, ...)
end

--[=[
	Utility: Check if instance is a script
	@param instance Instance - The instance to check
	@return boolean - True if the instance is a Script, LocalScript, or ModuleScript
]=]
function AzulService.isScript(instance)
	return instance:IsA("Script") or instance:IsA("LocalScript") or instance:IsA("ModuleScript")
end

function AzulService.isScriptClass(className)
	return className == "Script" or className == "LocalScript" or className == "ModuleScript"
end

--[=[
	Runs `apply` wrapped in a ChangeHistoryService recording so the entire
	operation can be undone/redone as a single waypoint. Commits on success,
	cancels on error. Falls back to running `apply` directly (still via pcall)
	when recordings are unavailable (e.g. a recording is already in progress).
	@param name string - Unique recording identifier
	@param displayName string - Human-readable label shown in the undo history
	@param apply () -> () - The mutation to perform
	@return boolean, any - ok, error (matching pcall semantics)
]=]
function AzulService.withRecording(name: string, displayName: string, apply: () -> ()): (boolean, any)
	local recording: any = nil
	local okBegin = pcall(function()
		recording = ChangeHistoryService:TryBeginRecording(name, displayName)
	end)

	if not okBegin or not recording then
		-- No recording available; still run the mutation so behavior is unchanged.
		return pcall(apply)
	end

	local okApply, err = pcall(apply)

	pcall(function()
		local operation = if okApply
			then Enum.FinishRecordingOperation.Commit
			else Enum.FinishRecordingOperation.Cancel
		ChangeHistoryService:FinishRecording(recording, operation)
	end)

	return okApply, err
end

--[=[
	Displays a modal dialog window styled with current Studio theme colors
	and prompts the user with Yes/No-like choices (Proceed/Cancel) for
	critical operations. Loops and yields until the user clicks a button
	or closes the window.
	@param plugin Plugin - The Roblox plugin instance
	@param title string - Dialog window title
	@param messageText string - Description/details of the change
	@return boolean - True if the user clicked Proceed, false otherwise
]=]
function AzulService.promptConfirmation(plugin: Plugin, title: string, messageText: string): boolean
	local widgetInfo = DockWidgetPluginGuiInfo.new(
		Enum.InitialDockState.Float,
		true, -- enabled
		true, -- override previous enabled state (force it to show)
		400, -- default width
		150, -- default height
		400, -- min width
		150  -- min height
	)
	
	local dialog = plugin:CreateDockWidgetPluginGui("AzulConfirmation_" .. HttpService:GenerateGUID(false), widgetInfo)
	dialog.Title = title
	dialog.Enabled = true
	
	local decision = nil
	local event = Instance.new("BindableEvent")
	
	-- Create GUI
	local container = Instance.new("Frame")
	container.Size = UDim2.fromScale(1, 1)
	
	local studioTheme = settings().Studio.Theme
	container.BackgroundColor3 = studioTheme:GetColor(Enum.StudioStyleGuideColor.Background, Enum.StudioStyleGuideModifier.Default)
	container.BorderSizePixel = 0
	container.Parent = dialog
	
	local layout = Instance.new("UIListLayout")
	layout.Padding = UDim.new(0, 10)
	layout.SortOrder = Enum.SortOrder.LayoutOrder
	layout.HorizontalAlignment = Enum.HorizontalAlignment.Center
	layout.VerticalAlignment = Enum.VerticalAlignment.Center
	layout.Parent = container
	
	local padding = Instance.new("UIPadding")
	padding.PaddingLeft = UDim.new(0, 15)
	padding.PaddingRight = UDim.new(0, 15)
	padding.PaddingTop = UDim.new(0, 10)
	padding.PaddingBottom = UDim.new(0, 10)
	padding.Parent = container

	local label = Instance.new("TextLabel")
	label.Size = UDim2.new(1, 0, 0.5, 0)
	label.BackgroundTransparency = 1
	label.TextColor3 = studioTheme:GetColor(Enum.StudioStyleGuideColor.Text, Enum.StudioStyleGuideModifier.Default)
	label.Font = Enum.Font.SourceSans
	label.TextSize = 15
	label.TextWrapped = true
	label.Text = messageText
	label.TextXAlignment = Enum.TextXAlignment.Center
	label.TextYAlignment = Enum.TextYAlignment.Center
	label.LayoutOrder = 1
	label.Parent = container
	
	local buttonFrame = Instance.new("Frame")
	buttonFrame.Size = UDim2.new(1, 0, 0, 32)
	buttonFrame.BackgroundTransparency = 1
	buttonFrame.LayoutOrder = 2
	buttonFrame.Parent = container
	
	local buttonLayout = Instance.new("UIListLayout")
	buttonLayout.FillDirection = Enum.FillDirection.Horizontal
	buttonLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
	buttonLayout.VerticalAlignment = Enum.VerticalAlignment.Center
	buttonLayout.Padding = UDim.new(0, 20)
	buttonLayout.Parent = buttonFrame
	
	local function createButton(text, isPrimary)
		local btn = Instance.new("TextButton")
		btn.Size = UDim2.new(0, 90, 1, 0)
		btn.Font = Enum.Font.SourceSansBold
		btn.TextSize = 14
		btn.Text = text
		
		if isPrimary then
			btn.BackgroundColor3 = Color3.fromRGB(0, 162, 255)
			btn.TextColor3 = Color3.fromRGB(255, 255, 255)
		else
			btn.BackgroundColor3 = studioTheme:GetColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Default)
			btn.TextColor3 = studioTheme:GetColor(Enum.StudioStyleGuideColor.ButtonText, Enum.StudioStyleGuideModifier.Default)
		end
		
		local corner = Instance.new("UICorner")
		corner.CornerRadius = UDim.new(0, 4)
		corner.Parent = btn
		
		btn.Parent = buttonFrame
		return btn
	end
	
	local cancelBtn = createButton("Cancel", false)
	local proceedBtn = createButton("Proceed", true)
	
	cancelBtn.MouseButton1Click:Connect(function()
		decision = false
		event:Fire()
	end)
	
	proceedBtn.MouseButton1Click:Connect(function()
		decision = true
		event:Fire()
	end)
	
	dialog.AncestryChanged:Connect(function()
		if not dialog:IsDescendantOf(game) then
			if decision == nil then
				decision = false
				event:Fire()
			end
		end
	end)
	
	dialog:GetPropertyChangedSignal("Enabled"):Connect(function()
		if not dialog.Enabled then
			if decision == nil then
				decision = false
				event:Fire()
			end
		end
	end)
	
	if decision == nil then
		event.Event:Wait()
	end
	
	dialog:Destroy()
	return decision == true
end

--[=[
	Utility: Rebuild service set from config
	@param serviceSet { [string]: boolean } - The service set to rebuild
]=]
function AzulService.rebuildServiceSet(serviceSet)
	table.clear(serviceSet)
	for _, name in ipairs(Config.SERVICE_LIST) do
		serviceSet[name] = true
	end
end

--- Utility: Check if instance should be excluded from sync
function AzulService.isExcluded(instance: Instance, serviceSet: { [string]: boolean })
	if not instance then return true end

	local fullName = instance:GetFullName()
	for _, ancestorName in Config.EXCLUDED_PARENTS do
		if fullName:find(ancestorName) then return true end
	end

	-- Walk up to the service
	local current: Instance? = instance
	while current do
		if current.Parent == game then
			local inList = serviceSet[current.Name] ~= nil

			if Config.LIST_TYPE == Enums.listType.WHITELIST then
				-- Whitelist: only allow services in the list
				-- debugPrint(`Included {instance} in whitelist`)
				return not inList
			else
				-- Blacklist: exclude services in the list
				-- debugPrint(`Excluded {instance} in blacklist`)
				return inList
			end
		end
		current = current.Parent
	end

	-- Not under DataModel
	return true
end

--- Utility: Get or create instance by path segments
function AzulService.getOrCreatePath(pathSegments: { string }): Instance
	local current: Instance = game
	for index, segment in ipairs(pathSegments) do
		local nextNode: Instance? = current:FindFirstChild(segment)

		if not nextNode then
			if index == 1 then
				local lowerSegment = segment:lower()
				local foundService: Instance? = nil
				for _, service in ipairs(game:GetChildren()) do
					if service.Name:lower() == lowerSegment then
						foundService = service
						break
					end
				end
				if foundService then
					nextNode = foundService
				else
					local ok, service = pcall(function() return game:GetService(segment) end)
					if ok and service then nextNode = service end
				end
			end

			if not nextNode then
				if current == game then
					warn(`[AzulService]: Cannot create folder "{segment}" directly under game. Skipping.`)
				else
					local newFolder = Instance.new("Folder")
					newFolder.Name = segment
					newFolder.Parent = current
					nextNode = newFolder
				end
			end
		end

		current = nextNode :: Instance
	end

	return current
end

function AzulService.isProtectedRobloxContainer(instance: Instance?): boolean
	if not instance then return false end

	-- Top-level services cannot be destroyed or reparented
	local okService = pcall(function() return game:GetService(instance.Name) end)
	if instance.Parent == game and okService then return true end

	-- Certain StarterPlayer children are locked (StarterPlayerScripts, StarterCharacterScripts, StarterGear)
	local parent = instance.Parent
	if parent and parent.ClassName == "StarterPlayer" then
		local name = instance.Name
		if name == "StarterPlayerScripts" or name == "StarterCharacterScripts" or name == "StarterGear" then
			return true
		end
	end

	return false
end

--- Utility: Generate or retrieve GUID for instance (use Roblox debug IDs to avoid attribute churn)
function AzulService.getOrCreateGUID(
	instance,
	trackedInstances: { [Instance]: string },
	guidMap: { [string]: Instance },
	usedGuids: { [string]: boolean }
): string
	local cached = trackedInstances[instance]
	if cached then return cached end

	local guid = instance:GetDebugId(0)
	trackedInstances[instance] = guid
	guidMap[guid] = instance
	usedGuids[guid] = true
	return guid
end

--- Utility: Get instance path
function AzulService.getInstancePath(instance: Instance): { string }?
	local path = {}
	local current: Instance? = instance

	while current and current ~= game do
		table.insert(path, 1, current.Name)
		current = current.Parent
	end

	-- If current became nil, the instance is no longer under DataModel
	if current ~= game then return nil end

	return path
end

--- Convert instance to data format
function AzulService.instanceToData(
	instance,
	trackedInstances: { [Instance]: string },
	guidMap: { [string]: Instance },
	usedGuids: { [string]: boolean },
	options: { includeProperties: boolean? }?
): { [string]: any }?
	local guid = AzulService.getOrCreateGUID(instance, trackedInstances, guidMap, usedGuids)
	local path = AzulService.getInstancePath(instance)
	if not path then return nil end

	local parentGuid: string? = nil
	local parent = instance.Parent
	if parent then
		if parent == game then
			parentGuid = "root"
		else
			parentGuid = AzulService.getOrCreateGUID(parent, trackedInstances, guidMap, usedGuids)
		end
	end

	local data: { [string]: any } = {
		guid = guid,
		className = instance.ClassName,
		name = instance.Name,
		path = path,
		parentGuid = parentGuid,
	}

	if AzulService.isScript(instance) then data.source = ScriptEditorService:GetEditorSource(instance) end

	local isExtraClass = false
	if Config.extraClassSuffixes then
		for _, className in pairs(Config.extraClassSuffixes) do
			if instance:IsA(className) then
				isExtraClass = true
				break
			end
		end
	end

	if (options and options.includeProperties) or isExtraClass then
		local properties = Serializer.collectSerializedProperties(instance, {
			getInstanceRefData = function(referenceInstance: Instance)
				local referencePath = AzulService.getInstancePath(referenceInstance)
				if not referencePath then return nil end

				local referenceGuid =
					AzulService.getOrCreateGUID(referenceInstance, trackedInstances, guidMap, usedGuids)
				return {
					guid = referenceGuid,
					path = referencePath,
				}
			end,
		})
		data.properties = properties

		local attributes = Serializer.collectSerializedAttributes(instance)
		data.attributes = attributes

		local tags = Serializer.collectSerializedTags(instance)
		data.tags = tags
	end

	return data
end

--- Utility: set script source safely (handles large sources via ScriptEditorService)
function AzulService.setScriptSource(scriptInstance: Script | LocalScript | ModuleScript, source: string)
	local okUpdateSource, errUpdateSource = pcall(function()
		ScriptEditorService:UpdateSourceAsync(scriptInstance, function(...) return source end)
	end)

	if not okUpdateSource then
		warn(`[AzulService]: Failed to set script source for {scriptInstance}:`, errUpdateSource)
	end

	return okUpdateSource
end

--- Create/update instance data with dedup tracking (returns data if changed, nil if duplicate)
function AzulService.instanceToDataDedup(
	instance: Instance,
	trackedInstances: { [Instance]: string },
	guidMap: { [string]: Instance },
	usedGuids: { [string]: boolean },
	lastInstanceUpdate: { [string]: { key: string, t: number } }
): { [string]: any }?
	local data = AzulService.instanceToData(instance, trackedInstances, guidMap, usedGuids)
	if not data then return nil end

	local guid = data.guid :: string
	local parentKey = (data.parentGuid :: string?) or ""
	local key = table.concat(data.path :: { string }, "/")
		.. "|"
		.. (data.className :: string)
		.. "|"
		.. (data.name :: string)
		.. "|"
		.. parentKey
	local now = tick()
	local last = lastInstanceUpdate[guid]
	if last and last.key == key and now - last.t < 0.05 then
		-- Ignore duplicate bursts from multiple property signals firing at once
		return nil
	end
	lastInstanceUpdate[guid] = { key = key, t = now }

	return data
end

type InstanceData = {
	guid: string,
	className: string,
	name: string,
	path: { string }, -- ["ReplicatedStorage", "Modules", "Foo"]
	parentGuid: string?, -- parent instance GUID
	source: string?, -- Only present for Script/LocalScript/ModuleScript
	properties: { [string]: any }?, -- Record<string, unknown>;
	attributes: { [string]: any }?, -- Record<string, unknown>;
	tags: { string }?,
}

type MeshData = {
	meshId: string,
	collisionFidelity: Enum.CollisionFidelity,
	renderFidelity: Enum.RenderFidelity,
}

--- Apply snapshot instances to the workspace
function AzulService.applySnapshotInstances(
	instances: { InstanceData },
	destination: { string }?,
	guidMap: { [string]: Instance }?
): (number, number, { [string]: Instance })
	-- Sort instances by path length to make sure parents are created before children
	table.sort(instances, function(a, b) return #a.path < #b.path end)

	--[=[
		Extract MeshId from properties if present and valid. We need to do this before instance creation because MeshId is a special case that requires creating the MeshPart via InsertService with the content ID, and we want to avoid applying it as a normal property which would fail and log errors.
	]=]
	local function extractMeshId(properties: { [string]: any }?): string?
		if type(properties) ~= "table" then return nil end
		local raw = properties.MeshId
		if raw == nil then return nil end
		local value = Serializer.deserializeValue(raw)
		if type(value) == "string" and value ~= "" then return value end
		return nil
	end

	local function getMeshData(properties: { [string]: any }?): MeshData?
		if type(properties) ~= "table" then return nil end
		local meshId = extractMeshId(properties)
		if not meshId then return nil end
		local collisionFidelity = Enum.CollisionFidelity.Default :: Enum.CollisionFidelity
		local renderFidelity = Enum.RenderFidelity.Automatic :: Enum.RenderFidelity

		if properties["CollisionFidelity"] then
			collisionFidelity = Serializer.deserializeValue(properties["CollisionFidelity"])
		end

		if properties["RenderFidelity"] then
			renderFidelity = Serializer.deserializeValue(properties["RenderFidelity"])
		end

		return {
			meshId = meshId,
			collisionFidelity = collisionFidelity,
			renderFidelity = renderFidelity,
		}
	end

	--[=[
		Strip the MeshId property from instance properties before creating the instance.
	]=]
	local function stripMeshId(properties: { [string]: any }?): { [string]: any }?
		if type(properties) ~= "table" then return nil end
		local filtered = {}
		local hasValues = false
		for key, value in pairs(properties) do
			if key ~= "MeshId" then
				filtered[key] = value
				hasValues = true
			end
		end
		if not hasValues then return {} end
		return filtered
	end

	local function recreateMeshPart(
		existing: MeshPart,
		meshData: MeshData,
		targetName: string,
		targetParent: Instance?
	): MeshPart?
		local okCreate, newMeshPart = pcall(
			function()
				return InsertService:CreateMeshPartAsync(
					meshData.meshId,
					meshData.collisionFidelity,
					meshData.renderFidelity
				)
			end
		)
		if not okCreate or not newMeshPart then return nil end

		newMeshPart.Name = targetName
		for _, child in ipairs(existing:GetChildren()) do
			child.Parent = newMeshPart
		end
		newMeshPart.Parent = targetParent or existing.Parent
		existing:Destroy()
		return newMeshPart
	end

	--[=[
		Adjust instance paths based on locked container parents. For example, if the snapshot contains an instance targeting StarterPlayerScripts, we need to adjust the path to StarterPlayer/StarterPlayerScripts to account for the fact that StarterPlayerScripts is a protected container that cannot be created or reparented, and always exists under StarterPlayer.
	]=]
	local function computeAdjustedPath(
		pathSegments: { string },
		lockedContainerParentsMap: { [string]: string }
	): ({ string }, string?)
		local adjustedPath = {}
		for i, segment in ipairs(pathSegments) do
			adjustedPath[i] = segment
		end

		local protectedContainerName: string? = nil
		local first = adjustedPath[1]
		local maybeParent = lockedContainerParentsMap[first]
		if maybeParent and maybeParent ~= first then table.insert(adjustedPath, 1, maybeParent) end

		-- Only treat as a protected-container target when the path points to the
		-- container itself (StarterPlayer/<LockedContainer>), not its descendants.
		if #adjustedPath == 2 then
			local second = adjustedPath[2]
			if lockedContainerParentsMap[second] == adjustedPath[1] then protectedContainerName = second end
		end

		return adjustedPath, protectedContainerName
	end

	local siblingOrdinalByPathClass: { [string]: number } = {}
	local existingInstancesByGuid: { [string]: Instance } = {}
	local initialStudioGuids: { [string]: boolean } = {}
	local resolvedInstancesByGuid: { [string]: Instance } = {}
	local deferredPropertyApplications: { { instance: Instance, properties: { [string]: any }? } } = {}

	local lockedContainerParents = {
		StarterPlayerScripts = "StarterPlayer",
		StarterCharacterScripts = "StarterPlayer",
		StarterGear = "StarterPlayer",
	}

	local created = 0
	local updated = 0
	local guidMatchCount = 0
	local fallbackMatchCount = 0

	for _, existing in ipairs(game:GetChildren()) do
		local guid = existing:GetDebugId(0)
		if type(guid) == "string" and guid ~= "" then
			existingInstancesByGuid[guid] = existing
			initialStudioGuids[guid] = true
		end
	end
	for _, existing in ipairs(game:GetDescendants()) do
		local guid = existing:GetDebugId(0)
		if type(guid) == "string" and guid ~= "" then
			existingInstancesByGuid[guid] = existing
			initialStudioGuids[guid] = true
		end
	end

	local function findInstanceByPath(pathSegments: { string }): Instance?
		local current: Instance = game
		for index, segment in ipairs(pathSegments) do
			local nextNode: Instance? = nil

			if index == 1 then
				local okService, service = pcall(function() return game:GetService(segment) end)
				if okService and service then nextNode = service end
			end

			if not nextNode then nextNode = current:FindFirstChild(segment) end
			if not nextNode then return nil end
			current = nextNode
		end

		return current
	end

	for _, item in instances do
		debugPrint(
			`Processing snapshot instance "{item.name}" ({item.className}) with path {table.concat(item.path, "/")}`
		)

		local adjustedPath, protectedContainerName = computeAdjustedPath(item.path, lockedContainerParents)

		-- Get service candidate for the top-level node
		local serviceCandidate: Instance? = nil
		if #adjustedPath == 1 then
			local okService, service = pcall(function() return game:GetService(adjustedPath[1]) end)
			if okService then serviceCandidate = service end
		end

		-- Compute parent path for lookup/creation and determine parent instance (if any)
		local parentPath = {}
		for i = 1, #adjustedPath - 1 do
			parentPath[i] = adjustedPath[i]
		end

		-- Only use parent GUID resolution if there's no explicit destination override,
		-- an explicit destination implies the user ran a push with a specific destination target.
		local useParentGuidResolution = not destination or #destination == 0
		local parent: Instance? = nil
		if
			useParentGuidResolution
			and type(item.parentGuid) == "string"
			and item.parentGuid ~= ""
			and item.parentGuid ~= "root"
		then
			parent = resolvedInstancesByGuid[item.parentGuid]
				or (guidMap and guidMap[item.parentGuid])
				or existingInstancesByGuid[item.parentGuid]
		end
		if not parent then parent = AzulService.getOrCreatePath(parentPath) end

		debugPrint(`Determined parent for instance "{item.name}" ({item.className}): {tostring(parent)}`)

		local targetName = adjustedPath[#adjustedPath]
		if AzulService.isScriptClass(item.className) then
			local sameNameChildren = {}
			local hasPreExistingSameNamed = false

			-- Check for same-named children to determine if we need to preserve any due to studio GUID matches
			for _, child in ipairs((parent :: Instance):GetChildren()) do
				if child.Name == targetName and child.ClassName == item.className then
					table.insert(sameNameChildren, child)
					local childGuid = child:GetDebugId(0)
					if type(childGuid) == "string" and childGuid ~= "" and initialStudioGuids[childGuid] then
						hasPreExistingSameNamed = true
					end
				end
			end

			-- If the target is a script and there's a pre-existing same-named script with a studio GUID, skip destroying it to avoid breaking references in the script editor.
			-- Instead, we'll treat it as a candidate for reuse and overwrite its source and properties.
			if hasPreExistingSameNamed then
				for _, child in ipairs(sameNameChildren) do
					if not AzulService.isProtectedRobloxContainer(child) then
						local childGuid = child:GetDebugId(0)
						if type(childGuid) == "string" and childGuid ~= "" then
							existingInstancesByGuid[childGuid] = nil
							resolvedInstancesByGuid[childGuid] = nil
						end
						child:Destroy()
					end
				end
			end
		end

		local existing: Instance? = nil
		if type(item.guid) == "string" and item.guid ~= "" then
			existing = existingInstancesByGuid[item.guid]
			if existing then
				guidMatchCount += 1
			end
		end

		if not existing then
			existing = serviceCandidate
			if existing then
				fallbackMatchCount += 1
			end
		end

		if not existing then
			local targetClassName = item.className
			local occurrenceKey = table.concat(adjustedPath, "\u{1F}") .. "::" .. tostring(targetClassName)
			local occurrenceOrdinal = (siblingOrdinalByPathClass[occurrenceKey] or 0) + 1
			siblingOrdinalByPathClass[occurrenceKey] = occurrenceOrdinal

			local sameNameChildren = {}
			for _, child in ipairs((parent :: Instance):GetChildren()) do
				if child.Name == targetName then table.insert(sameNameChildren, child) end
			end

			existing = sameNameChildren[occurrenceOrdinal]
			if existing then
				fallbackMatchCount += 1
			end
		end

		local instance = existing

		if existing and existing.ClassName ~= item.className then
			local targetIsScript = AzulService.isScriptClass(item.className)
			if targetIsScript then
				if AzulService.isProtectedRobloxContainer(existing) then
					instance = existing
				else
					existing:Destroy()
					instance = nil
				end
			else
				instance = existing
			end
		end

		if not instance and protectedContainerName then
			local protectedParentName = lockedContainerParents[protectedContainerName]
			if protectedParentName then
				local okParent, protectedParent = pcall(function() return game:GetService(protectedParentName) end)
				if okParent and protectedParent then
					local protectedExisting = protectedParent:FindFirstChild(protectedContainerName)
					if protectedExisting then instance = protectedExisting end
				end
			end
		end

		if not instance then -- If we still don't have an existing instance, create it
			local newInstance: Instance? = nil
			if item.className == "MeshPart" then
				local meshData = getMeshData(item.properties)
				if meshData then
					local okMesh, meshResult = pcall(
						function()
							return InsertService:CreateMeshPartAsync(
								meshData.meshId,
								meshData.collisionFidelity,
								meshData.renderFidelity
							)
						end
					)

					if okMesh and meshResult then
						newInstance = meshResult
					elseif not okMesh then
						warn(
							`[AzulService]: Failed to create MeshPart for instance "{item.name}" with MeshId "{meshData.meshId}": {tostring(
								meshResult
							)}.`
						)
					end
				end
			end
			if not newInstance then
				local okNew, createdInstance = pcall(function() return Instance.new(item.className) end)
				if okNew and createdInstance then
					newInstance = createdInstance
				else
					newInstance = Instance.new("Folder")
					debugPrint(
						`Failed to create instance of class "{item.className}", created Folder placeholder instead.`
					)
				end
			end
			local resolvedNewInstance = newInstance :: Instance
			resolvedNewInstance.Name = adjustedPath[#adjustedPath]
			resolvedNewInstance.Parent = parent :: Instance
			instance = resolvedNewInstance
			created += 1
		else
			if parent and instance.Parent ~= parent and not AzulService.isProtectedRobloxContainer(instance) then
				local okReparent = pcall(function() instance.Parent = parent :: Instance end)
				if not okReparent then
					debugPrint(`Failed to reparent instance "{instance.Name}" ({instance.ClassName}) to target parent.`)
				end
			end

			if not serviceCandidate and not AzulService.isProtectedRobloxContainer(instance) then
				instance.Name = adjustedPath[#adjustedPath]
			end
		end

		if instance then -- Apply properties, attributes, and tags if we have a valid instance
			if item.className == "MeshPart" and instance:IsA("MeshPart") then
				local meshData = getMeshData(item.properties)
				if meshData and meshData.meshId ~= (instance :: MeshPart).MeshId then
					local replaced = recreateMeshPart(instance :: MeshPart, meshData, targetName, parent)
					if replaced then instance = replaced end
				end
			end

			if type(item.guid) == "string" and item.guid ~= "" then
				existingInstancesByGuid[item.guid] = instance
				resolvedInstancesByGuid[item.guid] = instance
			end

			local propertiesForApply = item.properties
			if instance:IsA("MeshPart") then propertiesForApply = stripMeshId(propertiesForApply) end

			table.insert(deferredPropertyApplications, {
				instance = instance,
				properties = propertiesForApply,
			})

			Serializer.applySerializedAttributes(instance, item.attributes)
			Serializer.applySerializedTags(instance, item.tags)
		end

		if AzulService.isScriptClass(item.className) and item.source and instance then
			if AzulService.isScript(instance) then
				AzulService.setScriptSource(instance :: Script, item.source)
				updated += 1
			else
				debugPrint(
					`Skipped source apply for non-script instance "{instance.Name}" ({instance.ClassName}) targeting class "{item.className}".`
				)
			end
		end
	end

	for _, pending in ipairs(deferredPropertyApplications) do
		Serializer.applySerializedProperties(pending.instance, pending.properties, {
			resolveInstanceByGuid = function(guid: string): Instance? return resolvedInstancesByGuid[guid] end,
			resolveInstanceByPath = function(pathSegments: { string }): Instance?
				return findInstanceByPath(pathSegments)
			end,
		})
	end

	debugPrint(
		`Snapshot resolve summary: {guidMatchCount} guid matches, {fallbackMatchCount} fallback matches, {created} created, {updated} scripts updated`
	)

	return created, updated, resolvedInstancesByGuid
end

--- Find the push config ModuleScript
function AzulService.findPushConfigModule(pushConfigPath: { string }): ModuleScript?
	local current: Instance = game
	for index, segment in ipairs(pushConfigPath) do
		if index == 1 then
			local ok, service = pcall(function() return game:GetService(segment) end)
			if not ok or not service then return nil end
			current = service
		else
			local nextNode = current:FindFirstChild(segment)
			if not nextNode then return nil end
			current = nextNode
		end
	end

	if current and current:IsA("ModuleScript") then return current :: ModuleScript end

	return nil
end

--- Read and validate push config from ModuleScript
function AzulService.readPushConfig(pushConfigPath: { string }): ({ [string]: any }?, string?)
	local module = AzulService.findPushConfigModule(pushConfigPath)
	if not module then return nil, "Push config ModuleScript not found" end

	-- Clone module to force require to refresh data
	local moduleClone = module:Clone()
	moduleClone.Parent = module.Parent
	module:Destroy()
	module = moduleClone
	--

	local ok, data = pcall(require, module)
	if not ok then return nil, `Failed to require push config: {data}` end

	if type(data) ~= "table" then return nil, "Push config is not a table" end

	debugPrint(`Push config loaded from {module}: {HttpService:JSONEncode(data)}`)

	local mappings = {}
	if type(data.pushMappings) == "table" then
		for _, entry in ipairs(data.pushMappings) do
			if type(entry) == "table" and type(entry.source) == "string" and type(entry.destination) == "table" then
				local dest = {}
				for _, seg in ipairs(entry.destination) do
					if type(seg) == "string" and seg ~= "" then table.insert(dest, seg) end
				end

				if #dest > 0 then
					table.insert(mappings, {
						source = entry.source,
						destination = dest,
						destructive = entry.destructive == true,
						rojoMode = entry.rojoMode == true,
						fromSourcemap = if type(entry.fromSourcemap) == "string" and entry.fromSourcemap ~= ""
							then entry.fromSourcemap
							else nil,
					})
				end
			end
		end
	end

	local configPayload = {
		mappings = mappings,
		port = data.port,
		debugMode = data.debugMode,
		deleteOrphansOnConnect = data.deleteOrphansOnConnect,
	}

	return configPayload, nil
end

function AzulService.parseCommaSeparatedList(str: string): { string }
	local result = {}
	for segment in str:gmatch("([^,]+)") do
		local trimmed = segment:match("^%s*(.-)%s*$")
		if trimmed and trimmed ~= "" then table.insert(result, trimmed) end
	end
	return result
end

return AzulService
