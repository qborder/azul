# File: package.json
``
{
  "name": "azul-sync",
  "version": "1.6.0",
  "description": "Azul is an easy but powerful Studio-first, two-way synchronization tool for Roblox development. Edit your Roblox projects using your favorite IDE, while keeping everything in sync with Roblox Studio in real-time.",
  "main": "dist/index.js",
  "type": "module",
  "bin": {
    "azul": "dist/cli.js"
  },
  "scripts": {
    "build": "node --max-old-space-size=1024 ./node_modules/typescript/bin/tsc",
    "build:plugin": "cd plugin && argon build -p",
    "install:g": "pnpm -g add .",
    "test": "npm run build && node --test dist/tests/daemon.test.js dist/tests/snapshot.test.js dist/tests/rojo.test.js dist/tests/property_loader.test.js dist/tests/pack.test.js",
    "dev": "tsx watch src/index.ts",
    "start": "node dist/index.js",
    "clean": "rimraf dist",
    "all": "pnpm build && pnpm build:plugin && pnpm install:g",
    "prepack": "npm run build",
    "prepublishOnly": "npm run build"
  },
  "engines": {
    "node": ">=20"
  },
  "keywords": [
    "roblox",
    "studio",
    "sync",
    "luau",
    "lsp",
    "rojo"
  ],
  "author": "",
  "license": "GPL-3.0-only",
  "repository": {
    "type": "git",
    "url": "https://github.com/Ransomwave/azul"
  },
  "dependencies": {
    "azul-sync": "link:",
    "chokidar": "^3.5.3",
    "ws": "^8.16.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/ws": "^8.5.10",
    "tsx": "^4.7.0",
    "typescript": "^5.3.3"
  }
}

``

# File: plugin\default.project.json
``
{
  "name": "AzulCompanionPlugin",
  "tree": {
    "$path": "sync/ReplicatedFirst/AzulCompanionPlugin"
  }
}

``

# File: plugin\rokit.toml
``
# This file lists tools managed by Rokit, a toolchain manager for Roblox projects.
# For more information, see https://github.com/rojo-rbx/rokit

# New tools can be added by running `rokit add <tool>` in a terminal.

[tools]
wally = "UpliftGames/wally@0.3.2"
wally-package-types = "JohnnyMorganz/wally-package-types@1.6.2"

``

# File: plugin\sourcemap.json
``
{
  "name": "Game",
  "className": "DataModel",
  "children": [
    {
      "name": "ReplicatedFirst",
      "className": "ReplicatedFirst",
      "guid": "7612",
      "children": [
        {
          "name": "AzulCompanionPlugin",
          "className": "Folder",
          "guid": "10020",
          "children": [
            {
              "name": "App",
              "className": "Folder",
              "guid": "10032",
              "children": [
                {
                  "name": "Assets",
                  "className": "ModuleScript",
                  "guid": "10337",
                  "filePaths": [
                    "sync/ReplicatedFirst/AzulCompanionPlugin/App/Assets.luau"
                  ]
                },
                {
                  "name": "Components",
                  "className": "Folder",
                  "guid": "10033",
                  "children": [
                    {
                      "name": "Border",
                      "className": "ModuleScript",
                      "guid": "10348",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Border.luau"
                      ]
                    },
                    {
                      "name": "Box",
                      "className": "ModuleScript",
                      "guid": "10349",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Box.luau"
                      ]
                    },
                    {
                      "name": "Checkbox",
                      "className": "ModuleScript",
                      "guid": "10346",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Checkbox.luau"
                      ]
                    },
                    {
                      "name": "Collapsible",
                      "className": "ModuleScript",
                      "guid": "10347",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Collapsible.luau"
                      ]
                    },
                    {
                      "name": "Container",
                      "className": "ModuleScript",
                      "guid": "10345",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Container.luau"
                      ]
                    },
                    {
                      "name": "Corner",
                      "className": "ModuleScript",
                      "guid": "10340",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Corner.luau"
                      ]
                    },
                    {
                      "name": "Dropdown",
                      "className": "ModuleScript",
                      "guid": "10339",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Dropdown.luau"
                      ]
                    },
                    {
                      "name": "IconButton",
                      "className": "ModuleScript",
                      "guid": "10341",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/IconButton.luau"
                      ]
                    },
                    {
                      "name": "Image",
                      "className": "ModuleScript",
                      "guid": "10343",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Image.luau"
                      ]
                    },
                    {
                      "name": "Input",
                      "className": "ModuleScript",
                      "guid": "10342",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Input.luau"
                      ]
                    },
                    {
                      "name": "List",
                      "className": "ModuleScript",
                      "guid": "10344",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/List.luau"
                      ]
                    },
                    {
                      "name": "OptionSelector",
                      "className": "ModuleScript",
                      "guid": "10350",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/OptionSelector.luau"
                      ]
                    },
                    {
                      "name": "Padding",
                      "className": "ModuleScript",
                      "guid": "10354",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Padding.luau"
                      ]
                    },
                    {
                      "name": "Plugin",
                      "className": "Folder",
                      "guid": "10034",
                      "children": [
                        {
                          "name": "Toolbar",
                          "className": "ModuleScript",
                          "guid": "10353",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Plugin/Toolbar.luau"
                          ]
                        },
                        {
                          "name": "ToolbarButton",
                          "className": "ModuleScript",
                          "guid": "10352",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Plugin/ToolbarButton.luau"
                          ]
                        },
                        {
                          "name": "Widget",
                          "className": "ModuleScript",
                          "guid": "10351",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Plugin/Widget.luau"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "ScrollingContainer",
                      "className": "ModuleScript",
                      "guid": "10356",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/ScrollingContainer.luau"
                      ]
                    },
                    {
                      "name": "Spinner",
                      "className": "ModuleScript",
                      "guid": "10366",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Spinner.luau"
                      ]
                    },
                    {
                      "name": "Text",
                      "className": "ModuleScript",
                      "guid": "10367",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Text.luau"
                      ]
                    },
                    {
                      "name": "TextButton",
                      "className": "ModuleScript",
                      "guid": "10355",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/TextButton.luau"
                      ]
                    },
                    {
                      "name": "Util",
                      "className": "Folder",
                      "guid": "10035",
                      "children": [
                        {
                          "name": "animate",
                          "className": "ModuleScript",
                          "guid": "10357",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/animate.luau"
                          ]
                        },
                        {
                          "name": "default",
                          "className": "ModuleScript",
                          "guid": "10358",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/default.luau"
                          ]
                        },
                        {
                          "name": "filterHost",
                          "className": "ModuleScript",
                          "guid": "10359",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/filterHost.luau"
                          ]
                        },
                        {
                          "name": "filterNumber",
                          "className": "ModuleScript",
                          "guid": "10362",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/filterNumber.luau"
                          ]
                        },
                        {
                          "name": "filterPort",
                          "className": "ModuleScript",
                          "guid": "10360",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/filterPort.luau"
                          ]
                        },
                        {
                          "name": "getState",
                          "className": "ModuleScript",
                          "guid": "10364",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/getState.luau"
                          ]
                        },
                        {
                          "name": "getTextSize",
                          "className": "ModuleScript",
                          "guid": "10365",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/getTextSize.luau"
                          ]
                        },
                        {
                          "name": "isState",
                          "className": "ModuleScript",
                          "guid": "10363",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/isState.luau"
                          ]
                        },
                        {
                          "name": "stripProps",
                          "className": "ModuleScript",
                          "guid": "10361",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/App/Components/Util/stripProps.luau"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Theme",
                  "className": "ModuleScript",
                  "guid": "10338",
                  "filePaths": [
                    "sync/ReplicatedFirst/AzulCompanionPlugin/App/Theme.luau"
                  ]
                },
                {
                  "name": "UI",
                  "className": "ModuleScript",
                  "guid": "10368",
                  "filePaths": [
                    "sync/ReplicatedFirst/AzulCompanionPlugin/App/UI.luau"
                  ]
                }
              ]
            },
            {
              "name": "AzulService",
              "className": "ModuleScript",
              "guid": "10369",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/AzulService.luau"
              ]
            },
            {
              "name": "AzulSync",
              "className": "Script",
              "guid": "12836",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/AzulSync.server.luau"
              ],
              "properties": {
                "RunContext": {
                  "__type": "EnumItem",
                  "enumType": "RunContext",
                  "name": "Plugin"
                }
              }
            },
            {
              "name": "Config",
              "className": "ModuleScript",
              "guid": "10334",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/Config.luau"
              ]
            },
            {
              "name": "Enums",
              "className": "ModuleScript",
              "guid": "10335",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/Enums.luau"
              ]
            },
            {
              "name": "Packages",
              "className": "Folder",
              "guid": "10023",
              "children": [
                {
                  "name": "_Index",
                  "className": "Folder",
                  "guid": "10024",
                  "children": [
                    {
                      "name": "dervexhero_fusion-03-dev@0.3.0-dev.1",
                      "className": "Folder",
                      "guid": "10025",
                      "children": [
                        {
                          "name": "fusion-03-dev",
                          "className": "ModuleScript",
                          "guid": "10283",
                          "filePaths": [
                            "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev.luau"
                          ],
                          "children": [
                            {
                              "name": "Animation",
                              "className": "Folder",
                              "guid": "10027",
                              "children": [
                                {
                                  "name": "getTweenRatio",
                                  "className": "ModuleScript",
                                  "guid": "10289",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/getTweenRatio.luau"
                                  ]
                                },
                                {
                                  "name": "lerpType",
                                  "className": "ModuleScript",
                                  "guid": "10288",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/lerpType.luau"
                                  ]
                                },
                                {
                                  "name": "packType",
                                  "className": "ModuleScript",
                                  "guid": "10291",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/packType.luau"
                                  ]
                                },
                                {
                                  "name": "Spring",
                                  "className": "ModuleScript",
                                  "guid": "10293",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/Spring.luau"
                                  ]
                                },
                                {
                                  "name": "springCoefficients",
                                  "className": "ModuleScript",
                                  "guid": "10292",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/springCoefficients.luau"
                                  ]
                                },
                                {
                                  "name": "SpringScheduler",
                                  "className": "ModuleScript",
                                  "guid": "10295",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/SpringScheduler.luau"
                                  ]
                                },
                                {
                                  "name": "Tween",
                                  "className": "ModuleScript",
                                  "guid": "10294",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/Tween.luau"
                                  ]
                                },
                                {
                                  "name": "TweenScheduler",
                                  "className": "ModuleScript",
                                  "guid": "10287",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/TweenScheduler.luau"
                                  ]
                                },
                                {
                                  "name": "unpackType",
                                  "className": "ModuleScript",
                                  "guid": "10290",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Animation/unpackType.luau"
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Colour",
                              "className": "Folder",
                              "guid": "10026",
                              "children": [
                                {
                                  "name": "Oklab",
                                  "className": "ModuleScript",
                                  "guid": "10286",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Colour/Oklab.luau"
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "External",
                              "className": "ModuleScript",
                              "guid": "10306",
                              "filePaths": [
                                "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/External.luau"
                              ]
                            },
                            {
                              "name": "Instances",
                              "className": "Folder",
                              "guid": "10030",
                              "children": [
                                {
                                  "name": "applyInstanceProps",
                                  "className": "ModuleScript",
                                  "guid": "10315",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/applyInstanceProps.luau"
                                  ]
                                },
                                {
                                  "name": "Attribute",
                                  "className": "ModuleScript",
                                  "guid": "10314",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/Attribute.luau"
                                  ]
                                },
                                {
                                  "name": "AttributeChange",
                                  "className": "ModuleScript",
                                  "guid": "10313",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/AttributeChange.luau"
                                  ]
                                },
                                {
                                  "name": "AttributeOut",
                                  "className": "ModuleScript",
                                  "guid": "10312",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/AttributeOut.luau"
                                  ]
                                },
                                {
                                  "name": "Children",
                                  "className": "ModuleScript",
                                  "guid": "10316",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/Children.luau"
                                  ]
                                },
                                {
                                  "name": "Cleanup",
                                  "className": "ModuleScript",
                                  "guid": "10318",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/Cleanup.luau"
                                  ]
                                },
                                {
                                  "name": "defaultProps",
                                  "className": "ModuleScript",
                                  "guid": "10317",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/defaultProps.luau"
                                  ]
                                },
                                {
                                  "name": "Hydrate",
                                  "className": "ModuleScript",
                                  "guid": "10320",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/Hydrate.luau"
                                  ]
                                },
                                {
                                  "name": "New",
                                  "className": "ModuleScript",
                                  "guid": "10319",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/New.luau"
                                  ]
                                },
                                {
                                  "name": "OnChange",
                                  "className": "ModuleScript",
                                  "guid": "10321",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/OnChange.luau"
                                  ]
                                },
                                {
                                  "name": "OnEvent",
                                  "className": "ModuleScript",
                                  "guid": "10322",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/OnEvent.luau"
                                  ]
                                },
                                {
                                  "name": "Out",
                                  "className": "ModuleScript",
                                  "guid": "10324",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/Out.luau"
                                  ]
                                },
                                {
                                  "name": "Ref",
                                  "className": "ModuleScript",
                                  "guid": "10323",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Instances/Ref.luau"
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Logging",
                              "className": "Folder",
                              "guid": "10029",
                              "children": [
                                {
                                  "name": "logError",
                                  "className": "ModuleScript",
                                  "guid": "10310",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Logging/logError.luau"
                                  ]
                                },
                                {
                                  "name": "logErrorNonFatal",
                                  "className": "ModuleScript",
                                  "guid": "10309",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Logging/logErrorNonFatal.luau"
                                  ]
                                },
                                {
                                  "name": "logWarn",
                                  "className": "ModuleScript",
                                  "guid": "10307",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Logging/logWarn.luau"
                                  ]
                                },
                                {
                                  "name": "messages",
                                  "className": "ModuleScript",
                                  "guid": "10308",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Logging/messages.luau"
                                  ]
                                },
                                {
                                  "name": "parseError",
                                  "className": "ModuleScript",
                                  "guid": "10311",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Logging/parseError.luau"
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "PubTypes",
                              "className": "ModuleScript",
                              "guid": "10325",
                              "filePaths": [
                                "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/PubTypes.luau"
                              ]
                            },
                            {
                              "name": "RobloxExternal",
                              "className": "ModuleScript",
                              "guid": "10285",
                              "filePaths": [
                                "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/RobloxExternal.luau"
                              ]
                            },
                            {
                              "name": "State",
                              "className": "Folder",
                              "guid": "10028",
                              "children": [
                                {
                                  "name": "Computed",
                                  "className": "ModuleScript",
                                  "guid": "10304",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/Computed.luau"
                                  ]
                                },
                                {
                                  "name": "ForKeys",
                                  "className": "ModuleScript",
                                  "guid": "10303",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/ForKeys.luau"
                                  ]
                                },
                                {
                                  "name": "ForPairs",
                                  "className": "ModuleScript",
                                  "guid": "10305",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/ForPairs.luau"
                                  ]
                                },
                                {
                                  "name": "ForValues",
                                  "className": "ModuleScript",
                                  "guid": "10301",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/ForValues.luau"
                                  ]
                                },
                                {
                                  "name": "isState",
                                  "className": "ModuleScript",
                                  "guid": "10302",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/isState.luau"
                                  ]
                                },
                                {
                                  "name": "makeUseCallback",
                                  "className": "ModuleScript",
                                  "guid": "10300",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/makeUseCallback.luau"
                                  ]
                                },
                                {
                                  "name": "Observer",
                                  "className": "ModuleScript",
                                  "guid": "10299",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/Observer.luau"
                                  ]
                                },
                                {
                                  "name": "peek",
                                  "className": "ModuleScript",
                                  "guid": "10298",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/peek.luau"
                                  ]
                                },
                                {
                                  "name": "updateAll",
                                  "className": "ModuleScript",
                                  "guid": "10297",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/updateAll.luau"
                                  ]
                                },
                                {
                                  "name": "Value",
                                  "className": "ModuleScript",
                                  "guid": "10296",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/State/Value.luau"
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Types",
                              "className": "ModuleScript",
                              "guid": "10284",
                              "filePaths": [
                                "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Types.luau"
                              ]
                            },
                            {
                              "name": "Utility",
                              "className": "Folder",
                              "guid": "10031",
                              "children": [
                                {
                                  "name": "cleanup",
                                  "className": "ModuleScript",
                                  "guid": "10329",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/cleanup.luau"
                                  ]
                                },
                                {
                                  "name": "Contextual",
                                  "className": "ModuleScript",
                                  "guid": "10331",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/Contextual.luau"
                                  ]
                                },
                                {
                                  "name": "doNothing",
                                  "className": "ModuleScript",
                                  "guid": "10330",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/doNothing.luau"
                                  ]
                                },
                                {
                                  "name": "isSimilar",
                                  "className": "ModuleScript",
                                  "guid": "10333",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/isSimilar.luau"
                                  ]
                                },
                                {
                                  "name": "needsDestruction",
                                  "className": "ModuleScript",
                                  "guid": "10332",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/needsDestruction.luau"
                                  ]
                                },
                                {
                                  "name": "None",
                                  "className": "ModuleScript",
                                  "guid": "10327",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/None.luau"
                                  ]
                                },
                                {
                                  "name": "restrictRead",
                                  "className": "ModuleScript",
                                  "guid": "10328",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/restrictRead.luau"
                                  ]
                                },
                                {
                                  "name": "xtypeof",
                                  "className": "ModuleScript",
                                  "guid": "10326",
                                  "filePaths": [
                                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/_Index/dervexhero_fusion-03-dev@0.3.0-dev.1/fusion-03-dev/Utility/xtypeof.luau"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "fusion",
                  "className": "ModuleScript",
                  "guid": "10282",
                  "filePaths": [
                    "sync/ReplicatedFirst/AzulCompanionPlugin/Packages/fusion.luau"
                  ]
                }
              ]
            },
            {
              "name": "Serializer",
              "className": "ModuleScript",
              "guid": "10259",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/Serializer.luau"
              ]
            },
            {
              "name": "SettingsStore",
              "className": "ModuleScript",
              "guid": "10258",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/SettingsStore.luau"
              ]
            },
            {
              "name": "StudioWidgets",
              "className": "Folder",
              "guid": "10021",
              "children": [
                {
                  "name": "Components",
                  "className": "Folder",
                  "guid": "10022",
                  "children": [
                    {
                      "name": "CollapsibleTitledSection",
                      "className": "ModuleScript",
                      "guid": "10275",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/CollapsibleTitledSection.luau"
                      ]
                    },
                    {
                      "name": "ColorPicker",
                      "className": "ModuleScript",
                      "guid": "10274",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/ColorPicker.luau"
                      ]
                    },
                    {
                      "name": "CustomTextButton",
                      "className": "ModuleScript",
                      "guid": "10276",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/CustomTextButton.luau"
                      ]
                    },
                    {
                      "name": "DropdownMenu",
                      "className": "ModuleScript",
                      "guid": "10278",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/DropdownMenu.luau"
                      ]
                    },
                    {
                      "name": "HorizontalLine",
                      "className": "ModuleScript",
                      "guid": "10277",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/HorizontalLine.luau"
                      ]
                    },
                    {
                      "name": "ImageButtonWithText",
                      "className": "ModuleScript",
                      "guid": "10279",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/ImageButtonWithText.luau"
                      ]
                    },
                    {
                      "name": "LabeledCheckbox",
                      "className": "ModuleScript",
                      "guid": "10272",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledCheckbox.luau"
                      ]
                    },
                    {
                      "name": "LabeledColorInputPicker",
                      "className": "ModuleScript",
                      "guid": "10273",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledColorInputPicker.luau"
                      ]
                    },
                    {
                      "name": "LabeledMultiChoice",
                      "className": "ModuleScript",
                      "guid": "10271",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledMultiChoice.luau"
                      ]
                    },
                    {
                      "name": "LabeledNumberInput",
                      "className": "ModuleScript",
                      "guid": "10270",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledNumberInput.luau"
                      ]
                    },
                    {
                      "name": "LabeledRadioButton",
                      "className": "ModuleScript",
                      "guid": "10265",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledRadioButton.luau"
                      ]
                    },
                    {
                      "name": "LabeledSlider",
                      "className": "ModuleScript",
                      "guid": "10267",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledSlider.luau"
                      ]
                    },
                    {
                      "name": "LabeledTextInput",
                      "className": "ModuleScript",
                      "guid": "10269",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledTextInput.luau"
                      ]
                    },
                    {
                      "name": "LabeledToggleButton",
                      "className": "ModuleScript",
                      "guid": "10268",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/LabeledToggleButton.luau"
                      ]
                    },
                    {
                      "name": "StatefulImageButton",
                      "className": "ModuleScript",
                      "guid": "10264",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/StatefulImageButton.luau"
                      ]
                    },
                    {
                      "name": "VerticallyScalingListFrame",
                      "className": "ModuleScript",
                      "guid": "10266",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/VerticallyScalingListFrame.luau"
                      ]
                    },
                    {
                      "name": "VerticalScrollingFrame",
                      "className": "ModuleScript",
                      "guid": "10263",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/VerticalScrollingFrame.luau"
                      ]
                    },
                    {
                      "name": "VerticalSpacer",
                      "className": "ModuleScript",
                      "guid": "10262",
                      "filePaths": [
                        "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/Components/VerticalSpacer.luau"
                      ]
                    }
                  ]
                },
                {
                  "name": "GuiUtilities",
                  "className": "ModuleScript",
                  "guid": "10261",
                  "filePaths": [
                    "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/GuiUtilities.luau"
                  ]
                },
                {
                  "name": "RbxGui",
                  "className": "ModuleScript",
                  "guid": "10260",
                  "filePaths": [
                    "sync/ReplicatedFirst/AzulCompanionPlugin/StudioWidgets/RbxGui.luau"
                  ]
                }
              ]
            },
            {
              "name": "SyncSession",
              "className": "ModuleScript",
              "guid": "10336",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/SyncSession.luau"
              ]
            },
            {
              "name": "UI",
              "className": "ModuleScript",
              "guid": "10280",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/UI.luau"
              ]
            },
            {
              "name": "WebSocketClient",
              "className": "ModuleScript",
              "guid": "10281",
              "filePaths": [
                "sync/ReplicatedFirst/AzulCompanionPlugin/WebSocketClient.luau"
              ]
            }
          ]
        }
      ],
      "properties": {
        "Archivable": true
      }
    }
  ],
  "_azul": {
    "packVersion": 1,
    "packedAt": "2026-05-29T22:04:12.826Z",
    "mode": "all"
  }
}

``

# File: plugin\stylua.toml
``
call_parentheses = "Input"
collapse_simple_statement = "Always"
``

# File: plugin\wally.toml
``
[package]
name = "azul/plugin"
version = "0.1.0"
registry = "https://github.com/UpliftGames/wally-index"
realm = "shared"

[dependencies]
fusion = "dervexhero/fusion-03-dev@0.3.0-dev.1"
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\AzulService.luau
``
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

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\AzulSync.server.luau
``
--!strict
--[[
	Azul - Roblox Studio Plugin.
	Companion plugin for Azul to sync scripts between Roblox Studio and external editors.

	Ransomwave 2025
]]

local RunService = game:GetService("RunService")

-- Prevent from running if the game is being Playtested
if RunService:IsRunning() then return end

local pluginParent = script.Parent
if not pluginParent then return end

-- Modules
local UI = require("./UI")
local Config = require("./Config")
local Enums = require("./Enums")
local SettingsStore = require("./SettingsStore")
local SyncSession = require("./SyncSession")

-- UI Apps
local azulApp = require("./App/UI")
local azulLegacyUI = require("./UI")

-- State Management
local settingsStore = SettingsStore.new(plugin, Config, Enums.scope, {
	defaultScope = Enums.scope.GLOBAL,
})
settingsStore:loadSettings()

local session = SyncSession.new(plugin, settingsStore, Config)

--[=[
    UI Callback Handlers
]=]
local uiCallbacks: UI.CallbackFunctions = {
	onStartSync = function()
		-- If the auto-connect runner is active, stop it while user triggers manual start.
		session:stopAutoConnect()

		session:startSync()

		-- If Auto Connect still requested, restart the auto-connect runner to monitor
		if Config.AUTO_CONNECT then session:startAutoConnect() end
	end,

	onStopSync = function() session:stopSync() end,

	onAutoConnectChanged = function(newValue: boolean)
		Config.AUTO_CONNECT = newValue
		session:debugPrint(`Auto Connect changed: {newValue}`)
		if newValue then
			session:startAutoConnect()
		else
			session:stopAutoConnect()
			if session.syncEnabled and not session.handshakeComplete then session:stopSync() end
		end
	end,

	onConfigChanged = function(key, value)
		session:debugPrint(
			`Config {key} updated to: {if type(value) == "table" then table.concat(value, ", ") else tostring(value)}`
		)
		Config[key] = value
		if key == "SERVICE_LIST" then session:rebuildServiceSet() end
		if key == "AUTO_CONNECT" then
			if value then
				session:startAutoConnect()
			else
				session:stopAutoConnect()
				if session.syncEnabled and not session.handshakeComplete then session:stopSync() end
			end
		end
	end,

	onSettingsScopeChanged = function(newScope) session:onSettingsScopeChanged(newScope) end,

	onSourcemapReload = function()
		session:infoPrint("Reloading sourcemap...")
		session:reloadSourcemap()
	end,
}

local uiHelpers = {
	rebuildServiceSet = function() session:rebuildServiceSet() end,

	openPlaceConfig = function()
		local ScriptEditorService = game:GetService("ScriptEditorService")
		local ServerStorage = game:GetService("ServerStorage")
		local azulFolder = ServerStorage:FindFirstChild("Azul") :: Folder

		if not azulFolder then
			local newAzulFolder = Instance.new("Folder")
			newAzulFolder.Name = "Azul"
			newAzulFolder.Parent = ServerStorage
			azulFolder = newAzulFolder
		end

		local azulDaemonSettings = azulFolder:FindFirstChild("Config") :: ModuleScript
		if not azulDaemonSettings then
			local newConfigModule = Instance.new("ModuleScript")
			newConfigModule.Name = "Config"
			newConfigModule.Source = [[
-- Per-place Daemon configuration
-- This file is sent to the Daemon when it connects.
-- https://azul-docs.vercel.app/advanced-usage/#per-place-daemon-configuration

return {}
]]
			newConfigModule.Parent = azulFolder
			azulDaemonSettings = newConfigModule
		end

		ScriptEditorService:OpenScriptDocumentAsync(azulDaemonSettings)
	end,
}

--[=[
    Initialization
]=]
local USE_LEGACY_UI = false

if not USE_LEGACY_UI then
	local newAzulUI = azulApp.new(plugin, uiCallbacks, settingsStore:getScope(), uiHelpers)
	session:setUI(newAzulUI)
else
	warn(`[Azul::{script}]: Using legacy UI, this is not recommended!`)
	local azulUI = UI.new(plugin, uiCallbacks, settingsStore:getScope(), uiHelpers)
	session:setUI(azulUI)
end

-- Plugin Lifecycle
plugin.Unloading:Connect(function()
	session:stopAutoConnect()
	settingsStore:saveSettings()
	settingsStore:saveSelectedScope()
	session:stopSync()
end)

if Config.AUTO_CONNECT then
	session:startAutoConnect()
else
	session:infoPrint("Plugin loaded. Click on the 'Azul' button to connect.")
end

session:debugPrint("Debug mode is enabled!")
session:debugPrint(`Service list type is set to: "{Config.LIST_TYPE}"`)

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\Config.luau
``
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
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\Enums.luau
``
return {
	listType = {
		WHITELIST = "WHITELIST",
		BLACKLIST = "BLACKLIST",
	},

	scope = {
		GLOBAL = "global",
		PROJECT = "project",
	},
}

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\Serializer.luau
``
--!strict
--[[
	Serializer for Roblox data types and instances
	
	Handles conversion of complex Roblox types to plain tables for JSON serialization,
	and back from those tables to Roblox types. Also manages which properties of instances
	should be serialized based on ReflectionService metadata.

	Ransomwave 2026
]]

local Serializer = {}

local ReflectionService = game:GetService("ReflectionService")
local CollectionService = game:GetService("CollectionService")

local FALLBACK_SERIALIZABLE_PROPERTIES = {
	"Archivable",
	"Enabled",
	"RunContext",
	"LinkedSource",
	"Disabled",
	"Visible",
	"Active",
	"AutomaticSize",
	"AnchorPoint",
	"Position",
	"Rotation",
	"Size",
	"Text",
	"TextColor3",
	"TextSize",
	"BackgroundColor3",
	"BackgroundTransparency",
	"Image",
	"ImageColor3",
	"ImageTransparency",
	"LayoutOrder",
	"ZIndex",
	"AutoButtonColor",
	"RichText",
	"TextScaled",
	"TextWrapped",
	"FontFace",
	"Transparency",
	"Color",
	"Material",
	"Reflectance",
	"CanCollide",
	"CanTouch",
	"CanQuery",
	"CastShadow",
	"Locked",
	"Massless",
	"Shape",
	"SizeConstraint",
	"CFrame",
	"Orientation",
	"PivotOffset",
	"BrickColor",
	"TopSurface",
	"BottomSurface",
	"LeftSurface",
	"RightSurface",
	"FrontSurface",
	"BackSurface",
	"MeshId",
	"TextureID",
	"DoubleSided",
	"Offset",
	"Scale",
	"SoundId",
	"Volume",
	"PlaybackSpeed",
	"Looped",
	"RollOffMode",
	"RollOffMaxDistance",
	"RollOffMinDistance",
	"PlayOnRemove",
	"AnimationId",
	"Value",
	"CurrentCamera",
	"FieldOfView",
	"Ambient",
	"Brightness",
	"ClockTime",
	"FogColor",
	"FogEnd",
	"FogStart",
	"GlobalShadows",
	"OutdoorAmbient",
	"Technology",
	"PrimaryPart",
	"WorldPivot",
	"MetalnessMap",
	"NormalMap",
	"RoughnessMap",
	"ColorMap",
}

local FALLBACK_SERIALIZABLE_PROPERTY_SET: { [string]: boolean } = {}
for _, propertyName in ipairs(FALLBACK_SERIALIZABLE_PROPERTIES) do
	FALLBACK_SERIALIZABLE_PROPERTY_SET[propertyName] = true
end

local SERIALIZABLE_PROPERTIES_CACHE: { string }? = nil
local SERIALIZABLE_PROPERTY_SET_CACHE: { [string]: boolean }? = nil
local writablePropertiesByClass: { [string]: { [string]: boolean } } = {}
local defaultSerializedPropertiesByClass: { [string]: { [string]: any } } = {}
local canonicalPropertyByLowerByClass: { [string]: { [string]: string } } = {}

local function enumItemFromNumber(enumItems: { any }, value: number): any
	for _, item in ipairs(enumItems) do
		if item.Value == value then return item end
	end
	return nil
end

local function enumItemFromName(enumItems: { any }, name: string): any
	for _, item in ipairs(enumItems) do
		if item.Name == name then return item end
	end
	return nil
end

local function parseCFrameFromValue(recordValue: any): CFrame?
	if type(recordValue) ~= "table" then return nil end

	if type(recordValue.position) == "table" and type(recordValue.rotation) == "table" then
		local position = recordValue.position
		local rotation = recordValue.rotation
		if #position == 3 and #rotation == 9 then
			return CFrame.new(
				position[1],
				position[2],
				position[3],
				rotation[1],
				rotation[2],
				rotation[3],
				rotation[4],
				rotation[5],
				rotation[6],
				rotation[7],
				rotation[8],
				rotation[9]
			)
		end
	end

	if type(recordValue.components) == "table" then return CFrame.new(unpack(recordValue.components)) end

	return nil
end

local function getInstancePathSegments(instance: Instance): { string }?
	local path = {}
	local current: Instance? = instance

	while current and current ~= game do
		table.insert(path, 1, current.Name)
		current = current.Parent
	end

	if current ~= game then return nil end
	return path
end

local function findInstanceByPath(pathSegments: { string }): Instance?
	local current: Instance = game
	for index, segment in ipairs(pathSegments) do
		local nextNode: Instance? = nil

		if index == 1 then
			local ok, service = pcall(function()
				return game:GetService(segment)
			end)
			if ok and service then nextNode = service end
		end

		if not nextNode then nextNode = current:FindFirstChild(segment) end
		if not nextNode then return nil end
		current = nextNode
	end

	return current
end

--[=[
	Serializes a value into a format suitable for JSON encoding, handling Roblox-specific types.
	@param value any - The value to serialize
	@param options table? - Optional parameters for serialization
	@return any - The serialized representation of the value
]=]
function Serializer.serializeValue(
	value: any,
	options: { getInstanceRefData: ((Instance) -> { guid: string?, path: { string }? }?)? }?
): any
	local kind = typeof(value)

	if kind == "nil" then return nil end
	if kind == "boolean" or kind == "string" or kind == "number" then return value end

	if kind == "Color3" then
		local color = value :: Color3
		return { __type = "Color3", r = color.R, g = color.G, b = color.B }
	end

	if kind == "Vector2" then
		local vector = value :: Vector2
		return { __type = "Vector2", x = vector.X, y = vector.Y }
	end

	if kind == "Vector2int16" then
		local vector = value :: Vector2int16
		return { __type = "Vector2int16", x = vector.X, y = vector.Y }
	end

	if kind == "Vector3" then
		local vector = value :: Vector3
		return { __type = "Vector3", x = vector.X, y = vector.Y, z = vector.Z }
	end

	if kind == "Vector3int16" then
		local vector = value :: Vector3int16
		return { __type = "Vector3int16", x = vector.X, y = vector.Y, z = vector.Z }
	end

	if kind == "UDim" then
		local u = value :: UDim
		return { __type = "UDim", scale = u.Scale, offset = u.Offset }
	end

	if kind == "UDim2" then
		local u = value :: UDim2
		return {
			__type = "UDim2",
			xScale = u.X.Scale,
			xOffset = u.X.Offset,
			yScale = u.Y.Scale,
			yOffset = u.Y.Offset,
		}
	end

	if kind == "Rect" then
		local rect = value :: Rect
		return {
			__type = "Rect",
			minX = rect.Min.X,
			minY = rect.Min.Y,
			maxX = rect.Max.X,
			maxY = rect.Max.Y,
		}
	end

	if kind == "CFrame" then
		local cf = value :: CFrame
		return { __type = "CFrame", components = { cf:GetComponents() } }
	end

	if kind == "BrickColor" then
		local brick = value :: BrickColor
		return { __type = "BrickColor", number = brick.Number }
	end

	if kind == "EnumItem" then
		local enumItem = value :: EnumItem
		return {
			__type = "EnumItem",
			enumType = tostring(enumItem.EnumType),
			name = enumItem.Name,
		}
	end

	if kind == "NumberRange" then
		local range = value :: NumberRange
		return { __type = "NumberRange", min = range.Min, max = range.Max }
	end

	if kind == "NumberSequence" then
		local sequence = value :: NumberSequence
		local keypoints = {}
		for _, keypoint in ipairs(sequence.Keypoints) do
			table.insert(keypoints, {
				time = keypoint.Time,
				value = keypoint.Value,
				envelope = keypoint.Envelope,
			})
		end
		return { __type = "NumberSequence", keypoints = keypoints }
	end

	if kind == "ColorSequence" then
		local sequence = value :: ColorSequence
		local keypoints = {}
		for _, keypoint in ipairs(sequence.Keypoints) do
			table.insert(keypoints, {
				time = keypoint.Time,
				color = Serializer.serializeValue(keypoint.Value, options),
			})
		end
		return { __type = "ColorSequence", keypoints = keypoints }
	end

	if kind == "Font" then
		local font = value :: Font
		return {
			__type = "Font",
			family = font.Family,
			weight = font.Weight and font.Weight.Value or nil,
			style = font.Style and font.Style.Value or nil,
		}
	end

	if kind == "PhysicalProperties" then
		local props = value :: PhysicalProperties
		return {
			__type = "PhysicalProperties",
			density = props.Density,
			friction = props.Friction,
			elasticity = props.Elasticity,
			frictionWeight = props.FrictionWeight,
			elasticityWeight = props.ElasticityWeight,
		}
	end

	if kind == "Axes" then
		local axes = value :: Axes
		return { __type = "Axes", x = axes.X, y = axes.Y, z = axes.Z }
	end

	if kind == "Faces" then
		local faces = value :: Faces
		return {
			__type = "Faces",
			top = faces.Top,
			bottom = faces.Bottom,
			left = faces.Left,
			right = faces.Right,
			front = faces.Front,
			back = faces.Back,
		}
	end

	if kind == "Ray" then
		local ray = value :: Ray
		return {
			__type = "Ray",
			origin = Serializer.serializeValue(ray.Origin, options),
			direction = Serializer.serializeValue(ray.Direction, options),
		}
	end

	if kind == "Instance" then
		local instanceValue = value :: Instance
		local guid: string? = nil
		local path: { string }? = nil

		if options and options.getInstanceRefData then
			local ok, refData = pcall(function()
				return options.getInstanceRefData(instanceValue)
			end)
			if ok and type(refData) == "table" then
				if type(refData.guid) == "string" then guid = refData.guid end
				if type(refData.path) == "table" then path = refData.path end
			end
		end

		if not guid then
			local okGuid, debugId = pcall(function()
				return instanceValue:GetDebugId(0)
			end)
			if okGuid and type(debugId) == "string" and debugId ~= "" then guid = debugId end
		end

		if not path then path = getInstancePathSegments(instanceValue) end

		return {
			__type = "InstanceRef",
			guid = guid,
			path = path,
		}
	end

	if kind == "Region3" then
		local cframe = value.CFrame
		local size = value.Size
		return {
			__type = "Region3",
			min = { x = cframe.X - size.X / 2, y = cframe.Y - size.Y / 2, z = cframe.Z - size.Z / 2 },
			max = { x = cframe.X + size.X / 2, y = cframe.Y + size.Y / 2, z = cframe.Z + size.Z / 2 },
		}
	end

	if kind == "Region3int16" then
		local region = value :: Region3int16
		return {
			__type = "Region3int16",
			min = { x = region.Min.X, y = region.Min.Y, z = region.Min.Z },
			max = { x = region.Max.X, y = region.Max.Y, z = region.Max.Z },
		}
	end

	return nil
end

--[=[
	Deserializes a value from the format produced by serializeValue, reconstructing Roblox-specific types.
	@param value any - The value to deserialize
	@param options table? - Optional parameters for deserialization, such as instance resolution functions
	@return any - The deserialized Roblox type, or the original value if it cannot be deserialized
]=]
function Serializer.deserializeValue(
	value: any,
	options: {
		resolveInstanceByGuid: ((string) -> Instance?)?,
		resolveInstanceByPath: (({ string }) -> Instance?)?,
	}?
): any
	if type(value) ~= "table" then return value end

	local record = value :: { [string]: any }
	local valueType = record.__type
	local payload = record

	if type(valueType) ~= "string" then
		if type(record.type) ~= "string" then return value end
		valueType = record.type
		payload = record.value
	end

	if valueType == "Ref" then
		local guidFromRef = if type(payload) == "string" then payload else nil
		valueType = "InstanceRef"
		payload = {
			guid = guidFromRef,
			path = nil,
		}
	end

	if valueType == "nil" then return nil end
	if valueType == "Color3" then
		local source = if type(payload) == "table" then payload else record
		return Color3.new(source.r, source.g, source.b)
	end
	if valueType == "Color3uint8" then
		local source = if type(payload) == "table" then payload else record
		return Color3.fromRGB(source.r, source.g, source.b)
	end
	if valueType == "Vector2" then
		local source = if type(payload) == "table" then payload else record
		return Vector2.new(source.x, source.y)
	end
	if valueType == "Vector2int16" then
		local source = if type(payload) == "table" then payload else record
		return Vector2int16.new(source.x, source.y)
	end
	if valueType == "Vector3" then
		local source = if type(payload) == "table" then payload else record
		return Vector3.new(source.x, source.y, source.z)
	end
	if valueType == "Vector3int16" then
		local source = if type(payload) == "table" then payload else record
		return Vector3int16.new(source.x, source.y, source.z)
	end
	if valueType == "UDim" then
		local source = if type(payload) == "table" then payload else record
		return UDim.new(source.scale, source.offset)
	end
	if valueType == "UDim2" then
		if type(payload) == "table" and type(payload.x) == "table" and type(payload.y) == "table" then
			return UDim2.new(payload.x.scale, payload.x.offset, payload.y.scale, payload.y.offset)
		end
		return UDim2.new(record.xScale, record.xOffset, record.yScale, record.yOffset)
	end
	if valueType == "Rect" then
		if type(payload) == "table" and type(payload.min) == "table" and type(payload.max) == "table" then
			return Rect.new(payload.min.x, payload.min.y, payload.max.x, payload.max.y)
		end
		return Rect.new(record.minX, record.minY, record.maxX, record.maxY)
	end
	if valueType == "CFrame" then
		if type(record.components) == "table" then return CFrame.new(unpack(record.components)) end
		return parseCFrameFromValue(payload)
	end
	if valueType == "OptionalCFrame" or valueType == "OptionalCoordinateFrame" then
		if payload == nil then return nil end
		return parseCFrameFromValue(payload)
	end
	if valueType == "BrickColor" then
		local source = if type(payload) == "number" then payload else record.number
		return BrickColor.new(source)
	end
	if valueType == "EnumItem" then
		if type(record.enumType) ~= "string" or type(record.name) ~= "string" then return nil end
		local enumName = record.enumType:match("Enum%.(.+)") or record.enumType
		local enum = Enum[enumName]
		if enum then return enum[record.name] end
		return nil
	end
	if valueType == "Enum" then
		if type(payload) ~= "table" then return nil end
		local enumName = payload.enumType
		if type(enumName) ~= "string" then return nil end
		local enum = Enum[enumName]
		if not enum then return nil end
		if type(payload.value) == "string" then return enum[payload.value] end
		if type(payload.value) == "number" then return enumItemFromNumber(enum:GetEnumItems(), payload.value) end
		return nil
	end
	if valueType == "NumberRange" then
		if type(payload) == "table" then return NumberRange.new(payload.min, payload.max) end
		return NumberRange.new(record.min, record.max)
	end
	if valueType == "NumberSequence" then
		local source = record.keypoints
		if type(payload) == "table" and type(payload.keypoints) == "table" then source = payload.keypoints end
		local keypoints = {}
		for _, keypoint in ipairs(source or {}) do
			table.insert(keypoints, NumberSequenceKeypoint.new(keypoint.time, keypoint.value, keypoint.envelope or 0))
		end
		if #keypoints > 0 then return NumberSequence.new(keypoints) end
		return nil
	end
	if valueType == "ColorSequence" then
		local source = record.keypoints
		if type(payload) == "table" and type(payload.keypoints) == "table" then source = payload.keypoints end
		local keypoints = {}
		for _, keypoint in ipairs(source or {}) do
			local color = keypoint.color
			if type(color) == "table" and color.r ~= nil and color.g ~= nil and color.b ~= nil then
				color = Color3.new(color.r, color.g, color.b)
			else
				color = Serializer.deserializeValue(color, options)
			end

			if typeof(color) == "Color3" then
				table.insert(keypoints, ColorSequenceKeypoint.new(keypoint.time, color))
			end
		end
		if #keypoints > 0 then return ColorSequence.new(keypoints) end
		return nil
	end
	if valueType == "Font" then
		local source = if type(payload) == "table" then payload else record
		local weight = Enum.FontWeight.Regular
		local style = Enum.FontStyle.Normal

		if type(source.weight) == "number" then
			local matched = enumItemFromNumber(Enum.FontWeight:GetEnumItems(), source.weight)
			if matched then weight = matched end
		elseif type(source.weight) == "string" then
			local matched = enumItemFromName(Enum.FontWeight:GetEnumItems(), source.weight)
			if matched then weight = matched end
		end

		if type(source.style) == "number" then
			local matched = enumItemFromNumber(Enum.FontStyle:GetEnumItems(), source.style)
			if matched then style = matched end
		elseif type(source.style) == "string" then
			local matched = enumItemFromName(Enum.FontStyle:GetEnumItems(), source.style)
			if matched then style = matched end
		end

		return Font.new(source.family, weight, style)
	end
	if valueType == "PhysicalProperties" then
		if payload == nil then return nil end
		local source = if type(payload) == "table" then payload else record
		return PhysicalProperties.new(
			source.density,
			source.friction,
			source.elasticity,
			source.frictionWeight,
			source.elasticityWeight
		)
	end
	if valueType == "Axes" then
		local source = if type(payload) == "table" then payload else record
		return Axes.new(source.x, source.y, source.z)
	end
	if valueType == "Faces" then
		local source = if type(payload) == "table" then payload else record
		return Faces.new(source.top, source.bottom, source.left, source.right, source.front, source.back)
	end
	if valueType == "Ray" then
		local source = if type(payload) == "table" then payload else record
		local origin = Serializer.deserializeValue(source.origin, options)
		local direction = Serializer.deserializeValue(source.direction, options)
		if typeof(origin) == "Vector3" and typeof(direction) == "Vector3" then return Ray.new(origin, direction) end
		return nil
	end
	if valueType == "InstanceRef" then
		local source = if type(payload) == "table" then payload else record
		local guid = if type(source.guid) == "string" then source.guid else nil
		local path = if type(source.path) == "table" then source.path else nil

		if guid and options and options.resolveInstanceByGuid then
			local resolvedByGuid = options.resolveInstanceByGuid(guid)
			if resolvedByGuid then return resolvedByGuid end
		end

		if path then
			if options and options.resolveInstanceByPath then
				local resolvedByPath = options.resolveInstanceByPath(path)
				if resolvedByPath then return resolvedByPath end
			end

			local resolvedByDefaultPath = findInstanceByPath(path)
			if resolvedByDefaultPath then return resolvedByDefaultPath end
		end

		return nil
	end
	if valueType == "Region3" then
		local source = if type(payload) == "table" then payload else record
		if type(source.min) ~= "table" or type(source.max) ~= "table" then return nil end
		return Region3.new(
			Vector3.new(source.min.x, source.min.y, source.min.z),
			Vector3.new(source.max.x, source.max.y, source.max.z)
		)
	end
	if valueType == "Region3int16" then
		local source = if type(payload) == "table" then payload else record
		if type(source.min) ~= "table" or type(source.max) ~= "table" then return nil end
		return Region3int16.new(
			Vector3int16.new(source.min.x, source.min.y, source.min.z),
			Vector3int16.new(source.max.x, source.max.y, source.max.z)
		)
	end

	return nil
end

local function toSet(items: { string }): { [string]: boolean }
	local set = {}
	for _, item in ipairs(items) do
		set[item] = true
	end
	return set
end

local function buildSerializableProperties(): { string }
	if not ReflectionService then return FALLBACK_SERIALIZABLE_PROPERTIES end

	local classOk, classes = pcall(function()
		return ReflectionService:GetClasses()
	end)

	if not classOk or type(classes) ~= "table" then return FALLBACK_SERIALIZABLE_PROPERTIES end

	local propertySet: { [string]: boolean } = {}

	for _, classInfo in ipairs(classes) do
		local className = classInfo.Name
		if type(className) ~= "string" then continue end

		local propsOk, reflectedProperties = pcall(function()
			return ReflectionService:GetPropertiesOfClass(className, {
				ExcludeDisplay = true,
			})
		end)

		if not propsOk or type(reflectedProperties) ~= "table" then continue end

		for _, reflected in ipairs(reflectedProperties) do
			local reflectedName = reflected.Name
			if type(reflectedName) ~= "string" then continue end

			if
				reflected.Serialized == true
				and reflectedName ~= "Name"
				and reflectedName ~= "Parent"
				and reflectedName ~= "Source"
			then
				propertySet[reflectedName] = true
			end
		end
	end

	for _, fallbackProperty in ipairs(FALLBACK_SERIALIZABLE_PROPERTIES) do
		propertySet[fallbackProperty] = true
	end

	local properties = {}
	for propertyName in pairs(propertySet) do
		table.insert(properties, propertyName)
	end

	table.sort(properties)

	if #properties == 0 then return FALLBACK_SERIALIZABLE_PROPERTIES end

	return properties
end

--[=[
	Returns a list of property names that should be considered for serialization when collecting instance properties.
	Uses ReflectionService metadata to determine which properties are marked as serialized, with a fallback list if ReflectionService is unavailable.
	@return { string } - An array of property names that are serializable
]=]
function Serializer.getSerializableProperties(): { string }
	local cached = SERIALIZABLE_PROPERTIES_CACHE
	if cached then return cached end

	local built = buildSerializableProperties()
	SERIALIZABLE_PROPERTIES_CACHE = built
	return built
end

local function getSerializablePropertySet(): { [string]: boolean }
	local cached = SERIALIZABLE_PROPERTY_SET_CACHE
	if cached then return cached end

	local built = toSet(Serializer.getSerializableProperties())
	SERIALIZABLE_PROPERTY_SET_CACHE = built
	return built
end

--[=[
	Returns a set of property names that are writable and should be serialized for a given class name.
	Uses ReflectionService to filter properties based on their Serialized attribute, with a fallback to a predefined list if ReflectionService is unavailable or does not provide information for the class.
	@param className string - The name of the class to get serializable properties for
	@return { [string]: boolean } - A set of property names that are writable and serializable for the class
]=]
function Serializer.getWritableSerializablePropertySetForClass(className: string): { [string]: boolean }
	local cached = writablePropertiesByClass[className]
	if cached then return cached end

	local serializablePropertySet = getSerializablePropertySet()
	local fallback = {}
	for propertyName in pairs(serializablePropertySet) do
		fallback[propertyName] = true
	end

	if not ReflectionService then
		writablePropertiesByClass[className] = fallback
		return fallback
	end

	local ok, reflectedProperties = pcall(function()
		return ReflectionService:GetPropertiesOfClass(className)
	end)

	if not ok or type(reflectedProperties) ~= "table" then
		writablePropertiesByClass[className] = fallback
		return fallback
	end

	local filtered = {}
	for _, reflected in ipairs(reflectedProperties) do
		local reflectedName = reflected.Name
		if type(reflectedName) ~= "string" then continue end

		if not serializablePropertySet[reflectedName] then continue end

		local includedByFallback = FALLBACK_SERIALIZABLE_PROPERTY_SET[reflectedName] == true
		if reflected.Serialized ~= true and not includedByFallback then continue end

		filtered[reflectedName] = true
	end

	if next(filtered) == nil then filtered = fallback end

	writablePropertiesByClass[className] = filtered
	return filtered
end

local function getCanonicalPropertyByLowerForClass(className: string): { [string]: string }
	local cached = canonicalPropertyByLowerByClass[className]
	if cached then return cached end

	local allowed = Serializer.getWritableSerializablePropertySetForClass(className)
	local byLower = {}
	for propertyName in pairs(allowed) do
		byLower[string.lower(propertyName)] = propertyName
	end

	canonicalPropertyByLowerByClass[className] = byLower
	return byLower
end

local function resolveWritablePropertyName(instance: Instance, propertyName: string): string?
	local allowed = Serializer.getWritableSerializablePropertySetForClass(instance.ClassName)
	if allowed[propertyName] then return propertyName end

	local canonicalByLower = getCanonicalPropertyByLowerForClass(instance.ClassName)
	return canonicalByLower[string.lower(propertyName)]
end

local function serializedValuesEqual(left, right): boolean
	if type(left) ~= type(right) then return false end

	if type(left) ~= "table" then return left == right end

	for key, value in pairs(left) do
		if not serializedValuesEqual(value, right[key]) then return false end
	end

	for key in pairs(right) do
		if left[key] == nil then return false end
	end

	return true
end

local function readAndSerializeProperty(
	instance: Instance,
	propertyName: string,
	options: {
		getInstanceRefData: ((Instance) -> { guid: string?, path: { string }? }?)?,
	}?
)
	local ok, value = pcall(function()
		return (instance :: any)[propertyName]
	end)
	if not ok then return nil end

	return Serializer.serializeValue(value, options)
end

local function getDefaultSerializedPropertiesForClass(className: string): { [string]: any }
	local cached = defaultSerializedPropertiesByClass[className]
	if cached then return cached end

	local defaults = {}
	local ok, tempInstance = pcall(function()
		return Instance.new(className)
	end)

	if not ok or not tempInstance then
		defaultSerializedPropertiesByClass[className] = defaults
		return defaults
	end

	local allowedProperties = Serializer.getWritableSerializablePropertySetForClass(className)
	for propertyName in pairs(allowedProperties) do
		local serialized = readAndSerializeProperty(tempInstance, propertyName)
		if serialized ~= nil then defaults[propertyName] = serialized end
	end

	tempInstance:Destroy()
	defaultSerializedPropertiesByClass[className] = defaults
	return defaults
end

--[=[
	Collects the properties of an instance that should be serialized, based on the set of writable and serializable properties for the instance's class.
	Compares each property's serialized value to the default serialized value for that property on a new instance of the same class, and only includes it in the result if it differs from the default.
	@param instance Instance - The instance to collect properties from
	@param options table? - Optional parameters for serialization, such as a function to get reference data for instances
	@return { [string]: any } - A table mapping property names to their serialized values for properties that should be serialized
]=]
function Serializer.collectSerializedProperties(
	instance: Instance,
	options: {
		getInstanceRefData: ((Instance) -> { guid: string?, path: { string }? }?)?,
	}?
): { [string]: any }
	local properties = {}
	local className = instance.ClassName
	local allowedProperties = Serializer.getWritableSerializablePropertySetForClass(className)
	local defaultProperties = getDefaultSerializedPropertiesForClass(className)
	local serializableProperties = Serializer.getSerializableProperties()

	for _, propertyName in ipairs(serializableProperties) do
		if not allowedProperties[propertyName] then continue end

		if propertyName == "Name" or propertyName == "Parent" then continue end
		if propertyName == "Transparency" and instance:IsA("GuiObject") then continue end

		local serialized = readAndSerializeProperty(instance, propertyName, options)
		if serialized ~= nil then
			local defaultSerialized = defaultProperties[propertyName]
			if defaultSerialized == nil or not serializedValuesEqual(serialized, defaultSerialized) then
				properties[propertyName] = serialized
			end
		end
	end

	return properties
end

--[=[
	Applies serialized properties to an instance, using the set of writable and serializable properties for the instance's class to determine which properties can be set.
	Skips certain properties like "Name" and "Parent", and also handles a special case for "Transparency" on GuiObjects.
	@param instance Instance - The instance to apply properties to
	@param properties table? - A table mapping property names to their serialized values
	@param options table? - Optional parameters for deserialization, such as functions to resolve instances by GUID or path
]=]
function Serializer.applySerializedProperties(
	instance: Instance,
	properties: { [string]: any }?,
	options: {
		resolveInstanceByGuid: ((string) -> Instance?)?,
		resolveInstanceByPath: (({ string }) -> Instance?)?,
	}?
)
	if type(properties) ~= "table" then return end

	for propertyName, serialized in pairs(properties) do
		if propertyName ~= "Name" and propertyName ~= "Parent" and propertyName ~= "Source" then
			local targetPropertyName = propertyName
			if propertyName == "Transparency" and instance:IsA("GuiObject") then
				targetPropertyName = "BackgroundTransparency"
			end

			local resolvedProperty = resolveWritablePropertyName(instance, targetPropertyName)
			if not resolvedProperty then continue end

			local deserialized = Serializer.deserializeValue(serialized, options)
			if deserialized ~= nil then
				pcall(function()
					(instance :: any)[resolvedProperty] = deserialized
				end)
			end
		end
	end
end

--[=[
	Collects an instance's attributes, serializing each value so that Roblox
	datatype attributes (Color3, Vector3, UDim2, NumberRange, etc.) survive the
	JSON round-trip instead of being flattened into plain tables.
	@param instance Instance - The instance to collect attributes from
	@return { [string]: any } - A table mapping attribute names to serialized values
]=]
function Serializer.collectSerializedAttributes(instance: Instance): { [string]: any }
	local serialized = {}

	local ok, attributes = pcall(function()
		return instance:GetAttributes()
	end)
	if not ok or type(attributes) ~= "table" then return serialized end

	for key, value in pairs(attributes) do
		-- Plain JSON scalars pass through unchanged; Roblox datatypes become
		-- tagged tables via serializeValue.
		serialized[key] = Serializer.serializeValue(value)
	end

	return serialized
end

--[=[
	Applies serialized attributes to an instance, deserializing each value first
	so tagged Roblox datatypes are restored to their proper types before
	SetAttribute is called.
	@param instance Instance - The instance to apply attributes to
	@param attributes table? - A table mapping attribute names to serialized values
]=]
function Serializer.applySerializedAttributes(instance: Instance, attributes: { [string]: any }?)
	if type(attributes) ~= "table" then return end

	for key, value in pairs(attributes) do
		local deserialized = Serializer.deserializeValue(value)
		-- Only set when we have a concrete value. A nil result means an unknown
		-- serialized datatype; skip it rather than clearing the attribute.
		if deserialized ~= nil then
			pcall(function()
				instance:SetAttribute(key, deserialized)
			end)
		end
	end
end

--[=[
	Collects the tags of an instance using CollectionService:GetTags, returning them as a sorted array of strings.
	Returns an empty array if CollectionService is unavailable or if GetTags fails.
	@param instance Instance - The instance to collect tags from
	@return { string } - An array of tag names applied to the instance
]=]
function Serializer.collectSerializedTags(instance: Instance): { string }
	if not CollectionService then return {} end

	local ok, tags = pcall(function()
		return CollectionService:GetTags(instance)
	end)

	if not ok or type(tags) ~= "table" then return {} end

	if #tags > 1 then table.sort(tags) end
	return tags
end

--[=[
	Applies serialized tags to an instance by comparing the incoming tags to the existing tags on the instance and adding or removing tags as necessary using CollectionService:AddTag and CollectionService:RemoveTag.
	@param instance Instance - The instance to apply tags to
	@param tags table? - An array of tag names to apply to the instance
]=]
function Serializer.applySerializedTags(instance: Instance, tags: { string }?)
	if type(tags) ~= "table" or not CollectionService then return end

	local existingTagSet: { [string]: boolean } = {}
	local okExisting, existing = pcall(function()
		return CollectionService:GetTags(instance)
	end)
	if okExisting and type(existing) == "table" then
		for _, tagName in ipairs(existing) do
			existingTagSet[tagName] = true
		end
	end

	local incomingTagSet: { [string]: boolean } = {}
	for _, tagName in ipairs(tags) do
		if type(tagName) == "string" and tagName ~= "" then
			incomingTagSet[tagName] = true
			if not existingTagSet[tagName] then
				pcall(function()
					CollectionService:AddTag(instance, tagName)
				end)
			end
		end
	end

	for existingTagName in pairs(existingTagSet) do
		if not incomingTagSet[existingTagName] then
			pcall(function()
				CollectionService:RemoveTag(instance, existingTagName)
			end)
		end
	end
end

return Serializer

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\SettingsStore.luau
``
--!strict
--[[
	Settings storage helper for Azul plugin config.
	Handles global/project scope selection and persisted config values.
]]

local SettingsStore = {}
SettingsStore.__index = SettingsStore

type ScopeEnum = {
	GLOBAL: string,
	PROJECT: string,
}

type SettingsStoreOptions = {
	settingsKey: string?,
	settingsScopeKey: string?,
	defaultScope: string?,
}

export type SettingsStore = {
	plugin: Plugin,
	config: { [string]: any }, -- Reference to the live config table (Module) used by the plugin.
	scopeEnum: ScopeEnum,
	settingsKey: string,
	settingsScopeKey: string,
	scope: string,
	storedSettings: { [string]: any },

	getScopeKey: (self: SettingsStore, scope: string) -> string,
	getPlaceScopeSelectionKey: (self: SettingsStore) -> string,
	saveSelectedScope: (self: SettingsStore) -> (),
	loadSelectedScope: (self: SettingsStore) -> (),
	saveSettings: (self: SettingsStore) -> (),
	loadSettings: (self: SettingsStore) -> (),
	getScope: (self: SettingsStore) -> string,
	setScope: (self: SettingsStore, newScope: string) -> (),
}

--[=[
	Constructor for SettingsStore.

	@param plugin The plugin instance, used for GetSetting/SetSetting.
	@param config Reference to the live config table (Module) used by the plugin. This table will be read from and written to.
	@param scopeEnum An enum table containing scope identifiers, e.g. `{ GLOBAL = "global", PROJECT = "project" }`.
	@param options Optional settings:<br/>- `settingsKey`: The key under which all settings will be stored in plugin settings. Default is "AZUL_SETTINGS".<br/>- `settingsScopeKey`: The key under which scope selections will be stored in plugin settings. Default is "AZUL_SETTINGS_SCOPE_BY_PLACE".<br/>- `defaultScope`: The default scope to use if no selection is found. Should be one of the values in scopeEnum. Default is scopeEnum.GLOBAL.

	@return A new instance of SettingsStore.
]=]
function SettingsStore.new(
	plugin: Plugin,
	config: { [string]: any },
	scopeEnum: ScopeEnum,
	options: SettingsStoreOptions?
): SettingsStore
	local self = setmetatable({}, SettingsStore)
	self.plugin = plugin
	self.config = config
	self.scopeEnum = scopeEnum
	self.settingsKey = if options and options.settingsKey then options.settingsKey else "AZUL_SETTINGS"
	self.settingsScopeKey = if options and options.settingsScopeKey
		then options.settingsScopeKey
		else "AZUL_SETTINGS_SCOPE_BY_PLACE"
	self.scope = if options and options.defaultScope then options.defaultScope else scopeEnum.GLOBAL
	self.storedSettings = {}

	self:loadSelectedScope()
	self:loadSettings()

	return (self :: any) :: SettingsStore
end

function SettingsStore:getScopeKey(scope: string): string
	local placeId = tostring(game.PlaceId or "0")
	if scope == self.scopeEnum.PROJECT then return `project_{placeId}` end
	return self.scopeEnum.GLOBAL
end

function SettingsStore:getPlaceScopeSelectionKey(): string
	return tostring(game.PlaceId or "0")
end

function SettingsStore:saveSelectedScope()
	local selectedScopes = self.plugin:GetSetting(self.settingsScopeKey)
	if type(selectedScopes) ~= "table" then selectedScopes = {} end

	selectedScopes[self:getPlaceScopeSelectionKey()] = self.scope
	self.plugin:SetSetting(self.settingsScopeKey, selectedScopes)
end

function SettingsStore:loadSelectedScope()
	local selectedScopes = self.plugin:GetSetting(self.settingsScopeKey)
	if type(selectedScopes) ~= "table" then return end

	local selectedScope = selectedScopes[self:getPlaceScopeSelectionKey()]
	if selectedScope == self.scopeEnum.GLOBAL or selectedScope == self.scopeEnum.PROJECT then
		self.scope = selectedScope
	end
end

function SettingsStore:saveSettings()
	local allSettings = self.plugin:GetSetting(self.settingsKey)
	if type(allSettings) ~= "table" then allSettings = {} end

	local scopeKey = self:getScopeKey(self.scope)
	local scopedCopy = {}
	for key, value in pairs(self.config) do
		scopedCopy[key] = value
	end

	-- Always persist debug/silent at the global level.
	local globalScoped = allSettings[self.scopeEnum.GLOBAL]
	if type(globalScoped) ~= "table" then globalScoped = {} end
	globalScoped.DEBUG_MODE = self.config.DEBUG_MODE
	globalScoped.SILENT_MODE = self.config.SILENT_MODE
	allSettings[self.scopeEnum.GLOBAL] = globalScoped

	allSettings[scopeKey] = scopedCopy
	self.storedSettings = allSettings
	self.plugin:SetSetting(self.settingsKey, allSettings)
end

function SettingsStore:loadSettings()
	local allSettings = self.plugin:GetSetting(self.settingsKey)
	if type(allSettings) ~= "table" then
		allSettings = {}

		-- Legacy flat settings fallback.
		for key, _ in pairs(self.config) do
			local legacyValue = self.plugin:GetSetting(key)
			if legacyValue ~= nil then self.config[key] = legacyValue end
		end

		self.storedSettings = allSettings
		return
	end

	self.storedSettings = allSettings

	local scopeKey = self:getScopeKey(self.scope)
	local scoped = allSettings[scopeKey]
	local globalScoped = allSettings[self.scopeEnum.GLOBAL]

	if type(scoped) ~= "table" then scoped = {} end
	if type(globalScoped) ~= "table" then globalScoped = {} end

	for key, _ in pairs(self.config) do
		local value = scoped[key]
		if value == nil and scopeKey ~= self.scopeEnum.GLOBAL then value = globalScoped[key] end
		if value ~= nil then self.config[key] = value end
	end

	-- DEBUG_MODE and SILENT_MODE always come from global.
	if globalScoped.DEBUG_MODE ~= nil then self.config.DEBUG_MODE = globalScoped.DEBUG_MODE end
	if globalScoped.SILENT_MODE ~= nil then self.config.SILENT_MODE = globalScoped.SILENT_MODE end
end

function SettingsStore:getScope(): string
	return self.scope
end

function SettingsStore:setScope(newScope: string)
	if newScope ~= self.scopeEnum.GLOBAL and newScope ~= self.scopeEnum.PROJECT then return end
	if newScope == self.scope then return end

	self:saveSettings()
	self.scope = newScope
	self:saveSelectedScope()
	self:loadSettings()
end

return SettingsStore

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\SyncSession.luau
``
--!strict

--[[
    SyncSession - Class for managing a sync session between the Azul plugin and the daemon.

    Ransomwave 2026
]]

local SyncSession = {}
SyncSession.__index = SyncSession

-- Services
local HttpService = game:GetService("HttpService")
local RunService = game:GetService("RunService")
local ScriptEditorService = game:GetService("ScriptEditorService")
local CollectionService = game:GetService("CollectionService")

-- Modules
local AzulService = require("./AzulService")
local Enums = require("./Enums")
local SettingsStore = require("./SettingsStore")
local WebSocketClient = require("./WebSocketClient")

export type SyncSession = {
	-- Constructor fields
	plugin: Plugin,
	settingsStore: SettingsStore.SettingsStore,
	config: any,
	ui: any?,

	-- State fields
	syncEnabled: boolean,
	wsClient: WebSocketClient.WebSocketClient?,
	trackedInstances: { [Instance]: string },
	guidMap: { [string]: Instance },
	usedGuids: { [string]: boolean },
	lastHeartbeat: number,
	applyingPatch: boolean,
	lastPatchTime: { [string]: number },
	recentPatches: { [string]: boolean },
	lastInstanceUpdate: { [string]: { key: string, t: number } },
	connections: { RBXScriptConnection },
	suppressOutbound: boolean,
	pendingInstanceUpdates: { [string]: any },
	pendingScriptChanges: { [string]: any },
	pendingScriptChangeReady: { [string]: boolean },
	scriptChangeDebounceTokenByGuid: { [string]: number },
	pendingDeletes: { [string]: boolean },
	batchingEnabled: boolean,
	batchFlushToken: number,
	batchAccumulator: number,
	serviceSet: { [string]: boolean },
	handshakeComplete: boolean,
	daemonVersion: (string | number)?,
	daemonProtocolVersion: number?,

	-- Methods
	startSync: (self: SyncSession, suppressInfo: boolean?) -> (),
	stopSync: (self: SyncSession, dontRelayDisconnect: boolean?) -> (),
	reloadSourcemap: (self: SyncSession) -> (),
	onSettingsScopeChanged: (self: SyncSession, newScope: string) -> (),
	setUI: (self: SyncSession, ui: any) -> (),
	debugPrint: (self: SyncSession, ...any) -> (),
	infoPrint: (self: SyncSession, ...any) -> (),
	rebuildServiceSet: (self: SyncSession) -> (),
	startAutoConnect: (self: SyncSession) -> (),
	stopAutoConnect: (self: SyncSession) -> (),

	-- Auto-connect helpers
	_autoConnectThread: thread?,
	_handshakeBindable: BindableEvent?,
	_suppressAutoConnectLogs: boolean?,
}

-- Constants
local PUSH_CONFIG_PATH = {
	"ServerStorage",
	"Azul",
	"Config",
}

-- Legacy! Does not get used after initial snapshot!
local INITIAL_BATCH_INTERVAL = 0.2 -- Seconds between outbound batch flushes

local function safeGetNumber(value: any, default: number)
	if type(value) == "number" and value > 0 then
		return value
	end
	return default
end

function SyncSession:debugPrint(...)
	if self.config.SILENT_MODE or not self.config.DEBUG_MODE then
		return
	end
	print(`[🐛 Azul::{script}]:`, ...)
end

function SyncSession:infoPrint(...)
	if self.config.SILENT_MODE then
		return
	end
	print(`[Azul]: `, ...)
end

function SyncSession:rebuildServiceSet()
	AzulService.rebuildServiceSet(self.serviceSet)
end

function SyncSession:setUI(ui)
	self.ui = ui
end

function SyncSession.new(plugin: Plugin, settingsStore: SettingsStore.SettingsStore, config: any): SyncSession
	local self = (setmetatable({}, SyncSession) :: any) :: SyncSession

	self.plugin = plugin
	self.settingsStore = settingsStore
	self.config = config
	self.ui = nil

	self.syncEnabled = false
	self.wsClient = nil
	self.trackedInstances = {}
	self.guidMap = {}
	self.usedGuids = {}
	self.lastHeartbeat = 0
	self.applyingPatch = false
	self.lastPatchTime = {}
	self.recentPatches = {}
	self.lastInstanceUpdate = {}
	self.connections = {}
	self.suppressOutbound = false

	self.pendingInstanceUpdates = {}
	self.pendingScriptChanges = {}
	self.pendingScriptChangeReady = {}
	self.scriptChangeDebounceTokenByGuid = {}
	self.pendingDeletes = {}

	self.batchingEnabled = false
	self.batchFlushToken = 0
	self.batchAccumulator = 0
	self.serviceSet = {}
	self.handshakeComplete = false
	self.daemonVersion = nil
	self.daemonProtocolVersion = nil
	self._hasSyncedThisSession = false

	-- Auto-connect helpers
	self._autoConnectThread = nil
	self._handshakeBindable = Instance.new("BindableEvent")

	self:rebuildServiceSet()

	local function shouldIncludeInSnapshot(instance)
		if not instance then
			return false
		end
		return not AzulService.isExcluded(instance, self.serviceSet)
	end

	local function sendMessage(messageTypeOrPayload: string | { any }, data: any?)
		if not self.wsClient or not self.wsClient.connected then
			return false
		end

		local message

		-- If the caller provided a string, wrap it in a message object with the string as the "type" field and the data as the "data" field.
		-- If the caller provided a table, use it directly as the message object.
		if type(messageTypeOrPayload) == "table" then
			message = {}
			for key, value in pairs(messageTypeOrPayload) do
				message[key] = value
			end
		else
			message = {
				type = messageTypeOrPayload,
			}
			for key, value in pairs(data or {}) do
				message[key] = value
			end
		end

		self:debugPrint(`Sending message: {message.type}`)
		local encodeOk, encodedOrErr = pcall(function()
			return HttpService:JSONEncode(message)
		end)
		if not encodeOk then
			warn(`[Azul]: Cannot JSON-encode outbound message (type: {tostring(message.type)}): {encodedOrErr}`)
			return false
		end
		return self.wsClient:send(encodedOrErr)
	end

	local function flushOutboundQueues()
		local messages: { [number]: { type: string, data: any } } = {}

		for _, data in pairs(self.pendingInstanceUpdates) do
			table.insert(messages, {
				type = "instanceUpdated",
				data = data,
			})
		end

		for _, payload in pairs(self.pendingScriptChanges) do
			if self.pendingScriptChangeReady[payload.guid] == true then
				table.insert(messages, {
					type = "scriptChanged",
					data = {
						guid = payload.guid,
						path = payload.path,
						className = payload.className,
						source = payload.source,
					},
				})
				self.pendingScriptChanges[payload.guid] = nil
				self.pendingScriptChangeReady[payload.guid] = nil
				self.scriptChangeDebounceTokenByGuid[payload.guid] = nil
			end
		end

		for guid, shouldSend in pairs(self.pendingDeletes) do
			if shouldSend then
				table.insert(messages, {
					type = "deleted",
					data = {
						guid = guid,
					},
				})
			end
		end

		table.clear(self.pendingInstanceUpdates)
		table.clear(self.pendingDeletes)

		if #messages == 0 then
			return
		end

		if self.batchingEnabled and #messages > 1 then
			if #messages > 200 then
				self:debugPrint(`Too many messages ({#messages}) in batch, sending full snapshot instead.`)
				self:reloadSourcemap()
			else
				sendMessage("batch", { messages = messages })
			end
		else
			for _, message in messages do
				sendMessage(message)
			end
		end
	end

	local function scheduleBatchFlush()
		if not self.batchingEnabled then
			return
		end

		self.batchFlushToken += 1
		local token = self.batchFlushToken

		task.delay(safeGetNumber(self.config.BATCH_IDLE_WINDOW, 0.1), function()
			if token ~= self.batchFlushToken then
				return
			end
			flushOutboundQueues()
		end)
	end

	local function queueInstanceUpdate(data)
		if self.suppressOutbound or not self.syncEnabled then
			return
		end
		if not data or not data.guid then
			return
		end

		self.pendingInstanceUpdates[data.guid] = data
		scheduleBatchFlush()
	end

	local function queueScriptChange(payload)
		if self.suppressOutbound or not self.syncEnabled then
			return
		end
		if not payload or not payload.guid then
			return
		end

		self.pendingScriptChangeReady[payload.guid] = false
		self.pendingScriptChanges[payload.guid] = payload

		local token = (self.scriptChangeDebounceTokenByGuid[payload.guid] or 0) + 1
		self.scriptChangeDebounceTokenByGuid[payload.guid] = token

		task.delay(safeGetNumber(self.config.SCRIPT_CHANGE_DEBOUNCE, 0.35), function()
			if not self.syncEnabled or self.suppressOutbound then
				return
			end
			if self.scriptChangeDebounceTokenByGuid[payload.guid] ~= token then
				return
			end
			if not self.pendingScriptChanges[payload.guid] then
				return
			end

			self.pendingScriptChangeReady[payload.guid] = true
			scheduleBatchFlush()
		end)
	end

	local function queueDeletion(guid: string)
		if self.suppressOutbound or not self.syncEnabled then
			return
		end
		if not guid or guid == "" then
			return
		end

		self.pendingDeletes[guid] = true
		scheduleBatchFlush()
	end

	local function setOutboundSuppressed(suppressed: boolean)
		self.suppressOutbound = suppressed
		if suppressed then
			table.clear(self.pendingInstanceUpdates)
			table.clear(self.pendingScriptChanges)
			table.clear(self.pendingScriptChangeReady)
			table.clear(self.scriptChangeDebounceTokenByGuid)
			table.clear(self.pendingDeletes)
		end
	end

	local function sendInstanceUpdateDedup(instance)
		if self.suppressOutbound or not self.syncEnabled then
			return
		end

		local data = AzulService.instanceToDataDedup(
			instance,
			self.trackedInstances,
			self.guidMap,
			self.usedGuids,
			self.lastInstanceUpdate
		)
		if not data then
			return
		end

		local guid = data.guid
		self.trackedInstances[instance] = guid
		self.guidMap[guid] = instance

		queueInstanceUpdate(data)
	end

	local function shouldSync(instance)
		if not instance then
			return false
		end
		local isSyncable = AzulService.isScript(instance)
		if not isSyncable and self.config.extraClassSuffixes then
			for _, className in pairs(self.config.extraClassSuffixes) do
				if instance:IsA(className) then
					isSyncable = true
					break
				end
			end
		end
		if not isSyncable then
			return false
		end
		return not AzulService.isExcluded(instance, self.serviceSet)
	end

	local function onScriptChanged(changedScript: Script | LocalScript | ModuleScript)
		if self.suppressOutbound or not shouldSync(changedScript) then
			return
		end

		local guid = AzulService.getOrCreateGUID(changedScript, self.trackedInstances, self.guidMap, self.usedGuids)

		if self.recentPatches[guid] then
			self:debugPrint(
				"Ignoring change (was just patched from daemon):",
				`{changedScript.Parent}.{changedScript.Name}`
			)
			self.recentPatches[guid] = nil
			return
		end

		if self.applyingPatch then
			return
		end

		local lastPatch = self.lastPatchTime[guid] or 0
		local now = tick()
		if now - lastPatch < 1 then
			self:debugPrint("Ignoring change (too soon after patch):", `{changedScript.Parent}.{changedScript.Name}`)
			return
		end

		local path = AzulService.getInstancePath(changedScript)
		if not path then return end
		local source = ScriptEditorService:GetEditorSource(changedScript)

		queueScriptChange({
			guid = guid,
			path = path,
			className = changedScript.ClassName,
			source = source,
		})
	end

	local function attachListeners(instance)
		if not shouldIncludeInSnapshot(instance) then
			return
		end

		local nameConnnection = instance:GetPropertyChangedSignal("Name"):Connect(function()
			sendInstanceUpdateDedup(instance)
		end)
		table.insert(self.connections, nameConnnection)

		local parentConnection = instance:GetPropertyChangedSignal("Parent"):Connect(function()
			if instance.Parent == nil then
				return
			end
			sendInstanceUpdateDedup(instance)
		end)
		table.insert(self.connections, parentConnection)

		if AzulService.isScript(instance) then
			local sourceConnection = instance:GetPropertyChangedSignal("Source"):Connect(function()
				if not self.syncEnabled then return end
				onScriptChanged(instance :: Script)
			end)
			table.insert(self.connections, sourceConnection)
		else
			local isExtraClass = false
			if self.config.extraClassSuffixes then
				for _, className in pairs(self.config.extraClassSuffixes) do
					if instance:IsA(className) then
						isExtraClass = true
						break
					end
				end
			end
			if isExtraClass then
				local propertyConnection = instance.Changed:Connect(function()
					if not self.syncEnabled then return end
					sendInstanceUpdateDedup(instance)
				end)
				table.insert(self.connections, propertyConnection)

				local attributeConnection = instance.AttributeChanged:Connect(function()
					if not self.syncEnabled then return end
					sendInstanceUpdateDedup(instance)
				end)
				table.insert(self.connections, attributeConnection)
			end
		end
	end

	local function wipeChildren(container: Instance)
		for _, child in ipairs(container:GetChildren()) do
			if AzulService.isProtectedRobloxContainer(child) then
				continue
			end
			-- If KEEP_UNKNOWNS is true, preserve Studio-only instances that are not tracked
			if self.config.KEEP_UNKNOWNS and not self.trackedInstances[child] then
				continue
			end
			local ok, err = pcall(function()
				child:Destroy()
			end)
			if not ok then
				warn(`[Azul]: Cannot destroy '{child.Name}': {err}`)
			end
		end
	end

	local function wipeBuildRoots(instances: { any })
		local rootsSeen = {}

		for _, item in ipairs(instances) do
			local path = item.path
			if type(path) == "table" and #path >= 1 then
				local rootName = path[1]
				if type(rootName) == "string" and rootName ~= "" then
					rootsSeen[rootName] = true
				end
			end
		end

		for rootName in pairs(rootsSeen) do
			local rootInstance: Instance? = nil

			local okService, service = pcall(function()
				return game:GetService(rootName)
			end)
			if okService and service then
				rootInstance = service
			else
				rootInstance = game:FindFirstChild(rootName)
			end

			if rootInstance then
				local ok, err = pcall(function()
					wipeChildren(rootInstance)
				end)
				if not ok then
					warn(`[Azul]: Failed to wipe children for root container '{rootName}': {err}`)
				end
			else
				warn(`[Azul]: Destructive build could not find root container '{rootName}', skipping wipe`)
			end
		end
	end

	local function sendDaemonConfig(warnOnFail: boolean?)
		local configPayload, err = AzulService.readPushConfig(PUSH_CONFIG_PATH)
		if not configPayload then
			if warnOnFail then
				warn(`[Azul]: daemon config unavailable: {err}`)
			else
				self:debugPrint(`daemon config unavailable: {err}`)
			end
			return false
		end

		return sendMessage("pushConfig", {
			config = configPayload,
		})
	end

	local function onInstanceAdded(instance: Instance)
		if self.suppressOutbound then
			return
		end
		if not shouldIncludeInSnapshot(instance) then
			return
		end

		local data = AzulService.instanceToData(instance, self.trackedInstances, self.guidMap, self.usedGuids)
		if not data then
			return
		end
		sendInstanceUpdateDedup(instance)
		attachListeners(instance)
	end

	local function onInstanceRemoved(instance)
		if self.suppressOutbound then
			return
		end
		if not self.trackedInstances[instance] then
			return
		end

		-- Use the cached GUID captured when the instance was first tracked.
		-- Do NOT fall back to GetDebugId here: debug IDs of instances that are
		-- currently being removed (DescendantRemoving) are unreliable.
		local guid = self.trackedInstances[instance]
		if not guid then
			return
		end

		self.trackedInstances[instance] = nil
		self.guidMap[guid] = nil
		self.usedGuids[guid] = nil

		queueDeletion(guid)
	end

	local function sendFullSnapshot(options: { includeProperties: boolean, scriptsAndDescendantsOnly: boolean }?)
		self:infoPrint("Sending full snapshot...")

		local includeProperties = options and options.includeProperties == true
		local scriptsAndDescendantsOnly = options and options.scriptsAndDescendantsOnly == true
		local includeAncestorsOfScripts: { [Instance]: boolean } = {}

		local function isSyncableInstance(instance)
			if AzulService.isScript(instance) then
				return true
			end
			if self.config.extraClassSuffixes then
				for _, className in pairs(self.config.extraClassSuffixes) do
					if instance:IsA(className) then
						return true
					end
				end
			end
			return false
		end

		if scriptsAndDescendantsOnly then
			for _, descendant in ipairs(game:GetDescendants()) do
				if isSyncableInstance(descendant) and shouldIncludeInSnapshot(descendant) then
					local current: Instance? = descendant
					while current and current ~= game do
						if shouldIncludeInSnapshot(current) then
							includeAncestorsOfScripts[current] = true
						end
						current = current.Parent
					end
				end
			end
		end

		self.trackedInstances = {}
		self.guidMap = {}
		self.usedGuids = {}

		local instances = {}
		local scriptCount = 0
		local batchSize = 400

		local queue = {}
		for _, service in ipairs(game:GetChildren()) do
			if shouldIncludeInSnapshot(service) then
				table.insert(queue, {
					instance = service,
					hasScriptAncestor = false,
				})
			end
		end

		local index = 1
		while index <= #queue do
			if not self.syncEnabled then
				self:infoPrint("Snapshot aborted - sync disabled")
				return
			end

			local queued = queue[index]
			local instance = queued.instance
			local hasScriptAncestor = queued.hasScriptAncestor == true

			local includeByMode = true
			if scriptsAndDescendantsOnly then
				includeByMode = isSyncableInstance(instance)
					or hasScriptAncestor
					or includeAncestorsOfScripts[instance] == true
			end

			if shouldIncludeInSnapshot(instance) and includeByMode then
				local data = AzulService.instanceToData(instance, self.trackedInstances, self.guidMap, self.usedGuids, {
					includeProperties = includeProperties,
				})
				if data then
					table.insert(instances, data)

					self.trackedInstances[instance] = data.guid
					self.guidMap[data.guid] = instance

					if AzulService.isScript(instance) then
						scriptCount += 1
					end
				end
			end

			for _, child in ipairs(instance:GetChildren()) do
				if shouldIncludeInSnapshot(child) then
					table.insert(queue, {
						instance = child,
						hasScriptAncestor = hasScriptAncestor or isSyncableInstance(instance),
					})
				end
			end

			if index % batchSize == 0 then
				task.wait()
			end
			index += 1
		end

		local sent = sendMessage("fullSnapshot", { data = instances })
		if not sent then
			-- Full snapshot encoding failed; find and exclude the problematic instance(s)
			self:infoPrint("Full snapshot encoding failed! Scanning for non-encodable instances...")
			local filteredInstances = {}
			for _, instanceData in ipairs(instances) do
				if pcall(HttpService.JSONEncode, HttpService, instanceData) then
					table.insert(filteredInstances, instanceData)
				else
					warn(
						`[Azul]: Instance "{instanceData.name}" ({instanceData.className}) at {table.concat(
							instanceData.path or {},
							"."
						)} cannot be JSON-encoded and will be excluded from this sync session. This is usually caused by null bytes or non-UTF-8 characters in the instance name or script source.`
					)
				end
			end
			instances = filteredInstances
			if #filteredInstances > 0 then
				sendMessage("fullSnapshot", { data = filteredInstances })
			else
				warn("[Azul]: No instances could be encoded, sync cannot proceed for this session.")
				return
			end
		end
		self:infoPrint("Snapshot sent:", #instances, "instances (", scriptCount, "scripts )")

		if self.syncEnabled then
			if includeProperties or scriptsAndDescendantsOnly then
				self:debugPrint(
					`Snapshot sent with options (includeProperties={tostring(includeProperties)}, scriptsAndDescendantsOnly={tostring(
						scriptsAndDescendantsOnly
					)}) - stopping sync since "pack" is one-shot.`
				)
				self:stopSync()
			end

			self.batchingEnabled = true
			self.batchFlushToken += 1
			self.batchAccumulator = 0
		end
	end

	--[=[
		The handshake is considered complete once we receive any message from the daemon, even if it's not an explicit handshakeAck. 
		This is to handle the case where the daemon might send a message before it receives our handshakeStudio message, 
		which would indicate that the daemon is alive and has received our handshake attempt.
		]=]
	local function implicitHandshake()
		if not self.handshakeComplete then
			self.handshakeComplete = true
			self:debugPrint("Handshake implicitly satisfied by daemon message")
			if self.ui then
				self.ui:UpdateHandshakeState(true)
			end
			if self._handshakeBindable then
				pcall(function()
					self._handshakeBindable:Fire()
				end)
			end
		end
	end

	local function processMessage(message)
		self:debugPrint("Processing message type:", message.type)

		local function shouldPrompt(changeCount: number, isDestructive: boolean): boolean
			local mode = self.config.DISPLAY_PROMPTS or "Always"
			if mode == "Never" then
				return false
			end

			local isInitial = not self._hasSyncedThisSession
			if mode == "Initial" and not isInitial then
				return false
			end

			if isDestructive and self.config.CONFIRM_DESTRUCTIVE then
				return true
			end

			if changeCount > (self.config.CHANGES_THRESHOLD or 5) then
				return true
			end

			return false
		end

		if message.type == "patchScript" then
			self:debugPrint("Patch requested for GUID:", message.guid)
			local instance = self.guidMap[message.guid]
			if instance and AzulService.isScript(instance) then
				setOutboundSuppressed(true)
				self.recentPatches[message.guid] = true
				self.lastPatchTime[message.guid] = tick()

				self.applyingPatch = true
				local okPatch, errPatch = AzulService.withRecording("AzulPatchScript", "Azul Patch Script", function()
					AzulService.setScriptSource(instance :: Script, message.source)
				end)

				task.delay(0.2, function()
					self.applyingPatch = false
					setOutboundSuppressed(false)
				end)

				if okPatch then
					self:infoPrint("Updated script:", `{instance.Parent}.{instance.Name}`)
					sendMessage("applied", {
						operation = "patchScript",
						updated = 1,
					})
				else
					warn("[Azul]: Failed to set script source for", tostring(instance), ":", errPatch)
				end

				task.delay(0.2, function()
					task.wait(0.2)
					self.recentPatches[message.guid] = nil
				end)
			else
				warn("[Azul]: Cannot apply patch - instance not found for GUID:", message.guid)
				local count = 0
				for _ in pairs(self.guidMap) do
					count += 1
				end
				warn("[Azul]: Total tracked instances:", count)
			end
		elseif message.type == "requestSnapshot" then
			implicitHandshake()
			self:infoPrint("Snapshot requested by daemon")
			sendFullSnapshot(message.options)
		elseif message.type == "buildSnapshot" then
			implicitHandshake()
			self:infoPrint("Applying build snapshot from daemon")

			local changeCount = #(message.data or {})
			local isDestructive = message.destructive == true

			if shouldPrompt(changeCount, isDestructive) then
				local reason = message.reason or (isDestructive and "Destructive build" or "Large snapshot")
				local title = "Azul Build Confirmation"
				local details = `Applying build snapshot from daemon:\n• {changeCount} changes\n• Destructive: {tostring(isDestructive)}\nReason: {reason}\n\nDo you want to proceed?`
				
				local confirmed = AzulService.promptConfirmation(self.plugin, title, details)
				if not confirmed then
					self:infoPrint("Build snapshot rejected by user")
					sendMessage("rejected", {
						operation = "build",
						reason = "User rejected confirmation prompt",
					})
					task.delay(0.5, function()
						self:stopSync()
					end)
					return
				end
			end

			setOutboundSuppressed(true)

			local created, updated = 0, 0
			local ok, err = AzulService.withRecording("AzulBuildSnapshot", "Azul Build Snapshot", function()
				if message.destructive == true then
					wipeBuildRoots(message.data or {})
				end

				local c, u, appliedGuidMap = AzulService.applySnapshotInstances(message.data, nil, self.guidMap)
				created = c
				updated = u
				for guid, instance in pairs(appliedGuidMap) do
					self.guidMap[guid] = instance
					self.trackedInstances[instance] = guid
					attachListeners(instance)
				end
				self._hasSyncedThisSession = true
				self:infoPrint(`Build snapshot applied ({created} created, {updated} updated)`)
			end)

			setOutboundSuppressed(false)
			if ok then
				sendMessage("applied", {
					operation = "build",
					created = created,
					updated = updated,
				})
			else
				warn("[Azul]: Error applying build snapshot: ", err)
			end

			task.delay(0.5, function()
				self:stopSync()
			end)
		elseif message.type == "pushSnapshot" then
			implicitHandshake()
			self:infoPrint("Applying push snapshot from daemon")

			local totalChanges = 0
			local isDestructive = false
			for _, mapping in ipairs(message.mappings or {}) do
				totalChanges += #(mapping.instances or {})
				if mapping.destructive then
					isDestructive = true
				end
			end

			if shouldPrompt(totalChanges, isDestructive) then
				local title = "Azul Push Confirmation"
				local details = `Applying push snapshot from daemon:\n• {totalChanges} changes\n• Destructive: {tostring(isDestructive)}\n\nDo you want to proceed?`
				
				local confirmed = AzulService.promptConfirmation(self.plugin, title, details)
				if not confirmed then
					self:infoPrint("Push snapshot rejected by user")
					sendMessage("rejected", {
						operation = "push",
						reason = "User rejected confirmation prompt",
					})
					task.delay(0.5, function()
						self:stopSync()
					end)
					return
				end
			end

			setOutboundSuppressed(true)

			local totalCreated, totalUpdated = 0, 0
			local ok, err = AzulService.withRecording("AzulPushSnapshot", "Azul Push Snapshot", function()
				for _, mapping in ipairs(message.mappings or {}) do
					local destination = mapping.destination or {}
					if #destination == 0 then
						warn("[Azul]: Push mapping missing destination; skipping")
						continue
					end

					self:debugPrint(
						`Destination for push snapshot: {table.concat(destination, "/")} ({#(mapping.instances or {})} instances), destructive: {tostring(
							mapping.destructive
						)}`
					)

					local targetContainer = AzulService.getOrCreatePath(destination)
					if mapping.destructive then
						wipeChildren(targetContainer)
					end

					local created, updated, appliedGuidMap =
						AzulService.applySnapshotInstances(mapping.instances or {}, mapping.destination, self.guidMap)
					totalCreated += created
					totalUpdated += updated
					for guid, instance in pairs(appliedGuidMap) do
						self.guidMap[guid] = instance
						self.trackedInstances[instance] = guid
						attachListeners(instance)
					end
					self:infoPrint(
						`Push applied to {table.concat(destination, "/")} ({created} created, {updated} updated)`
					)
				end
				self._hasSyncedThisSession = true
			end)

			setOutboundSuppressed(false)
			if ok then
				sendMessage("applied", {
					operation = "push",
					created = totalCreated,
					updated = totalUpdated,
				})
			else
				warn("[Azul]: Error applying push snapshot: ", err)
			end

			task.delay(0.5, function()
				self:stopSync()
			end)
		elseif message.type == "requestPushConfig" then
			sendDaemonConfig(true)
		elseif message.type == "handshakeAck" then
			if not self.handshakeComplete then
				self.handshakeComplete = true
				self:debugPrint("Handshake acknowledged by daemon")
				self:infoPrint("Handshake with Daemon successful")
				if type(message.extraClassSuffixes) == "table" then
					self.config.extraClassSuffixes = message.extraClassSuffixes
					self:debugPrint("Updated extraClassSuffixes from handshakeAck")
				end

				-- Store daemon version for the UI and warn (never block) on a
				-- protocol mismatch so the user knows to update one side.
				self.daemonVersion = message.daemonVersion
				self.daemonProtocolVersion = message.protocolVersion
				if
					type(message.protocolVersion) == "number"
					and message.protocolVersion ~= AzulService.PROTOCOL_VERSION
				then
					warn(
						`[Azul]: Protocol version mismatch - plugin speaks v{AzulService.PROTOCOL_VERSION}, `
							.. `daemon speaks v{message.protocolVersion}. Some features may be unavailable; `
							.. `update whichever side is older.`
					)
				else
					self:debugPrint(
						`Daemon version: {tostring(message.daemonVersion)} (protocol v{tostring(message.protocolVersion)})`
					)
				end

				-- Verify expected Place ID and Game ID if set in place config
				local placeConfig, _ = AzulService.readPushConfig(PUSH_CONFIG_PATH)
				if placeConfig then
					local expectedPlaceId = tonumber(placeConfig.expectedPlaceId)
					local expectedGameId = tonumber(placeConfig.expectedGameId)

					if expectedPlaceId and expectedPlaceId ~= game.PlaceId then
						local title = "Azul Place-ID Mismatch"
						local msg = `Expected Place ID: {expectedPlaceId}\nActual Place ID: {game.PlaceId}\n\nConnecting may sync and overwrite the wrong place.\n\nDo you still want to proceed?`
						local confirmed = AzulService.promptConfirmation(self.plugin, title, msg)
						if not confirmed then
							self:infoPrint("Connection aborted due to Place ID mismatch")
							self:stopSync()
							return
						end
					end

					if expectedGameId and expectedGameId ~= game.GameId then
						local title = "Azul Game-ID Mismatch"
						local msg = `Expected Game ID: {expectedGameId}\nActual Game ID: {game.GameId}\n\nConnecting may sync and overwrite the wrong game.\n\nDo you still want to proceed?`
						local confirmed = AzulService.promptConfirmation(self.plugin, title, msg)
						if not confirmed then
							self:infoPrint("Connection aborted due to Game ID mismatch")
							self:stopSync()
							return
						end
					end
				end

				sendDaemonConfig()
				if self.ui then
					self.ui:UpdateHandshakeState(true)
				end
				if self._handshakeBindable then
					pcall(function()
						self._handshakeBindable:Fire()
					end)
				end
			end
		elseif message.type == "instanceUpdated" then
			self:debugPrint("Instance update received from daemon:", message.data.name)
			setOutboundSuppressed(true)

			local ok, err = pcall(function()
				local created, updated, appliedGuidMap = AzulService.applySnapshotInstances({ message.data }, nil, self.guidMap)
				for guid, instance in pairs(appliedGuidMap) do
					self.guidMap[guid] = instance
					self.trackedInstances[instance] = guid
					attachListeners(instance)
				end
			end)

			setOutboundSuppressed(false)
			if not ok then
				warn("[Azul]: Error applying instance update: ", err)
			end
		elseif message.type == "deleted" then
			self:debugPrint("Instance deletion received from daemon, GUID:", message.data.guid)
			setOutboundSuppressed(true)

			local ok, err = pcall(function()
				local instance = self.guidMap[message.data.guid]
				if instance then
					self.trackedInstances[instance] = nil
					self.guidMap[message.data.guid] = nil
					self.usedGuids[message.data.guid] = nil
					instance:Destroy()
				end
			end)

			setOutboundSuppressed(false)
			if not ok then
				warn("[Azul]: Error applying deletion: ", err)
			end
		elseif message.type == "daemonDisconnect" then
			self:infoPrint("Daemon is shutting down; disconnecting plugin")
			self:stopSync(true)
		elseif message.type == "error" then
			warn("[Azul]: Daemon error:", message.message)
		elseif message.type == "pong" then
			self:debugPrint("Received pong")
		else
			warn("[Azul]: Unknown message type:", message.type)
		end
	end

	local function tryHandshake(): boolean
		if not self.wsClient then
			warn("[Azul]: Cannot perform handshake - WebSocket client not initialized")
			return false
		end

		if not self.wsClient.connected then
			warn("[Azul]: Cannot perform handshake - WebSocket client not connected")
			return false
		end

		local tries = 0
		local HANDSHAKE_MAX_RETRIES = safeGetNumber(self.config.MAX_HANDSHAKES, 5)
		local HANDSHAKE_TIMEOUT = 2
		self.handshakeComplete = false

		repeat
			self:debugPrint(`Attempting handshake with daemon... (try {tries}/{HANDSHAKE_MAX_RETRIES})`)
			sendMessage("handshakeStudio", {
				protocolVersion = AzulService.PROTOCOL_VERSION,
				pluginVersion = AzulService.VERSION,
				capabilities = {
					msgpack = false,
					compression = false,
				},
			})

			local startTime = tick()
			while tick() - startTime < HANDSHAKE_TIMEOUT do
				if not self.syncEnabled or not self.wsClient or not self.wsClient.connected then
					return false
				end
				if self.handshakeComplete then
					return true
				end
				task.wait(0.1)
			end

			tries += 1

			--// Otherwise would bloat the console
			if not self.config.AUTO_CONNECT then
				warn(`[Azul]: Handshake attempt {tries} failed, retrying...`)
			end

			-- Only retry while the socket is genuinely still open. Re-sending the
			-- handshake on a live-but-slow socket is useful; reusing a dead socket is
			-- not. If the connection dropped, fail fast so the caller tears down and
			-- the auto-connect watchdog performs a clean reconnect with a fresh socket.
			-- (We must NOT call wsClient:reconnect() here: it fires the disconnect
			-- handler -> stopSync() and re-enters this handshake from the connect
			-- handler, corrupting the session.)
			if not self.syncEnabled or not self.wsClient or not self.wsClient.connected then
				return false
			end
		until tries >= HANDSHAKE_MAX_RETRIES

		return self.handshakeComplete
	end

	function self:reloadSourcemap()
		sendFullSnapshot()
	end

	function self:startSync(suppressInfo: boolean?)
		if self.syncEnabled then
			warn(`[Azul::{script}]: A Sync Session already active!`)
			return
		end
		local suppress = suppressInfo == true
		self._suppressAutoConnectLogs = suppress
		if not suppress then
			self:infoPrint("Starting sync...")
		end
		self.syncEnabled = true
		self._hasSyncedThisSession = false
		self.batchingEnabled = false
		self.batchFlushToken += 1

		if self.ui then
			self.ui:UpdateSyncState(true)
		end
		if self.ui then
			self.ui:UpdateHandshakeState(false)
		end

		self.wsClient = WebSocketClient.new(self.config.WS_URL, {
			debugMode = self.config.DEBUG_MODE,
			silentMode = self.config.SILENT_MODE,
		})

		if not self.wsClient then
			warn("[Azul]: Failed to create WebSocket client")
			self:stopSync()
			return
		end

		self.wsClient:on("connect", function()
			if not self._suppressAutoConnectLogs then
				self:infoPrint(`Connected to WebSocket at: {self.config.WS_URL}`)
			end
			local handshakeResult = tryHandshake()

			if not handshakeResult then
				-- warn("[Azul]: Failed to connect to the Daemon after multiple attempts, disconnecting...")
				self:stopSync()
				return
			end
		end)

		self.wsClient:on("message", function(message)
			processMessage(message)
		end)

		self.wsClient:on("disconnect", function()
			if not self._suppressAutoConnectLogs then
				self:infoPrint("Disconnected from daemon")
			end
			self:stopSync()
		end)

		self.wsClient:on("error", function(error)
			warn("[Azul]: Connection error:", error)
		end)

		local connected = self.wsClient:connect()
		if not connected then
			warn("[Azul]: Failed to connect to daemon")
			self:stopSync()
			return
		end

		task.defer(function()
			local ok, err = pcall(function()
				local function setupListeners(parent)
					for _, child in ipairs(parent:GetChildren()) do
						attachListeners(child)
						setupListeners(child)
					end
				end

				for _, service in ipairs(game:GetChildren()) do
					setupListeners(service)
					task.wait()
				end
			end)
			if not ok then
				warn("[Azul]: Error during listener setup:", err)
				self:stopSync()
			end
		end)

		local descendantAddedConnection = game.DescendantAdded:Connect(function(instance)
			if self.syncEnabled then
				onInstanceAdded(instance)
			end
		end)
		table.insert(self.connections, descendantAddedConnection)

		local descendantRemovingConnection = game.DescendantRemoving:Connect(function(instance)
			if self.syncEnabled then
				onInstanceRemoved(instance)
			end
		end)
		table.insert(self.connections, descendantRemovingConnection)

		-- Roblox doesn't have a script specific event for source changes, so we have to use their global signal.
		local textDocumentChangedConnection = ScriptEditorService.TextDocumentDidChange:Connect(function(scriptDocument, _)
			if not self.syncEnabled then return end

			local changedScript = scriptDocument:GetScript()
			if not changedScript then return end
			if not self.trackedInstances[changedScript] then return end

			onScriptChanged(changedScript :: Script)
		end)
		table.insert(self.connections, textDocumentChangedConnection)

		local function onTagChanged(instance: Instance)
			if not self.syncEnabled or self.suppressOutbound then return end
			if shouldSync(instance) then
				sendInstanceUpdateDedup(instance)
			end
		end

		local tagAddedConnection = CollectionService.TagAdded:Connect(function(tag, instance)
			onTagChanged(instance)
		end)
		table.insert(self.connections, tagAddedConnection)

		local tagRemovedConnection = CollectionService.TagRemoved:Connect(function(tag, instance)
			onTagChanged(instance)
		end)
		table.insert(self.connections, tagRemovedConnection)

		local heartbeatConnection = RunService.Heartbeat:Connect(function(dt)
			if self.syncEnabled then
				local now = os.time()
				if now - self.lastHeartbeat > safeGetNumber(self.config.HEARTBEAT_INTERVAL, 30) then
					if not sendMessage("ping", {}) then
						warn("[Azul]: Lost connection to daemon")
						self:stopSync()
						return
					end
					self.lastHeartbeat = now
				end

				if self.batchingEnabled then
					-- Batch flush uses an idle timer; heartbeat just keeps the client alive
				else
					self.batchAccumulator += dt
					if self.batchAccumulator >= INITIAL_BATCH_INTERVAL then
						self.batchAccumulator -= INITIAL_BATCH_INTERVAL
						flushOutboundQueues()
					end
				end
			end
		end)
		table.insert(self.connections, heartbeatConnection)

		if not self._suppressAutoConnectLogs then
			self:infoPrint("Sync enabled")
		end
	end

	function self:stopSync(dontRelayDisconnect: boolean?)
		if not self.syncEnabled then
			return
		end

		if not dontRelayDisconnect then
			sendMessage("clientDisconnect", {})
		end

		local suppress = self._suppressAutoConnectLogs == true
		if not suppress then
			self:infoPrint("Stopping sync...")
		end
		self.syncEnabled = false
		self.handshakeComplete = false
		self._hasSyncedThisSession = false

		if self.ui then
			self.ui:UpdateHandshakeState(false)
		end
		if self.ui then
			self.ui:UpdateSyncState(false)
		end

		if self.wsClient then
			self.wsClient:disconnect()
		end
		self.wsClient = nil

		self.trackedInstances = {}
		self.guidMap = {}
		self.batchAccumulator = 0
		table.clear(self.pendingInstanceUpdates)
		table.clear(self.pendingScriptChanges)
		table.clear(self.pendingScriptChangeReady)
		table.clear(self.scriptChangeDebounceTokenByGuid)
		table.clear(self.pendingDeletes)

		self.batchingEnabled = false
		self.batchFlushToken += 1

		for _, conn in ipairs(self.connections) do
			conn:Disconnect()
		end
		self.connections = {}

		-- Preserve current suppress state for deciding whether to print "Sync stopped"
		local wasSuppressed = self._suppressAutoConnectLogs == true
		self._suppressAutoConnectLogs = false
		if not wasSuppressed then
			self:infoPrint("Sync stopped")
		end
	end

	function self:onSettingsScopeChanged(newScope: string)
		if newScope == self.settingsStore:getScope() then
			return
		end

		self.settingsStore:setScope(newScope)
		if self.ui then
			self.ui:SetSettingsScope(self.settingsStore:getScope())
			self.ui:UpdateConfig()
		end
		self:rebuildServiceSet()

		local scopeLabel = if self.settingsStore:getScope() == Enums.scope.GLOBAL then "Global" else "Project"
		self:infoPrint(`Settings scope set to {scopeLabel}`)
	end

	-- Auto-connect control: run a background task to attempt connects and honor config
	function self:startAutoConnect()
		if self._autoConnectThread then
			return
		end
		self._autoConnectThread = task.spawn(function()
			local attempts = 0
			self:infoPrint("Auto-connect enabled")
			self:debugPrint("AutoConnect: watchdog started")

			while self.config.AUTO_CONNECT do
				-- If not syncing, attempt to start
				if not self.syncEnabled and not self.handshakeComplete then
					self:debugPrint("AutoConnect: starting sync...")
					self:startSync(true)
				end

				-- Wait for handshake or failure
				local handshakeFired = false
				local conn
				if self._handshakeBindable then
					conn = self._handshakeBindable.Event:Connect(function()
						handshakeFired = true
					end)
				end

				local waitCount = 0
				while
					self.syncEnabled
					and not self.handshakeComplete
					and waitCount < safeGetNumber(self.config.MAX_HANDSHAKES, 5)
				do
					task.wait(1)
					waitCount += 1
					if handshakeFired then
						break
					end
				end

				if conn then
					conn:Disconnect()
				end

				if self.handshakeComplete then
					attempts = 0
					self:debugPrint("AutoConnect: connection succeeded")
					-- Idle while connected
					repeat
						task.wait(2)
					until not self.handshakeComplete or not self.config.AUTO_CONNECT
				else
					attempts += 1
					self:debugPrint(`AutoConnect: attempt {attempts} failed`)
					if self.config.MAX_RECONNECTIONS ~= -1 and attempts >= self.config.MAX_RECONNECTIONS then
						self:infoPrint(
							`Auto-connect: Reached max attempts ({self.config.MAX_RECONNECTIONS}). Stopping.`
						)
						break
					end
					-- Wait before next attempt
					task.wait(safeGetNumber(self.config.RECONNECTION_INTERVAL, 5))
				end
				if not self.config.AUTO_CONNECT then
					break
				end
				-- minor yield to avoid tight loop
				task.wait(0.1)
			end

			self._autoConnectThread = nil
			self:debugPrint("AutoConnect: watchdog stopped")
		end)
	end

	function self:stopAutoConnect()
		if not self._autoConnectThread then
			return
		end
		local ok, err = pcall(function()
			task.cancel(self._autoConnectThread)
		end)
		self._autoConnectThread = nil
		if not ok then
			warn("AutoConnect: failed to cancel thread:", err)
		end
	end

	return self :: SyncSession
end

return SyncSession

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\UI.luau
``
--!strict
--[[
	Azul UI Module
	Manages the companion plugin's dock widget and settings interface
]]

local UI = {}

local AzulService = require("./AzulService")
local Config = require("./Config")
local Enums = require("./Enums")

UI.__index = UI

export type CallbackFunctions = {
	onStartSync: () -> (),
	onStopSync: () -> (),
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
	titleImageLabel: ImageLabel,
	syncButton: any,
	autoConnectCheckbox: any,
	debugModeCheckbox: any,
	silentModeCheckbox: any,
	settingsScopeDropdown: any,
	websocketUrlLabel: any,
	heartbeatIntervalLabel: any,
	batchIdleWindowLabel: any,
	scriptChangeDebounceLabel: any,
	listTypeLabel: any,
	serviceListLabel: any,
	excludedParentsLabel: any,
	clearGuidsButton: any,
	reloadSourcemapButton: any,

	GetSyncState: (AzulUI) -> boolean,
	UpdateSyncState: (AzulUI, boolean) -> (),
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

local function createInfoLabel(text: string)
	local label = Instance.new("TextLabel")
	label.Name = "InfoLabel"
	label.RichText = true
	label.AutomaticSize = Enum.AutomaticSize.Y
	label.TextWrapped = true
	label.Size = UDim2.new(1, 0, 0, 15)
	label.BackgroundTransparency = 1
	label.TextColor3 = Color3.new(0.5, 0.5, 0.5)
	label.Font = Enum.Font.SourceSans
	label.TextSize = 15
	label.Text = `{text}<br/>`
	label.TextXAlignment = Enum.TextXAlignment.Left

	local padding = Instance.new("UIPadding")
	padding.PaddingLeft = UDim.new(0, 30)
	padding.PaddingRight = UDim.new(0, 30)
	padding.Parent = label

	return label
end

local function validateNumberInput(newValue: string, callback: (number) -> ())
	local numberValue = tonumber(newValue)
	if not numberValue then
		warn(`[Azul::{script}]: Invalid number input: {newValue}`)
		return
	end
	if numberValue <= 0 then
		warn(`[Azul::{script}]: Number input must be greater than 0: {newValue}`)
		return
	end
	callback(numberValue)
end

local function getBuilderIcon(iconName: string, filled: boolean?): string
	local icon =
		`<font family="rbxasset://LuaPackages/Packages/_Index/BuilderIcons/BuilderIcons/BuilderIcons.json">{iconName}</font>`
	return if filled then `<b>{icon}</b>` else icon
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

	-- Track sync enabled state locally (PluginToolbarButton has SetActive but no GetActive)
	self.isSyncEnabled = false

	-- Import UI components
	local VerticalScrollingFrame = require("./StudioWidgets/Components/VerticalScrollingFrame")
	local CollapsibleTitledSection = require("./StudioWidgets/Components/CollapsibleTitledSection")
	local CustomTextButton = require("./StudioWidgets/Components/CustomTextButton")
	local LabeledCheckbox = require("./StudioWidgets/Components/LabeledCheckbox")
	local LabeledMultiChoice = require("./StudioWidgets/Components/LabeledMultiChoice")
	local LabeledTextInput = require("./StudioWidgets/Components/LabeledTextInput")
	local DropdownMenu = require("./StudioWidgets/Components/DropdownMenu")
	local GuiUtilities = require("./StudioWidgets/GuiUtilities")

	-- Create toolbar button
	local toolbar = plugin:CreateToolbar("Azul")
	self.connectButton = toolbar:CreateButton("Azul", "Connect/disconnect from sync daemon", self.LOGO)

	-- Create widget
	local widgetInfo = DockWidgetPluginGuiInfo.new(
		Enum.InitialDockState.Float, -- Widget starts floating
		true, -- Widget will be initially enabled
		false, -- Don't override the previous enabled state
		345, -- Default width
		640, -- Default height
		300, -- Minimum width of the floating window (optional)
		300 -- Minimum height of the floating window (optional)
	)

	local azulWidget = plugin:CreateDockWidgetPluginGuiAsync("azulWidget", widgetInfo)
	azulWidget.Name = "AzulCompanionPlugin"
	azulWidget.Title = "Azul"
	self.azulWidget = azulWidget

	-- Create main scroll frame
	local mainScrollFrame = VerticalScrollingFrame.new("main")
	mainScrollFrame:GetContentsFrame().Parent = azulWidget

	local mainSectionListLayout = Instance.new("UIListLayout")
	mainSectionListLayout.Parent = mainScrollFrame:GetSectionFrame()
	mainSectionListLayout.Padding = UDim.new(0, 0)
	mainSectionListLayout.SortOrder = Enum.SortOrder.LayoutOrder
	mainSectionListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center

	-- Main section
	local mainSection = CollapsibleTitledSection.new("mainSection", "Azul Companion Plugin", true, false, false, false)
	mainSection:GetSectionFrame().LayoutOrder = 0
	mainSection:GetSectionFrame().Parent = mainScrollFrame:GetContentsFrame()

	-- Title image
	local imageContainer = Instance.new("Frame")
	imageContainer.Size = UDim2.new(1, 0, 0, 70)
	imageContainer.BackgroundTransparency = 1

	local imageContainerListLayout = Instance.new("UIListLayout")
	imageContainerListLayout.FillDirection = Enum.FillDirection.Horizontal
	imageContainerListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Center
	imageContainerListLayout.VerticalAlignment = Enum.VerticalAlignment.Center
	imageContainerListLayout.Parent = imageContainer

	local titleImageLabel = Instance.new("ImageLabel")
	titleImageLabel.Size = UDim2.fromScale(0.2, 1)
	titleImageLabel.AutomaticSize = Enum.AutomaticSize.X
	titleImageLabel.BackgroundTransparency = 1
	titleImageLabel.Image = self.LOGO
	titleImageLabel.ScaleType = Enum.ScaleType.Fit
	titleImageLabel.LayoutOrder = 0
	titleImageLabel.Parent = imageContainer

	local azulText = Instance.new("TextLabel")
	azulText.Text = "<b>Azul</b>"
	azulText.RichText = true
	azulText.Font = Enum.Font.RobotoMono
	azulText.TextSize = 36
	azulText.TextScaled = true
	azulText.Size = UDim2.fromScale(0.1, 1)
	azulText.AutomaticSize = Enum.AutomaticSize.X
	azulText.TextColor3 =
		GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.BrightText, Enum.StudioStyleGuideModifier.Default)
	azulText.BackgroundTransparency = 1
	azulText.LayoutOrder = 1
	azulText.Parent = imageContainer

	local padding = Instance.new("UIPadding")
	padding.PaddingTop = UDim.new(0, 10)
	padding.PaddingBottom = UDim.new(0, 10)
	padding.Parent = imageContainer

	mainSection:AddChild(imageContainer, 0)
	self.titleImageLabel = titleImageLabel

	-- Sync button
	local syncButton = CustomTextButton.new("toggleSync", "Connect", false)
	syncButton.Parent = mainScrollFrame:GetContentsFrame()
	syncButton:SetSize(UDim2.fromScale(1, 0.2))

	local syncButtonPadding = Instance.new("UIPadding")
	syncButtonPadding.PaddingLeft = UDim.new(0.1, 0)
	syncButtonPadding.PaddingRight = UDim.new(0.1, 0)
	syncButtonPadding.Parent = syncButton:GetFrame()

	syncButton:SetClickedFunction(function()
		if self.isSyncEnabled then
			syncButton:GetButton().Text = "Stopping..."
			self.callbacks.onStopSync()
		else
			syncButton:GetButton().Text = "Connecting..."
			self.callbacks.onStartSync()
		end
	end)
	mainSection:AddChild(syncButton:GetFrame())
	self.syncButton = syncButton


	-- Silent Mode checkbox
	local silentModeCheckbox = LabeledCheckbox.new("silentMode", "Silent Mode", Config.SILENT_MODE, false)
	silentModeCheckbox:SetValue(Config.SILENT_MODE)
	silentModeCheckbox:SetValueChangedFunction(function(newValue)
		Config.SILENT_MODE = newValue
		debugPrint(`Silent mode set to: {newValue}`)
	end)
	mainSection:AddChild(silentModeCheckbox:GetFrame())
	mainSection:AddChild(createInfoLabel("Silent mode suppresses all console output except errors."))
	self.silentModeCheckbox = silentModeCheckbox

	-- Debug Mode checkbox
	local debugModeCheckbox = LabeledCheckbox.new("debugMode", "Debug Mode", Config.DEBUG_MODE, false)
	debugModeCheckbox:SetValue(Config.DEBUG_MODE)
	debugModeCheckbox:SetValueChangedFunction(function(newValue)
		Config.DEBUG_MODE = newValue
		debugPrint(`Debug mode set to: {newValue}`)
	end)
	mainSection:AddChild(debugModeCheckbox:GetFrame())
	mainSection:AddChild(createInfoLabel("Debug mode enables verbose logging to the output console."))
	self.debugModeCheckbox = debugModeCheckbox

	-- Settings section
	local settingsSection = CollapsibleTitledSection.new("settings", "Plugin Settings", true, true, true)
	settingsSection:GetSectionFrame().LayoutOrder = 1
	settingsSection:GetSectionFrame().Parent = mainScrollFrame:GetContentsFrame()

	-- Settings scope dropdown
	local scopeChoices = {
		{ Id = 1, Text = "Global" },
		{ Id = 2, Text = "Project" },
	}
	local settingsScopeDropdown = DropdownMenu.new("settingsScope", "Scope", scopeChoices, "Select ...")
	settingsSection:AddChild(settingsScopeDropdown:GetSectionFrame())
	self.settingsScopeDropdown = settingsScopeDropdown

	-- Auto Connect checkbox
	local autoConnectCheckbox = LabeledCheckbox.new("autoConnect", "Auto Connect", Config.AUTO_CONNECT, false)
	autoConnectCheckbox:SetValue(Config.AUTO_CONNECT)
	autoConnectCheckbox:SetValueChangedFunction(function(newValue)
		Config.AUTO_CONNECT = newValue
		self.callbacks.onConfigChanged("AUTO_CONNECT", newValue)
		debugPrint(`Auto Connect set to: {newValue}`)
	end)
	settingsSection:AddChild(autoConnectCheckbox:GetFrame())
	settingsSection:AddChild(createInfoLabel("Automatically attempt to connect to the daemon when the plugin starts."))

	self.autoConnectCheckbox = autoConnectCheckbox
	-- WebSocket URL input
	local websocketUrlLabel = LabeledTextInput.new("websocketUrl", "WebSocket URL:", Config.WS_URL)
	websocketUrlLabel:SetValue(Config.WS_URL)
	websocketUrlLabel:SetValueChangedFunction(function(newValue)
		Config.WS_URL = newValue
		self.callbacks.onConfigChanged("WS_URL", newValue)
	end)
	settingsSection:AddChild(websocketUrlLabel:GetFrame())
	self.websocketUrlLabel = websocketUrlLabel

	-- Heartbeat Interval input
	local heartbeatIntervalLabel =
		LabeledTextInput.new("heartbeatInterval", "Heartbeat Interval (s):", tostring(Config.HEARTBEAT_INTERVAL))
	heartbeatIntervalLabel:SetValue(tostring(Config.HEARTBEAT_INTERVAL))
	heartbeatIntervalLabel:SetValueChangedFunction(function(newValue)
		validateNumberInput(newValue, function(interval)
			Config.HEARTBEAT_INTERVAL = interval
			self.callbacks.onConfigChanged("HEARTBEAT_INTERVAL", interval)
		end)
	end)
	settingsSection:AddChild(heartbeatIntervalLabel:GetFrame())
	settingsSection:AddChild(createInfoLabel("Interval in seconds between heartbeat pings to the daemon."))
	self.heartbeatIntervalLabel = heartbeatIntervalLabel

	-- Batch Idle Window input
	local batchIdleWindowLabel =
		LabeledTextInput.new("batchIdleWindow", "Batch Idle Window (s):", tostring(Config.BATCH_IDLE_WINDOW))
	batchIdleWindowLabel:SetValue(tostring(Config.BATCH_IDLE_WINDOW))
	batchIdleWindowLabel:SetValueChangedFunction(function(newValue)
		validateNumberInput(newValue, function(idleWindow)
			Config.BATCH_IDLE_WINDOW = idleWindow
			self.callbacks.onConfigChanged("BATCH_IDLE_WINDOW", idleWindow)
		end)
	end)
	settingsSection:AddChild(batchIdleWindowLabel:GetFrame())
	settingsSection:AddChild(
		createInfoLabel(
			"Seconds of inactivity before sending batched updates to the daemon. A lower number means faster updates, a higher number can improve performance."
		)
	)
	self.batchIdleWindowLabel = batchIdleWindowLabel

	-- Script Change Debounce input
	local scriptChangeDebounceLabel =
		LabeledTextInput.new("scriptChangeDebounce", "Script Change Deb. (s):", tostring(Config.SCRIPT_CHANGE_DEBOUNCE))
	scriptChangeDebounceLabel:SetValue(tostring(Config.SCRIPT_CHANGE_DEBOUNCE))
	scriptChangeDebounceLabel:SetValueChangedFunction(function(newValue)
		validateNumberInput(newValue, function(debounce)
			Config.SCRIPT_CHANGE_DEBOUNCE = debounce
			self.callbacks.onConfigChanged("SCRIPT_CHANGE_DEBOUNCE", debounce)
		end)
	end)
	settingsSection:AddChild(scriptChangeDebounceLabel:GetFrame())
	settingsSection:AddChild(
		createInfoLabel(
			"Debounce time to batch script changes for before sending updates to the daemon. A lower number means faster updates, a higher number can improve performance."
		)
	)
	self.scriptChangeDebounceLabel = scriptChangeDebounceLabel

	-- List type dropdown
	local listTypeLabel = LabeledMultiChoice.new("listType", "Service List Type:", {
		{ Id = "WHITELIST", Text = "Whitelist" },
		{ Id = "BLACKLIST", Text = "Blacklist" },
	}, if Config.LIST_TYPE == Enums.listType.WHITELIST then 1 else 2)
	listTypeLabel:SetValueChangedFunction(function(newIndex)
		if newIndex == 1 then
			Config.LIST_TYPE = Enums.listType.WHITELIST
		else
			Config.LIST_TYPE = Enums.listType.BLACKLIST
		end
		self.callbacks.onConfigChanged("LIST_TYPE", Config.LIST_TYPE)
	end)
	settingsSection:AddChild(listTypeLabel:GetFrame())
	settingsSection:AddChild(
		createInfoLabel(
			"Whitelist: only services in the list are synced.<br />Blacklist: services in the list are excluded."
		)
	)
	self.listTypeLabel = listTypeLabel

	-- Service List input
	local serviceListLabel =
		LabeledTextInput.new("serviceList", "Service List:", table.concat(Config.SERVICE_LIST, ", "))
	serviceListLabel:SetMaxGraphemes(9999)
	serviceListLabel:SetValue(table.concat(Config.SERVICE_LIST, ", "))
	serviceListLabel:SetValueChangedFunction(function(newValue)
		local services = {}
		for serviceName in string.gmatch(newValue, "([^,%s]+)") do
			table.insert(services, serviceName)
		end
		Config.SERVICE_LIST = services
		self.rebuildServiceSet()
		self.callbacks.onConfigChanged("SERVICE_LIST", services)
	end)
	settingsSection:AddChild(serviceListLabel:GetFrame())
	settingsSection:AddChild(createInfoLabel("List of services to include/exclude based on the selected List Type."))
	self.serviceListLabel = serviceListLabel

	-- Excluded Parents input
	local excludedParentsLabel =
		LabeledTextInput.new("excludedParents", "Excluded Parents:", table.concat(Config.EXCLUDED_PARENTS, ", "))
	excludedParentsLabel:SetMaxGraphemes(9999)
	excludedParentsLabel:SetValue(table.concat(Config.EXCLUDED_PARENTS, ", "))
	excludedParentsLabel:SetValueChangedFunction(function(newValue)
		local excluded = {}
		for parentName in string.gmatch(newValue, "([^,%s]+)") do
			table.insert(excluded, parentName)
		end
		Config.EXCLUDED_PARENTS = excluded
		self.callbacks.onConfigChanged("EXCLUDED_PARENTS", excluded)
	end)
	settingsSection:AddChild(excludedParentsLabel:GetFrame())
	settingsSection:AddChild(createInfoLabel("List of parent paths to exclude from syncing, separated by commas."))
	self.excludedParentsLabel = excludedParentsLabel

	settingsScopeDropdown:SetValue(if self.settingsScope == Enums.scope.GLOBAL then 1 else 2)

	-- Settings scope callback
	settingsScopeDropdown:SetValueChangedFunction(function(newValue: number | string, newText: string)
		debugPrint("Settings scope changed to:", newText)

		local newScope
		if newValue == 1 then
			newScope = Enums.scope.GLOBAL
		elseif newValue == 2 then
			newScope = Enums.scope.PROJECT
		else
			return
		end

		self.callbacks.onSettingsScopeChanged(newScope)
	end)

	-- Open per-place Daemon settings button
	local openDaemonSettingsButton = CustomTextButton.new(
		"openDaemonSettings",
		`{getBuilderIcon("arrow-up-right-from-square", true)} Open Daemon Settings`,
		false
	)
	openDaemonSettingsButton:SetClickedFunction(function()
		local ScriptEditorService = game:GetService("ScriptEditorService")
		local ServerStorage = game:GetService("ServerStorage")
		local azulFolder = ServerStorage:FindFirstChild("Azul") :: Folder
		if not azulFolder then
			debugPrint("Place doesn't have an 'Azul' folder in ServerStorage, creating one...")
			local newAzulFolder = Instance.new("Folder")
			newAzulFolder.Name = "Azul"
			newAzulFolder.Parent = ServerStorage
			azulFolder = newAzulFolder
		end

		local azulDaemonSettings = azulFolder:FindFirstChild("Config") :: ModuleScript
		if not azulDaemonSettings then
			debugPrint("Place doesn't have a 'Config' ModuleScript in the 'Azul' folder, creating one...")
			local newConfigModule = Instance.new("ModuleScript")
			newConfigModule.Name = "Config"
			newConfigModule.Source = [[
-- Per-place Daemon configuration
-- This file is sent to the Daemon when it connects, and can be used to specify settings for this specific Place, such as push mappings.

-- More info about the format:
-- https://azul-docs.vercel.app/advanced-usage/#per-place-daemon-configuration

return {}
			]]
			newConfigModule.Parent = azulFolder
			azulDaemonSettings = newConfigModule
		end

		ScriptEditorService:OpenScriptDocumentAsync(azulDaemonSettings)
	end)

	openDaemonSettingsButton:SetSize(UDim2.fromScale(1, 0.06))

	local daemonSettingsPadding = Instance.new("UIPadding")
	daemonSettingsPadding.PaddingLeft = UDim.new(0.1, 0)
	daemonSettingsPadding.PaddingRight = UDim.new(0.1, 0)
	daemonSettingsPadding.Parent = openDaemonSettingsButton:GetFrame()

	settingsSection:AddChild(openDaemonSettingsButton:GetFrame())
	settingsSection:AddChild(createInfoLabel(`Open the per-place Daemon configuration.`))

	-- Reload sourcemap button
	local reloadSourcemapButton = CustomTextButton.new(
		"reloadSourcemap",
		`{getBuilderIcon("arrow-spin-clockwise", true)} Reload Sourcemap`,
		false
	)
	reloadSourcemapButton:SetClickedFunction(function()
		self.callbacks.onSourcemapReload()
	end)
	reloadSourcemapButton:SetSize(UDim2.fromScale(1, 0.06))

	local reloadSourcemapPadding = Instance.new("UIPadding")
	reloadSourcemapPadding.PaddingLeft = UDim.new(0.1, 0)
	reloadSourcemapPadding.PaddingRight = UDim.new(0.1, 0)
	reloadSourcemapPadding.Parent = reloadSourcemapButton:GetFrame()

	settingsSection:AddChild(reloadSourcemapButton:GetFrame())
	settingsSection:AddChild(
		createInfoLabel("Something's not right? Force reload the sourcemap to reset the sync state.")
	)
	self.reloadSourcemapButton = reloadSourcemapButton

	settingsSection:AddChild(createInfoLabel(`Azul Plugin: v{AzulService.VERSION}`))

	-- Connect button click handler
	self.connectButton.Click:Connect(function()
		azulWidget.Enabled = not azulWidget.Enabled
	end)

	return (self :: any) :: AzulUI
end

function UI:GetSyncState()
	return self.isSyncEnabled
end

function UI:UpdateSyncState(enabled: boolean)
	self.isSyncEnabled = enabled
	self.connectButton:SetActive(enabled)
	if enabled then
		self.connectButton.Icon = self.LOGO_SYNCED
		self.syncButton:GetButton().Text = "Disconnect"
		self.titleImageLabel.Image = self.LOGO_SYNCED
	else
		self.connectButton.Icon = self.LOGO
		self.syncButton:GetButton().Text = "Connect"
		self.titleImageLabel.Image = self.LOGO
	end
end

function UI:SetSettingsScope(scope)
	self.settingsScope = scope
end

function UI:UpdateConfig()
	self = self :: AzulUI

	self.autoConnectCheckbox:SetValue(Config.AUTO_CONNECT)
	self.debugModeCheckbox:SetValue(Config.DEBUG_MODE)
	self.silentModeCheckbox:SetValue(Config.SILENT_MODE)
	self.settingsScopeDropdown:SetValue(if self.settingsScope == Enums.scope.GLOBAL then 1 else 2)
	self.websocketUrlLabel:SetValue(Config.WS_URL)
	self.heartbeatIntervalLabel:SetValue(tostring(Config.HEARTBEAT_INTERVAL))
	self.batchIdleWindowLabel:SetValue(tostring(Config.BATCH_IDLE_WINDOW))
	self.scriptChangeDebounceLabel:SetValue(tostring(Config.SCRIPT_CHANGE_DEBOUNCE))
	self.listTypeLabel:SetSelectedIndex(if Config.LIST_TYPE == Enums.listType.WHITELIST then 1 else 2)
	self.serviceListLabel:SetValue(table.concat(Config.SERVICE_LIST, ", "))
	self.excludedParentsLabel:SetValue(table.concat(Config.EXCLUDED_PARENTS, ", "))
end

return UI
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\WebSocketClient.luau
``
--!strict
--[[
	WebSocket Client for Roblox Studio
	
	Uses Roblox Studio's native WebSocket support (WebStreamClient) for real-time
	bidirectional communication with the sync daemon.

	Ransomwave 2025
]]

local HttpService = game:GetService("HttpService")

local WebSocketClient = {}
WebSocketClient.__index = WebSocketClient

type configType = {
	debugMode: boolean?,
	silentMode: boolean?,
}

-- self type
export type WebSocketClient = {
	url: string,
	client: WebStreamClient,
	connected: boolean,
	messageHandlers: { [string]: (any) -> () },
	config: configType,

	new: (url: string?) -> WebSocketClient,
	on: (self: WebSocketClient, event: string, handler: (any) -> ()) -> (),
	once: (self: WebSocketClient, event: string, handler: (any) -> ()) -> (),
	connect: (self: WebSocketClient) -> boolean,
	reconnect: (self: WebSocketClient) -> boolean,
	handleMessage: (self: WebSocketClient, message: string) -> (),
	send: (self: WebSocketClient, message: string) -> boolean,
	disconnect: (self: WebSocketClient) -> (),
	debugPrint: (self: WebSocketClient, ...any) -> (),
	infoPrint: (self: WebSocketClient, ...any) -> (),
}

function WebSocketClient.new(url, config: configType?)
	local self = setmetatable({}, WebSocketClient)
	self.url = url or "ws://localhost:8080"
	self.client = nil
	self.connected = false
	self.messageHandlers = {}
	self.onClosed = Instance.new("BindableEvent")
	self.config = config or {
		debugMode = false,
		silentMode = true,
	}

	if self.config.debugMode then print("[🐛 WebSocket]: Debug mode is enabled!") end

	return (self :: any) :: WebSocketClient
end

function WebSocketClient:debugPrint(...)
	self = self :: WebSocketClient
	if self.config.silentMode or not self.config.debugMode then return end
	print(`[🐛 WebSocket]: `, ...)
end

function WebSocketClient:infoPrint(...)
	self = self :: WebSocketClient
	if self.config.silentMode then return end
	print(`[WebSocket]: `, ...)
end

function WebSocketClient:on(event, handler)
	self = self :: WebSocketClient
	self.messageHandlers[event] = handler
end

function WebSocketClient:once(event, handler)
	self = self :: WebSocketClient
	local function wrapper(...)
		handler(...)
		self.messageHandlers[event] = nil
	end
	self.messageHandlers[event] = wrapper
end

function WebSocketClient:connect()
	self = self :: WebSocketClient
	if self.connected then return true end

	local success, result = pcall(function()
		return HttpService:CreateWebStreamClient(Enum.WebStreamClientType.WebSocket, {
			Url = self.url,
		})
	end)

	if not success then
		warn("[WebSocket]: Connection failed:", result)
		if self.messageHandlers.error then self.messageHandlers.error(result) end
		return false
	end

	self.client = result

	self.client.MessageReceived:Connect(function(message)
		local parseSuccess, parseResult = pcall(function()
			self:handleMessage(message)
		end)
		if not parseSuccess then
			warn("[WebSocket]: Error handling message:", parseResult)
			warn("[WebSocket]: Raw message was:", message)
		end
	end)

	self.client.Opened:Connect(function(statusCode, headers)
		self.connected = true
		self:debugPrint("Connection opened with status:", statusCode)
		if self.messageHandlers.connect then
			self.messageHandlers.connect()
		end
	end)

	self.client.Closed:Connect(function()
		if self.connected then
			self.connected = false
			self:debugPrint("Connection closed")
			if self.messageHandlers.disconnect then
				self.messageHandlers.disconnect()
			end
		end
	end)

	self.client.Error:Connect(function(errMessage)
		warn("[WebSocket]: Stream error:", errMessage)
		if self.messageHandlers.error then
			self.messageHandlers.error(errMessage)
		end
	end)

	return true
end

function WebSocketClient:reconnect()
	self = self :: WebSocketClient

	self:debugPrint(`Reconnect requested to WebSocket at: {self.url}`)

	self:disconnect()
	return self:connect()
end

function WebSocketClient:handleMessage(message)
	self = self :: WebSocketClient
	if not message or message == "" then return end

	self:debugPrint("Received message:", string.sub(message, 1, 100))

	local success, result = pcall(function()
		return HttpService:JSONDecode(message)
	end)

	if success then
		if self.messageHandlers.message then self.messageHandlers.message(result) end
		local messageType = result and result.type
		if type(messageType) == "string" and self.messageHandlers[messageType] then
			self.messageHandlers[messageType](result)
		end
	elseif not success then
		warn(`[WebSocket]: Failed to decode message as JSON: {result}`)
	end
end

function WebSocketClient:send(message)
	self = self :: WebSocketClient
	if not self.connected or not self.client then
		warn("[WebSocket]: Cannot send: not connected")
		return false
	end

	self:debugPrint("Sending:", string.sub(message, 1, 200))

	local success, err = pcall(function()
		self.client:Send(message)
	end)

	if not success then
		warn("[WebSocket]: Send failed:", err)
		return false
	end

	return true
end

function WebSocketClient:disconnect()
	self = self :: WebSocketClient

	if not self.client then return end

	local wasConnected = self.connected
	self.connected = false
	self.client:Close()

	if wasConnected and self.messageHandlers.disconnect then
		self.messageHandlers.disconnect()
	end
end

return WebSocketClient

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Assets.luau
``
return {
	-- [""] = {
	-- 	["Banner"] = "rbxassetid://16996859431",
	-- 	["Logo"] = "rbxassetid://16940983037",
	-- 	["LogoOk"] = "rbxassetid://17419316559",
	-- 	["LogoWarn"] = "rbxassetid://17419316412",
	-- 	["LogoError"] = "rbxassetid://17419316704"
	-- },
	["Icons"] = {
		["Settings"] = "rbxassetid://16549970121",
		["Checkmark"] = "rbxassetid://16528403189",
		["Spinner"] = "rbxassetid://16548972586",
		["Info"] = "rbxassetid://16549936110",
		["Help"] = "rbxassetid://16549970317",
		["Dropdown"] = "rbxassetid://16698223846",
		["Expand"] = "rbxassetid://82247774782797",
	},
}

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Theme.luau
``
local plugin = script:FindFirstAncestorWhichIsA("Plugin")
local Studio = settings().Studio

local Azul = script:FindFirstAncestor("AzulCompanionPlugin")

local Fusion = require(Azul.Packages.fusion)

local function getColors(isDark: boolean): { [string]: { Color3 | { [string]: Color3 } } }
	local background = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainBackground)
	local border = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Shadow)

	if border == background then border = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.ScrollBarBackground) end

	local h, s, v = border:ToHSV()
	border = Color3.fromHSV(h, s, v * (isDark and 1.2 or 0.85))

	return {
		-- Brand = Color3.fromRGB(90, 142, 233),
		Brand = Color3.fromHex("157eff"),

		Background = background,
		ActiveBackground = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Titlebar),
		Border = border,

		Text = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.BrightText),
		TextDimmed = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.SubText),
		TextBranded = isDark and Studio.Theme:GetColor(Enum.StudioStyleGuideColor.BrightText) or background,

		Diff = {
			Add = Color3.fromRGB(80, 220, 100),
			Update = Color3.fromRGB(100, 200, 230),
			Remove = Color3.fromRGB(230, 100, 100),
		},
	}
end

local function init(): Fusion.Value<Color3>
	return Fusion.Value(Color3.new())
end

local Theme = {
	-- For autocomplete
	Colors = {
		Brand = init(),

		Background = init(),
		ActiveBackground = init(),
		Border = init(),

		Text = init(),
		TextDimmed = init(),
		TextBranded = init(),

		Diff = {
			Add = init(),
			Update = init(),
			Remove = init(),
		},
	},

	Fonts = {
		Regular = Font.fromName("SourceSans"),
		Bold = Font.fromName("SourceSans", Enum.FontWeight.Bold),
		Italic = Font.fromName("SourceSans", Enum.FontWeight.Regular, Enum.FontStyle.Italic),
		Mono = Font.fromName("RobotoMono"),

		-- required for TextService:GetTextSize()
		Enums = {
			Regular = Enum.Font.SourceSans,
			Bold = Enum.Font.SourceSans,
			Italic = Enum.Font.SourceSans,
			Mono = Enum.Font.RobotoMono,
		},
	},

	BorderThickness = 1,
	CornerRadius = 4,
	ListSpacing = 12,
	WidgetPadding = 12,
	Padding = 8,

	TextSize = {
		Heading = 40,
		Large = 20,
		Medium = 18,
		Small = 15,
	},

	CompSizeY = {
		Large = 36,
		Medium = 30,
		Small = 28,
	},

	SpringSpeed = 30,
	SpringFastSpeed = 60,
	SpringDamping = 1.5,

	IsDark = Fusion.Value(true),
}

do
	local function updateTheme()
		local _, _, v = Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainBackground):ToHSV()
		local isDark = v <= 0.6

		Theme.IsDark:set(isDark)

		for key, color in getColors(isDark) do
			if type(color) ~= "table" then
				Theme.Colors[key]:set(color)
			else
				for subKey, subColor in color do
					Theme.Colors[key][subKey]:set(subColor)
				end
			end
		end
	end

	updateTheme()

	local connection = Studio.ThemeChanged:Connect(updateTheme)

	plugin.Unloading:Once(function()
		connection:Disconnect()
		connection = nil
	end)

	-- :P
	local now = DateTime.now():ToLocalTime()
	if now.Month == 4 and now.Day == 1 then
		Theme.Colors.Brand:set(Color3.fromHex("e13835"))
		Theme.CornerRadius = 0
	end
end

return Theme

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\UI.luau
``
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
local Switch = require("./Components/Switch")
local Dropdown = require("./Components/Dropdown")

local Value = fusion.Value
local Computed = fusion.Computed
local Children = fusion.Children
local OnEvent = fusion.OnEvent
local Ref = fusion.Ref
local Observer = fusion.Observer
local peek = fusion.peek
local Spring = fusion.Spring
local New = fusion.New
local ForPairs = fusion.ForPairs
local cleanup = fusion.cleanup

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
			Switch({
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
	self.extraClassSuffixesValue = Value(Config.extraClassSuffixes)

	self.confirmDestructive = Value(Config.CONFIRM_DESTRUCTIVE)
	self.displayPrompts = Value(Config.DISPLAY_PROMPTS)
	self.keepUnknowns = Value(Config.KEEP_UNKNOWNS)
	self.initialSyncPriority = Value(Config.INITIAL_SYNC_PRIORITY)

	self.wsUrlRef = Value(nil)
	self.heartbeatRef = Value(nil)
	self.batchIdleRef = Value(nil)
	self.scriptDebounceRef = Value(nil)
	self.changesThresholdRef = Value(nil)

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

		local function settingsRow(title: string, description: string, valueComponent: Instance, customHeight: UDim2?, zIndex: any?)
			return Container({
				Size = UDim2.fromScale(1, 0),
				AutomaticSize = Enum.AutomaticSize.Y,
				ZIndex = zIndex or 1,
				[Children] = {
					New("Frame")({
						Size = UDim2.new(1, 0, 0, Theme.BorderThickness),
						BackgroundColor3 = Theme.Colors.Border,
						BorderSizePixel = 0,
					}),
					Container({
						Size = UDim2.fromScale(1, 0),
						AutomaticSize = Enum.AutomaticSize.Y,
						[Children] = {
							Padding({
								Padding = 8,
								Vertical = true,
							}),
							List({
								FillDirection = Enum.FillDirection.Horizontal,
								VerticalAlignment = Enum.VerticalAlignment.Center,
								HorizontalFlex = Enum.UIFlexAlignment.Fill,
								Spacing = 12,
							}),
							Container({
								Size = UDim2.new(0.55, -6, 0, 0),
								AutomaticSize = Enum.AutomaticSize.Y,
								[Children] = {
									List({
										Spacing = 4,
									}),
									Text({
										Text = title,
										FontFace = Theme.Fonts.Bold,
										TextSize = Theme.TextSize.Medium,
										Color = Theme.Colors.Text,
										AutomaticSize = Enum.AutomaticSize.Y,
										Size = UDim2.fromScale(1, 0),
									}),
									Text({
										RichText = true,
										TextWrapped = true,
										Text = description,
										TextSize = Theme.TextSize.Small,
										Color = Theme.Colors.TextDimmed,
										AutomaticSize = Enum.AutomaticSize.Y,
										Size = UDim2.fromScale(1, 0),
									}),
								},
							}),
							Container({
								Size = customHeight or UDim2.new(0.45, -6, 0, Theme.CompSizeY.Medium),
								AutomaticSize = if customHeight then Enum.AutomaticSize.Y else Enum.AutomaticSize.None,
								[Children] = {
									List({
										FillDirection = Enum.FillDirection.Horizontal,
										HorizontalAlignment = Enum.HorizontalAlignment.Right,
										VerticalAlignment = Enum.VerticalAlignment.Center,
									}),
									valueComponent,
								},
							}),
						},
					}),
				},
			})
		end

		local function settingsToggle(title: string, description: string, value: fusion.Value<boolean>, changed: (boolean) -> ())
			return settingsRow(title, description, Switch({
				Value = value,
				Changed = changed,
			}))
		end

		local function settingsInput(title: string, description: string, ref: fusion.Value<TextBox?>, text: string, finished: (string) -> ())
			return settingsRow(title, description, Box({
				Size = UDim2.fromScale(1, 1),
				[Children] = {
					Padding({
						Padding = 6,
						Vertical = false,
					}),
					Input({
						Text = text,
						ClearTextOnFocus = false,
						Size = UDim2.fromScale(1, 1),
						[Ref] = ref,
						Finished = finished,
					}),
				},
			}))
		end

		local function settingsFullInput(title: string, description: string, ref: fusion.Value<TextBox?>, text: string, finished: (string) -> ())
			return Container({
				Size = UDim2.fromScale(1, 0),
				AutomaticSize = Enum.AutomaticSize.Y,
				[Children] = {
					New("Frame")({
						Size = UDim2.new(1, 0, 0, Theme.BorderThickness),
						BackgroundColor3 = Theme.Colors.Border,
						BorderSizePixel = 0,
					}),
					Container({
						Size = UDim2.fromScale(1, 0),
						AutomaticSize = Enum.AutomaticSize.Y,
						[Children] = {
							Padding({
								Padding = 8,
								Vertical = true,
							}),
							List({
								Spacing = 6,
							}),
							Text({
								Text = title,
								FontFace = Theme.Fonts.Bold,
								TextSize = Theme.TextSize.Medium,
								Color = Theme.Colors.Text,
								AutomaticSize = Enum.AutomaticSize.XY,
							}),
							Text({
								RichText = true,
								TextWrapped = true,
								Text = description,
								TextSize = Theme.TextSize.Small,
								Color = Theme.Colors.TextDimmed,
								Size = UDim2.new(1, 0, 0, 0),
								AutomaticSize = Enum.AutomaticSize.Y,
							}),
							Box({
								Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Medium * 2),
								[Children] = {
									Padding({
										Padding = 6,
										Vertical = false,
									}),
									Input({
										Text = text,
										ClearTextOnFocus = false,
										MultiLine = true,
										TextWrapped = true,
										Size = UDim2.fromScale(1, 1),
										[Ref] = ref,
										Finished = finished,
									}),
								},
							}),
						},
					}),
				},
			})
		end

		local function settingsOption(title: string, description: string, options: { string }, value: fusion.Value<string>, selected: (string) -> ())
			return settingsRow(title, description, OptionSelector({
				Options = options,
				Value = value,
				Selected = selected,
			}))
		end

		local function settingsDropdown(title: string, description: string, options: { string }, value: fusion.Value<string>, selected: (string) -> ())
			local isOpen = Value(false)
			return settingsRow(title, description, Dropdown({
				Options = options,
				Value = value,
				Selected = selected,
				Size = UDim2.fromScale(1, 1),
				IsOpen = isOpen,
			}), nil, Computed(function(use)
				return use(isOpen) and 10 or 1
			end))
		end

		local function settingsButton(title: string, description: string, buttonText: string, activated: () -> ())
			return settingsRow(title, description, TextButton({
				Text = buttonText,
				Size = UDim2.fromScale(1, 1),
				Activated = activated,
			}))
		end

		local widget = Widget({
			Name = "Azul Settings",
			Id = "AzulSettings",
			MinimumSize = Vector2.new(350, 400),
			FloatingSize = Vector2.new(380, 480),
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
								Padding({
									Padding = Theme.WidgetPadding,
								}),
								List({
									Spacing = Theme.ListSpacing,
								}),

								OptionSelector({
									Options = { "Global", "Project" },
									Value = self.settingsScopeValue,
									Selected = function(option)
										local scope = option == "Global" and Enums.scope.GLOBAL or Enums.scope.PROJECT
										self.callbacks.onSettingsScopeChanged(scope)
									end,
								}),

								New("Frame")({
									Size = UDim2.new(1, 0, 0, Theme.BorderThickness),
									BackgroundColor3 = Theme.Colors.Border,
									BorderSizePixel = 0,
								}),

										Collapsible({
											Title = "1. General",
											Expanded = true,
											ZIndex = 10,
											Elements = {
												settingsToggle("Auto Connect", "Automatically attempt to connect to the daemon on startup.", self.autoConnect, function(newValue)
													Config.AUTO_CONNECT = newValue
													if self.callbacks.onAutoConnectChanged then
														self.callbacks.onAutoConnectChanged(newValue)
													end
												end),
												settingsToggle("Silent Mode", "Suppress all console output except error messages.", self.silentMode, function(newValue)
													Config.SILENT_MODE = newValue
													if self.callbacks.onSilentModeChanged then
														self.callbacks.onSilentModeChanged(newValue)
													end
												end),
												settingsToggle("Debug Mode", "Enable verbose debug logs in the output console.", self.debugMode, function(newValue)
													Config.DEBUG_MODE = newValue
													if self.callbacks.onDebugModeChanged then
														self.callbacks.onDebugModeChanged(newValue)
													end
												end),
												settingsToggle("Confirm Destructive", "Prompt before running destructive syncs or applying large diffs.", self.confirmDestructive, function(newValue)
													Config.CONFIRM_DESTRUCTIVE = newValue
													self.callbacks.onConfigChanged("CONFIRM_DESTRUCTIVE", newValue)
												end),
												settingsDropdown("Display Prompts", "Choose when safety confirmation prompts should be displayed.", { "Always", "Initial", "Never" }, self.displayPrompts, function(option)
													self.callbacks.onConfigChanged("DISPLAY_PROMPTS", option)
												end),
											},
										}),

										Collapsible({
											Title = "2. Sync & Connection",
											Expanded = false,
											ZIndex = 9,
											Elements = {
												settingsInput("Heartbeat Interval", "Seconds between heartbeat connection checks with the daemon.", self.heartbeatRef, tostring(Config.HEARTBEAT_INTERVAL), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("HEARTBEAT_INTERVAL", value)
													end)
												end),
												settingsInput("Batch Idle Window", "Delay in seconds to coalesce multiple outbound updates.", self.batchIdleRef, tostring(Config.BATCH_IDLE_WINDOW), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("BATCH_IDLE_WINDOW", value)
													end)
												end),
												settingsInput("Script Debounce", "Debounce window in seconds before syncing script source changes.", self.scriptDebounceRef, tostring(Config.SCRIPT_CHANGE_DEBOUNCE), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("SCRIPT_CHANGE_DEBOUNCE", value)
													end)
												end),
												settingsInput("Changes Threshold", "Max instances in a snapshot before prompting for confirmation.", self.changesThresholdRef, tostring(Config.CHANGES_THRESHOLD), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("CHANGES_THRESHOLD", value)
													end)
												end),
												settingsToggle("Keep Unknowns", "Preserve Studio-only instances not present in the incoming snapshot.", self.keepUnknowns, function(newValue)
													Config.KEEP_UNKNOWNS = newValue
													self.callbacks.onConfigChanged("KEEP_UNKNOWNS", newValue)
												end),
												settingsDropdown("Initial Sync Priority", "Reconciliation strategy when connecting to the daemon.", { "Studio", "Filesystem", "None" }, self.initialSyncPriority, function(option)
													self.callbacks.onConfigChanged("INITIAL_SYNC_PRIORITY", option)
												end),
												settingsInput("Max Handshake Attempts", "Number of handshake retries before giving up on a connection.", self.maxHandshakesRef, tostring(Config.MAX_HANDSHAKES), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("MAX_HANDSHAKES", value)
													end)
												end),
												settingsInput("Max Reconnection Attempts", "Number of reconnection retries before stopping (-1 for infinite).", self.maxReconnectionsRef, tostring(Config.MAX_RECONNECTIONS), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("MAX_RECONNECTIONS", value)
													end, true)
												end),
												settingsInput("Reconnection Interval", "Seconds between connection retry attempts.", self.reconnectionIntervalRef, tostring(Config.RECONNECTION_INTERVAL), function(text)
													if text == "" then return end
													validateNumberInput(text, function(value)
														self.callbacks.onConfigChanged("RECONNECTION_INTERVAL", value)
													end)
												end),
											},
										}),

										Collapsible({
											Title = "3. Filters",
											Expanded = false,
											ZIndex = 8,
											Elements = {
												settingsOption("List Type", "Choose filter behavior for the service list below.", { "Whitelist", "Blacklist" }, self.listTypeValue, function(option)
													self.callbacks.onConfigChanged(
														"LIST_TYPE",
														option == "Whitelist" and Enums.listType.WHITELIST
															or Enums.listType.BLACKLIST
													)
												end),
												settingsFullInput("Service List", "Comma-separated list of services to filter.", self.serviceListRef, table.concat(Config.SERVICE_LIST, ", "), function(text)
													local items = AzulService.parseCommaSeparatedList(text)
													self.callbacks.onConfigChanged("SERVICE_LIST", items)
												end),
												settingsFullInput("Excluded Parents", "Comma-separated paths to ignore during synchronization.", self.excludedParentsRef, table.concat(Config.EXCLUDED_PARENTS, ", "), function(text)
													local items = AzulService.parseCommaSeparatedList(text)
													self.callbacks.onConfigChanged("EXCLUDED_PARENTS", items)
												end),
											},
										}),

										Collapsible({
											Title = "4. Actions & Tools",
											Expanded = false,
											ZIndex = 7,
											Elements = {
												settingsButton("Reload Sourcemap", "Force reload the sourcemap file from disk to rebuild tracked instances.", "Reload", function()
													self.callbacks.onSourcemapReload()
												end),
												settingsButton("Open Configuration", "Open the per-place config script module in ServerStorage.", "Open Config", function()
													helpers.openPlaceConfig()
												end),
												settingsButton("Reset Settings", "Reset all plugin configurations in the active scope to defaults.", "Reset", function()
													Config.AUTO_CONNECT = false
													Config.DEBUG_MODE = false
													Config.SILENT_MODE = false
													Config.HEARTBEAT_INTERVAL = 30
													Config.BATCH_IDLE_WINDOW = 0.1
													Config.SCRIPT_CHANGE_DEBOUNCE = 0.35
													Config.MAX_HANDSHAKES = 5
													Config.MAX_RECONNECTIONS = -1
													Config.RECONNECTION_INTERVAL = 5
													Config.LIST_TYPE = Enums.listType.WHITELIST
													Config.SERVICE_LIST = {
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
													}
													Config.EXCLUDED_PARENTS = {
														"ServerStorage.RecPlugins",
														"Workspace.Surface Converter Storage",
													}
													Config.extraClassSuffixes = {
														[".remoteevent"] = "RemoteEvent",
														[".remotefunction"] = "RemoteFunction",
														[".bindableevent"] = "BindableEvent",
														[".bindablefunction"] = "BindableFunction",
													}

													Config.CONFIRM_DESTRUCTIVE = true
													Config.CHANGES_THRESHOLD = 5
													Config.DISPLAY_PROMPTS = "Always"
													Config.KEEP_UNKNOWNS = false
													Config.INITIAL_SYNC_PRIORITY = "Studio"

													self:UpdateConfig()

													self.callbacks.onConfigChanged("AUTO_CONNECT", false)
													self.callbacks.onConfigChanged("DEBUG_MODE", false)
													self.callbacks.onConfigChanged("SILENT_MODE", false)
													self.callbacks.onConfigChanged("HEARTBEAT_INTERVAL", 30)
													self.callbacks.onConfigChanged("BATCH_IDLE_WINDOW", 0.1)
													self.callbacks.onConfigChanged("SCRIPT_CHANGE_DEBOUNCE", 0.35)
													self.callbacks.onConfigChanged("MAX_HANDSHAKES", 5)
													self.callbacks.onConfigChanged("MAX_RECONNECTIONS", -1)
													self.callbacks.onConfigChanged("RECONNECTION_INTERVAL", 5)
													self.callbacks.onConfigChanged("LIST_TYPE", Enums.listType.WHITELIST)
													self.callbacks.onConfigChanged("SERVICE_LIST", Config.SERVICE_LIST)
													self.callbacks.onConfigChanged("EXCLUDED_PARENTS", Config.EXCLUDED_PARENTS)
													self.callbacks.onConfigChanged("extraClassSuffixes", Config.extraClassSuffixes)
													self.callbacks.onConfigChanged("CONFIRM_DESTRUCTIVE", true)
													self.callbacks.onConfigChanged("CHANGES_THRESHOLD", 5)
													self.callbacks.onConfigChanged("DISPLAY_PROMPTS", "Always")
													self.callbacks.onConfigChanged("KEEP_UNKNOWNS", false)
													self.callbacks.onConfigChanged("INITIAL_SYNC_PRIORITY", "Studio")
												end),
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
	self.confirmDestructive:set(Config.CONFIRM_DESTRUCTIVE)
	self.displayPrompts:set(Config.DISPLAY_PROMPTS)
	self.keepUnknowns:set(Config.KEEP_UNKNOWNS)
	self.initialSyncPriority:set(Config.INITIAL_SYNC_PRIORITY)
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

	local changesThresholdInput = peek(self.changesThresholdRef)
	if changesThresholdInput then changesThresholdInput.Text = tostring(Config.CHANGES_THRESHOLD) end

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

	self.extraClassSuffixesValue:set(Config.extraClassSuffixes)
end

return UI
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Border.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)

local Corner = require(Components.Corner)

local New = Fusion.New

type Props = {
	Color: Fusion.CanBeState<Color3>?,
	Transparency: Fusion.CanBeState<number>?,
	Thickness: Fusion.CanBeState<number>?,
	CornerRadius: Fusion.CanBeState<UDim>?,
}

return function(props: Props): { Instance }
	return {
		Corner {},
		New "UIStroke" {
			ApplyStrokeMode = Enum.ApplyStrokeMode.Border,
			Color = props.Color or Theme.Colors.Border,
			Thickness = props.Thickness or Theme.BorderThickness,
			Transparency = props.Transparency or 0,
		},
	}
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Box.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)

local Border = require(Components.Border)
local Container = require(Components.Container)

local Hydrate = Fusion.Hydrate
local Children = Fusion.Children

local COMPONENT_ONLY_PROPS = {
	"BackgroundColor",
	"BorderColor",
	"BackgroundTransparency",
	"BorderTransparency",
}

type Props = {
	BackgroundColor: Fusion.CanBeState<Color3>?,
	BorderColor: Fusion.CanBeState<Color3>?,
	BackgroundTransparency: Fusion.CanBeState<number>?,
	BorderTransparency: Fusion.CanBeState<number>?,
	[any]: any,
}

return function(props: Props): Frame
	return Hydrate(Container({
		Size = UDim2.fromOffset(120, Theme.CompSizeY.Large),
		BackgroundColor3 = props.BackgroundColor or Theme.Colors.Background,
		BackgroundTransparency = props.BackgroundTransparency or 0,
		[Children] = {
			Border({
				Color = props.BorderColor,
				Transparency = props.BorderTransparency,
			}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Checkbox.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Assets = require(App.Assets)
local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)
local isState = require(Util.isState)

local IconButton = require(Components.IconButton)

local Value = Fusion.Value
local peek = Fusion.peek
local Hydrate = Fusion.Hydrate
local Computed = Fusion.Computed

local COMPONENT_ONLY_PROPS = {
	"Changed",
	"Value",
	"Placeholder",
}

type Props = {
	Changed: ((value: boolean) -> ())?,
	Value: Fusion.CanBeState<boolean>?,
	Placeholder: Fusion.CanBeState<boolean>?,
	[any]: any,
}

return function(props: Props): TextButton
	local value = isState(props.Value) and props.Value or Value(props.Value or false)
	local placeholder = isState(props.Placeholder) and props.Placeholder or Value(props.Placeholder or false)

	return Hydrate(IconButton({
		Size = UDim2.fromOffset(Theme.CompSizeY.Medium, Theme.CompSizeY.Medium),
		Solid = value,
		Blending = false,
		Icon = Computed(function(use)
			return if use(value) and use(placeholder) or use(placeholder) then Assets.Icons.Checkmark else ""
		end),
		Activated = function()
			value:set(not peek(value))

			if props.Changed then props.Changed(peek(value)) end
		end,
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Collapsible.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local Assets = require(App.Assets)
local animate = require(Util.animate)
local getState = require(Util.getState)
local stripProps = require(Util.stripProps)

local Container = require(Components.Container)
local Padding = require(Components.Padding)
local Corner = require(Components.Corner)
local Image = require(Components.Image)
local List = require(Components.List)
local Text = require(Components.Text)
local Box = require(Components.Box)

local New = Fusion.New
local Value = Fusion.Value
local Tween = Fusion.Tween
local Spring = Fusion.Spring
local Hydrate = Fusion.Hydrate
local OnEvent = Fusion.OnEvent
local Computed = Fusion.Computed
local Children = Fusion.Children
local OnChange = Fusion.OnChange
local peek = Fusion.peek

local COMPONENT_ONLY_PROPS = {
	"Title",
	"Color",
	"Expanded",
	"Elements",
}

type Props = {
	Title: string,
	Color: Fusion.CanBeState<Color3>?,
	Expanded: boolean?,
	Elements: { Instance },
}

return function(props: Props): Frame
	local isExpanded = Value(props.Expanded or false)
	local absoluteSize = Value(Vector2.zero)

	local isHovered = Value(false)
	local isPressed = Value(false)

	local state = getState({
		Hovered = isHovered,
		Pressed = isPressed,
	})

	local color = animate(
		Computed(function(use)
			return use(isExpanded) and use(Theme.Colors.ActiveBackground) or use(Theme.Colors.Background)
		end),
		state
	)

	return Hydrate(Box({
		ClipsDescendants = Computed(function(use)
			return not use(isExpanded)
		end),
		AutomaticSize = Enum.AutomaticSize.None,
		Size = Spring(
			Computed(function(use)
				return UDim2.new(1, 0, 0, Theme.CompSizeY.Large + (use(isExpanded) and use(absoluteSize).Y or 0))
			end),
			30
		),
		[Children] = {
			New("TextButton")({
				Text = "",
				AutoButtonColor = false,
				Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Large),
				BackgroundColor3 = color,
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
					isExpanded:set(not peek(isExpanded))
				end,
				[Children] = {
					Corner({}),
					Container({
						Size = UDim2.fromScale(1, 1),
						[Children] = {
							Padding({}),
							Text({
								Text = props.Title,
								FontFace = Theme.Fonts.Bold,
								TextSize = Theme.TextSize.Large,
								TextXAlignment = Enum.TextXAlignment.Left,
								Size = UDim2.fromScale(1, 1),
								Color = props.Color or Theme.Colors.Text,
							}),
							Image({
								AnchorPoint = Vector2.new(1, 0.5),
								Position = UDim2.fromScale(1, 0.5),
								Size = UDim2.fromOffset(16, 16),
								Image = Assets.Icons.Expand,
								ImageColor3 = props.Color or Theme.Colors.Text,
								Rotation = Spring(
									Computed(function(use)
										return use(isExpanded) and 180 or 0
									end),
									30
								),
							}),
						},
					}),
					New("Frame")({
						AnchorPoint = Vector2.new(0, 1),
						Position = UDim2.fromScale(0, 1),
						Size = UDim2.fromScale(1, 0.2),
						BackgroundColor3 = color,
						BorderSizePixel = 0,
						BackgroundTransparency = Tween(
							Computed(function(use)
								return use(isExpanded) and 0 or 1
							end),
							TweenInfo.new(0.15, Enum.EasingStyle.Sine, Enum.EasingDirection.InOut)
						),
					}),
				},
			}),
			Container({
				Size = UDim2.fromScale(1, 0),
				Position = UDim2.fromOffset(0, Theme.CompSizeY.Large),
				[OnChange("AbsoluteSize")] = function(size)
					absoluteSize:set(size)
				end,
				[Children] = {
					List({
						Spacing = 0,
					}),
					props.Elements,
				},
			}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Container.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")

local Fusion = require(Azul.Packages.fusion)

local New = Fusion.New
local Hydrate = Fusion.Hydrate

type Props = {
	[any]: any,
}

return function(props: Props): Frame
	return Hydrate(New("Frame")({
		BorderSizePixel = 0,
		BackgroundTransparency = 1,
		AutomaticSize = Enum.AutomaticSize.Y,
	}))(props)
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Corner.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)

local New = Fusion.New
local Hydrate = Fusion.Hydrate

local COMPONENT_ONLY_PROPS = {
	"Radius",
}

type Props = {
	Radius: number?,
	[any]: any,
}

return function(props: Props): UICorner
	return Hydrate(New("UICorner")({
		CornerRadius = UDim.new(0, props.Radius or Theme.CornerRadius),
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Dropdown.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local Assets = require(App.Assets)
local animate = require(Util.animate)
local stripProps = require(Util.stripProps)
local getState = require(Util.getState)
local isState = require(Util.isState)
local getTextSize = require(Util.getTextSize)

local Container = require(Components.Container)
local Padding = require(Components.Padding)
local Corner = require(Components.Corner)
local Image = require(Components.Image)
local Input = require(Components.Input)
local List = require(Components.List)
local Box = require(Components.Box)

local New = Fusion.New
local Ref = Fusion.Ref
local Value = Fusion.Value
local Spring = Fusion.Spring
local Hydrate = Fusion.Hydrate
local OnEvent = Fusion.OnEvent
local Cleanup = Fusion.Cleanup
local Computed = Fusion.Computed
local Children = Fusion.Children
local Observer = Fusion.Observer
local ForValues = Fusion.ForValues
local cleanup = Fusion.cleanup
local peek = Fusion.peek

local BUTTON_COMPONENT_ONLY_PROPS = {
	"Activated",
	"IsSelected",
	"IsDimmed",
	"IsFirst",
	"IsLast",
}

type ButtonProps = {
	Activated: () -> (),
	IsSelected: Fusion.Computed<boolean>,
	IsDimmed: Fusion.Computed<boolean>,
	IsFirst: Fusion.Value<boolean>?,
	IsLast: boolean,
	[any]: any,
}

local function join(t1: { any }, t2: { any }): { any }
	local res = {}
	for _, v in ipairs(t1) do
		table.insert(res, v)
	end
	for _, v in ipairs(t2) do
		table.insert(res, v)
	end
	return res
end

local function Button(props: ButtonProps): TextButton
	local isHovered = Value(false)
	local isPressed = Value(false)

	local state = getState({
		Hovered = isHovered,
		Pressed = isPressed,
	})
	local lastState = peek(state)

	local color = animate(
		Computed(function(use)
			return use(props.IsSelected) and use(Theme.Colors.Brand) or use(Theme.Colors.Background)
		end),
		state
	)

	local disconnect = Observer(state):onChange(function()
		if props.IsFirst and not peek(props.IsFirst) then
			local st = peek(state)

			if st == Enum.GuiState.Idle and lastState == Enum.GuiState.Press then
				task.defer(function()
					if peek(props.IsFirst) then
						color:setPosition(
							peek(props.IsSelected) and peek(Theme.Colors.Brand) or peek(Theme.Colors.Background)
						)
					end
				end)
			end

			lastState = st
		end
	end)

	return Hydrate(New("TextButton")({
		Size = UDim2.new(1, 0, 0, Theme.CompSizeY.Medium),
		FontFace = Theme.Fonts.Regular,
		AutoButtonColor = false,
		TextSize = Theme.TextSize.Large,
		TextXAlignment = Enum.TextXAlignment.Left,
		BackgroundColor3 = color,
		TextColor3 = Computed(function(use)
			return use(props.IsSelected) and use(Theme.Colors.TextBranded)
				or use(props.IsDimmed) and use(Theme.Colors.TextDimmed)
				or use(Theme.Colors.Text)
		end),
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
			if props.IsFirst then
				isHovered:set(false)
				isPressed:set(false)
			end

			props.Activated()
		end,
		[Cleanup] = disconnect,
		[Children] = join(
			{
				Padding({
					Left = 6,
					Right = 6,
				}),
			},
			if props.IsFirst
				then {
					Corner({}),
					New("Frame")({
						AnchorPoint = Vector2.new(0.5, 1),
						Position = UDim2.fromScale(0.5, 1),
						Size = UDim2.fromScale(1.2, 0.2),
						BackgroundColor3 = color,
						BorderSizePixel = 0,
						Visible = Computed(function(use)
							return use(props.IsFirst)
						end),
					}),
				}
				elseif props.IsLast then {
					Corner({}),
					New("Frame")({
						AnchorPoint = Vector2.new(0.5, 0),
						Position = UDim2.fromScale(0.5, 0),
						Size = UDim2.fromScale(1.2, 0.2),
						BackgroundColor3 = color,
						BorderSizePixel = 0,
					}),
				}
				else {}
		),
	}))(stripProps(props, BUTTON_COMPONENT_ONLY_PROPS))
end

local COMPONENT_ONLY_PROPS = {
	"Selected",
	"Options",
	"Value",
	"Placeholder",
	"IsOpen",
}

type Props = {
	Selected: ((option: string) -> ())?,
	Options: { string },
	Value: Fusion.CanBeState<string>?,
	Placeholder: Fusion.CanBeState<string>?,
	IsOpen: Fusion.Value<boolean>?,
	[any]: any,
}

return function(props: Props): Frame
	local value = isState(props.Value) and props.Value or Value(props.Value or props.Options[1])
	local placeholder = isState(props.Placeholder) and props.Placeholder or Value(props.Placeholder or props.Options[1])

	local isOpen = props.IsOpen or Value(false)
	local anchor = Value(0)
	local ref = Value(nil)

	local zIndex = Computed(function(use)
		return use(isOpen) and 10 or 1
	end)

	local size
	do
		local maxSize = Vector2.zero

		for _, option in ipairs(props.Options) do
			local textSize = getTextSize(option)

			if textSize.X > maxSize.X then
				maxSize = textSize
			end
		end

		size = UDim2.fromOffset(maxSize.X + 40, Theme.CompSizeY.Medium)
	end

	return Hydrate(New("Frame")({
		BackgroundTransparency = 1,
		BorderSizePixel = 0,
		Size = props.Size or size,
		ZIndex = zIndex,
		[Children] = {
			Padding({
				Left = 6,
				Right = 6,
			}),
			Image({
				AnchorPoint = Vector2.new(1, 0.5),
				Position = UDim2.fromScale(1, 0.5),
				Size = UDim2.fromOffset(16, 16),
				Image = Assets.Icons.Dropdown,
				ImageColor3 = Theme.Colors.Text,
				ZIndex = 2,
				ImageTransparency = Computed(function(use)
					return use(isOpen) and 1 or 0
				end),
			}),
			Input({
				Finished = function()
					task.delay(0.1, function()
						isOpen:set(false)
					end)
				end,
				[Ref] = ref,
			}),
			Box({
				ClipsDescendants = true,
				AutomaticSize = Enum.AutomaticSize.None,
				ZIndex = zIndex,
				Size = Spring(
					Computed(function(use)
						return UDim2.new(1, 0, use(isOpen) and #props.Options or 1, 0)
					end),
					40
				),
				AnchorPoint = Computed(function(use)
					if use(isOpen) then
						local index = table.find(props.Options, peek(value))
						if index then
							anchor:set((index - 1) / #props.Options)
						end
					end

					return Vector2.new(0.5, peek(anchor))
				end),
				Position = Computed(function(use)
					return UDim2.fromScale(0.5, use(isOpen) and 0 or use(anchor))
				end),
				[Children] = {
					Container({
						Size = UDim2.fromScale(1, #props.Options),
						[Children] = {
							List({
								Spacing = 0,
							}),
							ForValues(props.Options, function(_, option)
								local isFirst = option == props.Options[1]

								return Button({
									Text = Computed(function(use)
										if isFirst then
											return use(isOpen) and option or use(value)
										else
											return option
										end
									end),
									IsSelected = Computed(function(use)
										return use(isOpen) and use(value) == option
									end),
									IsDimmed = Computed(function(use)
										return not use(isOpen) and use(value) ~= use(placeholder)
									end),
									Activated = function()
										local open = peek(isOpen)
										isOpen:set(not open)

										if not open then
											local r = peek(ref)
											if r then r:CaptureFocus() end
										end

										if not open or option == peek(value) then
											return
										end

										value:set(option)

										if props.Selected then
											props.Selected(option)
										end
									end,
									IsFirst = isFirst and isOpen or nil,
									IsLast = option == props.Options[#props.Options],
								})
							end, cleanup),
						},
					}),
				},
			}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\IconButton.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local animate = require(Util.animate)
local stripProps = require(Util.stripProps)
local getState = require(Util.getState)
local default = require(Util.default)

local Border = require(Components.Border)
local Image = require(Components.Image)

local New = Fusion.New
local Value = Fusion.Value
local Hydrate = Fusion.Hydrate
local OnEvent = Fusion.OnEvent
local Computed = Fusion.Computed
local Children = Fusion.Children

local COMPONENT_ONLY_PROPS = {
	"Activated",
	"Solid",
	"Icon",
	"BackgroundActive",
	"Blending",
}

type Props = {
	Activated: (() -> ())?,
	Solid: Fusion.CanBeState<boolean>?,
	Icon: Fusion.CanBeState<string>?,
	BackgroundActive: Fusion.Computed<boolean>?,
	Blending: boolean?,
	[any]: any,
}

return function(props: Props): TextButton
	local isHovered = Value(false)
	local isPressed = Value(false)

	local state = getState({
		Hovered = isHovered,
		Pressed = isPressed,
	})

	local color = animate(
		Computed(function(use)
			return if use(props.Solid)
				then use(Theme.Colors.Brand)
				else use(props.BackgroundActive) and use(Theme.Colors.ActiveBackground) or use(
					Theme.Colors.Background
				)
		end),
		state
	)

	return Hydrate(New("TextButton")({
		Size = UDim2.fromOffset(Theme.CompSizeY.Large, Theme.CompSizeY.Large),
		Text = "",
		AutoButtonColor = false,
		BackgroundColor3 = color,
		[OnEvent("InputBegan")] = function(inputObject)
			if inputObject.UserInputType == Enum.UserInputType.MouseMovement then
				isHovered:set(true)
			elseif inputObject.UserInputType == Enum.UserInputType.MouseButton1 then
				isPressed:set(true)
			end
		end,
		[OnEvent("InputEnded")] = function(inputObject)
			if inputObject.UserInputType == Enum.UserInputType.MouseMovement then
				isHovered:set(false)
			elseif inputObject.UserInputType == Enum.UserInputType.MouseButton1 then
				isPressed:set(false)
			end
		end,
		[OnEvent("Activated")] = function()
			if props.Activated then props.Activated() end
		end,
		[Children] = {
			Border({}),
			Image({
				AnchorPoint = Vector2.new(0.5, 0.5),
				Position = UDim2.fromScale(0.5, 0.5),
				Size = UDim2.fromScale(0.55, 0.55),
				SizeConstraint = Enum.SizeConstraint.RelativeYY,
				ImageTransparency = default(props.Blending, true) and Computed(function(use)
					return use(Theme.IsDark) and 0.1 or 0.2
				end) or 0,
				ImageColor3 = Computed(function(use)
					return use(props.Solid) and use(Theme.Colors.TextBranded) or use(Theme.Colors.Text)
				end),
				Image = props.Icon,
			}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Image.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")

local Fusion = require(Azul.Packages.fusion)

local New = Fusion.New
local Hydrate = Fusion.Hydrate

type Props = {
	[any]: any,
}

return function(props: Props): ImageLabel
	return Hydrate(New("ImageLabel")({
		BorderSizePixel = 0,
		BackgroundTransparency = 1,
	}))(props)
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Input.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local default = require(Util.default)
local stripProps = require(Util.stripProps)

local New = Fusion.New
local Out = Fusion.Out
local Value = Fusion.Value
local Hydrate = Fusion.Hydrate
local OnEvent = Fusion.OnEvent
local OnChange = Fusion.OnChange
local Children = Fusion.Children
local peek = Fusion.peek

local COMPONENT_ONLY_PROPS = {
	"Started",
	"Changed",
	"Finished",
	"Font",
	"Color",
	"PlaceholderColor",
	"Scaled",
}

type Props = {
	Started: (() -> ())?,
	Changed: ((text: string) -> ())?,
	Finished: ((text: string) -> ())?,
	AutomaticSize: Enum.AutomaticSize?,
	Font: Fusion.CanBeState<Font>?,
	Color: Fusion.CanBeState<Color3>?,
	PlaceholderColor: Fusion.CanBeState<Color3>?,
	Scaled: boolean?,
	ClearTextOnFocus: boolean?,
	[any]: any,
}

return function(props: Props): TextBox
	local text = Value("")

	return Hydrate(New("TextBox")({
		AutomaticSize = default(props.AutomaticSize, Enum.AutomaticSize.None),
		FontFace = props.Font or Theme.Fonts.Regular,
		TextColor3 = props.Color or Theme.Colors.Text,
		PlaceholderColor3 = props.PlaceholderColor or Theme.Colors.TextDimmed,
		TextXAlignment = Enum.TextXAlignment.Left,
		TextSize = Theme.TextSize.Large,
		BorderSizePixel = 0,
		BackgroundTransparency = 1,
		PlaceholderText = "...",
		TextScaled = props.Scaled,
		ClearTextOnFocus = props.ClearTextOnFocus or false,
		-- If the text is not scaled, enable ClipsDescendants so text scrolling works correctly.
		ClipsDescendants = not props.Scaled,
		[OnChange("Text")] = function(text)
			if props.Changed then props.Changed(text) end
		end,
		[OnEvent("Focused")] = function()
			if props.Started then props.Started() end
		end,
		[OnEvent("FocusLost")] = function()
			if props.Finished then props.Finished(peek(text)) end
		end,
		[Out("Text")] = text,
		[Children] = props.Scaled and New("UITextSizeConstraint")({
			MaxTextSize = props.TextSize or Theme.TextSize.Large,
		}) or nil,
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\List.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)

local New = Fusion.New
local Hydrate = Fusion.Hydrate

local COMPONENT_ONLY_PROPS = {
	"Spacing",
}

type Props = {
	Spacing: number?,
	[any]: any,
}

return function(props: Props): UIListLayout
	return Hydrate(New("UIListLayout")({
		SortOrder = Enum.SortOrder.LayoutOrder,
		Padding = UDim.new(0, props.Spacing or Theme.ListSpacing),
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\OptionSelector.luau
``
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

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Padding.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local default = require(Util.default)
local stripProps = require(Util.stripProps)

local New = Fusion.New
local Hydrate = Fusion.Hydrate

local COMPONENT_ONLY_PROPS = {
	"Padding",
	"Horizontal",
	"Vertical",
	"Left",
	"Right",
	"Top",
	"Bottom",
}

type Props = {
	-- Mode 1
	Padding: number?,
	Horizontal: boolean?,
	Vertical: boolean?,
	-- Mode 2
	Left: number?,
	Right: number?,
	Top: number?,
	Bottom: number?,
	[any]: any,
}

return function(props: Props): UIPadding
	local left, right
	local top, bottom

	if props.Left or props.Right or props.Top or props.Bottom then
		local padding = props.Padding or 0

		left = UDim.new(0, props.Left or padding)
		right = UDim.new(0, props.Right or padding)
		top = UDim.new(0, props.Top or padding)
		bottom = UDim.new(0, props.Bottom or padding)
	else
		local padding = UDim.new(0, props.Padding or Theme.Padding)
		local horizontal = default(props.Horizontal, true)
		local vertical = default(props.Vertical, true)

		left = horizontal and padding or nil
		right = horizontal and padding or nil
		top = vertical and padding or nil
		bottom = vertical and padding or nil
	end

	return Hydrate(New("UIPadding")({
		PaddingLeft = left,
		PaddingRight = right,
		PaddingTop = top,
		PaddingBottom = bottom,
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\ScrollingContainer.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)

local New = Fusion.New
local Hydrate = Fusion.Hydrate

local COMPONENT_ONLY_PROPS = {
	"ScrollBar",
}

type Props = {
	ScrollBar: boolean?,
	[any]: any,
}

return function(props: Props): ScrollingFrame
	return Hydrate(New("ScrollingFrame")({
		Size = UDim2.fromScale(1, 1),
		BackgroundTransparency = 1,
		ScrollBarThickness = props.ScrollBar and 5 or 0,
		ScrollBarImageColor3 = Theme.Colors.TextDimmed,
		AutomaticCanvasSize = Enum.AutomaticSize.Y,
		CanvasSize = UDim2.fromScale(0, 0),
		BorderSizePixel = 0,
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Spinner.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Assets = require(App.Assets)
local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)

local Image = require(Components.Image)

local Tween = Fusion.Tween
local Value = Fusion.Value
local Hydrate = Fusion.Hydrate

local COMPONENT_ONLY_PROPS = {
	"Duration",
}

type Props = {
	Duration: number?,
	[any]: any,
}

return function(props: Props): ImageLabel
	local rotation = Value(0)

	task.defer(function()
		rotation:set(360)
	end)

	return Hydrate(Image({
		Size = UDim2.fromOffset(Theme.CompSizeY.Medium, Theme.CompSizeY.Medium),
		Image = Assets.Icons.Spinner,
		ImageColor3 = Theme.Colors.Text,
		Rotation = Tween(
			rotation,
			TweenInfo.new(props.Duration or 1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, -1)
		),
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\SuffixEditor.luau
``
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
local Ref = Fusion.Ref

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
						for k, v in pairs(peek(suffixes)) do
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
						for k, v in pairs(peek(suffixes)) do
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
					ForPairs(suffixes, function(use, suffixKey, className)
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

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Switch.luau
``
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

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Text.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local stripProps = require(Util.stripProps)

local New = Fusion.New
local Hydrate = Fusion.Hydrate
local Children = Fusion.Children

local COMPONENT_ONLY_PROPS = {
	"Font",
	"Color",
	"Scaled",
}

type Props = {
	Font: Fusion.CanBeState<Font>?,
	Color: Fusion.CanBeState<Color3>?,
	Scaled: boolean?,
	[any]: any,
}

return function(props: Props): TextLabel
	return Hydrate(New("TextLabel")({
		FontFace = props.Font or Theme.Fonts.Regular,
		TextColor3 = props.Color or Theme.Colors.Text,
		TextSize = Theme.TextSize.Large,
		AutomaticSize = props.Scaled and Enum.AutomaticSize.None or Enum.AutomaticSize.XY,
		TextXAlignment = Enum.TextXAlignment.Left,
		BorderSizePixel = 0,
		BackgroundTransparency = 1,
		TextScaled = props.Scaled,
		RichText = true,
		[Children] = props.Scaled and New("UITextSizeConstraint")({
			MaxTextSize = props.TextSize or Theme.TextSize.Large,
		}) or nil,
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\TextButton.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)
local animate = require(Util.animate)
local stripProps = require(Util.stripProps)
local getTextSize = require(Util.getTextSize)
local getState = require(Util.getState)

local Border = require(Components.Border)

local New = Fusion.New
local Value = Fusion.Value
local Hydrate = Fusion.Hydrate
local OnEvent = Fusion.OnEvent
local Computed = Fusion.Computed
local Children = Fusion.Children

local COMPONENT_ONLY_PROPS = {
	"Activated",
	"Solid",
}

type Props = {
	Activated: (() -> ())?,
	Solid: Fusion.CanBeState<boolean>?,
	[any]: any,
}

return function(props: Props): TextButton
	local isHovered = Value(false)
	local isPressed = Value(false)

	local state = getState({
		Hovered = isHovered,
		Pressed = isPressed,
	})

	local color = animate(
		Computed(function(use)
			return use(props.Solid) and use(Theme.Colors.Brand) or use(Theme.Colors.Background)
		end),
		state
	)

	local size = props.Size
		or Computed(function(use)
			local text = use(props.Text)
			local size = getTextSize(text)

			return UDim2.fromOffset(size.X + 22, Theme.CompSizeY.Large)
		end)

	return Hydrate(New("TextButton")({
		Text = "Button",
		FontFace = Theme.Fonts.Regular,
		AutoButtonColor = false,
		TextSize = Theme.TextSize.Large,
		Size = size,
		BackgroundColor3 = color,
		TextColor3 = Computed(function(use)
			return use(props.Solid) and use(Theme.Colors.TextBranded) or use(Theme.Colors.Text)
		end),
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
		[Children] = {
			Border({}),
		},
	}))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Plugin\Toolbar.luau
``
local plugin = script:FindFirstAncestorWhichIsA("Plugin")

local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local stripProps = require(Util.stripProps)

local Hydrate = Fusion.Hydrate

local COMPONENT_ONLY_PROPS = {
	"Name",
}

type Props = {
	Name: string,
	[any]: any,
}

return function(props: Props): PluginToolbar
	return Hydrate(plugin:CreateToolbar(props.Name))(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Plugin\ToolbarButton.luau
``
local plugin = script:FindFirstAncestorWhichIsA("Plugin")

local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local stripProps = require(Util.stripProps)
local isState = require(Util.isState)

local Hydrate = Fusion.Hydrate
local Observer = Fusion.Observer
local peek = Fusion.peek

local COMPONENT_ONLY_PROPS = {
	"Toolbar",
	"Name",
	"ToolTip",
	"Image",
}

type ToolbarButtonProps = {
	Toolbar: PluginToolbar,
	Name: string,
	ToolTip: string,
	Image: Fusion.CanBeState<string>,
	[any]: any,
}

return function(props: ToolbarButtonProps): PluginToolbarButton
	local button = props.Toolbar:CreateButton(props.Name, props.ToolTip, peek(props.Image))
	button.ClickableWhenViewportHidden = true

	if isState(props.Image) then
		plugin.Unloading:Once(Observer(props.Image):onChange(function()
			button.Icon = peek(props.Image)
		end))
	end

	return Hydrate(button)(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Plugin\Widget.luau
``
local plugin = script:FindFirstAncestorWhichIsA("Plugin")

local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App
local Components = App.Components
local Util = Components.Util

local Fusion = require(Azul.Packages.fusion)

local stripProps = require(Util.stripProps)
local isState = require(Util.isState)
local default = require(Util.default)

local Hydrate = Fusion.Hydrate
local peek = Fusion.peek

local COMPONENT_ONLY_PROPS = {
	"Id",
	"InitialDockTo",
	"InitialEnabled",
	"OverrideEnabled",
	"FloatingSize",
	"MinimumSize",
	"Closed",
}

type WidgetProps = {
	Id: string?,
	InitialDockTo: Enum.InitialDockState?,
	InitialEnabled: boolean?,
	OverrideEnabled: boolean?,
	FloatingSize: Vector2?,
	MinimumSize: Vector2,
	Closed: (() -> ())?,
	[any]: any,
}

return function(props: WidgetProps): DockWidgetPluginGui
	local floatingSize = props.FloatingSize or props.MinimumSize

	local widget = plugin:CreateDockWidgetPluginGui(
		props.Id or peek(props.Name),
		DockWidgetPluginGuiInfo.new(
			props.InitialDockTo or Enum.InitialDockState.Float,
			default(props.InitialEnabled, true),
			default(props.OverrideEnabled, false),
			floatingSize.X,
			floatingSize.Y,
			props.MinimumSize.X,
			props.MinimumSize.Y
		)
	)

	if isState(props.Enabled) then props.Enabled:set(widget.Enabled) end

	if props.Closed then widget:BindToClose(props.Closed) end

	widget.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
	props.Title = props.Name

	return Hydrate(widget)(stripProps(props, COMPONENT_ONLY_PROPS))
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\animate.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App

local Fusion = require(Azul.Packages.fusion)

local Theme = require(App.Theme)

local Spring = Fusion.Spring
local Computed = Fusion.Computed

return function(
	goal: Fusion.StateObject<Color3>,
	state: Fusion.Computed<Enum.GuiState>,
	speed: Fusion.CanBeState<number>?,
	damping: Fusion.CanBeState<number>?
): Fusion.Spring<Color3>
	return Spring(
		Computed(function(use)
			local goal = use(goal)
			local state = use(state)

			local isDark = use(Theme.IsDark)
			local h, s, v = goal:ToHSV()

			if state == Enum.GuiState.Hover then
				return Color3.fromHSV(h, s, v * (isDark and 1.3 or 0.9))
			elseif state == Enum.GuiState.Press then
				return Color3.fromHSV(h, s, v * (isDark and 1.5 or 0.8))
			else
				return goal
			end
		end),
		speed or Theme.SpringSpeed,
		damping or Theme.SpringDamping
	)
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\default.luau
``
return function<T>(value: T?, default: T): T
	if value == nil then
		return default
	else
		return value
	end
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\filterHost.luau
``
return function(host: string): string
	return host:gsub("[^%w%.%-]", "")
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\filterNumber.luau
``
return function(number: string): string
	return number:gsub("[^%d]", "")
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\filterPort.luau
``
return function(port: string): string
	return port:sub(1, 5):gsub("[^%d]", "")
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\getState.luau
``
local Azul = script:FindFirstAncestor("AzulCompanionPlugin")

local Fusion = require(Azul.Packages.fusion)

local Computed = Fusion.Computed

type Input = {
	Pressed: Fusion.StateObject<boolean>?,
	Hovered: Fusion.StateObject<boolean>?,
}

return function(input: Input): Fusion.Computed<Enum.GuiState>
	local isPressed = input.Pressed
	local isHovered = input.Hovered

	return Computed(function(use)
		if use(isPressed) then
			return Enum.GuiState.Press
		elseif use(isHovered) then
			return Enum.GuiState.Hover
		else
			return Enum.GuiState.Idle
		end
	end)
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\getTextSize.luau
``
local TextService = game:GetService("TextService")

local Azul = script:FindFirstAncestor("AzulCompanionPlugin")
local App = Azul.App

local Theme = require(App.Theme)

return function(text: string, fontSize: number?, font: Enum.Font?, frameSize: Vector2?): Vector2
	if text:find("<font") then text = text:gsub("<[^>]+>", "") end

	return TextService:GetTextSize(
		text,
		fontSize or Theme.TextSize.Large,
		font or Theme.Fonts.Enums.Regular,
		frameSize or Vector2.new(math.huge, math.huge)
	)
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\isState.luau
``
return function(target: any): boolean
	return type(target) == "table" and target.type == "State"
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\App\Components\Util\stripProps.luau
``
return function(props: { [any]: any }, strip: { string }): { [any]: any }
	props = table.clone(props)

	for _, prop in strip do
		props[prop] = nil
	end

	return props
end

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\GuiUtilities.luau
``
local module = {}

module.kTitleBarHeight = 27
module.kInlineTitleBarHeight = 24

module.kStandardContentAreaWidth = 180

module.kStandardPropertyHeight = 30
module.kSubSectionLabelHeight = 30

module.kStandardVMargin = 7
module.kStandardHMargin = 16

module.kCheckboxMinLabelWidth = 52
module.kCheckboxMinMargin = 12
module.kCheckboxWidth = 12

module.kRadioButtonsHPadding = 24

module.StandardLineLabelLeftMargin = module.kTitleBarHeight
module.StandardLineElementLeftMargin = (
	module.StandardLineLabelLeftMargin
		+ module.kCheckboxMinLabelWidth
		+ module.kCheckboxMinMargin
		+ module.kCheckboxWidth
		+ module.kRadioButtonsHPadding
) + 20
module.StandardLineLabelWidth = (module.StandardLineElementLeftMargin - module.StandardLineLabelLeftMargin - 10)

module.kDropDownHeight = 55

module.kBottomButtonsFrameHeight = 50
module.kBottomButtonsHeight = 28

module.kShapeButtonSize = 32
module.kTextVerticalFudge = -3
module.kButtonVerticalFudge = -5

module.kBottomButtonsWidth = 100

module.kDisabledTextColor = Color3.new(0.4, 0.4, 0.4) --todo: input spec disabled text color
module.kStandardButtonTextColor = Color3.new(0, 0, 0) --todo: input spec disabled text color
module.kPressedButtonTextColor = Color3.new(1, 1, 1) --todo: input spec disabled text color

module.kButtonStandardBackgroundColor = Color3.new(1, 1, 1) --todo: sync with spec
module.kButtonStandardBorderColor = Color3.new(0.4, 0.4, 0.4) --todo: sync with spec
module.kButtonDisabledBackgroundColor = Color3.new(0.7, 0.7, 0.7) --todo: sync with spec
module.kButtonDisabledBorderColor = Color3.new(0.6, 0.6, 0.6) --todo: sync with spec

module.kButtonBackgroundTransparency = 0.5
module.kButtonBackgroundIntenseTransparency = 0.4

module.kMainFrame = nil

--- Determines if icons should use a lighter style based on the studio theme's background brightness.
--- @return boolean Returns true if the average RGB value of the main background is below 0.5 (darker theme).
function module.ShouldUseIconsForDarkerBackgrounds()
	local mainColor = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainBackground)
	return (mainColor.R + mainColor.G + mainColor.B) / 3 < 0.5
end

--- Calculates the average brightness of a given Color3.
--- @param color Color3 -- The color to evaluate.
--- @return number -- The average brightness (0 to 1).
function module.GetColorOverallBrightness(color: Color3): number
	return (color.R + color.G + color.B) / 3
end

--- Stores a reference to the given frame to be used as the main UI container.
--- @param frame Frame -- The Frame to be set as the main UI reference.
function module.SetMainFrame(frame: Frame)
	module.kMainFrame = frame
end

--- Synchronizes the GUI element's background color with the theme's title bar color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- The GUI element to sync.
function module.syncGuiElementTitleColor(guiElement: GuiObject)
	local function setColors()
		guiElement.BackgroundColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Titlebar)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's background color with the theme's input field background color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- The GUI element to sync.
function module.syncGuiElementInputFieldColor(guiElement: GuiObject)
	local function setColors()
		guiElement.BackgroundColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.InputFieldBackground)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's background color with the theme's main background color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- The GUI element to sync.
function module.syncGuiElementBackgroundColor(guiElement: GuiObject)
	local function setColors()
		guiElement.BackgroundColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainBackground)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Alternates the GUI element's background color based on its LayoutOrder to create a striped effect.
--- Uses MainBackground for even rows and CategoryItem for odd rows.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- The GUI element to sync.
function module.syncGuiElementStripeColor(guiElement: GuiObject)
	local function setColors()
		if (guiElement.LayoutOrder + 1) % 2 == 0 then
			guiElement.BackgroundColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainBackground)
		else
			guiElement.BackgroundColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.CategoryItem)
		end
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's border color with the theme's border color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- The GUI element to sync.
function module.syncGuiElementBorderColor(guiElement: GuiObject)
	local function setColors()
		guiElement.BorderColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Border)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's font color with the theme's main text color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- A GUI element that has a TextColor3 property.
function module.syncGuiElementFontColor(guiElement: { TextColor3: Color3 })
	local function setColors()
		guiElement.TextColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainText)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's scrollbar image color with the theme's scrollbar color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- A GUI element that has a ScrollBarImageColor3 property.
function module.syncGuiElementScrollColor(guiElement: { ScrollBarImageColor3: Color3 })
	local function setColors()
		guiElement.ScrollBarImageColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.ScrollBar)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's image color with the theme's main background color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- A GUI element that has an ImageColor3 property.
function module.syncGuiElementImageColor(guiElement: { ImageColor3: Color3 })
	local function setColors()
		guiElement.ImageColor3 = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainBackground)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's background color with the theme's default button color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- The GUI element to sync.
function module.syncGuiElementButtonColor(guiElement: GuiObject)
	local function setColors()
		guiElement.BackgroundColor3 =
			settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Default)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the GUI element's image color with the theme's default button color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement GuiObject -- A GUI element that has an ImageColor3 property.
function module.syncGuiElementButtonImageColor(guiElement: { ImageColor3: Color3 })
	local function setColors()
		guiElement.ImageColor3 =
			settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Default)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Synchronizes the UIStroke's color with the theme's border color.
--- Updates automatically when the Studio theme changes.
--- @param guiElement UIStroke -- The UIStroke to sync.
function module.syncGuiElementUIStrokeColor(guiElement: UIStroke)
	local function setColors()
		guiElement.Color = settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.Border)
	end
	settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
end

--- Syncs the the gui specific property to the specific style and modifier color of the Studio Theme.
--- This also returns the connection so you have more flexibility to disconnect it when you need.
--- @param guiElement GuiObject -- Any Gui Object
--- @param property string -- The property to sync the color like BackgroundColor3, ImageColor3, TextColor3, etc.
--- @param style Enum.StudioStyleGuideColor -- The style guide color.
--- @param modifier Enum.StudioStyleGuideModifier? -- The optional style guide modifier.
--- @return RBXScriptConnection -- The connection of the event. Can be disconnected by doing conn:Disconnect().
function module.syncGuiElementColorCustom(
	guiElement: GuiObject,
	property: string,
	style: Enum.StudioStyleGuideColor,
	modifier: Enum.StudioStyleGuideModifier?
): RBXScriptConnection
	local function setColors()
		guiElement[property] = settings().Studio.Theme:GetColor(style, modifier)
	end
	local connection = settings().Studio.ThemeChanged:Connect(setColors)
	setColors()
	return connection
end

--- Gets the specific color of the currently selected Studio Theme.
--- @param style Enum.StudioStyleGuideColor -- The style guide color.
--- @param modifier Enum.StudioStyleGuideModifier? -- The optional style guide modifier.
--- @return Color3 -- The color if found.
function module.GetThemeColor(style: Enum.StudioStyleGuideColor, modifier: Enum.StudioStyleGuideModifier?): Color3
	return settings().Studio.Theme:GetColor(style, modifier)
end

--- Gets current Roblox Studio Theme name.
--- @return string -- The color name.
function module.GetThemeName(): string
	return settings().Studio.Theme.Name
end

--- Binds a callback to the theme changed event
--- @param callback () -> () -- The callback function to Connect
--- @return RBXScriptConnection -- The connection of the event. Can be disconnected by doing conn:Disconnect().
function module.BindThemeChanged(callback: () -> ()): RBXScriptConnection
	local connection = settings().Studio.ThemeChanged:Connect(callback)
	return connection
end

--- Calculates the relative position of a click within a GUI element.
--- Returns the normalized (0 to 1) X and Y offsets based on the input object's position
--- relative to the specified GUI element's absolute position.
--- ```luau
---   frame.InputBegan:Connect(function (inputObject: InputObject)
---       local relX, relY = GuiUtilities.GetClickOffsetFromObject(inputObject, frame)
---   end)
--- ```
--- @param inputObject InputObject -- The object containing the input data.
--- @param guiObject GuiObject -- The GUI element to get the relative position within.
--- @return number, number -- Two numbers representing the relative X and Y position.
function module.GetClickOffsetFromObject(inputObject: InputObject, guiElement: GuiObject): (number, number)
	local clickPos = inputObject.Position
	local relX = (clickPos.X - guiElement.AbsolutePosition.X) / guiElement.AbsoluteSize.X
	local relY = (clickPos.Y - guiElement.AbsolutePosition.Y) / guiElement.AbsoluteSize.Y
	return relX, relY
end

--- Creates and returns a Frame with default background and border settings.
--- Automatically synchronizes its background color with the Studio theme's main background.
--- @param name string -- The name to assign to the created Frame.
--- @return Frame -- The styled Frame instance.
function module.MakeFrame(name: string)
	local frame = Instance.new("Frame")
	frame.Name = name
	frame.BackgroundTransparency = 0
	frame.BorderSizePixel = 0

	module.syncGuiElementBackgroundColor(frame)

	return frame
end

--- Creates and returns a Frame that spans the full horizontal width and has a fixed vertical height.
--- Useful for creating rows or lines containing widgets of arbitrary size.
--- @param name string -- The name to assign to the created Frame.
--- @param height number -- The fixed height in pixels for the Frame.
--- @return Frame -- The fixed-height Frame instance.
function module.MakeFixedHeightFrame(name: string, height: number)
	local frame = module.MakeFrame(name)
	frame.Size = UDim2.new(1, 0, 0, height)

	return frame
end

--- Creates and returns a Frame with a standard fixed height used for typical UI elements
--- like labels, input fields, dropdowns, and checkboxes.
--- Uses `module.kStandardPropertyHeight` as the standard height value.
--- @param name string -- The name to assign to the created Frame.
--- @return Frame -- The standard-height Frame instance.
function module.MakeStandardFixedHeightFrame(name: string)
	return module.MakeFixedHeightFrame(name, module.kStandardPropertyHeight)
end

--- Dynamically adjusts the height of a frame to match the total height of its children,
--- based on a UIListLayout's AbsoluteContentSize. Optional padding can be added.
--- Automatically updates the frame's height when the layout's size changes.
---
--- @param frame GuiObject -- The frame whose height will be dynamically adjusted.
--- @param uiLayout UIListLayout -- The layout used to determine the total content height.
--- @param optPadding number? -- Optional additional padding added to the total height.
function module.AdjustHeightDynamicallyToLayout(frame: GuiObject, uiLayout: UIListLayout, optPadding: number?)
	local function updateSizes()
		frame.Size = UDim2.new(1, 0, 0, uiLayout.AbsoluteContentSize.Y + (optPadding or 0))
	end
	uiLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(updateSizes)
	updateSizes()
end

--- Adds a list of frames as children to a given frame that uses a UIListLayout with `LayoutOrder`-based sorting.
--- Each child frame is assigned an increasing `LayoutOrder` to maintain order.
--- Also applies striped background colors and border colors to each frame for visual clarity.
---
--- @param listFrame GuiObject -- The parent frame that contains a UIListLayout.
--- @param frames {GuiObject} -- A list of frames to add as children, in order.
function module.AddStripedChildrenToListFrame(listFrame: GuiObject, frames: { GuiObject })
	for index, frame in ipairs(frames) do
		frame.Parent = listFrame
		frame.LayoutOrder = index
		frame.BackgroundTransparency = 0
		frame.BorderSizePixel = 1
		module.syncGuiElementStripeColor(frame)
		module.syncGuiElementBorderColor(frame)
	end
end

--- Creates a section frame inside a given parent GUI element, optionally including a title bar and fixed content height.
--- If a title is provided, a title bar is created and positioned at the top.
--- The frame's total height is adjusted to include the title bar and the optional content height.
---
--- @param parentGui GuiObject -- The GUI object that will serve as the parent for the new section frame.
--- @param name string -- The name assigned to the new frame.
--- @param title string? -- Optional title text; if provided, a title bar will be added.
--- @param contentHeight number? -- Optional fixed height for the content area of the section.
--- @return Frame -- The constructed section frame.
local function MakeSectionInternal(parentGui: GuiObject, name: string, title: string?, contentHeight: number?)
	local frame = Instance.new("Frame")
	frame.Name = name
	frame.BackgroundTransparency = 1
	frame.Parent = parentGui
	frame.BackgroundTransparency = 1
	frame.BorderSizePixel = 0

	-- If title is "nil', no title bar.
	local contentYOffset = 0
	if title then
		local titleBarFrame = Instance.new("Frame")
		titleBarFrame.Name = "TitleBarFrame"
		titleBarFrame.Parent = frame
		titleBarFrame.Position = UDim2.new(0, 0, 0, 0)
		titleBarFrame.LayoutOrder = 0

		local titleBar = Instance.new("TextLabel")
		titleBar.Name = "TitleBarLabel"
		titleBar.Text = title
		titleBar.Parent = titleBarFrame
		titleBar.BackgroundTransparency = 1
		titleBar.Position = UDim2.new(0, module.kStandardHMargin, 0, 0)

		module.syncGuiElementFontColor(titleBar)

		contentYOffset = contentYOffset + module.kTitleBarHeight
	end

	frame.Size = UDim2.new(1, 0, 0, contentYOffset + (contentHeight or 0))

	return frame
end

--- Creates a standard property label `TextLabel` with left alignment and predefined styling for use in property UIs.
--- Optionally syncs the label's font color with the current Studio theme unless `opt_ignoreThemeUpdates` is true.
---
--- @param text string -- The text to display in the label.
--- @param opt_ignoreThemeUpdates boolean? -- If true, skips syncing the font color with the Studio theme.
--- @return TextLabel -- The constructed label instance.
function module.MakeStandardPropertyLabel(text: string, opt_ignoreThemeUpdates: boolean?)
	local label = Instance.new("TextLabel")
	label.Name = "Label"
	label.BackgroundTransparency = 1
	label.Font = Enum.Font.SourceSans --todo: input spec font
	label.TextSize = 15 --todo: input spec font size
	label.TextXAlignment = Enum.TextXAlignment.Left
	label.Text = text
	label.AnchorPoint = Vector2.new(0, 0.5)
	label.Position = UDim2.new(0, module.StandardLineLabelLeftMargin, 0.5, module.kTextVerticalFudge)
	label.Size = UDim2.new(0, module.StandardLineLabelWidth, 1, 0)

	if not opt_ignoreThemeUpdates then
		module.syncGuiElementFontColor(label)
	end

	return label
end

--- Creates a frame with a subsection label. The frame has a fixed height and transparent background,
--- and contains a left-aligned label styled for subsection headers.
---
--- @param name string -- The name to assign to the frame.
--- @param text string -- The text to display in the label.
--- @return Frame -- The constructed frame containing the subsection label.
function module.MakeFrameWithSubSectionLabel(name: string, text: string)
	local row = module.MakeFixedHeightFrame(name, module.kSubSectionLabelHeight)
	row.BackgroundTransparency = 1

	local label = module.MakeStandardPropertyLabel(text)
	label.BackgroundTransparency = 1
	label.Parent = row

	return row
end

--- Adds a `UIListLayout` to the given frame and sets up dynamic height adjustment so that the frame
--- automatically resizes based on its children’s total height.
---
--- @param frame GuiObject -- The frame to attach the auto-scaling list layout to.
function module.MakeFrameAutoScalingList(frame: GuiObject)
	local uiListLayout = Instance.new("UIListLayout")
	uiListLayout.Parent = frame
	uiListLayout.SortOrder = Enum.SortOrder.LayoutOrder

	module.AdjustHeightDynamicallyToLayout(frame, uiListLayout)
end

return module

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\RbxGui.luau
``
local t = {}

local function ScopedConnect(parentInstance, instance, event, signalFunc, syncFunc, removeFunc)
  local eventConnection = nil

  --Connection on parentInstance is scoped by parentInstance (when destroyed, it goes away)
  local tryConnect = function()
    if game:IsAncestorOf(parentInstance) then
      --Entering the world, make sure we are connected/synced
      if not eventConnection then
        eventConnection = instance[event]:Connect(signalFunc)
        if syncFunc then syncFunc() end
      end
    else
      --Probably leaving the world, so disconnect for now
      if eventConnection then
        eventConnection:Disconnect()
        if removeFunc then removeFunc() end
      end
    end
  end

  --Hook it up to ancestryChanged signal
  local connection = parentInstance.AncestryChanged:Connect(tryConnect)
  
  --Now connect us if we're already in the world
  tryConnect()
  
  return connection
end

local function getLayerCollectorAncestor(instance)
  local localInstance = instance
  while localInstance and not localInstance:IsA("LayerCollector") do
    localInstance = localInstance.Parent
  end
  return localInstance
end

local function CreateButtons(frame, buttons, yPos, ySize)
  local buttonNum = 1
  local buttonObjs = {}
  for i, obj in ipairs(buttons) do 
    local button = Instance.new("TextButton")
    button.Name = "Button" .. buttonNum
    button.Font = Enum.Font.Arial
    button.FontSize = Enum.FontSize.Size18
    button.AutoButtonColor = true
    button.Modal = true
    if obj["Style"] then
      button.Style = obj.Style
    else
      button.Style = Enum.ButtonStyle.RobloxButton
    end
    if obj["ZIndex"] then
      button.ZIndex = obj.ZIndex
    end
    button.Text = obj.Text
    button.TextColor3 = Color3.new(1,1,1)
    button.MouseButton1Click:Connect(obj.Function)
    button.Parent = frame
    buttonObjs[buttonNum] = button

    buttonNum = buttonNum + 1
  end
  local numButtons = buttonNum-1

  if numButtons == 1 then
    frame.Button1.Position = UDim2.new(0.35, 0, yPos.Scale, yPos.Offset)
    frame.Button1.Size = UDim2.new(.4,0,ySize.Scale, ySize.Offset)
  elseif numButtons == 2 then
    frame.Button1.Position = UDim2.new(0.1, 0, yPos.Scale, yPos.Offset)
    frame.Button1.Size = UDim2.new(.8/3,0, ySize.Scale, ySize.Offset)

    frame.Button2.Position = UDim2.new(0.55, 0, yPos.Scale, yPos.Offset)
    frame.Button2.Size = UDim2.new(.35,0, ySize.Scale, ySize.Offset)
  elseif numButtons >= 3 then
    local spacing = .1 / numButtons
    local buttonSize = .9 / numButtons

    buttonNum = 1
    while buttonNum <= numButtons do
      buttonObjs[buttonNum].Position = UDim2.new(spacing*buttonNum + (buttonNum-1) * buttonSize, 0, yPos.Scale, yPos.Offset)
      buttonObjs[buttonNum].Size = UDim2.new(buttonSize, 0, ySize.Scale, ySize.Offset)
      buttonNum = buttonNum + 1
    end
  end
end

local function setSliderPos(newAbsPosX,slider,sliderPosition,bar,steps)

  local newStep = steps - 1 --otherwise we really get one more step than we want
  local relativePosX = math.min(1, math.max(0, (newAbsPosX - bar.AbsolutePosition.X) / bar.AbsoluteSize.X ))
  local wholeNum, remainder = math.modf(relativePosX * newStep)
  if remainder > 0.5 then
    wholeNum = wholeNum + 1
  end
  relativePosX = wholeNum/newStep

  local result = math.ceil(relativePosX * newStep)
  if sliderPosition.Value ~= (result + 1) then --only update if we moved a step
    sliderPosition.Value = result + 1
    slider.Position = UDim2.new(relativePosX,-slider.AbsoluteSize.X/2,slider.Position.Y.Scale,slider.Position.Y.Offset)
  end
  
end

--- Updates the slider's position and corresponding IntValue based on absolute an X position.
--- Snaps the slider to the nearest step between min and max values.
---
--- @param newAbsPosX number -- The new absolute X position.
--- @param slider ImageButton -- The slider button being moved.
--- @param sliderPosition IntValue -- The IntValue representing the slider's current step-based position.
--- @param bar TextButton -- The slider bar.
--- @param stepCount number -- The number of total steps (maxValue - minValue).
--- @param minValue number -- The minimum selectable value.
local function setSliderPosNewest(newAbsPosX: number, slider: ImageButton, sliderPosition: IntValue, bar: TextButton, stepCount: number, minValue: number)

  local newStep = stepCount - 1 --otherwise we really get one more step than we want
  local relativePosX = math.min(1, math.max(0, (newAbsPosX - bar.AbsolutePosition.X) / bar.AbsoluteSize.X ))
  local wholeNum, remainder = math.modf(relativePosX * stepCount)
  if remainder > 0.5 then
    wholeNum = wholeNum + 1
  end
  relativePosX = wholeNum/newStep

  local value = minValue + wholeNum
  if sliderPosition.Value ~= value then
    sliderPosition.Value = value
    slider.Position = UDim2.new(relativePosX, -slider.AbsoluteSize.X/2, slider.Position.Y.Scale, slider.Position.Y.Offset)
  end
  
end

local function cancelSlide(areaSoak)
  areaSoak.Visible = false
end

t.CreateStyledMessageDialog = function(title, message, style, buttons)
  local frame = Instance.new("Frame")
  frame.Size = UDim2.new(0.5, 0, 0, 165)
  frame.Position = UDim2.new(0.25, 0, 0.5, -72.5)
  frame.Name = "MessageDialog"
  frame.Active = true
  frame.Style = Enum.FrameStyle.RobloxRound  
  
  local styleImage = Instance.new("ImageLabel")
  styleImage.Name = "StyleImage"
  styleImage.BackgroundTransparency = 1
  styleImage.Position = UDim2.new(0,5,0,15)
  if style == "error" or style == "Error" then
    styleImage.Size = UDim2.new(0, 71, 0, 71)
    styleImage.Image = "https://www.roblox.com/asset/?id=42565285"
  elseif style == "notify" or style == "Notify" then
    styleImage.Size = UDim2.new(0, 71, 0, 71)
    styleImage.Image = "https://www.roblox.com/asset/?id=42604978"
  elseif style == "confirm" or style == "Confirm" then
    styleImage.Size = UDim2.new(0, 74, 0, 76)
    styleImage.Image = "https://www.roblox.com/asset/?id=42557901"
  else
    return t.CreateMessageDialog(title,message,buttons)
  end
  styleImage.Parent = frame
  
  local titleLabel = Instance.new("TextLabel")
  titleLabel.Name = "Title"
  titleLabel.Text = title
  titleLabel.TextStrokeTransparency = 0
  titleLabel.BackgroundTransparency = 1
  titleLabel.TextColor3 = Color3.new(221/255,221/255,221/255)
  titleLabel.Position = UDim2.new(0, 80, 0, 0)
  titleLabel.Size = UDim2.new(1, -80, 0, 40)
  titleLabel.Font = Enum.Font.ArialBold
  titleLabel.FontSize = Enum.FontSize.Size36
  titleLabel.TextXAlignment = Enum.TextXAlignment.Center
  titleLabel.TextYAlignment = Enum.TextYAlignment.Center
  titleLabel.Parent = frame

  local messageLabel = Instance.new("TextLabel")
  messageLabel.Name = "Message"
  messageLabel.Text = message
  messageLabel.TextStrokeTransparency = 0
  messageLabel.TextColor3 = Color3.new(221/255,221/255,221/255)
  messageLabel.Position = UDim2.new(0.025, 80, 0, 45)
  messageLabel.Size = UDim2.new(0.95, -80, 0, 55)
  messageLabel.BackgroundTransparency = 1
  messageLabel.Font = Enum.Font.Arial
  messageLabel.FontSize = Enum.FontSize.Size18
  messageLabel.TextWrap = true
  messageLabel.TextXAlignment = Enum.TextXAlignment.Left
  messageLabel.TextYAlignment = Enum.TextYAlignment.Top
  messageLabel.Parent = frame

  CreateButtons(frame, buttons, UDim.new(0, 105), UDim.new(0, 40) )

  return frame
end

t.CreateMessageDialog = function(title, message, buttons)
  local frame = Instance.new("Frame")
  frame.Size = UDim2.new(0.5, 0, 0.5, 0)
  frame.Position = UDim2.new(0.25, 0, 0.25, 0)
  frame.Name = "MessageDialog"
  frame.Active = true
  frame.Style = Enum.FrameStyle.RobloxRound

  local titleLabel = Instance.new("TextLabel")
  titleLabel.Name = "Title"
  titleLabel.Text = title
  titleLabel.BackgroundTransparency = 1
  titleLabel.TextColor3 = Color3.new(221/255,221/255,221/255)
  titleLabel.Position = UDim2.new(0, 0, 0, 0)
  titleLabel.Size = UDim2.new(1, 0, 0.15, 0)
  titleLabel.Font = Enum.Font.ArialBold
  titleLabel.FontSize = Enum.FontSize.Size36
  titleLabel.TextXAlignment = Enum.TextXAlignment.Center
  titleLabel.TextYAlignment = Enum.TextYAlignment.Center
  titleLabel.Parent = frame

  local messageLabel = Instance.new("TextLabel")
  messageLabel.Name = "Message"
  messageLabel.Text = message
  messageLabel.TextColor3 = Color3.new(221/255,221/255,221/255)
  messageLabel.Position = UDim2.new(0.025, 0, 0.175, 0)
  messageLabel.Size = UDim2.new(0.95, 0, .55, 0)
  messageLabel.BackgroundTransparency = 1
  messageLabel.Font = Enum.Font.Arial
  messageLabel.FontSize = Enum.FontSize.Size18
  messageLabel.TextWrap = true
  messageLabel.TextXAlignment = Enum.TextXAlignment.Left
  messageLabel.TextYAlignment = Enum.TextYAlignment.Top
  messageLabel.Parent = frame

  CreateButtons(frame, buttons, UDim.new(0.8,0), UDim.new(0.15, 0))

  return frame
end

-- written by jmargh
-- to be used for the new settings menu
t.CreateScrollingDropDownMenu = function(onSelectedCallback, size, position, baseZ)
  local maxVisibleList = 6
  local baseZIndex = 0
  if type(baseZ) == 'number' then
    baseZIndex = baseZ
  end

  local dropDownMenu = {}
  local currentList = nil

  local updateFunc = nil
  local frame = Instance.new('Frame')
  frame.Name = "DropDownMenuFrame"
  frame.Size = size
  frame.Position = position
  frame.BackgroundTransparency = 1
  dropDownMenu.Frame = frame

  local currentSelectionName = Instance.new('TextButton')
  currentSelectionName.Name = "CurrentSelectionName"
  currentSelectionName.Size = UDim2.new(1, 0, 1, 0)
  currentSelectionName.BackgroundTransparency = 1
  currentSelectionName.Font = Enum.Font.SourceSansBold
  currentSelectionName.FontSize = Enum.FontSize.Size18
  currentSelectionName.TextXAlignment = Enum.TextXAlignment.Left
  currentSelectionName.TextYAlignment = Enum.TextYAlignment.Center
  currentSelectionName.TextColor3 = Color3.new(0.5, 0.5, 0.5)
  currentSelectionName.TextWrap = true
  currentSelectionName.ZIndex = baseZIndex
  currentSelectionName.Style = Enum.ButtonStyle.RobloxRoundDropdownButton
  currentSelectionName.Text = "Choose One"
  currentSelectionName.Parent = frame
  dropDownMenu.CurrentSelectionButton = currentSelectionName

  local icon = Instance.new('ImageLabel')
  icon.Name = "DropDownIcon"
  icon.Size = UDim2.new(0, 16, 0, 12)
  icon.Position = UDim2.new(1, -17, 0.5, -6)
  icon.Image = 'rbxasset://textures/ui/dropdown_arrow.png'
  icon.BackgroundTransparency = 1
  icon.ZIndex = baseZIndex
  icon.Parent = currentSelectionName

  local listMenu = nil
  local scrollingBackground = nil
  local visibleCount = 0
  local isOpen = false

  local function onEntrySelected()
    icon.Rotation = 0
    scrollingBackground:TweenSize(UDim2.new(1, 0, 0, currentSelectionName.AbsoluteSize.y), Enum.EasingDirection.InOut, Enum.EasingStyle.Sine, 0.15, true)
    --
    listMenu.ScrollBarThickness = 0
    listMenu:TweenSize(UDim2.new(1, -16, 0, 24), Enum.EasingDirection.InOut, Enum.EasingStyle.Sine, 0.15, true, function()
      if not isOpen then
        listMenu.Visible = false
        scrollingBackground.Visible = false
      end
    end)
    isOpen = false
  end

  currentSelectionName.MouseButton1Click:Connect(function()
    if not currentSelectionName.Active or #currentList == 0 then return end
    if isOpen then
      onEntrySelected()
      return
    end
    --
    isOpen = true
    icon.Rotation = 180
    if listMenu then listMenu.Visible = true end
    if scrollingBackground then scrollingBackground.Visible = true end
    --
    if scrollingBackground then
      scrollingBackground:TweenSize(UDim2.new(1, 0, 0, visibleCount * 24 + 8), Enum.EasingDirection.InOut, Enum.EasingStyle.Sine, 0.15, true)
    end
    if listMenu then
      listMenu:TweenSize(UDim2.new(1, -16, 0, visibleCount * 24), Enum.EasingDirection.InOut, Enum.EasingStyle.Sine, 0.15, true, function()
        listMenu.ScrollBarThickness = 6
      end)
    end
  end)

  --[[ Public API ]]--
  dropDownMenu.IsOpen = function()
    return isOpen
  end

  dropDownMenu.Close = function()
    onEntrySelected()
  end

  dropDownMenu.Reset = function()
    isOpen = false
    icon.Rotation = 0
    listMenu.ScrollBarThickness = 0
    listMenu.Size = UDim2.new(1, -16, 0, 24)
    listMenu.Visible = false
    scrollingBackground.Visible = false
  end

  dropDownMenu.SetVisible = function(isVisible)
    if frame then
      frame.Visible = isVisible
    end
  end

  dropDownMenu.UpdateZIndex = function(newZIndexBase)
    currentSelectionName.ZIndex = newZIndexBase
    icon.ZIndex = newZIndexBase
    if scrollingBackground then scrollingBackground.ZIndex = newZIndexBase + 1 end
    if listMenu then
      listMenu.ZIndex = newZIndexBase + 2
      for _,child in pairs(listMenu:GetChildren()) do
        child.ZIndex = newZIndexBase + 4
      end
    end
  end

  dropDownMenu.SetActive = function(isActive)
    currentSelectionName.Active = isActive
  end

  dropDownMenu.SetSelectionText = function(text)
    currentSelectionName.Text = text
  end

  dropDownMenu.CreateList = function(list)
    currentSelectionName.Text = "Choose One"
    if listMenu then listMenu:Destroy() end
    if scrollingBackground then scrollingBackground:Destroy() end
    --
    currentList = list
    local length = #list
    visibleCount = math.min(maxVisibleList, length)
    local listMenuOffset = visibleCount * 24

    listMenu = Instance.new('ScrollingFrame')
    listMenu.Name = "ListMenu"
    listMenu.Size = UDim2.new(1, -16, 0, 24)
    listMenu.Position = UDim2.new(0, 12, 0, 32)
    listMenu.CanvasSize = UDim2.new(0, 0, 0, length * 24)
    listMenu.BackgroundTransparency = 1
    listMenu.BorderSizePixel = 0
    listMenu.ZIndex = baseZIndex + 2
    listMenu.Visible = false
    listMenu.Active = true
    listMenu.BottomImage = 'rbxasset://textures/ui/scroll-bottom.png'
    listMenu.MidImage = 'rbxasset://textures/ui/scroll-middle.png'
    listMenu.TopImage = 'rbxasset://textures/ui/scroll-top.png'
    listMenu.ScrollBarThickness = 0
    listMenu.Parent = frame

    scrollingBackground = Instance.new('TextButton')
    scrollingBackground.Name = "ScrollingBackground"
    scrollingBackground.Size = UDim2.new(1, 0, 0, currentSelectionName.AbsoluteSize.y)
    scrollingBackground.Position = UDim2.new(0, 0, 0, 28)
    scrollingBackground.BackgroundColor3 = Color3.new(1, 1, 1)
    scrollingBackground.Style = Enum.ButtonStyle.RobloxRoundDropdownButton
    scrollingBackground.ZIndex = baseZIndex + 1
    scrollingBackground.Text = ""
    scrollingBackground.Visible = false
    scrollingBackground.AutoButtonColor = false
    scrollingBackground.Parent = frame

    for i = 1, length do
      local entry = list[i]
      local btn = Instance.new('TextButton')
      btn.Name = entry
      btn.Size = UDim2.new(1, 0, 0, 24)
      btn.Position = UDim2.new(0, 0, 0, (i - 1) * 24)
      btn.BackgroundTransparency = 0
      btn.BackgroundColor3 = Color3.new(1, 1, 1)
      btn.BorderSizePixel = 0
      btn.Font = Enum.Font.SourceSans
      btn.FontSize = Enum.FontSize.Size18
      btn.TextColor3 = Color3.new(0.5, 0.5, 0.5)
      btn.TextXAlignment = Enum.TextXAlignment.Left
      btn.TextYAlignment = Enum.TextYAlignment.Center
      btn.Text = entry
      btn.ZIndex = baseZIndex + 4
      btn.AutoButtonColor = false
      btn.Parent = listMenu

      btn.MouseButton1Click:Connect(function()
        currentSelectionName.Text = btn.Text
        onEntrySelected()
        btn.Font = Enum.Font.SourceSans
        btn.TextColor3 = Color3.new(0.5, 0.5, 0.5)
        btn.BackgroundColor3 = Color3.new(1, 1, 1)
        onSelectedCallback(btn.Text)
      end)

      btn.MouseEnter:Connect(function()
        btn.TextColor3 = Color3.new(1, 1, 1)
        btn.BackgroundColor3 = Color3.new(0.75, 0.75, 0.75)
      end)
      btn.MouseLeave:Connect(function()
        btn.TextColor3 = Color3.new(0.5, 0.5, 0.5)
        btn.BackgroundColor3 = Color3.new(1, 1, 1)
      end)
    end
  end

  return dropDownMenu
end

t.CreateDropDownMenu = function(items, onSelect, forRoblox, whiteSkin, baseZ)
  local baseZIndex = 0
  if (type(baseZ) == "number") then
    baseZIndex = baseZ
  end
  local width = UDim.new(0, 100)
  local height = UDim.new(0, 32)

  local xPos = 0.055
  local frame = Instance.new("Frame")
  local textColor = Color3.new(1,1,1)
  if (whiteSkin) then
    textColor = Color3.new(0.5, 0.5, 0.5)
  end
  frame.Name = "DropDownMenu"
  frame.BackgroundTransparency = 1
  frame.Size = UDim2.new(width, height)

  local dropDownMenu = Instance.new("TextButton")
  dropDownMenu.Name = "DropDownMenuButton"
  dropDownMenu.TextWrap = true
  dropDownMenu.TextColor3 = textColor
  dropDownMenu.Text = "Choose One"
  dropDownMenu.Font = Enum.Font.ArialBold
  dropDownMenu.FontSize = Enum.FontSize.Size18
  dropDownMenu.TextXAlignment = Enum.TextXAlignment.Left
  dropDownMenu.TextYAlignment = Enum.TextYAlignment.Center
  dropDownMenu.BackgroundTransparency = 1
  dropDownMenu.AutoButtonColor = true
  if (whiteSkin) then
    dropDownMenu.Style = Enum.ButtonStyle.RobloxRoundDropdownButton
  else
    dropDownMenu.Style = Enum.ButtonStyle.RobloxButton
  end
  dropDownMenu.Size = UDim2.new(1,0,1,0)
  dropDownMenu.Parent = frame
  dropDownMenu.ZIndex = 2 + baseZIndex

  local dropDownIcon = Instance.new("ImageLabel")
  dropDownIcon.Name = "Icon"
  dropDownIcon.Active = false
  if (whiteSkin) then
    dropDownIcon.Image = "rbxasset://textures/ui/dropdown_arrow.png"
    dropDownIcon.Size = UDim2.new(0,16,0,12)
    dropDownIcon.Position = UDim2.new(1,-17,0.5, -6)
  else
    dropDownIcon.Image = "https://www.roblox.com/asset/?id=45732894"
    dropDownIcon.Size = UDim2.new(0,11,0,6)
    dropDownIcon.Position = UDim2.new(1,-11,0.5, -2)
  end
  dropDownIcon.BackgroundTransparency = 1
  dropDownIcon.Parent = dropDownMenu
  dropDownIcon.ZIndex = 2 + baseZIndex
  
  local itemCount = #items
  local dropDownItemCount = #items
  local useScrollButtons = false
  if dropDownItemCount > 6 then
    useScrollButtons = true
    dropDownItemCount = 6
  end
  
  local droppedDownMenu = Instance.new("TextButton")
  droppedDownMenu.Name = "List"
  droppedDownMenu.Text = ""
  droppedDownMenu.BackgroundTransparency = 1
  --droppedDownMenu.AutoButtonColor = true
  if (whiteSkin) then
    droppedDownMenu.Style = Enum.ButtonStyle.RobloxRoundDropdownButton
  else
    droppedDownMenu.Style = Enum.ButtonStyle.RobloxButton
  end
  droppedDownMenu.Visible = false
  droppedDownMenu.Active = true  --Blocks clicks
  droppedDownMenu.Position = UDim2.new(0,0,0,0)
  droppedDownMenu.Size = UDim2.new(1,0, (1 + dropDownItemCount)*.8, 0)
  droppedDownMenu.Parent = frame
  droppedDownMenu.ZIndex = 2 + baseZIndex

  local choiceButton = Instance.new("TextButton")
  choiceButton.Name = "ChoiceButton"
  choiceButton.BackgroundTransparency = 1
  choiceButton.BorderSizePixel = 0
  choiceButton.Text = "ReplaceMe"
  choiceButton.TextColor3 = textColor
  choiceButton.TextXAlignment = Enum.TextXAlignment.Left
  choiceButton.TextYAlignment = Enum.TextYAlignment.Center
  choiceButton.BackgroundColor3 = Color3.new(1, 1, 1)
  choiceButton.Font = Enum.Font.Arial
  choiceButton.FontSize = Enum.FontSize.Size18
  if useScrollButtons then
    choiceButton.Size = UDim2.new(1,-13, .8/((dropDownItemCount + 1)*.8),0) 
  else
    choiceButton.Size = UDim2.new(1, 0, .8/((dropDownItemCount + 1)*.8),0) 
  end
  choiceButton.TextWrap = true
  choiceButton.ZIndex = 2 + baseZIndex

  local areaSoak = Instance.new("TextButton")
  areaSoak.Name = "AreaSoak"
  areaSoak.Text = ""
  areaSoak.BackgroundTransparency = 1
  areaSoak.Active = true
  areaSoak.Size = UDim2.new(1,0,1,0)
  areaSoak.Visible = false
  areaSoak.ZIndex = 3 + baseZIndex

  local dropDownSelected = false

  local scrollUpButton 
  local scrollDownButton
  local scrollMouseCount = 0

  local setZIndex = function(baseZIndex)
    droppedDownMenu.ZIndex = baseZIndex +1
    if scrollUpButton then
      scrollUpButton.ZIndex = baseZIndex + 3
    end
    if scrollDownButton then
      scrollDownButton.ZIndex = baseZIndex + 3
    end
    
    local children = droppedDownMenu:GetChildren()
    if children then
      for i, child in ipairs(children) do
        if child.Name == "ChoiceButton" then
          child.ZIndex = baseZIndex + 2
        elseif child.Name == "ClickCaptureButton" then
          child.ZIndex = baseZIndex
        end
      end
    end
  end

  local scrollBarPosition = 1
  local updateScroll = function()
    if scrollUpButton then
      scrollUpButton.Active = scrollBarPosition > 1 
    end
    if scrollDownButton then
      scrollDownButton.Active = scrollBarPosition + dropDownItemCount <= itemCount 
    end

    local children = droppedDownMenu:GetChildren()
    if not children then return end

    local childNum = 1      
    for i, obj in ipairs(children) do
      if obj.Name == "ChoiceButton" then
        if childNum < scrollBarPosition or childNum >= scrollBarPosition + dropDownItemCount then
          obj.Visible = false
        else
          obj.Position = UDim2.new(0,0,((childNum-scrollBarPosition+1)*.8)/((dropDownItemCount+1)*.8),0)
          obj.Visible = true
        end
        obj.TextColor3 = textColor
        obj.BackgroundTransparency = 1

        childNum = childNum + 1
      end
    end
  end
  local toggleVisibility = function()
    dropDownSelected = not dropDownSelected

    areaSoak.Visible = not areaSoak.Visible
    dropDownMenu.Visible = not dropDownSelected
    droppedDownMenu.Visible = dropDownSelected
    if dropDownSelected then
      setZIndex(4 + baseZIndex)
    else
      setZIndex(2 + baseZIndex)
    end
    if useScrollButtons then
      updateScroll()
    end
  end
  droppedDownMenu.MouseButton1Click:Connect(toggleVisibility)

  local updateSelection = function(text)
    local foundItem = false
    local children = droppedDownMenu:GetChildren()
    local childNum = 1
    if children then
      for i, obj in ipairs(children) do
        if obj.Name == "ChoiceButton" then
          if obj.Text == text then
            obj.Font = Enum.Font.ArialBold
            foundItem = true      
            scrollBarPosition = childNum            
            if (whiteSkin) then
              obj.TextColor3 = Color3.new(90/255,142/255,233/255)
            end
          else
            obj.Font = Enum.Font.Arial
            if (whiteSkin) then
              obj.TextColor3 = textColor
            end
          end
          childNum = childNum + 1
        end
      end
    end
    if not text then
      dropDownMenu.Text = "Choose One"
      scrollBarPosition = 1
    else
      if not foundItem then
        error("Invalid Selection Update -- " .. text)
      end

      if scrollBarPosition + dropDownItemCount > itemCount + 1 then
        scrollBarPosition = itemCount - dropDownItemCount + 1
      end

      dropDownMenu.Text = text
    end
  end
  
  local function scrollDown()
    if scrollBarPosition + dropDownItemCount <= itemCount then
      scrollBarPosition = scrollBarPosition + 1
      updateScroll()
      return true
    end
    return false
  end
  local function scrollUp()
    if scrollBarPosition > 1 then
      scrollBarPosition = scrollBarPosition - 1
      updateScroll()
      return true
    end
    return false
  end
  
  if useScrollButtons then
    --Make some scroll buttons
    scrollUpButton = Instance.new("ImageButton")
    scrollUpButton.Name = "ScrollUpButton"
    scrollUpButton.BackgroundTransparency = 1
    scrollUpButton.Image = "rbxasset://textures/ui/scrollbuttonUp.png"
    scrollUpButton.Size = UDim2.new(0,17,0,17) 
    scrollUpButton.Position = UDim2.new(1,-11,(1*.8)/((dropDownItemCount+1)*.8),0)
    scrollUpButton.MouseButton1Click:Connect(
      function()
        scrollMouseCount = scrollMouseCount + 1
      end)
    scrollUpButton.MouseLeave:Connect(
      function()
        scrollMouseCount = scrollMouseCount + 1
      end)
    scrollUpButton.MouseButton1Down:Connect(
      function()
        scrollMouseCount = scrollMouseCount + 1
  
        scrollUp()
        local val = scrollMouseCount
        wait(0.5)
        while val == scrollMouseCount do
          if scrollUp() == false then
            break
          end
          wait(0.1)
        end        
      end)

    scrollUpButton.Parent = droppedDownMenu

    scrollDownButton = Instance.new("ImageButton")
    scrollDownButton.Name = "ScrollDownButton"
    scrollDownButton.BackgroundTransparency = 1
    scrollDownButton.Image = "rbxasset://textures/ui/scrollbuttonDown.png"
    scrollDownButton.Size = UDim2.new(0,17,0,17) 
    scrollDownButton.Position = UDim2.new(1,-11,1,-11)
    scrollDownButton.Parent = droppedDownMenu
    scrollDownButton.MouseButton1Click:Connect(
      function()
        scrollMouseCount = scrollMouseCount + 1
      end)
    scrollDownButton.MouseLeave:Connect(
      function()
        scrollMouseCount = scrollMouseCount + 1
      end)
    scrollDownButton.MouseButton1Down:Connect(
      function()
        scrollMouseCount = scrollMouseCount + 1

        scrollDown()
        local val = scrollMouseCount
        wait(0.5)
        while val == scrollMouseCount do
          if scrollDown() == false then
            break
          end
          wait(0.1)
        end        
      end)  

    local scrollbar = Instance.new("ImageLabel")
    scrollbar.Name = "ScrollBar"
    scrollbar.Image = "rbxasset://textures/ui/scrollbar.png"
    scrollbar.BackgroundTransparency = 1
    scrollbar.Size = UDim2.new(0, 18, (dropDownItemCount*.8)/((dropDownItemCount+1)*.8), -(17) - 11 - 4)
    scrollbar.Position = UDim2.new(1,-11,(1*.8)/((dropDownItemCount+1)*.8),17+2)
    scrollbar.Parent = droppedDownMenu
  end

  for i,item in ipairs(items) do
    -- needed to maintain local scope for items in event listeners below
    local button = choiceButton:clone()
    if forRoblox then
      button.RobloxLocked = true
    end    
    button.Text = item
    button.Parent = droppedDownMenu
    if (whiteSkin) then
      button.TextColor3 = textColor
    end

    button.MouseButton1Click:Connect(function()
      --Remove Highlight
      if (not whiteSkin) then
        button.TextColor3 = Color3.new(1,1,1)
      end
      button.BackgroundTransparency = 1

      updateSelection(item)
      onSelect(item)

      toggleVisibility()
    end)
    button.MouseEnter:Connect(function()
      --Add Highlight  
      if (not whiteSkin) then
        button.TextColor3 = Color3.new(0,0,0)
      end
      button.BackgroundTransparency = 0
    end)

    button.MouseLeave:Connect(function()
      --Remove Highlight
      if (not whiteSkin) then
        button.TextColor3 = Color3.new(1,1,1)
      end
      button.BackgroundTransparency = 1
    end)
  end

  --This does the initial layout of the buttons  
  updateScroll()
  
  frame.AncestryChanged:Connect(function(child,parent)
    if parent == nil then
      areaSoak.Parent = nil
    else
      areaSoak.Parent = getLayerCollectorAncestor(frame)
    end
  end)

  dropDownMenu.MouseButton1Click:Connect(toggleVisibility)
  areaSoak.MouseButton1Click:Connect(toggleVisibility)
  return frame, updateSelection
end

t.CreatePropertyDropDownMenu = function(instance, property, enum)

  local items = enum:GetEnumItems()
  local names = {}
  local nameToItem = {}
  for i,obj in ipairs(items) do
    names[i] = obj.Name
    nameToItem[obj.Name] = obj
  end

  local frame
  local updateSelection
  frame, updateSelection = t.CreateDropDownMenu(names, function(text) instance[property] = nameToItem[text] end)

  ScopedConnect(frame, instance, "Changed", 
    function(prop)
      if prop == property then
        updateSelection(instance[property].Name)
      end
    end,
    function()
      updateSelection(instance[property].Name)
    end)

  return frame
end

t.GetFontHeight = function(font, fontSize)
  if font == nil or fontSize == nil then
    error("Font and FontSize must be non-nil")
  end
  
  local fontSizeInt = tonumber(fontSize.Name:match("%d+")) -- Clever hack to extract the size from the enum itself.

  if font == Enum.Font.Legacy then -- Legacy has a 50% bigger size.
    return math.ceil(fontSizeInt*1.5)
  else -- Size is literally just the fontSizeInt
    return fontSizeInt
  end
end

local function layoutGuiObjectsHelper(frame, guiObjects, settingsTable)
  local totalPixels = frame.AbsoluteSize.Y
  local pixelsRemaining = frame.AbsoluteSize.Y
  for i, child in ipairs(guiObjects) do
    if child:IsA("TextLabel") or child:IsA("TextButton") then
      local isLabel = child:IsA("TextLabel")
      if isLabel then
        pixelsRemaining = pixelsRemaining - settingsTable["TextLabelPositionPadY"]
      else
        pixelsRemaining = pixelsRemaining - settingsTable["TextButtonPositionPadY"]
      end
      child.Position = UDim2.new(child.Position.X.Scale, child.Position.X.Offset, 0, totalPixels - pixelsRemaining)
      child.Size = UDim2.new(child.Size.X.Scale, child.Size.X.Offset, 0, pixelsRemaining)

      if child.TextFits and child.TextBounds.Y < pixelsRemaining then
        child.Visible = true
        if isLabel then
          child.Size = UDim2.new(child.Size.X.Scale, child.Size.X.Offset, 0, child.TextBounds.Y + settingsTable["TextLabelSizePadY"])
        else 
          child.Size = UDim2.new(child.Size.X.Scale, child.Size.X.Offset, 0, child.TextBounds.Y + settingsTable["TextButtonSizePadY"])
        end

        while not child.TextFits do
          child.Size = UDim2.new(child.Size.X.Scale, child.Size.X.Offset, 0, child.AbsoluteSize.Y + 1)
        end
        pixelsRemaining = pixelsRemaining - child.AbsoluteSize.Y    

        if isLabel then
          pixelsRemaining = pixelsRemaining - settingsTable["TextLabelPositionPadY"]
        else
          pixelsRemaining = pixelsRemaining - settingsTable["TextButtonPositionPadY"]
        end
      else
        child.Visible = false
        pixelsRemaining = -1
      end      

    else
      --GuiObject
      child.Position = UDim2.new(child.Position.X.Scale, child.Position.X.Offset, 0, totalPixels - pixelsRemaining)
      pixelsRemaining = pixelsRemaining - child.AbsoluteSize.Y
      child.Visible = (pixelsRemaining >= 0)
    end
  end
end

t.LayoutGuiObjects = function(frame, guiObjects, settingsTable)
  if not frame:IsA("GuiObject") then
    error("Frame must be a GuiObject")
  end
  for i, child in ipairs(guiObjects) do
    if not child:IsA("GuiObject") then
      error("All elements that are layed out must be of type GuiObject")
    end
  end

  if not settingsTable then
    settingsTable = {}
  end

  if not settingsTable["TextLabelSizePadY"] then
    settingsTable["TextLabelSizePadY"] = 0
  end
  if not settingsTable["TextLabelPositionPadY"] then
    settingsTable["TextLabelPositionPadY"] = 0
  end
  if not settingsTable["TextButtonSizePadY"] then
    settingsTable["TextButtonSizePadY"] = 12
  end
  if not settingsTable["TextButtonPositionPadY"] then
    settingsTable["TextButtonPositionPadY"] = 2
  end

  --Wrapper frame takes care of styled objects
  local wrapperFrame = Instance.new("Frame")
  wrapperFrame.Name = "WrapperFrame"
  wrapperFrame.BackgroundTransparency = 1
  wrapperFrame.Size = UDim2.new(1,0,1,0)
  wrapperFrame.Parent = frame

  for i, child in ipairs(guiObjects) do
    child.Parent = wrapperFrame
  end

  local recalculate = function()
    wait()
    layoutGuiObjectsHelper(wrapperFrame, guiObjects, settingsTable)
  end
  
  frame.Changed:Connect(
    function(prop)
      if prop == "AbsoluteSize" then
        --Wait a heartbeat for it to sync in
        recalculate(nil)
      end
    end)
  frame.AncestryChanged:Connect(recalculate)

  layoutGuiObjectsHelper(wrapperFrame, guiObjects, settingsTable)
end


t.CreateSlider = function(steps,width,position)
  local sliderGui = Instance.new("Frame")
  sliderGui.Size = UDim2.new(1,0,1,0)
  sliderGui.BackgroundTransparency = 1
  sliderGui.Name = "SliderGui"
  
  local sliderSteps = Instance.new("IntValue")
  sliderSteps.Name = "SliderSteps"
  sliderSteps.Value = steps
  sliderSteps.Parent = sliderGui
  
  local areaSoak = Instance.new("TextButton")
  areaSoak.Name = "AreaSoak"
  areaSoak.Text = ""
  areaSoak.BackgroundTransparency = 1
  areaSoak.Active = false
  areaSoak.Size = UDim2.new(1,0,1,0)
  areaSoak.Visible = false
  areaSoak.ZIndex = 4
  
  sliderGui.AncestryChanged:Connect(function(child,parent)
    if parent == nil then
      areaSoak.Parent = nil
    else
      areaSoak.Parent = getLayerCollectorAncestor(sliderGui)
    end
  end)
  
  local sliderPosition = Instance.new("IntValue")
  sliderPosition.Name = "SliderPosition"
  sliderPosition.Value = 0
  sliderPosition.Parent = sliderGui
  
  local id = math.random(1,100)
  
  local bar = Instance.new("TextButton")
  bar.Text = ""
  bar.AutoButtonColor = false
  bar.Name = "Bar"
  bar.BackgroundColor3 = Color3.new(0,0,0)
  if type(width) == "number" then
    bar.Size = UDim2.new(0,width,0,5)
  else
    bar.Size = UDim2.new(0,200,0,5)
  end
  bar.BorderColor3 = Color3.new(95/255,95/255,95/255)
  bar.ZIndex = 2
  bar.Parent = sliderGui
  
  if position["X"] and position["X"]["Scale"] and position["X"]["Offset"] and position["Y"] and position["Y"]["Scale"] and position["Y"]["Offset"] then
    bar.Position = position
  end
  
  local slider = Instance.new("ImageButton")
  slider.Name = "Slider"
  slider.BackgroundTransparency = 1
  slider.Image = "rbxasset://textures/ui/Slider.png"
  slider.Position = UDim2.new(0,0,0.5,-10)
  slider.Size = UDim2.new(0,20,0,20)
  slider.ZIndex = 3
  slider.Parent = bar
  
  local areaSoakMouseMoveCon = nil
  
  areaSoak.MouseLeave:Connect(function()
    if areaSoak.Visible then
      cancelSlide(areaSoak)
    end
  end)
  areaSoak.MouseButton1Up:Connect(function()
    if areaSoak.Visible then
      cancelSlide(areaSoak)
    end
  end)
  
  slider.MouseButton1Down:Connect(function()
    areaSoak.Visible = true
    if areaSoakMouseMoveCon then areaSoakMouseMoveCon:Disconnect() end
    areaSoakMouseMoveCon = areaSoak.MouseMoved:Connect(function(x,y)
      setSliderPos(x,slider,sliderPosition,bar,steps)
    end)
  end)
  
  slider.MouseButton1Up:Connect(function() cancelSlide(areaSoak) end)
  
  sliderPosition.Changed:Connect(function(prop)
    sliderPosition.Value = math.min(steps, math.max(1,sliderPosition.Value))
    local relativePosX = (sliderPosition.Value - 1) / (steps - 1)
    slider.Position = UDim2.new(relativePosX,-slider.AbsoluteSize.X/2,slider.Position.Y.Scale,slider.Position.Y.Offset)
  end)
  
  bar.MouseButton1Down:Connect(function(x,y)
    setSliderPos(x,slider,sliderPosition,bar,steps)
  end)
  
  return sliderGui, sliderPosition, sliderSteps

end

--- Creates a customizable horizontal slider UI element.
--- This newest version supports setting a minimum and maximum value.
--- Returns the slider GUI frame and the IntValue holding the current position
--- @param minValue number -- The minimum selectable value on the slider.
--- @param maxValue number -- The maximum selectable value on the slider.
--- @param width number -- The pixel width of the slider bar.
--- @param position UDim2 -- The UDim2 position to place the slider bar.
--- @return Frame -- The slider GUI container.
--- @return IntValue -- The current slider position (updated when the user moves the slider).
t.CreateSliderNewest = function(minValue: number, maxValue: number, width: number, position: UDim2)
  minValue = minValue or 0
  maxValue = maxValue or 100
  width = width or 200
  assert(minValue < maxValue, "Min value cannot be greater than or equal to max value")

  local stepCount = maxValue - minValue

  local sliderGui = Instance.new("Frame")
  sliderGui.Size = UDim2.new(1,0,1,0)
  sliderGui.BackgroundTransparency = 1
  sliderGui.Name = "SliderGui"
  
  local sliderMinValue = Instance.new("IntValue")
  sliderMinValue.Name = "SliderMinValue"
  sliderMinValue.Value = minValue
  sliderMinValue.Parent = sliderGui

  local sliderMaxValue = Instance.new("IntValue")
  sliderMaxValue.Name = "SliderMaxValue"
  sliderMaxValue.Value = maxValue
  sliderMaxValue.Parent = sliderGui
  
  local areaSoak = Instance.new("TextButton")
  areaSoak.Name = "AreaSoak_slider"
  areaSoak.Text = ""
  areaSoak.BackgroundTransparency = 1
  areaSoak.Active = false
  areaSoak.Size = UDim2.new(1,0,1,0)
  areaSoak.Visible = false
  areaSoak.ZIndex = 4
  
  sliderGui.AncestryChanged:Connect(function(child,parent)
    if parent == nil then
      areaSoak.Parent = nil
    else
      areaSoak.Parent = getLayerCollectorAncestor(sliderGui)
    end
  end)
  
  local sliderPosition = Instance.new("IntValue")
  sliderPosition.Name = "SliderPosition"
  sliderPosition.Value = minValue
  sliderPosition.Parent = sliderGui
  
  local bar = Instance.new("TextButton")
  bar.Text = ""
  bar.AutoButtonColor = false
  bar.Name = "Bar"
  bar.BackgroundColor3 = Color3.new(0,0,0)
  bar.Size = UDim2.new(0,width,0,5)
  bar.BorderColor3 = Color3.new(95/255,95/255,95/255)
  bar.ZIndex = 2
  bar.Parent = sliderGui
  
  if typeof(position) == "UDim2" then
    bar.Position = position
  end
  
  local slider = Instance.new("ImageButton")
  slider.Name = "Slider"
  slider.BackgroundTransparency = 1
  slider.Image = "rbxasset://textures/ui/Slider.png"
  slider.Position = UDim2.new(0,0,0.5,-10)
  slider.Size = UDim2.new(0,20,0,20)
  slider.ZIndex = 3
  slider.Parent = bar
  
  local areaSoakMouseMoveCon = nil
  
  areaSoak.MouseLeave:Connect(function()
    if areaSoak.Visible then
      cancelSlide(areaSoak)
    end
  end)
  areaSoak.MouseButton1Up:Connect(function()
    if areaSoak.Visible then
      cancelSlide(areaSoak)
    end
  end)
  
  slider.MouseButton1Down:Connect(function()
    areaSoak.Visible = true
    if areaSoakMouseMoveCon then areaSoakMouseMoveCon:Disconnect() end
    areaSoakMouseMoveCon = areaSoak.MouseMoved:Connect(function(x,y)
      setSliderPosNewest(x,slider,sliderPosition,bar,stepCount,minValue)
    end)
  end)
  
  slider.MouseButton1Up:Connect(function() cancelSlide(areaSoak) end)
  
  sliderPosition.Changed:Connect(function(prop)
    local clamped = math.clamp(sliderPosition.Value, minValue, maxValue)
    if sliderPosition.Value ~= clamped then
      sliderPosition.Value = clamped
      return -- should return now since a new .Changed event will be triggered by the line above
    end
    local relativePosX = (sliderPosition.Value - minValue) / stepCount
    slider.Position = UDim2.new(relativePosX, -slider.AbsoluteSize.X/2, slider.Position.Y.Scale, slider.Position.Y.Offset)
  end)
  
  bar.MouseButton1Down:Connect(function(x,y)
    setSliderPosNewest(x,slider,sliderPosition,bar,stepCount,minValue)
  end)
  
  return sliderGui, sliderPosition

end


t.CreateSliderNew = function(steps,width,position)
  local sliderGui = Instance.new("Frame")
  sliderGui.Size = UDim2.new(1,0,1,0)
  sliderGui.BackgroundTransparency = 1
  sliderGui.Name = "SliderGui"
  
  local sliderSteps = Instance.new("IntValue")
  sliderSteps.Name = "SliderSteps"
  sliderSteps.Value = steps
  sliderSteps.Parent = sliderGui
  
  local areaSoak = Instance.new("TextButton")
  areaSoak.Name = "AreaSoak"
  areaSoak.Text = ""
  areaSoak.BackgroundTransparency = 1
  areaSoak.Active = false
  areaSoak.Size = UDim2.new(1,0,1,0)
  areaSoak.Visible = false
  areaSoak.ZIndex = 6
  
  sliderGui.AncestryChanged:Connect(function(child,parent)
    if parent == nil then
      areaSoak.Parent = nil
    else
      areaSoak.Parent = getLayerCollectorAncestor(sliderGui)
    end
  end)
  
  local sliderPosition = Instance.new("IntValue")
  sliderPosition.Name = "SliderPosition"
  sliderPosition.Value = 0
  sliderPosition.Parent = sliderGui
  
  local id = math.random(1,100)
  
  local sliderBarImgHeight = 7
  local sliderBarCapImgWidth = 4

  local bar = Instance.new("ImageButton")
  bar.BackgroundTransparency = 1
  bar.Image = "rbxasset://textures/ui/Slider-BKG-Center.png"
  bar.Name = "Bar"
  local displayWidth = 200
  if type(width) == "number" then
    bar.Size = UDim2.new(0,width - (sliderBarCapImgWidth * 2),0,sliderBarImgHeight)
    displayWidth = width - (sliderBarCapImgWidth * 2)
  else
    bar.Size = UDim2.new(0,200,0,sliderBarImgHeight)
  end
  bar.ZIndex = 3
  bar.Parent = sliderGui  
  if position["X"] and position["X"]["Scale"] and position["X"]["Offset"] and position["Y"] and position["Y"]["Scale"] and position["Y"]["Offset"] then
    bar.Position = position
  end

  local barLeft = bar:clone()
  barLeft.Name = "BarLeft"
  barLeft.Image = "rbxasset://textures/ui/Slider-BKG-Left-Cap.png"
  barLeft.Size = UDim2.new(0, sliderBarCapImgWidth, 0, sliderBarImgHeight)
  barLeft.Position = UDim2.new(position.X.Scale, position.X.Offset - sliderBarCapImgWidth, position.Y.Scale, position.Y.Offset)
  barLeft.Parent = sliderGui  
  barLeft.ZIndex = 3

  local barRight = barLeft:clone()
  barRight.Name = "BarRight"
  barRight.Image = "rbxasset://textures/ui/Slider-BKG-Right-Cap.png"
  barRight.Position = UDim2.new(position.X.Scale, position.X.Offset + displayWidth, position.Y.Scale, position.Y.Offset)
  barRight.Parent = sliderGui  

  local fillLeft = barLeft:clone()
  fillLeft.Name = "FillLeft"
  fillLeft.Image = "rbxasset://textures/ui/Slider-Fill-Left-Cap.png"
  fillLeft.Parent = sliderGui  
  fillLeft.ZIndex = 4

  local fill = fillLeft:clone()
  fill.Name = "Fill"
  fill.Image = "rbxasset://textures/ui/Slider-Fill-Center.png"
  fill.Parent = bar  
  fill.ZIndex = 4
  fill.Position = UDim2.new(0, 0, 0, 0)
  fill.Size = UDim2.new(0.5, 0, 1, 0)


--  bar.Visible = false

  local slider = Instance.new("ImageButton")
  slider.Name = "Slider"
  slider.BackgroundTransparency = 1
  slider.Image = "rbxasset://textures/ui/slider_new_tab.png"
  slider.Position = UDim2.new(0,0,0.5,-14)
  slider.Size = UDim2.new(0,28,0,28)
  slider.ZIndex = 5
  slider.Parent = bar
  
  local areaSoakMouseMoveCon = nil
  
  areaSoak.MouseLeave:Connect(function()
    if areaSoak.Visible then
      cancelSlide(areaSoak)
    end
  end)
  areaSoak.MouseButton1Up:Connect(function()
    if areaSoak.Visible then
      cancelSlide(areaSoak)
    end
  end)
  
  slider.MouseButton1Down:Connect(function()
    areaSoak.Visible = true
    if areaSoakMouseMoveCon then areaSoakMouseMoveCon:Disconnect() end
    areaSoakMouseMoveCon = areaSoak.MouseMoved:Connect(function(x,y)
      setSliderPos(x,slider,sliderPosition,bar,steps)
    end)
  end)
  
  slider.MouseButton1Up:Connect(function() cancelSlide(areaSoak) end)
  
  sliderPosition.Changed:Connect(function(prop)
    sliderPosition.Value = math.min(steps, math.max(1,sliderPosition.Value))
    local relativePosX = (sliderPosition.Value - 1) / (steps - 1)
    slider.Position = UDim2.new(relativePosX,-slider.AbsoluteSize.X/2,slider.Position.Y.Scale,slider.Position.Y.Offset)
    fill.Size = UDim2.new(relativePosX, 0, 1, 0)
  end)
  
  bar.MouseButton1Down:Connect(function(x,y)
    setSliderPos(x,slider,sliderPosition,bar,steps)
  end)

  fill.MouseButton1Down:Connect(function(x,y)
    setSliderPos(x,slider,sliderPosition,bar,steps)
  end)

  fillLeft.MouseButton1Down:Connect(function(x,y)
    setSliderPos(x,slider,sliderPosition,bar,steps)
  end)


  return sliderGui, sliderPosition, sliderSteps

end





t.CreateTrueScrollingFrame = function()
  local lowY = nil
  local highY = nil
  
  local dragCon = nil
  local upCon = nil

  local internalChange = false

  local descendantsChangeConMap = {}

  local scrollingFrame = Instance.new("Frame")
  scrollingFrame.Name = "ScrollingFrame"
  scrollingFrame.Active = true
  scrollingFrame.Size = UDim2.new(1,0,1,0)
  scrollingFrame.ClipsDescendants = true

  local controlFrame = Instance.new("Frame")
  controlFrame.Name = "ControlFrame"
  controlFrame.BackgroundTransparency = 1
  controlFrame.Size = UDim2.new(0,18,1,0)
  controlFrame.Position = UDim2.new(1,-20,0,0)
  controlFrame.Parent = scrollingFrame
  
  local scrollBottom = Instance.new("BoolValue")
  scrollBottom.Value = false
  scrollBottom.Name = "ScrollBottom"
  scrollBottom.Parent = controlFrame
  
  local scrollUp = Instance.new("BoolValue")
  scrollUp.Value = false
  scrollUp.Name = "scrollUp"
  scrollUp.Parent = controlFrame

  local scrollUpButton = Instance.new("TextButton")
  scrollUpButton.Name = "ScrollUpButton"
  scrollUpButton.Text = ""
  scrollUpButton.AutoButtonColor = false
  scrollUpButton.BackgroundColor3 = Color3.new(0,0,0)
  scrollUpButton.BorderColor3 = Color3.new(1,1,1)
  scrollUpButton.BackgroundTransparency = 0.5
  scrollUpButton.Size = UDim2.new(0,18,0,18)
  scrollUpButton.ZIndex = 2
  scrollUpButton.Parent = controlFrame
  for i = 1, 6 do
    local triFrame = Instance.new("Frame")
    triFrame.BorderColor3 = Color3.new(1,1,1)
    triFrame.Name = "tri" .. tostring(i)
    triFrame.ZIndex = 3
    triFrame.BackgroundTransparency = 0.5
    triFrame.Size = UDim2.new(0,12 - ((i -1) * 2),0,0)
    triFrame.Position = UDim2.new(0,3 + (i -1),0.5,2 - (i -1))
    triFrame.Parent = scrollUpButton
  end
  scrollUpButton.MouseEnter:Connect(function()
    scrollUpButton.BackgroundTransparency = 0.1
    local upChildren = scrollUpButton:GetChildren()
    for i = 1, #upChildren do
      upChildren[i].BackgroundTransparency = 0.1
    end
  end)
  scrollUpButton.MouseLeave:Connect(function()
    scrollUpButton.BackgroundTransparency = 0.5
    local upChildren = scrollUpButton:GetChildren()
    for i = 1, #upChildren do
      upChildren[i].BackgroundTransparency = 0.5
    end
  end)

  local scrollDownButton = scrollUpButton:clone()
  scrollDownButton.Name = "ScrollDownButton"
  scrollDownButton.Position = UDim2.new(0,0,1,-18)
  local downChildren = scrollDownButton:GetChildren()
  for i = 1, #downChildren do
    downChildren[i].Position = UDim2.new(0,3 + (i -1),0.5,-2 + (i - 1))
  end
  scrollDownButton.MouseEnter:Connect(function()
    scrollDownButton.BackgroundTransparency = 0.1
    local downChildren = scrollDownButton:GetChildren()
    for i = 1, #downChildren do
      downChildren[i].BackgroundTransparency = 0.1
    end
  end)
  scrollDownButton.MouseLeave:Connect(function()
    scrollDownButton.BackgroundTransparency = 0.5
    local downChildren = scrollDownButton:GetChildren()
    for i = 1, #downChildren do
      downChildren[i].BackgroundTransparency = 0.5
    end
  end)
  scrollDownButton.Parent = controlFrame
  
  local scrollTrack = Instance.new("Frame")
  scrollTrack.Name = "ScrollTrack"
  scrollTrack.BackgroundTransparency = 1
  scrollTrack.Size = UDim2.new(0,18,1,-38)
  scrollTrack.Position = UDim2.new(0,0,0,19)
  scrollTrack.Parent = controlFrame

  local scrollbar = Instance.new("TextButton")
  scrollbar.BackgroundColor3 = Color3.new(0,0,0)
  scrollbar.BorderColor3 = Color3.new(1,1,1)
  scrollbar.BackgroundTransparency = 0.5
  scrollbar.AutoButtonColor = false
  scrollbar.Text = ""
  scrollbar.Active = true
  scrollbar.Name = "ScrollBar"
  scrollbar.ZIndex = 2
  scrollbar.BackgroundTransparency = 0.5
  scrollbar.Size = UDim2.new(0, 18, 0.1, 0)
  scrollbar.Position = UDim2.new(0,0,0,0)
  scrollbar.Parent = scrollTrack

  local scrollNub = Instance.new("Frame")
  scrollNub.Name = "ScrollNub"
  scrollNub.BorderColor3 = Color3.new(1,1,1)
  scrollNub.Size = UDim2.new(0,10,0,0)
  scrollNub.Position = UDim2.new(0.5,-5,0.5,0)
  scrollNub.ZIndex = 2
  scrollNub.BackgroundTransparency = 0.5
  scrollNub.Parent = scrollbar

  local newNub = scrollNub:clone()
  newNub.Position = UDim2.new(0.5,-5,0.5,-2)
  newNub.Parent = scrollbar
  
  local lastNub = scrollNub:clone()
  lastNub.Position = UDim2.new(0.5,-5,0.5,2)
  lastNub.Parent = scrollbar

  scrollbar.MouseEnter:Connect(function()
    scrollbar.BackgroundTransparency = 0.1
    scrollNub.BackgroundTransparency = 0.1
    newNub.BackgroundTransparency = 0.1
    lastNub.BackgroundTransparency = 0.1
  end)
  scrollbar.MouseLeave:Connect(function()
    scrollbar.BackgroundTransparency = 0.5
    scrollNub.BackgroundTransparency = 0.5
    newNub.BackgroundTransparency = 0.5
    lastNub.BackgroundTransparency = 0.5
  end)

  local mouseDrag = Instance.new("ImageButton")
  mouseDrag.Active = false
  mouseDrag.Size = UDim2.new(1.5, 0, 1.5, 0)
  mouseDrag.AutoButtonColor = false
  mouseDrag.BackgroundTransparency = 1
  mouseDrag.Name = "mouseDrag"
  mouseDrag.Position = UDim2.new(-0.25, 0, -0.25, 0)
  mouseDrag.ZIndex = 10
  
  local function positionScrollBar(x,y,offset)
    local oldPos = scrollbar.Position

    if y < scrollTrack.AbsolutePosition.y then
      scrollbar.Position = UDim2.new(scrollbar.Position.X.Scale,scrollbar.Position.X.Offset,0,0)
      return (oldPos ~= scrollbar.Position)
    end
    
    local relativeSize = scrollbar.AbsoluteSize.Y/scrollTrack.AbsoluteSize.Y

    if y > (scrollTrack.AbsolutePosition.y + scrollTrack.AbsoluteSize.y) then
      scrollbar.Position = UDim2.new(scrollbar.Position.X.Scale,scrollbar.Position.X.Offset,1 - relativeSize,0)
      return (oldPos ~= scrollbar.Position)
    end
    local newScaleYPos = (y - scrollTrack.AbsolutePosition.y - offset)/scrollTrack.AbsoluteSize.y
    if newScaleYPos + relativeSize > 1 then
      newScaleYPos = 1 - relativeSize
      scrollBottom.Value = true
      scrollUp.Value = false
    elseif newScaleYPos <= 0 then
      newScaleYPos = 0
      scrollUp.Value = true
      scrollBottom.Value = false
    else
      scrollUp.Value = false
      scrollBottom.Value = false
    end
    scrollbar.Position = UDim2.new(scrollbar.Position.X.Scale,scrollbar.Position.X.Offset,newScaleYPos,0)
    
    return (oldPos ~= scrollbar.Position)
  end

  local function drillDownSetHighLow(instance)
    if not instance or not instance:IsA("GuiObject") then return end
    if instance == controlFrame then return end
    if instance:IsDescendantOf(controlFrame) then return end
    if not instance.Visible then return end

    if lowY and lowY > instance.AbsolutePosition.Y then
      lowY = instance.AbsolutePosition.Y
    elseif not lowY then
      lowY = instance.AbsolutePosition.Y
    end
    if highY and highY < (instance.AbsolutePosition.Y + instance.AbsoluteSize.Y) then
      highY = instance.AbsolutePosition.Y + instance.AbsoluteSize.Y
    elseif not highY then
      highY = instance.AbsolutePosition.Y + instance.AbsoluteSize.Y
    end
    local children = instance:GetChildren()
    for i = 1, #children do
      drillDownSetHighLow(children[i])
    end
  end

  local function resetHighLow()
    local firstChildren = scrollingFrame:GetChildren()

    for i = 1, #firstChildren do
      drillDownSetHighLow(firstChildren[i])
    end
  end

  local function recalculate()
    internalChange = true

    local percentFrame = 0
    if scrollbar.Position.Y.Scale > 0 then
      if scrollbar.Visible then
        percentFrame = scrollbar.Position.Y.Scale/((scrollTrack.AbsoluteSize.Y - scrollbar.AbsoluteSize.Y)/scrollTrack.AbsoluteSize.Y)
      else
        percentFrame = 0
      end
    end
    if percentFrame > 0.99 then percentFrame = 1 end

    local hiddenYAmount = (scrollingFrame.AbsoluteSize.Y - (highY - lowY)) * percentFrame
    
    local guiChildren = scrollingFrame:GetChildren()
    for i = 1, #guiChildren do
      if guiChildren[i] ~= controlFrame then
        guiChildren[i].Position = UDim2.new(guiChildren[i].Position.X.Scale,guiChildren[i].Position.X.Offset,
          0, math.ceil(guiChildren[i].AbsolutePosition.Y) - math.ceil(lowY) + hiddenYAmount)
      end
    end

    lowY = nil
    highY = nil
    resetHighLow()
    internalChange = false
  end

  local function setSliderSizeAndPosition()
    if not highY or not lowY then return end

    local totalYSpan = math.abs(highY - lowY)
    if totalYSpan == 0 then
      scrollbar.Visible = false
      scrollDownButton.Visible = false
      scrollUpButton.Visible = false

      if dragCon then dragCon:Disconnect() dragCon = nil end
      if upCon then upCon:Disconnect() upCon = nil end
      return
    end

    local percentShown = scrollingFrame.AbsoluteSize.Y/totalYSpan
    if percentShown >= 1 then
      scrollbar.Visible = false
      scrollDownButton.Visible = false
      scrollUpButton.Visible = false
      recalculate()
    else
      scrollbar.Visible = true
      scrollDownButton.Visible = true
      scrollUpButton.Visible = true

      scrollbar.Size = UDim2.new(scrollbar.Size.X.Scale,scrollbar.Size.X.Offset,percentShown,0)
    end

    local percentPosition = (scrollingFrame.AbsolutePosition.Y - lowY)/totalYSpan
    scrollbar.Position = UDim2.new(scrollbar.Position.X.Scale,scrollbar.Position.X.Offset,percentPosition,-scrollbar.AbsoluteSize.X/2)

    if scrollbar.AbsolutePosition.y < scrollTrack.AbsolutePosition.y then
      scrollbar.Position = UDim2.new(scrollbar.Position.X.Scale,scrollbar.Position.X.Offset,0,0)
    end

    if (scrollbar.AbsolutePosition.y + scrollbar.AbsoluteSize.Y) > (scrollTrack.AbsolutePosition.y + scrollTrack.AbsoluteSize.y) then
      local relativeSize = scrollbar.AbsoluteSize.Y/scrollTrack.AbsoluteSize.Y
      scrollbar.Position = UDim2.new(scrollbar.Position.X.Scale,scrollbar.Position.X.Offset,1 - relativeSize,0)
    end
  end
  
  local buttonScrollAmountPixels = 7
  local reentrancyGuardScrollUp = false
  local function doScrollUp()
    if reentrancyGuardScrollUp then return end
    
    reentrancyGuardScrollUp = true
      if positionScrollBar(0,scrollbar.AbsolutePosition.Y - buttonScrollAmountPixels,0) then
        recalculate()
      end
    reentrancyGuardScrollUp = false
  end
  
  local reentrancyGuardScrollDown = false
  local function doScrollDown()
    if reentrancyGuardScrollDown then return end
    
    reentrancyGuardScrollDown = true
      if positionScrollBar(0,scrollbar.AbsolutePosition.Y + buttonScrollAmountPixels,0) then
        recalculate()
      end
    reentrancyGuardScrollDown = false
  end

  local function scrollUp(mouseYPos)
    if scrollUpButton.Active then
      scrollStamp = tick()
      local current = scrollStamp
      local upCon
      upCon = mouseDrag.MouseButton1Up:Connect(function()
        scrollStamp = tick()
        mouseDrag.Parent = nil
        upCon:Disconnect()
      end)
      mouseDrag.Parent = getLayerCollectorAncestor(scrollbar)
      doScrollUp()
      wait(0.2)
      local t = tick()
      local w = 0.1
      while scrollStamp == current do
        doScrollUp()
        if mouseYPos and mouseYPos > scrollbar.AbsolutePosition.y then
          break
        end
        if not scrollUpButton.Active then break end
        if tick()-t > 5 then
          w = 0
        elseif tick()-t > 2 then
          w = 0.06
        end
        wait(w)
      end
    end
  end

  local function scrollDown(mouseYPos)
    if scrollDownButton.Active then
      scrollStamp = tick()
      local current = scrollStamp
      local downCon
      downCon = mouseDrag.MouseButton1Up:Connect(function()
        scrollStamp = tick()
        mouseDrag.Parent = nil
        downCon:Disconnect()
      end)
      mouseDrag.Parent = getLayerCollectorAncestor(scrollbar)
      doScrollDown()
      wait(0.2)
      local t = tick()
      local w = 0.1
      while scrollStamp == current do
        doScrollDown()
        if mouseYPos and mouseYPos < (scrollbar.AbsolutePosition.y + scrollbar.AbsoluteSize.x) then
          break
        end
        if not scrollDownButton.Active then break end
        if tick()-t > 5 then
          w = 0
        elseif tick()-t > 2 then
          w = 0.06
        end
        wait(w)
      end
    end
  end
  
  scrollbar.MouseButton1Down:Connect(function(x,y)
    if scrollbar.Active then
      scrollStamp = tick()
      local mouseOffset = y - scrollbar.AbsolutePosition.y
      if dragCon then dragCon:Disconnect() dragCon = nil end
      if upCon then upCon:Disconnect() upCon = nil end
      local prevY = y
      local reentrancyGuardMouseScroll = false
      dragCon = mouseDrag.MouseMoved:Connect(function(x,y)
        if reentrancyGuardMouseScroll then return end
        
        reentrancyGuardMouseScroll = true
          if positionScrollBar(x,y,mouseOffset) then
            recalculate()
          end
        reentrancyGuardMouseScroll = false
        
      end)
      upCon = mouseDrag.MouseButton1Up:Connect(function()
        scrollStamp = tick()
        mouseDrag.Parent = nil
        dragCon:Disconnect(); dragCon = nil
        upCon:Disconnect(); drag = nil
      end)
      mouseDrag.Parent = getLayerCollectorAncestor(scrollbar)
    end
  end)

  local scrollMouseCount = 0

  scrollUpButton.MouseButton1Down:Connect(function()
    scrollUp()
  end)
  scrollUpButton.MouseButton1Up:Connect(function()
    scrollStamp = tick()
  end)

  scrollDownButton.MouseButton1Up:Connect(function()
    scrollStamp = tick()
  end)
  scrollDownButton.MouseButton1Down:Connect(function()
     scrollDown()
  end)
    
  scrollbar.MouseButton1Up:Connect(function()
    scrollStamp = tick()
  end)
  
  local function heightCheck(instance)
    if highY and (instance.AbsolutePosition.Y + instance.AbsoluteSize.Y) > highY then
      highY = instance.AbsolutePosition.Y + instance.AbsoluteSize.Y
    elseif not highY then
      highY = instance.AbsolutePosition.Y + instance.AbsoluteSize.Y
    end
    setSliderSizeAndPosition()
  end
  
  local function highLowRecheck()
    local oldLowY = lowY
    local oldHighY = highY
    lowY = nil
    highY = nil
    resetHighLow()

    if (lowY ~= oldLowY) or (highY ~= oldHighY) then
      setSliderSizeAndPosition()
    end
  end

  local function descendantChanged(this, prop)
    if internalChange then return end
    if not this.Visible then return end

    if prop == "Size" or prop == "Position" then
      wait()
      highLowRecheck()
    end
  end

  scrollingFrame.DescendantAdded:Connect(function(instance)
    if not instance:IsA("GuiObject") then return end

    if instance.Visible then
      wait() -- wait a heartbeat for sizes to reconfig
      highLowRecheck()
    end

    descendantsChangeConMap[instance] = instance.Changed:Connect(function(prop) descendantChanged(instance, prop) end)
  end)

  scrollingFrame.DescendantRemoving:Connect(function(instance)
    if not instance:IsA("GuiObject") then return end
    if descendantsChangeConMap[instance] then
      descendantsChangeConMap[instance]:Disconnect()
      descendantsChangeConMap[instance] = nil
    end
    wait() -- wait a heartbeat for sizes to reconfig
    highLowRecheck()
  end)
  
  scrollingFrame.Changed:Connect(function(prop)
    if prop == "AbsoluteSize" then
      if not highY or not lowY then return end

      highLowRecheck()
      setSliderSizeAndPosition()
    end
  end)

  return scrollingFrame, controlFrame
end

t.CreateScrollingFrame = function(orderList,scrollStyle)
  local frame = Instance.new("Frame")
  frame.Name = "ScrollingFrame"
  frame.BackgroundTransparency = 1
  frame.Size = UDim2.new(1,0,1,0)
  
  local scrollUpButton = Instance.new("ImageButton")
  scrollUpButton.Name = "ScrollUpButton"
  scrollUpButton.BackgroundTransparency = 1
  scrollUpButton.Image = "rbxasset://textures/ui/scrollbuttonUp.png"
  scrollUpButton.Size = UDim2.new(0,17,0,17) 

  
  local scrollDownButton = Instance.new("ImageButton")
  scrollDownButton.Name = "ScrollDownButton"
  scrollDownButton.BackgroundTransparency = 1
  scrollDownButton.Image = "rbxasset://textures/ui/scrollbuttonDown.png"
  scrollDownButton.Size = UDim2.new(0,17,0,17) 
  
  local scrollbar = Instance.new("ImageButton")
  scrollbar.Name = "ScrollBar"
  scrollbar.Image = "rbxasset://textures/ui/scrollbar.png"
  scrollbar.BackgroundTransparency = 1
  scrollbar.Size = UDim2.new(0, 18, 0, 150)

  local scrollStamp = 0
    
  local scrollDrag = Instance.new("ImageButton")
  scrollDrag.Image = "https://www.roblox.com/asset/?id=61367186"
  scrollDrag.Size = UDim2.new(1, 0, 0, 16)
  scrollDrag.BackgroundTransparency = 1
  scrollDrag.Name = "ScrollDrag"
  scrollDrag.Active = true
  scrollDrag.Parent = scrollbar
  
  local mouseDrag = Instance.new("ImageButton")
  mouseDrag.Active = false
  mouseDrag.Size = UDim2.new(1.5, 0, 1.5, 0)
  mouseDrag.AutoButtonColor = false
  mouseDrag.BackgroundTransparency = 1
  mouseDrag.Name = "mouseDrag"
  mouseDrag.Position = UDim2.new(-0.25, 0, -0.25, 0)
  mouseDrag.ZIndex = 10

  local style = "simple"
  if scrollStyle and tostring(scrollStyle) then
    style = scrollStyle
  end
  
  local scrollPosition = 1
  local rowSize = 0
  local howManyDisplayed = 0
    
  local layoutGridScrollBar = function()
    howManyDisplayed = 0
    local guiObjects = {}
    if orderList then
      for i, child in ipairs(orderList) do
        if child.Parent == frame then
          table.insert(guiObjects, child)
        end
      end
    else
      local children = frame:GetChildren()
      if children then
        for i, child in ipairs(children) do 
          if child:IsA("GuiObject") then
            table.insert(guiObjects, child)
          end
        end
      end
    end
    if #guiObjects == 0 then
      scrollUpButton.Active = false
      scrollDownButton.Active = false
      scrollDrag.Active = false
      scrollPosition = 1
      return
    end

    if scrollPosition > #guiObjects then
      scrollPosition = #guiObjects
    end
    
    if scrollPosition < 1 then scrollPosition = 1 end
    
    local totalPixelsY = frame.AbsoluteSize.Y
    local pixelsRemainingY = frame.AbsoluteSize.Y
    
    local totalPixelsX  = frame.AbsoluteSize.X
    
    local xCounter = 0
    local rowSizeCounter = 0
    local setRowSize = true

    local pixelsBelowScrollbar = 0
    local pos = #guiObjects
    
    local currentRowY = 0

    pos = scrollPosition
    --count up from current scroll position to fill out grid
    while pos <= #guiObjects and pixelsBelowScrollbar < totalPixelsY do
      xCounter = xCounter + guiObjects[pos].AbsoluteSize.X
      --previous pos was the end of a row
      if xCounter >= totalPixelsX then
        pixelsBelowScrollbar = pixelsBelowScrollbar + currentRowY
        currentRowY = 0
        xCounter = guiObjects[pos].AbsoluteSize.X
      end
      if guiObjects[pos].AbsoluteSize.Y > currentRowY then
        currentRowY = guiObjects[pos].AbsoluteSize.Y
      end
      pos = pos + 1
    end
    --Count wherever current row left off
    pixelsBelowScrollbar = pixelsBelowScrollbar + currentRowY
    currentRowY = 0
    
    pos = scrollPosition - 1
    xCounter = 0
    
    --objects with varying X,Y dimensions can rarely cause minor errors
    --rechecking every new scrollPosition is necessary to avoid 100% of errors
    
    --count backwards from current scrollPosition to see if we can add more rows
    while pixelsBelowScrollbar + currentRowY < totalPixelsY and pos >= 1 do
      xCounter = xCounter + guiObjects[pos].AbsoluteSize.X
      rowSizeCounter = rowSizeCounter + 1
      if xCounter >= totalPixelsX then
        rowSize = rowSizeCounter - 1
        rowSizeCounter = 0
        xCounter = guiObjects[pos].AbsoluteSize.X
        if pixelsBelowScrollbar + currentRowY <= totalPixelsY then
          --It fits, so back up our scroll position
          pixelsBelowScrollbar = pixelsBelowScrollbar + currentRowY
          if scrollPosition <= rowSize then
            scrollPosition = 1 
            break
          else
            scrollPosition = scrollPosition - rowSize
          end
          currentRowY = 0
        else
          break
        end
      end
      
      if guiObjects[pos].AbsoluteSize.Y > currentRowY then
        currentRowY = guiObjects[pos].AbsoluteSize.Y
      end

      pos = pos - 1
    end
    
    --Do check last time if pos = 0
    if (pos == 0) and (pixelsBelowScrollbar + currentRowY <= totalPixelsY) then
      scrollPosition = 1
    end

    xCounter = 0
    --pos = scrollPosition
    rowSizeCounter = 0
    setRowSize = true
    local lastChildSize = 0
    
    local xOffset,yOffset = 0
    if guiObjects[1] then
      yOffset = math.ceil(math.floor(math.fmod(totalPixelsY,guiObjects[1].AbsoluteSize.X))/2)
      xOffset = math.ceil(math.floor(math.fmod(totalPixelsX,guiObjects[1].AbsoluteSize.Y))/2)
    end
    
    for i, child in ipairs(guiObjects) do
      if i < scrollPosition then
        child.Visible = false
      else
        if pixelsRemainingY < 0 then
          child.Visible = false
        else
          --GuiObject
          if setRowSize then rowSizeCounter = rowSizeCounter + 1 end
          if xCounter + child.AbsoluteSize.X >= totalPixelsX then
            if setRowSize then
              rowSize = rowSizeCounter - 1
              setRowSize = false
            end
            xCounter = 0
            pixelsRemainingY = pixelsRemainingY - child.AbsoluteSize.Y
          end
          child.Position = UDim2.new(child.Position.X.Scale,xCounter + xOffset, 0, totalPixelsY - pixelsRemainingY + yOffset)
          xCounter = xCounter + child.AbsoluteSize.X
          child.Visible = ((pixelsRemainingY - child.AbsoluteSize.Y) >= 0)
          if child.Visible then
            howManyDisplayed = howManyDisplayed + 1
          end
          lastChildSize = child.AbsoluteSize        
        end
      end
    end

    scrollUpButton.Active = (scrollPosition > 1)
    if lastChildSize == 0 then 
      scrollDownButton.Active = false
    else
      scrollDownButton.Active = ((pixelsRemainingY - lastChildSize.Y) < 0)
    end
    scrollDrag.Active = #guiObjects > howManyDisplayed
    scrollDrag.Visible = scrollDrag.Active
  end



  local layoutSimpleScrollBar = function()
    local guiObjects = {}  
    howManyDisplayed = 0
    
    if orderList then
      for i, child in ipairs(orderList) do
        if child.Parent == frame then
          table.insert(guiObjects, child)
        end
      end
    else
      local children = frame:GetChildren()
      if children then
        for i, child in ipairs(children) do 
          if child:IsA("GuiObject") then
            table.insert(guiObjects, child)
          end
        end
      end
    end
    if #guiObjects == 0 then
      scrollUpButton.Active = false
      scrollDownButton.Active = false
      scrollDrag.Active = false
      scrollPosition = 1
      return
    end

    if scrollPosition > #guiObjects then
      scrollPosition = #guiObjects
    end
    
    local totalPixels = frame.AbsoluteSize.Y
    local pixelsRemaining = frame.AbsoluteSize.Y

    local pixelsBelowScrollbar = 0
    local pos = #guiObjects
    while pixelsBelowScrollbar < totalPixels and pos >= 1 do
      if pos >= scrollPosition then
        pixelsBelowScrollbar = pixelsBelowScrollbar + guiObjects[pos].AbsoluteSize.Y
      else
        if pixelsBelowScrollbar + guiObjects[pos].AbsoluteSize.Y <= totalPixels then
          --It fits, so back up our scroll position
          pixelsBelowScrollbar = pixelsBelowScrollbar + guiObjects[pos].AbsoluteSize.Y
          if scrollPosition <= 1 then
            scrollPosition = 1
            break
          else
            --local ("Backing up ScrollPosition from -- " ..scrollPosition)
            scrollPosition = scrollPosition - 1
          end
        else
          break
        end
      end
      pos = pos - 1
    end

    pos = scrollPosition
    for i, child in ipairs(guiObjects) do
      if i < scrollPosition then
        child.Visible = false
      else
        if pixelsRemaining < 0 then
          child.Visible = false
        else
          --GuiObject
          child.Position = UDim2.new(child.Position.X.Scale, child.Position.X.Offset, 0, totalPixels - pixelsRemaining)
          pixelsRemaining = pixelsRemaining - child.AbsoluteSize.Y
          if  (pixelsRemaining >= 0) then
            child.Visible = true
            howManyDisplayed = howManyDisplayed + 1
          else
            child.Visible = false
          end    
        end
      end
    end
    scrollUpButton.Active = (scrollPosition > 1)
    scrollDownButton.Active = (pixelsRemaining < 0)
    scrollDrag.Active = #guiObjects > howManyDisplayed
    scrollDrag.Visible = scrollDrag.Active
  end
  
    
  local moveDragger = function()  
    local guiObjects = 0
    local children = frame:GetChildren()
    if children then
      for i, child in ipairs(children) do 
        if child:IsA("GuiObject") then
          guiObjects = guiObjects + 1
        end
      end
    end
    
    if not scrollDrag.Parent then return end
    
    local dragSizeY = scrollDrag.Parent.AbsoluteSize.y * (1/(guiObjects - howManyDisplayed + 1))
    if dragSizeY < 16 then dragSizeY = 16 end
    scrollDrag.Size = UDim2.new(scrollDrag.Size.X.Scale,scrollDrag.Size.X.Offset,scrollDrag.Size.Y.Scale,dragSizeY)

    local relativeYPos = (scrollPosition - 1)/(guiObjects - (howManyDisplayed))
    if relativeYPos > 1 then relativeYPos = 1
    elseif relativeYPos < 0 then relativeYPos = 0 end
    local absYPos = 0
    
    if relativeYPos ~= 0 then
      absYPos = (relativeYPos * scrollbar.AbsoluteSize.y) - (relativeYPos * scrollDrag.AbsoluteSize.y)
    end
    
    scrollDrag.Position = UDim2.new(scrollDrag.Position.X.Scale,scrollDrag.Position.X.Offset,scrollDrag.Position.Y.Scale,absYPos)
  end

  local reentrancyGuard = false
  local recalculate = function()
    if reentrancyGuard then
      return
    end
    reentrancyGuard = true
    wait()
    local success, err = nil
    if style == "grid" then
      success, err = pcall(function() layoutGridScrollBar() end)
    elseif style == "simple" then
      success, err = pcall(function() layoutSimpleScrollBar() end)
    end
    if not success then print(err) end
    moveDragger()
    reentrancyGuard = false
  end
  
  local doScrollUp = function()
    scrollPosition = (scrollPosition) - rowSize
    if scrollPosition < 1 then scrollPosition = 1 end
    recalculate(nil)
  end
  
  local doScrollDown = function()
    scrollPosition = (scrollPosition) + rowSize
    recalculate(nil)
  end

  local scrollUp = function(mouseYPos)
    if scrollUpButton.Active then
      scrollStamp = tick()
      local current = scrollStamp
      local upCon
      upCon = mouseDrag.MouseButton1Up:Connect(function()
        scrollStamp = tick()
        mouseDrag.Parent = nil
        upCon:Disconnect()
      end)
      mouseDrag.Parent = getLayerCollectorAncestor(scrollbar)
      doScrollUp()
      wait(0.2)
      local t = tick()
      local w = 0.1
      while scrollStamp == current do
        doScrollUp()
        if mouseYPos and mouseYPos > scrollDrag.AbsolutePosition.y then
          break
        end
        if not scrollUpButton.Active then break end
        if tick()-t > 5 then
          w = 0
        elseif tick()-t > 2 then
          w = 0.06
        end
        wait(w)
      end
    end
  end

  local scrollDown = function(mouseYPos)
    if scrollDownButton.Active then
      scrollStamp = tick()
      local current = scrollStamp
      local downCon
      downCon = mouseDrag.MouseButton1Up:Connect(function()
        scrollStamp = tick()
        mouseDrag.Parent = nil
        downCon:Disconnect()
      end)
      mouseDrag.Parent = getLayerCollectorAncestor(scrollbar)
      doScrollDown()
      wait(0.2)
      local t = tick()
      local w = 0.1
      while scrollStamp == current do
        doScrollDown()
        if mouseYPos and mouseYPos < (scrollDrag.AbsolutePosition.y + scrollDrag.AbsoluteSize.x) then
          break
        end
        if not scrollDownButton.Active then break end
        if tick()-t > 5 then
          w = 0
        elseif tick()-t > 2 then
          w = 0.06
        end
        wait(w)
      end
    end
  end
  
  local y = 0
  scrollDrag.MouseButton1Down:Connect(function(x,y)
    if scrollDrag.Active then
      scrollStamp = tick()
      local mouseOffset = y - scrollDrag.AbsolutePosition.y
      local dragCon
      local upCon
      dragCon = mouseDrag.MouseMoved:Connect(function(x,y)
        local barAbsPos = scrollbar.AbsolutePosition.y
        local barAbsSize = scrollbar.AbsoluteSize.y
        
        local dragAbsSize = scrollDrag.AbsoluteSize.y
        local barAbsOne = barAbsPos + barAbsSize - dragAbsSize
        y = y - mouseOffset
        y = y < barAbsPos and barAbsPos or y > barAbsOne and barAbsOne or y
        y = y - barAbsPos
        
        local guiObjects = 0
        local children = frame:GetChildren()
        if children then
          for i, child in ipairs(children) do 
            if child:IsA("GuiObject") then
              guiObjects = guiObjects + 1
            end
          end
        end
        
        local doublePercent = y/(barAbsSize-dragAbsSize)
        local rowDiff = rowSize
        local totalScrollCount = guiObjects - (howManyDisplayed - 1)
        local newScrollPosition = math.floor((doublePercent * totalScrollCount) + 0.5) + rowDiff
        if newScrollPosition < scrollPosition then
          rowDiff = -rowDiff
        end
        
        if newScrollPosition < 1 then
          newScrollPosition = 1
        end
        
        scrollPosition = newScrollPosition
        recalculate(nil)
      end)
      upCon = mouseDrag.MouseButton1Up:Connect(function()
        scrollStamp = tick()
        mouseDrag.Parent = nil
        dragCon:Disconnect(); dragCon = nil
        upCon:Disconnect(); drag = nil
      end)
      mouseDrag.Parent = getLayerCollectorAncestor(scrollbar)
    end
  end)

  local scrollMouseCount = 0

  scrollUpButton.MouseButton1Down:Connect(
    function()
      scrollUp()
    end)
  scrollUpButton.MouseButton1Up:Connect(function()
    scrollStamp = tick()
  end)


  scrollDownButton.MouseButton1Up:Connect(function()
    scrollStamp = tick()
  end)
  scrollDownButton.MouseButton1Down:Connect(
    function()
      scrollDown()  
    end)
    
  scrollbar.MouseButton1Up:Connect(function()
    scrollStamp = tick()
  end)
  scrollbar.MouseButton1Down:Connect(
    function(x,y)
      if y > (scrollDrag.AbsoluteSize.y + scrollDrag.AbsolutePosition.y) then
        scrollDown(y)
      elseif y < (scrollDrag.AbsolutePosition.y) then
        scrollUp(y)
      end
    end)


  frame.ChildAdded:Connect(function()
    recalculate(nil)
  end)

  frame.ChildRemoved:Connect(function()
    recalculate(nil)
  end)
  
  frame.Changed:Connect(
    function(prop)
      if prop == "AbsoluteSize" then
        --Wait a heartbeat for it to sync in
        recalculate(nil)
      end
    end)
  frame.AncestryChanged:Connect(function() recalculate(nil) end)

  return frame, scrollUpButton, scrollDownButton, recalculate, scrollbar
end
local function binaryGrow(min, max, fits)
  if min > max then
    return min
  end
  local biggestLegal = min

  while min <= max do
    local mid = min + math.floor((max - min) / 2)
    if fits(mid) and (biggestLegal == nil or biggestLegal < mid) then
      biggestLegal = mid
      
      --Try growing
      min = mid + 1
    else
      --Doesn't fit, shrink
      max = mid - 1
    end
  end
  return biggestLegal
end


local function binaryShrink(min, max, fits)
  if min > max then
    return min
  end
  local smallestLegal = max

  while min <= max do
    local mid = min + math.floor((max - min) / 2)
    if fits(mid) and (smallestLegal == nil or smallestLegal > mid) then
      smallestLegal = mid
      
      --It fits, shrink
      max = mid - 1      
    else
      --Doesn't fit, grow
      min = mid + 1
    end
  end
  return smallestLegal
end


local function getGuiOwner(instance)
  while instance ~= nil do
    if instance:IsA("ScreenGui") or instance:IsA("BillboardGui")  then
      return instance
    end
    instance = instance.Parent
  end
  return nil
end

t.AutoTruncateTextObject = function(textLabel)
  local text = textLabel.Text

  local fullLabel = textLabel:Clone()
  fullLabel.Name = "Full" .. textLabel.Name 
  fullLabel.BorderSizePixel = 0
  fullLabel.BackgroundTransparency = 0
  fullLabel.Text = text
  fullLabel.TextXAlignment = Enum.TextXAlignment.Center
  fullLabel.Position = UDim2.new(0,-3,0,0)
  fullLabel.Size = UDim2.new(0,100,1,0)
  fullLabel.Visible = false
  fullLabel.Parent = textLabel

  local shortText = nil
  local mouseEnterConnection = nil
  local mouseLeaveConnection= nil

  local checkForResize = function()
    if getGuiOwner(textLabel) == nil then
      return
    end
    textLabel.Text = text
    if textLabel.TextFits then 
      --Tear down the rollover if it is active
      if mouseEnterConnection then
        mouseEnterConnection:Disconnect()
        mouseEnterConnection = nil
      end
      if mouseLeaveConnection then
        mouseLeaveConnection:Disconnect()
        mouseLeaveConnection = nil
      end
    else
      local len = string.len(text)
      textLabel.Text = text .. "~"

      --Shrink the text
      local textSize = binaryGrow(0, len, 
        function(pos)
          if pos == 0 then
            textLabel.Text = "~"
          else
            textLabel.Text = string.sub(text, 1, pos) .. "~"
          end
          return textLabel.TextFits
        end)
      shortText = string.sub(text, 1, textSize) .. "~"
      textLabel.Text = shortText
      
      --Make sure the fullLabel fits
      if not fullLabel.TextFits then
        --Already too small, grow it really bit to start
        fullLabel.Size = UDim2.new(0, 10000, 1, 0)
      end
      
      --Okay, now try to binary shrink it back down
      local fullLabelSize = binaryShrink(textLabel.AbsoluteSize.X,fullLabel.AbsoluteSize.X, 
        function(size)
          fullLabel.Size = UDim2.new(0, size, 1, 0)
          return fullLabel.TextFits
        end)
      fullLabel.Size = UDim2.new(0,fullLabelSize+6,1,0)

      --Now setup the rollover effects, if they are currently off
      if mouseEnterConnection == nil then
        mouseEnterConnection = textLabel.MouseEnter:Connect(
          function()
            fullLabel.ZIndex = textLabel.ZIndex + 1
            fullLabel.Visible = true
            --textLabel.Text = ""
          end)
      end
      if mouseLeaveConnection == nil then
        mouseLeaveConnection = textLabel.MouseLeave:Connect(
          function()
            fullLabel.Visible = false
            --textLabel.Text = shortText
          end)
      end
    end
  end
  textLabel.AncestryChanged:Connect(checkForResize)
  textLabel.Changed:Connect(
    function(prop) 
      if prop == "AbsoluteSize" then 
        checkForResize()   
      end 
    end)

  checkForResize()

  local function changeText(newText)
    text = newText
    fullLabel.Text = text
    checkForResize()
  end

  return textLabel, changeText
end

local function TransitionTutorialPages(fromPage, toPage, transitionFrame, currentPageValue)  
  if fromPage then
    fromPage.Visible = false
    if transitionFrame.Visible == false then
      transitionFrame.Size = fromPage.Size
      transitionFrame.Position = fromPage.Position
    end
  else
    if transitionFrame.Visible == false then
      transitionFrame.Size = UDim2.new(0.0,50,0.0,50)
      transitionFrame.Position = UDim2.new(0.5,-25,0.5,-25)
    end
  end
  transitionFrame.Visible = true
  currentPageValue.Value = nil

  local newSize, newPosition
  if toPage then
    --Make it visible so it resizes
    toPage.Visible = true

    newSize = toPage.Size
    newPosition = toPage.Position

    toPage.Visible = false
  else
    newSize = UDim2.new(0.0,50,0.0,50)
    newPosition = UDim2.new(0.5,-25,0.5,-25)
  end
  transitionFrame:TweenSizeAndPosition(newSize, newPosition, Enum.EasingDirection.InOut, Enum.EasingStyle.Quad, 0.3, true,
    function(state)
      if state == Enum.TweenStatus.Completed then
        transitionFrame.Visible = false
        if toPage then
          toPage.Visible = true
          currentPageValue.Value = toPage
        end
      end
    end)
end

t.CreateTutorial = function(name, tutorialKey, createButtons)
  local frame = Instance.new("Frame")
  frame.Name = "Tutorial-" .. name
  frame.BackgroundTransparency = 1
  frame.Size = UDim2.new(0.6, 0, 0.6, 0)
  frame.Position = UDim2.new(0.2, 0, 0.2, 0)

  local transitionFrame = Instance.new("Frame")
  transitionFrame.Name = "TransitionFrame"
  transitionFrame.Style = Enum.FrameStyle.RobloxRound
  transitionFrame.Size = UDim2.new(0.6, 0, 0.6, 0)
  transitionFrame.Position = UDim2.new(0.2, 0, 0.2, 0)
  transitionFrame.Visible = false
  transitionFrame.Parent = frame

  local currentPageValue = Instance.new("ObjectValue")
  currentPageValue.Name = "CurrentTutorialPage"
  currentPageValue.Value = nil
  currentPageValue.Parent = frame

  local boolValue = Instance.new("BoolValue")
  boolValue.Name = "Buttons"
  boolValue.Value = createButtons
  boolValue.Parent = frame

  local pages = Instance.new("Frame")
  pages.Name = "Pages"
  pages.BackgroundTransparency = 1
  pages.Size = UDim2.new(1,0,1,0)
  pages.Parent = frame

  local function getVisiblePageAndHideOthers()
    local visiblePage = nil
    local children = pages:GetChildren()
    if children then
      for i,child in ipairs(children) do
        if child.Visible then
          if visiblePage then
            child.Visible = false
          else
            visiblePage = child
          end
        end
      end
    end
    return visiblePage
  end

  local showTutorial = function(alwaysShow)
    if alwaysShow or UserSettings().GameSettings:GetTutorialState(tutorialKey) == false then
      print("Showing tutorial-",tutorialKey)
      local currentTutorialPage = getVisiblePageAndHideOthers()

      local firstPage = pages:FindFirstChild("TutorialPage1")
      if firstPage then
        TransitionTutorialPages(currentTutorialPage, firstPage, transitionFrame, currentPageValue)  
      else
        error("Could not find TutorialPage1")
      end
    end
  end

  local dismissTutorial = function()
    local currentTutorialPage = getVisiblePageAndHideOthers()

    if currentTutorialPage then
      TransitionTutorialPages(currentTutorialPage, nil, transitionFrame, currentPageValue)
    end

    UserSettings().GameSettings:SetTutorialState(tutorialKey, true)
  end

  local gotoPage = function(pageNum)
    local page = pages:FindFirstChild("TutorialPage" .. pageNum)
    local currentTutorialPage = getVisiblePageAndHideOthers()
    TransitionTutorialPages(currentTutorialPage, page, transitionFrame, currentPageValue)
  end

  return frame, showTutorial, dismissTutorial, gotoPage
end 

local function CreateBasicTutorialPage(name, handleResize, skipTutorial, giveDoneButton)
  local frame = Instance.new("Frame")
  frame.Name = "TutorialPage"
  frame.Style = Enum.FrameStyle.RobloxRound
  frame.Size = UDim2.new(0.6, 0, 0.6, 0)
  frame.Position = UDim2.new(0.2, 0, 0.2, 0)
  frame.Visible = false
  
  local frameHeader = Instance.new("TextLabel")
  frameHeader.Name = "Header"
  frameHeader.Text = name
  frameHeader.BackgroundTransparency = 1
  frameHeader.FontSize = Enum.FontSize.Size24
  frameHeader.Font = Enum.Font.ArialBold
  frameHeader.TextColor3 = Color3.new(1,1,1)
  frameHeader.TextXAlignment = Enum.TextXAlignment.Center
  frameHeader.TextWrap = true
  frameHeader.Size = UDim2.new(1,-55, 0, 22)
  frameHeader.Position = UDim2.new(0,0,0,0)
  frameHeader.Parent = frame

  local skipButton = Instance.new("ImageButton")
  skipButton.Name = "SkipButton"
  skipButton.AutoButtonColor = false
  skipButton.BackgroundTransparency = 1
  skipButton.Image = "rbxasset://textures/ui/closeButton.png"
  skipButton.MouseButton1Click:Connect(function()
    skipTutorial()
  end)
  skipButton.MouseEnter:Connect(function()
    skipButton.Image = "rbxasset://textures/ui/closeButton_dn.png"
  end)
  skipButton.MouseLeave:Connect(function()
    skipButton.Image = "rbxasset://textures/ui/closeButton.png"
  end)
  skipButton.Size = UDim2.new(0, 25, 0, 25)
  skipButton.Position = UDim2.new(1, -25, 0, 0)
  skipButton.Parent = frame
  
  
  if giveDoneButton then
    local doneButton = Instance.new("TextButton")
    doneButton.Name = "DoneButton"
    doneButton.Style = Enum.ButtonStyle.RobloxButtonDefault
    doneButton.Text = "Done"
    doneButton.TextColor3 = Color3.new(1,1,1)
    doneButton.Font = Enum.Font.ArialBold
    doneButton.FontSize = Enum.FontSize.Size18
    doneButton.Size = UDim2.new(0,100,0,50)
    doneButton.Position = UDim2.new(0.5,-50,1,-50)
    
    if skipTutorial then
      doneButton.MouseButton1Click:Connect(function() skipTutorial() end)
    end
    
    doneButton.Parent = frame
  end

  local innerFrame = Instance.new("Frame")
  innerFrame.Name = "ContentFrame"
  innerFrame.BackgroundTransparency = 1
  innerFrame.Position = UDim2.new(0,0,0,25)
  innerFrame.Parent = frame

  local nextButton = Instance.new("TextButton")
  nextButton.Name = "NextButton"
  nextButton.Text = "Next"
  nextButton.TextColor3 = Color3.new(1,1,1)
  nextButton.Font = Enum.Font.Arial
  nextButton.FontSize = Enum.FontSize.Size18
  nextButton.Style = Enum.ButtonStyle.RobloxButtonDefault
  nextButton.Size = UDim2.new(0,80, 0, 32)
  nextButton.Position = UDim2.new(0.5, 5, 1, -32)
  nextButton.Active = false
  nextButton.Visible = false
  nextButton.Parent = frame

  local prevButton = Instance.new("TextButton")
  prevButton.Name = "PrevButton"
  prevButton.Text = "Previous"
  prevButton.TextColor3 = Color3.new(1,1,1)
  prevButton.Font = Enum.Font.Arial
  prevButton.FontSize = Enum.FontSize.Size18
  prevButton.Style = Enum.ButtonStyle.RobloxButton
  prevButton.Size = UDim2.new(0,80, 0, 32)
  prevButton.Position = UDim2.new(0.5, -85, 1, -32)
  prevButton.Active = false
  prevButton.Visible = false
  prevButton.Parent = frame

  if giveDoneButton then
    innerFrame.Size = UDim2.new(1,0,1,-75)
  else
    innerFrame.Size = UDim2.new(1,0,1,-22)
  end

  local parentConnection = nil

  local function basicHandleResize()
    if frame.Visible and frame.Parent then
      local maxSize = math.min(frame.Parent.AbsoluteSize.X, frame.Parent.AbsoluteSize.Y)
      handleResize(200,maxSize)
    end
  end

  frame.Changed:Connect(
    function(prop)
      if prop == "Parent" then
        if parentConnection ~= nil then
          parentConnection:Disconnect()
          parentConnection = nil
        end
        if frame.Parent and frame.Parent:IsA("GuiObject") then
          parentConnection = frame.Parent.Changed:Connect(
            function(parentProp)
              if parentProp == "AbsoluteSize" then
                wait()
                basicHandleResize()
              end
            end)
          basicHandleResize()
        end
      end

      if prop == "Visible" then 
        basicHandleResize()
      end
    end)

  return frame, innerFrame
end

t.CreateTextTutorialPage = function(name, text, skipTutorialFunc)
  local frame = nil
  local contentFrame = nil

  local textLabel = Instance.new("TextLabel")
  textLabel.BackgroundTransparency = 1
  textLabel.TextColor3 = Color3.new(1,1,1)
  textLabel.Text = text
  textLabel.TextWrap = true
  textLabel.TextXAlignment = Enum.TextXAlignment.Left
  textLabel.TextYAlignment = Enum.TextYAlignment.Center
  textLabel.Font = Enum.Font.Arial
  textLabel.FontSize = Enum.FontSize.Size14
  textLabel.Size = UDim2.new(1,0,1,0)

  local function handleResize(minSize, maxSize)
    size = binaryShrink(minSize, maxSize,
      function(size)
        frame.Size = UDim2.new(0, size, 0, size)
        return textLabel.TextFits
      end)
    frame.Size = UDim2.new(0, size, 0, size)
    frame.Position = UDim2.new(0.5, -size/2, 0.5, -size/2)
  end

  frame, contentFrame = CreateBasicTutorialPage(name, handleResize, skipTutorialFunc)
  textLabel.Parent = contentFrame

  return frame
end

t.CreateImageTutorialPage = function(name, imageAsset, x, y, skipTutorialFunc, giveDoneButton)
  local frame = nil
  local contentFrame = nil

  local imageLabel = Instance.new("ImageLabel")
  imageLabel.BackgroundTransparency = 1
  imageLabel.Image = imageAsset
  imageLabel.Size = UDim2.new(0,x,0,y)
  imageLabel.Position = UDim2.new(0.5,-x/2,0.5,-y/2)

  local function handleResize(minSize, maxSize)
    size = binaryShrink(minSize, maxSize,
      function(size)
        return size >= x and size >= y
      end)
    if size >= x and size >= y then
      imageLabel.Size = UDim2.new(0,x, 0,y)
      imageLabel.Position = UDim2.new(0.5,-x/2, 0.5, -y/2)
    else
      if x > y then
        --X is limiter, so 
        imageLabel.Size = UDim2.new(1,0,y/x,0)
        imageLabel.Position = UDim2.new(0,0, 0.5 - (y/x)/2, 0)
      else
        --Y is limiter
        imageLabel.Size = UDim2.new(x/y,0,1, 0)
        imageLabel.Position = UDim2.new(0.5-(x/y)/2, 0, 0, 0)
      end
    end
    size = size + 50
    frame.Size = UDim2.new(0, size, 0, size)
    frame.Position = UDim2.new(0.5, -size/2, 0.5, -size/2)
  end

  frame, contentFrame = CreateBasicTutorialPage(name, handleResize, skipTutorialFunc, giveDoneButton)
  imageLabel.Parent = contentFrame

  return frame
end

t.AddTutorialPage = function(tutorial, tutorialPage)
  local transitionFrame = tutorial.TransitionFrame
  local currentPageValue = tutorial.CurrentTutorialPage

  if not tutorial.Buttons.Value then
    tutorialPage.NextButton.Parent = nil
    tutorialPage.PrevButton.Parent = nil
  end

  local children = tutorial.Pages:GetChildren()
  if children and #children > 0 then
    tutorialPage.Name = "TutorialPage" .. (#children+1)
    local previousPage = children[#children]
    if not previousPage:IsA("GuiObject") then
      error("All elements under Pages must be GuiObjects")
    end

    if tutorial.Buttons.Value then
      if previousPage.NextButton.Active then
        error("NextButton already Active on previousPage, please only add pages with RbxGui.AddTutorialPage function")
      end
      previousPage.NextButton.MouseButton1Click:Connect(
        function()
          TransitionTutorialPages(previousPage, tutorialPage, transitionFrame, currentPageValue)
        end)
      previousPage.NextButton.Active = true
      previousPage.NextButton.Visible = true

      if tutorialPage.PrevButton.Active then
        error("PrevButton already Active on tutorialPage, please only add pages with RbxGui.AddTutorialPage function")
      end
      tutorialPage.PrevButton.MouseButton1Click:Connect(
        function()
          TransitionTutorialPages(tutorialPage, previousPage, transitionFrame, currentPageValue)
        end)
      tutorialPage.PrevButton.Active = true
      tutorialPage.PrevButton.Visible = true
    end

    tutorialPage.Parent = tutorial.Pages
  else
    --First child
    tutorialPage.Name = "TutorialPage1"
    tutorialPage.Parent = tutorial.Pages
  end
end 

t.CreateSetPanel = function(userIdsForSets, objectSelected, dialogClosed, size, position, showAdminCategories, useAssetVersionId)

  if not userIdsForSets then
    error("CreateSetPanel: userIdsForSets (first arg) is nil, should be a table of number ids")
  end
  if type(userIdsForSets) ~= "table" and type(userIdsForSets) ~= "userdata" then
    error("CreateSetPanel: userIdsForSets (first arg) is of type " ..type(userIdsForSets) .. ", should be of type table or userdata")
  end
  if not objectSelected then
    error("CreateSetPanel: objectSelected (second arg) is nil, should be a callback function!")
  end
  if type(objectSelected) ~= "function" then
    error("CreateSetPanel: objectSelected (second arg) is of type " .. type(objectSelected) .. ", should be of type function!")
  end
  if dialogClosed and type(dialogClosed) ~= "function" then
    error("CreateSetPanel: dialogClosed (third arg) is of type " .. type(dialogClosed) .. ", should be of type function!")
  end
  
  if showAdminCategories == nil then -- by default, don't show beta sets
    showAdminCategories = false
  end

  local arrayPosition = 1
  local insertButtons = {}
  local insertButtonCons = {}
  local contents = nil
  local setGui = nil

  -- used for water selections
  local waterForceDirection = "NegX"
  local waterForce = "None"
  local waterGui, waterTypeChangedEvent = nil
  
  local Data = {}
  Data.CurrentCategory = nil
  Data.Category = {}
  local SetCache = {}
  
  local userCategoryButtons = nil
  
  local buttonWidth = 64
  local buttonHeight = buttonWidth
  
  local SmallThumbnailUrl = nil
  local LargeThumbnailUrl = nil
  local BaseUrl = game:GetService("ContentProvider").BaseUrl:lower()
  local AssetGameUrl = string.gsub(BaseUrl, "www", "assetgame")
  
  if useAssetVersionId then
    LargeThumbnailUrl = AssetGameUrl .. "Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&assetversionid="
    SmallThumbnailUrl = AssetGameUrl .. "Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=75&ht=75&assetversionid="
  else
    LargeThumbnailUrl = AssetGameUrl .. "Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=420&ht=420&aid="
    SmallThumbnailUrl = AssetGameUrl .. "Game/Tools/ThumbnailAsset.ashx?fmt=png&wd=75&ht=75&aid="
  end
    
  local function drillDownSetZIndex(parent, index)
    local children = parent:GetChildren()
    for i = 1, #children do
      if children[i]:IsA("GuiObject") then
        children[i].ZIndex = index
      end
      drillDownSetZIndex(children[i], index)
    end
  end
  
  -- for terrain stamping
  local currTerrainDropDownFrame = nil
  local terrainShapes = {"Block","Vertical Ramp","Corner Wedge","Inverse Corner Wedge","Horizontal Ramp","Auto-Wedge"}
  local terrainShapeMap = {}
  for i = 1, #terrainShapes do
    terrainShapeMap[terrainShapes[i]] = i - 1
  end  
  terrainShapeMap[terrainShapes[#terrainShapes]] = 6

  local function createWaterGui()
    local waterForceDirections = {"NegX","X","NegY","Y","NegZ","Z"}
    local waterForces = {"None", "Small", "Medium", "Strong", "Max"}

    local waterFrame = Instance.new("Frame")
    waterFrame.Name = "WaterFrame"
    waterFrame.Style = Enum.FrameStyle.RobloxSquare
    waterFrame.Size = UDim2.new(0,150,0,110)
    waterFrame.Visible = false

    local waterForceLabel = Instance.new("TextLabel")
    waterForceLabel.Name = "WaterForceLabel"
    waterForceLabel.BackgroundTransparency = 1
    waterForceLabel.Size = UDim2.new(1,0,0,12)
    waterForceLabel.Font = Enum.Font.ArialBold
    waterForceLabel.FontSize = Enum.FontSize.Size12
    waterForceLabel.TextColor3 = Color3.new(1,1,1)
    waterForceLabel.TextXAlignment = Enum.TextXAlignment.Left
    waterForceLabel.Text = "Water Force"
    waterForceLabel.Parent = waterFrame

    local waterForceDirLabel = waterForceLabel:Clone()
    waterForceDirLabel.Name = "WaterForceDirectionLabel"
    waterForceDirLabel.Text = "Water Force Direction"
    waterForceDirLabel.Position = UDim2.new(0,0,0,50)
    waterForceDirLabel.Parent = waterFrame

    local waterTypeChangedEvent = Instance.new("BindableEvent")
    waterTypeChangedEvent.Name = "WaterTypeChangedEvent"
    waterTypeChangedEvent.Parent = waterFrame

    local waterForceDirectionSelectedFunc = function(newForceDirection)
      waterForceDirection = newForceDirection
      waterTypeChangedEvent:Fire({waterForce, waterForceDirection})
    end
    local waterForceSelectedFunc = function(newForce)
      waterForce = newForce
      waterTypeChangedEvent:Fire({waterForce, waterForceDirection})
    end

    local waterForceDirectionDropDown, forceWaterDirectionSelection = t.CreateDropDownMenu(waterForceDirections, waterForceDirectionSelectedFunc)
    waterForceDirectionDropDown.Size = UDim2.new(1,0,0,25)
    waterForceDirectionDropDown.Position = UDim2.new(0,0,1,3)
    forceWaterDirectionSelection("NegX")
    waterForceDirectionDropDown.Parent = waterForceDirLabel

    local waterForceDropDown, forceWaterForceSelection = t.CreateDropDownMenu(waterForces, waterForceSelectedFunc)
    forceWaterForceSelection("None")
    waterForceDropDown.Size = UDim2.new(1,0,0,25)
    waterForceDropDown.Position = UDim2.new(0,0,1,3)
    waterForceDropDown.Parent = waterForceLabel

    return waterFrame, waterTypeChangedEvent
  end

  -- Helper Function that contructs gui elements
  local function createSetGui()
  
    local setGui = Instance.new("ScreenGui")
    setGui.Name = "SetGui"
    
    local setPanel = Instance.new("Frame")
    setPanel.Name = "SetPanel"
    setPanel.Active = true
    setPanel.BackgroundTransparency = 1
    if position then
      setPanel.Position = position
    else
      setPanel.Position = UDim2.new(0.2, 29, 0.1, 24)
    end
    if size then
      setPanel.Size = size
    else
      setPanel.Size = UDim2.new(0.6, -58, 0.64, 0)
    end
    setPanel.Style = Enum.FrameStyle.RobloxRound
    setPanel.ZIndex = 6
    setPanel.Parent = setGui
    
      -- Children of SetPanel
      local itemPreview = Instance.new("Frame")
      itemPreview.Name = "ItemPreview"
      itemPreview.BackgroundTransparency = 1
      itemPreview.Position = UDim2.new(0.8,5,0.085,0)
      itemPreview.Size = UDim2.new(0.21,0,0.9,0)
      itemPreview.ZIndex = 6
      itemPreview.Parent = setPanel
      
        -- Children of ItemPreview
        local textPanel = Instance.new("Frame")
        textPanel.Name = "TextPanel"
        textPanel.BackgroundTransparency = 1
        textPanel.Position = UDim2.new(0,0,0.45,0)
        textPanel.Size = UDim2.new(1,0,0.55,0)
        textPanel.ZIndex = 6
        textPanel.Parent = itemPreview
          
          -- Children of TextPanel
          local rolloverText = Instance.new("TextLabel")
          rolloverText.Name = "RolloverText"
          rolloverText.BackgroundTransparency = 1
          rolloverText.Size = UDim2.new(1,0,0,48)
          rolloverText.ZIndex = 6
          rolloverText.Font = Enum.Font.ArialBold
          rolloverText.FontSize = Enum.FontSize.Size24
          rolloverText.Text = ""
          rolloverText.TextColor3 = Color3.new(1,1,1)
          rolloverText.TextWrap = true
          rolloverText.TextXAlignment = Enum.TextXAlignment.Left
          rolloverText.TextYAlignment = Enum.TextYAlignment.Top
          rolloverText.Parent = textPanel
          
        local largePreview = Instance.new("ImageLabel")
        largePreview.Name = "LargePreview"
        largePreview.BackgroundTransparency = 1
        largePreview.Image = ""
        largePreview.Size = UDim2.new(1,0,0,170)
        largePreview.ZIndex = 6
        largePreview.Parent = itemPreview
        
      local sets = Instance.new("Frame")
      sets.Name = "Sets"
      sets.BackgroundTransparency = 1
      sets.Position = UDim2.new(0,0,0,5)
      sets.Size = UDim2.new(0.23,0,1,-5)
      sets.ZIndex = 6
      sets.Parent = setPanel
      
        -- Children of Sets
        local line = Instance.new("Frame")
        line.Name = "Line"
        line.BackgroundColor3 = Color3.new(1,1,1)
        line.BackgroundTransparency = 0.7
        line.BorderSizePixel = 0
        line.Position = UDim2.new(1,-3,0.06,0)
        line.Size = UDim2.new(0,3,0.9,0)
        line.ZIndex = 6
        line.Parent = sets
        
        local setsLists, controlFrame = t.CreateTrueScrollingFrame()
        setsLists.Size = UDim2.new(1,-6,0.94,0)
        setsLists.Position = UDim2.new(0,0,0.06,0)
        setsLists.BackgroundTransparency = 1
        setsLists.Name = "SetsLists"
        setsLists.ZIndex = 6
        setsLists.Parent = sets
        drillDownSetZIndex(controlFrame, 7)
          
        local setsHeader = Instance.new("TextLabel")
        setsHeader.Name = "SetsHeader"
        setsHeader.BackgroundTransparency = 1
        setsHeader.Size = UDim2.new(0,47,0,24)
        setsHeader.ZIndex = 6
        setsHeader.Font = Enum.Font.ArialBold
        setsHeader.FontSize = Enum.FontSize.Size24
        setsHeader.Text = "Sets"
        setsHeader.TextColor3 = Color3.new(1,1,1)
        setsHeader.TextXAlignment = Enum.TextXAlignment.Left
        setsHeader.TextYAlignment = Enum.TextYAlignment.Top
        setsHeader.Parent = sets
      
      local cancelButton = Instance.new("TextButton")
      cancelButton.Name = "CancelButton"
      cancelButton.Position = UDim2.new(1,-32,0,-2)
      cancelButton.Size = UDim2.new(0,34,0,34)
      cancelButton.Style = Enum.ButtonStyle.RobloxButtonDefault
      cancelButton.ZIndex = 6
      cancelButton.Text = ""
      cancelButton.Modal = true
      cancelButton.Parent = setPanel
      
        -- Children of Cancel Button
        local cancelImage = Instance.new("ImageLabel")
        cancelImage.Name = "CancelImage"
        cancelImage.BackgroundTransparency = 1
        cancelImage.Image = "https://www.roblox.com/asset/?id=54135717"
        cancelImage.Position = UDim2.new(0,-2,0,-2)
        cancelImage.Size = UDim2.new(0,16,0,16)
        cancelImage.ZIndex = 6
        cancelImage.Parent = cancelButton
          
    return setGui
  end
  
  local function createSetButton(text)
    local setButton = Instance.new("TextButton")
    
    if text then setButton.Text = text
    else setButton.Text = "" end
    
    setButton.AutoButtonColor = false
    setButton.BackgroundTransparency = 1
    setButton.BackgroundColor3 = Color3.new(1,1,1)
    setButton.BorderSizePixel = 0
    setButton.Size = UDim2.new(1,-5,0,18)
    setButton.ZIndex = 6
    setButton.Visible = false
    setButton.Font = Enum.Font.Arial
    setButton.FontSize = Enum.FontSize.Size18
    setButton.TextColor3 = Color3.new(1,1,1)
    setButton.TextXAlignment = Enum.TextXAlignment.Left
    
    return setButton
  end
  
  local function buildSetButton(name, setId, setImageId, i,  count)
    local button = createSetButton(name)
    button.Text = name
    button.Name = "SetButton"
    button.Visible = true
    
    local setValue = Instance.new("IntValue")
    setValue.Name = "SetId"
    setValue.Value = setId
    setValue.Parent = button

    local setName = Instance.new("StringValue")
    setName.Name = "SetName"
    setName.Value = name
    setName.Parent = button

    return button
  end
  
  local function processCategory(sets)
    local setButtons = {}
    local numSkipped = 0
    for i = 1, #sets do
      if not showAdminCategories and sets[i].Name == "Beta" then
        numSkipped = numSkipped + 1
      else
        setButtons[i - numSkipped] = buildSetButton(sets[i].Name, sets[i].CategoryId, sets[i].ImageAssetId, i - numSkipped, #sets)
      end
    end
    return setButtons
  end
  
  local function handleResize()
    wait() -- neccessary to insure heartbeat happened
    
    local itemPreview = setGui.SetPanel.ItemPreview
    
    itemPreview.LargePreview.Size = UDim2.new(1,0,0,itemPreview.AbsoluteSize.X)
    itemPreview.LargePreview.Position = UDim2.new(0.5,-itemPreview.LargePreview.AbsoluteSize.X/2,0,0)
    itemPreview.TextPanel.Position = UDim2.new(0,0,0,itemPreview.LargePreview.AbsoluteSize.Y)
    itemPreview.TextPanel.Size = UDim2.new(1,0,0,itemPreview.AbsoluteSize.Y - itemPreview.LargePreview.AbsoluteSize.Y)
  end
  
  local function makeInsertAssetButton()
    local insertAssetButtonExample = Instance.new("Frame")
    insertAssetButtonExample.Name = "InsertAssetButtonExample"
    insertAssetButtonExample.Position = UDim2.new(0,128,0,64)
    insertAssetButtonExample.Size = UDim2.new(0,64,0,64)
    insertAssetButtonExample.BackgroundTransparency = 1
    insertAssetButtonExample.ZIndex = 6
    insertAssetButtonExample.Visible = false

    local assetId = Instance.new("IntValue")
    assetId.Name = "AssetId"
    assetId.Value = 0
    assetId.Parent = insertAssetButtonExample
    
    local assetName = Instance.new("StringValue")
    assetName.Name = "AssetName"
    assetName.Value = ""
    assetName.Parent = insertAssetButtonExample

    local button = Instance.new("TextButton")
    button.Name = "Button"
    button.Text = ""
    button.Style = Enum.ButtonStyle.RobloxButton
    button.Position = UDim2.new(0.025,0,0.025,0)
    button.Size = UDim2.new(0.95,0,0.95,0)
    button.ZIndex = 6
    button.Parent = insertAssetButtonExample

    local buttonImage = Instance.new("ImageLabel")
    buttonImage.Name = "ButtonImage"
    buttonImage.Image = ""
    buttonImage.Position = UDim2.new(0,-7,0,-7)
    buttonImage.Size = UDim2.new(1,14,1,14)
    buttonImage.BackgroundTransparency = 1
    buttonImage.ZIndex = 7
    buttonImage.Parent = button

    local configIcon = buttonImage:clone()
    configIcon.Name = "ConfigIcon"
    configIcon.Visible = false
    configIcon.Position = UDim2.new(1,-23,1,-24)
    configIcon.Size = UDim2.new(0,16,0,16)
    configIcon.Image = ""
    configIcon.ZIndex = 6
    configIcon.Parent = insertAssetButtonExample
    
    return insertAssetButtonExample
  end
  
  local function showLargePreview(insertButton)
    if insertButton:FindFirstChild("AssetId") then
      delay(0,function()
        game:GetService("ContentProvider"):Preload(LargeThumbnailUrl .. tostring(insertButton.AssetId.Value))
        setGui.SetPanel.ItemPreview.LargePreview.Image = LargeThumbnailUrl .. tostring(insertButton.AssetId.Value)
      end)
    end
    if insertButton:FindFirstChild("AssetName") then
      setGui.SetPanel.ItemPreview.TextPanel.RolloverText.Text = insertButton.AssetName.Value
    end
  end
  
  local function selectTerrainShape(shape)
    if currTerrainDropDownFrame then
      objectSelected(tostring(currTerrainDropDownFrame.AssetName.Value), tonumber(currTerrainDropDownFrame.AssetId.Value), shape)
    end
  end
  
  local function createTerrainTypeButton(name, parent)
    local dropDownTextButton = Instance.new("TextButton")
    dropDownTextButton.Name = name .. "Button"
    dropDownTextButton.Font = Enum.Font.ArialBold
    dropDownTextButton.FontSize = Enum.FontSize.Size14
    dropDownTextButton.BorderSizePixel = 0
    dropDownTextButton.TextColor3 = Color3.new(1,1,1)
    dropDownTextButton.Text = name
    dropDownTextButton.TextXAlignment = Enum.TextXAlignment.Left
    dropDownTextButton.BackgroundTransparency = 1
    dropDownTextButton.ZIndex = parent.ZIndex + 1
    dropDownTextButton.Size = UDim2.new(0,parent.Size.X.Offset - 2,0,16)
    dropDownTextButton.Position = UDim2.new(0,1,0,0)

    dropDownTextButton.MouseEnter:Connect(function()
      dropDownTextButton.BackgroundTransparency = 0
      dropDownTextButton.TextColor3 = Color3.new(0,0,0)
    end)

    dropDownTextButton.MouseLeave:Connect(function()
      dropDownTextButton.BackgroundTransparency = 1
      dropDownTextButton.TextColor3 = Color3.new(1,1,1)
    end)

    dropDownTextButton.MouseButton1Click:Connect(function()
      dropDownTextButton.BackgroundTransparency = 1
      dropDownTextButton.TextColor3 = Color3.new(1,1,1)
      if dropDownTextButton.Parent and dropDownTextButton.Parent:IsA("GuiObject") then
        dropDownTextButton.Parent.Visible = false
      end
      selectTerrainShape(terrainShapeMap[dropDownTextButton.Text])
    end)

    return dropDownTextButton
  end
  
  local function createTerrainDropDownMenu(zIndex)
    local dropDown = Instance.new("Frame")
    dropDown.Name = "TerrainDropDown"
    dropDown.BackgroundColor3 = Color3.new(0,0,0)
    dropDown.BorderColor3 = Color3.new(1,0,0)
    dropDown.Size = UDim2.new(0,200,0,0)
    dropDown.Visible = false
    dropDown.ZIndex = zIndex
    dropDown.Parent = setGui

    for i = 1, #terrainShapes do
      local shapeButton = createTerrainTypeButton(terrainShapes[i],dropDown)
      shapeButton.Position = UDim2.new(0,1,0,(i - 1) * (shapeButton.Size.Y.Offset))
      shapeButton.Parent = dropDown
      dropDown.Size = UDim2.new(0,200,0,dropDown.Size.Y.Offset + (shapeButton.Size.Y.Offset))
    end

    dropDown.MouseLeave:Connect(function()
      dropDown.Visible = false
    end)
  end

  
  local function createDropDownMenuButton(parent)
    local dropDownButton = Instance.new("ImageButton")
    dropDownButton.Name = "DropDownButton"
    dropDownButton.Image = "https://www.roblox.com/asset/?id=67581509"
    dropDownButton.BackgroundTransparency = 1
    dropDownButton.Size = UDim2.new(0,16,0,16)
    dropDownButton.Position = UDim2.new(1,-24,0,6)
    dropDownButton.ZIndex = parent.ZIndex + 2
    dropDownButton.Parent = parent
    
    if not setGui:FindFirstChild("TerrainDropDown") then
      createTerrainDropDownMenu(8)
    end
    
    dropDownButton.MouseButton1Click:Connect(function()
      setGui.TerrainDropDown.Visible = true
      setGui.TerrainDropDown.Position = UDim2.new(0,parent.AbsolutePosition.X,0,parent.AbsolutePosition.Y)
      currTerrainDropDownFrame = parent
    end)
  end
  
  local function buildInsertButton()
    local insertButton = makeInsertAssetButton()
    insertButton.Name = "InsertAssetButton"
    insertButton.Visible = true

    if Data.Category[Data.CurrentCategory].SetName == "High Scalability" then
      createDropDownMenuButton(insertButton)
    end

    local lastEnter = nil
    local mouseEnterCon = insertButton.MouseEnter:Connect(function()
      lastEnter = insertButton
      delay(0.1,function()
        if lastEnter == insertButton then
          showLargePreview(insertButton)
        end
      end)
    end)
    return insertButton, mouseEnterCon
  end
  
  local function realignButtonGrid(columns)
    local x = 0
    local y = 0 
    for i = 1, #insertButtons do
      insertButtons[i].Position = UDim2.new(0, buttonWidth * x, 0, buttonHeight * y)
      x = x + 1
      if x >= columns then
        x = 0
        y = y + 1
      end
    end
  end

  local function setInsertButtonImageBehavior(insertFrame, visible, name, assetId)
    if visible then
      insertFrame.AssetName.Value = name
      insertFrame.AssetId.Value = assetId
      local newImageUrl = SmallThumbnailUrl  .. assetId
      if newImageUrl ~= insertFrame.Button.ButtonImage.Image then
        delay(0,function()
          game:GetService("ContentProvider"):Preload(SmallThumbnailUrl  .. assetId)
          if insertFrame:findFirstChild("Button") then
            insertFrame.Button.ButtonImage.Image = SmallThumbnailUrl  .. assetId
          end
        end)
      end
      table.insert(insertButtonCons,
        insertFrame.Button.MouseButton1Click:Connect(function()
          -- special case for water, show water selection gui
          local isWaterSelected = (name == "Water") and (Data.Category[Data.CurrentCategory].SetName == "High Scalability")
          waterGui.Visible = isWaterSelected
          if isWaterSelected then
            objectSelected(name, tonumber(assetId), nil)
          else
            objectSelected(name, tonumber(assetId))
          end
        end)
      )
      insertFrame.Visible = true
    else
      insertFrame.Visible = false
    end
  end
  
  local function loadSectionOfItems(setGui, rows, columns)
    local pageSize = rows * columns

    if arrayPosition > #contents then return end

    local origArrayPos = arrayPosition

    local yCopy = 0
    for i = 1, pageSize + 1 do 
      if arrayPosition >= #contents + 1 then
        break
      end

      local buttonCon
      insertButtons[arrayPosition], buttonCon = buildInsertButton()
      table.insert(insertButtonCons,buttonCon)
      insertButtons[arrayPosition].Parent = setGui.SetPanel.ItemsFrame
      arrayPosition = arrayPosition + 1
    end
    realignButtonGrid(columns)

    local indexCopy = origArrayPos
    for index = origArrayPos, arrayPosition do
      if insertButtons[index] then
        if contents[index] then

          -- we don't want water to have a drop down button
          if contents[index].Name == "Water" then
            if Data.Category[Data.CurrentCategory].SetName == "High Scalability" then
              insertButtons[index]:FindFirstChild("DropDownButton",true):Destroy()
            end
          end

          local assetId
          if useAssetVersionId then
            assetId = contents[index].AssetVersionId
          else
            assetId = contents[index].AssetId
          end
          setInsertButtonImageBehavior(insertButtons[index], true, contents[index].Name, assetId)
        else
          break
        end
      else
        break
      end
      indexCopy = index
    end
  end
  
  local function setSetIndex()
    Data.Category[Data.CurrentCategory].Index = 0

    rows = 7
    columns = math.floor(setGui.SetPanel.ItemsFrame.AbsoluteSize.X/buttonWidth)

    contents = Data.Category[Data.CurrentCategory].Contents
    if contents then
      -- destroy our buttons and their connections
      for i = 1, #insertButtons do
        insertButtons[i]:Destroy()
      end
      
      for i = 1, #insertButtonCons do
        if insertButtonCons[i] then insertButtonCons[i]:Disconnect() end
      end
      
      insertButtonCons = {}
      insertButtons = {}

      arrayPosition = 1
      loadSectionOfItems(setGui, rows, columns)
    end
  end
  
  local function selectSet(button, setName, setId, setIndex)
    if button and Data.Category[Data.CurrentCategory] ~= nil then
      if button ~= Data.Category[Data.CurrentCategory].Button then
        Data.Category[Data.CurrentCategory].Button = button

        if SetCache[setId] == nil then
          SetCache[setId] = game:GetService("InsertService"):GetCollection(setId)
        end
        Data.Category[Data.CurrentCategory].Contents = SetCache[setId]

        Data.Category[Data.CurrentCategory].SetName = setName
        Data.Category[Data.CurrentCategory].SetId = setId
      end
      setSetIndex()
    end
  end
  
  local function selectCategoryPage(buttons, page)
    if buttons ~= Data.CurrentCategory then
      if Data.CurrentCategory then
        for key, button in pairs(Data.CurrentCategory) do
          button.Visible = false
        end
      end

      Data.CurrentCategory = buttons
      if Data.Category[Data.CurrentCategory] == nil then
        Data.Category[Data.CurrentCategory] = {}
        if #buttons > 0 then
          selectSet(buttons[1], buttons[1].SetName.Value, buttons[1].SetId.Value, 0)
        end
      else
        Data.Category[Data.CurrentCategory].Button = nil
        selectSet(Data.Category[Data.CurrentCategory].ButtonFrame, Data.Category[Data.CurrentCategory].SetName, Data.Category[Data.CurrentCategory].SetId, Data.Category[Data.CurrentCategory].Index)
      end
    end
  end
  
  local function selectCategory(category)
    selectCategoryPage(category, 0)
  end
  
  local function resetAllSetButtonSelection()
    local setButtons = setGui.SetPanel.Sets.SetsLists:GetChildren()
    for i = 1, #setButtons do
      if setButtons[i]:IsA("TextButton") then
        setButtons[i].Selected = false
        setButtons[i].BackgroundTransparency = 1
        setButtons[i].TextColor3 = Color3.new(1,1,1)
        setButtons[i].BackgroundColor3 = Color3.new(1,1,1)
      end
    end
  end
  
  local function populateSetsFrame()
    local currRow = 0
    for i = 1, #userCategoryButtons do
      local button = userCategoryButtons[i]
      button.Visible = true
      button.Position = UDim2.new(0,5,0,currRow * button.Size.Y.Offset)
      button.Parent = setGui.SetPanel.Sets.SetsLists
      
      if i == 1 then -- we will have this selected by default, so show it
        button.Selected = true
        button.BackgroundColor3 = Color3.new(0,204/255,0)
        button.TextColor3 = Color3.new(0,0,0)
        button.BackgroundTransparency = 0
      end

      button.MouseEnter:Connect(function()
        if not button.Selected then
          button.BackgroundTransparency = 0
          button.TextColor3 = Color3.new(0,0,0)
        end
      end)
      button.MouseLeave:Connect(function()
        if not button.Selected then
          button.BackgroundTransparency = 1
          button.TextColor3 = Color3.new(1,1,1)
        end
      end)
      button.MouseButton1Click:Connect(function()
        resetAllSetButtonSelection()
        button.Selected = not button.Selected
        button.BackgroundColor3 = Color3.new(0,204/255,0)
        button.TextColor3 = Color3.new(0,0,0)
        button.BackgroundTransparency = 0
        selectSet(button, button.Text, userCategoryButtons[i].SetId.Value, 0)
      end)

      currRow = currRow + 1
    end

    local buttons =  setGui.SetPanel.Sets.SetsLists:GetChildren()

    -- set first category as loaded for default
    if buttons then
      for i = 1, #buttons do
        if buttons[i]:IsA("TextButton") then
          selectSet(buttons[i], buttons[i].Text, userCategoryButtons[i].SetId.Value, 0)
          selectCategory(userCategoryButtons)
          break
        end
      end
    end
  end

  setGui = createSetGui()
  waterGui, waterTypeChangedEvent = createWaterGui()
  waterGui.Position = UDim2.new(0,55,0,0)
  waterGui.Parent = setGui
  setGui.Changed:Connect(function(prop) -- this resizes the preview image to always be the right size
    if prop == "AbsoluteSize" then
      handleResize()
      setSetIndex()
    end
  end)
  
  local scrollFrame, controlFrame = t.CreateTrueScrollingFrame()
  scrollFrame.Size = UDim2.new(0.54,0,0.85,0)
  scrollFrame.Position = UDim2.new(0.24,0,0.085,0)
  scrollFrame.Name = "ItemsFrame"
  scrollFrame.ZIndex = 6
  scrollFrame.Parent = setGui.SetPanel
  scrollFrame.BackgroundTransparency = 1

  drillDownSetZIndex(controlFrame,7)

  controlFrame.Parent = setGui.SetPanel
  controlFrame.Position = UDim2.new(0.76, 5, 0, 0)

  local debounce = false
  controlFrame.ScrollBottom.Changed:Connect(function(prop)
    if controlFrame.ScrollBottom.Value == true then
      if debounce then return end
      debounce = true
        loadSectionOfItems(setGui, rows, columns)
      debounce = false
    end
  end)

  local userData = {}
  for id = 1, #userIdsForSets do
    local newUserData = game:GetService("InsertService"):GetUserSets(userIdsForSets[id])
    if newUserData and #newUserData > 2 then
      -- start at #3 to skip over My Decals and My Models for each account
      for category = 3, #newUserData do
        if newUserData[category].Name == "High Scalability" then -- we want high scalability parts to show first
          table.insert(userData,1,newUserData[category])
        else
          table.insert(userData, newUserData[category])
        end
      end
    end
  
  end
  if userData then
    userCategoryButtons = processCategory(userData)
  end

  rows = math.floor(setGui.SetPanel.ItemsFrame.AbsoluteSize.Y/buttonHeight)
  columns = math.floor(setGui.SetPanel.ItemsFrame.AbsoluteSize.X/buttonWidth)

  populateSetsFrame()

  setGui.SetPanel.CancelButton.MouseButton1Click:Connect(function()
    setGui.SetPanel.Visible = false
    if dialogClosed then dialogClosed() end
  end)
  
  local setVisibilityFunction = function(visible)
    if visible then
      setGui.SetPanel.Visible = true
    else
      setGui.SetPanel.Visible = false
    end
  end
  
  local getVisibilityFunction = function()
    if setGui then
      if setGui:FindFirstChild("SetPanel") then
        return setGui.SetPanel.Visible
      end
    end
    
    return false
  end
  
  return setGui, setVisibilityFunction, getVisibilityFunction, waterTypeChangedEvent
end

t.CreateTerrainMaterialSelector = function(size,position)
  local terrainMaterialSelectionChanged = Instance.new("BindableEvent")
  terrainMaterialSelectionChanged.Name = "TerrainMaterialSelectionChanged"

  local selectedButton = nil

  local frame = Instance.new("Frame")
  frame.Name = "TerrainMaterialSelector"
  if size then
    frame.Size = size
  else
    frame.Size = UDim2.new(0, 245, 0, 230)
  end
  if position then
    frame.Position = position
  end
  frame.BorderSizePixel = 0
  frame.BackgroundColor3 = Color3.new(0,0,0)
  frame.Active = true

  terrainMaterialSelectionChanged.Parent = frame

  local waterEnabled = true -- todo: turn this on when water is ready

  local materialToImageMap = {}
  local materialNames = {"Grass", "Sand", "Brick", "Granite", "Asphalt", "Iron", "Aluminum", "Gold", "Plank", "Log", "Gravel", "Cinder Block", "Stone Wall", "Concrete", "Plastic (red)", "Plastic (blue)"}
  if waterEnabled then
    table.insert(materialNames,"Water")
  end
  local currentMaterial = 1

  function getEnumFromName(choice)
    if choice == "Grass" then return 1 end
    if choice == "Sand" then return 2 end 
    if choice == "Erase" then return 0 end
    if choice == "Brick" then return 3 end
    if choice == "Granite" then return 4 end
    if choice == "Asphalt" then return 5 end
    if choice == "Iron" then return 6 end
    if choice == "Aluminum" then return 7 end
    if choice == "Gold" then return 8 end
    if choice == "Plank" then return 9 end
    if choice == "Log" then return 10 end
    if choice == "Gravel" then return 11 end
    if choice == "Cinder Block" then return 12 end
    if choice == "Stone Wall" then return 13 end
    if choice == "Concrete" then return 14 end
    if choice == "Plastic (red)" then return 15 end
    if choice == "Plastic (blue)" then return 16 end
    if choice == "Water" then return 17 end
  end

  function getNameFromEnum(choice)
    if choice == Enum.CellMaterial.Grass or choice == 1 then return "Grass"end
    if choice == Enum.CellMaterial.Sand or choice == 2 then return "Sand" end 
    if choice == Enum.CellMaterial.Empty or choice == 0 then return "Erase" end
    if choice == Enum.CellMaterial.Brick or choice == 3 then return "Brick" end
    if choice == Enum.CellMaterial.Granite or choice == 4 then return "Granite" end
    if choice == Enum.CellMaterial.Asphalt or choice == 5 then return "Asphalt" end
    if choice == Enum.CellMaterial.Iron or choice == 6 then return "Iron" end
    if choice == Enum.CellMaterial.Aluminum or choice == 7 then return "Aluminum" end
    if choice == Enum.CellMaterial.Gold or choice == 8 then return "Gold" end
    if choice == Enum.CellMaterial.WoodPlank or choice == 9 then return "Plank" end
    if choice == Enum.CellMaterial.WoodLog or choice == 10 then return "Log" end
    if choice == Enum.CellMaterial.Gravel or choice == 11 then return "Gravel" end
    if choice == Enum.CellMaterial.CinderBlock or choice == 12 then return "Cinder Block" end
    if choice == Enum.CellMaterial.MossyStone or choice == 13 then return "Stone Wall" end
    if choice == Enum.CellMaterial.Cement or choice == 14 then return "Concrete" end
    if choice == Enum.CellMaterial.RedPlastic or choice == 15 then return "Plastic (red)" end
    if choice == Enum.CellMaterial.BluePlastic or choice == 16 then return "Plastic (blue)" end

    if waterEnabled then
      if choice == Enum.CellMaterial.Water or choice == 17 then return "Water" end
    end
  end


  local function updateMaterialChoice(choice)
    currentMaterial = getEnumFromName(choice)
    terrainMaterialSelectionChanged:Fire(currentMaterial)
  end

  -- we so need a better way to do this
  for i,v in pairs(materialNames) do
    materialToImageMap[v] = {}
    if v == "Grass" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=56563112"
    elseif v == "Sand" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=62356652"
    elseif v == "Brick" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=65961537"
    elseif v == "Granite" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532153"
    elseif v == "Asphalt" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532038"
    elseif v == "Iron" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532093"
    elseif v == "Aluminum" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67531995"
    elseif v == "Gold" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532118"
    elseif v == "Plastic (red)" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67531848"
    elseif v == "Plastic (blue)" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67531924"
    elseif v == "Plank" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532015"
    elseif v == "Log" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532051"
    elseif v == "Gravel" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532206"
    elseif v == "Cinder Block" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532103"
    elseif v == "Stone Wall" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67531804"
    elseif v == "Concrete" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=67532059"
    elseif v == "Water" then materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=81407474"
    else materialToImageMap[v].Regular = "https://www.roblox.com/asset/?id=66887593" -- fill in the rest here!!
    end
  end

  local scrollFrame, scrollUp, scrollDown, recalculateScroll = t.CreateScrollingFrame(nil,"grid")
  scrollFrame.Size = UDim2.new(0.85,0,1,0)
  scrollFrame.Position = UDim2.new(0,0,0,0)
  scrollFrame.Parent = frame

  scrollUp.Parent = frame
  scrollUp.Visible = true
  scrollUp.Position = UDim2.new(1,-19,0,0)

  scrollDown.Parent = frame
  scrollDown.Visible = true
  scrollDown.Position = UDim2.new(1,-19,1,-17)

  local function goToNewMaterial(buttonWrap, materialName)
    updateMaterialChoice(materialName)
    buttonWrap.BackgroundTransparency = 0
    selectedButton.BackgroundTransparency = 1
    selectedButton = buttonWrap
  end

  local function createMaterialButton(name)  
    local buttonWrap = Instance.new("TextButton")
    buttonWrap.Text = ""
    buttonWrap.Size = UDim2.new(0,32,0,32)
    buttonWrap.BackgroundColor3 = Color3.new(1,1,1)
    buttonWrap.BorderSizePixel = 0
    buttonWrap.BackgroundTransparency = 1
    buttonWrap.AutoButtonColor = false
    buttonWrap.Name = tostring(name)
    
    local imageButton = Instance.new("ImageButton")
    imageButton.AutoButtonColor = false
    imageButton.BackgroundTransparency = 1
    imageButton.Size = UDim2.new(0,30,0,30)
    imageButton.Position = UDim2.new(0,1,0,1)
    imageButton.Name = tostring(name)
    imageButton.Parent = buttonWrap
    imageButton.Image = materialToImageMap[name].Regular

    local enumType = Instance.new("NumberValue")
    enumType.Name = "EnumType"
    enumType.Parent = buttonWrap
    enumType.Value = 0
    
    imageButton.MouseEnter:Connect(function()
      buttonWrap.BackgroundTransparency = 0
    end)
    imageButton.MouseLeave:Connect(function()
      if selectedButton ~= buttonWrap then
        buttonWrap.BackgroundTransparency = 1
      end
    end)
    imageButton.MouseButton1Click:Connect(function()
      if selectedButton ~= buttonWrap then
        goToNewMaterial(buttonWrap, tostring(name))
      end
    end)
    
    return buttonWrap 
  end

  for i = 1, #materialNames do
    local imageButton = createMaterialButton(materialNames[i])
    
    if materialNames[i] == "Grass" then -- always start with grass as the default
      selectedButton = imageButton
      imageButton.BackgroundTransparency = 0
    end
    
    imageButton.Parent = scrollFrame
  end

  local forceTerrainMaterialSelection = function(newMaterialType)
    if not newMaterialType then return end
    if currentMaterial == newMaterialType then return end

    local matName = getNameFromEnum(newMaterialType)
    local buttons = scrollFrame:GetChildren()
    for i = 1, #buttons do
      if buttons[i].Name == "Plastic (blue)" and matName == "Plastic (blue)" then goToNewMaterial(buttons[i],matName) return end
      if buttons[i].Name == "Plastic (red)" and matName == "Plastic (red)" then goToNewMaterial(buttons[i],matName) return end
      if string.find(buttons[i].Name, matName) then
        goToNewMaterial(buttons[i],matName)
        return
      end
    end
  end

  frame.Changed:Connect(function ( prop )
    if prop == "AbsoluteSize" then
      recalculateScroll()
    end
  end)

  recalculateScroll()
  return frame, terrainMaterialSelectionChanged, forceTerrainMaterialSelection
end

t.CreateLoadingFrame = function(name,size,position)
  game:GetService("ContentProvider"):Preload("https://www.roblox.com/asset/?id=35238053")

  local loadingFrame = Instance.new("Frame")
  loadingFrame.Name = "LoadingFrame"
  loadingFrame.Style = Enum.FrameStyle.RobloxRound

  if size then loadingFrame.Size = size
  else loadingFrame.Size = UDim2.new(0,300,0,160) end
  if position then loadingFrame.Position = position 
  else loadingFrame.Position = UDim2.new(0.5, -150, 0.5,-80) end

  local loadingBar = Instance.new("Frame")
  loadingBar.Name = "LoadingBar"
  loadingBar.BackgroundColor3 = Color3.new(0,0,0)
  loadingBar.BorderColor3 = Color3.new(79/255,79/255,79/255)
  loadingBar.Position = UDim2.new(0,0,0,41)
  loadingBar.Size = UDim2.new(1,0,0,30)
  loadingBar.Parent = loadingFrame

    local loadingGreenBar = Instance.new("ImageLabel")
    loadingGreenBar.Name = "LoadingGreenBar"
    loadingGreenBar.Image = "https://www.roblox.com/asset/?id=35238053"
    loadingGreenBar.Position = UDim2.new(0,0,0,0)
    loadingGreenBar.Size = UDim2.new(0,0,1,0)
    loadingGreenBar.Visible = false
    loadingGreenBar.Parent = loadingBar

    local loadingPercent = Instance.new("TextLabel")
    loadingPercent.Name = "LoadingPercent"
    loadingPercent.BackgroundTransparency = 1
    loadingPercent.Position = UDim2.new(0,0,1,0)
    loadingPercent.Size = UDim2.new(1,0,0,14)
    loadingPercent.Font = Enum.Font.Arial
    loadingPercent.Text = "0%"
    loadingPercent.FontSize = Enum.FontSize.Size14
    loadingPercent.TextColor3 = Color3.new(1,1,1)
    loadingPercent.Parent = loadingBar

  local cancelButton = Instance.new("TextButton")
  cancelButton.Name = "CancelButton"
  cancelButton.Position = UDim2.new(0.5,-60,1,-40)
  cancelButton.Size = UDim2.new(0,120,0,40)
  cancelButton.Font = Enum.Font.Arial
  cancelButton.FontSize = Enum.FontSize.Size18
  cancelButton.TextColor3 = Color3.new(1,1,1)
  cancelButton.Text = "Cancel"
  cancelButton.Style = Enum.ButtonStyle.RobloxButton
  cancelButton.Parent = loadingFrame

  local loadingName = Instance.new("TextLabel")
  loadingName.Name = "loadingName"
  loadingName.BackgroundTransparency = 1
  loadingName.Size = UDim2.new(1,0,0,18)
  loadingName.Position = UDim2.new(0,0,0,2)
  loadingName.Font = Enum.Font.Arial
  loadingName.Text = name
  loadingName.TextColor3 = Color3.new(1,1,1)
  loadingName.TextStrokeTransparency = 1
  loadingName.FontSize = Enum.FontSize.Size18
  loadingName.Parent = loadingFrame

  local cancelButtonClicked = Instance.new("BindableEvent")
  cancelButtonClicked.Name = "CancelButtonClicked"
  cancelButtonClicked.Parent = cancelButton
  cancelButton.MouseButton1Click:Connect(function()
    cancelButtonClicked:Fire()
  end)

  local updateLoadingGuiPercent = function(percent, tweenAction, tweenLength)
    if percent and type(percent) ~= "number" then
      error("updateLoadingGuiPercent expects number as argument, got",type(percent),"instead")
    end

    local newSize = nil
    if percent < 0 then
      newSize = UDim2.new(0,0,1,0)
    elseif percent > 1 then
      newSize = UDim2.new(1,0,1,0)
    else
      newSize = UDim2.new(percent,0,1,0)
    end

    if tweenAction then
      if not tweenLength then
        error("updateLoadingGuiPercent is set to tween new percentage, but got no tween time length! Please pass this in as third argument")
      end

      if (newSize.X.Scale > 0) then
        loadingGreenBar.Visible = true
        loadingGreenBar:TweenSize(  newSize,
                      Enum.EasingDirection.Out,
                      Enum.EasingStyle.Quad,
                      tweenLength,
                      true)
      else
        loadingGreenBar:TweenSize(  newSize,
                      Enum.EasingDirection.Out,
                      Enum.EasingStyle.Quad,
                      tweenLength,
                      true,
                      function() 
                        if (newSize.X.Scale < 0) then
                          loadingGreenBar.Visible = false
                        end
                      end)
      end

    else
      loadingGreenBar.Size = newSize
      loadingGreenBar.Visible = (newSize.X.Scale > 0)
    end
  end

  loadingGreenBar.Changed:Connect(function(prop)
    if prop == "Size" then
      loadingPercent.Text = tostring( math.ceil(loadingGreenBar.Size.X.Scale * 100) ) .. "%"
    end
  end)

  return loadingFrame, updateLoadingGuiPercent, cancelButtonClicked
end

t.CreatePluginFrame = function (name,size,position,scrollable,parent)
  local function createMenuButton(size,position,text,fontsize,name,parent)
    local button = Instance.new("TextButton")
    button.AutoButtonColor = false
    button.Name = name
    button.BackgroundTransparency = 1
    button.Position = position
    button.Size = size
    button.Font = Enum.Font.ArialBold
    button.FontSize = fontsize
    button.Text =  text
    button.TextColor3 = Color3.new(1,1,1)
    button.BorderSizePixel = 0
    button.BackgroundColor3 = Color3.new(20/255,20/255,20/255)
    button.Parent = parent

    button.MouseEnter:Connect(function ( )
      if button.Selected then return end
      button.BackgroundTransparency = 0
    end)
    button.MouseLeave:Connect(function ( )
      if button.Selected then return end
      button.BackgroundTransparency = 1
    end)

    return button

  end

  local dragBar = Instance.new("Frame")
  dragBar.Name = tostring(name) .. "DragBar"
  dragBar.BackgroundColor3 = Color3.new(39/255,39/255,39/255)
  dragBar.BorderColor3 = Color3.new(0,0,0)
  if size then
    dragBar.Size =  UDim2.new(size.X.Scale,size.X.Offset,0,20)  + UDim2.new(0,20,0,0)
  else
    dragBar.Size = UDim2.new(0,183,0,20)
  end
  if position then
    dragBar.Position = position
  end
  dragBar.Active = true
  dragBar.Draggable = true
  dragBar.Parent = parent
  
  dragBar.MouseEnter:Connect(function (  )
    dragBar.BackgroundColor3 = Color3.new(49/255,49/255,49/255)
  end)
  dragBar.MouseLeave:Connect(function (  )
    dragBar.BackgroundColor3 = Color3.new(39/255,39/255,39/255)
  end)

  -- plugin name label
  local pluginNameLabel = Instance.new("TextLabel")
  pluginNameLabel.Name = "BarNameLabel"
  pluginNameLabel.Text = " " .. tostring(name)
  pluginNameLabel.TextColor3 = Color3.new(1,1,1)
  pluginNameLabel.TextStrokeTransparency = 0
  pluginNameLabel.Size = UDim2.new(1,0,1,0)
  pluginNameLabel.Font = Enum.Font.ArialBold
  pluginNameLabel.FontSize = Enum.FontSize.Size18
  pluginNameLabel.TextXAlignment = Enum.TextXAlignment.Left
  pluginNameLabel.BackgroundTransparency = 1
  pluginNameLabel.Parent = dragBar

  -- close button
  local closeButton = createMenuButton(UDim2.new(0,15,0,17),UDim2.new(1,-16,0.5,-8),"X",Enum.FontSize.Size14,"CloseButton",dragBar)
  local closeEvent = Instance.new("BindableEvent")
  closeEvent.Name = "CloseEvent"
  closeEvent.Parent = closeButton
  closeButton.MouseButton1Click:Connect(function ()
    closeEvent:Fire()
    closeButton.BackgroundTransparency = 1
  end)

  -- help button
  local helpButton = createMenuButton(UDim2.new(0,15,0,17),UDim2.new(1,-51,0.5,-8),"?",Enum.FontSize.Size14,"HelpButton",dragBar)
  local helpFrame = Instance.new("Frame")
  helpFrame.Name = "HelpFrame"
  helpFrame.BackgroundColor3 = Color3.new(0,0,0)
  helpFrame.Size = UDim2.new(0,300,0,552)
  helpFrame.Position = UDim2.new(1,5,0,0)
  helpFrame.Active = true
  helpFrame.BorderSizePixel = 0
  helpFrame.Visible = false
  helpFrame.Parent = dragBar

  helpButton.MouseButton1Click:Connect(function(  )
    helpFrame.Visible = not helpFrame.Visible
    if helpFrame.Visible then
      helpButton.Selected = true
      helpButton.BackgroundTransparency = 0
      local screenGui = getLayerCollectorAncestor(helpFrame)
      if screenGui then
        if helpFrame.AbsolutePosition.X + helpFrame.AbsoluteSize.X > screenGui.AbsoluteSize.X then --position on left hand side
          helpFrame.Position = UDim2.new(0,-5 - helpFrame.AbsoluteSize.X,0,0)
        else -- position on right hand side
          helpFrame.Position = UDim2.new(1,5,0,0)
        end
      else
        helpFrame.Position = UDim2.new(1,5,0,0)
      end
    else
      helpButton.Selected = false
      helpButton.BackgroundTransparency = 1
    end
  end)

  local minimizeButton = createMenuButton(UDim2.new(0,16,0,17),UDim2.new(1,-34,0.5,-8),"-",Enum.FontSize.Size14,"MinimizeButton",dragBar)
  minimizeButton.TextYAlignment = Enum.TextYAlignment.Top

  local minimizeFrame = Instance.new("Frame")
  minimizeFrame.Name = "MinimizeFrame"
  minimizeFrame.BackgroundColor3 = Color3.new(73/255,73/255,73/255)
  minimizeFrame.BorderColor3 = Color3.new(0,0,0)
  minimizeFrame.Position = UDim2.new(0,0,1,0)
  if size then
    minimizeFrame.Size =  UDim2.new(size.X.Scale,size.X.Offset,0,50) + UDim2.new(0,20,0,0)
  else
    minimizeFrame.Size = UDim2.new(0,183,0,50)
  end
  minimizeFrame.Visible = false
  minimizeFrame.Parent = dragBar

  local minimizeBigButton = Instance.new("TextButton")
  minimizeBigButton.Position = UDim2.new(0.5,-50,0.5,-20)
  minimizeBigButton.Name = "MinimizeButton"
  minimizeBigButton.Size = UDim2.new(0,100,0,40)
  minimizeBigButton.Style = Enum.ButtonStyle.RobloxButton
  minimizeBigButton.Font = Enum.Font.ArialBold
  minimizeBigButton.FontSize = Enum.FontSize.Size18
  minimizeBigButton.TextColor3 = Color3.new(1,1,1)
  minimizeBigButton.Text = "Show"
  minimizeBigButton.Parent = minimizeFrame

  local separatingLine = Instance.new("Frame")
  separatingLine.Name = "SeparatingLine"
  separatingLine.BackgroundColor3 = Color3.new(115/255,115/255,115/255)
  separatingLine.BorderSizePixel = 0
  separatingLine.Position = UDim2.new(1,-18,0.5,-7)
  separatingLine.Size = UDim2.new(0,1,0,14)
  separatingLine.Parent = dragBar

  local otherSeparatingLine = separatingLine:clone()
  otherSeparatingLine.Position = UDim2.new(1,-35,0.5,-7)
  otherSeparatingLine.Parent = dragBar

  local widgetContainer = Instance.new("Frame")
  widgetContainer.Name = "WidgetContainer"
  widgetContainer.BackgroundTransparency = 1
  widgetContainer.Position = UDim2.new(0,0,1,0)
  widgetContainer.BorderColor3 = Color3.new(0,0,0)
  if not scrollable then
    widgetContainer.BackgroundTransparency = 0
    widgetContainer.BackgroundColor3 = Color3.new(72/255,72/255,72/255)
  end
  widgetContainer.Parent = dragBar

  if size then
    if scrollable then
      widgetContainer.Size = size
    else
      widgetContainer.Size = UDim2.new(0,dragBar.AbsoluteSize.X,size.Y.Scale,size.Y.Offset)
    end
  else
    if scrollable then
      widgetContainer.Size = UDim2.new(0,163,0,400)
    else
      widgetContainer.Size = UDim2.new(0,dragBar.AbsoluteSize.X,0,400)
    end
  end
  if position then
    widgetContainer.Position = position + UDim2.new(0,0,0,20)
  end

  local frame,control,verticalDragger = nil
  if scrollable then
    --frame for widgets
    frame,control = t.CreateTrueScrollingFrame()
    frame.Size = UDim2.new(1, 0, 1, 0)
    frame.BackgroundColor3 = Color3.new(72/255,72/255,72/255)
    frame.BorderColor3 = Color3.new(0,0,0)
    frame.Active = true
    frame.Parent = widgetContainer
    control.Parent = dragBar
    control.BackgroundColor3 = Color3.new(72/255,72/255,72/255)
    control.BorderSizePixel = 0
    control.BackgroundTransparency = 0
    control.Position = UDim2.new(1,-21,1,1)
    if size then
      control.Size = UDim2.new(0,21,size.Y.Scale,size.Y.Offset)
    else
      control.Size = UDim2.new(0,21,0,400)
    end
    control:FindFirstChild("ScrollDownButton").Position = UDim2.new(0,0,1,-20)

    local fakeLine = Instance.new("Frame")
    fakeLine.Name = "FakeLine"
    fakeLine.BorderSizePixel = 0
    fakeLine.BackgroundColor3 = Color3.new(0,0,0)
    fakeLine.Size = UDim2.new(0,1,1,1)
    fakeLine.Position = UDim2.new(1,0,0,0)
    fakeLine.Parent = control

    verticalDragger = Instance.new("TextButton")
    verticalDragger.ZIndex = 2
    verticalDragger.AutoButtonColor = false
    verticalDragger.Name = "VerticalDragger"
    verticalDragger.BackgroundColor3 = Color3.new(50/255,50/255,50/255)
    verticalDragger.BorderColor3 = Color3.new(0,0,0)
    verticalDragger.Size = UDim2.new(1,20,0,20)
    verticalDragger.Position = UDim2.new(0,0,1,0)
    verticalDragger.Active = true
    verticalDragger.Text = ""
    verticalDragger.Parent = widgetContainer

    local scrubFrame = Instance.new("Frame")
    scrubFrame.Name = "ScrubFrame"
    scrubFrame.BackgroundColor3 = Color3.new(1,1,1)
    scrubFrame.BorderSizePixel = 0
    scrubFrame.Position = UDim2.new(0.5,-5,0.5,0)
    scrubFrame.Size = UDim2.new(0,10,0,1)
    scrubFrame.ZIndex = 5
    scrubFrame.Parent = verticalDragger
    local scrubTwo = scrubFrame:clone()
    scrubTwo.Position = UDim2.new(0.5,-5,0.5,-2)
    scrubTwo.Parent = verticalDragger
    local scrubThree = scrubFrame:clone()
    scrubThree.Position = UDim2.new(0.5,-5,0.5,2)
    scrubThree.Parent = verticalDragger

    local areaSoak = Instance.new("TextButton",getLayerCollectorAncestor(parent))
    areaSoak.Name = "AreaSoak"
    areaSoak.Size = UDim2.new(1,0,1,0)
    areaSoak.BackgroundTransparency = 1
    areaSoak.BorderSizePixel = 0
    areaSoak.Text = ""
    areaSoak.ZIndex = 10
    areaSoak.Visible = false
    areaSoak.Active = true

    local draggingVertical = false
    local startYPos = nil
    verticalDragger.MouseEnter:Connect(function ()
      verticalDragger.BackgroundColor3 = Color3.new(60/255,60/255,60/255)
    end)
    verticalDragger.MouseLeave:Connect(function ()
      verticalDragger.BackgroundColor3 = Color3.new(50/255,50/255,50/255)
    end)
    verticalDragger.MouseButton1Down:Connect(function(x,y)
      draggingVertical = true
      areaSoak.Visible = true
      startYPos = y
    end)
    areaSoak.MouseButton1Up:Connect(function (  )
      draggingVertical = false
      areaSoak.Visible = false
    end)
    areaSoak.MouseMoved:Connect(function(x,y)
      if not draggingVertical then return end

      local yDelta = y - startYPos
      if not control.ScrollDownButton.Visible and yDelta > 0 then
        return
      end

      if (widgetContainer.Size.Y.Offset + yDelta) < 150 then
        widgetContainer.Size = UDim2.new(widgetContainer.Size.X.Scale, widgetContainer.Size.X.Offset,widgetContainer.Size.Y.Scale,150)
        control.Size = UDim2.new (0,21,0,150)
        return 
      end 

      startYPos = y

      if widgetContainer.Size.Y.Offset + yDelta >= 0 then
        widgetContainer.Size = UDim2.new(widgetContainer.Size.X.Scale, widgetContainer.Size.X.Offset,widgetContainer.Size.Y.Scale,widgetContainer.Size.Y.Offset + yDelta)
        control.Size = UDim2.new(0,21,0,control.Size.Y.Offset + yDelta )
      end
    end)
  end

  local function switchMinimize()
    minimizeFrame.Visible = not minimizeFrame.Visible
    if scrollable then
      frame.Visible = not frame.Visible
      verticalDragger.Visible = not verticalDragger.Visible
      control.Visible = not control.Visible
    else
      widgetContainer.Visible = not widgetContainer.Visible
    end

    if minimizeFrame.Visible then
      minimizeButton.Text = "+"
    else
      minimizeButton.Text = "-"
    end
  end

  minimizeBigButton.MouseButton1Click:Connect(function (  )
    switchMinimize()
  end)

  minimizeButton.MouseButton1Click:Connect(function(  )
    switchMinimize()
  end)

  if scrollable then
    return dragBar, frame, helpFrame, closeEvent
  else
    return dragBar, widgetContainer, helpFrame, closeEvent
  end
end

t.Help = 
  function(funcNameOrFunc) 
    --input argument can be a string or a function.  Should return a description (of arguments and expected side effects)
    if funcNameOrFunc == "CreatePropertyDropDownMenu" or funcNameOrFunc == t.CreatePropertyDropDownMenu then
      return "Function CreatePropertyDropDownMenu.  " ..
           "Arguments: (instance, propertyName, enumType).  " .. 
           "Side effect: returns a container with a drop-down-box that is linked to the 'property' field of 'instance' which is of type 'enumType'" 
    end 
    if funcNameOrFunc == "CreateDropDownMenu" or funcNameOrFunc == t.CreateDropDownMenu then
      return "Function CreateDropDownMenu.  " .. 
           "Arguments: (items, onItemSelected).  " .. 
           "Side effect: Returns 2 results, a container to the gui object and a 'updateSelection' function for external updating.  The container is a drop-down-box created around a list of items" 
    end 
    if funcNameOrFunc == "CreateMessageDialog" or funcNameOrFunc == t.CreateMessageDialog then
      return "Function CreateMessageDialog.  " .. 
           "Arguments: (title, message, buttons). " .. 
           "Side effect: Returns a gui object of a message box with 'title' and 'message' as passed in.  'buttons' input is an array of Tables contains a 'Text' and 'Function' field for the text/callback of each button"
    end    
    if funcNameOrFunc == "CreateStyledMessageDialog" or funcNameOrFunc == t.CreateStyledMessageDialog then
      return "Function CreateStyledMessageDialog.  " .. 
           "Arguments: (title, message, style, buttons). " .. 
           "Side effect: Returns a gui object of a message box with 'title' and 'message' as passed in.  'buttons' input is an array of Tables contains a 'Text' and 'Function' field for the text/callback of each button, 'style' is a string, either Error, Notify or Confirm"
    end
    if funcNameOrFunc == "GetFontHeight" or funcNameOrFunc == t.GetFontHeight then
      return "Function GetFontHeight.  " .. 
           "Arguments: (font, fontSize). " .. 
           "Side effect: returns the size in pixels of the given font + fontSize"
    end
    if funcNameOrFunc == "LayoutGuiObjects" or funcNameOrFunc == t.LayoutGuiObjects then
    
    end
    if funcNameOrFunc == "CreateScrollingFrame" or funcNameOrFunc == t.CreateScrollingFrame then
      return "Function CreateScrollingFrame.  " .. 
         "Arguments: (orderList, style) " .. 
         "Side effect: returns 4 objects, (scrollFrame, scrollUpButton, scrollDownButton, recalculateFunction).  'scrollFrame' can be filled with GuiObjects.  It will lay them out and allow scrollUpButton/scrollDownButton to interact with them.  Orderlist is optional (and specifies the order to layout the children.  Without orderlist, it uses the children order. style is also optional, and allows for a 'grid' styling if style is passed 'grid' as a string.  recalculateFunction can be called when a relayout is needed (when orderList changes)"
    end
    if funcNameOrFunc == "CreateTrueScrollingFrame" or funcNameOrFunc == t.CreateTrueScrollingFrame then
      return "Function CreateTrueScrollingFrame.  " .. 
         "Arguments: (nil) " .. 
         "Side effect: returns 2 objects, (scrollFrame, controlFrame).  'scrollFrame' can be filled with GuiObjects, and they will be clipped if not inside the frame's bounds. controlFrame has children scrollup and scrolldown, as well as a slider.  controlFrame can be parented to any guiobject and it will readjust itself to fit."
    end
    if funcNameOrFunc == "AutoTruncateTextObject" or funcNameOrFunc == t.AutoTruncateTextObject then
      return "Function AutoTruncateTextObject.  " .. 
         "Arguments: (textLabel) " .. 
         "Side effect: returns 2 objects, (textLabel, changeText).  The 'textLabel' input is modified to automatically truncate text (with ellipsis), if it gets too small to fit.  'changeText' is a function that can be used to change the text, it takes 1 string as an argument"
    end
    if funcNameOrFunc == "CreateSlider" or funcNameOrFunc == t.CreateSlider then
      return "Function CreateSlider.  " ..
        "Arguments: (steps, width, position) " ..
        "Side effect: returns 2 objects, (sliderGui, sliderPosition).  The 'steps' argument specifies how many different positions the slider can hold along the bar.  'width' specifies in pixels how wide the bar should be (modifiable afterwards if desired). 'position' argument should be a UDim2 for slider positioning. 'sliderPosition' is an IntValue whose current .Value specifies the specific step the slider is currently on."
    end
    if funcNameOrFunc == "CreateSliderNew" or funcNameOrFunc == t.CreateSliderNew then
      return "Function CreateSliderNew.  " ..
        "Arguments: (steps, width, position) " ..
        "Side effect: returns 2 objects, (sliderGui, sliderPosition).  The 'steps' argument specifies how many different positions the slider can hold along the bar.  'width' specifies in pixels how wide the bar should be (modifiable afterwards if desired). 'position' argument should be a UDim2 for slider positioning. 'sliderPosition' is an IntValue whose current .Value specifies the specific step the slider is currently on."
    end
    if funcNameOrFunc == "CreateSliderNewest" or funcNameOrFunc == t.CreateSliderNewest then
      return "Function CreateSliderNewest.  " ..
        "Arguments: (minValue, maxValue, width, position) " ..
        "Side effect: returns 2 objects, (sliderGui, sliderPosition).  The 'minValue' argument specifies the minimum value of the slider. The 'maxValue' argument specifies the maximum value the slider can accept.  'width' specifies in pixels how wide the bar should be (modifiable afterwards if desired). 'position' argument should be a UDim2 for slider positioning. 'sliderPosition' is an IntValue whose current .Value specifies the specific step the slider is currently on."
    end
    if funcNameOrFunc == "CreateLoadingFrame" or funcNameOrFunc == t.CreateLoadingFrame then
      return "Function CreateLoadingFrame.  " ..
        "Arguments: (name, size, position) " ..
        "Side effect: Creates a gui that can be manipulated to show progress for a particular action.  Name appears above the loading bar, and size and position are udim2 values (both size and position are optional arguments).  Returns 3 arguments, the first being the gui created. The second being updateLoadingGuiPercent, which is a bindable function.  This function takes one argument (two optionally), which should be a number between 0 and 1, representing the percentage the loading gui should be at.  The second argument to this function is a boolean value that if set to true will tween the current percentage value to the new percentage value, therefore our third argument is how long this tween should take. Our third returned argument is a BindableEvent, that when fired means that someone clicked the cancel button on the dialog."
    end
    if funcNameOrFunc == "CreateTerrainMaterialSelector" or funcNameOrFunc == t.CreateTerrainMaterialSelector then
      return "Function CreateTerrainMaterialSelector.  " ..
        "Arguments: (size, position) " ..
        "Side effect: Size and position are UDim2 values that specifies the selector's size and position.  Both size and position are optional arguments. This method returns 3 objects (terrainSelectorGui, terrainSelected, forceTerrainSelection).  terrainSelectorGui is just the gui object that we generate with this function, parent it as you like. TerrainSelected is a BindableEvent that is fired whenever a new terrain type is selected in the gui.  ForceTerrainSelection is a function that takes an argument of Enum.CellMaterial and will force the gui to show that material as currently selected."
    end
  end
  
return t

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\CollapsibleTitledSection.luau
``
----------------------------------------
--
-- CollapsibleTitledSectionClass
--
-- Creates a section with a title label:
--
-- "SectionXXX"
--     "TitleBarVisual"
--     "Contents"
--
-- Requires "parent" and "sectionName" parameters and returns the section and its contentsFrame
-- The entire frame will resize dynamically as contents frame changes size.
--
-- "autoScalingList" is a boolean that defines wheter or not the content frame automatically resizes when children are added.
-- This is important for cases when you want minimize button to push or contract what is below it.
--
-- Both "minimizeable" and "minimizedByDefault" are false by default
-- These parameters define if the section will have an arrow button infront of the title label,
-- which the user may use to hide the section's contents
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local kArrowSpriteSheet = "rbxasset://textures/StudioSharedUI/arrowSpritesheet.png"
local kRightButtonRectSize = Vector2.new(12, 12)
local kRightButtonRectOffset = Vector2.new(12, 0)
local kDownButtonRectSize = Vector2.new(12, 12)
local kDownButtonRectOffset = Vector2.new(24, 0)

local kArrowSize = 9
local kDoubleClickTimeSec = 0.5

CollapsibleTitledSectionClass = {}
CollapsibleTitledSectionClass.__index = CollapsibleTitledSectionClass

--- CollapsibleTitledSectionClass constructor.
--- @param nameSuffix string -- The name suffix of the text input.
--- @param titleText string -- The title text.
--- @param autoScalingList boolean? -- Should it automatically update its size based on the content? Defaults to true.
--- @param minimizable boolean? -- Should it be minimizable? Defaults to true.
--- @param minimizedByDefault boolean? -- Should it start minimized? Defaults to true.
--- @paramm createTitleBar boolean? -- Should it create a title bar? Defaults to true.
--- @return CollapsibleTitledSectionClass -- The CollapsibleTitledSection class object.
function CollapsibleTitledSectionClass.new(
	nameSuffix: string,
	titleText: string,
	autoScalingList: boolean?,
	minimizable: boolean?,
	minimizedByDefault: boolean?,
	createTitleBar: boolean?
)
	local self = {}
	setmetatable(self, CollapsibleTitledSectionClass)

	self._minimized = minimizedByDefault == true
	self._minimizable = minimizable == true
	self._createTitleBar = createTitleBar == nil or createTitleBar == true

	self._titleBarHeight = GuiUtilities.kTitleBarHeight

	local frame = Instance.new("Frame")
	frame.Name = "CTSection" .. nameSuffix
	frame.BackgroundTransparency = 1
	self._frame = frame

	local uiListLayout = Instance.new("UIListLayout")
	uiListLayout.SortOrder = Enum.SortOrder.LayoutOrder
	uiListLayout.Parent = frame
	self._uiListLayout = uiListLayout

	local contentsFrame = Instance.new("Frame")
	contentsFrame.Name = "Contents"
	contentsFrame.BackgroundTransparency = 1
	contentsFrame.Size = UDim2.new(1, 0, 0, 1)
	contentsFrame.Position = UDim2.new(0, 0, 0, 0)
	contentsFrame.Parent = frame
	contentsFrame.LayoutOrder = 2
	GuiUtilities.syncGuiElementBackgroundColor(contentsFrame)

	self._contentsFrame = contentsFrame

	uiListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function()
		self:_UpdateSize()
	end)
	self:_UpdateSize()

	if self._createTitleBar then self:_CreateTitleBar(titleText) end
	self:SetCollapsedState(self._minimized)

	self._autoScalingList = autoScalingList == true
	if self._autoScalingList then GuiUtilities.MakeFrameAutoScalingList(self:GetContentsFrame()) end

	return self
end

--- Gets the frame of this Collapsible Section itself.
--- @return Frame This Collapsible Section frame.
function CollapsibleTitledSectionClass:GetSectionFrame(): Frame
	return self._frame
end

--- Gets the frame that contains everything that is inside this Collapsible Section.
--- @return Frame The frame that contains everything inside this Collapsible Section.
function CollapsibleTitledSectionClass:GetContentsFrame(): Frame
	return self._contentsFrame
end

function CollapsibleTitledSectionClass:_UpdateSize()
	local totalSize = self._uiListLayout.AbsoluteContentSize.Y
	self._frame.Size = UDim2.new(1, 0, 0, totalSize)
end

function CollapsibleTitledSectionClass:_UpdateMinimizeButton()
	-- We can't rotate it because rotated images don't get clipped by parents.
	-- This is all in a scroll widget.
	-- :(
	if self._minimized then
		self._minimizeButton.Image = kArrowSpriteSheet
		self._minimizeButton.ImageRectSize = kRightButtonRectSize
		self._minimizeButton.ImageRectOffset = kRightButtonRectOffset
	else
		self._minimizeButton.Image = kArrowSpriteSheet
		self._minimizeButton.ImageRectSize = kDownButtonRectSize
		self._minimizeButton.ImageRectOffset = kDownButtonRectOffset
	end
end

--- Sets the collapsed state. Whether or not its open and showing its contents.
--- @param state boolean -- A boolean representing the state to set.
function CollapsibleTitledSectionClass:SetCollapsedState(state: boolean)
	if not self._minimizable then return end
	self._minimized = state
	self._contentsFrame.Visible = not state
	self:_UpdateMinimizeButton()
	self:_UpdateSize()
end

function CollapsibleTitledSectionClass:_ToggleCollapsedState()
	if not self._minimizable then return end
	self:SetCollapsedState(not self._minimized)
end

function CollapsibleTitledSectionClass:_CreateTitleBar(titleText)
	local titleTextOffset = self._titleBarHeight

	local titleBar = Instance.new("ImageButton")
	titleBar.AutoButtonColor = false
	titleBar.Name = "TitleBarVisual"
	titleBar.BorderSizePixel = 0
	titleBar.Position = UDim2.new(0, 0, 0, 0)
	titleBar.Size = UDim2.new(1, 0, 0, self._titleBarHeight)
	titleBar.Parent = self._frame
	titleBar.LayoutOrder = 1
	titleBar.BorderMode = Enum.BorderMode.Middle
	titleBar.BorderSizePixel = 1
	GuiUtilities.syncGuiElementTitleColor(titleBar)
	GuiUtilities.syncGuiElementBorderColor(titleBar)

	local titleLabel = Instance.new("TextLabel")
	titleLabel.Name = "TitleLabel"
	titleLabel.BackgroundTransparency = 1
	titleLabel.Font = Enum.Font.SourceSansBold --todo: input spec font
	titleLabel.TextSize = 15 --todo: input spec font size
	titleLabel.TextXAlignment = Enum.TextXAlignment.Left
	titleLabel.Text = titleText
	titleLabel.Position = UDim2.new(0, titleTextOffset, 0, 0)
	titleLabel.Size = UDim2.new(1, -titleTextOffset, 1, GuiUtilities.kTextVerticalFudge)
	titleLabel.Parent = titleBar
	GuiUtilities.syncGuiElementFontColor(titleLabel)

	self._minimizeButton = Instance.new("ImageButton")
	self._minimizeButton.Name = "MinimizeSectionButton"
	self._minimizeButton.Image = kArrowSpriteSheet
	self._minimizeButton.ImageRectSize = kRightButtonRectSize
	self._minimizeButton.ImageRectOffset = kRightButtonRectOffset
	self._minimizeButton.Size = UDim2.new(0, kArrowSize, 0, kArrowSize)
	self._minimizeButton.AnchorPoint = Vector2.new(0.5, 0.5)
	self._minimizeButton.Position = UDim2.new(0, self._titleBarHeight * 0.5, 0, self._titleBarHeight * 0.5)
	self._minimizeButton.BackgroundTransparency = 1
	self._minimizeButton.Visible = self._minimizable -- only show when minimizable
	GuiUtilities.syncGuiElementColorCustom(
		self._minimizeButton,
		"ImageColor3",
		Enum.StudioStyleGuideColor.ScriptText,
		Enum.StudioStyleGuideModifier.Default
	)

	self._minimizeButton.MouseButton1Down:Connect(function()
		self:_ToggleCollapsedState()
	end)
	self:_UpdateMinimizeButton()
	self._minimizeButton.Parent = titleBar

	self._latestClickTime = 0
	titleBar.MouseButton1Down:Connect(function()
		local now = tick()
		if now - self._latestClickTime < kDoubleClickTimeSec then
			self:_ToggleCollapsedState()
			self._latestClickTime = 0
		else
			self._latestClickTime = now
		end
	end)
end

--- Adds a child frame to the contents section of the collapsible titled section.
--- @param childFrame GuiObject -- The GUI object to add to the contents frame.
--- @param layoutOrder number? -- Optional layout order to assign to the child frame.
function CollapsibleTitledSectionClass:AddChild(childFrame: GuiObject, layoutOrder: number?)
	if layoutOrder then childFrame.LayoutOrder = layoutOrder end
	childFrame.Parent = self._contentsFrame
end

return CollapsibleTitledSectionClass

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\ColorPicker.luau
``
----------------------------------------
--
-- ColorPicker.lua
--
-- Creates a frame containing a color picker.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local CustomTextButton = require("./CustomTextButton")
local VerticallyScalingListFrame = require("./VerticallyScalingListFrame")

local kColorPickedLabelHeight = 20

local ColorPickerClass = {}
ColorPickerClass.__index = ColorPickerClass

--- ColorPickerClass constructor.
--- @param nameSuffix string -- Suffix to append to the color picker's name.
--- @return ColorPickerClass -- A new instance of the color picker class.
function ColorPickerClass.new(nameSuffix: string)
  local self = setmetatable({}, ColorPickerClass)

  self._cancelFunction = nil
  self._confirmFunction = nil
  self._valueChangedFunction = nil

  local frame = Instance.new("Frame")
  frame.Name = "ClPck " .. nameSuffix
  frame.BackgroundColor3 = Color3.fromRGB(53, 53, 53)
  frame.BorderSizePixel = 0
  frame.Size = UDim2.fromOffset(170, 186)
  GuiUtilities.syncGuiElementBackgroundColor(frame)

  local colorSpectrum = Instance.new("ImageButton")
  colorSpectrum.Name = "ColorSpectrum"
  colorSpectrum.AutoButtonColor = false
  colorSpectrum.BackgroundColor3 = Color3.new(1, 1, 1)
  colorSpectrum.Image = "rbxassetid://18967417547"
  colorSpectrum.Position = UDim2.new(0, 15, 0, 7)
  colorSpectrum.Size = UDim2.new(0, 111, 0, 111)
  colorSpectrum.BorderSizePixel = 1
  colorSpectrum.Parent = frame
  GuiUtilities.syncGuiElementBorderColor(colorSpectrum)

  local colorBrightness = Instance.new("ImageButton")
  colorBrightness.Name = "ColorBrightness"
  colorBrightness.AnchorPoint = Vector2.new(0.5, 0)
  colorBrightness.AutoButtonColor = false
  colorBrightness.BackgroundColor3 = Color3.new(1, 1, 1)
  colorBrightness.Image = ""
  colorBrightness.Position = UDim2.new(1, -20, 0, 7)
  colorBrightness.Size = UDim2.new(0, 16, 0, 107)
  colorBrightness.BorderSizePixel = 1
  colorBrightness.Parent = frame
  GuiUtilities.syncGuiElementBorderColor(colorBrightness)

  local colorBrightnessKnob = Instance.new("Frame")
  colorBrightnessKnob.Name = "Knob"
  colorBrightnessKnob.AnchorPoint = Vector2.new(0.5, 0)
  colorBrightnessKnob.BackgroundColor3 = Color3.new(1, 1, 1)
  colorBrightnessKnob.BorderColor3 = Color3.new()
  colorBrightnessKnob.BorderSizePixel = 0
  colorBrightnessKnob.Position = UDim2.fromScale(0.5, 0)
  colorBrightnessKnob.Size = UDim2.fromOffset(25, 10)
  colorBrightnessKnob.Parent = colorBrightness

  local uIGradient = Instance.new("UIGradient")
  uIGradient.Name = "UIGradient"
  uIGradient.Rotation = -90
  uIGradient.Color = ColorSequence.new({
    ColorSequenceKeypoint.new(0, Color3.new(0, 0, 0)),
    ColorSequenceKeypoint.new(1, Color3.new(1, 1, 1)),
  })
  uIGradient.Parent = colorBrightness

  local uiStroke = Instance.new("UIStroke")
  uiStroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
  uiStroke.Parent = colorBrightnessKnob

  local uiCorner = Instance.new("UICorner")
  uiCorner.CornerRadius = UDim.new(0, 4)
  uiCorner.Parent = colorBrightnessKnob

  local cross = Instance.new("ImageLabel")
  cross.Name = "CrossIcon"
  cross.AnchorPoint = Vector2.new(0.5, 0.5)
  cross.BackgroundTransparency = 1
  cross.Image = "rbxassetid://15929013661"
  cross.Position = UDim2.fromScale(0, 0)
  cross.Size = UDim2.fromOffset(20, 20)
  cross.Parent = colorSpectrum

  local buttonsContainer = Instance.new("Frame")
  buttonsContainer.Name = "ButtonsContainer"
  buttonsContainer.AnchorPoint = Vector2.new(0.5, 1)
  buttonsContainer.BackgroundColor3 = Color3.fromRGB(169, 255, 129)
  buttonsContainer.BackgroundTransparency = 1
  buttonsContainer.BorderSizePixel = 0
  buttonsContainer.Position = UDim2.fromScale(0.5, 1)
  buttonsContainer.Size = UDim2.fromOffset(170, 36)
  buttonsContainer.Parent = frame

  local outputContainer = Instance.new("Frame")
  outputContainer.Name = "OutputContainer"
  outputContainer.AnchorPoint = Vector2.new(0.5, 1)
  outputContainer.BackgroundTransparency = 1
  outputContainer.BackgroundColor3 = Color3.fromRGB(40, 132, 181)
  outputContainer.BorderSizePixel = 0
  outputContainer.Position = UDim2.fromScale(0.5, 0.8)
  outputContainer.Size = UDim2.fromOffset(170, 24)
  outputContainer.Parent = frame

  local colorPreviewBox = Instance.new("Frame")
  colorPreviewBox.Name = "ColorPreview"
  colorPreviewBox.AnchorPoint = Vector2.new(0, 0.5)
  colorPreviewBox.BackgroundColor3 = Color3.new(1, 1, 1)
  colorPreviewBox.Position = UDim2.new(0, 15, 0.5, 0)
  colorPreviewBox.Size = UDim2.new(0, 18, 0, 18)
  colorPreviewBox.Parent = outputContainer
  GuiUtilities.syncGuiElementBorderColor(colorPreviewBox)

  local colorRGBCode = Instance.new("TextBox")
  colorRGBCode.Name = "ColorRGBCode"
  colorRGBCode.AnchorPoint = Vector2.new(0, 0.5)
  colorRGBCode.BackgroundColor3 = Color3.fromRGB(61, 255, 232)
  colorRGBCode.BorderColor3 = Color3.fromRGB(34, 34, 34)
  colorRGBCode.BorderSizePixel = 1
  colorRGBCode.ClearTextOnFocus = false
  colorRGBCode.Font = Enum.Font.SourceSans
  colorRGBCode.Position = UDim2.new(0, 36, 0.5, 0)
  colorRGBCode.Size = UDim2.fromOffset(62, 20)
  colorRGBCode.Text = "255,255,255"
  colorRGBCode.TextColor3 = Color3.fromRGB(204, 204, 204)
  colorRGBCode.TextEditable = false
  colorRGBCode.TextSize = 15
  colorRGBCode.Parent = outputContainer
  GuiUtilities.syncGuiElementFontColor(colorRGBCode)
  GuiUtilities.syncGuiElementInputFieldColor(colorRGBCode)
  GuiUtilities.syncGuiElementBorderColor(colorRGBCode)

  local colorHexCode = Instance.new("TextBox")
  colorHexCode.Name = "ColorHexCode"
  colorHexCode.AnchorPoint = Vector2.new(0, 0.5)
  colorHexCode.BackgroundColor3 = Color3.fromRGB(61, 255, 232)
  colorHexCode.BorderColor3 = Color3.fromRGB(34, 34, 34)
  colorHexCode.BorderSizePixel = 1
  colorHexCode.ClearTextOnFocus = false
  colorHexCode.Font = Enum.Font.SourceSans
  colorHexCode.Position = UDim2.new(0, 101, 0.5, 0)
  colorHexCode.Size = UDim2.fromOffset(55, 20)
  colorHexCode.Text = "#FFFFFF"
  colorHexCode.TextColor3 = Color3.fromRGB(204, 204, 204)
  colorHexCode.TextEditable = false
  colorHexCode.TextSize = 15
  colorHexCode.Parent = outputContainer
  GuiUtilities.syncGuiElementFontColor(colorHexCode)
  GuiUtilities.syncGuiElementInputFieldColor(colorHexCode)
  GuiUtilities.syncGuiElementBorderColor(colorHexCode)

  colorSpectrum.InputBegan:Connect(function (inputObject: InputObject)
    if inputObject.UserInputType ~= Enum.UserInputType.MouseButton1 then return end
    self._dragging = true
    self:_OnColorSpectrumClick(inputObject)
  end)

  colorSpectrum.InputChanged:Connect(function (inputObject: InputObject)
    if not self._dragging then return end
    self:_OnColorSpectrumClick(inputObject)
  end)

  colorSpectrum.InputEnded:Connect(function (inputObject: InputObject)
    if inputObject.UserInputType ~= Enum.UserInputType.MouseButton1 then return end
    self._dragging = false
  end)

  colorBrightness.InputBegan:Connect(function (inputObject: InputObject)
    if inputObject.UserInputType ~= Enum.UserInputType.MouseButton1 then return end
    self._draggingBrightness = true
    self:_OnBrightnessSliderClick(inputObject)
  end)

  colorBrightness.InputChanged:Connect(function (inputObject: InputObject)
    if not self._draggingBrightness then return end
    self:_OnBrightnessSliderClick(inputObject)
  end)

  colorBrightness.InputEnded:Connect(function (inputObject: InputObject)
    if inputObject.UserInputType ~= Enum.UserInputType.MouseButton1 then return end
    self._draggingBrightness = false
  end)

  local verticallyScalingFrame = VerticallyScalingListFrame.new("suffix")
  verticallyScalingFrame:GetFrame().Parent = buttonsContainer
  verticallyScalingFrame:GetFrame().AnchorPoint = Vector2.new(0, 0.5)
  verticallyScalingFrame:GetFrame().Position = UDim2.fromScale(0, 0.5)
  verticallyScalingFrame:SetHorizontalAlignment(Enum.HorizontalAlignment.Center)
  verticallyScalingFrame:SetVerticalAlignment(Enum.VerticalAlignment.Center)
  verticallyScalingFrame:SetFillDirection(Enum.FillDirection.Horizontal)
  verticallyScalingFrame:SetLayoutPadding(UDim.new(0, 5))

  local buttonConfirm = CustomTextButton.new("confirm", "Confirm", true)
  local buttonCancel = CustomTextButton.new("cancel", "Cancel", true)

  verticallyScalingFrame:AddChild(buttonConfirm:GetFrame())
  verticallyScalingFrame:AddChild(buttonCancel:GetFrame())

  self._frame = frame
  self._colorSpectrum = colorSpectrum
  self._colorPreviewBox = colorPreviewBox
  self._colorCodeBoxRGB = colorRGBCode
  self._colorCodeBoxHex = colorHexCode
  self._colorBrightnessSlider = colorBrightness
  self._colorBrightnessKnob = colorBrightnessKnob
  self._colorCross = cross
  self._buttonCancel = buttonCancel
  self._buttonConfirm = buttonConfirm

  self._colorPicked = Color3.new(1,1,1) :: Color3
  self._colorPickedRGBCode = "255,255,255"
  self._colorPickedHexCode = "#FFFFFF"

  self._dragging = false
  self._draggingBrightness = false

  self._hsvHue = 1
  self._hsvSat = 1
  self._hsvVal = 1

  return self
end

function ColorPickerClass:_OnColorSpectrumClick(inputObject: InputObject)
  -- detect clicked color code based on the click position in the color spectrum image
  local relX: number, relY:number = GuiUtilities.GetClickOffsetFromObject(inputObject, self._colorSpectrum)
  if relX >= 0 and relX <= 1 and relY >= 0 and relY <= 1 then
    self._hsvHue = relX
    self._hsvSat = 1 - relY
    self:_CommitColorChange()
    self:_UpdateBrightnessSlider()
    self:_UpdateColorCross()
  end
end

function ColorPickerClass:_OnBrightnessSliderClick(inputObject: InputObject)
  local _, relY = GuiUtilities.GetClickOffsetFromObject(inputObject, self._colorBrightnessSlider)
  self._hsvVal = 1 - relY
  self:_UpdateBrightnessSlider()
  self:_CommitColorChange()
end

function ColorPickerClass:_CommitColorChange(color: Color3?)
  -- Applies and commits a new color to the picker.
  -- If a Color3 parameter is provided, updates internal HSV values accordingly. Used by manually setting the value.
  -- Otherwise, generates a color from current HSV state. Used by interacting with the picker.
  -- Also updates UI elements and triggers the value changed callback if set.
  if color then
    self._colorPicked = color
    local h, s, v = color:ToHSV()
    self._hsvHue = h
    self._hsvSat = s
    self._hsvVal = v
  else
    self._colorPicked = Color3.fromHSV(self._hsvHue, self._hsvSat, self._hsvVal)
  end

  self:_UpdateColorCodeLabel()
  self:_UpdateColorPreviewBox()
  if self._valueChangedFunction then -- fire value changed function
    self._valueChangedFunction(self._colorPicked)
  end
end

function ColorPickerClass:_UpdateColorCross()
  -- positions and paint the color cross
	self._colorCross.Position = UDim2.fromScale(self._hsvHue, 1 - self._hsvSat)
  self._colorCross.ImageColor3 = if 1 - self._hsvSat < 0.4 then Color3.new(1,1,1) else Color3.new(0,0,0)
end

function ColorPickerClass:_UpdateBrightnessSlider()
  self._colorBrightnessKnob.Position = UDim2.new(0.5, 0, 1 - self._hsvVal, 0)
  self._colorBrightnessSlider.UIGradient.Color = ColorSequence.new({
    ColorSequenceKeypoint.new(0, Color3.new(0, 0, 0)),
    ColorSequenceKeypoint.new(1, Color3.fromHSV(self._hsvHue, self._hsvSat, 1)),
  })
end

function ColorPickerClass:_UpdateColorCodeLabel()
  -- generate a color code string like this: R,G,B #HEX
  local R = math.clamp(math.round(self._colorPicked.R * 255), 0, 255)
  local G = math.clamp(math.round(self._colorPicked.G * 255), 0, 255)
  local B = math.clamp(math.round(self._colorPicked.B * 255), 0, 255)
  self._colorPickedHexCode = "#" .. string.upper(self._colorPicked:ToHex())
  self._colorPickedRGBCode = ("%d,%d,%d"):format(R, G, B)
  self._colorCodeBoxRGB.Text = self._colorPickedRGBCode
  self._colorCodeBoxHex.Text = self._colorPickedHexCode
end

function ColorPickerClass:_UpdateColorPreviewBox()
  self._colorPreviewBox.BackgroundColor3 = self._colorPicked
end

--- Sets the function to be called when the cancel button is clicked.
--- @param cf function -- A function to execute when cancel is pressed.
function ColorPickerClass:SetCancelFunction(cf: () -> ())
  self._buttonCancel:SetClickedFunction(cf)
end

--- Sets the function to be called when the confirm button is clicked.
--- Passes the currently selected color to the callback.
--- @param cf function -- A function that takes the selected Color3 as a parameter.
function ColorPickerClass:SetConfirmFunction(cf: (chosenColor: Color3) -> ())
  self._buttonConfirm:SetClickedFunction(function (...)
    cf(self._colorPicked)
  end)
end

--- Sets a callback function to be called when the color value changes.
--- Passing nil will remove the existing callback.
--- @param vcf (newValue: Color3) -> () | nil -- Function to call on color change, or nil to unbind.
function ColorPickerClass:SetValueChangedFunction(vcf: (newValue: Color3) -> () | nil)
  self._valueChangedFunction = vcf
end

--- Returns the main UI frame of the color picker.
--- @return Frame -- The root frame containing the color picker UI.
function ColorPickerClass:GetFrame(): Frame
  return self._frame
end

--- Gets the currently selected color in the color picker.
--- @return Color3 -- The current color selection.
function ColorPickerClass:GetValue(): Color3
  return self._colorPicked
end

--- Sets the currently selected color in the color picker.
--- @param newValue Color3 -- The color to set.
function ColorPickerClass:SetValue(newValue: Color3)
  self:_CommitColorChange(newValue)
  self:_UpdateColorCross()
  self:_UpdateBrightnessSlider()
end

--- Returns the currently picked color as a hex code string.
--- Example: "#FFFFFF" for white.
--- @return string -- The hex code representation of the picked color.
function ColorPickerClass:GetHexCode(): string
  return self._colorPickedHexCode
end


--- Returns the currently picked color as an RGB string.
--- Example: "255,255,255" for white.
--- @return string -- The RGB string representation of the picked color.
function ColorPickerClass:GetRGBCode(): string
  return self._colorPickedRGBCode
end

return ColorPickerClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\CustomTextButton.luau
``
----------------------------------------
--
-- CustomTextButton.lua
--
-- Creates text button with custom look & feel, hover/click effects.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

CustomTextButtonClass = {}
CustomTextButtonClass.__index = CustomTextButtonClass

--- CustomTextButtonClass constructor.
--- @param nameSuffix string -- Suffix to append to the button's name.
--- @param labelText string -- Text to display on the button.
--- @param square boolean? -- Optional flag to render the button with square corners.
--- @return CustomTextButtonClass -- A new instance of the custom text button class.
function CustomTextButtonClass.new(nameSuffix: string, labelText: string, square: boolean?)
	local self = {}
	setmetatable(self, CustomTextButtonClass)

	self._clickedFunction = nil

	local frame = Instance.new("Frame")
	frame.Name = "ButtonFrame  " .. nameSuffix
	frame.BackgroundTransparency = 1
	frame.BorderSizePixel = 0
	frame.Size = UDim2.new(0, 70, 0, 25 - GuiUtilities.kButtonVerticalFudge)

	local button = Instance.new("TextButton")
	button.Name = nameSuffix
	button.AnchorPoint = Vector2.new(0, 0.5)
	button.BackgroundTransparency = 0
	button.AutoButtonColor = false
	button.Text = labelText
	button.Font = Enum.Font.SourceSans
	button.TextSize = 15
	button.Position = UDim2.new(0, 0, 0.5, 0)
	button.Size = UDim2.new(1, 0, 1, GuiUtilities.kButtonVerticalFudge)
	button.RichText = true
	button.Parent = frame

	local uICorner = Instance.new("UICorner")
	uICorner.CornerRadius = UDim.new(0, 5)
	uICorner.Parent = button

	local uiStroke = Instance.new("UIStroke")
	uiStroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	uiStroke.Parent = button

	if square then
		button.BorderSizePixel = 1
		uiStroke.Enabled = false
		uICorner.CornerRadius = UDim.new(0, 0)
		uICorner.Parent = frame
	end

	GuiUtilities.syncGuiElementButtonColor(button)
	GuiUtilities.syncGuiElementFontColor(button)
	GuiUtilities.syncGuiElementBorderColor(button)
	GuiUtilities.syncGuiElementUIStrokeColor(uiStroke)

	self._frame = frame
	self._button = button

	self._clicked = false
	self._hovered = false
	self._disabled = false

	button.InputBegan:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseMovement then
			self._hovered = true
			self:_UpdateButtonVisual()
		end
	end)

	button.InputEnded:Connect(function(input)
		if input.UserInputType == Enum.UserInputType.MouseMovement then
			self._hovered = false
			self._clicked = false
			self:_UpdateButtonVisual()
		end
	end)

	button.MouseButton1Down:Connect(function()
		self._clicked = true
		self:_UpdateButtonVisual()
	end)

	button.MouseButton1Up:Connect(function()
		self._clicked = false
		self:_UpdateButtonVisual()
	end)

	GuiUtilities.BindThemeChanged(function()
		if self._disabled then task.delay(0, function()
			self:_UpdateButtonVisual()
		end) end
	end)

	button.Activated:Connect(function(inputObject, timesPressed)
		if self._clickedFunction then self._clickedFunction(inputObject, timesPressed) end
	end)

	self:_UpdateButtonVisual()

	return self
end

function CustomTextButtonClass:_UpdateButtonVisual()
	if self._disabled then -- background color
		self._button.BackgroundColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Disabled)
	elseif self._clicked then
		self._button.BackgroundColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Pressed)
	elseif self._hovered then
		self._button.BackgroundColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Hover)
	else
		self._button.BackgroundColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Default)
	end
	if self._disabled then -- button text color
		self._button.TextColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.ButtonText, Enum.StudioStyleGuideModifier.Disabled)
	else
		self._button.TextColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.ButtonText, Enum.StudioStyleGuideModifier.Default)
	end
end

-- Backwards compatibility (should be removed in the future)
CustomTextButtonClass.getButton = CustomTextButtonClass.GetButton

--- Returns the internal button instance.
--- @return TextButton -- The TextButton instance used in the custom button.
function CustomTextButtonClass:GetButton()
	return self._button
end

--- Returns the outer frame containing the button.
--- @return Frame -- The Frame instance wrapping the button.
function CustomTextButtonClass:GetFrame()
	return self._frame
end

--- Returns whether the button is currently disabled.
--- @return boolean -- True if the button is disabled, false otherwise.
function CustomTextButtonClass:GetDisabled()
	return self._disabled
end

--- Sets the disabled state of the button and updates its visual appearance.
--- @param state boolean -- True to disable the button, false to enable it.
function CustomTextButtonClass:SetDisabled(state: boolean)
	self._disabled = state
	self:_UpdateButtonVisual()
end

--- Sets the size of the button's outer frame.
--- @param size UDim2 -- The desired size for the frame.
function CustomTextButtonClass:SetSize(size: UDim2)
	self._frame.Size = size + UDim2.fromOffset(0, -GuiUtilities.kButtonVerticalFudge)
end

--- Sets the function to be called when the button is clicked.
--- @param cf (inputObject: InputObject, timesPressed: number) -> () -- A callback function or nil to remove the function.
function CustomTextButtonClass:SetClickedFunction(cf: (inputObject: InputObject, timesPressed: number) -> () | nil)
	self._clickedFunction = cf
end

return CustomTextButtonClass

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\DropdownMenu.luau
``
----------------------------------------
--
-- DropdownMenuClass.lua
--
-- Creates dropdown-style selection menu.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local kArrowDown = "rbxasset://textures/WindControl/ArrowDown.png"
local kDropdownButtonHeight = 23

DropdownMenuClass = {}
DropdownMenuClass.__index = DropdownMenuClass

DropdownMenuClass._defaultLength = 189

--- DropdownMenuClass constructor.
--- @param nameSuffix string -- Suffix to append to the dropdown's name.
--- @param labelText string -- Label text to display alongside the dropdown.
--- @param selectionTable {{Id: string | number, Text: string}} -- Table of selection options to populate the dropdown.
--- @param placeholderText string? -- Optional text to display when no option is selected.
--- @return DropdownMenuClass -- A new instance of the dropdown menu.
function DropdownMenuClass.new(nameSuffix: string, labelText: string, selectionTable: {{Id: number | string, Text: string}}, placeholderText: string?)
  local self = {}
  setmetatable(self, DropdownMenuClass)
  self._dropdownButtonHeight = kDropdownButtonHeight
  self._expandedSize = 0
  self._placeholderText = placeholderText or "Select option"

  local section = GuiUtilities.MakeStandardFixedHeightFrame('DMSection' .. nameSuffix)
  self._sectionFrame = section

  local label = GuiUtilities.MakeStandardPropertyLabel(labelText)
  label.Parent = section

  local button = Instance.new("TextButton")
  button.AutoButtonColor = false
  button.Text = ""
  button.Size = UDim2.new(0, 100, 0.6, 0)
  button.AnchorPoint = Vector2.new(0,0.5)
  button.Position = UDim2.new(0, GuiUtilities.StandardLineElementLeftMargin, 0.5, 0)
  button.Parent = section
  GuiUtilities.syncGuiElementBackgroundColor(button)
  GuiUtilities.syncGuiElementBorderColor(button)
  GuiUtilities.syncGuiElementInputFieldColor(button)

  local buttonLabel = Instance.new("TextLabel")
  buttonLabel.Name = "ButtonLabel"
  buttonLabel.BackgroundTransparency = 1
  buttonLabel.Text = self._placeholderText
  buttonLabel.Size = UDim2.new(0, 85, 1, 0)
  buttonLabel.AnchorPoint = Vector2.new(0,0.5)
  buttonLabel.Position = UDim2.new(0, 0, 0.5, 0)
  buttonLabel.Parent = button
  GuiUtilities.syncGuiElementFontColor(buttonLabel)

  local invisFrame = Instance.new("Frame")
  invisFrame.Size = UDim2.new(1,0,0,0)
  invisFrame.AnchorPoint = Vector2.new(0.5,0)
  invisFrame.Position = UDim2.new(0.5,0,1,0)
  invisFrame.BackgroundTransparency = 1
  invisFrame.ClipsDescendants = true
  invisFrame.Parent = button

  local contentsFrame = Instance.new("ScrollingFrame")
  contentsFrame.CanvasSize = UDim2.new(1,0,0,0)
  contentsFrame.ScrollBarThickness = 0
  contentsFrame.Size = UDim2.new(1,-2,0,self._expandedSize)
  contentsFrame.AnchorPoint = Vector2.new(0.5,0)
  contentsFrame.Position = UDim2.new(0.5,0,0,0)
  contentsFrame.BorderSizePixel = 1
  contentsFrame.ZIndex = 9
  contentsFrame.Parent = invisFrame
  GuiUtilities.syncGuiElementInputFieldColor(contentsFrame)
  GuiUtilities.syncGuiElementBorderColor(contentsFrame)

  local listLayout = Instance.new("UIListLayout")
  listLayout.FillDirection = Enum.FillDirection.Vertical
  listLayout.HorizontalAlignment = Enum.HorizontalAlignment.Left
  listLayout.SortOrder = Enum.SortOrder.LayoutOrder
  listLayout.Parent = contentsFrame

  local arrow = Instance.new("ImageLabel")
  arrow.Name = "Arrow"
  arrow.AnchorPoint = Vector2.new(1, 0)
  arrow.Position = UDim2.new(1, 0)
  arrow.Size = UDim2.new(0, 15, 1, 0)
  arrow.BackgroundTransparency = 1
  arrow.Image = kArrowDown
  arrow.Parent = button

  self._titleLabel = label
  self._dropButton = button
  self._buttonLabel = buttonLabel
  self._contentsFrame = contentsFrame
  self._invisFrame = invisFrame
  self._listLayout = listLayout
  self._arrow = arrow
  self._buttonArray = {}
  self._selected = ""
  self._expanded = false
  self._rightClickResetEnabled = true

  self:_SetButtonHoverEvents(button, Enum.StudioStyleGuideColor.InputFieldBackground)
  
  self._dropButton.MouseButton1Click:Connect(function()
    self:_ToggleExpand()
  end)

  self._dropButton.MouseButton2Click:Connect(function()
    if not self._rightClickResetEnabled then return end
    self:_Retract()
    self:ResetValue()
  end)

  if selectionTable then -- if the user provided a table of selections
    self:AddSelectionsFromTable(selectionTable)
  end

  GuiUtilities.BindThemeChanged(function () self:_UpdateColors() end)
  self:_UpdateColors()

  return self
end

function DropdownMenuClass:_ToggleExpand()
  -- get the widget
  local widget = self._invisFrame:FindFirstAncestorOfClass("DockWidgetPluginGui")
  if widget then
    -- now test if the bottom of the frame is below the absolute size of the widget
    local absSizeY = self._contentsFrame.AbsoluteSize.Y
    local absPosY = self._contentsFrame.AbsolutePosition.Y
    local absAdded
    if self._expanded and self._contentsFrame.AnchorPoint == Vector2.new(0.5,1) then
      absAdded = absSizeY+absPosY+absSizeY
    elseif self._contentsFrame.AnchorPoint == Vector2.new(0.5,1) then
      absAdded = absSizeY+absPosY+absSizeY
    else
      absAdded = absSizeY+absPosY
    end

    if not self._expanded then
      if absAdded >= widget.AbsoluteSize.Y then
        self._contentsFrame.AnchorPoint = Vector2.new(0.5,1)
        self._contentsFrame.Position = UDim2.new(0.5,0,1,0)
        self._invisFrame.AnchorPoint = Vector2.new(0.5,1)
        self._invisFrame.Position = UDim2.new(0.5,0,0,0)
      else
        self._contentsFrame.AnchorPoint = Vector2.new(0.5,0)
        self._contentsFrame.Position = UDim2.new(0.5,0,0,0)
        self._invisFrame.AnchorPoint = Vector2.new(0.5,0)
        self._invisFrame.Position = UDim2.new(0.5,0,1,0)
      end
    end
  end

  if self._expanded then
    self:_Retract()
    self._expanded = false
  else
    self:_Expand()
    self._expanded = true
  end
end

function DropdownMenuClass:_Retract()
  self._invisFrame:TweenSize(UDim2.new(1,2,0,0), Enum.EasingDirection.Out, Enum.EasingStyle.Quad, 0.15, true)
  self._expanded = false
end

function DropdownMenuClass:_Expand()
  self._invisFrame:TweenSize(UDim2.new(1,2,0,self._expandedSize+2), Enum.EasingDirection.In, Enum.EasingStyle.Quad, 0.15, true)
  self._expanded = true
end

function DropdownMenuClass:_UpdateSize()
  local count = 0
  for _,v in pairs(self._buttonArray) do
    count += 1
  end
  if count >= 7 then
    self._canvasSize = count*self._dropdownButtonHeight
    self._expandedSize = DropdownMenuClass._defaultLength
    self._contentsFrame.CanvasSize = UDim2.new(1,-2,0,self._canvasSize)
    self._contentsFrame.Size = UDim2.new(1,-2,0,self._expandedSize)
    if self._expanded then
      self._invisFrame:TweenSize(UDim2.new(1,2,0,self._expandedSize), Enum.EasingDirection.In, Enum.EasingStyle.Quad, 0.15, true)
    end
  else
    self._canvasSize = count*self._dropdownButtonHeight
    self._expandedSize = count*self._dropdownButtonHeight

    self._contentsFrame.CanvasSize = UDim2.new(1,-2,0,self._canvasSize)
    self._contentsFrame.Size = UDim2.new(1,-2,0,self._expandedSize)
    if self._expanded then
      self._invisFrame:TweenSize(UDim2.new(1,2,0,self._expandedSize), Enum.EasingDirection.In, Enum.EasingStyle.Quad, 0.15, true)
    end
  end

end

function DropdownMenuClass:_UpdateColors()
  local themeName = GuiUtilities.GetThemeName()
  self._arrow.ImageColor3 = if themeName == "Light" then GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Border) else GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.TitlebarText)
end

function DropdownMenuClass:_SetButtonHoverEvents(button: GuiButton, defaultStyle: Enum.StudioStyleGuideColor)
  button.InputBegan:Connect(function(inputObject: InputObject)
    if inputObject.UserInputType ~= Enum.UserInputType.MouseMovement then return end
    button.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Hover)
  end)

  button.InputEnded:Connect(function (inputObject: InputObject)
    if inputObject.UserInputType ~= Enum.UserInputType.MouseMovement then return end
    button.BackgroundColor3 = GuiUtilities.GetThemeColor(defaultStyle)
  end)

  button.MouseButton1Down:Connect(function()
    button.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Pressed)
  end)

  button.MouseButton1Up:Connect(function()
    button.BackgroundColor3 = GuiUtilities.GetThemeColor(defaultStyle)
  end)
end

--- Adds a single selection item to the dropdown menu.
--- @param selectionTable {Id: string | number, Text: string} -- Table containing selection data with `Text` (string) and `Id` (string or number).
function DropdownMenuClass:AddSelectionItem(selectionTable: {Id: number | string, Text: string})
  assert(type(selectionTable.Text) == "string", "Expected String for Text, got "..type(selectionTable.Text))
  assert(type(selectionTable.Id) == "string" or type(selectionTable.Id) == "number", "Expected String or Number for Id, got " .. type(selectionTable.Id))

  if self._buttonArray[selectionTable.Id] then -- if the selection already exists
    return warn("There is already a selection with identifier: "..selectionTable.Id)
  end

  local button = Instance.new("TextButton")
  button.Name = selectionTable.Text
  button.Text = selectionTable.Text
  button.BorderMode = Enum.BorderMode.Inset
  button.Size = UDim2.new(1,0,0,self._dropdownButtonHeight)
  button.BackgroundTransparency = 0
  button.AutoButtonColor = false
  button.ZIndex = 10
  button.Parent = self._contentsFrame
  GuiUtilities.syncGuiElementFontColor(button)
  GuiUtilities.syncGuiElementBorderColor(button)
  GuiUtilities.syncGuiElementBackgroundColor(button)

  local connection = button.MouseButton1Click:Connect(function()
    self:SetValue(selectionTable.Id)
    self:_Retract()
  end)

  self._buttonArray[selectionTable.Id] = {
    Id = selectionTable.Id,
    Text = selectionTable.Text,
    button = button,
    connection = connection
  }

  self:_SetButtonHoverEvents(button, Enum.StudioStyleGuideColor.MainBackground)

  -- change contentsFrame size. Remember to do this at the end next time.
  self:_UpdateSize()
  return
end

--- Removes a selection item from the dropdown menu by its identifier.
--- @param identifier string | number -- Identifier of the selection to remove.
function DropdownMenuClass:RemoveSelection(identifier)
  if self._buttonArray[identifier] then
    self._buttonArray[identifier].connection:Disconnect()
    self._buttonArray[identifier].button:Destroy()
    self._buttonArray[identifier] = nil
    self:_UpdateSize() -- resize frame
  end
end

--- Adds multiple selection items to the dropdown from a table of selection tables.
--- @param selectionTable table -- Table of selection tables to add.
function DropdownMenuClass:AddSelectionsFromTable(selectionTable)
  assert(type(selectionTable) == "table", "Expected table. Got "..type(selectionTable))

  for i,v in pairs(selectionTable) do
    if type(v) == "table" then
      self:AddSelectionItem(v)
    end
  end
end

--- Resets the dropdown selection to none and restores placeholder text.
function DropdownMenuClass:ResetValue()
  self._selected = ""
  self._buttonLabel.Text = self._placeholderText
end

--- Sets the current value of the dropdown to the option with the given identifier.
--- Triggers the value changed callback if defined.
--- @param newValue number | string -- The identifier of the option to select.
function DropdownMenuClass:SetValue(newValue: number | string)
  assert(self._buttonArray[newValue] ~= nil, "Could not find an option with the id: " .. newValue)
  self._selected = newValue
  self._buttonLabel.Text = self._buttonArray[newValue].Text
  if (self._valueChangedFunction) then 
    self._valueChangedFunction(newValue, self._buttonArray[newValue].Text)
  end
end

--- Returns the value (Id) of the selected option, or nil if nothing is selected.
--- @return number | string | nil -- Id of selected option, or nil.
function DropdownMenuClass:GetValue(): number | string | nil
  if self._selected == "" then return nil end
  return self._buttonArray[self._selected].Id
end

--- Returns the text (Text) of the selected option, or nil if nothing is selected.
--- @return string | nil -- Text of selected option, or nil.
function DropdownMenuClass:GetText(): string | nil
  if self._selected == "" then return nil end
  return self._buttonArray[self._selected].Text
end

--- Returns the frame containing the full dropdown section (title + contents).
--- @return Frame -- The section frame.
function DropdownMenuClass:GetSectionFrame()
  return self._sectionFrame
end

--- Returns the frame containing the dropdown's content (selection options).
--- @return Frame -- The contents frame.
function DropdownMenuClass:GetContentsFrame()
  return self._contentsFrame
end

--- Changes the label text displayed above the dropdown menu.
--- @param labelText string -- New label text to display.
function DropdownMenuClass:SetLabelText(labelText: string)
  assert(type(labelText) == "string", "Expected string. Got "..type(labelText))
  self._titleLabel.Text = labelText
end

--- Sets the function to call when the selected value changes.
--- @param vcFunction (newValue: number | string) -> () -- A function that takes the new value (number or string) as an argument.
function DropdownMenuClass:SetValueChangedFunction(vcFunction: (newValue: number | string, newText: string) -> ()) 
  self._valueChangedFunction = vcFunction
end

--- Sets the sort order of the dropdown menu items within a UI layout.
--- Defaults to `LayoutOrder` if not explicitly set.
--- @param layoutOrder Enum.SortOrder -- The sort order to apply (e.g., Name, LayoutOrder).
function DropdownMenuClass:SetSortOrder(layoutOrder: Enum.SortOrder)
  self._listLayout.SortOrder = layoutOrder
end

--- Enables or disables the ability to reset the dropdown selection via right-click.
--- @param state boolean -- Whether right-click reset is enabled.
function DropdownMenuClass:SetRightClickResetEnabled(state: boolean)
  self._rightClickResetEnabled = state
end

return DropdownMenuClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\HorizontalLine.luau
``
----------------------------------------
--
-- HorizontalLineClass.lua
--
-- Creates a horizontal line of a fixed height and color
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local kDefaultColor = Color3.new(0.5, 0.5, 0.5)

local HorizontalLineClass = {}
HorizontalLineClass.__index = HorizontalLineClass

--- HorizontalLineClass constructor.
--- @param nameSuffix string -- Suffix to append to the line's name for uniqueness.
--- @param height number? -- Optional height of the horizontal line. Defaults to a predefined value if not specified.
--- @param color Color3? -- Optional color of the horizontal line. Defaults to a standard UI color if not specified.
--- @return HorizontalLineClass -- A new instance of the horizontal line class.
function HorizontalLineClass.new(nameSuffix: string, height: number?, color: Color3?)
  local self = setmetatable({}, HorizontalLineClass)
  
  local frame = Instance.new("Frame")
  frame.Name = "HLF " .. nameSuffix
  frame.BackgroundTransparency = 0
  frame.BorderSizePixel = 0
  frame.Size = UDim2.new(1, 0, 0, height or GuiUtilities.kStandardPropertyHeight)

  frame.BackgroundColor3 = if color then color else kDefaultColor
  if not color then GuiUtilities.syncGuiElementColorCustom(frame, "BackgroundColor3", Enum.StudioStyleGuideColor.Border) end
  
  self._frame = frame
  
  return self
end

--- Returns the main frame representing the horizontal line UI element.
--- @return Frame -- The UI frame containing the horizontal line.
function HorizontalLineClass:GetFrame()
  return self._frame
end 

return HorizontalLineClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\ImageButtonWithText.luau
``
----------------------------------------
--
-- ImageButtonWithText.lua
--
-- An image button with text underneath.  Standardized hover, clicked, and 
-- selected states.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

ImageButtonWithTextClass = {}
ImageButtonWithTextClass.__index = ImageButtonWithTextClass

local kSelectedBaseTransparency = 0.2
local kAdditionalTransparency = 0.1

--- ImageButtonWithTextClass constructor.
--- @param name string -- The name of the button instance.
--- @param layoutOrder number -- The layout order for the button in a UI layout.
--- @param icon string -- The asset ID or path for the image icon.
--- @param text string -- The text label to display on the button.
--- @param buttonSize UDim2 -- The size of the entire button.
--- @param imageSize UDim2 -- The size of the image icon inside the button.
--- @param imagePos UDim2 -- The position of the image icon within the button.
--- @param textSize UDim2 -- The size of the text label inside the button.
--- @param textPos UDim2 -- The position of the text label within the button.
--- @return ImageButtonWithTextClass -- A new instance of ImageButtonWithTextClass.
function ImageButtonWithTextClass.new(name: string, layoutOrder: number, icon: string, text: string, buttonSize: UDim2, imageSize: UDim2, imagePos: UDim2, textSize: UDim2, textPos: UDim2)
  local self = {}
  setmetatable(self, ImageButtonWithTextClass)

  self._clickedFunction = nil

  local button = Instance.new("ImageButton")
  button.Name = name
  button.AutoButtonColor = false
  button.Size = buttonSize
  button.BorderSizePixel = 1
  -- Image-with-text button has translucent background and "selected" background color.
  -- When selected we set transluency to not-zero so we see selected color.
  button.BackgroundTransparency = 1 

  button.LayoutOrder = layoutOrder

  local buttonIcon = Instance.new("ImageLabel")
  buttonIcon.BackgroundTransparency = 1
  buttonIcon.Image = icon or ""
  buttonIcon.Size = imageSize
  buttonIcon.Position = imagePos
  buttonIcon.Parent = button

  local textLabel = Instance.new("TextLabel")
  textLabel.BackgroundTransparency = 1
  textLabel.Text = text
  textLabel.Size = textSize
  textLabel.Position = textPos
  textLabel.TextScaled = true
  textLabel.Font = Enum.Font.SourceSans
  textLabel.Parent = button

  GuiUtilities.syncGuiElementFontColor(textLabel)

  local uiTextSizeConstraint = Instance.new("UITextSizeConstraint")
  -- Spec asks for fontsize of 12 pixels, but in Roblox the text font sizes look smaller than the mock
  --Note: For this font the Roblox text size is 25.7% larger than the design spec. 
  uiTextSizeConstraint.MaxTextSize = 15                                              
  uiTextSizeConstraint.Parent = textLabel

  self._button = button
  self._clicked = false
  self._hovered = false
  self._selected = false

  button.InputBegan:Connect(function(input)
    if (input.UserInputType == Enum.UserInputType.MouseMovement) then               
      self._hovered = true
      self:_UpdateButtonVisual()
    end
  end)


  button.InputEnded:Connect(function(input)
    if (input.UserInputType == Enum.UserInputType.MouseMovement) then               
      self._hovered = false
      self._clicked = false
      self:_UpdateButtonVisual()
    end
  end)    

  button.MouseButton1Down:Connect(function()
    self._clicked = true
    self:_UpdateButtonVisual()
  end)

  button.MouseButton1Up:Connect(function()
    self._clicked = false
    self:_UpdateButtonVisual()
  end)

  button.Activated:Connect(function (inputObject, timesPressed)
    if self._clickedFunction then
      self._clickedFunction(inputObject, timesPressed)
    end
  end)
  
  local function updateButtonVisual()
    self:_UpdateButtonVisual()
  end
  GuiUtilities.BindThemeChanged(updateButtonVisual)

  self:_UpdateButtonVisual()

  return self
end

function ImageButtonWithTextClass:_UpdateButtonVisual()
  -- Possibilties:
  if (self._clicked) then 
    -- This covers 'clicked and selected' or 'clicked'
    self._button.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, 
      Enum.StudioStyleGuideModifier.Selected)
    self._button.BorderColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Border, 
      Enum.StudioStyleGuideModifier.Selected)
    if (self._selected) then 
      self._button.BackgroundTransparency = GuiUtilities.kButtonBackgroundIntenseTransparency
    else
      self._button.BackgroundTransparency = GuiUtilities.kButtonBackgroundTransparency
    end
  elseif (self._hovered) then 
    -- This covers 'hovered and selected' or 'hovered'
    self._button.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, 
      Enum.StudioStyleGuideModifier.Hover)
    self._button.BorderColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Border, 
      Enum.StudioStyleGuideModifier.Hover)
    if (self._selected) then 
      self._button.BackgroundTransparency = GuiUtilities.kButtonBackgroundIntenseTransparency
    else
      self._button.BackgroundTransparency = GuiUtilities.kButtonBackgroundTransparency
    end
  elseif (self._selected) then 
    -- This covers 'selected'
    self._button.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, 
      Enum.StudioStyleGuideModifier.Selected)
    self._button.BorderColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Border, 
      Enum.StudioStyleGuideModifier.Selected)
    self._button.BackgroundTransparency = GuiUtilities.kButtonBackgroundTransparency
  else
    -- This covers 'no special state'
    self._button.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button)
    self._button.BorderColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Border)
    self._button.BackgroundTransparency = 1
  end
end

--- Returns the internal ImageButton instance.
--- @return ImageButton -- The ImageButton associated with this class instance.
function ImageButtonWithTextClass:GetButton()
  return self._button
end

--- Sets the selected state of the button and updates its visual appearance.
--- @param selected boolean -- Whether the button should be marked as selected.
function ImageButtonWithTextClass:SetSelected(selected)
  self._selected = selected
  self:_UpdateButtonVisual()
end

--- Returns whether the button is currently selected.
--- @return boolean -- True if the button is selected; false otherwise.
function ImageButtonWithTextClass:GetSelected()
  return self._selected
end

--- Sets the function to be called when the button is clicked.
--- @param cf (inputObject: InputObject, timesPressed: number) -> () -- A callback function or nil to remove the function.
function ImageButtonWithTextClass:SetClickedFunction(cf: (inputObject: InputObject, timesPressed: number) -> () | nil)
  self._clickedFunction = cf
end


return ImageButtonWithTextClass

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledCheckbox.luau
``
----------------------------------------
--
-- LabeledCheckbox.lua
--
-- Creates a frame containing a label and a checkbox.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local kCheckboxWidth = GuiUtilities.kCheckboxWidth

local kMinTextSize = 14
local kMinHeight = 24
local kMinLabelWidth = GuiUtilities.kCheckboxMinLabelWidth
local kMinMargin = GuiUtilities.kCheckboxMinMargin
local kMinButtonWidth = kCheckboxWidth
local kStandardButtonPos = UDim2.new(0, GuiUtilities.StandardLineLabelLeftMargin, 0.5, 0)
local kStandardLabelPos = UDim2.new(
	0,
	GuiUtilities.StandardLineLabelLeftMargin + kCheckboxWidth + kMinMargin,
	0.5,
	GuiUtilities.kTextVerticalFudge
)
local kStandardLabelSize = UDim2.new(1, -(GuiUtilities.StandardLineLabelLeftMargin + kCheckboxWidth + kMinMargin), 1, 0)

local kMinLabelSize = UDim2.new(0, kMinLabelWidth, 0, kMinHeight)
local kMinLabelPos = UDim2.new(0, kMinButtonWidth + kMinMargin, 0, kMinHeight / 2)

local kMinButtonSize = UDim2.new(0, kMinButtonWidth, 0, kMinButtonWidth)
local kMinButtonPos = UDim2.new(0, 0, 0, kMinHeight / 2)

local kCheckImageWidth = 8
local kMinCheckImageWidth = kCheckImageWidth

local _kCheckImageSize = UDim2.new(0, kCheckImageWidth, 0, kCheckImageWidth)
local kMinCheckImageSize = UDim2.new(0, kMinCheckImageWidth, 0, kMinCheckImageWidth)

local kDisabledCheckImage = "rbxasset://textures/DeveloperFramework/checkbox_unchecked_dark.png"
local kEnabledCheckImageLight = "rbxasset://textures/PluginManagement/checked_light.png"
local kEnabledCheckImageDark = "rbxasset://textures/PluginManagement/checked_dark.png"
local kCheckboxFrameImage = kDisabledCheckImage

LabeledCheckboxClass = {}
LabeledCheckboxClass.__index = LabeledCheckboxClass

LabeledCheckboxClass.kMinFrameSize = UDim2.new(0, kMinLabelWidth + kMinMargin + kMinButtonWidth, 0, kMinHeight)

--- LabeledCheckboxClass constructor.
--- @param nameSuffix string -- Suffix to append to the checkbox's name for uniqueness.
--- @param labelText string -- Text to display next to the checkbox.
--- @param initValue boolean -- Initial checked state of the checkbox.
--- @param initDisabled boolean -- Whether the checkbox should be initially disabled.
--- @return LabeledCheckboxClass -- A new instance of the labeled checkbox class.
function LabeledCheckboxClass.new(nameSuffix: string, labelText: string, initValue: boolean, initDisabled: boolean)
	local self = {}
	setmetatable(self, LabeledCheckboxClass)

	initValue = not not initValue
	initDisabled = not not initDisabled

	local frame = GuiUtilities.MakeStandardFixedHeightFrame("CBF" .. nameSuffix)

	local fullBackgroundButton = Instance.new("TextButton")
	fullBackgroundButton.Name = "FullBackground"
	fullBackgroundButton.Parent = frame
	fullBackgroundButton.BackgroundTransparency = 1
	fullBackgroundButton.Size = UDim2.new(1, 0, 1, 0)
	fullBackgroundButton.Position = UDim2.new(0, 0, 0, 0)
	fullBackgroundButton.Text = ""

	local label = GuiUtilities.MakeStandardPropertyLabel(labelText, true)
	label.Parent = fullBackgroundButton
	label.Position = kStandardLabelPos
	label.Size = kStandardLabelSize
	label.TextXAlignment = Enum.TextXAlignment.Left

	local button = Instance.new("ImageButton")
	button.Name = "Button"
	button.Size = UDim2.new(0, kCheckboxWidth, 0, kCheckboxWidth)
	button.AnchorPoint = Vector2.new(0, 0.5)
	button.BackgroundTransparency = 1
	button.Position = kStandardButtonPos
	button.Parent = fullBackgroundButton
	button.Image = kCheckboxFrameImage
	button.BorderSizePixel = 0
	button.AutoButtonColor = false

	local checkImage = Instance.new("ImageLabel")
	checkImage.Name = "CheckImage"
	checkImage.Parent = button
	checkImage.Image = kEnabledCheckImageLight
	checkImage.Visible = false
	checkImage.Size = UDim2.new(1, 3, 1, 3)
	checkImage.AnchorPoint = Vector2.new(0.5, 0.5)
	checkImage.Position = UDim2.new(0.5, 0, 0.5, 0)
	checkImage.BackgroundTransparency = 1
	checkImage.BorderSizePixel = 0

	self._frame = frame
	self._button = button
	self._label = label
	self._checkImage = checkImage
	self._fullBackgroundButton = fullBackgroundButton
	self._useDisabledOverride = false
	self._disabledOverride = false
	self:SetDisabled(initDisabled)

	self._value = not initValue
	self:SetValue(initValue)

	self:_SetupMouseClickHandling()

	GuiUtilities.BindThemeChanged(function()
		self:_UpdateFontColors()
	end)
	GuiUtilities.BindThemeChanged(function()
		self:_UpdateAppearance()
	end)
	self:_UpdateAppearance()
	self:_UpdateFontColors()

	return self
end

function LabeledCheckboxClass:_MaybeToggleState()
	if not self._disabled then self:SetValue(not self._value) end
end

function LabeledCheckboxClass:_SetupMouseClickHandling()
	self._button.MouseButton1Down:Connect(function()
		self:_MaybeToggleState()
	end)

	self._fullBackgroundButton.MouseButton1Down:Connect(function()
		self:_MaybeToggleState()
	end)
end

function LabeledCheckboxClass:_HandleUpdatedValue()
	--self._checkImage.Visible = self:GetValue()

	if not self._checkImage.Visible then self._checkImage.Visible = true end

	self:_UpdateAppearance()

	if self._valueChangedFunction then self._valueChangedFunction(self:GetValue()) end
end

function LabeledCheckboxClass:_UpdateFontColors()
	if self._disabled then
		self._label.TextColor3 =
			GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.MainText, Enum.StudioStyleGuideModifier.Disabled)
	else
		self._label.TextColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.MainText)
	end
end

function LabeledCheckboxClass:_UpdateAppearance()
	if self:GetValue() then
		self._checkImage.Image = if GuiUtilities.GetThemeName() == "Light"
			then kEnabledCheckImageLight
			else kEnabledCheckImageDark
		self._checkImage.ImageColor3 = if GuiUtilities.GetThemeName() == "Light"
			then Color3.fromRGB(219, 219, 219)
			else Color3.new(1, 1, 1)
	else
		self._checkImage.Image = kDisabledCheckImage
		self._checkImage.ImageColor3 = GuiUtilities.GetThemeColor(
			Enum.StudioStyleGuideColor.CheckedFieldBackground,
			Enum.StudioStyleGuideModifier.Default
		)
	end
	self._button.Image = kCheckboxFrameImage
end

--- Enables the small size variant for the checkbox UI.
--- This adjusts the checkbox to use smaller dimensions, fixed width layout,
--- and places the checkbox box before the label.
--- Fixed width instead of flood-fill.
function LabeledCheckboxClass:UseSmallSize()
	self._label.TextSize = kMinTextSize
	self._label.Size = kMinLabelSize
	self._label.Position = kMinLabelPos
	self._label.TextXAlignment = Enum.TextXAlignment.Left

	self._button.Size = kMinButtonSize
	self._button.Position = kMinButtonPos

	self._checkImage.Size = kMinCheckImageSize

	self._frame.Size = LabeledCheckboxClass.kMinFrameSize
	self._frame.BackgroundTransparency = 1
end

--- Returns the UI frame of the labeled checkbox.
--- @return Frame -- The main frame containing the checkbox and label.
function LabeledCheckboxClass:GetFrame(): Frame
	return self._frame
end

--- Returns the current value of the checkbox.
--- If disabled and an override is active, returns the override value instead.
--- @return boolean -- The current effective value of the checkbox.
function LabeledCheckboxClass:GetValue(): boolean
	-- If button is disabled, and we should be using a disabled override,
	-- use the disabled override.
	if self._disabled and self._useDisabledOverride then
		return self._disabledOverride
	else
		return self._value
	end
end

--- Returns the label UI element associated with the checkbox.
--- @return TextLabel -- The label component of the checkbox.
function LabeledCheckboxClass:GetLabel(): TextLabel
	return self._label
end

--- Returns the button UI element that represents the checkbox.
--- @return TextButton -- The button used to toggle the checkbox state.
function LabeledCheckboxClass:GetButton(): TextButton
	return self._button
end

--- Sets a callback function to be called when the checkbox value changes.
--- @param vcFunction (newValue: boolean) -> () -- The function to call on value change.
function LabeledCheckboxClass:SetValueChangedFunction(vcFunction: (newValue: boolean) -> ())
	self._valueChangedFunction = vcFunction
end

--- Sets the disabled state of the checkbox.
--- Updates visuals and optionally triggers a value update if the state change affects the value.
--- @param newDisabled boolean -- Whether the checkbox should be disabled.
function LabeledCheckboxClass:SetDisabled(newDisabled: boolean)
	local originalValue = self:GetValue()

	if newDisabled ~= self._disabled then
		self._disabled = newDisabled

		-- if we are no longer disabled, then we don't need or want
		-- the override any more.  Forget it.
		if not self._disabled then self._useDisabledOverride = false end

		if newDisabled then
			self._checkImage.Image = kDisabledCheckImage
		else
			self._checkImage.Image = kEnabledCheckImageLight
		end

		self:_UpdateFontColors()
		self:_UpdateAppearance()
		self._button.BackgroundColor3 = self._disabled and GuiUtilities.kButtonDisabledBackgroundColor
			or GuiUtilities.kButtonStandardBackgroundColor
		self._button.BorderColor3 = self._disabled and GuiUtilities.kButtonDisabledBorderColor
			or GuiUtilities.kButtonStandardBorderColor
		if self._disabledChangedFunction then self._disabledChangedFunction(self._disabled) end
	end

	local newValue = self:GetValue()
	if newValue ~= originalValue then self:_HandleUpdatedValue() end
end

--- Returns whether the checkbox is currently disabled.
--- @return boolean -- True if the checkbox is disabled; otherwise false.
function LabeledCheckboxClass:GetDisabled(): boolean
	return self._disabled
end

--- Disables the checkbox and forces it to use an override value while disabled.
--- This is useful for displaying a locked state while maintaining UI logic.
--- @param overrideValue boolean -- The forced value to use while disabled.
function LabeledCheckboxClass:DisableWithOverrideValue(overrideValue: boolean)
	-- Disable this checkbox.  While disabled, force value to override
	-- value.
	local oldValue = self:GetValue()
	self._useDisabledOverride = true
	self._disabledOverride = overrideValue
	self:SetDisabled(true)
	local newValue = self:GetValue()
	if oldValue ~= newValue then self:_HandleUpdatedValue() end
end

--- Sets the value of the checkbox manually.
--- Triggers any relevant updates if the value has changed.
--- @param newValue boolean -- The new value to assign to the checkbox.
function LabeledCheckboxClass:SetValue(newValue: boolean)
	if newValue ~= self._value then
		self._value = newValue

		self:_HandleUpdatedValue()
	end
end

return LabeledCheckboxClass

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledColorInputPicker.luau
``
----------------------------------------
--
-- LabeledColorInput.lua
--
-- Creates a frame containing a label and a text input control.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local ColorPicker = require("./ColorPicker")

local kTextInputWidth = 100
local kTextBoxInternalPadding = 4

LabeledColorInputPickerClass = {}
LabeledColorInputPickerClass.__index = LabeledColorInputPickerClass

function round(x)
  return x + 0.5 - (x + 0.5) % 1
end

--- LabeledColorInputPickerClass constructor.
--- @param nameSuffix string -- Suffix to append to the element's name for uniqueness.
--- @param labelText string -- Text label displayed alongside the color input.
--- @param defaultValue Color3 -- The default color value to initialize the input with.
--- @return LabeledColorInputPickerClass -- A new instance of the labeled color input class.
function LabeledColorInputPickerClass.new(nameSuffix: string, labelText: string, defaultValue: Color3)
  local self = {}
  setmetatable(self, LabeledColorInputPickerClass)

  -- Note: we are using "graphemes" instead of characters.
  -- In modern text-manipulation-fu, what with internationalization, 
  -- emojis, etc, it's not enough to count characters, particularly when 
  -- concerned with "how many <things> am I rendering?".
  -- We are using the 
  self._MaxGraphemes = 20

  self._valueChangedFunction = nil
  self._focusLostFunction = nil

  defaultValue = defaultValue or Color3.new(1,1,1)

  local frame = Instance.new("Frame")
  frame.Name = "CTIF" .. nameSuffix
  frame.Position = UDim2.new(0, 0, 1, 0)
  frame.Size = UDim2.new(1, 0, 0, 0)
  frame.BorderSizePixel = 0
  frame.AutomaticSize = Enum.AutomaticSize.Y
  GuiUtilities.syncGuiElementBackgroundColor(frame)

  local inputFrame = GuiUtilities.MakeStandardFixedHeightFrame("InputFrame")
  inputFrame.Parent = frame

  local label = GuiUtilities.MakeStandardPropertyLabel(labelText)
  label.Parent = inputFrame
  self._label = label

  -- Dumb hack to add padding to text box,
  local colorFrame = Instance.new("ImageButton")
  colorFrame.Name = "Color"
  colorFrame.AutoButtonColor = true
  colorFrame.Size = UDim2.new(0, 12, 0, 12)
  colorFrame.Position = UDim2.new(0, GuiUtilities.StandardLineElementLeftMargin, .5, 0)
  colorFrame.AnchorPoint = Vector2.new(0, .5)
  colorFrame.Parent = inputFrame
  colorFrame.BackgroundColor3 = defaultValue
  colorFrame.Image = ""
  GuiUtilities.syncGuiElementBorderColor(colorFrame)

  local textBoxWrapperFrame = Instance.new("Frame")
  textBoxWrapperFrame.Name = "Wrapper"
  textBoxWrapperFrame.Size = UDim2.new(0, kTextInputWidth - 20, 0.6, 0)
  textBoxWrapperFrame.Position = UDim2.new(0, GuiUtilities.StandardLineElementLeftMargin + 20, .5, 0)
  textBoxWrapperFrame.AnchorPoint = Vector2.new(0, .5)
  textBoxWrapperFrame.Parent = inputFrame
  GuiUtilities.syncGuiElementInputFieldColor(textBoxWrapperFrame)
  GuiUtilities.syncGuiElementBorderColor(textBoxWrapperFrame)

  local textBox = Instance.new("TextBox")
  textBox.Parent = textBoxWrapperFrame
  textBox.Name = "TextBox"
  textBox.Text = string.format("[%s, %s, %s]", tostring(round(defaultValue.R * 255)), tostring(round(defaultValue.G * 255)), tostring(round(defaultValue.B * 255)))
  textBox.Font = Enum.Font.SourceSans
  textBox.TextSize = 15
  textBox.BackgroundTransparency = 1
  textBox.TextXAlignment = Enum.TextXAlignment.Left
  textBox.Size = UDim2.new(1, -kTextBoxInternalPadding, 1, GuiUtilities.kTextVerticalFudge)
  textBox.Position = UDim2.new(0, kTextBoxInternalPadding, 0, 0)
  textBox.ClipsDescendants = true
  textBox.ClearTextOnFocus = false
  GuiUtilities.syncGuiElementFontColor(textBox)

  textBox:GetPropertyChangedSignal("Text"):Connect(function()
    -- Never let the text be too long.
    -- Careful here: we want to measure number of graphemes, not characters, 
    -- in the text, and we want to clamp on graphemes as well.
    if (utf8.len(self._textBox.Text) > self._MaxGraphemes) then 
      local count = 0
      for start, stop in utf8.graphemes(self._textBox.Text) do
        count = count + 1
        if (count > self._MaxGraphemes) then 
          -- We have gone one too far.
          -- clamp just before the beginning of this grapheme.
          self._textBox.Text = string.sub(self._textBox.Text, 1, start-1)
          break
        end
      end
      -- Don't continue with rest of function: the resetting of "Text" field
      -- above will trigger re-entry.  We don't need to trigger value
      -- changed function twice.
      return
    end

    self._value = self._textBox.Text
    if (self._valueChangedFunction) then 
      self._valueChangedFunction(self._value)
    end
  end)

  textBox.FocusLost:Connect(function (enterPressed: boolean)
    self:_GuessColorFromInputValue()
    if self._focusLostFunction then
      self._focusLostFunction(enterPressed)
    end
  end)

  local colorPickerComponent = ColorPicker.new("Picker")
  colorPickerComponent:SetValue(defaultValue)
  colorPickerComponent:GetFrame().Parent = frame
  colorPickerComponent:GetFrame().Position = UDim2.new(0, 43, 0, 30)
  colorPickerComponent:GetFrame().Visible = false
  colorPickerComponent._buttonConfirm:GetFrame().Visible = false
  colorPickerComponent._buttonCancel:GetButton().Text = "Close"
  colorPickerComponent._colorPreviewBox.Visible = false
  colorPickerComponent._colorCodeBoxRGB.Position = UDim2.new(0, 26, 0.5, 0)
  colorPickerComponent._colorCodeBoxHex.Position = UDim2.new(0, 92, 0.5, 0)

  colorPickerComponent:SetCancelFunction(function ()
    colorPickerComponent:GetFrame().Visible = false
  end)

  colorPickerComponent:SetValueChangedFunction(function (newValue: Color3)
    self._colorValue = newValue
    self:_UpdateColorFrame()
    self:_UpdateInputValue()
  end)

  colorFrame.MouseButton1Click:Connect(function ()
    if not self._colorPickerEnabled then return end
    colorPickerComponent:GetFrame().Visible = not colorPickerComponent:GetFrame().Visible
  end)

  self._frame = frame
  self._textBox = textBox
  self._colorFrame = colorFrame
  self._value = self._textBox.Text
  self._colorValue = defaultValue
  self._colorPickerComponent = colorPickerComponent
  self._colorPickerFrame = colorPickerComponent:GetFrame()
  self._colorPickerEnabled = true

  return self
end

function LabeledColorInputPickerClass:_UpdateColorFrame()
  self._colorFrame.BackgroundColor3 = self._colorValue
end

function LabeledColorInputPickerClass:_UpdateInputValue()
  self._value = if self._colorPickerEnabled then
    `[{self._colorPickerComponent:GetRGBCode()}]`
  else
    string.format(
      "[%s, %s, %s]",
      tostring(round(self._colorValue.R * 255)),
      tostring(round(self._colorValue.G * 255)),
      tostring(round(self._colorValue.B * 255))
    )
  self._textBox.Text = self._value
end

function LabeledColorInputPickerClass:_GuessColorFromInputValue()
  --- Attempts to parse a color value from the text input.
  --- Supports two formats: `R, G, B` (e.g., "255, 128, 0") and hex code (e.g., "#FFA500").
  --- If a valid color is found, it updates the current color value accordingly.
  local text = self._textBox.Text

  -- Try matching RGB format first
  local R, G, B = string.match(text, "(%d+)%s*,%s*(%d+)%s*,%s*(%d+)")
  R = tonumber(R)
  G = tonumber(G)
  B = tonumber(B)
  if R and G and B then
    self:SetColorValue(Color3.fromRGB(
      math.clamp(R, 0, 255),
      math.clamp(G, 0, 255),
      math.clamp(B, 0, 255)
    ))
    return
  end

  -- Try matching HEX format like #2e2e2e or #ABCDEF
  local hex = string.match(text, "#(%x%x%x%x%x%x)")
  if hex then
    local r = tonumber(string.sub(hex, 1, 2), 16)
    local g = tonumber(string.sub(hex, 3, 4), 16)
    local b = tonumber(string.sub(hex, 5, 6), 16)
    if r and g and b then
      self:SetColorValue(Color3.fromRGB(r, g, b))
    end
  end
end

--- Sets the function to be called when the input value changes.
--- @param vcf function -- The function to call when the value changes.
function LabeledColorInputPickerClass:SetValueChangedFunction(vcf)
  self._valueChangedFunction = vcf
end

--- Sets the function to be called when the input loses focus.
--- @param flf function -- A function with signature (enterPressed: boolean) -> ().
function LabeledColorInputPickerClass:SetFocusLostFunction(flf: (enterPressed: boolean) -> ())
  self._focusLostFunction = flf
end

--- Returns the main frame of the labeled color input component.
--- @return Frame -- The UI frame for the component.
function LabeledColorInputPickerClass:GetFrame()
  return self._frame
end

--- Returns the current text value from the input field.
--- @return string -- The string entered in the input box.
function LabeledColorInputPickerClass:GetValue(): string
  return self._textBox.Text
end

--- Returns the current color value.
--- @return Color3 -- The selected color value.
function LabeledColorInputPickerClass:GetColorValue(): Color3
  return self._value
end

--- Returns the maximum number of graphemes allowed in the input field.
--- @return number -- The maximum graphemes setting.
function LabeledColorInputPickerClass:GetMaxGraphemes()
  return self._MaxGraphemes
end

--- Sets the maximum number of graphemes allowed in the input field.
--- @param newValue number -- The maximum number of graphemes.
function LabeledColorInputPickerClass:SetMaxGraphemes(newValue)
  self._MaxGraphemes = newValue
end

--- Sets the text value of the input field.
--- @param newValue string -- The new value to assign to the input.
function LabeledColorInputPickerClass:SetValue(newValue)
  if self._value ~= newValue then
    self._textBox.Text = newValue
  end
end

--- Sets the color value for the color input and updates the display.
--- @param newValue Color3 -- The new color to assign.
function LabeledColorInputPickerClass:SetColorValue(newValue: Color3)
  assert(typeof(newValue) == "Color3", "First parameter must be a Color3. Received " .. typeof(newValue))
  self._colorValue = newValue
  self:_UpdateColorFrame()
  self:_UpdateInputValue()
  if self._colorPickerEnabled then
    self._colorPickerComponent:SetValue(newValue)
  end
end

--- Enables or disables the color picker UI.
--- If disabled, the user can only manually input a RGB or a Hex color value.
---
--- If enabled, the user can also open a color picker UI to choose a color.
--- @param state boolean -- Whether to enable (true) or disable (false) the color picker.
function LabeledColorInputPickerClass:SetPickerEnabled(state: boolean)
  self._colorPickerEnabled = state
  if not state then
    self._colorPickerFrame.Visible = false
  end
end

--- Returns whether the color picker is currently enabled.
--- @return boolean -- True if the color picker is enabled, false otherwise.
function LabeledColorInputPickerClass:GetPickerEnabled(state: boolean)
  return self._colorPickerEnabled
end

return LabeledColorInputPickerClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledMultiChoice.luau
``
----------------------------------------
--
-- LabeledMultiChoice.lua
--
-- Creates a frame containing a label and list of choices, of which exactly one 
-- is always selected.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")
LabeledRadioButton = require("./LabeledRadioButton")
LabeledCheckbox = require("./LabeledCheckbox")
VerticallyScalingListFrame = require("./VerticallyScalingListFrame")

local kRadioButtonsHPadding = GuiUtilities.kRadioButtonsHPadding

LabeledMultiChoiceClass = {}
LabeledMultiChoiceClass.__index = LabeledMultiChoiceClass


--- LabeledMultiChoiceClass constructor.
--- @param nameSuffix string -- Suffix to append to the name of the UI elements.
--- @param labelText string -- The label displayed next to the multi-choice selector.
--- @param choices {{Id: number | string, Text: string}} -- An array of choice entries. Each entry must include a .Id field and .Text field.
--- @param initChoiceIndex number? -- Optional index of the initially selected choice. Defaults to the first if not provided.
--- @return LabeledMultiChoiceClass -- A new instance of the labeled multi-choice selector.
function LabeledMultiChoiceClass.new(nameSuffix: string, labelText: string, choices: {{Id: number | string, Text: string}}, initChoiceIndex: number?)
  local self = {}
  setmetatable(self, LabeledMultiChoiceClass)

  self._buttonObjsByIndex = {}
  
  self._choices = choices

  if (not initChoiceIndex ) then 
    initChoiceIndex = 1
  end
  if (initChoiceIndex > #choices) then 
    initChoiceIndex = #choices
  end


  local vsl = VerticallyScalingListFrame.new("MCC_" .. nameSuffix)
  vsl:AddBottomPadding()

  local titleLabel = GuiUtilities.MakeFrameWithSubSectionLabel("Title", labelText)
  vsl:AddChild(titleLabel)

  -- Container for cells.
  local cellFrame = self:_MakeRadioButtons(choices)
  vsl:AddChild(cellFrame)

  self._vsl = vsl

  self:SetSelectedIndex(initChoiceIndex)

  return self
end

-- Small checkboxes are a different entity.
-- All the bits are smaller.
-- Fixed width instead of flood-fill.
-- Box comes first, then label.
function LabeledMultiChoiceClass:_MakeRadioButtons(choices)
  local frame = GuiUtilities.MakeFrame("RadioButtons")
  frame.BackgroundTransparency = 1

  local padding = Instance.new("UIPadding")
  padding.PaddingLeft = UDim.new(0, GuiUtilities.StandardLineLabelLeftMargin)
  padding.PaddingRight = UDim.new(0, GuiUtilities.StandardLineLabelLeftMargin)
  padding.Parent = frame
  
  -- Make a grid to put checkboxes in.
  local uiGridLayout = Instance.new("UIGridLayout")
  uiGridLayout.CellSize = LabeledCheckbox.kMinFrameSize
  uiGridLayout.CellPadding = UDim2.new(0, 
    kRadioButtonsHPadding,
    0,
    GuiUtilities.kStandardVMargin)
  uiGridLayout.HorizontalAlignment = Enum.HorizontalAlignment.Left
  uiGridLayout.VerticalAlignment = Enum.VerticalAlignment.Top
  uiGridLayout.Parent = frame
  uiGridLayout.SortOrder = Enum.SortOrder.LayoutOrder
  self._uiGridLayout = uiGridLayout

  for i, choiceData in ipairs(choices) do 
    self:_AddRadioButton(frame, i, choiceData)
  end

    -- Sync size with content size.
  GuiUtilities.AdjustHeightDynamicallyToLayout(frame, uiGridLayout)

  return frame
end

function LabeledMultiChoiceClass:_AddRadioButton(parentFrame, index, choiceData)
  local radioButtonObj = LabeledRadioButton.new(choiceData.Id, choiceData.Text)
  self._buttonObjsByIndex[index] = radioButtonObj

  radioButtonObj:SetValueChangedFunction(function(value)
    -- If we notice the button going from off to on, and it disagrees with 
    -- our current notion of selection, update selection.
    if (value and self._selectedIndex ~= index) then 
      self:SetSelectedIndex(index)
    end
  end)
  
  radioButtonObj:GetFrame().LayoutOrder = index
  radioButtonObj:GetFrame().Parent = parentFrame
end

--- Sets the selected index in the multi-choice UI and updates the button states accordingly.
--- @param selectedIndex number -- The index of the choice to be selected.
function LabeledMultiChoiceClass:SetSelectedIndex(selectedIndex) 
  self._selectedIndex = selectedIndex
  for i = 1, #self._buttonObjsByIndex do 
    self._buttonObjsByIndex[i]:SetValue(i == selectedIndex)
  end

  if (self._valueChangedFunction) then 
    self._valueChangedFunction(self._selectedIndex)
  end
end

--- Gets the currently selected index in the multi-choice UI.
--- @return number -- The index of the selected choice.
function LabeledMultiChoiceClass:GetSelectedIndex()
  return self._selectedIndex
end

--- Gets the ID value of the currently selected choice.
--- @return number | string -- The "Id" field of the selected choice.
function LabeledMultiChoiceClass:GetSelectedValue(): number | string
  return self._choices[self._selectedIndex].Id
end

--- Sets a callback function to be invoked whenever the selected value changes.
--- @param vcf (newValue: number | string) -> () -- A function that receives the new selected index as a parameter.
function LabeledMultiChoiceClass:SetValueChangedFunction(vcf: (newValue: number | string) -> ())
  self._valueChangedFunction = vcf
end

--- Retrieves the main frame containing the multi-choice UI elements.
--- @return Frame -- The UI frame of the multi-choice component.
function LabeledMultiChoiceClass:GetFrame(): Frame
  return self._vsl:GetFrame()
end

--- Sets the horizontal size of each cell (button) in the multi-choice grid layout.
--- @param cellSize number -- The desired horizontal size in pixels.
function LabeledMultiChoiceClass:SetCellHorizontalSize(cellSize: number)
  local size = self._uiGridLayout.CellSize :: UDim2
  self._uiGridLayout.CellSize = UDim2.new(size.X.Scale, cellSize, size.Y.Scale, size.Y.Offset)
end

--- Sets the vertical size of each cell (button) in the multi-choice grid layout.
--- @param cellSize number -- The desired vertical size in pixels.
function LabeledMultiChoiceClass:SetCellVerticalSize(cellSize: number)
  local size = self._uiGridLayout.CellSize :: UDim2
  self._uiGridLayout.CellSize = UDim2.new(size.X.Scale, size.X.Offset, size.Y.Scale, cellSize)
end


return LabeledMultiChoiceClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledNumberInput.luau
``
----------------------------------------
--
-- LabeledNumberInput.lua
--
-- Creates a frame containing a label and a number input control.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local kNumberInputWidth = 89
local kArrowButtonWidth = 10
local kTextBoxInternalPadding = 4
local kReadOnlyTransparency = 0.55

LabeledNumberInputClass = {}
LabeledNumberInputClass.__index = LabeledNumberInputClass

--- LabeledNumberInputClass constructor.
--- @param nameSuffix string -- The name suffix of the number input.
--- @param labelText string -- The text of the label.
--- @param stepIncrement number? -- The increment value when pressing the arrow up or down.
--- @param defaultValue number? -- The default value of the number input.
--- @param readonly boolean? -- Whether or not it is read only.
--- @return LabeledNumberInputClass The number input class object.
function LabeledNumberInputClass.new(nameSuffix: string, labelText: string, stepIncrement: number?, defaultValue: number?, readonly: boolean?)
  local self = {}
  setmetatable(self, LabeledNumberInputClass)

  -- Note: we are using "graphemes" instead of characters.
  -- In modern text-manipulation-fu, what with internationalization, 
  -- emojis, etc, it's not enough to count characters, particularly when 
  -- concerned with "how many <things> am I rendering?".
  -- We are using the 
  self._MaxGraphemes = 10
  
  self._valueChangedFunction = nil

  defaultValue = defaultValue or 0
  stepIncrement = stepIncrement or 1

  local frame = GuiUtilities.MakeStandardFixedHeightFrame('NumberInput ' .. nameSuffix)
  self._frame = frame

  local label = GuiUtilities.MakeStandardPropertyLabel(labelText)
  label.Parent = frame
  self._label = label

  self._value = defaultValue

  -- Dumb hack to add padding to text box,
  local textBoxWrapperFrame = Instance.new("Frame")
  textBoxWrapperFrame.Name = "Wrapper"
  textBoxWrapperFrame.Size = UDim2.new(0, kNumberInputWidth, 0.6, 0)
  textBoxWrapperFrame.Position = UDim2.new(0, GuiUtilities.StandardLineElementLeftMargin, .5, 0)
  textBoxWrapperFrame.AnchorPoint = Vector2.new(0, .5)
  textBoxWrapperFrame.Parent = frame
  GuiUtilities.syncGuiElementInputFieldColor(textBoxWrapperFrame)
  GuiUtilities.syncGuiElementBorderColor(textBoxWrapperFrame)

  local textBox = Instance.new("TextBox")
  textBox.Parent = textBoxWrapperFrame
  textBox.Name = "TextBox"
  textBox.Text = defaultValue
  textBox.Font = Enum.Font.SourceSans
  textBox.TextSize = 15
  textBox.BorderSizePixel = 0
  textBox.BackgroundTransparency = 1
  textBox.TextXAlignment = Enum.TextXAlignment.Left
  textBox.Size = UDim2.new(1, -kTextBoxInternalPadding, 1, GuiUtilities.kTextVerticalFudge)
  textBox.Position = UDim2.new(0, kTextBoxInternalPadding, 0, 0)
  textBox.ClipsDescendants = true
  textBox.ClearTextOnFocus = false
  textBox.TextEditable = true
  GuiUtilities.syncGuiElementBackgroundColor(textBox)
  
  local buttonUp = Instance.new("ImageButton")
  buttonUp.Name = "ArrowUp"
  buttonUp.Parent = textBoxWrapperFrame
  buttonUp.AutoButtonColor = false
  buttonUp.BorderSizePixel = 0
  buttonUp.Image = "rbxasset:///textures/WindControl/ArrowUp.png"
  buttonUp.Position = UDim2.new(1, 1, 0, 0)
  buttonUp.Size = UDim2.new(0, kArrowButtonWidth, 0.5, 0)
  GuiUtilities.syncGuiElementInputFieldColor(buttonUp)
  
  local buttonDown = Instance.new("ImageButton")
  buttonDown.Name = "ArrowDown"
  buttonDown.Parent = textBoxWrapperFrame
  buttonDown.AnchorPoint = Vector2.new(0, 1)
  buttonDown.AutoButtonColor = false
  buttonDown.BorderSizePixel = 0
  buttonDown.Image = "rbxasset:///textures/WindControl/ArrowDown.png"
  buttonDown.Position = UDim2.new(1, 1, 1, 0)
  buttonDown.Size = UDim2.new(0, kArrowButtonWidth, 0.5, 0)
  GuiUtilities.syncGuiElementInputFieldColor(buttonDown)
  
  buttonUp.MouseEnter:Connect(function ()
    if self._readOnly then return end
    buttonUp.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Hover)
  end)
  
  buttonUp.MouseLeave:Connect(function ()
    if self._readOnly then return end
    buttonUp.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.InputFieldBackground)
  end)
  
  buttonDown.MouseEnter:Connect(function ()
    if self._readOnly then return end
    buttonDown.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.Button, Enum.StudioStyleGuideModifier.Hover)
  end)

  buttonDown.MouseLeave:Connect(function ()
    if self._readOnly then return end
    buttonDown.BackgroundColor3 = GuiUtilities.GetThemeColor(Enum.StudioStyleGuideColor.InputFieldBackground)
  end)
  
  buttonUp.Activated:Connect(function ()
    if self._readOnly then return end
    local number = tonumber(self._textBox.Text)
    number += stepIncrement
    self._textBox.Text = tostring(self:_RoundToStep(number))
  end)
  
  buttonDown.Activated:Connect(function ()
    if self._readOnly then return end
    local number = tonumber(self._textBox.Text)
    number -= stepIncrement
    self._textBox.Text = tostring(self:_RoundToStep(number))
  end)

  textBox:GetPropertyChangedSignal("Text"):Connect(function()
    -- Never let the text be too long.
    -- Careful here: we want to measure number of graphemes, not characters, 
    -- in the text, and we want to clamp on graphemes as well.
    if (utf8.len(self._textBox.Text) > self._MaxGraphemes) then 
      local count = 0
      for start, stop in utf8.graphemes(self._textBox.Text) do
        count = count + 1
        if (count > self._MaxGraphemes) then 
          -- We have gone one too far.
          -- clamp just before the beginning of this grapheme.
          self._textBox.Text = string.sub(self._textBox.Text, 1, start-1)
          break
        end
      end
      -- Don't continue with rest of function: the resetting of "Text" field
      -- above will trigger re-entry.  We don't need to trigger value
      -- changed function twice.
      return
    end

    -- filter the input text below to ensure it's a valid integer or float
    local lastChar = string.sub(self._textBox.Text, -1, -1)

    if lastChar:match("%d") then
      -- do nothing
    elseif lastChar:match("%a") then
      -- In a number input letters are not accepted, only numbers!
      self._textBox.Text = string.sub(self._textBox.Text, 1, #self._textBox.Text - 1)
    elseif lastChar == "-" then
      -- Only accept '-' if it's at the very start and hasn't been used before
      if #self._textBox.Text > 1 or self._textBox.Text:find("-", 2, true) then
        self._textBox.Text = string.sub(self._textBox.Text, 1, #self._textBox.Text - 1)
      end
    elseif lastChar ~= "." then
      -- We don't accept any symbols except dot
      self._textBox.Text = string.sub(self._textBox.Text, 1, #self._textBox.Text - 1)
    end

    if self._textBox.Text:match("%..*%.") then
      -- We don't accept multiple dots
      self._textBox.Text = string.sub(self._textBox.Text, 1, #self._textBox.Text - 1)
    end

    if self._textBox.Text:match("%.(%d%d%d%d+)") then
      -- We don't accept more than 3 decimals
      self._textBox.Text = string.sub(self._textBox.Text, 1, #self._textBox.Text - 1)
    end

    self._value = tonumber(self._textBox.Text)
    if (self._valueChangedFunction) then 
      self._valueChangedFunction(self._value)
    end
  end)
  
  self._textBoxWrapperFrame = textBoxWrapperFrame
  self._textBox = textBox
  self._textBoxThemeConnection = nil :: RBXScriptConnection?
  self._textBoxThemeFontConnection = nil :: RBXScriptConnection?
  self._stepIncrement = stepIncrement
  self._stepDecimalPlaces = self:_CountDecimalPlaces(stepIncrement)
  self._buttonArrowUp = buttonUp
  self._buttonArrowDown = buttonDown
  self:SetReadOnly(readonly)

  return self
end

function LabeledNumberInputClass:_RoundToDecimals(num: number, decimals: number)
  -- rounds the decimals of a number to a maximum of decimals specified by the parameter
  return tonumber(string.format("%." .. decimals .. "f", num))
end

function LabeledNumberInputClass:_RoundToStep(value: number)
  -- rounds the value to the nearest step based on the stepIncrement variable
  -- tries to avoid floating point imprecision (like 0.1 + 0.1 = 1.999)
  local rounded = tonumber(string.format("%." .. self._stepDecimalPlaces .. "f", value))
  return rounded
end

function LabeledNumberInputClass:_CountDecimalPlaces(num: number): number
  -- counts the decimal places of a number
  local _, decimal = tostring(num):match("^(%-?%d*)%.?(%d*)$")
  return #decimal
end

--- Sets the function to be called when the value changes.
--- @param vcf () -> () -- The function to call when the value changes.
function LabeledNumberInputClass:SetValueChangedFunction(vcf: (newValue: number) -> ())
  self._valueChangedFunction = vcf
end

--- Returns the UI frame associated with this input.
--- @return Frame -- The frame object.
function LabeledNumberInputClass:GetFrame(): Frame
  return self._frame
end

--- Gets the text box itself.
--- @return TextBox -- The text box.
function LabeledNumberInputClass:GetTextBox(): TextBox
  return self._textBox
end

--- Returns the maximum number of graphemes allowed.
--- @return number -- The maximum grapheme count.
function LabeledNumberInputClass:GetMaxGraphemes(): number
  return self._MaxGraphemes
end

--- Sets the maximum number of graphemes allowed.
--- @param newValue number -- The new maximum grapheme count.
function LabeledNumberInputClass:SetMaxGraphemes(newValue)
  self._MaxGraphemes = newValue
end

--- Returns the current value of the input.
--- @return number -- The current value.
function LabeledNumberInputClass:GetValue(): number
  return self._value
end

--- Sets this input number value.
--- @param newValue number -- The value to set.
function LabeledNumberInputClass:SetValue(newValue: number)
  if self._value ~= newValue then
    self._value = self:_RoundToDecimals(newValue, 3)
    self._textBox.Text = self._value
  end
end

--- Sets the function that runs when focus is lost.
--- @param funct (enterPressed: boolean, inputThatCausedFocusLoss: InputObject) -> () -- The function to run.
function LabeledNumberInputClass:SetFocusLostFunction(funct: (enterPressed: boolean, inputThatCausedFocusLoss: InputObject) -> ())
  self._textBox.FocusLost:Connect(funct)
end

--- Gets this input text read-only state.
--- @return boolean -- This input text read-only state.
function LabeledNumberInputClass:GetReadOnly(): boolean
  return self._readOnly
end

--- Sets this input read-only state.
---
--- Read-only inputs are not editable and have a greyed out appearance.
--- @param state boolean -- Whether or not to set it as read-only.
function LabeledNumberInputClass:SetReadOnly(state: boolean)
  self._readOnly = state
  if self._textBoxThemeConnection then self._textBoxThemeConnection:Disconnect() end
  if self._textBoxThemeFontConnection then self._textBoxThemeFontConnection:Disconnect() end
  if self._readOnly then
    self._buttonArrowUp.BackgroundTransparency = kReadOnlyTransparency
    self._buttonArrowDown.BackgroundTransparency = kReadOnlyTransparency
    self._textBoxWrapperFrame.BackgroundTransparency = kReadOnlyTransparency
    self._textBox.TextEditable = false
    self._textBoxThemeConnection = GuiUtilities.syncGuiElementColorCustom(self._textBox, "TextColor3", Enum.StudioStyleGuideColor.MainText, Enum.StudioStyleGuideModifier.Disabled)
    self._textBoxThemeFontConnection = GuiUtilities.syncGuiElementColorCustom(self._label, "TextColor3", Enum.StudioStyleGuideColor.MainText, Enum.StudioStyleGuideModifier.Disabled)
  else
    self._buttonArrowUp.BackgroundTransparency = 0
    self._buttonArrowDown.BackgroundTransparency = 0
    self._textBoxWrapperFrame.BackgroundTransparency = 0
    self._textBox.TextEditable = true
    self._textBoxThemeConnection = GuiUtilities.syncGuiElementColorCustom(self._textBox, "TextColor3", Enum.StudioStyleGuideColor.MainText)
    self._textBoxThemeFontConnection = GuiUtilities.syncGuiElementColorCustom(self._label, "TextColor3", Enum.StudioStyleGuideColor.MainText)
  end
end

--- Gets the currently set step increment.
--- @return number -- This input step increment.
function LabeledNumberInputClass:GetStepIncrement(): number
  return self._stepIncrement
end

--- Sets the currently set step increment.
--- @param stepIncrement number -- The step increment.
function LabeledNumberInputClass:SetStepIncrement(stepIncrement: number)
  self._stepIncrement = stepIncrement
  self._stepDecimalPlaces = self:_CountDecimalPlaces(self._stepIncrement)
end

return LabeledNumberInputClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledRadioButton.luau
``
----------------------------------------
--
-- LabeledRadioButton.lua
--
-- Creates a frame containing a label and a radio button.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")
LabeledCheckbox = require("./LabeledCheckbox")

local kDefaultImage = "rbxasset://textures/RoactStudioWidgets/button_radiobutton_default.png"
local kEnabledImageLight = "rbxasset://textures/RoactStudioWidgets/button_radiobutton_chosen.png"
local kEnabledImageDark = kEnabledImageLight
local kRadioFrameImage = kDefaultImage

LabeledRadioButtonClass = {}
LabeledRadioButtonClass.__index = LabeledRadioButtonClass
setmetatable(LabeledRadioButtonClass, LabeledCheckbox)

--- LabeledRadioButtonClass constructor.
--- @param nameSuffix string -- Suffix to append to the name of the UI elements.
--- @param labelText string -- The label displayed next to the radio button.
--- @return LabeledRadioButtonClass -- A new instance of the labeled radio button class.
function LabeledRadioButtonClass.new(nameSuffix: string, labelText: string)
  local newButton = LabeledCheckbox.new(nameSuffix, labelText, false)
  setmetatable(newButton, LabeledRadioButtonClass)

  newButton:GetFrame().Name = "RBF" .. nameSuffix
  newButton:UseSmallSize()
  newButton._checkImage.Position = UDim2.new(0.5, 0, 0.5, 0)
  newButton._checkImage.Image = ""
  newButton._button.Image = kRadioFrameImage

  return newButton
end

function LabeledRadioButtonClass:_MaybeToggleState()
  -- A radio can never be toggled off. 
  -- Only turns off because another one turns on.
  if (not self._disabled and not self._value) then 
    self:SetValue(not self._value)
  end
end

function LabeledRadioButtonClass:_UpdateAppearance()
  if self:GetValue() then
    self._checkImage.Image = if GuiUtilities.GetThemeName() == "Light" then kEnabledImageLight else kEnabledImageDark
    self._checkImage.ImageColor3 = if GuiUtilities.GetThemeName() == "Light" then Color3.fromRGB(219, 219, 219) else Color3.new(1, 1, 1)
  else
    self._checkImage.Image = ""
    self._button.ImageColor3 = Color3.fromRGB(180, 180, 180)
  end
end

return LabeledRadioButtonClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledSlider.luau
``
----------------------------------------
--
-- LabeledSlider.lua
--
-- Creates a frame containing a label and a slider control.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")
rbxGuiLibrary = require("../RbxGui")

local kSliderWidth = 100

local kSliderThumbImage = "rbxasset://textures/RoactStudioWidgets/button_radiobutton_chosen.png"

local kThumbSize = 13

LabeledSliderClass = {}
LabeledSliderClass.__index = LabeledSliderClass

--- LabeledSliderClass constructor.
--- @param nameSuffix string -- Suffix to append to the slider's name.
--- @param labelText string -- Text to display as the label for the slider.
--- @param minValue number? -- Optional minimum value of the slider (default is 1).
--- @param maxValue number? -- Optional maximum value of the slider.
--- @param defaultValue number? -- Optional default value of the slider.
--- @param width number? -- Optional width of the slider component.
--- @return LabeledSliderClass -- A new instance of the labeled slider class.
function LabeledSliderClass.new(nameSuffix: string, labelText: string, minValue: number?, maxValue: number?, defaultValue: number?, width: number?)
  local self = {}
  setmetatable(self, LabeledSliderClass)

  self._valueChangedFunction = nil

  minValue = minValue or 0
  maxValue = maxValue or 100
  defaultValue = defaultValue or 1
  width = width or kSliderWidth

  local frame = GuiUtilities.MakeStandardFixedHeightFrame("SLF" .. nameSuffix)
  self._frame = frame

  local label = GuiUtilities.MakeStandardPropertyLabel(labelText)
  label.Parent = frame
  self._label = label

  self._value = defaultValue

   --steps, width, position
  local slider, sliderValue = rbxGuiLibrary.CreateSliderNewest(minValue,maxValue, 
    width, 
    UDim2.new(0, 0, .5, -3))
  self._slider = slider
  self._sliderValue = sliderValue
  -- Some tweaks to make slider look nice.
  -- Hide the existing bar.
  slider.Bar.BackgroundTransparency = 1
  -- Replace slider thumb image.
  self._thumb = slider.Bar.Slider
  self._thumb.Image = kSliderThumbImage
  self._thumb.AnchorPoint = Vector2.new(0.5, 0.5)
  self._thumb.Size = UDim2.new(0, kThumbSize, 0, kThumbSize)
  
  -- Add images on bar.
  self._preThumbImage = Instance.new("ImageLabel")
  self._preThumbImage.Name = "PreThumb"
  self._preThumbImage.Parent = slider.Bar
  self._preThumbImage.BackgroundColor3 = Color3.fromRGB(0, 162, 255)
  self._preThumbImage.Image = ""
  self._preThumbImage.Size = UDim2.new(1, 0, 1, 0)
  self._preThumbImage.Position = UDim2.new(0, 0, 0, 0)
  self._preThumbImage.BorderSizePixel = 0

  self._postThumbImage = Instance.new("Frame")
  self._postThumbImage.Name = "PostThumb"
  self._postThumbImage.Parent = slider.Bar
  self._postThumbImage.Size = UDim2.new(1, 0, 1, 0)
  self._postThumbImage.Position = UDim2.new(0, 0, 0, 0)
  self._postThumbImage.BorderSizePixel = 0

  sliderValue.Changed:Connect(function()
    self._value = sliderValue.Value
    
    -- Min value is minValue.
    -- Max value is maxValue.
    -- So scale is...
    local scale = (self._value - minValue) / (maxValue :: number - minValue :: number)

    self._preThumbImage.Size = UDim2.new(scale, 0, 1, 0)
    self._postThumbImage.Size = UDim2.new(1 - scale, 0, 1, 0)
    self._postThumbImage.Position = UDim2.new(scale, 0, 0, 0)
    
    self._thumb.Position = UDim2.new(scale, 0, 
      0.5, 0)
    
    if self._valueChangedFunction then 
      self._valueChangedFunction(self._value)
    end
  end)

  GuiUtilities.BindThemeChanged(function () self:_UpdateColors() end)
  self:_UpdateColors()
  
  if defaultValue == sliderValue.Value then self:SetValue(maxValue) end -- if both are the same the slider won't update its position
  self:SetValue(defaultValue)
  slider.AnchorPoint = Vector2.new(0, 0.5)
  slider.Size = UDim2.new(0, width, 1, 0)
  slider.Position = UDim2.new(0, GuiUtilities.StandardLineElementLeftMargin, 0, GuiUtilities.kStandardPropertyHeight/2)
  slider.Parent = frame
  
  return self
end

--- Sets the function to be called when the slider value changes.
--- @param vcf function -- The callback function to execute on value change.
function LabeledSliderClass:SetValueChangedFunction(vcf)
  self._valueChangedFunction = vcf
end

--- Returns the UI frame associated with this labeled slider.
--- @return Frame -- The slider's UI frame.
function LabeledSliderClass:GetFrame()
  return self._frame
end

--- Sets the slider's current value.
--- @param newValue number -- The value to set.
function LabeledSliderClass:SetValue(newValue: number)
  if self._sliderValue.Value ~= newValue then
    self._sliderValue.Value = newValue
  end
end

--- Gets the slider's current value.
--- @return number -- The current value of the slider.
function LabeledSliderClass:GetValue()
  return self._sliderValue.Value
end

--- Changes the label text displayed above the slider.
--- @param labelText string -- New label text to display.
function LabeledSliderClass:SetLabelText(labelText: string)
  assert(type(labelText) == "string", "Expected string. Got "..type(labelText))
  self._label.Text = labelText
end

function LabeledSliderClass:_UpdateColors()
  local guide = if GuiUtilities.GetThemeName() == "Light" then Enum.StudioStyleGuideColor.ScrollBarBackground else Enum.StudioStyleGuideColor.InputFieldBackground
  self._postThumbImage.BackgroundColor3 = GuiUtilities.GetThemeColor(guide)
end

return LabeledSliderClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledTextInput.luau
``
----------------------------------------
--
-- LabeledTextInput.lua
--
-- Creates a frame containing a label and a text input control.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local kTextInputWidth = 130
local kTextBoxInternalPadding = 4
local kReadOnlyTransparency = 0.55

LabeledTextInputClass = {}
LabeledTextInputClass.__index = LabeledTextInputClass

--- LabeledTextInputClass constructor.
--- @param nameSuffix string -- The name suffix of the text input.
--- @param labelText string -- The text of the label.
--- @param defaultValue string? -- The default value of the text input.
--- @param readonly boolean? -- Whether or not it is read only.
--- @return LabeledTextInputClass The text input class object.
function LabeledTextInputClass.new(nameSuffix: string, labelText: string, defaultValue: string?, readonly: boolean?)
	local self = {}
	setmetatable(self, LabeledTextInputClass)

	-- Note: we are using "graphemes" instead of characters.
	-- In modern text-manipulation-fu, what with internationalization,
	-- emojis, etc, it's not enough to count characters, particularly when
	-- concerned with "how many <things> am I rendering?".
	-- We are using the
	self._MaxGraphemes = 50

	self._valueChangedFunction = nil

	defaultValue = defaultValue or ""

	local frame = GuiUtilities.MakeStandardFixedHeightFrame("TextInput " .. nameSuffix)
	self._frame = frame

	local label = GuiUtilities.MakeStandardPropertyLabel(labelText)
	label.Parent = frame
	self._label = label

	self._value = defaultValue

	-- Dumb hack to add padding to text box,
	local textBoxWrapperFrame = Instance.new("Frame")
	textBoxWrapperFrame.Name = "Wrapper"
	textBoxWrapperFrame.Size = UDim2.new(0, kTextInputWidth, 0.6, 0)
	textBoxWrapperFrame.Position = UDim2.new(0, GuiUtilities.StandardLineElementLeftMargin, 0.5, 0)
	textBoxWrapperFrame.AnchorPoint = Vector2.new(0, 0.5)
	textBoxWrapperFrame.Parent = frame
	GuiUtilities.syncGuiElementInputFieldColor(textBoxWrapperFrame)
	GuiUtilities.syncGuiElementBorderColor(textBoxWrapperFrame)

	local textBox = Instance.new("TextBox")
	textBox.Parent = textBoxWrapperFrame
	textBox.Name = "TextBox"
	textBox.Text = defaultValue
	textBox.PlaceholderText = defaultValue
	textBox.Font = Enum.Font.SourceSans
	textBox.TextSize = 15
	textBox.BorderSizePixel = 0
	textBox.BackgroundTransparency = 1
	textBox.TextXAlignment = Enum.TextXAlignment.Left
	textBox.Size = UDim2.new(1, -kTextBoxInternalPadding, 1, GuiUtilities.kTextVerticalFudge)
	textBox.Position = UDim2.new(0, kTextBoxInternalPadding, 0, 0)
	textBox.ClipsDescendants = true
	-- textBox.ClearTextOnFocus = true
	textBox.ClearTextOnFocus = false -- Changed to false to prevent accidental data loss.
	textBox.TextEditable = true

	GuiUtilities.syncGuiElementBackgroundColor(textBox)

	textBox:GetPropertyChangedSignal("Text"):Connect(function()
		-- Never let the text be too long.
		-- Careful here: we want to measure number of graphemes, not characters,
		-- in the text, and we want to clamp on graphemes as well.
		if utf8.len(self._textBox.Text) > self._MaxGraphemes then
			local count = 0
			for start, stop in utf8.graphemes(self._textBox.Text) do
				count = count + 1
				if count > self._MaxGraphemes then
					-- We have gone one too far.
					-- clamp just before the beginning of this grapheme.
					self._textBox.Text = string.sub(self._textBox.Text, 1, start - 1)
					break
				end
			end
			-- Don't continue with rest of function: the resetting of "Text" field
			-- above will trigger re-entry.  We don't need to trigger value
			-- changed function twice.
			return
		end

		self._value = self._textBox.Text
		if self._valueChangedFunction then self._valueChangedFunction(self._value) end
	end)

	self._textBox = textBox
	self._textBoxThemeConnection = nil :: RBXScriptConnection?
	self._textBoxThemeFontConnection = nil :: RBXScriptConnection?
	self:SetReadOnly(readonly)

	return self
end

--- Sets the function to be called when the value changes.
--- @param vcf () -> () -- The function to call when the value changes.
function LabeledTextInputClass:SetValueChangedFunction(vcf: (newValue: string) -> ())
	self._valueChangedFunction = vcf
end

--- Returns the UI frame associated with this input.
--- @return Frame -- The frame object.
function LabeledTextInputClass:GetFrame(): Frame
	return self._frame
end

--- Gets the text box itself.
--- @return TextBox -- The text box.
function LabeledTextInputClass:GetTextBox(): TextBox
	return self._textBox
end

--- Returns the maximum number of graphemes allowed.
--- @return number -- The maximum grapheme count.
function LabeledTextInputClass:GetMaxGraphemes(): number
	return self._MaxGraphemes
end

--- Sets the maximum number of graphemes allowed.
--- @param newValue number -- The new maximum grapheme count.
function LabeledTextInputClass:SetMaxGraphemes(newValue)
	self._MaxGraphemes = newValue
end

--- Returns the current value of the input.
--- @return string -- The current value.
function LabeledTextInputClass:GetValue(): string
	return self._value
end

--- Sets this input text value.
--- @param newValue string -- The value to set.
function LabeledTextInputClass:SetValue(newValue: string)
	if self._value ~= newValue then self._textBox.Text = newValue end
end

--- Gets this input text editable state.
--- @return boolean -- This input text editable state.
function LabeledTextInputClass:GetTextEditable(state: boolean)
	return self._textBox.TextEditable
end

--- Sets this input text editable state.
---
--- If not editable the user can't edit the contents of this input text.
--- @param state boolean -- Whether or not to set it as editable.
function LabeledTextInputClass:SetTextEditable(state: boolean)
	self._textBox.TextEditable = state
end

--- Sets this input text clear text on focus state.
---
--- If true the text inside this input text are cleared once the user focus it.
--- @param state boolean -- Whether or not to set it to clear text on focus.
function LabeledTextInputClass:SetClearTextOnFocusEnabled(state: boolean)
	self._textBox.ClearTextOnFocus = state
end

--- Sets the function that runs when focus is lost.
--- @param funct (enterPressed: boolean, inputThatCausedFocusLoss: InputObject) -> () -- The function to run.
function LabeledTextInputClass:SetFocusLostFunction(funct: (
	enterPressed: boolean,
	inputThatCausedFocusLoss: InputObject
) -> ())
	self._textBox.FocusLost:Connect(funct)
end

--- Gets this input text read-only state.
--- @return boolean -- This input text read-only state.
function LabeledTextInputClass:GetReadOnly(): boolean
	return self._readOnly
end

--- Sets this input text read-only state.
---
--- Read-only text inputs are not editable and have a greyed out appearance.
--- @param state boolean -- Whether or not to set it as read-only.
function LabeledTextInputClass:SetReadOnly(state: boolean)
	self._readOnly = state
	if self._textBoxThemeConnection then self._textBoxThemeConnection:Disconnect() end
	if self._textBoxThemeFontConnection then self._textBoxThemeFontConnection:Disconnect() end
	if self._readOnly then
		self._textBox.BackgroundTransparency = kReadOnlyTransparency
		self._textBox.TextEditable = false
		self._textBox.ClearTextOnFocus = false
		self._textBoxThemeConnection = GuiUtilities.syncGuiElementColorCustom(
			self._textBox,
			"TextColor3",
			Enum.StudioStyleGuideColor.MainText,
			Enum.StudioStyleGuideModifier.Disabled
		)
		self._textBoxThemeFontConnection = GuiUtilities.syncGuiElementColorCustom(
			self._label,
			"TextColor3",
			Enum.StudioStyleGuideColor.MainText,
			Enum.StudioStyleGuideModifier.Disabled
		)
	else
		self._textBox.BackgroundTransparency = 1
		self._textBox.TextEditable = true
		self._textBoxThemeConnection =
			GuiUtilities.syncGuiElementColorCustom(self._textBox, "TextColor3", Enum.StudioStyleGuideColor.MainText)
		self._textBoxThemeFontConnection =
			GuiUtilities.syncGuiElementColorCustom(self._label, "TextColor3", Enum.StudioStyleGuideColor.MainText)
	end
end

return LabeledTextInputClass

``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\LabeledToggleButton.luau
``
----------------------------------------
--
-- LabeledToggleButtonClass.lua
--
-- Creates a frame containing a label and a toggle button.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")
LabeledCheckbox = require("./LabeledCheckbox")

local kToggleOffDark = "rbxasset://textures/RoactStudioWidgets/toggle_off_dark.png"
local kToggleOnDark = "rbxasset://textures/RoactStudioWidgets/toggle_on_dark.png"

local kToggleOffLight = "rbxasset://textures/RoactStudioWidgets/toggle_off_light.png"
local kToggleOnLight = "rbxasset://textures/RoactStudioWidgets/toggle_on_light.png"

local kToggleOffDisabledDark = "rbxasset://textures/RoactStudioWidgets/toggle_disable_dark.png"
local kToggleOnDisabledDark = "rbxasset://textures/RoactStudioWidgets/toggle_on_disable_dark.png"

local kToggleOffDisabledLight = "rbxasset://textures/RoactStudioWidgets/toggle_disable_light.png"
local kToggleOnDisabledLight = "rbxasset://textures/RoactStudioWidgets/toggle_on_disable_light.png"

local kFrameSizeX = 28
local kFrameSizeY = 16

LabeledToggleButtonClass = {}
LabeledToggleButtonClass.__index = LabeledToggleButtonClass
setmetatable(LabeledToggleButtonClass, LabeledCheckbox)

--- LabeledToggleButtonClass constructor.
--- @param nameSuffix string -- Suffix to append to the name of the UI elements.
--- @param labelText string -- The label displayed next to the toggle button.
--- @return LabeledToggleButtonClass -- A new instance of the labeled toggle button class.
function LabeledToggleButtonClass.new(nameSuffix: string, labelText: string)
  local newButton = LabeledCheckbox.new(nameSuffix, labelText, false)
  setmetatable(newButton, LabeledToggleButtonClass)

  newButton:GetFrame().Name = "TBF" .. nameSuffix
  newButton._button.Size = UDim2.new(0, kFrameSizeX, 0, kFrameSizeY)
  newButton._button.Image = ""
  newButton._button.ImageColor3 = Color3.new(1,1,1)
  newButton._button.BackgroundTransparency = 1
  newButton._checkImage.ImageColor3 = Color3.new(1,1,1)

  newButton:_UpdateAppearance()

  return newButton
end

function LabeledToggleButtonClass:_MaybeToggleState()
  if (not self._disabled) then 
    self:SetValue(not self._value)
  end
end

function LabeledToggleButtonClass:_UpdateAppearance()
  local themeName = GuiUtilities:GetThemeName()
  if self:GetValue() then
    if self:GetDisabled() then
      self._checkImage.Image = if themeName == "Light" then kToggleOnDisabledLight else kToggleOnDisabledDark
    else
      self._checkImage.Image = if themeName == "Light" then kToggleOnLight else kToggleOnDark
    end
  else
    if self:GetDisabled() then
      self._checkImage.Image = if themeName == "Light" then kToggleOffDisabledLight else kToggleOffDisabledDark
    else
      self._checkImage.Image = if themeName == "Light" then kToggleOffLight else kToggleOffDark
    end
  end
end

return LabeledToggleButtonClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\StatefulImageButton.luau
``
----------------------------------------
--
-- StatefulImageButton.lua
--
-- Image button.
-- Has custom image for when "selected"
-- Uses shading to indicate hover and click states.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

StatefulImageButtonClass = {}
StatefulImageButtonClass.__index = StatefulImageButtonClass

--- StatefulImageButtonClass constructor.
--- @param buttonName string -- The name of the button instance.
--- @param imageAsset string -- The asset ID or path for the button's image.
--- @param buttonSize UDim2 -- The size of the button.
--- @return StatefulImageButtonClass -- A new instance of the StatefulImageButtonClass.
function StatefulImageButtonClass.new(buttonName: string, imageAsset: string, buttonSize: UDim2)
  local self = {}
  setmetatable(self, StatefulImageButtonClass)

  self._clickedFunction = nil

  local button = Instance.new("ImageButton")
  --button.Parent = parent
  button.Image = imageAsset
  button.BackgroundTransparency = 1
  button.BorderSizePixel = 0
  button.Size = buttonSize
  button.Name = buttonName

  self._button = button

  self._hovered = false
  self._clicked = false
  self._selected = false

  button.InputBegan:Connect(function(input)
    if (input.UserInputType == Enum.UserInputType.MouseMovement) then               
      self._hovered = true
      self:_UpdateButtonVisual()
    end
  end)


  button.InputEnded:Connect(function(input)
    if (input.UserInputType == Enum.UserInputType.MouseMovement) then               
      self._hovered = false
      self._clicked = false
      self:_UpdateButtonVisual()
    end
  end)    

  button.MouseButton1Down:Connect(function()
    self._clicked = true
    self:_UpdateButtonVisual()
  end)

  button.MouseButton1Up:Connect(function()
    self._clicked = false
    self:_UpdateButtonVisual()
  end)

  button.Activated:Connect(function (inputObject, timesPressed)
    if self._clickedFunction then
      self._clickedFunction(inputObject, timesPressed)
    end
  end)
  
  self:_UpdateButtonVisual()

  return self
end

-- Backwards compatibility (should be removed in the future)
StatefulImageButtonClass.setSelected = StatefulImageButtonClass.SetSelected
StatefulImageButtonClass.getSelected = StatefulImageButtonClass.GetSelected
StatefulImageButtonClass.getButton = StatefulImageButtonClass.GetButton

function StatefulImageButtonClass:_UpdateButtonVisual()
  if (self._selected) then 
    self._button.ImageTransparency = 0
    self._button.ImageColor3 = Color3.new(1,1,1) 
  else 
    self._button.ImageTransparency = 0.5
    self._button.ImageColor3 = Color3.new(.5,.5,.5)
  end

  if (self._clicked) then 
    self._button.BackgroundTransparency = 0.8
  elseif (self._hovered) then 
    self._button.BackgroundTransparency = 0.9
  else
    self._button.BackgroundTransparency = 1
  end
end

--- Sets the selection state of the button.
--- @param selected boolean -- Whether the button should appear selected.
function StatefulImageButtonClass:SetSelected(selected)
  self._selected = selected
  self:_updateButtonVisual()
end

--- Gets the current selection state of the button.
--- @return boolean -- True if the button is selected, false otherwise.
function StatefulImageButtonClass:GetSelected()
  return self._selected
end

--- Returns the underlying ImageButton instance.
--- @return ImageButton -- The ImageButton instance.
function StatefulImageButtonClass:GetButton()
  return self._button
end

--- Sets the function to be called when the button is clicked.
--- @param cf (inputObject: InputObject, timesPressed: number) -> () -- A callback function or nil to remove the function.
function StatefulImageButtonClass:SetClickedFunction(cf: (inputObject: InputObject, timesPressed: number) -> () | nil)
  self._clickedFunction = cf
end

return StatefulImageButtonClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\VerticallyScalingListFrame.luau
``
----------------------------------------
--
-- VerticallyScalingListFrame
--
-- Creates a frame that organizes children into a list layout.
-- Will scale dynamically as children grow.
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

VerticallyScalingListFrameClass = {}
VerticallyScalingListFrameClass.__index = VerticallyScalingListFrameClass

local kBottomPadding = 10

--- VerticallyScalingListFrameClass constructor.
--- @param nameSuffix string -- Suffix to append to the name of the scroll frame components.
--- @return VerticallyScalingListFrameClass -- A new instance of the vertically scaling list frame class.
function VerticallyScalingListFrameClass.new(nameSuffix: string)
  local self = {}
  setmetatable(self, VerticallyScalingListFrameClass)

  self._resizeCallback = nil
  
  local frame = Instance.new('Frame')
  frame.Name = 'VSLFrame' .. nameSuffix
  frame.Size = UDim2.new(1, 0, 0, 0)
  frame.BackgroundTransparency = 0
  frame.BorderSizePixel = 0
  GuiUtilities.syncGuiElementBackgroundColor(frame)

  self._frame = frame
  
  local uiListLayout = Instance.new('UIListLayout')
  uiListLayout.SortOrder = Enum.SortOrder.LayoutOrder
  uiListLayout.Parent = frame
  self._uiListLayout = uiListLayout

  local function updateSizes()
    self._frame.Size = UDim2.new(1, 0, 0, uiListLayout.AbsoluteContentSize.Y)
    if (self._resizeCallback) then 
      self._resizeCallback()
    end
  end
  self._uiListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(updateSizes)
  updateSizes()

  self._childCount = 0

  return self
end

--- Adds a transparent bottom padding frame to the list.
function VerticallyScalingListFrameClass:AddBottomPadding()
  local frame = Instance.new("Frame")
  frame.Name = "BottomPadding"
  frame.BackgroundTransparency = 1
  frame.Size = UDim2.new(1, 0, 0, kBottomPadding)
  frame.LayoutOrder = 1000
  frame.Parent = self._frame
end

--- Returns the internal UI frame containing all children.
--- @return Frame -- The internal frame used for layout.
function VerticallyScalingListFrameClass:GetFrame()
  return self._frame
end

--- Adds a child frame to the list with automatic layout order.
--- @param childFrame GuiObject -- The child frame to add to the list.
function VerticallyScalingListFrameClass:AddChild(childFrame: GuiObject)
  childFrame.LayoutOrder = self._childCount
  self._childCount = self._childCount + 1
  childFrame.Parent = self._frame
end

--- Sets a callback function to be called when the frame is resized.
--- @param callback function -- The function to call on resize.
function VerticallyScalingListFrameClass:SetCallbackOnResize(callback: () -> ())
  self._resizeCallback = callback
end

--- Sets the horizontal alignment of elements in the UI list layout.
--- @param alignment Enum.HorizontalAlignment -- The desired horizontal alignment.
function VerticallyScalingListFrameClass:SetHorizontalAlignment(alignment: Enum.HorizontalAlignment)
  self._uiListLayout.HorizontalAlignment = alignment
end

--- Sets the vertical alignment of elements in the UI list layout.
--- @param alignment Enum.VerticalAlignment -- The desired vertical alignment.
function VerticallyScalingListFrameClass:SetVerticalAlignment(alignment: Enum.VerticalAlignment)
  self._uiListLayout.VerticalAlignment = alignment
end

--- Sets the fill direction of the UIListLayout inside the frame.
--- @param fillDirection Enum.FillDirection -- The direction in which UI elements will be laid out (Vertical or Horizontal).
function VerticallyScalingListFrameClass:SetFillDirection(fillDirection: Enum.FillDirection)
  self._uiListLayout.FillDirection = fillDirection
end

--- Sets the padding between UI elements in the list layout.
--- @param padding UDim -- The space to apply between child elements.
function VerticallyScalingListFrameClass:SetLayoutPadding(padding: UDim)
  self._uiListLayout.Padding = padding
end

return VerticallyScalingListFrameClass
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\VerticalScrollingFrame.luau
``
----------------------------------------
--
-- VerticalScrollingFrame.lua
--
-- Creates a scrolling frame that automatically updates canvas size
--
----------------------------------------

local GuiUtilities = require("../GuiUtilities")

local VerticalScrollingFrame = {}
VerticalScrollingFrame.__index = VerticalScrollingFrame

--- VerticalScrollingFrame constructor.
--- @param suffix string -- A suffix to append to the names of internal GUI elements for uniqueness.
--- @return table -- A new instance of the vertical scrolling frame class.
function VerticalScrollingFrame.new(suffix: string)
  local self = {}
  setmetatable(self, VerticalScrollingFrame)
  
  local section = Instance.new("Frame")
  section.BorderSizePixel = 0
  section.Size = UDim2.new(1, 0, 1, 0)
  section.Position = UDim2.new(0, 0, 0, 0)
  section.BackgroundTransparency = 1
  section.Name = "VerticalScrollFrame" .. suffix
  
  local scrollBackground = Instance.new("Frame")
  scrollBackground.Name = "ScrollbarBackground"
  scrollBackground.BackgroundColor3 = Color3.fromRGB(238, 238, 238)
  scrollBackground.BorderColor3 = Color3.fromRGB(182, 182, 182)
  scrollBackground.Size = UDim2.new(0, 15, 1, -2)
  scrollBackground.Position = UDim2.new(1, -16, 0, 1)
  scrollBackground.Parent = section
  scrollBackground.ZIndex = 2;
  
  local scrollFrame = Instance.new("ScrollingFrame")
  scrollFrame.Name = "ScrollFrame" .. suffix
  scrollFrame.VerticalScrollBarPosition = Enum.VerticalScrollBarPosition.Right
  scrollFrame.VerticalScrollBarInset = Enum.ScrollBarInset.ScrollBar
  scrollFrame.ElasticBehavior = Enum.ElasticBehavior.Never
  scrollFrame.ScrollBarThickness = 17
  scrollFrame.BorderSizePixel = 0
  scrollFrame.BackgroundTransparency = 1
  scrollFrame.ZIndex = 2
  scrollFrame.TopImage = "http://www.roblox.com/asset/?id=1533255544"
  scrollFrame.MidImage = "http://www.roblox.com/asset/?id=1535685612"
  scrollFrame.BottomImage = "http://www.roblox.com/asset/?id=1533256504"
  scrollFrame.Size = UDim2.new(1, 0, 1, 0)
  scrollFrame.Position = UDim2.new(0, 0, 0, 0)
  scrollFrame.Parent = section
  
  local uiListLayout = Instance.new("UIListLayout")
  uiListLayout.SortOrder = Enum.SortOrder.LayoutOrder
  uiListLayout.Parent = scrollFrame
  
  self._section = section
  self._scrollFrame = scrollFrame
  self._scrollBackground = scrollBackground
  self._uiListLayout = uiListLayout
  
  scrollFrame:GetPropertyChangedSignal("AbsoluteSize"):Connect(function() self:_updateScrollingFrameCanvas() end)
  uiListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function() self:_updateScrollingFrameCanvas() end)
  self:_updateScrollingFrameCanvas()
  
  GuiUtilities.syncGuiElementScrollColor(scrollFrame)
  GuiUtilities.syncGuiElementBorderColor(scrollBackground)
  GuiUtilities.syncGuiElementTitleColor(scrollBackground)
  
  return self
end

function VerticalScrollingFrame:_updateScrollbarBackingVisibility()
  self._scrollBackground.Visible = self._scrollFrame.AbsoluteSize.y < self._uiListLayout.AbsoluteContentSize.y
end

function VerticalScrollingFrame:_updateScrollingFrameCanvas()
  self._scrollFrame.CanvasSize = UDim2.new(0, 0, 0, self._uiListLayout.AbsoluteContentSize.Y)
  self:_updateScrollbarBackingVisibility()
end

--- Returns the internal ScrollingFrame that holds the scrollable content.
--- @return ScrollingFrame -- The scrolling content frame.
function VerticalScrollingFrame:GetContentsFrame(): Frame
  return self._scrollFrame
end

--- Returns the top-level section frame that contains the scrollbar and scrollable content.
--- @return Frame -- The outer section frame.
function VerticalScrollingFrame:GetSectionFrame(): Frame
  return self._section
end

--- Adds a child frame to the scrollable content area.
--- @param childFrame GuiObject -- The GUI object to be added to the scrollable content.
function VerticalScrollingFrame:AddChild(childFrame)
  childFrame.Parent = self._scrollFrame
end

return VerticalScrollingFrame
``

# File: plugin\sync\ReplicatedFirst\AzulCompanionPlugin\StudioWidgets\Components\VerticalSpacer.luau
``
----------------------------------------
--
-- VerticalSpacerClass.lua
--
-- Creates an empty space of a fixed height
--
----------------------------------------
GuiUtilities = require("../GuiUtilities")

local VerticalSpacerClass = {}
VerticalSpacerClass.__index = VerticalSpacerClass

--- VerticalSpacerClass constructor.
--- @param nameSuffix string -- A unique suffix to append to the spacer's name.
--- @param height number? -- Optional height of the spacer in pixels. Defaults to a preset value if not provided.
--- @return VerticalSpacerClass -- A new instance of the vertical spacer component.
function VerticalSpacerClass.new(nameSuffix: string, height: number?)
  local self = setmetatable({}, VerticalSpacerClass)

  local frame = GuiUtilities.MakeStandardFixedHeightFrame("VSPF " .. nameSuffix)
  frame.BackgroundTransparency = 1
  if height then frame.Size = UDim2.new(1, 0, 0, height) end
  
  self._frame = frame
  
  return self
end

--- Returns the UI frame representing the vertical spacer.
--- @return Frame -- The frame instance used for layout spacing.
function VerticalSpacerClass:GetFrame(): Frame
  return self._frame
end

return VerticalSpacerClass
``

# File: src\build.ts
``
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

``

# File: src\cli.ts
``
#!/usr/bin/env node
import { resolve } from "node:path";
import fs from "node:fs";
import { spawn } from "node:child_process";
import { SyncDaemon } from "./index.js"; // or refactor to export the class
import { config, getUserConfigPath, initializeConfig } from "./config.js";
import { log } from "./util/log.js";
import { BuildCommand } from "./build.js";
import { PushCommand } from "./push.js";
import { PackCommand } from "./pack.js";
import { parseCliArgs } from "./util/cliArgs.js";
import { getCurrentVersion, getLatestVersion } from "./util/versionUtils.js";
import { prompt } from "./util/prompt.js";

const versionCurrent = getCurrentVersion();

let parsedArgs;
try {
  parsedArgs = parseCliArgs(process.argv.slice(2));
} catch (error) {
  log.error(`${error}`);
  process.exit(1);
}

initializeConfig();
log.debug(`Loaded user config from: ${getUserConfigPath()}`);

if (config.checkForUpdates) {
  void checkForUpdates(versionCurrent);
}

const c = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  cyan: "\x1b[36m",
  underline: "\x1b[4m",
  bold: "\x1b[1m",
};

if (parsedArgs.help) {
  console.log(`
${c.bold}Usage:${c.reset}
  ${c.cyan}azul <command> [options]${c.reset}

${c.bold}Commands:${c.reset} 
  ${c.bold}(no command)${c.reset}              Start live sync daemon
  ${c.bold}build${c.reset}                     One-time push from filesystem into Studio
  ${c.bold}push${c.reset}                      Selective push using mappings (place config or -s/-d)
  ${c.bold}pack${c.reset}                      Serialize Studio instance properties into sourcemap.json
  ${c.bold}config${c.reset}                    Open the Azul config file in your default editor

${c.bold}Global Options:${c.reset}
  -h, --help                Show this help message
  --version                 Show Azul version
  --debug                   Print verbose debug output
  --no-warn                 Disable confirmation prompts for dangerous operations
  --sync-dir <path>         Directory to sync (default: current directory)
  --port <number>           Studio connection port

${c.bold}Build Options:${c.reset}
  --from-sourcemap <file>   Build from sourcemap
  --destructive             Wipe destination children for build roots before applying snapshot
  --rojo                    Enable Rojo-compatible parsing
  --rojo-project <file>     Use a Rojo project file

${c.bold}Push Options:${c.reset}
  -s, --source <path>       Source file or folder to push
  -d, --destination <path>  Studio destination path (i.e "ReplicatedStorage.Packages")
  --from-sourcemap <file>   Push from sourcemap
  --no-place-config         Ignore push mappings from place ModuleScript
  --destructive             Wipe destination children before pushing
  --rojo                    Enable Rojo-compatible parsing
  --rojo-project <file>     Use a Rojo project file

${c.bold}Pack Options:${c.reset}
  -o, --output <file>       Sourcemap path to write (default: config.sourcemapPath)
  --scripts-only            Serialize only scripts and their descendants

${c.bold}Config Options:${c.reset}
  --path                    Print config file path
  `);
  process.exit(0);
}

if (parsedArgs.version) {
  log.info(`Azul version: ${versionCurrent}`);
  process.exit(0);
}

if (parsedArgs.command === "config") {
  const userConfigPath = getUserConfigPath();

  if (parsedArgs.configPath) {
    console.log(userConfigPath);
    process.exit(0);
  }

  try {
    await openWithDefaultEditor(userConfigPath);
    log.info(`Opened Azul config: ${userConfigPath}`);
  } catch (error) {
    throw new Error(`Failed to open config file: ${error}`);
  }

  process.exit(0);
}

// get current running path
const currentPath = process.cwd();
if (
  (currentPath.includes(`\\${config.syncDir}`) ||
    currentPath.includes(`/${config.syncDir}`)) &&
  !parsedArgs.noWarn
) {
  log.warn(
    `Looks like you're trying to run Azul from within a '${config.syncDir}' directory. Running Azul here will create a directory like "/${config.syncDir}/${config.syncDir}/", which may be unintended.`,
  );

  const continueFromSyncDir = await prompt.getYesNoInput(
    "Continue? (Y/N)",
    "Please answer Y (yes) or N (no). Are you sure? (Y/N)",
  );

  if (!continueFromSyncDir) {
    log.info("Exiting. Please run azul from your project root.");
    process.exit(0);
  }
}

log.info(`Running azul from: ${currentPath}`);

if (parsedArgs.syncDir) config.syncDir = resolve(parsedArgs.syncDir);
if (parsedArgs.port) config.port = parsedArgs.port;
if (parsedArgs.debug) config.debugMode = true;

log.debug(`Debug mode is on!`);

if (parsedArgs.command === "build") {
  if (!parsedArgs.rojo && fs.existsSync("default.project.json")) {
    log.warn(
      'Detected a default.project.json file! You can enable Rojo compatibility mode by passing the "--rojo" flag.',
    );
  }

  const hasBuildSpecificOptions =
    parsedArgs.rojo ||
    Boolean(parsedArgs.rojoProject) ||
    parsedArgs.fromSourcemap !== undefined;
  // || parsedArgs.destructive;
  // Don't consider passing "--destructive" as enough to bypass interactive mode,
  // since destructive building without a sourcemap is very likely a mistake.

  let applySourcemapProperties = true;
  let useSourcemapAsSource = parsedArgs.fromSourcemap !== undefined;
  let interactiveDestructive = parsedArgs.destructive;

  if (!hasBuildSpecificOptions) {
    const sourcemapExists = fs.existsSync(config.sourcemapPath);
    if (sourcemapExists) {
      const useFull = await prompt.getYesNoInput(
        `Build directly from ${config.sourcemapPath} (includes non-script instances)? (Y/N)`,
      );
      if (useFull) {
        useSourcemapAsSource = true;
        applySourcemapProperties = false;
      } else {
        applySourcemapProperties = await prompt.getYesNoInput(
          `Use packed properties/attributes from ${config.sourcemapPath}? (Y/N)`,
        );
      }
    } else {
      applySourcemapProperties = false;
      log.info(
        `No sourcemap found at ${config.sourcemapPath}. Build will recreate instances as scripts/folders.`,
      );
    }

    // Only ask about destructive option if we're building from sourcemap.
    // Destructively building without a sourcemap is very likely a mistake, since it wipes everything in Studio instead of building "on top".
    // This functionality is still possible with the "--destructive" flag if someone really wants it
    if (useSourcemapAsSource || applySourcemapProperties) {
      interactiveDestructive = await prompt.getYesNoInput(
        "Destructive build (wipe everything in Studio & build from scratch)? (Y/N)",
      );
    }
  }

  if (!parsedArgs.noWarn) {
    if (interactiveDestructive) {
      log.warn(
        "CAUTION: This will replace your entire Studio state with your local project (all instances, scripts, and properties). Unsaved Studio work WILL BE LOST.",
      );
    } else {
      log.warn(
        "CAUTION: This will overwrite matching Studio scripts/instances and create new ones from your local project. Instances with no local equivalent will be left untouched.",
      );
    }

    const shouldContinue = await prompt.getYesNoInput(
      "Continue with build? (Y/N)",
      "Please answer Y (yes) or N (no). Continue with build? (Y/N)",
    );

    if (!shouldContinue) {
      log.info("Exiting build command...");
      process.exit(0);
    }
  }

  await new BuildCommand({
    syncDir: config.syncDir,
    rojoMode: parsedArgs.rojo,
    rojoProjectFile: parsedArgs.rojoProject ?? undefined,
    applySourcemapProperties,
    useSourcemapAsSource,
    sourcemapPath: parsedArgs.fromSourcemap,
    destructive: interactiveDestructive,
  }).run();

  log.info("Build command completed.");
  log.info("Run 'azul' to resume live sync if needed.");
  log.info("Exiting...");

  process.exit(0);
}

if (parsedArgs.command === "push") {
  const usePlaceConfig = !parsedArgs.noPlaceConfig;

  const hasPushSpecificOptions = Boolean(
    parsedArgs.source ||
    parsedArgs.destination ||
    parsedArgs.destructive ||
    !usePlaceConfig ||
    parsedArgs.rojo ||
    parsedArgs.rojoProject ||
    parsedArgs.fromSourcemap,
  );

  let interactiveSource = parsedArgs.source ?? undefined;
  let interactiveDest = parsedArgs.destination ?? undefined;
  let interactiveDestructive = parsedArgs.destructive;
  let interactiveUsePlaceConfig = usePlaceConfig;
  let useSourcemapAsSource =
    !parsedArgs.rojo && parsedArgs.fromSourcemap !== undefined;
  let applySourcemapProperties =
    !parsedArgs.rojo && parsedArgs.fromSourcemap === undefined;

  if (!hasPushSpecificOptions && !parsedArgs.rojo) {
    const useConfig = await prompt.getYesNoInput(
      "Use place config from Studio (ServerStorage.Azul.Config)? (Y/N)",
    );
    interactiveUsePlaceConfig = useConfig;

    if (!useConfig) {
      interactiveSource =
        (await prompt.getInput("Source folder to push (e.g., src)?")).trim() ||
        undefined;
      interactiveDest =
        (
          await prompt.getInput(
            "Destination path (dot or slash separated, e.g., ReplicatedStorage.Packages)?",
          )
        ).trim() || undefined;
      interactiveDestructive = await prompt.getYesNoInput(
        "Destructive push (wipe destination children)? (Y/N)",
      );
    }
  }

  const willUsePlaceConfig =
    !parsedArgs.rojo &&
    interactiveUsePlaceConfig &&
    !(interactiveSource && interactiveDest);

  if (
    !parsedArgs.rojo &&
    parsedArgs.fromSourcemap === undefined &&
    !willUsePlaceConfig
  ) {
    useSourcemapAsSource = await prompt.getYesNoInput(
      `Build push snapshot directly from ${config.sourcemapPath} (includes non-script descendants and ancestors)? (Y/N)`,
    );
    if (useSourcemapAsSource) {
      if (fs.existsSync(config.sourcemapPath)) {
        applySourcemapProperties = await prompt.getYesNoInput(
          `Apply packed properties/attributes from ${config.sourcemapPath}? (Y/N)`,
        );
      } else {
        useSourcemapAsSource = false;
        applySourcemapProperties = false;
        throw new Error(
          `Sourcemap not found at "${config.sourcemapPath}"! Please create one or provide it using the "--from-sourcemap" flag.`,
        );
      }
    } else {
      useSourcemapAsSource = false;
      applySourcemapProperties = false;
      log.info(
        `Not using sourcemap. Azul will recreate instances as scripts/folders based on your local filesystem structure with default Properties/Attributes.`,
      );
    }
  }

  if (!parsedArgs.rojo && fs.existsSync("default.project.json")) {
    log.info(
      "Detected default.project.json. Azul stays in native mode unless you pass --rojo.",
    );
  }

  if (parsedArgs.destructive && !parsedArgs.noWarn) {
    log.warn(
      "CAUTION: Destructive push will wipe destination children before applying snapshot. Proceed? (Y/N)",
    );

    const shouldContinue = await prompt.getYesNoInput(
      "Continue with destructive push? (Y/N)",
      "Please answer Y (yes) or N (no). Continue with destructive push? (Y/N)",
    );

    if (!shouldContinue) {
      log.info("Exiting push command...");
      process.exit(0);
    }
  }

  await new PushCommand({
    source: interactiveSource ?? undefined,
    destination: interactiveDest ?? undefined,
    destructive: interactiveDestructive,
    usePlaceConfig: parsedArgs.rojo ? false : interactiveUsePlaceConfig,
    rojoMode: parsedArgs.rojo,
    rojoProjectFile: parsedArgs.rojoProject ?? undefined,
    applySourcemapProperties,
    useSourcemapAsSource,
    sourcemapPath: parsedArgs.fromSourcemap,
  }).run();

  log.info("Push command completed.");
  log.info("Run 'azul' to resume live sync if needed.");
  process.exit(0);
}

if (parsedArgs.command === "pack") {
  let scriptsOnly = parsedArgs.scriptsOnly;

  const hasPackSpecificOptions = parsedArgs.output !== undefined || scriptsOnly;

  let finalOutputPath = parsedArgs.output ?? config.sourcemapPath;

  if (!hasPackSpecificOptions) {
    const interactive = await promptPackInteractive(config.sourcemapPath);
    finalOutputPath = interactive.outputPath;
    scriptsOnly = interactive.scriptsOnly;
  }

  await new PackCommand({
    outputPath: finalOutputPath,
    scriptsAndDescendantsOnly: scriptsOnly,
  }).run();

  log.info("Pack command completed.");
  process.exit(0);
}

const liveDaemon = new SyncDaemon();
liveDaemon.start();

let liveDaemonStopping = false;
const stopLiveDaemon = async (signal: string): Promise<void> => {
  if (liveDaemonStopping) {
    return;
  }

  liveDaemonStopping = true;
  log.info(`Received ${signal}, shutting down...`);

  try {
    await liveDaemon.stop();
    process.exit(0);
  } catch (error) {
    throw new Error(`Failed to stop daemon cleanly: ${error}`);
  }
};

process.on("SIGINT", () => {
  void stopLiveDaemon("SIGINT");
});

process.on("SIGTERM", () => {
  void stopLiveDaemon("SIGTERM");
});

async function checkForUpdates(currentVersion: string): Promise<void> {
  log.debug("Checking for updates...");
  const latest = await getLatestVersion();
  if (latest && latest !== currentVersion) {
    log.warn(
      `A new version of Azul is available! (${currentVersion} -> ${latest})`,
    );
  }
}

function openWithDefaultEditor(targetPath: string): Promise<void> {
  return new Promise((resolvePromise, rejectPromise) => {
    const currentPlatform = process.platform;

    const argsByPlatform: Record<string, string[]> = {
      win32: ["/c", "start", "", targetPath],
      darwin: [targetPath],
      linux: [targetPath],
    };

    const commandByPlatform: Record<string, string> = {
      win32: "cmd",
      darwin: "open",
      linux: "xdg-open",
    };

    const commandName = commandByPlatform[currentPlatform];
    const commandArgs = argsByPlatform[currentPlatform];

    if (!commandName || !commandArgs) {
      rejectPromise(new Error(`Unsupported platform: ${currentPlatform}`));
      return;
    }

    const child = spawn(commandName, commandArgs, {
      detached: true,
      stdio: "ignore",
    });

    child.on("error", (error: NodeJS.ErrnoException) => {
      if (currentPlatform === "linux" && error.code === "ENOENT") {
        rejectPromise(
          new Error(
            "Could not open config file because 'xdg-open' is not installed. Install it (i.e: 'sudo apt install xdg-utils' or 'sudo dnf install xdg-utils') and try again.",
          ),
        );
        return;
      }

      rejectPromise(error);
    });

    child.unref();
    resolvePromise();
  });
}

async function promptPackInteractive(defaultOutputPath: string): Promise<{
  outputPath: string;
  scriptsOnly: boolean;
}> {
  log.info("Interactive mode: configuring 'azul pack'.");
  const scriptsOnly = !(await prompt.getYesNoInput(
    "Serialize everything? (Y/N)",
  ));

  if (scriptsOnly) {
    log.info(
      "Scripts-only mode will only serialize Script, LocalScript, and ModuleScript instances and their descendants.",
    );
  }

  const outputInput = await prompt.getInput(
    `Output sourcemap path? (press Enter for '${defaultOutputPath}')`,
  );
  const outputPath =
    outputInput.trim() === "" ? defaultOutputPath : outputInput.trim();

  return {
    outputPath,
    scriptsOnly,
  };
}

``

# File: src\config.ts
``
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

``

# File: src\index.ts
``
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as http from "http";
import { IPCServer } from "./ipc/server.js";
import { TreeManager, TreeNode } from "./fs/treeManager.js";
import { FileWriter } from "./fs/fileWriter.js";
import { FileWatcher } from "./fs/watcher.js";
import { SourcemapGenerator } from "./sourcemap/generator.js";
import { log } from "./util/log.js";
import { config, initializeConfig } from "./config.js";
import type { StudioMessage } from "./ipc/messages.js";
import { generateGUID } from "./util/id.js";
import { classifyFileName } from "./util/scriptFile.js";

/**
 * Main orchestrator for the Azul daemon
 */
export class SyncDaemon {
  private ipc: IPCServer;
  private httpServer: http.Server;
  private tree: TreeManager;
  private fileWriter: FileWriter;
  private fileWatcher: FileWatcher;
  private sourcemapGenerator: SourcemapGenerator;
  private batchDepth = 0; // Tracks nested batch processing
  private batchNeedsSourcemapRegen = false; // Defer regen until batch ends
  private stopPromise: Promise<void> | null = null;
  // Coalesces sourcemap regeneration for bursts of filesystem mutations (e.g. a
  // bulk `rm -rf` or a git branch switch) so we do at most one full rebuild.
  private fsRegenTimer: NodeJS.Timeout | null = null;
  private fsRegenPending = false;

  constructor() {
    this.tree = new TreeManager();
    this.fileWriter = new FileWriter(config.syncDir);
    this.fileWatcher = new FileWatcher();
    this.sourcemapGenerator = new SourcemapGenerator();

    // HTTP server is used for WebSocket upgrade handling.
    this.httpServer = http.createServer((_, res) => {
      res.writeHead(404);
      res.end("Not found");
    });

    this.ipc = new IPCServer(config.port, this.httpServer, {
      requestSnapshotOnConnect: false,
    });

    this.setupHandlers();
    this.httpServer.listen(config.port);
  }

  /**
   * Set up all event handlers
   */
  private setupHandlers(): void {
    // Handle messages from Studio (WebSocket)
    this.ipc.onMessage((message) => this.handleStudioMessage(message));
    this.ipc.onHandshake(() => {
      this.ipc.requestSnapshot();
    });
    this.ipc.onDisconnect(() => {
      this.handleClientDisconnect();
    });

    // Handle file changes from filesystem
    this.fileWatcher.onChange((eventType, filePath, source) => {
      this.handleFsEvent(eventType, filePath, source);
    });
  }

  /**
   * Handle incoming messages from Studio
   */
  private handleStudioMessage(message: StudioMessage): void {
    if (message.type === "batch") {
      this.batchDepth += 1;
      try {
        for (const payload of message.messages) {
          this.handleStudioMessage(payload);
        }
      } finally {
        this.batchDepth -= 1;

        // If any delete in this batch missed its prune, only regenerate once at the end
        if (this.batchDepth === 0 && this.batchNeedsSourcemapRegen) {
          this.regenerateSourcemap();
          this.batchNeedsSourcemapRegen = false;
        }
      }
      return;
    }

    switch (message.type) {
      case "fullSnapshot":
        this.handleFullSnapshot(message.data);
        break;

      case "scriptChanged":
        this.handleScriptChanged(message.data);
        break;

      case "instanceUpdated":
        this.handleInstanceUpdated(message.data);
        break;

      case "deleted":
        this.handleDeleted(message.data);
        break;

      case "ping":
        this.ipc.send({ type: "pong" });
        break;

      case "clientDisconnect":
        log.info("Studio client requested disconnect");
        this.handleClientDisconnect();
        break;

      default:
        log.warn("Unknown message type:", (message as any).type);
    }
  }

  /**
   * Handle client disconnect gracefully without closing the process
   */
  private handleClientDisconnect(): void {
    log.info("Studio client disconnected. Stopping file watcher, keeping server active...");
    void (async () => {
      await this.fileWatcher.stop();
    })();
  }

  /**
   * Handle full snapshot from Studio
   */
  private handleFullSnapshot(data: any[]): void {
    log.info("Received full snapshot from Studio");

    // Update tree
    this.tree.applyFullSnapshot(data);

    // Write all scripts to filesystem
    this.fileWriter.writeTree(this.tree.getAllNodes());

    // Remove any pre-existing files that are no longer mapped (optional)
    this.cleanupOrphanFiles();

    // Start file watching
    this.fileWatcher.watch(this.fileWriter.getBaseDir());

    // Generate sourcemap
    this.regenerateSourcemap();

    // Log statistics
    const stats = this.tree.getStats();
    log.success(
      `Sync complete: ${stats.scriptNodes} scripts, ${stats.totalNodes} total nodes`,
    );
  }

  /**
   * Handle script source change
   */
  private handleScriptChanged(message: {
    guid: string;
    source: string;
    path: string[];
    className: string;
  }): void {
    const { guid, source, path: instancePath, className } = message;

    // Update tree
    this.tree.updateScriptSource(guid, source);

    // Get or create node
    let node = this.tree.getNode(guid);
    if (!node) {
      // Create new node if it doesn't exist
      this.tree.updateInstance({
        guid,
        className,
        name: instancePath[instancePath.length - 1],
        path: instancePath,
        source,
      });
      node = this.tree.getNode(guid);
    }

    if (node) {
      // Precompute path and suppress watcher before writing to avoid race conditions
      const filePath = this.fileWriter.getFilePath(node, this.tree.getAllNodes());
      this.fileWatcher.suppressNextChange(filePath, source);

      // Write to filesystem
      this.fileWriter.writeScript(node, this.tree.getAllNodes());

      // Incrementally update sourcemap entry for this script
      this.sourcemapGenerator.upsertSubtree(
        node,
        this.tree.getAllNodes(),
        this.fileWriter.getAllMappings(),
        config.sourcemapPath,
        undefined,
        false,
      );
    }
  }

  /**
   * Handle instance update (rename, move, etc.)
   */
  private handleInstanceUpdated(data: any): void {
    const update = this.tree.updateInstance(data);
    const node = update?.node;

    if (!node) {
      return;
    }

    const nodesToUpdate: Map<string, TreeNode> = new Map();

    if (this.isSyncableClass(node.className)) {
      nodesToUpdate.set(node.guid, node);
    }

    if (update.pathChanged || update.nameChanged || update.parentChanged) {
      for (const child of this.tree.getDescendantSyncableNodes(node.guid)) {
        nodesToUpdate.set(child.guid, child);
      }
    }

    for (const syncableNode of nodesToUpdate.values()) {
      const filePath = this.fileWriter.getFilePath(syncableNode, this.tree.getAllNodes());
      if (this.isScriptClass(syncableNode.className)) {
        this.fileWatcher.suppressNextChange(filePath, syncableNode.source);
      } else {
        const payload = {
          properties: syncableNode.properties || {},
          attributes: syncableNode.attributes || {},
          tags: syncableNode.tags || [],
        };
        this.fileWatcher.suppressNextChange(filePath, JSON.stringify(payload, null, 2));
      }
      this.fileWriter.writeScript(syncableNode, this.tree.getAllNodes());
    }

    const shouldUpdateSourcemap =
      update.isNew ||
      update.pathChanged ||
      update.nameChanged ||
      update.parentChanged ||
      this.isSyncableClass(node.className);

    if (shouldUpdateSourcemap) {
      this.sourcemapGenerator.upsertSubtree(
        node,
        this.tree.getAllNodes(),
        this.fileWriter.getAllMappings(),
        config.sourcemapPath,
        update.prevPath,
        update.isNew,
      );
    }

    this.fileWriter.cleanupEmptyDirectories();
  }

  /**
   * Handle instance deletion
   */
  private handleDeleted(message: { guid: string }): void {
    const { guid } = message;
    const node = this.tree.getNode(guid);

    // If the node is already gone (e.g., child deletes after parent delete), fall back to full cleanup
    if (!node) {
      log.debug(`Delete ignored for unknown guid: ${guid}`);
      this.fileWriter.deleteScript(guid);
      // this.regenerateSourcemap();
      this.fileWriter.cleanupEmptyDirectories();
      return;
    }

    // Capture all syncable descendants (and the node itself if syncable) before we delete the tree nodes
    const nodesToDelete: { guid: string; filePath: string | null }[] = [];
    const collectSyncable = (syncableNode: TreeNode): void => {
      const filePath = this.fileWriter.getFilePath(syncableNode, this.tree.getAllNodes());
      nodesToDelete.push({ guid: syncableNode.guid, filePath });
    };

    if (this.isSyncableClass(node.className)) {
      collectSyncable(node);
    }
    for (const child of this.tree.getDescendantSyncableNodes(node.guid)) {
      collectSyncable(child);
    }

    const pathSegments = node.path;

    // Delete from tree (removes node and descendants)
    this.tree.deleteInstance(guid);

    // Delete files for all affected syncables
    for (const entry of nodesToDelete) {
      if (entry.filePath) {
        this.fileWatcher.suppressNextChange(entry.filePath);
      }
      const removed = this.fileWriter.deleteScript(entry.guid);
      if (!removed && entry.filePath) {
        this.fileWriter.deleteFilePath(entry.filePath);
      }
    }

    // Remove subtree from sourcemap
    const outputPath = config.sourcemapPath;
    const pruned = this.sourcemapGenerator.prunePath(
      pathSegments,
      outputPath,
      this.tree.getAllNodes(),
      this.fileWriter.getAllMappings(),
      node.className,
      node.guid,
    );

    // If prune failed to find the path (e.g., sourcemap drift), rebuild once to stay consistent
    if (!pruned) {
      if (this.batchDepth > 0) {
        // Defer regeneration until the batch completes to avoid repeated full rebuilds
        this.batchNeedsSourcemapRegen = true;
        log.debug("Regenerating sourcemap after batched prune miss");
      } else {
        log.debug("Regenerating sourcemap due to prune miss");
        this.regenerateSourcemap();
      }
    }

    this.fileWriter.cleanupEmptyDirectories();
  }

  /**
   * Handle filesystem events (add, change, unlink)
   */
  private handleFsEvent(
    eventType: "add" | "change" | "unlink",
    filePath: string,
    source?: string,
    extraData?: { properties?: any; attributes?: any; tags?: any },
  ): void {
    const guid = this.fileWriter.getGuidByPath(filePath);

    if (eventType === "unlink") {
      if (!guid) return;
      const node = this.tree.getNode(guid);
      if (!node) return;

      log.info(`File deleted externally: ${path.relative(this.fileWriter.getBaseDir(), filePath)}`);

      // Capture path/class before removing the node so we can prune the
      // sourcemap incrementally instead of doing a full O(n) rebuild per delete.
      const prunePathSegments = [...node.path];
      const prunedClassName = node.className;
      const prunedGuid = node.guid;

      // Remove from local tree
      this.tree.deleteInstance(guid);

      // Remove from fileWriter mappings
      this.fileWriter.deleteMapping(guid);

      // Send delete message to Studio
      this.ipc.send({
        type: "deleted",
        data: { guid },
      });

      // Incrementally prune the removed subtree from the sourcemap. Only fall
      // back to a (coalesced) full regeneration if the targeted prune misses,
      // which keeps bulk deletes from being quadratic.
      const pruned = this.sourcemapGenerator.prunePath(
        prunePathSegments,
        config.sourcemapPath,
        this.tree.getAllNodes(),
        this.fileWriter.getAllMappings(),
        prunedClassName,
        prunedGuid,
      );
      if (!pruned) {
        this.scheduleDeferredSourcemapRegen();
      }
      this.fileWriter.cleanupEmptyDirectories();
    } else if (eventType === "change" && guid) {
      log.info(
        `File changed externally: ${path.relative(this.fileWriter.getBaseDir(), filePath)}`,
      );

      const node = this.tree.getNode(guid);
      if (!node) return;

      const isScript = this.isScriptClass(node.className);
      if (isScript) {
        if (node.source === source) {
          log.debug(
            `Skipping Studio patch for unchanged file: ${path.relative(this.fileWriter.getBaseDir(), filePath)}.`,
          );
          return;
        }

        // Update tree
        this.tree.updateScriptSource(guid, source || "");

        // Send patch to Studio
        this.ipc.patchScript(guid, source || "");
      } else {
        // Properties/attributes/tags changed on an extra class instance
        if (extraData) {
          const propertiesChanged = JSON.stringify(node.properties || {}) !== JSON.stringify(extraData.properties || {});
          const attributesChanged = JSON.stringify(node.attributes || {}) !== JSON.stringify(extraData.attributes || {});
          const tagsChanged = JSON.stringify(node.tags || []) !== JSON.stringify(extraData.tags || []);

          if (!propertiesChanged && !attributesChanged && !tagsChanged) {
            log.debug(`Skipping Studio update for unchanged extra-class file.`);
            return;
          }

          const updatedData = {
            guid,
            className: node.className,
            name: node.name,
            path: node.path,
            parentGuid: node.parentGuid,
            properties: extraData.properties,
            attributes: extraData.attributes,
            tags: extraData.tags,
          };

          this.tree.updateInstance(updatedData);

          this.ipc.send({
            type: "instanceUpdated",
            data: updatedData,
          });
        }
      }
    } else if (eventType === "add" || (eventType === "change" && !guid)) {
      // If a mapping already exists for this path, treat it as a change
      if (guid) {
        this.handleFsEvent("change", filePath, source, extraData);
        return;
      }

      const newGuid = generateGUID();
      const relPath = path.relative(this.fileWriter.getBaseDir(), filePath);
      const parts = relPath.split(path.sep).filter(Boolean);
      if (parts.length === 0) return;

      const fileName = parts[parts.length - 1];
      const { className, instanceName, isScript } = classifyFileName(fileName);
      const parentSegments = parts.slice(0, -1);
      const cleanParentSegments = parentSegments.map((seg) => classifyFileName(seg).instanceName);
      const instancePath = [...cleanParentSegments, instanceName];

      log.info(`File created externally: ${relPath}`);

      // Ensure intermediate folders exist in the tree and in Studio
      let currentSegments: string[] = [];
      let parentGuid: string | null = "root";

      for (let i = 0; i < parentSegments.length; i++) {
        const rawSegment = parentSegments[i];
        const cleanSegment = cleanParentSegments[i];
        currentSegments.push(cleanSegment);
        let folderNode = this.tree.getNodeByPath(currentSegments);
        if (!folderNode) {
          const { className: parentClass } = classifyFileName(rawSegment);
          const folderGuid = generateGUID();
          const folderData = {
            guid: folderGuid,
            className: parentClass,
            name: cleanSegment,
            path: [...currentSegments],
            parentGuid,
          };
          this.tree.updateInstance(folderData);
          folderNode = this.tree.getNode(folderGuid)!;

          // Send folder creation to Studio
          this.ipc.send({
            type: "instanceUpdated",
            data: folderData,
          });
        }
        parentGuid = folderNode.guid;
      }

      // Create the node in tree
      const data: any = {
        guid: newGuid,
        className,
        name: instanceName,
        path: instancePath,
        parentGuid,
      };
      if (isScript) {
        data.source = source || "";
      } else if (extraData) {
        data.properties = extraData.properties;
        data.attributes = extraData.attributes;
        data.tags = extraData.tags;
      }
      this.tree.updateInstance(data);

      // Register mapping in fileWriter
      this.fileWriter.registerMapping(newGuid, filePath, className);

      // Send creation to Studio
      this.ipc.send({
        type: "instanceUpdated",
        data,
      });

      // Regenerate sourcemap
      this.regenerateSourcemap();
    }
  }

  /**
   * Regenerate the sourcemap
   */
  private regenerateSourcemap(): void {
    // Write sourcemap into the sync directory so Luau-LSP can find it
    const outputPath = config.sourcemapPath;
    this.sourcemapGenerator.generateAndWrite(
      this.tree.getAllNodes(),
      this.fileWriter.getAllMappings(),
      outputPath,
    );
  }

  /**
   * Coalesce a full sourcemap regeneration across a burst of filesystem
   * mutations. Used as the fallback when an incremental prune misses, so a bulk
   * delete performs a single rebuild instead of one per file (which is O(n^2)).
   */
  private scheduleDeferredSourcemapRegen(): void {
    this.fsRegenPending = true;
    if (this.fsRegenTimer) {
      return;
    }
    this.fsRegenTimer = setTimeout(() => {
      this.fsRegenTimer = null;
      if (!this.fsRegenPending) {
        return;
      }
      this.fsRegenPending = false;
      log.debug("Running coalesced sourcemap regeneration after filesystem burst");
      this.regenerateSourcemap();
    }, Math.max(config.fileWatchDebounce, 100));
  }

  /**
   * Start the daemon
   */
  public start(): void {
    log.info("🚀 Azul daemon starting...");
    log.info(`Sync directory: ${config.syncDir}`);
    log.info(`HTTP/WebSocket port: ${config.port}`);
    log.info("");
    log.success(`Server listening on http://localhost:${config.port}`);
    log.info("Waiting for Studio connection...");
  }

  /**
   * Stop the daemon
   */
  public async stop(): Promise<void> {
    if (this.stopPromise) {
      return this.stopPromise;
    }

    this.stopPromise = (async () => {
      log.info("Stopping daemon...");
      if (this.fsRegenTimer) {
        clearTimeout(this.fsRegenTimer);
        this.fsRegenTimer = null;
        this.fsRegenPending = false;
      }
      await this.fileWatcher.stop();
      this.ipc.send({ type: "daemonDisconnect" });
      await new Promise((resolve) => setTimeout(resolve, 50));
      this.ipc.close();
      await new Promise<void>((resolve, reject) => {
        this.httpServer.close((error) => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      });
      log.info("Daemon stopped");
    })();

    return this.stopPromise;
  }

  private isScriptClass(className: string): boolean {
    return (
      className === "Script" ||
      className === "LocalScript" ||
      className === "ModuleScript"
    );
  }

  private isSyncableClass(className: string): boolean {
    if (this.isScriptClass(className)) return true;
    const classNameLower = className.toLowerCase();
    return Object.values(config.extraClassSuffixes).some((val) => val.toLowerCase() === classNameLower);
  }

  /**
   * Delete files under syncDir that are not mapped to any instance (opt-in).
   */
  private cleanupOrphanFiles(): void {
    if (!config.deleteOrphansOnConnect) {
      return;
    }

    const baseDir = this.fileWriter.getBaseDir();
    const mapped = new Set<string>();

    for (const mapping of this.fileWriter.getAllMappings().values()) {
      mapped.add(path.resolve(mapping.filePath));
    }

    let removedFiles: string[] = [];

    const walk = (dir: string): void => {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(fullPath);
        } else {
          if (!mapped.has(path.resolve(fullPath))) {
            try {
              fs.unlinkSync(fullPath);
              removedFiles.push(entry.name);
            } catch (error) {
              log.warn("Failed to delete orphan file:", fullPath, error);
            }
          }
        }
      }
    };

    walk(baseDir);
    if (removedFiles.length > 0) {
      this.fileWriter.cleanupEmptyDirectories();
      log.success(
        `Removed ${removedFiles.length} orphan file(s) from sync directory (${removedFiles.join(", ")})`,
      );
    }
  }
}

// Allow direct execution (`node dist/index.js`) while preventing side effects when imported by the CLI
const isDirectRun =
  process.argv[1] &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isDirectRun) {
  initializeConfig();
  const daemon = new SyncDaemon();
  daemon.start();

  // Handle graceful shutdown
  process.on("SIGINT", async () => {
    console.log("\n");
    console.log("Received SIGINT, shutting down...");
    await daemon.stop();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    await daemon.stop();
    process.exit(0);
  });
}

``

# File: src\pack.ts
``
import fs from "node:fs";
import path from "node:path";
import { IPCServer } from "./ipc/server.js";
import { config } from "./config.js";
import { log } from "./util/log.js";
import type {
  InstanceData,
  SnapshotRequestOptions,
  StudioMessage,
} from "./ipc/messages.js";

interface PackOptions {
  outputPath?: string;
  scriptsAndDescendantsOnly?: boolean;
}

interface SourcemapNode {
  name: string;
  className: string;
  guid?: string;
  filePaths?: string[];
  children?: SourcemapNode[];
  properties?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
  tags?: string[];
}

interface SourcemapRoot {
  name: string;
  className: string;
  children: SourcemapNode[];
  _azul?: {
    packVersion?: number;
    packedAt?: string;
    mode?: "all" | "scripts-and-descendants";
  };
}

const PACK_VERSION = 1;

export class PackCommand {
  private ipc: IPCServer;
  private outputPath: string;
  private scriptsAndDescendantsOnly: boolean;

  constructor(options: PackOptions = {}) {
    this.outputPath = path.resolve(options.outputPath ?? config.sourcemapPath);
    this.scriptsAndDescendantsOnly = Boolean(options.scriptsAndDescendantsOnly);
    this.ipc = new IPCServer(config.port, undefined, {
      requestSnapshotOnConnect: false,
    });
  }

  public async run(): Promise<void> {
    log.info(`Waiting for Studio to connect on port ${config.port}...`);
    const snapshot = await this.requestSnapshot({
      includeProperties: true,
      scriptsAndDescendantsOnly: this.scriptsAndDescendantsOnly,
    });

    if (!snapshot) {
      log.error("Failed to receive snapshot from Studio for packing.");
      return;
    }

    const existing = this.readExistingSourcemap();
    const regenerated = this.regenerateSourcemap(snapshot, existing);
    const packedCount = this.packIntoSourcemap(snapshot, regenerated);

    this.writeSourcemap(regenerated, this.outputPath);
    log.success(`Packed ${packedCount} node(s) into ${this.outputPath}`);
  }

  private async requestSnapshot(
    options: SnapshotRequestOptions,
  ): Promise<InstanceData[] | null> {
    return new Promise<InstanceData[] | null>((resolve) => {
      let timeoutHandle: NodeJS.Timeout | null = null;
      let resolved = false;

      const finalize = (result: InstanceData[] | null): void => {
        if (resolved) return;
        resolved = true;

        if (timeoutHandle) {
          clearTimeout(timeoutHandle);
          timeoutHandle = null;
        }

        setTimeout(() => {
          this.ipc.close();
        }, 200);

        resolve(result);
      };

      this.ipc.onMessage((message: StudioMessage) => {
        if (message.type !== "fullSnapshot") return;
        finalize(message.data);
      });

      this.ipc.onConnection(() => {
        log.info("Studio connected. Waiting for handshake...");
      });

      this.ipc.onHandshake(() => {
        log.info("Handshake complete. Requesting snapshot...");
        this.ipc.requestSnapshot(options);
      });

      timeoutHandle = setTimeout(() => {
        log.error("Timed out waiting for Studio snapshot.");
        finalize(null);
      }, 30000);
    });
  }

  private readExistingSourcemap(): SourcemapRoot | null {
    if (!fs.existsSync(this.outputPath)) {
      return null;
    }

    try {
      const raw = fs.readFileSync(this.outputPath, "utf8");
      return JSON.parse(raw) as SourcemapRoot;
    } catch (error) {
      log.warn(
        `Failed to read existing sourcemap at ${this.outputPath}: ${error}`,
      );
      return null;
    }
  }

  private regenerateSourcemap(
    snapshot: InstanceData[],
    existing: SourcemapRoot | null,
  ): SourcemapRoot {
    const root: SourcemapRoot = {
      name: "Game",
      className: "DataModel",
      children: [],
    };

    const guidFilePaths = new Map<string, string[]>();
    const pathClassFilePaths = new Map<string, string[][]>();
    const pathClassCursor = new Map<string, number>();

    const indexExisting = (
      node: SourcemapNode,
      currentPath: string[],
    ): void => {
      const nodePath = [...currentPath, node.name];
      if (node.filePaths && node.filePaths.length > 0) {
        if (node.guid) {
          guidFilePaths.set(node.guid, node.filePaths);
        }

        const key = this.pathClassKey(nodePath, node.className);
        const bucket = pathClassFilePaths.get(key) ?? [];
        bucket.push(node.filePaths);
        pathClassFilePaths.set(key, bucket);
      }

      for (const child of node.children ?? []) {
        indexExisting(child, nodePath);
      }
    };

    for (const child of existing?.children ?? []) {
      indexExisting(child, []);
    }

    const byGuid = new Map<string, SourcemapNode>();
    byGuid.set("root", root as unknown as SourcemapNode);

    const sorted = [...snapshot].sort((a, b) => {
      if (a.path.length !== b.path.length) {
        return a.path.length - b.path.length;
      }
      return a.path.join("/").localeCompare(b.path.join("/"));
    });

    for (const item of sorted) {
      const node: SourcemapNode = {
        name: item.name,
        className: item.className,
        guid: item.guid,
      };

      const directFilePaths = guidFilePaths.get(item.guid);
      if (directFilePaths && directFilePaths.length > 0) {
        node.filePaths = directFilePaths;
      } else {
        const key = this.pathClassKey(item.path, item.className);
        const bucket = pathClassFilePaths.get(key);
        if (bucket && bucket.length > 0) {
          const cursor = pathClassCursor.get(key) ?? 0;
          const candidate = bucket[cursor];
          if (candidate && candidate.length > 0) {
            node.filePaths = candidate;
            pathClassCursor.set(key, cursor + 1);
          }
        }
      }

      let parentNode = root as SourcemapNode;
      if (item.parentGuid && item.parentGuid !== "root") {
        parentNode = byGuid.get(item.parentGuid) ?? root;
      }

      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(node);
      byGuid.set(item.guid, node);
    }

    return root;
  }

  private packIntoSourcemap(
    snapshot: InstanceData[],
    sourcemap: SourcemapRoot,
  ): number {
    const byGuid = new Map<string, InstanceData>();
    const byPathClass = new Map<string, InstanceData[]>();
    for (const item of snapshot) {
      byGuid.set(item.guid, item);
      const key = this.pathClassKey(item.path, item.className);
      const bucket = byPathClass.get(key) ?? [];
      bucket.push(item);
      byPathClass.set(key, bucket);
    }

    const usedGuids = new Set<string>();
    let packed = 0;

    const visit = (node: SourcemapNode, currentPath: string[]): void => {
      const nodePath = [...currentPath, node.name];
      let match: InstanceData | undefined;

      if (node.guid) {
        const direct = byGuid.get(node.guid);
        if (direct) {
          match = direct;
          usedGuids.add(direct.guid);
        }
      }

      if (!match) {
        const key = this.pathClassKey(nodePath, node.className);
        const bucket = byPathClass.get(key);
        if (bucket && bucket.length > 0) {
          match = bucket.find((candidate) => !usedGuids.has(candidate.guid));
          if (match) {
            usedGuids.add(match.guid);
          }
        }
      }

      if (match) {
        if (match.properties && Object.keys(match.properties).length > 0) {
          node.properties = match.properties;
        } else if (!this.scriptsAndDescendantsOnly) {
          delete node.properties;
        }

        if (match.attributes && Object.keys(match.attributes).length > 0) {
          node.attributes = match.attributes;
        } else if (!this.scriptsAndDescendantsOnly) {
          delete node.attributes;
        }

        if (match.tags && match.tags.length > 0) {
          node.tags = match.tags;
        } else if (!this.scriptsAndDescendantsOnly) {
          delete node.tags;
        }

        if (match.properties || match.attributes || match.tags) {
          packed += 1;
        }
      } else if (!this.scriptsAndDescendantsOnly) {
        delete node.properties;
        delete node.attributes;
        delete node.tags;
      }

      for (const child of node.children ?? []) {
        visit(child, nodePath);
      }
    };

    for (const child of sourcemap.children ?? []) {
      visit(child, []);
    }

    sourcemap._azul = {
      packVersion: PACK_VERSION,
      packedAt: new Date().toISOString(),
      mode: this.scriptsAndDescendantsOnly ? "scripts-and-descendants" : "all",
    };

    return packed;
  }

  private writeSourcemap(sourcemap: SourcemapRoot, outputPath: string): void {
    const dir = path.dirname(outputPath);
    if (dir && dir !== "." && !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(
      outputPath,
      `${JSON.stringify(sourcemap, null, 2)}\n`,
      "utf8",
    );
  }

  private pathClassKey(pathSegments: string[], className: string): string {
    return `${pathSegments.join("\u0001")}::${className}`;
  }
}

``

# File: src\push.ts
``
import fs from "node:fs";
import path from "node:path";
import { promises as fsp } from "node:fs";
import { IPCServer } from "./ipc/server.js";
import { config } from "./config.js";
import { log } from "./util/log.js";
import { SnapshotBuilder } from "./snapshot.js";
import { RojoSnapshotBuilder } from "./snapshot/rojo/index.js";
import { generateGUID } from "./util/id.js";
import { classifyScriptFileName, isInstanceJsonName, isScriptFileName, classifyFileName, isSyncableFile } from "./util/scriptFile.js";
import {
  applySourcemapProperties,
  buildInstancesFromSourcemap,
  findNodeForFilepath,
  loadSourcemapPropertyIndex,
} from "./sourcemap/propertyLoader.js";
import type {
  InstanceData,
  PushConfig,
  PushConfigMessage,
  PushSnapshotMapping,
  RequestPushConfigMessage,
  StudioMessage,
} from "./ipc/messages.js";

interface PushOptions {
  source?: string;
  destination?: string;
  destructive?: boolean;
  usePlaceConfig?: boolean;
  rojoMode?: boolean;
  rojoProjectFile?: string;
  applySourcemapProperties?: boolean;
  useSourcemapAsSource?: boolean;
  sourcemapPath?: string;
}

export class PushCommand {
  private ipc: IPCServer;
  private options: PushOptions;
  private sourcemapPath: string;
  private sourcemapIndex: ReturnType<typeof loadSourcemapPropertyIndex>;
  private sourcemapIndexByPath: Map<
    string,
    ReturnType<typeof loadSourcemapPropertyIndex>
  >;

  constructor(options: PushOptions = {}) {
    this.options = options;
    this.sourcemapPath = path.resolve(
      options.sourcemapPath ?? config.sourcemapPath,
    );
    this.sourcemapIndex = loadSourcemapPropertyIndex(this.sourcemapPath);
    this.sourcemapIndexByPath = new Map([
      [this.sourcemapPath, this.sourcemapIndex],
    ]);
    this.ipc = new IPCServer(config.port, undefined, {
      requestSnapshotOnConnect: false,
    });
  }

  public async run(): Promise<void> {
    if (this.options.rojoMode) {
      log.info(
        "Rojo compatibility mode: ignoring place config; destination becomes a prefix.",
      );
      const destSegments = this.options.destination
        ? this.parseDestination(this.options.destination)
        : [];
      const instances = await this.buildRojoInstances(
        destSegments,
        this.options.source,
      );
      if (!instances) return;

      const snapshotMappings: PushSnapshotMapping[] = [
        {
          destination: destSegments,
          destructive: Boolean(this.options.destructive),
          instances,
        },
      ];

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
          if (message.type === "applied" && message.operation === "push") {
            log.success(
              `Push applied successfully: ${message.created ?? 0} created, ${message.updated ?? 0} updated`,
            );
            cleanClose();
          } else if (message.type === "rejected" && message.operation === "push") {
            log.warn(`Push rejected: ${message.reason ?? "unknown reason"}`);
            cleanClose();
          }
        });

        this.ipc.onConnection(() => {
          log.info("Studio connected. Waiting for handshake...");
        });

        this.ipc.onHandshake(() => {
          log.info("Handshake complete. Sending Rojo compatibility push...");
          this.ipc.send({ type: "pushSnapshot", mappings: snapshotMappings });

          const remoteVersion = this.ipc.getRemoteProtocolVersion();
          if (remoteVersion !== null && remoteVersion >= 1) {
            log.info("Waiting for Studio to apply push snapshot...");
            ackTimeout = setTimeout(() => {
              log.warn("Timed out waiting for Studio push ack.");
              cleanClose();
            }, 60000);
          } else {
            setTimeout(cleanClose, 200);
          }
        });
      });
      return;
    }

    const mappings = await this.collectMappings();
    if (!mappings || mappings.length === 0) {
      log.error(
        "No push mappings available. Provide '--source' / '--destination' or place config.",
      );
      return;
    }

    log.info(`Building ${mappings.length} mapping(s) for push...`);

    const snapshotMappings: PushSnapshotMapping[] = [];

    for (const mapping of mappings) {
      const destSegments = mapping.destination;
      log.debug(
        `Processing push mapping: ${mapping.source} -> ${destSegments.join("/")}${
          mapping.destructive ? " (destructive)" : ""
        }${mapping.rojoMode ? " (Rojo mode)" : ""}${
          mapping.fromSourcemap
            ? ` (from sourcemap: ${mapping.fromSourcemap})`
            : ""
        }`,
      );

      if (mapping.rojoMode) {
        log.info(
          `Mapping source ${mapping.source} in Rojo compatibility mode.`,
        );
        const instances = await this.buildRojoInstances(
          destSegments,
          mapping.source,
        );
        if (!instances) continue;

        snapshotMappings.push({
          destination: destSegments,
          destructive: Boolean(mapping.destructive),
          instances,
        });
        continue;
      }

      const sourceCandidates = this.expandSourceCandidates(mapping.source);
      const sourcePath = sourceCandidates.find((candidate) =>
        fs.existsSync(candidate),
      );

      if (!sourcePath) {
        log.error(
          `Source path not found for push mapping. Tried: ${sourceCandidates.join(
            ", ",
          )}`,
        );
        continue;
      }

      let sourceStats: fs.Stats;
      try {
        sourceStats = await fsp.stat(sourcePath);
      } catch {
        log.error(`Could not read source path for push mapping: ${sourcePath}`);
        continue;
      }

      const isSourceDirectory = sourceStats.isDirectory();
      const isSourceFile = sourceStats.isFile();

      if (!isSourceDirectory && !isSourceFile) {
        log.error(
          `Source path must be a file or directory for push mapping: ${sourcePath}`,
        );
        continue;
      }

      const builder = new SnapshotBuilder({
        sourceDir: sourcePath,
        destPrefix: destSegments,
        skipSymlinks: true,
      });

      const mappingSourcemapPath = this.resolveMappingSourcemapPath(mapping);
      const useFromSourcemap = Boolean(mappingSourcemapPath);

      if (isSourceDirectory) {
        const instances = useFromSourcemap
          ? this.buildPushInstancesFromSourcemap(
              sourcePath,
              destSegments,
              mappingSourcemapPath!,
            )
          : await builder.build();

        if (useFromSourcemap && !instances) {
          log.warn(
            `Could not derive sourcemap subtree for ${sourcePath}; falling back to filesystem snapshot.`,
          );

          const fallback = await builder.build();
          if (!fallback) {
            log.error(
              `Could not build fallback snapshot for source path: ${sourcePath}`,
            );
            continue;
          }
          snapshotMappings.push({
            destination: destSegments,
            destructive: Boolean(mapping.destructive),
            instances: fallback,
          });
          log.success(
            `Prepared ${fallback.length} instances from ${sourcePath} -> ${destSegments.join("/")}`,
          );
          continue;
        }

        if (!instances) {
          continue;
        }

        if (
          !useFromSourcemap &&
          this.options.applySourcemapProperties !== false
        ) {
          const sourcemapIndex = this.getSourcemapIndexForPath(
            this.sourcemapPath,
          );

          applySourcemapProperties(instances, sourcemapIndex);
        }

        log.success(
          `Prepared ${
            instances.length
          } instances from ${sourcePath} -> ${destSegments.join("/")}`,
        );

        snapshotMappings.push({
          destination: destSegments,
          destructive: Boolean(mapping.destructive),
          instances,
        });
      } else if (isSourceFile) {
        const pushedFile = await this.buildPushInstancesFromFile(
          sourcePath,
          destSegments,
        );

        if (!pushedFile) {
          log.error(
            `Failed to build push instances from source file: ${sourcePath}`,
          );
          continue;
        }

        snapshotMappings.push({
          destination: destSegments,
          destructive: Boolean(mapping.destructive),
          instances: pushedFile,
        });

        if (
          !useFromSourcemap &&
          this.options.applySourcemapProperties !== false
        ) {
          const sourcemapIndex = this.getSourcemapIndexForPath(
            this.sourcemapPath,
          );

          applySourcemapProperties(pushedFile, sourcemapIndex);
        }
      }
    }

    if (snapshotMappings.length === 0) {
      log.error("No push mappings could be prepared (missing source paths).");
      return;
    }

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
        if (message.type === "applied" && message.operation === "push") {
          log.success(
            `Push applied successfully: ${message.created ?? 0} created, ${message.updated ?? 0} updated`,
          );
          cleanClose();
        } else if (message.type === "rejected" && message.operation === "push") {
          log.warn(`Push rejected: ${message.reason ?? "unknown reason"}`);
          cleanClose();
        }
      });

      this.ipc.onConnection(() => {
        log.info("Studio connected. Waiting for handshake...");
      });

      this.ipc.onHandshake(() => {
        log.info("Handshake complete. Sending push snapshot...");
        this.ipc.send({ type: "pushSnapshot", mappings: snapshotMappings });

        const remoteVersion = this.ipc.getRemoteProtocolVersion();
        if (remoteVersion !== null && remoteVersion >= 1) {
          log.info("Waiting for Studio to apply push snapshot...");
          ackTimeout = setTimeout(() => {
            log.warn("Timed out waiting for Studio push ack.");
            cleanClose();
          }, 60000);
        } else {
          setTimeout(cleanClose, 200);
        }
      });
    });
  }

  private async buildPushInstancesFromFile(
    sourceFile: string,
    destSegments: string[],
  ): Promise<InstanceData[] | null> {
    if (!isSyncableFile(path.basename(sourceFile))) {
      log.error(
        `Source file is not syncable and cannot be pushed directly: ${sourceFile}`,
      );
      return null;
    }

    const fileName = path.basename(sourceFile);
    const { className, instanceName, isScript } = classifyFileName(fileName);

    let source: string | undefined = undefined;
    let extraData: any = undefined;

    if (isScript) {
      source = await fsp.readFile(sourceFile, "utf-8");
    } else {
      const raw = await fsp.readFile(sourceFile, "utf-8");
      try {
        extraData = JSON.parse(raw);
      } catch (error) {
        log.warn(`Failed to parse JSON file ${sourceFile}:`, error);
      }
    }

    // Get the sourcemap node for this file, if it exists, so we can pull properties/attributes/tags from it
    const sourcemapIndex = this.getSourcemapIndexForPath(this.sourcemapPath);
    const node = findNodeForFilepath(sourceFile, sourcemapIndex);

    return [
      {
        guid: node?.guid ?? generateGUID(),
        className,
        name: instanceName,
        path: [...destSegments, instanceName],
        source,
        properties: extraData?.properties ?? node?.properties,
        attributes: extraData?.attributes ?? node?.attributes,
        tags: extraData?.tags ?? node?.tags,
      },
    ];
  }

  private async buildRojoInstances(
    destSegments: string[],
    sourceOverride?: string,
  ): Promise<InstanceData[] | null> {
    const sourceRootOpt = sourceOverride ?? this.options.source;

    const projectFiles = await this.resolveRojoProjectFiles(sourceRootOpt);
    if (projectFiles.length === 0) {
      if (!sourceRootOpt) {
        log.error(
          "Rojo compatibility mode could not find default.project.json. Provide --rojo-project or point --source to a folder that contains one.",
        );
        return null;
      }

      const sourceRoot = path.resolve(process.cwd(), sourceRootOpt);
      if (!fs.existsSync(sourceRoot)) {
        log.error(
          `Source path not found for Rojo compatibility mode: ${sourceRoot}`,
        );
        return null;
      }

      log.warn(
        "No default.project.json found; falling back to loose script import with Rojo-style init module handling.",
      );

      const loose = await this.collectLooseScripts(
        sourceRoot,
        destSegments,
        new Set<string>(),
        new Set<string>(),
        new Set<string>(),
      );

      log.info(
        `Rojo compatibility imported ${loose.length} loose instance(s) without a project JSON from ${sourceRoot}`,
      );

      if (loose.length === 0) {
        log.warn(
          `Rojo compatibility fallback found no scripts under ${sourceRoot}.`,
        );
      }

      return this.dedupeRojoInstances(loose);
    }

    const allInstances: InstanceData[] = [];
    const projectDirs = new Set<string>();

    for (const projectFile of projectFiles) {
      // If a source root was provided, include the relative path from that root to the project file's folder
      let relativeSegments: string[] = [];
      if (sourceRootOpt) {
        const sourceRoot = path.resolve(process.cwd(), sourceRootOpt);
        const projectDir = path.dirname(projectFile);
        projectDirs.add(projectDir);
        const rel = path.relative(sourceRoot, projectDir).replace(/\\/g, "/");
        if (rel && !rel.startsWith("..")) {
          relativeSegments = rel.split("/").filter(Boolean);
        }
      }

      const effectivePrefix = [...destSegments, ...relativeSegments];

      const builder = new RojoSnapshotBuilder({
        projectFile,
        cwd: process.cwd(),
        destPrefix: effectivePrefix,
      });

      log.info(`Preparing Rojo compatibility push from ${projectFile}`);

      try {
        const built = await builder.build();
        allInstances.push(...built);
      } catch (error) {
        log.error(`${error}`);
        return null;
      }
    }

    // Emit loose scripts not covered by a Rojo project (e.g., cmdr.lua, janitor.lua, Promise.lua)
    if (sourceRootOpt) {
      const sourceRoot = path.resolve(process.cwd(), sourceRootOpt);
      const existingFolders = new Set(
        allInstances
          .filter((i) => i.className === "Folder")
          .map((i) => i.path.join("/")),
      );
      const existingPaths = new Set(allInstances.map((i) => i.path.join("/")));

      const loose = await this.collectLooseScripts(
        sourceRoot,
        destSegments,
        projectDirs,
        existingFolders,
        existingPaths,
      );
      allInstances.push(...loose);

      if (loose.length > 0) {
        log.info(
          `Rojo compatibility imported ${loose.length} loose instance(s) not covered by default.project.json files.`,
        );
      }
    }

    if (allInstances.length === 0) {
      log.warn(
        "Rojo compatibility build produced 0 instances. Check project paths and ignores.",
      );
    }

    return this.dedupeRojoInstances(allInstances);
  }

  private dedupeRojoInstances(instances: InstanceData[]): InstanceData[] {
    const byKey = new Map<string, InstanceData>();

    for (const instance of instances) {
      const key = `${instance.path.join("/")}::${instance.className}`;
      const existing = byKey.get(key);

      if (!existing) {
        byKey.set(key, instance);
        continue;
      }

      const existingIsFolder = existing.className === "Folder";
      const incomingIsFolder = instance.className === "Folder";

      if (existingIsFolder && !incomingIsFolder) {
        byKey.set(key, instance);
        continue;
      }

      if (!existingIsFolder && incomingIsFolder) {
        continue;
      }

      const existingIsScript = this.isScriptClassName(existing.className);
      const incomingIsScript = this.isScriptClassName(instance.className);

      if (existingIsScript && incomingIsScript) {
        if (
          typeof existing.source === "string" &&
          typeof instance.source === "string" &&
          existing.source !== instance.source
        ) {
          log.warn(
            `Rojo push dedupe: conflicting script content at ${instance.path.join("/")} (${instance.className}); keeping first occurrence.`,
          );
        }
      }
    }

    const deduped = [...byKey.values()];
    deduped.sort((a, b) => {
      if (a.path.length !== b.path.length) {
        return a.path.length - b.path.length;
      }
      return a.path.join("/").localeCompare(b.path.join("/"));
    });

    if (deduped.length !== instances.length) {
      log.debug(
        `Rojo push dedupe removed ${instances.length - deduped.length} duplicate instance(s).`,
      );
    }

    return deduped;
  }

  private isScriptClassName(className: string): boolean {
    return (
      className === "Script" ||
      className === "LocalScript" ||
      className === "ModuleScript"
    );
  }

  /**
   * Determines push mappings to use based on CLI options and/or place config from Studio.
   * Priority:
   * 1. CLI-provided source/destination
   * 2. Place config provided by Studio (if --use-place-config is not false)
   * @returns
   */
  private async collectMappings(): Promise<PushConfig["mappings"] | null> {
    // CLI-provided mapping takes priority
    if (this.options.source && this.options.destination) {
      const destSegments = this.parseDestination(this.options.destination);
      if (destSegments.length === 0) {
        log.error(
          "Destination must be a dot-separated path (e.g., ReplicatedStorage.Packages)",
        );
        return null;
      }
      return [
        {
          source: this.options.source,
          destination: destSegments,
          destructive: Boolean(this.options.destructive),
        },
      ];
    }

    if (this.options.usePlaceConfig === false) {
      return null;
    }

    log.info(
      "No source/destination provided. Requesting push config from Studio... (ServerStorage.Azul.Config)",
    );
    const config = await this.waitForPushConfig();
    if (!config) {
      return null;
    }

    log.debug("Received push config from Studio.", config);

    const sanitizedMappings = config.mappings?.filter((m) =>
      Boolean(m && m.source && m.destination && m.destination.length > 0),
    );

    if (!sanitizedMappings || sanitizedMappings.length === 0) {
      log.error("Received push config, but no valid mappings were found.");
      return null;
    }

    return sanitizedMappings.map((m) => ({
      source: m.source,
      destination: m.destination,
      destructive: Boolean(m.destructive),
      rojoMode: Boolean(m.rojoMode),
      fromSourcemap:
        typeof m.fromSourcemap === "string" && m.fromSourcemap.trim().length > 0
          ? m.fromSourcemap
          : undefined,
    }));
  }

  /**
   * Parses a destination string into path segments, trimming whitespace and ignoring empty segments.
   * Accepts dot, forward slash, or backslash as separators for user convenience.
   * @param input
   * @returns
   */
  private parseDestination(input: string): string[] {
    return input
      .split(/[./\\]+/)
      .map((segment) => segment.trim())
      .filter(Boolean);
  }

  /**
   * Builds instances for a push mapping using a specified sourcemap as the source of truth.
   * @param sourceDir
   * @param destSegments
   * @param sourcemapPath
   * @returns
   */
  private buildPushInstancesFromSourcemap(
    sourceDir: string,
    destSegments: string[],
    sourcemapPath: string,
  ): InstanceData[] | null {
    const all = buildInstancesFromSourcemap(sourcemapPath);
    if (!all || all.length === 0) {
      return null;
    }

    const sourcePrefix = this.inferSourcePrefixFromPath(sourceDir, all);
    if (!sourcePrefix || sourcePrefix.length === 0) {
      return null;
    }

    const selected = all.filter((instance) =>
      this.pathStartsWith(instance.path, sourcePrefix),
    );

    const rebased = selected
      .filter((instance) => instance.path.length > sourcePrefix.length)
      .map((instance) => ({
        ...instance,
        path: [...destSegments, ...instance.path.slice(sourcePrefix.length)],
      }));

    log.debug(
      `Mapped ${selected.length} instance(s) from sourcemap subtree "${sourcePrefix.join("/")}" to destination "${destSegments.join("/")}".`,
    );

    // const rebasedString = rebased
    //   .map((i) => `${i.path.join("/")} (${i.className})`)
    //   .join(",\n");
    // log.debug(`Rebased instances: ${rebasedString}`);

    rebased.sort((a, b) => a.path.length - b.path.length);
    return rebased;
  }

  private resolveMappingSourcemapPath(mapping: {
    fromSourcemap?: string;
  }): string | null {
    if (this.options.useSourcemapAsSource) {
      return this.sourcemapPath;
    }

    if (
      typeof mapping.fromSourcemap === "string" &&
      mapping.fromSourcemap.trim().length > 0
    ) {
      return path.resolve(process.cwd(), mapping.fromSourcemap);
    }

    return null;
  }

  /**
   * Retrieves the property index for a given sourcemap path, loading it if necessary.
   * @param sourcemapPath The file path to the sourcemap to load the index for.
   * @returns The property index for the specified sourcemap.
   */
  private getSourcemapIndexForPath(
    sourcemapPath: string,
  ): ReturnType<typeof loadSourcemapPropertyIndex> {
    const existing = this.sourcemapIndexByPath.get(sourcemapPath);
    if (existing) {
      return existing;
    }

    const loaded = loadSourcemapPropertyIndex(sourcemapPath);
    this.sourcemapIndexByPath.set(sourcemapPath, loaded);
    return loaded;
  }

  private inferSourcePrefixFromPath(
    sourceDir: string,
    instances: InstanceData[],
  ): string[] | null {
    const normalized = path
      .resolve(sourceDir)
      .replace(/\\/g, "/")
      .split("/")
      .filter(Boolean);

    let best: string[] | null = null;
    for (let start = 0; start < normalized.length; start++) {
      const candidate = normalized.slice(start);
      if (candidate.length === 0) continue;

      const matches = instances.some((instance) =>
        this.pathStartsWith(instance.path, candidate),
      );

      if (!matches) continue;

      if (!best || candidate.length > best.length) {
        best = candidate;
      }
    }

    return best;
  }

  private pathStartsWith(pathSegments: string[], prefix: string[]): boolean {
    if (prefix.length > pathSegments.length) return false;

    for (let index = 0; index < prefix.length; index++) {
      if (pathSegments[index] !== prefix[index]) return false;
    }

    return true;
  }

  private async resolveRojoProjectFiles(
    sourceOverride?: string,
  ): Promise<string[]> {
    const cwd = process.cwd();
    const results = new Set<string>();

    const add = (p: string) => {
      const abs = path.resolve(cwd, p);
      if (fs.existsSync(abs)) {
        results.add(abs);
      }
    };

    if (this.options.rojoProjectFile) {
      add(this.options.rojoProjectFile);
      return [...results];
    }

    const sourceRootOpt = sourceOverride ?? this.options.source;

    // If a source root is provided, only search within it (and its nested projects).
    if (sourceRootOpt) {
      const srcRoot = path.resolve(cwd, sourceRootOpt);
      if (!fs.existsSync(srcRoot)) {
        log.warn(`--source path does not exist: ${srcRoot}`);
        return [];
      }

      const direct = path.join(srcRoot, "default.project.json");
      if (fs.existsSync(direct)) {
        results.add(direct);
      }

      const foundInSource = await this.findProjectJsons(srcRoot, 6);
      for (const f of foundInSource) {
        results.add(f);
      }

      return [...results];
    }

    // No source root: search at workspace root (previous behavior).
    const rootDirect = path.join(cwd, "default.project.json");
    if (fs.existsSync(rootDirect)) {
      results.add(rootDirect);
    }

    const found = await this.findProjectJsons(cwd, 3);
    for (const f of found) {
      results.add(f);
    }

    return [...results];
  }

  /**
   * Breadth-first search for all default.project.json under a root.
   * Skips common vendor/ignored folders.
   */
  private async findProjectJsons(
    root: string,
    maxDepth: number,
  ): Promise<string[]> {
    const queue: { dir: string; depth: number }[] = [{ dir: root, depth: 0 }];
    const found: string[] = [];
    const FOLDERS_TO_SKIP = new Set(["node_modules", ".git", "dist", "sync"]);

    while (queue.length > 0) {
      const { dir, depth } = queue.shift()!;
      if (depth > maxDepth) continue;

      let entries: fs.Dirent[];
      try {
        entries = await fsp.readdir(dir, { withFileTypes: true });
      } catch {
        continue;
      }

      // Deterministic order
      entries.sort((a, b) => a.name.localeCompare(b.name));

      for (const entry of entries) {
        if (entry.isFile() && entry.name === "default.project.json") {
          found.push(path.join(dir, entry.name));
        }
      }

      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        if (FOLDERS_TO_SKIP.has(entry.name)) continue;
        queue.push({ dir: path.join(dir, entry.name), depth: depth + 1 });
      }
    }

    return found;
  }

  private async collectLooseScripts(
    root: string,
    destSegments: string[],
    projectDirs: Set<string>,
    emittedFolders: Set<string>,
    emittedPaths: Set<string>,
  ): Promise<InstanceData[]> {
    const results: InstanceData[] = [];

    const walk = async (dir: string, relSegments: string[]) => {
      // Skip directories already handled by a Rojo project
      for (const proj of projectDirs) {
        if (dir === proj || dir.startsWith(proj + path.sep)) {
          return;
        }
      }

      let entries: fs.Dirent[];
      try {
        entries = await fsp.readdir(dir, { withFileTypes: true });
      } catch {
        return;
      }

      entries.sort((a, b) => a.name.localeCompare(b.name));

      // If the directory itself represents a syncable extra class, emit it
      if (relSegments.length > 0) {
        const dirName = path.basename(dir);
        const { className, instanceName, isScript } = classifyFileName(dirName);
        if (!isScript && className !== "Folder") {
          const destPath = [...destSegments, ...relSegments];
          const cleanPath = destPath.map(s => classifyFileName(s).instanceName);
          const key = cleanPath.join("/");
          if (!emittedPaths.has(key)) {
            this.ensureFolder(destPath.slice(0, -1), results, emittedFolders);
            emittedPaths.add(key);
            emittedFolders.add(destPath.join("/"));

            let extraData: any = {};
            const initJsonPath = path.join(dir, "init.json");
            if (fs.existsSync(initJsonPath)) {
              try {
                extraData = JSON.parse(fs.readFileSync(initJsonPath, "utf-8"));
              } catch (error) {
                log.warn(`Failed to parse init.json in ${dir}:`, error);
              }
            }

            results.push({
              guid: generateGUID(),
              className,
              name: instanceName,
              path: cleanPath,
              properties: extraData.properties,
              attributes: extraData.attributes,
              tags: extraData.tags,
            });
          }
        }
      }

      // If this directory has an init-like file, treat the directory itself as that script
      const initCandidates = [
        "init.lua",
        "init.luau",
        "init.server.lua",
        "init.server.luau",
        "init.legacy.lua",
        "init.legacy.luau",
        "init.client.lua",
        "init.client.luau",
        "init.local.lua",
        "init.local.luau",
        "init.module.lua",
        "init.module.luau",
      ];

      const initEntry = entries.find(
        (e) => e.isFile() && initCandidates.includes(e.name),
      );

      const initModelEntry = entries.find(
        (e) => e.isFile() && e.name === "init.model.json",
      );

      if (initModelEntry) {
        const full = path.join(dir, "init.model.json");
        const destPath = [...destSegments, ...relSegments];
        const cleanPath = destPath.map(s => classifyFileName(s).instanceName);
        const key = cleanPath.join("/");
        if (!emittedPaths.has(key)) {
          this.ensureFolder(destPath.slice(0, -1), results, emittedFolders);
          emittedPaths.add(key);
          emittedFolders.add(destPath.join("/")); // prevent folder emission at this path

          const builder = new RojoSnapshotBuilder({ cwd: process.cwd() });
          const modelInstances = await builder.parseModelFile(full, destPath);
          if (modelInstances.length > 0) {
            const rootInstance = modelInstances[0];
            if (initEntry) {
              const scriptClass = classifyScriptFileName(initEntry.name, {
                stripDisambiguationSuffix: true,
              }).className;
              const source = await fsp.readFile(
                path.join(dir, initEntry.name),
                "utf-8",
              );
              rootInstance.className = scriptClass;
              rootInstance.source = source;
            }
            results.push(...modelInstances);
          }
        }
      } else if (initEntry) {
        const full = path.join(dir, initEntry.name);
        const { className } = classifyScriptFileName(initEntry.name, {
          stripDisambiguationSuffix: true,
        });
        const destPath = [...destSegments, ...relSegments];
        const cleanPath = destPath.map(s => classifyFileName(s).instanceName);
        const key = cleanPath.join("/");
        if (!emittedPaths.has(key)) {
          this.ensureFolder(destPath.slice(0, -1), results, emittedFolders);
          emittedPaths.add(key);
          emittedFolders.add(destPath.join("/")); // prevent folder emission at this path
          results.push({
            guid: generateGUID(),
            className,
            name: cleanPath[cleanPath.length - 1] ?? path.basename(dir),
            path: cleanPath,
            source: await fsp.readFile(full, "utf-8"),
          });
        }
      }

      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await walk(full, [...relSegments, entry.name]);
          continue;
        }

        if (initEntry && initEntry.name === entry.name) {
          continue; // already emitted as the container
        }

        if (initModelEntry && entry.name === "init.model.json") {
          continue;
        }

        if (isInstanceJsonName(entry.name)) {
          const baseName = entry.name.slice(0, -".model.json".length);
          const destPath = [...destSegments, ...relSegments, baseName];
          const cleanPath = destPath.map(s => classifyFileName(s).instanceName);
          const key = cleanPath.join("/");
          if (emittedPaths.has(key)) continue;

          this.ensureFolder(destPath.slice(0, -1), results, emittedFolders);
          emittedPaths.add(key);

          const builder = new RojoSnapshotBuilder({ cwd: process.cwd() });
          const modelInstances = await builder.parseModelFile(full, destPath);
          if (modelInstances.length > 0) {
            const rootInstance = modelInstances[0];
            const companionScript = entries.find(
              (e) =>
                e.isFile() &&
                isScriptFileName(e.name) &&
                classifyScriptFileName(e.name, {
                  stripDisambiguationSuffix: true,
                }).scriptName === baseName,
            );
            if (companionScript) {
              const scriptClass = classifyScriptFileName(companionScript.name, {
                stripDisambiguationSuffix: true,
              }).className;
              const source = await fsp.readFile(
                path.join(dir, companionScript.name),
                "utf-8",
              );
              rootInstance.className = scriptClass;
              rootInstance.source = source;
            }
            results.push(...modelInstances);
          }
          continue;
        }

        if (isScriptFileName(entry.name)) {
          // Skip scripts that are companion scripts of a companion model file
          const baseName = classifyScriptFileName(entry.name, {
            stripDisambiguationSuffix: true,
          }).scriptName;
          const companionModelName = `${baseName}.model.json`;
          const hasCompanionModel = entries.some(
            (e) => e.isFile() && e.name === companionModelName,
          );
          if (hasCompanionModel) {
            continue;
          }

          const { className, scriptName } = classifyScriptFileName(entry.name, {
            stripDisambiguationSuffix: true,
          });
          const destPath = [...destSegments, ...relSegments, scriptName];
          const cleanPath = destPath.map(s => classifyFileName(s).instanceName);
          const key = cleanPath.join("/");
          if (emittedPaths.has(key)) continue;

          this.ensureFolder(destPath.slice(0, -1), results, emittedFolders);
          emittedPaths.add(key);
          results.push({
            guid: generateGUID(),
            className,
            name: scriptName,
            path: cleanPath,
            source: await fsp.readFile(full, "utf-8"),
          });
        } else if (isSyncableFile(entry.name)) {
          if (entry.name === "init.json") continue;

          const { className, instanceName } = classifyFileName(entry.name);
          const destPath = [...destSegments, ...relSegments, instanceName];
          const cleanPath = destPath.map(s => classifyFileName(s).instanceName);
          const key = cleanPath.join("/");
          if (emittedPaths.has(key)) continue;

          let extraData: any = {};
          try {
            const raw = await fsp.readFile(full, "utf-8");
            extraData = JSON.parse(raw);
          } catch (error) {
            log.warn(`Failed to parse JSON file ${full}:`, error);
          }

          this.ensureFolder(destPath.slice(0, -1), results, emittedFolders);
          emittedPaths.add(key);
          results.push({
            guid: generateGUID(),
            className,
            name: instanceName,
            path: cleanPath,
            properties: extraData.properties,
            attributes: extraData.attributes,
            tags: extraData.tags,
          });
        }
      }
    };

    await walk(root, []);
    return results;
  }

  private ensureFolder(
    pathSegments: string[],
    results: InstanceData[],
    emittedFolders: Set<string>,
  ): void {
    if (pathSegments.length === 0) return;
    const key = pathSegments.join("/");
    if (emittedFolders.has(key)) return;
    this.ensureFolder(pathSegments.slice(0, -1), results, emittedFolders);
    emittedFolders.add(key);

    const segment = pathSegments[pathSegments.length - 1];
    const { className, instanceName } = classifyFileName(segment);
    const cleanPath = pathSegments.map((s) => classifyFileName(s).instanceName);

    results.push({
      guid: generateGUID(),
      className,
      name: instanceName,
      path: cleanPath,
    });
  }

  /**
   * Normalize source path strings from config, preferring the raw value but
   * attempting obvious fixes (e.g., accidental leading '.' before a folder).
   */
  private expandSourceCandidates(source: string): string[] {
    const candidates: string[] = [];
    const cwd = process.cwd();

    const add = (p: string) => {
      const abs = path.resolve(cwd, p);
      if (!candidates.includes(abs)) {
        candidates.push(abs);
      }
    };

    add(source);

    // If someone wrote ".Packages" by mistake, try "Packages"
    if (source.startsWith(".")) {
      const trimmedDot = source.replace(/^\.*/, "");
      if (trimmedDot) add(trimmedDot);
    }

    // If someone prefixed with ./ or .\, resolve both forms
    if (source.startsWith("./") || source.startsWith(".\\")) {
      add(source.slice(2));
    }

    return candidates;
  }

  private async waitForPushConfig(): Promise<PushConfig | null> {
    return new Promise<PushConfig | null>((resolve) => {
      let resolved = false;

      const timeout = setTimeout(() => {
        if (!resolved) {
          log.warn("Timed out waiting for push config from Studio.");
          resolved = true;
          resolve(null);
        }
      }, 8000);

      this.ipc.onMessage((message: StudioMessage) => {
        if (message.type === "pushConfig") {
          const pushConfig = (message as PushConfigMessage).config;

          clearTimeout(timeout);
          if (!resolved) {
            resolved = true;
            resolve(pushConfig);
          }
        }
      });

      // Ask the plugin to send config after connection
      this.ipc.onConnection(() => {
        log.info("Studio connected. Waiting for handshake...");
      });

      this.ipc.onHandshake(() => {
        const request: RequestPushConfigMessage = { type: "requestPushConfig" };
        this.ipc.send(request);
      });
    });
  }
}
``

# File: src\snapshot.ts
``
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { log } from "./util/log.js";
import { classifyScriptFileName, isScriptFileName, classifyFileName, isSyncableFile } from "./util/scriptFile.js";
import type { InstanceData } from "./ipc/messages.js";
import { existsSync, readFileSync } from "node:fs";

export interface SnapshotOptions {
  sourceDir: string;
  destPrefix?: string[];
  skipSymlinks?: boolean;
}

export class SnapshotBuilder {
  private sourceDir: string;
  private destPrefix: string[];
  private skipSymlinks: boolean;

  private folderMap = new Map<string, InstanceData>();
  private results: InstanceData[] = [];
  private scriptPaths = new Set<string>();

  constructor(options: SnapshotOptions) {
    this.sourceDir = path.resolve(options.sourceDir);
    this.destPrefix = options.destPrefix ?? [];
    this.skipSymlinks = options.skipSymlinks !== false; // default: skip links
  }

  public async build(): Promise<InstanceData[]> {
    this.results = [];
    this.folderMap.clear();
    this.scriptPaths.clear();

    await this.walk(this.sourceDir);

    this.results.sort((a, b) => a.path.length - b.path.length);
    return this.results;
  }

  private async walk(dir: string): Promise<void> {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    const files = entries.filter((entry) => entry.isFile());
    const directories = entries.filter((entry) => entry.isDirectory());

    for (const entry of files) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isSymbolicLink && entry.isSymbolicLink()) {
        if (!this.skipSymlinks) {
          continue;
        }
        log.debug(`Skipping symlinked file during snapshot: ${fullPath}`);
        continue;
      }

      if (isScriptFileName(entry.name)) {
        const relSegments = this.relativeSegments(fullPath);
        const { className, scriptName } = classifyScriptFileName(entry.name, {
          stripDisambiguationSuffix: true,
        });
        const dirSegments = relSegments.slice(0, -1);
        if (dirSegments.length > 0) {
          this.ensureFolder(dirSegments);
        }

        const cleanDirSegments = dirSegments.map((s) => classifyFileName(s).instanceName);
        const filePathSegments = [
          ...this.destPrefix,
          ...cleanDirSegments,
          scriptName,
        ];
        const source = await fs.readFile(fullPath, "utf-8");

        this.scriptPaths.add(this.pathKey(filePathSegments));

        const fileData: InstanceData = {
          guid: this.makeGuid(),
          className,
          name: scriptName,
          path: filePathSegments,
          source,
        };

        this.results.push(fileData);
      } else if (isSyncableFile(entry.name)) {
        if (entry.name === "init.json") {
          continue;
        }

        const relSegments = this.relativeSegments(fullPath);
        const { className, instanceName } = classifyFileName(entry.name);
        const dirSegments = relSegments.slice(0, -1);
        if (dirSegments.length > 0) {
          this.ensureFolder(dirSegments);
        }

        const cleanDirSegments = dirSegments.map((s) => classifyFileName(s).instanceName);
        const filePathSegments = [
          ...this.destPrefix,
          ...cleanDirSegments,
          instanceName,
        ];

        let extraData: any = {};
        try {
          const raw = await fs.readFile(fullPath, "utf-8");
          extraData = JSON.parse(raw);
        } catch (error) {
          log.warn(`Failed to parse JSON file ${fullPath}:`, error);
        }

        this.scriptPaths.add(this.pathKey(filePathSegments));

        const fileData: InstanceData = {
          guid: this.makeGuid(),
          className,
          name: instanceName,
          path: filePathSegments,
          properties: extraData.properties,
          attributes: extraData.attributes,
          tags: extraData.tags,
        };

        this.results.push(fileData);
      }
    }

    for (const entry of directories) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isSymbolicLink && entry.isSymbolicLink()) {
        if (!this.skipSymlinks) {
          continue;
        }
        log.debug(`Skipping symlinked directory during snapshot: ${fullPath}`);
        continue;
      }

      const relSegments = this.relativeSegments(fullPath);
      if (relSegments.length > 0) {
        this.ensureFolder(relSegments);
      }

      await this.walk(fullPath);
    }
  }

  private ensureFolder(segments: string[]): void {
    for (let i = 1; i <= segments.length; i++) {
      const keySegments = segments.slice(0, i);
      const cleanPath = keySegments.map((s) => classifyFileName(s).instanceName);
      const full = [...this.destPrefix, ...cleanPath];
      const key = this.pathKey(full);
      if (this.scriptPaths.has(key)) continue;
      if (this.folderMap.has(key)) continue;

      const segment = keySegments[i - 1];
      const { className, instanceName } = classifyFileName(segment);

      // Read init.json if it exists for this folder
      let extraData: any = {};
      const folderFullPath = path.join(this.sourceDir, ...keySegments);
      const initJsonPath = path.join(folderFullPath, "init.json");
      if (existsSync(initJsonPath)) {
        try {
          const raw = readFileSync(initJsonPath, "utf-8");
          extraData = JSON.parse(raw);
        } catch (error) {
          log.warn(`Failed to parse init.json in folder ${folderFullPath}:`, error);
        }
      }

      const data: InstanceData = {
        guid: this.makeGuid(),
        className,
        name: instanceName,
        path: full,
        properties: extraData.properties,
        attributes: extraData.attributes,
        tags: extraData.tags,
      };
      this.folderMap.set(key, data);
      this.results.push(data);
    }
  }

  private relativeSegments(targetPath: string): string[] {
    const rel = path.relative(this.sourceDir, targetPath);
    if (!rel || rel === "") return [];
    return rel.split(path.sep).filter(Boolean);
  }

  private makeGuid(): string {
    return randomUUID().replace(/-/g, "");
  }

  private pathKey(segments: string[]): string {
    return segments.join("/");
  }
}

``

# File: src\fs\fileWriter.ts
``
import * as fs from "fs";
import * as path from "path";
import { TreeNode } from "./treeManager.js";
import { config } from "../config.js";
import { log } from "../util/log.js";

/**
 * Mapping of GUID to file path
 */
export interface FileMapping {
  guid: string;
  filePath: string;
  className: string;
}

/**
 * Handles writing the virtual tree to the filesystem
 */
export class FileWriter {
  private baseDir: string;
  private fileMappings: Map<string, FileMapping> = new Map();
  private pathToGuid: Map<string, string> = new Map(); // Reverse index for O(1) path lookups

  constructor(baseDir: string = config.syncDir) {
    this.baseDir = path.resolve(baseDir);
    this.ensureDirectory(this.baseDir);
  }

  /**
  /**
   * Write all syncable nodes to the filesystem
   */
  public writeTree(nodes: Map<string, TreeNode>): void {
    log.info("Writing tree to filesystem...");

    // Clear existing mappings
    this.fileMappings.clear();
    this.pathToGuid.clear();

    // Collect all syncable nodes for batch writing
    const syncableNodes: TreeNode[] = [];
    for (const node of nodes.values()) {
      if (this.isSyncableNode(node)) {
        syncableNodes.push(node);
      }
    }

    this.writeBatch(syncableNodes);

    log.success(`Wrote ${this.fileMappings.size} syncable nodes to filesystem`);
  }

  /**
   * Write multiple syncables in a batch for improved I/O efficiency
   */
  public writeBatch(nodes: TreeNode[]): void {
    // Pre-compute all file paths and collect writes
    const writes: { node: TreeNode; filePath: string; dirPath: string }[] = [];
    const dirsToCreate = new Set<string>();
    const batchPathToGuid = new Map<string, string>();

    const pathMap = new Map<string, TreeNode>();
    for (const node of nodes) {
      pathMap.set(node.path.join("/"), node);
    }

    for (const node of nodes) {
      if (!this.isSyncableNode(node)) continue;
      if (this.isScriptNode(node) && node.source === undefined) continue;
      const filePath = this.getFilePathWithCollisionMap(node, batchPathToGuid, pathMap);
      const dirPath = path.dirname(filePath);
      writes.push({ node, filePath, dirPath });
      dirsToCreate.add(dirPath);
      batchPathToGuid.set(path.resolve(filePath), node.guid);
    }

    // Batch create all directories first (sorted by depth to ensure parents exist)
    const sortedDirs = Array.from(dirsToCreate).sort(
      (a, b) => a.length - b.length,
    );
    for (const dir of sortedDirs) {
      this.ensureDirectory(dir);
    }

    for (const { node, filePath } of writes) {
      try {
        this.writeSyncableNode(node, filePath);

        this.fileMappings.set(node.guid, {
          guid: node.guid,
          filePath: filePath,
          className: node.className,
        });
        this.pathToGuid.set(path.resolve(filePath), node.guid);

        log.script(this.getRelativePath(filePath), "updated");
      } catch (error) {
        log.error(`Failed to write syncable ${filePath}:`, error);
      }
    }
  }

  /**
   * Write or update a single syncable node
   */
  public writeScript(node: TreeNode, allNodes?: Map<string, TreeNode>): string | null {
    if (!this.isSyncableNode(node)) {
      return null;
    }

    // Allow empty-string sources on new scripts; only skip if source is truly undefined
    if (this.isScriptNode(node) && node.source === undefined) {
      return null;
    }

    const pathMap = new Map<string, TreeNode>();
    if (allNodes) {
      for (const n of allNodes.values()) {
        pathMap.set(n.path.join("/"), n);
      }
    }

    const existingMapping = this.fileMappings.get(node.guid);
    const filePath = this.getFilePathWithCollisionMap(node, undefined, pathMap);
    const dirPath = path.dirname(filePath);
    const previousPath = existingMapping?.filePath;
    const pathChanged = previousPath && previousPath !== filePath;

    // Ensure directory exists
    this.ensureDirectory(dirPath);

    // Write file
    try {
      this.writeSyncableNode(node, filePath);

      // If the target path changed for this guid, remove the old file to avoid stale copies
      if (pathChanged && previousPath && fs.existsSync(previousPath)) {
        fs.unlinkSync(previousPath);
        this.pathToGuid.delete(path.resolve(previousPath));
        this.cleanupParentsIfEmpty(path.dirname(previousPath));
      }

      // Update mapping and reverse index
      this.fileMappings.set(node.guid, {
        guid: node.guid,
        filePath: filePath,
        className: node.className,
      });
      this.pathToGuid.set(path.resolve(filePath), node.guid);

      log.script(this.getRelativePath(filePath), "updated");
      return filePath;
    } catch (error) {
      log.error(`Failed to write syncable ${filePath}:`, error);
      return null;
    }
  }

  /**
   * Delete a script file
   */
  public deleteScript(guid: string): boolean {
    const mapping = this.fileMappings.get(guid);
    if (!mapping) {
      return false;
    }

    try {
      const deleted = this.deleteFilePathInternal(mapping.filePath);
      this.fileMappings.delete(guid);
      this.pathToGuid.delete(path.resolve(mapping.filePath));
      return deleted;
    } catch (error) {
      log.error(`Failed to delete script ${mapping.filePath}:`, error);
      return false;
    }
  }

  /**
   * Delete a script file by path even if the mapping is missing
   */
  public deleteFilePath(filePath: string): boolean {
    try {
      return this.deleteFilePathInternal(filePath);
    } catch (error) {
      log.error(`Failed to delete script ${filePath}:`, error);
      return false;
    }
  }

  /**
   * Get the filesystem path for a node
   */
  public getFilePath(node: TreeNode, allNodes?: Map<string, TreeNode>): string {
    const pathMap = new Map<string, TreeNode>();
    if (allNodes) {
      for (const n of allNodes.values()) {
        pathMap.set(n.path.join("/"), n);
      }
    }
    return this.getFilePathWithCollisionMap(node, undefined, pathMap);
  }

  /**
   * Get the filesystem path for a node, with optional collision map for batch operations
   */
  private getFilePathWithCollisionMap(
    node: TreeNode,
    batchCollisionMap?: Map<string, string>,
    pathMap?: Map<string, TreeNode>,
  ): string {
    const isFile = this.isNodeFile(node);
    let desiredPath: string;

    if (isFile) {
      const fileName = this.getScriptFileName(node);
      desiredPath = path.join(this.getDirectoryPath(node, pathMap), fileName);
    } else {
      desiredPath = path.join(this.getDirectoryPath(node, pathMap), "init.json");
    }

    const normalizedDesiredPath = path.resolve(desiredPath);

    // Check for collisions in both the persistent mappings and the batch collision map
    const existingGuid = this.findGuidByFilePath(desiredPath);
    const batchGuid = batchCollisionMap?.get(normalizedDesiredPath);
    const collision = existingGuid || batchGuid;

    // If another GUID already owns this path, disambiguate using a stable suffix
    if (collision && collision !== node.guid) {
      const uniqueName = this.getDisambiguatedScriptFileName(node);
      if (isFile) {
        desiredPath = path.join(this.getDirectoryPath(node, pathMap), uniqueName);
      } else {
        desiredPath = path.join(
          this.getDirectoryPath(node, pathMap) + `__${node.guid.slice(0, 8)}`,
          "init.json",
        );
      }
    }

    return desiredPath;
  }

  /**
   * Get the appropriate filename for a script node
   */
  private getScriptFileName(node: TreeNode): string {
    const suffix = this.getSuffixForClass(node.className);
    if (suffix) {
      return `${this.sanitizeName(node.name)}${suffix}`;
    }

    const ext = config.scriptExtension;
    let name = this.sanitizeName(node.name);

    const existingMapping = this.fileMappings.get(node.guid);
    let existingSuffix = "";
    if (existingMapping) {
      const oldFileName = path.basename(existingMapping.filePath);
      const base = oldFileName.replace(/\.luau$/i, "").replace(/\.lua$/i, "");
      const match = base.match(/\.(server|client|module|legacy|local)$/);
      if (match) {
        existingSuffix = match[0];
      }
    }

    if (existingSuffix) {
      name = `${name}${existingSuffix}`;
    } else {
      if (node.className === "Script") {
        name = `${name}.server`;
      } else if (node.className === "LocalScript") {
        name = `${name}.client`;
      } else if (node.className === "ModuleScript") {
        if (config.suffixModuleScripts) {
          name = `${name}.module`;
        }
      }
    }

    return `${name}${ext}`;
  }

  private getDisambiguatedScriptFileName(node: TreeNode): string {
    const baseFileName = this.getScriptFileName(node);
    const suffix = this.getSuffixForClass(node.className);
    const guidSuffix = `__${node.guid.slice(0, 8)}`;

    if (suffix) {
      const stem = baseFileName.slice(0, -suffix.length);
      return `${stem}${guidSuffix}${suffix}`;
    }

    const ext = config.scriptExtension;
    if (!baseFileName.endsWith(ext)) {
      return `${baseFileName}${guidSuffix}`;
    }

    const stem = baseFileName.slice(0, -ext.length);
    const classSuffixMatch = stem.match(/(\.(?:server|client|module|legacy|local))$/);
    if (classSuffixMatch) {
      const classSuffix = classSuffixMatch[1];
      const rawName = stem.slice(0, -classSuffix.length);
      return `${rawName}${guidSuffix}${classSuffix}${ext}`;
    }

    return `${stem}${guidSuffix}${ext}`;
  }

  /**
   * Sanitize a name for use in filesystem
   */
  private sanitizeName(name: string): string {
    // Replace invalid filesystem characters
    return name.replace(/[<>:"|?*]/g, "_");
  }

  /**
   * Check if a node is a script
   */
  private isScriptNode(node: TreeNode): boolean {
    return (
      node.className === "Script" ||
      node.className === "LocalScript" ||
      node.className === "ModuleScript"
    );
  }

  private isSyncableNode(node: TreeNode): boolean {
    if (this.isScriptNode(node)) return true;
    const classNameLower = node.className.toLowerCase();
    return Object.values(config.extraClassSuffixes).some((val) => val.toLowerCase() === classNameLower);
  }

  private isNodeFile(node: TreeNode): boolean {
    if (this.isScriptNode(node)) return true;
    return node.children.size === 0;
  }

  private getSuffixForClass(className: string): string | undefined {
    const classNameLower = className.toLowerCase();
    for (const [suffix, val] of Object.entries(config.extraClassSuffixes)) {
      if (val.toLowerCase() === classNameLower) {
        return suffix;
      }
    }
    return undefined;
  }


  private getDirectoryPath(
    node: TreeNode,
    pathMap?: Map<string, TreeNode>,
  ): string {
    const dirSegments = this.isNodeFile(node)
      ? node.path.slice(0, Math.max(0, node.path.length - 1))
      : node.path;

    const parts: string[] = [];
    const currentPath: string[] = [];

    for (const segment of dirSegments) {
      currentPath.push(segment);
      const pathStr = currentPath.join("/");
      const matchedNode = pathMap?.get(pathStr);
      let suffix = "";
      if (matchedNode) {
        const classSuffix = this.getSuffixForClass(matchedNode.className);
        if (classSuffix && matchedNode.children?.size > 0) {
          suffix = classSuffix;
        }
      }
      parts.push(this.sanitizeName(segment) + suffix);
    }

    return path.join(this.baseDir, ...parts);
  }

  private writeSyncableNode(node: TreeNode, filePath: string): void {
    if (this.isScriptNode(node)) {
      fs.writeFileSync(filePath, node.source || "", "utf-8");
    } else {
      const data = {
        properties: node.properties || {},
        attributes: node.attributes || {},
        tags: node.tags || [],
      };
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    }
  }

  /**
   * Ensure a directory exists
   */
  private ensureDirectory(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  /**
   * Internal helper to remove a file and clean mapping
   */
  private deleteFilePathInternal(filePath: string): boolean {
    const normalized = path.resolve(filePath);

    if (fs.existsSync(normalized)) {
      fs.unlinkSync(normalized);
      log.script(this.getRelativePath(normalized), "deleted");
      this.cleanupParentsIfEmpty(path.dirname(normalized));
    }

    const guid = this.pathToGuid.get(normalized);
    if (guid) {
      this.fileMappings.delete(guid);
      this.pathToGuid.delete(normalized);
    }

    return true;
  }

  /**
   * Find the GUID that currently owns a file path, if any
   */
  private findGuidByFilePath(filePath: string): string | undefined {
    // Use the reverse index for an O(1) lookup instead of scanning all mappings.
    return this.pathToGuid.get(path.resolve(filePath));
  }

  /**
   * Get path relative to base directory
   */
  private getRelativePath(filePath: string): string {
    return path.relative(this.baseDir, filePath);
  }

  /**
   * Get file mapping by GUID
   */
  public getMapping(guid: string): FileMapping | undefined {
    return this.fileMappings.get(guid);
  }

  /**
   * Get GUID by file path
   */
  public getGuidByPath(filePath: string): string | undefined {
    const resolved = path.resolve(filePath);
    const guid = this.pathToGuid.get(resolved);
    if (guid) return guid;

    const initJsonPath = path.resolve(filePath, "init.json");
    const initGuid = this.pathToGuid.get(initJsonPath);
    if (initGuid) return initGuid;

    if (path.basename(resolved).toLowerCase() === "init.json") {
      const parentDir = path.dirname(resolved);
      const parentGuid = this.pathToGuid.get(parentDir);
      if (parentGuid) return parentGuid;
    }

    return undefined;
  }

  /**
   * Get all file mappings
   */
  public getAllMappings(): Map<string, FileMapping> {
    return this.fileMappings;
  }

  /**
   * Register a file mapping without writing to disk
   */
  public registerMapping(guid: string, filePath: string, className: string): void {
    this.fileMappings.set(guid, {
      guid,
      filePath,
      className,
    });
    this.pathToGuid.set(path.resolve(filePath), guid);
  }

  /**
   * Delete a file mapping in memory
   */
  public deleteMapping(guid: string): void {
    const mapping = this.fileMappings.get(guid);
    if (mapping) {
      this.fileMappings.delete(guid);
      this.pathToGuid.delete(path.resolve(mapping.filePath));
    }
  }

  /**
   * Get the base directory
   */
  public getBaseDir(): string {
    return this.baseDir;
  }

  /**
   * Clean up empty directories
   */
  public cleanupEmptyDirectories(): void {
    this.cleanupEmptyDirsRecursive(this.baseDir);
  }

  private cleanupEmptyDirsRecursive(dirPath: string): boolean {
    if (!fs.existsSync(dirPath)) {
      return false;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    // Recursively check subdirectories
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subPath = path.join(dirPath, entry.name);
        this.cleanupEmptyDirsRecursive(subPath);
      }
    }

    // Check if directory is now empty
    const updatedEntries = fs.readdirSync(dirPath);
    if (updatedEntries.length === 0 && dirPath !== this.baseDir) {
      fs.rmdirSync(dirPath);
      return true;
    }

    return false;
  }

  /**
   * Walk up from a directory and remove empty parents until baseDir is reached.
   */
  private cleanupParentsIfEmpty(startDir: string): void {
    let current = path.resolve(startDir);
    const root = this.baseDir;

    while (current.startsWith(root)) {
      if (current === root) {
        break;
      }

      const entries = fs.existsSync(current)
        ? fs.readdirSync(current, { withFileTypes: true })
        : [];

      if (entries.length === 0) {
        fs.rmdirSync(current);
        current = path.dirname(current);
      } else {
        break;
      }
    }
  }
}

``

# File: src\fs\treeManager.ts
``
import { InstanceData } from "../ipc/messages.js";
import { log } from "../util/log.js";
import { config } from "../config.js";

/**
 * Represents a node in the virtual DataModel tree
 */
export interface TreeNode {
  guid: string;
  className: string;
  name: string;
  path: string[];
  parentGuid?: string | null;
  source?: string;
  children: Map<string, TreeNode>;
  parent?: TreeNode;
  properties?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
  tags?: string[];
}

/**
 * Manages the in-memory representation of Studio's DataModel
 */
export class TreeManager {
  private nodes: Map<string, TreeNode> = new Map();
  private pathIndex: Map<string, Set<TreeNode>> = new Map(); // pathKey → TreeNodes (same name siblings supported)
  private root: TreeNode | null = null;

  private pathKey(path: string[]): string {
    return path.join("\u0000");
  }

  private addToPathIndex(node: TreeNode): void {
    const key = this.pathKey(node.path);
    const bucket = this.pathIndex.get(key) ?? new Set<TreeNode>();
    bucket.add(node);
    this.pathIndex.set(key, bucket);
  }

  private removeFromPathIndex(node: TreeNode): void {
    const key = this.pathKey(node.path);
    const bucket = this.pathIndex.get(key);
    if (!bucket) return;

    bucket.delete(node);
    if (bucket.size === 0) {
      this.pathIndex.delete(key);
    }
  }

  private registerSubtree(node: TreeNode): void {
    const stack: TreeNode[] = [node];

    while (stack.length > 0) {
      const current = stack.pop()!;
      this.addToPathIndex(current);

      for (const child of current.children.values()) {
        stack.push(child);
      }
    }
  }

  private unregisterSubtree(node: TreeNode): void {
    const stack: TreeNode[] = [node];

    while (stack.length > 0) {
      const current = stack.pop()!;
      this.removeFromPathIndex(current);

      for (const child of current.children.values()) {
        stack.push(child);
      }
    }
  }

  public updateInstance(instance: InstanceData): {
    node: TreeNode;
    pathChanged: boolean;
    nameChanged: boolean;
    parentChanged: boolean;
    isNew: boolean;
    prevPath?: string[];
    prevName?: string;
  } | null {
    const existing = this.nodes.get(instance.guid);
    const hasParentHint = instance.parentGuid !== undefined;
    const incomingParentGuid = hasParentHint
      ? (instance.parentGuid ?? null)
      : null;

    if (existing) {
      const prevPath = [...existing.path];
      const prevName = existing.name;
      const pathChanged = !this.pathsEqual(existing.path, instance.path);
      const nameChanged = existing.name !== instance.name;
      const currentParentGuid =
        existing.parent?.guid ?? existing.parentGuid ?? null;
      const nextParentGuid = hasParentHint
        ? incomingParentGuid
        : currentParentGuid;
      const parentChanged =
        hasParentHint && nextParentGuid !== currentParentGuid;

      const nextSource =
        instance.source !== undefined ? instance.source : existing.source;

      if (pathChanged) {
        this.unregisterSubtree(existing);
      }

      existing.className = instance.className;
      existing.name = instance.name;
      existing.path = instance.path;
      existing.parentGuid = nextParentGuid;
      existing.source = nextSource;
      existing.properties = instance.properties !== undefined
        ? (Array.isArray(instance.properties) && instance.properties.length === 0 ? {} : instance.properties)
        : existing.properties;
      existing.attributes = instance.attributes !== undefined
        ? (Array.isArray(instance.attributes) && instance.attributes.length === 0 ? {} : instance.attributes)
        : existing.attributes;
      existing.tags = instance.tags !== undefined ? instance.tags : existing.tags;

      if (pathChanged || nameChanged || parentChanged) {
        this.reparentNode(existing, instance.path, nextParentGuid);
        this.recalculateChildPaths(existing);
        this.registerSubtree(existing);
      }

      log.script(`Updated instance: ${instance.path.join("/")}`, "updated");
      return {
        node: existing,
        pathChanged,
        nameChanged,
        parentChanged,
        isNew: false,
        prevPath,
        prevName,
      };
    }

    const node: TreeNode = {
      guid: instance.guid,
      className: instance.className,
      name: instance.name,
      path: instance.path,
      parentGuid: incomingParentGuid,
      source: instance.source,
      children: new Map(),
      properties: instance.properties !== undefined
        ? (Array.isArray(instance.properties) && instance.properties.length === 0 ? {} : instance.properties)
        : undefined,
      attributes: instance.attributes !== undefined
        ? (Array.isArray(instance.attributes) && instance.attributes.length === 0 ? {} : instance.attributes)
        : undefined,
      tags: instance.tags,
    };

    this.nodes.set(instance.guid, node);
    this.reparentNode(node, instance.path, incomingParentGuid);
    this.recalculateChildPaths(node);
    this.registerSubtree(node);

    log.script(`Created instance: ${instance.path.join("/")}`, "created");
    return {
      node,
      pathChanged: false,
      nameChanged: false,
      parentChanged: false,
      isNew: true,
    };
  }

  /**
   * Process a full snapshot from Studio
   */
  public applyFullSnapshot(instances: InstanceData[]): void {
    log.info(`Processing full snapshot: ${instances.length} instances`);

    // Clear existing tree
    this.nodes.clear();
    this.pathIndex.clear();
    this.root = null;

    // First pass: create all nodes
    for (const instance of instances) {
      const node: TreeNode = {
        guid: instance.guid,
        className: instance.className,
        name: instance.name,
        path: instance.path,
        parentGuid: instance.parentGuid ?? null,
        source: instance.source,
        children: new Map(),
        properties: instance.properties,
        attributes: instance.attributes,
        tags: instance.tags,
      };
      this.nodes.set(instance.guid, node);
      this.addToPathIndex(node);
      log.debug(`Created node: ${instance.path.join("/")}`);
    }

    // Second pass: build hierarchy
    for (const instance of instances) {
      const node = this.nodes.get(instance.guid);
      if (!node) continue;

      if (instance.path.length === 1) {
        // This is a root service
        if (!this.root) {
          this.root = {
            guid: "root",
            className: "DataModel",
            name: "game",
            path: [],
            parentGuid: null,
            children: new Map(),
          };
          this.nodes.set("root", this.root);
          this.addToPathIndex(this.root);
        }
        this.root.children.set(node.guid, node);
        node.parent = this.root;
        node.parentGuid = this.root.guid;
        log.debug(`Assigned root parent for: ${instance.path.join("/")}`);
      } else {
        // Find parent by matching path
        const parentPath = instance.path.slice(0, -1);
        const explicitParentGuid = instance.parentGuid ?? null;
        let parent: TreeNode | undefined;

        if (explicitParentGuid) {
          parent = this.nodes.get(explicitParentGuid);
        }

        if (!parent) {
          parent = this.findNodeByPath(parentPath);
        }

        if (parent) {
          parent.children.set(node.guid, node);
          node.parent = parent;
          node.parentGuid = parent.guid;
          log.debug(`Assigned parent for: ${instance.path.join("/")}`);
        } else {
          log.warn(`Parent not found for ${instance.path.join("/")}`);
        }
      }
    }

    log.success(`Tree built: ${this.nodes.size} nodes`);
  }

  /**
   * Update child paths iteratively
   */
  private recalculateChildPaths(node: TreeNode): void {
    const queue: TreeNode[] = [...node.children.values()];

    while (queue.length > 0) {
      const child = queue.shift()!;
      child.path = [...child.parent!.path, child.name];

      for (const grandchild of child.children.values()) {
        queue.push(grandchild);
      }
    }
  }

  public getDescendantScripts(guid: string): TreeNode[] {
    const start = this.nodes.get(guid);
    if (!start) {
      return [];
    }

    const scripts: TreeNode[] = [];
    const stack: TreeNode[] = [...start.children.values()];

    while (stack.length > 0) {
      const node = stack.pop()!;

      if (this.isScriptNode(node)) {
        scripts.push(node);
      }

      for (const child of node.children.values()) {
        stack.push(child);
      }
    }

    return scripts;
  }

  private isScriptNode(node: TreeNode): boolean {
    return (
      node.className === "Script" ||
      node.className === "LocalScript" ||
      node.className === "ModuleScript"
    );
  }

  public isSyncableNode(node: TreeNode): boolean {
    if (this.isScriptNode(node)) return true;
    const classNameLower = node.className.toLowerCase();
    return Object.values(config.extraClassSuffixes).some((val) => val.toLowerCase() === classNameLower);
  }

  public getDescendantSyncableNodes(guid: string): TreeNode[] {
    const start = this.nodes.get(guid);
    if (!start) {
      return [];
    }

    const syncable: TreeNode[] = [];
    const stack: TreeNode[] = [...start.children.values()];

    while (stack.length > 0) {
      const node = stack.pop()!;

      if (this.isSyncableNode(node)) {
        syncable.push(node);
      }

      for (const child of node.children.values()) {
        stack.push(child);
      }
    }

    return syncable;
  }

  private pathsEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) return false;
    return a.every((segment, idx) => segment === b[idx]);
  }

  /**
   * Delete an instance by GUID
   */
  public deleteInstance(guid: string): TreeNode | null {
    const node = this.nodes.get(guid);
    if (!node) {
      log.debug(`Delete ignored for missing node: ${guid}`);
      return null;
    }

    // Detach from parent first so no one references this subtree
    if (node.parent) {
      node.parent.children.delete(guid);
    }

    // Iterative delete to avoid repeated recursion work on large subtrees
    const stack: TreeNode[] = [node];
    while (stack.length > 0) {
      const current = stack.pop()!;
      for (const child of current.children.values()) {
        stack.push(child);
      }

      this.removeFromPathIndex(current);
      this.nodes.delete(current.guid);

      // Break references to help GC and prevent accidental reuse
      current.children.clear();
      current.parent = undefined;
    }

    log.script(`Deleted instance: ${node.path.join("/")}`, "deleted");
    return node;
  }

  /**
   * Update script source only
   */
  public updateScriptSource(guid: string, source: string): void {
    const node = this.nodes.get(guid);
    if (node) {
      node.source = source;
      log.debug(`Updated script source: ${node.path.join("/")}`);
    } else {
      log.warn(`Script not found for GUID: ${guid}`);
    }
  }

  /**
   * Get a node by GUID
   */
  public getNode(guid: string): TreeNode | undefined {
    return this.nodes.get(guid);
  }

  /**
   * Get all nodes
   */
  public getAllNodes(): Map<string, TreeNode> {
    return this.nodes;
  }

  /**
   * Get all script nodes
   */
  public getScriptNodes(): TreeNode[] {
    return Array.from(this.nodes.values()).filter((node) =>
      this.isScriptNode(node),
    );
  }

  /**
   * Find a node by its path (public interface)
   */
  public getNodeByPath(path: string[]): TreeNode | undefined {
    return this.findNodeByPath(path);
  }

  /**
   * Find a node by its path
   */
  private findNodeByPath(path: string[]): TreeNode | undefined {
    const bucket = this.pathIndex.get(this.pathKey(path));
    if (!bucket || bucket.size === 0) {
      return undefined;
    }

    if (bucket.size === 1) {
      return bucket.values().next().value;
    }

    // Ambiguous path (same-name siblings); caller should use parent GUIDs instead
    log.debug(
      `Multiple nodes share path ${path.join("/")}, skipping path lookup`,
    );
    return undefined;
  }

  /**
   * Re-parent a node based on its path
   */
  private reparentNode(
    node: TreeNode,
    path: string[],
    parentGuid?: string | null,
  ): void {
    // Remove from old parent
    if (node.parent) {
      node.parent.children.delete(node.guid);
    }

    // Find new parent (prefer explicit parent GUID when present)
    let parent: TreeNode | undefined;

    if (parentGuid) {
      parent = this.nodes.get(parentGuid);
    }

    if (!parent) {
      if (path.length === 1) {
        // Root service
        if (!this.root) {
          this.root = {
            guid: "root",
            className: "DataModel",
            name: "game",
            path: [],
            parentGuid: null,
            children: new Map(),
          };
          this.nodes.set("root", this.root);
          this.addToPathIndex(this.root);
        }
        parent = this.root;
      } else {
        const parentPath = path.slice(0, -1);
        parent = this.findNodeByPath(parentPath);
      }
    }

    if (parent) {
      parent.children.set(node.guid, node);
      node.parent = parent;
      node.parentGuid = parent.guid;
    } else {
      log.debug(`Parent not found for re-parenting: ${path.join("/")}`);
    }
  }

  /**
   * Get tree statistics
   */
  public getStats(): {
    totalNodes: number;
    scriptNodes: number;
    maxDepth: number;
  } {
    let scriptCount = 0;
    let maxDepth = 0;

    for (const node of this.nodes.values()) {
      if (this.isScriptNode(node)) {
        scriptCount += 1;
      }
      const depth = node.path.length;
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }

    return {
      totalNodes: this.nodes.size,
      scriptNodes: scriptCount,
      maxDepth,
    };
  }
}

``

# File: src\fs\watcher.ts
``
import * as chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";
import { log } from "../util/log.js";
import { config } from "../config.js";

export type FileChangeHandler = (
  eventType: "add" | "change" | "unlink",
  filePath: string,
  source?: string,
  extraData?: { properties?: any; attributes?: any; tags?: any },
) => void;

/**
 * Watches the filesystem for changes and notifies handlers
 */
export class FileWatcher {
  private watcher: chokidar.FSWatcher | null = null;
  private changeHandler: FileChangeHandler | null = null;
  private debounceTimers: Map<string, NodeJS.Timeout> = new Map();
  private suppressedUntil: Map<string, number> = new Map();
  private expectedContents: Map<string, string> = new Map();

  /**
   * Start watching a directory
   */
  public watch(directory: string): void {
    if (this.watcher) {
      log.warn("Watcher already running, stopping it first");
      this.stop();
    }

    log.info(`Starting file watcher on: ${directory}`);

    this.watcher = chokidar.watch(directory, {
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 100,
        pollInterval: 50,
      },
    });

    this.watcher.on("change", (filePath) => {
      this.handleFileEvent("change", filePath);
    });

    this.watcher.on("add", (filePath) => {
      this.handleFileEvent("add", filePath);
    });

    this.watcher.on("unlink", (filePath) => {
      this.handleFileUnlink(filePath);
    });

    this.watcher.on("addDir", (dirPath) => {
      this.handleDirectoryEvent("add", dirPath);
    });

    this.watcher.on("unlinkDir", (dirPath) => {
      this.handleDirectoryUnlink(dirPath);
    });

    this.watcher.on("error", (error) => {
      log.error("File watcher error:", error);
    });

    this.watcher.on("ready", () => {
      log.success("File watcher ready");
    });
  }

  /**
   * Handle a file event (add or change) with debouncing
   */
  private handleFileEvent(eventType: "add" | "change", filePath: string): void {
    // Clear existing timer for this file
    const existingTimer = this.debounceTimers.get(filePath);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // Set new debounced timer
    const timer = setTimeout(() => {
      this.processFileEvent(eventType, filePath);
      this.debounceTimers.delete(filePath);
    }, config.fileWatchDebounce);

    this.debounceTimers.set(filePath, timer);
  }

  /**
   * Process a file event after debouncing
   */
  private processFileEvent(eventType: "add" | "change", filePath: string): void {
    const normalizedPath = path.resolve(filePath);

    // Only process script or extra class files
    if (!this.isScriptFile(filePath)) {
      return;
    }

    try {
      if (!fs.existsSync(normalizedPath)) {
        return;
      }

      let source: string | undefined = undefined;
      let extraData: { properties?: any; attributes?: any; tags?: any } | undefined = undefined;

      const isScript = filePath.endsWith(".lua") || filePath.endsWith(".luau");
      if (isScript) {
        source = fs.readFileSync(filePath, "utf-8");
      } else {
        const raw = fs.readFileSync(filePath, "utf-8");
        try {
          extraData = JSON.parse(raw);
        } catch (error) {
          log.warn(`Failed to parse JSON file ${filePath}:`, error);
        }
      }

      // Skip if this change was produced by a Studio-originated write.
      const expectedSource = this.expectedContents.get(normalizedPath);
      if (expectedSource !== undefined) {
        const matches = isScript ? source === expectedSource : fs.readFileSync(filePath, "utf-8") === expectedSource;
        if (matches) {
          log.debug(
            `File ${eventType} suppressed (Studio-originated content match): ${normalizedPath}`,
          );
          this.suppressedUntil.delete(normalizedPath);
          this.expectedContents.delete(normalizedPath);
          return;
        }

        // Expected content mismatched, so this is an external change. Clear stale suppression.
        this.suppressedUntil.delete(normalizedPath);
        this.expectedContents.delete(normalizedPath);
      } else {
        // No expected content, but check if we're still within a suppression window
        const now = Date.now();
        const suppressUntil = this.suppressedUntil.get(normalizedPath);
        if (suppressUntil && suppressUntil > now) {
          log.debug(
            `File ${eventType} suppressed (Studio-originated): ${normalizedPath}`,
          );
          return;
        }

        // Clear the suppression if it's expired
        if (suppressUntil && suppressUntil <= now) {
          this.suppressedUntil.delete(normalizedPath);
          this.expectedContents.delete(normalizedPath);
        }
      }

      log.debug(`File ${eventType}d: ${normalizedPath}`);

      if (this.changeHandler) {
        this.changeHandler(eventType, normalizedPath, source, extraData);
      }
    } catch (error) {
      log.error(`Failed to read ${eventType}d file ${filePath}:`, error);
    }
  }

  /**
   * Handle an unlink (deletion) event immediately
   */
  private handleFileUnlink(filePath: string): void {
    // Clear any pending add/change timers for this path
    const existingTimer = this.debounceTimers.get(filePath);
    if (existingTimer) {
      clearTimeout(existingTimer);
      this.debounceTimers.delete(filePath);
    }

    const normalizedPath = path.resolve(filePath);

    if (!this.isScriptFile(filePath)) {
      return;
    }

    // Check suppression for unlink
    const now = Date.now();
    const suppressUntil = this.suppressedUntil.get(normalizedPath);
    if (suppressUntil && suppressUntil > now) {
      log.debug(
        `File unlink suppressed (Studio-originated): ${normalizedPath}`,
      );
      this.suppressedUntil.delete(normalizedPath);
      this.expectedContents.delete(normalizedPath);
      return;
    }

    if (suppressUntil && suppressUntil <= now) {
      this.suppressedUntil.delete(normalizedPath);
      this.expectedContents.delete(normalizedPath);
    }

    log.debug(`File unlinked: ${normalizedPath}`);

    if (this.changeHandler) {
      this.changeHandler("unlink", normalizedPath);
    }
  }

  /**
   * Check if a file is a script file
   */
  private handleDirectoryEvent(eventType: "add", dirPath: string): void {
    const lower = dirPath.toLowerCase();
    let isExtraClassDir = false;
    for (const suffix of Object.keys(config.extraClassSuffixes)) {
      if (lower.endsWith(suffix.toLowerCase())) {
        isExtraClassDir = true;
        break;
      }
    }

    if (!isExtraClassDir) return;

    const existingTimer = this.debounceTimers.get(dirPath);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    const timer = setTimeout(() => {
      this.processDirectoryEvent(eventType, dirPath);
      this.debounceTimers.delete(dirPath);
    }, config.fileWatchDebounce);

    this.debounceTimers.set(dirPath, timer);
  }

  private processDirectoryEvent(eventType: "add", dirPath: string): void {
    const normalizedPath = path.resolve(dirPath);
    const initJsonPath = path.join(normalizedPath, "init.json");
    let extraData: any = undefined;
    if (fs.existsSync(initJsonPath)) {
      try {
        extraData = JSON.parse(fs.readFileSync(initJsonPath, "utf-8"));
      } catch (error) {
        log.warn(`Failed to parse init.json in directory ${dirPath}:`, error);
      }
    }

    log.debug(`Directory ${eventType}d: ${normalizedPath}`);

    if (this.changeHandler) {
      this.changeHandler(eventType, normalizedPath, undefined, extraData);
    }
  }

  private handleDirectoryUnlink(dirPath: string): void {
    const existingTimer = this.debounceTimers.get(dirPath);
    if (existingTimer) {
      clearTimeout(existingTimer);
      this.debounceTimers.delete(dirPath);
    }

    const normalizedPath = path.resolve(dirPath);

    let isExtraClassDir = false;
    const lower = dirPath.toLowerCase();
    for (const suffix of Object.keys(config.extraClassSuffixes)) {
      if (lower.endsWith(suffix.toLowerCase())) {
        isExtraClassDir = true;
        break;
      }
    }

    if (!isExtraClassDir) return;

    log.debug(`Directory unlinked: ${normalizedPath}`);

    if (this.changeHandler) {
      this.changeHandler("unlink", normalizedPath);
    }
  }

  private isScriptFile(filePath: string): boolean {
    const lower = filePath.toLowerCase();
    if (lower.endsWith(".lua") || lower.endsWith(".luau")) {
      return true;
    }
    for (const suffix of Object.keys(config.extraClassSuffixes)) {
      if (lower.endsWith(suffix.toLowerCase())) {
        return true;
      }
    }
    if (path.basename(lower) === "init.json") {
      return true;
    }
    return false;
  }

  /**
   * Register a handler for file changes
   */
  public onChange(handler: FileChangeHandler): void {
    this.changeHandler = handler;
  }

  /**
   * Suppress the next change event for a specific file path (normalized)
   */
  public suppressNextChange(filePath: string, expectedSource?: string): void {
    const normalizedPath = path.resolve(filePath);
    const until = Date.now() + 1000; // 1s window to absorb duplicate events
    this.suppressedUntil.set(normalizedPath, until);

    if (expectedSource !== undefined) {
      this.expectedContents.set(normalizedPath, expectedSource);
    } else {
      this.expectedContents.delete(normalizedPath);
    }
  }

  /**
   * Stop watching
   */
  public async stop(): Promise<void> {
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
      log.info("File watcher stopped");
    }

    // Clear all pending timers
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();
    this.suppressedUntil.clear();
    this.expectedContents.clear();
  }
}

``

# File: src\ipc\messages.ts
``
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

``

# File: src\ipc\protocol.ts
``
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

``

# File: src\ipc\server.ts
``
import { WebSocketServer, WebSocket } from "ws";
import { log } from "../util/log.js";
import type { StudioMessage, DaemonMessage } from "./messages.js";
import type { SnapshotRequestOptions } from "./messages.js";
import type { Server as HttpServer } from "http";
import { config } from "../config.js";
import { PROTOCOL_VERSION, DEFAULT_CAPABILITIES } from "./protocol.js";
import { getCurrentVersion } from "../util/versionUtils.js";

export type MessageHandler = (message: StudioMessage) => void;

interface IPCServerOptions {
  requestSnapshotOnConnect?: boolean;
}

export class IPCServer {
  private wss: WebSocketServer;
  private client: WebSocket | null = null;
  private messageHandler: MessageHandler | null = null;
  private connectionHandler: (() => void) | null = null;
  private handshakeHandler: (() => void) | null = null;
  private disconnectHandler: (() => void) | null = null;
  private requestSnapshotOnConnect: boolean;
  private pingIntervals = new Map<WebSocket, NodeJS.Timeout>();
  private handshakeComplete = false;
  private remoteProtocolVersion: number | null = null;

  constructor(port?: number, server?: HttpServer, options?: IPCServerOptions) {
    this.requestSnapshotOnConnect = options?.requestSnapshotOnConnect !== false;
    if (server) {
      // Use existing HTTP server
      this.wss = new WebSocketServer({
        server,
        // perMessageDeflate: false, // Roblox WebSocket client does not negotiate RSV2/RSV3 extensions
        maxPayload: 256 * 1024 * 1024, // 256 MB
      });
    } else {
      // Create standalone WebSocket server
      this.wss = new WebSocketServer({
        port: port !== undefined ? port : 8080,
        // perMessageDeflate: false, // avoid RSV2/RSV3 bits from compression
        maxPayload: 256 * 1024 * 1024, // 256 MB
      });
    }
    this.setupServer();
  }

  private setupServer(): void {
    this.wss.on("connection", (ws) => {
      log.info("Studio client connected");
      log.info("Waiting for Studio messages...");

      // Disconnect previous client if exists
      if (this.client) {
        log.warn("Disconnecting previous client");
        this.client.close();
      }

      this.client = ws;
      this.handshakeComplete = false;

      if (this.connectionHandler) {
        this.connectionHandler();
      }

      ws.on("message", (data) => {
        try {
          const message: StudioMessage = JSON.parse(data.toString());
          log.debug(`Received: ${message.type}`);

          if (message.type === "handshakeStudio") {
            if (!this.handshakeComplete) {
              this.handshakeComplete = true;
              if (this.handshakeHandler) {
                this.handshakeHandler();
              }
            }

            // Log version/protocol details and warn (never block) on a mismatch.
            const remoteProtocol = (message as any).protocolVersion;
            this.remoteProtocolVersion = typeof remoteProtocol === "number" ? remoteProtocol : null;
            const remotePluginVersion = (message as any).pluginVersion;
            if (
              typeof remoteProtocol === "number" &&
              remoteProtocol !== PROTOCOL_VERSION
            ) {
              log.warn(
                `Protocol version mismatch: daemon speaks v${PROTOCOL_VERSION}, plugin speaks v${remoteProtocol}. ` +
                  "Some features may be unavailable; update whichever side is older.",
              );
            } else {
              log.debug(
                `Handshake from plugin (protocol v${remoteProtocol ?? "?"}, plugin version ${remotePluginVersion ?? "?"})`,
              );
            }

            let daemonVersion = "unknown";
            try {
              daemonVersion = getCurrentVersion();
            } catch {
              // Non-fatal: version is display-only.
            }

            this.send({
              type: "handshakeAck",
              extraClassSuffixes: config.extraClassSuffixes,
              protocolVersion: PROTOCOL_VERSION,
              daemonVersion,
              capabilities: {
                msgpack: DEFAULT_CAPABILITIES.msgpack,
                compression: DEFAULT_CAPABILITIES.compression,
              },
            });
            return;
          }

          if (this.messageHandler) {
            this.messageHandler(message);
          }
        } catch (error) {
          log.error("Failed to parse message:", error);
          this.sendError("Invalid JSON message");
        }
      });

      ws.on("close", () => {
        const pingInterval = this.pingIntervals.get(ws);
        if (pingInterval) {
          clearInterval(pingInterval);
          this.pingIntervals.delete(ws);
        }

        log.info("Studio client disconnected");
        this.client = null;
        this.handshakeComplete = false;

        if (this.disconnectHandler) {
          this.disconnectHandler();
        }
      });

      ws.on("error", (error) => {
        log.error("WebSocket error:", error);
      });

      // Set up ping/pong to keep connection alive
      ws.on("pong", () => {
        log.debug("Received pong from client");
      });

      // Send ping every 30 seconds
      const pingInterval = setInterval(() => {
        if (this.client === ws && ws.readyState === WebSocket.OPEN) {
          ws.ping();
        } else {
          clearInterval(pingInterval);
          this.pingIntervals.delete(ws);
        }
      }, 30000);
      this.pingIntervals.set(ws, pingInterval);

      // Request initial snapshot after a brief delay
      if (this.requestSnapshotOnConnect) {
        setTimeout(() => {
          if (this.client === ws) {
            this.send({ type: "requestSnapshot" });
          }
        }, 100);
      }
    });

    this.wss.on("listening", () => {
      log.success("WebSocket server ready");
    });

    this.wss.on("error", (error) => {
      log.error("WebSocket server error:", error);
    });
  }

  /**
   * Register a handler for incoming Studio messages
   */
  public onMessage(handler: MessageHandler): void {
    this.messageHandler = handler;
  }

  /**
   * Register a handler that fires when a Studio client connects
   */
  public onConnection(handler: () => void): void {
    this.connectionHandler = handler;
  }

  /**
   * Register a handler that fires when Studio completes the handshake
   */
  public onHandshake(handler: () => void): void {
    this.handshakeHandler = handler;
    if (this.handshakeComplete) {
      handler();
    }
  }

  /**
   * Register a handler that fires when a Studio client disconnects
   */
  public onDisconnect(handler: () => void): void {
    this.disconnectHandler = handler;
  }

  /**
   * Send a message to the connected Studio client
   */
  public send(message: DaemonMessage): boolean {
    if (!this.client || this.client.readyState !== WebSocket.OPEN) {
      log.warn("Cannot send message: no connected client");
      return false;
    }

    try {
      this.client.send(JSON.stringify(message));
      log.debug(`Sent: ${message.type}`);
      return true;
    } catch (error) {
      log.error("Failed to send message:", error);
      return false;
    }
  }

  /**
   * Send a patch to update a script's source in Studio
   */
  public patchScript(guid: string, source: string): boolean {
    return this.send({
      type: "patchScript",
      guid,
      source,
    });
  }

  /**
   * Send an error message to Studio
   */
  public sendError(message: string): boolean {
    return this.send({
      type: "error",
      message,
    });
  }

  /**
   * Request a full snapshot from Studio
   */
  public requestSnapshot(options?: SnapshotRequestOptions): boolean {
    return this.send({
      type: "requestSnapshot",
      options,
    });
  }

  /**
   * Check if a client is connected
   */
  public isConnected(): boolean {
    return this.client !== null && this.client.readyState === WebSocket.OPEN;
  }

  /**
   * Get the protocol version of the connected plugin client
   */
  public getRemoteProtocolVersion(): number | null {
    return this.remoteProtocolVersion;
  }

  /**
   * Close the server
   */
  public close(): void {
    for (const interval of this.pingIntervals.values()) {
      clearInterval(interval);
    }
    this.pingIntervals.clear();

    if (this.client) {
      this.client.close();
      this.client = null;
    }
    this.wss.close();
    log.info("WebSocket server closed.");
  }
}

``

# File: src\snapshot\rojo\builder.ts
``
import fs from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { log } from "../../util/log.js";
import {
  classifyScriptFileName,
  isInstanceJsonName,
  isScriptFileName,
  ScriptClassName,
  classifyFileName,
  isSyncableFile,
} from "../../util/scriptFile.js";
import type { InstanceData } from "../../ipc/messages.js";
import { convertImplicitRojoProperty } from "./convert.js";

interface RojoProject {
  name: string;
  tree: Record<string, any>;
  globIgnorePaths?: string | string[];
}

export interface RojoSnapshotOptions {
  projectFile?: string;
  cwd?: string;
  destPrefix?: string[];
}

/**
 * Builds InstanceData[] from a Rojo-style default.project.json (compat layer).
 */
export class RojoSnapshotBuilder {
  private projectFile: string;
  private cwd: string;
  private emittedFolders: Set<string> = new Set();
  private moduleContainers: Set<string> = new Set();
  private destPrefix: string[];
  private ignoreMatchers: RegExp[] = [];

  constructor(options: RojoSnapshotOptions = {}) {
    this.cwd = path.resolve(options.cwd ?? process.cwd());
    this.projectFile = path.resolve(
      this.cwd,
      options.projectFile ?? "default.project.json",
    );
    this.destPrefix = options.destPrefix ?? [];
  }

  public async build(): Promise<InstanceData[]> {
    const project = await this.loadProjectFrom(this.projectFile);
    this.prepareIgnoreMatchers(project);

    const results: InstanceData[] = [];
    const projectDir = path.dirname(this.projectFile);

    const tree = project.tree ?? {};
    const rootChildren = Object.keys(tree).filter((k) => !k.startsWith("$"));
    const hasChildren = rootChildren.length > 0;
    const rootPath = typeof tree.$path === "string" ? tree.$path : null;

    log.debug(`destPrefix: ${this.destPrefix.join("/")}`);

    // If the root of the project tree doesn't have a $className of "DataModel", the Rojo project is not a Place and
    // we cannot guess the root of the emitted tree.
    if (
      (!tree.$className || tree.$className !== "DataModel") &&
      (!this.destPrefix || this.destPrefix.length === 0)
    ) {
      /**
       * Rojo error:
       * Cannot sync a model as a place. Ensure Rojo is serving a project file that has a DataModel at the root of its tree and try again.
       */
      log.error(
        `Cannot build Rojo compatibility snapshot: project file does not have a DataModel root.`,
      );
      log.error(`To fix this, either:`);
      log.error(
        `- Run "azul push" to specify a destination path that is not the root (e.g. "azul push -s . -d Workspace.${project.name || "RojoProject"} --rojo")`,
      );
      log.error(
        `- Make sure the project file has a DataModel root (e.g. "tree": { "$className": "DataModel", ... })`,
      );
      throw new Error(`Cannot build from Rojo project.`);
    }

    if (rootPath) {
      const absRoot = path.resolve(projectDir, rootPath);
      const rootKind = await this.pathKind(absRoot);

      if (!rootKind) {
        throw new Error(`$path target ${absRoot} does not exist.`);
      }

      if (rootKind === "file") {
        if (hasChildren) {
          throw new Error(
            `Root $path target ${absRoot} is a file and cannot define child nodes.`,
          );
        }

        if (!isScriptFileName(path.basename(absRoot))) {
          throw new Error(
            `$path target ${absRoot} must be a .lua or .luau script file.`,
          );
        }

        const { className, scriptName } = classifyScriptFileName(
          path.basename(absRoot),
        );
        const source = await fs.readFile(absRoot, "utf-8");

        // If the root is a file, it becomes the single instance emitted at the destPrefix (or root if no prefix).
        const destPath =
          this.destPrefix.length === 0
            ? [scriptName]
            : this.destPrefix[this.destPrefix.length - 1] === scriptName
              ? [...this.destPrefix]
              : [...this.destPrefix, scriptName];

        this.ensureFolder(destPath.slice(0, -1), results);
        this.moduleContainers.add(destPath.join("/"));
        results.push({
          guid: this.makeGuid(),
          className,
          name: destPath[destPath.length - 1],
          path: destPath,
          source,
        });
      } else {
        await this.walkDirectory(
          absRoot,
          [...this.destPrefix],
          results,
          new Set(rootChildren),
        );
      }
    }

    // Walk any children defined in the root of the project tree (if $path is not a file)
    if (hasChildren) {
      await this.walkTree(tree, [], projectDir, results);
    }

    // Stable ordering: shallow-first, then lexical for determinism
    results.sort((a, b) => {
      if (a.path.length !== b.path.length) {
        return a.path.length - b.path.length;
      }
      return a.path.join("/").localeCompare(b.path.join("/"));
    });

    log.debug(`Instances emitted in Rojo compatibility build:`);
    for (const instance of results) {
      log.debug(`- ${instance.path.join("/")} (${instance.className})`);
    }

    log.success(
      `Rojo compatibility build produced ${results.length} instances`,
    );
    return results;
  }

  private async loadProjectFrom(file: string): Promise<RojoProject> {
    let raw: string;
    try {
      raw = await fs.readFile(file, "utf-8");
    } catch (error) {
      throw new Error(`Rojo compatibility mode requires ${file} (not found).`);
    }

    try {
      const parsed = JSON.parse(raw) as RojoProject;
      if (!parsed || typeof parsed !== "object" || !parsed.tree) {
        throw new Error("Missing tree key");
      }
      return parsed;
    } catch (error) {
      throw new Error(`Failed to parse Rojo project file at ${file}: ${error}`);
    }
  }

  private prepareIgnoreMatchers(project: RojoProject): void {
    const defaults = [
      "**/.git/**",
      "**/.git",
      "**/.github/**",
      "**/sourcemap.json",
      "**/*.lock",
      "**/~$*",
    ];

    const user = Array.isArray(project.globIgnorePaths)
      ? project.globIgnorePaths
      : project.globIgnorePaths
        ? [project.globIgnorePaths]
        : [];

    const patterns = [...defaults, ...user];
    this.ignoreMatchers = patterns.map((p) => this.globToRegex(p));
  }

  private globToRegex(glob: string): RegExp {
    const escaped = glob.replace(/([|\\{}()\[\]^$+*?.])/g, "\\$1");

    const regex = escaped
      .replace(/\*\*/g, ".*")
      .replace(/\*/g, "[^/]*")
      .replace(/\?/g, "[^/]");

    return new RegExp(`^${regex}$`);
  }

  private isIgnored(absPath: string): boolean {
    const rel = path.relative(this.cwd, absPath).replace(/\\/g, "/");
    for (const matcher of this.ignoreMatchers) {
      if (matcher.test(rel)) {
        return true;
      }
    }
    return false;
  }

  private async walkTree(
    node: Record<string, any>,
    parentPath: string[],
    projectDir: string,
    results: InstanceData[],
  ): Promise<void> {
    for (const [name, value] of Object.entries(node)) {
      if (name.startsWith("$")) continue;
      if (typeof value !== "object" || value === null) continue;

      const pathSegments = [...this.destPrefix, ...parentPath, name];
      await this.emitNode(name, value, pathSegments, projectDir, results);
    }
  }

  public async parseModelFile(
    filePath: string,
    destPath: string[],
  ): Promise<InstanceData[]> {
    let raw: string;
    try {
      raw = await fs.readFile(filePath, "utf-8");
    } catch (error) {
      throw new Error(`Failed to read .model.json at ${filePath}: ${error}`);
    }

    let parsed: any;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      throw new Error(`Failed to parse .model.json at ${filePath}: ${error}`);
    }

    const results: InstanceData[] = [];
    const name = destPath[destPath.length - 1] || "Model";
    await this.parseModelNode(
      parsed,
      name,
      destPath,
      path.dirname(filePath),
      results,
    );
    return results;
  }

  private async parseModelNode(
    node: any,
    name: string,
    currentPath: string[],
    baseDir: string,
    results: InstanceData[],
  ): Promise<void> {
    if (typeof node !== "object" || node === null) return;

    const pathHint = node.$path || node.path;
    if (typeof pathHint === "string") {
      const absPath = path.resolve(baseDir, pathHint);
      const exists = await this.exists(absPath);
      if (!exists) {
        throw new Error(`$path target ${absPath} does not exist.`);
      }

      const kind = await this.pathKind(absPath);
      if (kind === "file") {
        const fileName = path.basename(absPath);
        if (isInstanceJsonName(fileName)) {
          const modelInstances = await this.parseModelFile(
            absPath,
            currentPath,
          );
          results.push(...modelInstances);
          return;
        } else if (this.isJsonModuleFile(fileName)) {
          const source = await this.readJsonModuleSource(absPath);
          this.moduleContainers.add(currentPath.join("/"));
          results.push({
            guid: this.makeGuid(),
            className: "ModuleScript",
            name,
            path: [...currentPath],
            source,
          });
          return;
        } else if (isScriptFileName(fileName)) {
          const { className } = classifyScriptFileName(fileName);
          const source = await fs.readFile(absPath, "utf-8");
          this.moduleContainers.add(currentPath.join("/"));
          results.push({
            guid: this.makeGuid(),
            className,
            name,
            path: [...currentPath],
            source,
          });
          return;
        } else {
          throw new Error(`Unsupported $path file type: ${absPath}`);
        }
      } else if (kind === "dir") {
        await this.walkDirectory(absPath, currentPath, results, new Set());
        return;
      }
    }

    const className =
      node.ClassName || node.className || node.$className || "Folder";

    const rawProperties =
      node.Properties || node.properties || node.$properties;
    const properties: Record<string, any> = {};
    if (rawProperties && typeof rawProperties === "object") {
      for (const [k, v] of Object.entries(rawProperties)) {
        properties[k] = convertImplicitRojoProperty(k, v);
      }
    }

    const rawAttributes =
      node.Attributes || node.attributes || node.$attributes;
    const attributes: Record<string, any> = {};
    if (rawAttributes && typeof rawAttributes === "object") {
      for (const [k, v] of Object.entries(rawAttributes)) {
        attributes[k] = convertImplicitRojoProperty(k, v);
      }
    }

    const rawTags = node.Tags || node.tags || node.$tags;
    let tags: string[] | undefined = undefined;
    if (Array.isArray(rawTags)) {
      tags = rawTags.map((t) => String(t));
    }

    const instance: InstanceData = {
      guid: this.makeGuid(),
      className,
      name,
      path: [...currentPath],
    };

    if (Object.keys(properties).length > 0) {
      instance.properties = properties;
    }
    if (Object.keys(attributes).length > 0) {
      instance.attributes = attributes;
    }
    if (tags && tags.length > 0) {
      instance.tags = tags;
    }

    this.moduleContainers.add(currentPath.join("/"));
    results.push(instance);

    const rawChildren = node.Children || node.children || node.$children;
    if (Array.isArray(rawChildren)) {
      for (let i = 0; i < rawChildren.length; i++) {
        const childNode = rawChildren[i];
        if (typeof childNode === "object" && childNode !== null) {
          const childName =
            childNode.Name ||
            childNode.name ||
            childNode.$name ||
            `Instance${i}`;
          const childPath = [...currentPath, childName];
          await this.parseModelNode(
            childNode,
            childName,
            childPath,
            baseDir,
            results,
          );
        }
      }
    } else if (rawChildren && typeof rawChildren === "object") {
      for (const [childName, childNode] of Object.entries(rawChildren)) {
        if (typeof childNode === "object" && childNode !== null) {
          const childPath = [...currentPath, childName];
          await this.parseModelNode(
            childNode,
            childName,
            childPath,
            baseDir,
            results,
          );
        }
      }
    }
  }

  private async emitNode(
    name: string,
    node: Record<string, any>,
    pathSegments: string[],
    projectDir: string,
    results: InstanceData[],
  ): Promise<void> {
    const className = this.resolveClassName(node, pathSegments);
    const pathHint = typeof node.$path === "string" ? node.$path : undefined;
    const absPath = pathHint ? path.resolve(projectDir, pathHint) : null;
    const definedChildren = new Set(
      Object.keys(node).filter((key) => !key.startsWith("$")),
    );
    const pathKind = absPath ? await this.pathKind(absPath) : null;

    let initScript: {
      fileName: string;
      source: string;
      className?: ScriptClassName;
    } | null = null;
    let initModelFile: string | null = null;

    if (absPath && pathKind === "dir") {
      const modelPath = path.join(absPath, "init.model.json");
      if (await this.exists(modelPath)) {
        initModelFile = modelPath;
      }
      initScript = await this.findInit(absPath);
    } else if (absPath && pathKind === "file") {
      const fileName = path.basename(absPath);
      if (isInstanceJsonName(fileName)) {
        this.ensureFolder(pathSegments.slice(0, -1), results);
        const modelInstances = await this.parseModelFile(absPath, pathSegments);
        if (modelInstances.length > 0) {
          const rootInstance = modelInstances[0];

          if (node.$className) {
            rootInstance.className = node.$className;
          }

          if (node.$properties) {
            const mergedProps = { ...(rootInstance.properties || {}) };
            for (const [k, v] of Object.entries(node.$properties)) {
              mergedProps[k] = convertImplicitRojoProperty(k, v);
            }
            rootInstance.properties = mergedProps;
          }

          if (node.$attributes) {
            const mergedAttrs = { ...(rootInstance.attributes || {}) };
            for (const [k, v] of Object.entries(node.$attributes)) {
              mergedAttrs[k] = convertImplicitRojoProperty(k, v);
            }
            rootInstance.attributes = mergedAttrs;
          }

          if (node.$tags) {
            const existingTags = new Set(rootInstance.tags || []);
            if (Array.isArray(node.$tags)) {
              for (const tag of node.$tags) {
                existingTags.add(String(tag));
              }
            }
            rootInstance.tags = [...existingTags];
          }

          results.push(...modelInstances);
        }

        for (const [childName, childValue] of Object.entries(node)) {
          if (childName.startsWith("$")) continue;
          if (typeof childValue !== "object" || childValue === null) continue;
          await this.emitNode(
            childName,
            childValue,
            [...pathSegments, childName],
            projectDir,
            results,
          );
        }
        return;
      } else if (this.isJsonModuleFile(fileName)) {
        const source = await this.readJsonModuleSource(absPath);
        initScript = { fileName, source, className: "ModuleScript" };
      } else {
        if (!isScriptFileName(fileName)) {
          throw new Error(`$path target ${absPath} is not a .lua/.luau file.`);
        }
        const source = await fs.readFile(absPath, "utf-8");
        initScript = { fileName, source };
      }
    }

    // If there's an init script or an init model file, the folder becomes that instance.
    if (initModelFile) {
      this.ensureFolder(pathSegments.slice(0, -1), results);
      this.moduleContainers.add(pathSegments.join("/"));

      const modelInstances = await this.parseModelFile(
        initModelFile,
        pathSegments,
      );
      if (modelInstances.length > 0) {
        const rootInstance = modelInstances[0];

        if (node.$className) {
          rootInstance.className = node.$className;
        }

        if (node.$properties) {
          const mergedProps = { ...(rootInstance.properties || {}) };
          for (const [k, v] of Object.entries(node.$properties)) {
            mergedProps[k] = convertImplicitRojoProperty(k, v);
          }
          rootInstance.properties = mergedProps;
        }

        if (node.$attributes) {
          const mergedAttrs = { ...(rootInstance.attributes || {}) };
          for (const [k, v] of Object.entries(node.$attributes)) {
            mergedAttrs[k] = convertImplicitRojoProperty(k, v);
          }
          rootInstance.attributes = mergedAttrs;
        }

        if (node.$tags) {
          const existingTags = new Set(rootInstance.tags || []);
          if (Array.isArray(node.$tags)) {
            for (const tag of node.$tags) {
              existingTags.add(String(tag));
            }
          }
          rootInstance.tags = [...existingTags];
        }

        if (initScript) {
          const scriptClass =
            initScript.className ??
            classifyScriptFileName(initScript.fileName).className;
          rootInstance.className = scriptClass;
          rootInstance.source = initScript.source;
        }

        results.push(...modelInstances);
      }
    }

    // If there's an init script, the folder becomes a ModuleScript at the same path.
    else if (initScript) {
      this.ensureFolder(pathSegments.slice(0, -1), results);
      this.moduleContainers.add(pathSegments.join("/"));
      const scriptClass =
        initScript.className ??
        classifyScriptFileName(initScript.fileName).className;
      results.push({
        guid: this.makeGuid(),
        className: scriptClass,
        name: pathSegments[pathSegments.length - 1],
        path: [...pathSegments],
        source: initScript.source,
      });
    }
    // If no special file (model or script) was found, emit a standard instance.
    else {
      this.ensureFolder(pathSegments.slice(0, -1), results);
      results.push({
        guid: this.makeGuid(),
        className,
        name,
        path: [...pathSegments],
      });
    }

    // Recurse into children defined in JSON
    for (const [childName, childValue] of Object.entries(node)) {
      if (childName.startsWith("$")) continue;
      if (typeof childValue !== "object" || childValue === null) continue;
      await this.emitNode(
        childName,
        childValue,
        [...pathSegments, childName],
        projectDir,
        results,
      );
    }

    // Walk filesystem for $path mappings
    if (absPath && pathKind === "dir") {
      await this.walkDirectory(absPath, pathSegments, results, definedChildren);
    }
  }

  private resolveClassName(
    node: Record<string, any>,
    pathSegments: string[],
  ): string {
    if (typeof node.$className === "string") {
      return node.$className;
    }
    if (pathSegments.length === 1) {
      // Service root
      return pathSegments[0];
    }
    return "Folder";
  }

  private async walkDirectory(
    dirPath: string,
    destPath: string[],
    results: InstanceData[],
    definedChildren: Set<string>,
  ): Promise<void> {
    if (this.isIgnored(dirPath)) return;

    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const initCandidates = this.getInitCandidates();

    // If this directory has an init, the directory becomes that script; children attach under it
    const initEntry = entries.find(
      (e) => e.isFile() && initCandidates.includes(e.name),
    );

    const initModelEntry = entries.find(
      (e) => e.isFile() && e.name === "init.model.json",
    );

    const handledEntries = new Set<string>();
    const key = destPath.join("/");

    if (initModelEntry) {
      handledEntries.add("init.model.json");
      if (!this.moduleContainers.has(key)) {
        this.moduleContainers.add(key);
        this.ensureFolder(destPath.slice(0, -1), results);

        const modelInstances = await this.parseModelFile(
          path.join(dirPath, "init.model.json"),
          destPath,
        );
        if (modelInstances.length > 0) {
          const rootInstance = modelInstances[0];
          if (initEntry) {
            handledEntries.add(initEntry.name);
            const scriptClass = classifyScriptFileName(
              initEntry.name,
            ).className;
            const source = await fs.readFile(
              path.join(dirPath, initEntry.name),
              "utf-8",
            );
            rootInstance.className = scriptClass;
            rootInstance.source = source;
          }
          results.push(...modelInstances);
        }
      }
    } else if (initEntry) {
      handledEntries.add(initEntry.name);
      if (!this.moduleContainers.has(key)) {
        this.moduleContainers.add(key);
        this.ensureFolder(destPath.slice(0, -1), results);
        const scriptClass = classifyScriptFileName(initEntry.name).className;
        const source = await fs.readFile(
          path.join(dirPath, initEntry.name),
          "utf-8",
        );
        results.push({
          guid: this.makeGuid(),
          className: scriptClass,
          name: destPath[destPath.length - 1] ?? path.basename(dirPath),
          path: [...destPath],
          source,
        });
      }
    } else {
      this.ensureFolder(destPath, results);
    }

    // Sub-project overrides
    const subProjectPath = path.join(dirPath, "default.project.json");
    if (await this.exists(subProjectPath)) {
      const previousProjectFile = this.projectFile;
      const previousIgnore = this.ignoreMatchers;
      this.projectFile = subProjectPath;

      const subProject = await this.loadProjectFrom(subProjectPath);
      this.prepareIgnoreMatchers(subProject);
      await this.walkTree(subProject.tree ?? {}, destPath, dirPath, results);

      this.projectFile = previousProjectFile;
      this.ignoreMatchers = previousIgnore;
      return;
    }

    for (const entry of entries) {
      if (handledEntries.has(entry.name)) continue;
      const fullPath = path.join(dirPath, entry.name);
      if (this.isIgnored(fullPath)) continue;

      // Skip entries explicitly defined in the project tree
      if (definedChildren.has(entry.name)) {
        continue;
      }

      if (
        entry.isFile() &&
        entry.name.endsWith(".model.json") &&
        entry.name !== "init.model.json"
      ) {
        handledEntries.add(entry.name);
        const baseName = entry.name.slice(0, -".model.json".length);
        if (definedChildren.has(baseName)) {
          continue;
        }

        this.ensureFolder(destPath, results);
        const modelInstances = await this.parseModelFile(fullPath, [
          ...destPath,
          baseName,
        ]);
        if (modelInstances.length > 0) {
          const rootInstance = modelInstances[0];
          const companionScript = entries.find(
            (e) =>
              e.isFile() &&
              isScriptFileName(e.name) &&
              classifyScriptFileName(e.name).scriptName === baseName,
          );
          if (companionScript) {
            handledEntries.add(companionScript.name);
            const scriptClass = classifyScriptFileName(
              companionScript.name,
            ).className;
            const source = await fs.readFile(
              path.join(dirPath, companionScript.name),
              "utf-8",
            );
            rootInstance.className = scriptClass;
            rootInstance.source = source;
          }
          results.push(...modelInstances);
        }
        continue;
      }

      if (entry.isDirectory()) {
        await this.walkDirectory(
          fullPath,
          [...destPath, entry.name],
          results,
          new Set(),
        );
        continue;
      }

      // Skip init files here (handled earlier)
      if (initCandidates.includes(entry.name)) {
        continue;
      }

      if (this.isJsonModuleFile(entry.name)) {
        const baseName = path.parse(entry.name).name;
        if (definedChildren.has(baseName)) {
          continue;
        }
        const source = await this.readJsonModuleSource(fullPath);
        this.ensureFolder(destPath, results);
        results.push({
          guid: this.makeGuid(),
          className: "ModuleScript",
          name: baseName,
          path: [...destPath, baseName],
          source,
        });
        continue;
      }

      if (isScriptFileName(entry.name)) {
        const baseName = path.parse(entry.name).name;
        if (definedChildren.has(baseName)) {
          continue;
        }
        const { className, scriptName } = classifyScriptFileName(entry.name);
        if (definedChildren.has(scriptName)) {
          continue;
        }
        const source = await fs.readFile(fullPath, "utf-8");
        this.ensureFolder(destPath, results);
        results.push({
          guid: this.makeGuid(),
          className,
          name: scriptName,
          path: [...destPath, scriptName],
          source,
        });
      } else if (isSyncableFile(entry.name)) {
        if (entry.name === "init.json") {
          continue;
        }
        const { className, instanceName } = classifyFileName(entry.name);
        if (definedChildren.has(instanceName)) {
          continue;
        }

        let extraData: any = {};
        try {
          const raw = await fs.readFile(fullPath, "utf-8");
          extraData = JSON.parse(raw);
        } catch (error) {
          log.warn(`Failed to parse JSON file ${fullPath}:`, error);
        }

        this.ensureFolder(destPath, results);
        results.push({
          guid: this.makeGuid(),
          className,
          name: instanceName,
          path: [...destPath, instanceName],
          properties: extraData.properties,
          attributes: extraData.attributes,
          tags: extraData.tags,
        });
      }
    }
  }

  /**
   * Ensure a Folder chain exists for the given path.
   */
  private ensureFolder(pathSegments: string[], results: InstanceData[]): void {
    if (pathSegments.length === 0) return;
    const key = pathSegments.join("/");
    if (this.moduleContainers.has(key)) return;
    if (this.emittedFolders.has(key)) return;
    this.ensureFolder(pathSegments.slice(0, -1), results);
    this.emittedFolders.add(key);
    results.push({
      guid: this.makeGuid(),
      className: "Folder",
      name: pathSegments[pathSegments.length - 1],
      path: [...pathSegments],
    });
  }

  /**
   * Finds an init script (init.lua, init.server.luau, etc.) in a directory.
   * @param dirPath
   * @returns The file name and source of the init script, or null if not found.
   */
  private async findInit(
    dirPath: string,
  ): Promise<{ fileName: string; source: string } | null> {
    const candidates = this.getInitCandidates();

    for (const candidate of candidates) {
      const full = path.join(dirPath, candidate);
      if (await this.exists(full)) {
        const source = await fs.readFile(full, "utf-8");
        return { fileName: candidate, source };
      }
    }

    return null;
  }

  /**
   * Returns a list of potential init script filenames.
   */
  private getInitCandidates(): string[] {
    const bases = ["init", "init.server", "init.legacy", "init.client", "init.local", "init.module"];

    const variants: string[] = [];
    for (const base of bases) {
      variants.push(`${base}.lua`, `${base}.luau`);
    }

    return [...new Set(variants)];
  }

  private isJsonModuleFile(fileName: string): boolean {
    if (!fileName.endsWith(".json")) return false;
    if (fileName === "default.project.json") return false;
    if (fileName.endsWith(".model.json")) return false;
    return true;
  }

  private async readJsonModuleSource(filePath: string): Promise<string> {
    let parsed: unknown;
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      parsed = JSON.parse(raw) as unknown;
    } catch (error) {
      throw new Error(`Failed to parse JSON module at ${filePath}: ${error}`);
    }

    return `return ${this.jsonToLuau(parsed, 0)}`;
  }

  private jsonToLuau(value: unknown, indent: number): string {
    if (value === null || value === undefined) {
      return "nil";
    }

    switch (typeof value) {
      case "string":
        return JSON.stringify(value);
      case "number":
      case "boolean":
        return String(value);
      case "object":
        break;
      default:
        return "nil";
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        return "{}";
      }

      const indentStr = "\t".repeat(indent);
      const childIndent = "\t".repeat(indent + 1);
      const parts = value.map(
        (entry) => `${childIndent}${this.jsonToLuau(entry, indent + 1)},`,
      );
      return `{
${parts.join("\n")}
${indentStr}}`;
    }

    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) {
      return "{}";
    }

    const indentStr = "\t".repeat(indent);
    const childIndent = "\t".repeat(indent + 1);
    const parts = entries.map(([key, entryValue]) => {
      const formattedKey = this.isLuaIdentifier(key)
        ? key
        : `[${JSON.stringify(key)}]`;
      return `${childIndent}${formattedKey} = ${this.jsonToLuau(
        entryValue,
        indent + 1,
      )},`;
    });

    return `{
${parts.join("\n")}
${indentStr}}`;
  }

  private isLuaIdentifier(value: string): boolean {
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(value)) return false;
    const keywords = new Set([
      "and",
      "break",
      "do",
      "else",
      "elseif",
      "end",
      "false",
      "for",
      "function",
      "if",
      "in",
      "local",
      "nil",
      "not",
      "or",
      "repeat",
      "return",
      "then",
      "true",
      "until",
      "while",
      "const",
      "export",
    ]);
    return !keywords.has(value);
  }

  private async exists(target: string): Promise<boolean> {
    try {
      await fs.access(target);
      return true;
    } catch {
      return false;
    }
  }

  private async pathKind(target: string): Promise<"file" | "dir" | null> {
    try {
      const stat = await fs.stat(target);
      if (stat.isDirectory()) return "dir";
      if (stat.isFile()) return "file";
      return null;
    } catch {
      return null;
    }
  }

  private makeGuid(): string {
    return randomUUID().replace(/-/g, "");
  }
}

``

# File: src\snapshot\rojo\convert.ts
``
function convertExplicitRojoProperty(typeStr: string, value: any): any {
  const normalizedType = typeStr.toLowerCase();
  if (normalizedType === "vector3") {
    if (Array.isArray(value) && value.length === 3) {
      return { __type: "Vector3", x: value[0], y: value[1], z: value[2] };
    }
    if (typeof value === "object" && value !== null) {
      return {
        __type: "Vector3",
        x: value.x ?? value.X ?? 0,
        y: value.y ?? value.Y ?? 0,
        z: value.z ?? value.Z ?? 0,
      };
    }
  }
  if (normalizedType === "vector2") {
    if (Array.isArray(value) && value.length === 2) {
      return { __type: "Vector2", x: value[0], y: value[1] };
    }
    if (typeof value === "object" && value !== null) {
      return {
        __type: "Vector2",
        x: value.x ?? value.X ?? 0,
        y: value.y ?? value.Y ?? 0,
      };
    }
  }
  if (normalizedType === "vector2int16") {
    if (Array.isArray(value) && value.length === 2) {
      return { __type: "Vector2int16", x: value[0], y: value[1] };
    }
  }
  if (normalizedType === "vector3int16") {
    if (Array.isArray(value) && value.length === 3) {
      return { __type: "Vector3int16", x: value[0], y: value[1], z: value[2] };
    }
  }
  if (normalizedType === "color3") {
    if (Array.isArray(value) && value.length === 3) {
      return { __type: "Color3", r: value[0], g: value[1], b: value[2] };
    }
  }
  if (normalizedType === "color3uint8") {
    if (Array.isArray(value) && value.length === 3) {
      return { __type: "Color3uint8", r: value[0], g: value[1], b: value[2] };
    }
  }
  if (normalizedType === "cframe") {
    if (Array.isArray(value)) {
      return { __type: "CFrame", components: value };
    }
  }
  if (normalizedType === "udim") {
    if (Array.isArray(value) && value.length === 2) {
      return { __type: "UDim", scale: value[0], offset: value[1] };
    }
  }
  if (normalizedType === "udim2") {
    if (Array.isArray(value) && value.length === 4) {
      return {
        __type: "UDim2",
        xScale: value[0],
        xOffset: value[1],
        yScale: value[2],
        yOffset: value[3],
      };
    }
  }
  if (normalizedType === "brickcolor") {
    return {
      __type: "BrickColor",
      number: typeof value === "number" ? value : 0,
    };
  }
  if (normalizedType === "numberrange") {
    if (Array.isArray(value) && value.length === 2) {
      return { __type: "NumberRange", min: value[0], max: value[1] };
    }
  }
  if (normalizedType === "numbersequence") {
    if (Array.isArray(value)) {
      const keypoints = value.map((kp: any) => {
        if (Array.isArray(kp)) {
          return { time: kp[0], value: kp[1], envelope: kp[2] ?? 0 };
        }
        if (typeof kp === "object" && kp !== null) {
          return {
            time: kp.time ?? kp.Time ?? 0,
            value: kp.value ?? kp.Value ?? 0,
            envelope: kp.envelope ?? kp.Envelope ?? 0,
          };
        }
        return { time: 0, value: Number(kp), envelope: 0 };
      });
      return { __type: "NumberSequence", keypoints };
    }
  }
  if (normalizedType === "colorsequence") {
    if (Array.isArray(value)) {
      const keypoints = value.map((kp: any) => {
        if (Array.isArray(kp)) {
          return {
            time: kp[0],
            value: [kp[1], kp[2], kp[3]],
            envelope: kp[4] ?? 0,
          };
        }
        if (typeof kp === "object" && kp !== null) {
          const c = kp.value ?? kp.Value;
          const color = Array.isArray(c) ? c : [1, 1, 1];
          return {
            time: kp.time ?? kp.Time ?? 0,
            value: color,
            envelope: kp.envelope ?? kp.Envelope ?? 0,
          };
        }
        return { time: 0, value: [1, 1, 1], envelope: 0 };
      });
      return { __type: "ColorSequence", keypoints };
    }
  }
  if (normalizedType === "rect") {
    if (Array.isArray(value)) {
      if (value.length === 4) {
        return {
          __type: "Rect",
          minX: value[0],
          minY: value[1],
          maxX: value[2],
          maxY: value[3],
        };
      }
      if (
        value.length === 2 &&
        Array.isArray(value[0]) &&
        Array.isArray(value[1])
      ) {
        return {
          __type: "Rect",
          minX: value[0][0],
          minY: value[0][1],
          maxX: value[1][0],
          maxY: value[1][1],
        };
      }
    }
  }
  if (normalizedType === "physicalproperties") {
    if (typeof value === "object" && value !== null) {
      return {
        __type: "PhysicalProperties",
        density: value.Density ?? value.density ?? 0.7,
        friction: value.Friction ?? value.friction ?? 0.5,
        elasticity: value.Elasticity ?? value.elasticity ?? 0.3,
        frictionWeight: value.FrictionWeight ?? value.frictionWeight ?? 1.0,
        elasticityWeight:
          value.ElasticityWeight ?? value.elasticityWeight ?? 1.0,
      };
    }
  }
  if (normalizedType === "axes") {
    if (typeof value === "object" && value !== null) {
      return {
        __type: "Axes",
        x: value.X ?? value.x ?? true,
        y: value.Y ?? value.y ?? true,
        z: value.Z ?? value.z ?? true,
      };
    }
  }
  if (normalizedType === "faces") {
    if (typeof value === "object" && value !== null) {
      return {
        __type: "Faces",
        top: value.Top ?? value.top ?? false,
        bottom: value.Bottom ?? value.bottom ?? false,
        left: value.Left ?? value.left ?? false,
        right: value.Right ?? value.right ?? false,
        front: value.Front ?? value.front ?? false,
        back: value.Back ?? value.back ?? false,
      };
    }
  }
  if (normalizedType === "ray") {
    if (typeof value === "object" && value !== null) {
      const originValue = value.origin ?? value.Origin;
      const directionValue = value.direction ?? value.Direction;
      const origin = Array.isArray(originValue)
        ? {
            __type: "Vector3",
            x: originValue[0],
            y: originValue[1],
            z: originValue[2],
          }
        : { __type: "Vector3", x: 0, y: 0, z: 0 };
      const direction = Array.isArray(directionValue)
        ? {
            __type: "Vector3",
            x: directionValue[0],
            y: directionValue[1],
            z: directionValue[2],
          }
        : { __type: "Vector3", x: 0, y: 0, z: 1 };
      return { __type: "Ray", origin, direction };
    }
  }
  if (normalizedType === "region3") {
    if (typeof value === "object" && value !== null) {
      const min = value.min ?? value.Min;
      const max = value.max ?? value.Max;
      return {
        __type: "Region3",
        min: Array.isArray(min)
          ? { x: min[0], y: min[1], z: min[2] }
          : (min ?? { x: 0, y: 0, z: 0 }),
        max: Array.isArray(max)
          ? { x: max[0], y: max[1], z: max[2] }
          : (max ?? { x: 0, y: 0, z: 0 }),
      };
    }
  }
  if (normalizedType === "region3int16") {
    if (typeof value === "object" && value !== null) {
      const min = value.min ?? value.Min;
      const max = value.max ?? value.Max;
      return {
        __type: "Region3int16",
        min: Array.isArray(min)
          ? { x: min[0], y: min[1], z: min[2] }
          : (min ?? { x: 0, y: 0, z: 0 }),
        max: Array.isArray(max)
          ? { x: max[0], y: max[1], z: max[2] }
          : (max ?? { x: 0, y: 0, z: 0 }),
      };
    }
  }
  if (normalizedType === "font") {
    if (typeof value === "object" && value !== null) {
      return {
        __type: "Font",
        family: value.Family ?? value.family ?? "",
        weight: value.Weight ?? value.weight ?? "Regular",
        style: value.Style ?? value.style ?? "Normal",
      };
    }
  }
  if (normalizedType === "tags") {
    if (Array.isArray(value)) {
      return { __type: "Tags", tags: value.map(String) };
    }
  }
  if (normalizedType === "enum") {
    if (typeof value === "object" && value !== null) {
      const enumType =
        value.enumType || value.EnumType || value.Type || value.type;
      const enumValue = value.value || value.Value || value.name || value.Name;
      if (enumType && enumValue !== undefined) {
        return {
          __type: "Enum",
          enumType: String(enumType).replace(/^Enum\./, ""),
          value: enumValue,
        };
      }
    }
    return value;
  }
  return value;
}

export function convertImplicitRojoProperty(propName: string, val: any): any {
  if (val === null || val === undefined) {
    return null;
  }
  if (
    typeof val === "object" &&
    !Array.isArray(val) &&
    "Type" in val &&
    "Value" in val
  ) {
    return convertExplicitRojoProperty(val.Type, val.Value);
  }
  if (
    typeof val === "object" &&
    !Array.isArray(val) &&
    "type" in val &&
    "value" in val
  ) {
    return convertExplicitRojoProperty(val.type, val.value);
  }

  if (typeof val === "string") {
    return val;
  }

  if (typeof val === "boolean") {
    return val;
  }

  if (typeof val === "number") {
    return val;
  }

  if (Array.isArray(val)) {
    const allStrings = val.every((v) => typeof v === "string");
    if (allStrings && val.length > 0) {
      return { __type: "Tags", tags: val.map(String) };
    }

    const allNumbers = val.every((v) => typeof v === "number");
    if (allNumbers) {
      const lowerName = propName.toLowerCase();
      if (val.length === 12) {
        return { __type: "CFrame", components: val };
      }
      if (val.length === 3) {
        if (lowerName.includes("color")) {
          if (val.some((v) => v > 1.0)) {
            return { __type: "Color3uint8", r: val[0], g: val[1], b: val[2] };
          }
          return { __type: "Color3", r: val[0], g: val[1], b: val[2] };
        }
        return { __type: "Vector3", x: val[0], y: val[1], z: val[2] };
      }
      if (val.length === 2) {
        if (lowerName.includes("range")) {
          return { __type: "NumberRange", min: val[0], max: val[1] };
        }
        if (
          lowerName.includes("udim") ||
          lowerName.includes("size") ||
          lowerName.includes("position")
        ) {
          return { __type: "UDim", scale: val[0], offset: val[1] };
        }
        return { __type: "Vector2", x: val[0], y: val[1] };
      }
      if (val.length === 4) {
        if (lowerName.includes("rect")) {
          return {
            __type: "Rect",
            minX: val[0],
            minY: val[1],
            maxX: val[2],
            maxY: val[3],
          };
        }
        return {
          __type: "UDim2",
          xScale: val[0],
          xOffset: val[1],
          yScale: val[2],
          yOffset: val[3],
        };
      }
    }

    const allArraysOfTwo = val.every(
      (v: any) =>
        Array.isArray(v) &&
        v.length >= 2 &&
        v.every((n: any) => typeof n === "number"),
    );
    if (allArraysOfTwo && val.length > 0) {
      const sampleLen = val[0].length;
      if (sampleLen <= 3) {
        return {
          __type: "NumberSequence",
          keypoints: val.map((kp: any) => ({
            time: kp[0],
            value: kp[1],
            envelope: kp[2] ?? 0,
          })),
        };
      }
      if (sampleLen >= 4) {
        return {
          __type: "ColorSequence",
          keypoints: val.map((kp: any) => ({
            time: kp[0],
            value: [kp[1], kp[2], kp[3]],
            envelope: kp[4] ?? 0,
          })),
        };
      }
    }

    const allKeypointObjects = val.every(
      (v: any) =>
        typeof v === "object" &&
        v !== null &&
        !Array.isArray(v) &&
        ("time" in v || "Time" in v) &&
        ("value" in v || "Value" in v),
    );
    if (allKeypointObjects && val.length > 0) {
      const first = val[0];
      const colorVal = first.value ?? first.Value;
      if (Array.isArray(colorVal) && colorVal.length === 3) {
        return {
          __type: "ColorSequence",
          keypoints: val.map((kp: any) => {
            const resolvedValue = kp.value ?? kp.Value;

            return {
              time: kp.time ?? kp.Time ?? 0,
              value: Array.isArray(resolvedValue)
                ? [resolvedValue[0], resolvedValue[1], resolvedValue[2]]
                : [1, 1, 1],
              envelope: kp.envelope ?? kp.Envelope ?? 0,
            };
          }),
        };
      }
      return {
        __type: "NumberSequence",
        keypoints: val.map((kp: any) => ({
          time: kp.time ?? kp.Time ?? 0,
          value: kp.value ?? kp.Value ?? 0,
          envelope: kp.envelope ?? kp.Envelope ?? 0,
        })),
      };
    }
  }

  if (typeof val === "object" && val !== null) {
    if ("family" in val || "Family" in val) {
      return {
        __type: "Font",
        family: val.Family ?? val.family ?? "",
        weight: val.Weight ?? val.weight ?? "Regular",
        style: val.Style ?? val.style ?? "Normal",
      };
    }

    const copy: Record<string, any> = {};
    for (const [k, v] of Object.entries(val)) {
      copy[k] = convertImplicitRojoProperty(k, v);
    }
    return copy;
  }

  return val;
}

``

# File: src\snapshot\rojo\index.ts
``
export { RojoSnapshotBuilder } from "./builder.js";
export type { RojoSnapshotOptions } from "./builder.js";

``

# File: src\sourcemap\generator.ts
``
import * as fs from "fs";
import * as path from "path";
import { TreeNode } from "../fs/treeManager.js";
import { FileMapping } from "../fs/fileWriter.js";
import { log } from "../util/log.js";

/**
 * Rojo-compatible sourcemap tree structure
 */
interface SourcemapNode {
  name: string;
  className: string;
  guid?: string;
  filePaths?: string[];
  children?: SourcemapNode[];
}

interface SourcemapRoot {
  name: string;
  className: string;
  children: SourcemapNode[];
}

/**
 * Generates Rojo-compatible sourcemap.json for luau-lsp
 */
export class SourcemapGenerator {
  constructor() {}

  private sortTreeNodes(nodes: Iterable<TreeNode>): TreeNode[] {
    return Array.from(nodes).sort((a, b) => {
      const nameCompare = a.name.localeCompare(b.name);
      if (nameCompare !== 0) return nameCompare;

      const classCompare = a.className.localeCompare(b.className);
      if (classCompare !== 0) return classCompare;

      return a.guid.localeCompare(b.guid);
    });
  }

  private getDuplicatePaths(
    nodes: Map<string, TreeNode>,
  ): { path: string[]; nodes: TreeNode[] }[] {
    const buckets = new Map<string, TreeNode[]>();

    for (const node of nodes.values()) {
      const key = node.path.join("\u0001");
      const bucket = buckets.get(key) ?? [];
      bucket.push(node);
      buckets.set(key, bucket);
    }

    const duplicates: { path: string[]; nodes: TreeNode[] }[] = [];
    for (const [key, bucket] of buckets.entries()) {
      if (bucket.length > 1) {
        duplicates.push({ path: key.split("\u0001"), nodes: bucket });
      }
    }

    return duplicates;
  }

  private findRootNode(nodes: Map<string, TreeNode>): TreeNode | null {
    const root = nodes.get("root");
    if (root) {
      return root;
    }

    for (const node of nodes.values()) {
      if (node.path.length === 0 && node.className === "DataModel") {
        return node;
      }
    }

    return null;
  }

  /**
   * Incrementally upsert a subtree into the sourcemap, optionally removing the old path first.
   * Falls back to full regeneration if anything goes wrong.
   */
  public upsertSubtree(
    node: TreeNode,
    allNodes: Map<string, TreeNode>,
    fileMappings: Map<string, FileMapping>,
    outputPath: string,
    oldPath?: string[],
    isNew?: boolean,
  ): void {
    const duplicates = this.getDuplicatePaths(allNodes);
    if (duplicates.length > 0) {
      log.debug(
        `Duplicate instance paths detected (${duplicates.length}); proceeding with GUID-based incremental update`,
      );
    }

    try {
      const sourcemap = this.readOrCreateRoot(outputPath);

      // If the node moved/renamed, prune the previous location
      if (oldPath && !this.pathsMatch(oldPath, node.path)) {
        this.removePath(sourcemap, oldPath, node.className, node.guid);
      }

      const newSubtree = this.buildNodeFromTree(node, fileMappings);
      if (newSubtree) {
        this.insertNodeAtPath(
          sourcemap,
          newSubtree,
          node.path,
          allNodes,
          Boolean(isNew),
        );
        this.write(sourcemap, outputPath);
      }
    } catch (error) {
      log.warn("Incremental sourcemap update failed, regenerating:", error);
      this.generateAndWrite(allNodes, fileMappings, outputPath);
    }
  }

  /**
   * Generate complete sourcemap from tree and file mappings
   */
  public generate(
    nodes: Map<string, TreeNode>,
    fileMappings: Map<string, FileMapping>,
  ): SourcemapRoot {
    log.info("Generating sourcemap...");
    log.debug(
      `Total nodes: ${nodes.size}, File mappings: ${fileMappings.size}`,
    );

    const rootNode = this.findRootNode(nodes);
    const serviceNodes = rootNode
      ? this.sortTreeNodes(rootNode.children.values())
      : this.sortTreeNodes(
          Array.from(nodes.values()).filter((node) => node.path.length === 1),
        );

    const visited = new Set<string>();
    const children: SourcemapNode[] = [];

    for (const serviceNode of serviceNodes) {
      const built = this.buildNodeFromTree(
        serviceNode,
        fileMappings,
        visited,
        process.cwd(),
      );
      if (built) {
        children.push(built);
      }
    }

    const sourcemap: SourcemapRoot = {
      name: "Game",
      className: "DataModel",
      children,
    };

    log.success(`Sourcemap generated with ${children.length} root services`);
    return sourcemap;
  }

  /**
   * Write sourcemap to file
   */
  public write(
    sourcemap: SourcemapRoot,
    outputPath: string = "sourcemap.json",
  ): void {
    try {
      // Ensure destination directory exists
      const dir = path.dirname(outputPath);
      if (dir && dir !== "." && !fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const json = JSON.stringify(sourcemap, null, 2);
      fs.writeFileSync(outputPath, json, "utf-8");
      log.debug(`Sourcemap written to: ${outputPath}`);
    } catch (error) {
      log.error("Failed to write sourcemap:", error);
    }
  }

  /**
   * Check if two paths match
   */
  private pathsMatch(path1: string[], path2: string[]): boolean {
    if (path1.length !== path2.length) return false;
    return path1.every((segment, i) => segment === path2[i]);
  }

  /**
   * Build a SourcemapNode from a TreeNode, recursively including children.
   */
  private buildNodeFromTree(
    node: TreeNode,
    fileMappings: Map<string, FileMapping>,
    visited: Set<string> = new Set(),
    cwd = process.cwd(),
  ): SourcemapNode | null {
    if (visited.has(node.guid)) {
      log.debug(
        `Detected cyclic path in sourcemap generation: ${node.path.join("/")}`,
      );
      return null;
    }
    visited.add(node.guid);

    const result: SourcemapNode = {
      name: node.name,
      className: node.className,
      guid: node.guid,
    };

    const mapping = fileMappings.get(node.guid);
    if (mapping) {
      const relativePath = path.relative(cwd, mapping.filePath);
      result.filePaths = [relativePath.replace(/\\/g, "/")];
    }

    const sortedChildren = this.sortTreeNodes(node.children.values());
    const children: SourcemapNode[] = [];
    for (const child of sortedChildren) {
      const built = this.buildNodeFromTree(child, fileMappings, visited, cwd);
      if (built) {
        children.push(built);
      }
    }

    if (children.length > 0) {
      result.children = children;
    }

    return result;
  }

  /**
   * Read an existing sourcemap or create a new root.
   */
  private readOrCreateRoot(outputPath: string): SourcemapRoot {
    if (fs.existsSync(outputPath)) {
      try {
        const raw = fs.readFileSync(outputPath, "utf-8");
        return JSON.parse(raw) as SourcemapRoot;
      } catch (error) {
        log.warn("Failed to read existing sourcemap, recreating:", error);
      }
    }

    return {
      name: "Game",
      className: "DataModel",
      children: [],
    };
  }

  /**
   * Insert or replace a subtree at the given path, creating intermediate parents as needed.
   */
  private insertNodeAtPath(
    root: SourcemapRoot,
    newNode: SourcemapNode,
    pathSegments: string[],
    allNodes: Map<string, TreeNode>,
    isNewEntry: boolean,
  ): void {
    if (pathSegments.length === 0) return;

    let currentChildren = root.children;

    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      const ancestorNode = this.findNodeByPath(
        allNodes,
        pathSegments.slice(0, i + 1),
      );
      const ancestorGuid = ancestorNode?.guid;

      let existingIndex = ancestorGuid
        ? currentChildren.findIndex((n) => (n as any).guid === ancestorGuid)
        : currentChildren.findIndex((n) => n.name === segment);

      if (i === pathSegments.length - 1) {
        const guidIndex = (newNode as any).guid
          ? currentChildren.findIndex(
              (n) => (n as any).guid === (newNode as any).guid,
            )
          : -1;

        if (guidIndex !== -1) {
          currentChildren.splice(guidIndex, 1, newNode);
          return;
        }

        if (isNewEntry) {
          // Appending preserves siblings with identical names/classes from being merged
          currentChildren.push(newNode);
          return;
        }

        existingIndex = currentChildren.findIndex(
          (n) => n.name === segment && n.className === newNode.className,
        );

        if (existingIndex !== -1) {
          currentChildren.splice(existingIndex, 1, newNode);
        } else {
          currentChildren.push(newNode);
        }
        return;
      }

      if (existingIndex === -1) {
        const className = ancestorNode?.className ?? "Folder";
        const placeholder: SourcemapNode = {
          name: segment,
          className,
          guid: ancestorGuid,
          children: [],
        };
        currentChildren.push(placeholder);
        existingIndex = currentChildren.length - 1;
      }

      const holder = currentChildren[existingIndex];
      if (!holder.children) {
        holder.children = [];
      }

      currentChildren = holder.children;
    }
  }

  private findNodeByPath(
    nodes: Map<string, TreeNode>,
    pathSegments: string[],
  ): TreeNode | undefined {
    for (const node of nodes.values()) {
      if (this.pathsMatch(node.path, pathSegments)) {
        return node;
      }
    }
    return undefined;
  }

  /**
   * Generate and write sourcemap in one call
   */
  public generateAndWrite(
    nodes: Map<string, TreeNode>,
    fileMappings: Map<string, FileMapping>,
    outputPath: string = "sourcemap.json",
  ): void {
    const sourcemap = this.generate(nodes, fileMappings);
    this.write(sourcemap, outputPath);
  }

  /**
   * Remove a node (and now-empty ancestors) from an existing sourcemap file by path.
   * Falls back to full regeneration if the file is missing or malformed.
   */
  public prunePath(
    pathSegments: string[],
    outputPath: string,
    nodes: Map<string, TreeNode>,
    fileMappings: Map<string, FileMapping>,
    targetClassName?: string,
    targetGuid?: string,
  ): boolean {
    try {
      if (!fs.existsSync(outputPath)) {
        this.generateAndWrite(nodes, fileMappings, outputPath);
        return true;
      }

      const raw = fs.readFileSync(outputPath, "utf-8");
      const json = JSON.parse(raw) as SourcemapRoot;

      const removed = this.removePath(
        json,
        pathSegments,
        targetClassName,
        targetGuid,
      );
      if (removed) {
        this.write(json, outputPath);
      }
      return removed;
    } catch (error) {
      log.warn("Prune failed, regenerating sourcemap:", error);
      this.generateAndWrite(nodes, fileMappings, outputPath);
      return true;
    }
  }

  /**
   * Remove node matching path; prune empty parents.
   */
  private removePath(
    root: SourcemapRoot,
    pathSegments: string[],
    targetClassName?: string,
    targetGuid?: string,
  ): boolean {
    if (pathSegments.length === 0) return false;

    const pruneRecursive = (
      nodes: SourcemapNode[] | undefined,
      idx: number,
    ): boolean => {
      if (!nodes) return false;
      const name = pathSegments[idx];
      const isTerminal = idx === pathSegments.length - 1;

      let nodeIndex = -1;

      if (isTerminal) {
        // Prefer a strict GUID match: it uniquely identifies the instance even
        // when same-name siblings exist. This avoids pruning the wrong sibling.
        if (targetGuid) {
          nodeIndex = nodes.findIndex((n) => (n as any).guid === targetGuid);

          // If any sibling at this level carries a GUID but none match the
          // target, we must NOT fall back to name matching (that could delete
          // an unrelated same-name sibling). Report a miss so the caller can
          // safely rebuild.
          if (nodeIndex === -1) {
            const anyGuidPresent = nodes.some((n) => Boolean((n as any).guid));
            if (anyGuidPresent) {
              return false;
            }
          }
        }

        // No GUID available (older sourcemap entries) — fall back to name and,
        // when possible, class matching.
        if (nodeIndex === -1) {
          if (targetClassName) {
            nodeIndex = nodes.findIndex(
              (n) => n.name === name && n.className === targetClassName,
            );
          }
          if (nodeIndex === -1) {
            nodeIndex = nodes.findIndex((n) => n.name === name);
          }
        }
      } else {
        // Intermediate ancestor: match by name (path descent).
        nodeIndex = nodes.findIndex((n) => n.name === name);
      }

      if (nodeIndex === -1) return false;

      const node = nodes[nodeIndex];

      if (isTerminal) {
        // Remove the entire subtree
        nodes.splice(nodeIndex, 1);
        return true;
      }

      const removed = pruneRecursive(node.children, idx + 1);

      // Clean up empty child containers
      if (
        removed &&
        node.children &&
        node.children.length === 0 &&
        !node.filePaths
      ) {
        nodes.splice(nodeIndex, 1);
      }

      return removed;
    };

    return pruneRecursive(root.children, 0);
  }

  /**
   * Validate that all paths in sourcemap point to existing files
   */
  public validate(sourcemap: SourcemapRoot): {
    valid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    const checkNode = (node: SourcemapNode) => {
      if (node.filePaths) {
        for (const filePath of node.filePaths) {
          const fullPath = path.resolve(process.cwd(), filePath);
          if (!fs.existsSync(fullPath)) {
            errors.push(`Missing file: ${filePath}`);
          }
        }
      }

      if (node.children) {
        for (const child of node.children) {
          checkNode(child);
        }
      }
    };

    for (const child of sourcemap.children) {
      checkNode(child);
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}

``

# File: src\sourcemap\propertyLoader.ts
``
import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { log } from "../util/log.js";
import {
  isScriptClassName,
  stripScriptDisambiguationSuffix,
} from "../util/scriptFile.js";
import type { InstanceData } from "../ipc/messages.js";

interface SourcemapNode {
  name: string;
  className: string;
  guid?: string;
  properties?: Record<string, unknown>;
  attributes?: Record<string, unknown>;
  tags?: string[];
  children?: SourcemapNode[];
  filePaths?: string[];
}

interface SourcemapRoot {
  name: string;
  className: string;
  children: SourcemapNode[];
}

// Interface for efficient lookup of sourcemap nodes by guid, path+class, or file path
export interface SourcemapPropertyIndex {
  byGuid: Map<string, SourcemapNode>;
  byPathClass: Map<string, SourcemapNode[]>;
  byFilePath: Map<string, SourcemapNode>;
}

const pathClassKey = (segments: string[], className: string): string =>
  `${segments.join("\u0001")}::${className}`;

const normalizeNodeName = (node: SourcemapNode): string =>
  isScriptClassName(node.className)
    ? stripScriptDisambiguationSuffix(node.name)
    : node.name;

export function loadSourcemapPropertyIndex(
  sourcemapPath: string,
): SourcemapPropertyIndex | null {
  const resolved = path.resolve(sourcemapPath);
  if (!fs.existsSync(resolved)) {
    log.debug(`No sourcemap found at ${resolved}; skipping property merge.`);
    return null;
  }

  let root: SourcemapRoot;
  try {
    const raw = fs.readFileSync(resolved, "utf8");
    root = JSON.parse(raw) as SourcemapRoot;
  } catch (error) {
    log.warn(`Failed to read sourcemap at ${resolved}: ${error}`);
    return null;
  }

  const byGuid = new Map<string, SourcemapNode>();
  const byPathClass = new Map<string, SourcemapNode[]>();
  const byFilePath = new Map<string, SourcemapNode>();

  const visit = (node: SourcemapNode, currentPath: string[]) => {
    const nodeName = normalizeNodeName(node);
    const nodePath = [...currentPath, nodeName];

    if (node.guid) {
      byGuid.set(node.guid, node);
    }

    const key = pathClassKey(nodePath, node.className);
    const bucket = byPathClass.get(key) ?? [];
    bucket.push(node);
    byPathClass.set(key, bucket);

    if (node.filePaths) {
      for (const filePath of node.filePaths) {
        const resolvedPath = path.resolve(filePath);
        byFilePath.set(resolvedPath, node);
      }
    }

    for (const child of node.children ?? []) {
      visit(child, nodePath);
    }
  };

  for (const child of root.children ?? []) {
    visit(child, []);
  }

  return { byGuid, byPathClass, byFilePath };
}

/**
 * Applies properties/attributes/tags from a sourcemap index to a set of instances based on matching guid or path+class.
 * @param instances
 * @param index
 * @returns
 */
export function applySourcemapProperties(
  instances: InstanceData[],
  index: SourcemapPropertyIndex | null,
): number {
  if (!index) return 0;

  let applied = 0;
  for (const instance of instances) {
    const match = findNodeForInstance(instance, index);
    if (!match) continue;

    const hasProps =
      match.properties && Object.keys(match.properties).length > 0;
    const hasAttrs =
      match.attributes && Object.keys(match.attributes).length > 0;
    const hasTags = match.tags && match.tags.length > 0;

    if (!hasProps && !hasAttrs && !hasTags) continue;

    if (hasProps) {
      instance.properties = match.properties;
    }

    if (hasAttrs) {
      instance.attributes = match.attributes;
    }

    if (hasTags) {
      instance.tags = match.tags;
    }

    applied += 1;
  }

  if (applied > 0) {
    log.success(
      `Applied properties from sourcemap to ${applied} instance(s) for ${instances.length} total instances.`,
    );
  }

  return applied;
}

export function buildInstancesFromSourcemap(
  sourcemapPath: string,
): InstanceData[] | null {
  const resolvedSourcemap = path.resolve(sourcemapPath);
  if (!fs.existsSync(resolvedSourcemap)) {
    log.error(`Sourcemap not found at ${resolvedSourcemap}`);
    return null;
  }

  let root: SourcemapRoot;
  try {
    const raw = fs.readFileSync(resolvedSourcemap, "utf8");
    root = JSON.parse(raw) as SourcemapRoot;
  } catch (error) {
    log.error(`Failed to parse sourcemap at ${resolvedSourcemap}: ${error}`);
    return null;
  }

  const results: InstanceData[] = [];

  const visit = (
    node: SourcemapNode,
    currentPath: string[],
    parentGuid?: string,
  ) => {
    const nodeName = normalizeNodeName(node);
    const nodePath = [...currentPath, nodeName];
    const guid = node.guid ?? randomUUID().replace(/-/g, "");

    const instance: InstanceData = {
      guid,
      className: node.className,
      name: nodeName,
      path: nodePath,
      parentGuid,
    };

    if (node.properties) instance.properties = node.properties;
    if (node.attributes) instance.attributes = node.attributes;
    if (node.tags) instance.tags = node.tags;

    const isScript = isScriptClassName(node.className);

    if (isScript && node.filePaths && node.filePaths.length > 0) {
      const scriptPath = path.resolve(process.cwd(), node.filePaths[0]);
      try {
        instance.source = fs.readFileSync(scriptPath, "utf8");
      } catch (error) {
        log.warn(
          `Failed to read script file for ${nodePath.join("/")}: ${error}`,
        );
      }
    }

    results.push(instance);

    for (const child of node.children ?? []) {
      visit(child, nodePath, guid);
    }
  };

  for (const child of root.children ?? []) {
    visit(child, []);
  }

  results.sort((a, b) => a.path.length - b.path.length);
  return results;
}

function findNodeForInstance(
  instance: InstanceData,
  index: SourcemapPropertyIndex,
): SourcemapNode | null {
  if (instance.guid) {
    const byGuid = index.byGuid.get(instance.guid);
    if (byGuid) return byGuid;
  }

  const key = pathClassKey(instance.path, instance.className);
  const bucket = index.byPathClass.get(key);
  if (!bucket || bucket.length === 0) return null;

  if (bucket.length === 1) return bucket[0];

  // Prefer a node that also carries a guid to reduce ambiguity
  return bucket.find((node) => Boolean(node.guid)) ?? bucket[0];
}

export function findNodeForFilepath(
  filepath: string,
  index: SourcemapPropertyIndex | null,
): SourcemapNode | null {
  if (!index) return null;

  const resolvedPath = path.resolve(filepath);
  return index.byFilePath.get(resolvedPath) ?? null;
}

``

# File: src\tests\daemon.test.ts
``
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { SyncDaemon } from "../index.js";
import { config } from "../config.js";

function makeTempDir(prefix = "azul-test-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("fullSnapshot writes scripts, generates sourcemap, and removes orphans", async () => {
  const tmp = makeTempDir();
  const prevSyncDir = config.syncDir;
  const prevSourcemapPath = config.sourcemapPath;
  const prevPort = config.port;
  const prevDeleteOrphansOnConnect = config.deleteOrphansOnConnect;
  let daemon: SyncDaemon | undefined;
  try {
    // Configure daemon to use our temp dir and an ephemeral port
    config.syncDir = tmp;
    config.sourcemapPath = path.join(tmp, "sourcemap.json");
    config.port = 0;
    config.deleteOrphansOnConnect = true;

    // Create an orphan file that should be removed on snapshot
    const orphanDir = path.join(tmp, "extra");
    fs.mkdirSync(orphanDir, { recursive: true });
    const orphanPath = path.join(orphanDir, "orphan.luau");
    fs.writeFileSync(orphanPath, "print('i am orphan')", "utf8");
    assert.ok(fs.existsSync(orphanPath), "orphan created");

    daemon = new SyncDaemon();

    const instances = [
      {
        guid: "r1",
        className: "Folder",
        name: "ReplicatedStorage",
        path: ["ReplicatedStorage"],
      },
      {
        guid: "m1",
        className: "Folder",
        name: "Modules",
        path: ["ReplicatedStorage", "Modules"],
      },
      {
        guid: "s1",
        className: "ModuleScript",
        name: "Foo",
        path: ["ReplicatedStorage", "Modules", "Foo"],
        source: "print('hello')",
      },
    ];

    // Send full snapshot
    (daemon as any).handleStudioMessage({
      type: "fullSnapshot",
      data: instances,
    });

    const expectedFile = path.join(
      tmp,
      "ReplicatedStorage",
      "Modules",
      "Foo.luau",
    );
    assert.ok(fs.existsSync(expectedFile), "script file was written");

    assert.ok(fs.existsSync(config.sourcemapPath), "sourcemap was generated");
    const sourcemap = JSON.parse(fs.readFileSync(config.sourcemapPath, "utf8"));
    assert.strictEqual(sourcemap.name, "Game");

    // Orphan file should have been removed
    assert.strictEqual(fs.existsSync(orphanPath), false, "orphan file removed");
  } finally {
    await daemon?.stop();
    config.syncDir = prevSyncDir;
    config.sourcemapPath = prevSourcemapPath;
    config.port = prevPort;
    config.deleteOrphansOnConnect = prevDeleteOrphansOnConnect;
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test("scriptChanged creates file when node missing", async () => {
  const tmp = makeTempDir();
  const prevSyncDir = config.syncDir;
  const prevSourcemapPath = config.sourcemapPath;
  const prevPort = config.port;
  let daemon: SyncDaemon | undefined;
  try {
    config.syncDir = tmp;
    config.sourcemapPath = path.join(tmp, "sourcemap.json");
    config.port = 0;

    daemon = new SyncDaemon();

    const msg = {
      type: "scriptChanged",
      data: {
        guid: "new1",
        path: ["ReplicatedStorage", "Modules", "Bar"],
        className: "ModuleScript",
        source: "print('bar')",
      },
    } as any;

    (daemon as any).handleStudioMessage(msg);

    const expected = path.join(tmp, "ReplicatedStorage", "Modules", "Bar.luau");
    assert.ok(fs.existsSync(expected), "scriptChanged created file");
  } finally {
    await daemon?.stop();
    config.syncDir = prevSyncDir;
    config.sourcemapPath = prevSourcemapPath;
    config.port = prevPort;
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test("deleted removes files and updates sourcemap", async () => {
  const tmp = makeTempDir();
  const prevSyncDir = config.syncDir;
  const prevSourcemapPath = config.sourcemapPath;
  const prevPort = config.port;
  let daemon: SyncDaemon | undefined;
  try {
    config.syncDir = tmp;
    config.sourcemapPath = path.join(tmp, "sourcemap.json");
    config.port = 0;

    daemon = new SyncDaemon();

    // Create snapshot with one script
    const instances = [
      {
        guid: "r1",
        className: "Folder",
        name: "ReplicatedStorage",
        path: ["ReplicatedStorage"],
      },
      {
        guid: "m1",
        className: "Folder",
        name: "Modules",
        path: ["ReplicatedStorage", "Modules"],
      },
      {
        guid: "sdel",
        className: "ModuleScript",
        name: "ToDelete",
        path: ["ReplicatedStorage", "Modules", "ToDelete"],
        source: "print('bye')",
      },
    ];

    (daemon as any).handleStudioMessage({
      type: "fullSnapshot",
      data: instances,
    });
    const filePath = path.join(
      tmp,
      "ReplicatedStorage",
      "Modules",
      "ToDelete.luau",
    );
    assert.ok(fs.existsSync(filePath), "initial file exists");
    assert.ok(fs.existsSync(config.sourcemapPath), "sourcemap exists");

    // Send delete
    (daemon as any).handleStudioMessage({
      type: "deleted",
      data: { guid: "sdel" },
    });

    // File should be removed
    assert.strictEqual(fs.existsSync(filePath), false, "file was deleted");

    // Sourcemap should also be pruned for the deleted node/path
    const sourcemapRaw = fs.readFileSync(config.sourcemapPath, "utf8");
    const sourcemap = JSON.parse(sourcemapRaw);
    assert.notStrictEqual(sourcemapRaw.includes('"guid": "sdel"'), true);
    assert.notStrictEqual(sourcemapRaw.includes('"name": "ToDelete"'), true);
    const hasDeletedPath = (node: any, pathSegments: string[]): boolean => {
      if (!node || !Array.isArray(node.children)) return false;
      for (const child of node.children) {
        if (child.name === pathSegments[0]) {
          if (pathSegments.length === 1) return true;
          if (hasDeletedPath(child, pathSegments.slice(1))) return true;
        }
        if (hasDeletedPath(child, pathSegments)) return true;
      }
      return false;
    };
    assert.strictEqual(
      hasDeletedPath(sourcemap, ["ReplicatedStorage", "Modules", "ToDelete"]),
      false,
      "deleted path removed from sourcemap",
    );
  } finally {
    await daemon?.stop();
    config.syncDir = prevSyncDir;
    config.sourcemapPath = prevSourcemapPath;
    config.port = prevPort;
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test("filesystem-initiated file creation (add event) triggers instanceUpdated message", async () => {
  const tmp = makeTempDir();
  const prevSyncDir = config.syncDir;
  const prevSourcemapPath = config.sourcemapPath;
  const prevPort = config.port;
  let daemon: SyncDaemon | undefined;
  try {
    config.syncDir = tmp;
    config.sourcemapPath = path.join(tmp, "sourcemap.json");
    config.port = 0;

    daemon = new SyncDaemon();

    const sentMessages: any[] = [];
    (daemon as any).ipc.send = (msg: any) => {
      sentMessages.push(msg);
      return true;
    };

    const newFilePath = path.join(tmp, "ReplicatedStorage", "NewScript.server.lua");
    fs.mkdirSync(path.dirname(newFilePath), { recursive: true });
    fs.writeFileSync(newFilePath, "print('hello world')", "utf8");

    (daemon as any).handleFsEvent("add", newFilePath, "print('hello world')");

    const folderMsg = sentMessages.find(
      (m: any) => m.type === "instanceUpdated" && m.data.className === "Folder" && m.data.name === "ReplicatedStorage"
    );
    const scriptMsg = sentMessages.find(
      (m: any) => m.type === "instanceUpdated" && m.data.className === "Script" && m.data.name === "NewScript"
    );

    assert.ok(folderMsg, "folder creation message sent");
    assert.ok(scriptMsg, "script creation message sent");
    assert.deepStrictEqual(scriptMsg.data.path, ["ReplicatedStorage", "NewScript"]);
    assert.strictEqual(scriptMsg.data.source, "print('hello world')");

    const treeNode = (daemon as any).tree.getNode(scriptMsg.data.guid);
    assert.ok(treeNode, "tree node created in memory");
    assert.strictEqual(treeNode.name, "NewScript");
    assert.strictEqual(treeNode.source, "print('hello world')");
  } finally {
    await daemon?.stop();
    config.syncDir = prevSyncDir;
    config.sourcemapPath = prevSourcemapPath;
    config.port = prevPort;
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test("filesystem-initiated file deletion (unlink event) triggers deleted message", async () => {
  const tmp = makeTempDir();
  const prevSyncDir = config.syncDir;
  const prevSourcemapPath = config.sourcemapPath;
  const prevPort = config.port;
  let daemon: SyncDaemon | undefined;
  try {
    config.syncDir = tmp;
    config.sourcemapPath = path.join(tmp, "sourcemap.json");
    config.port = 0;

    daemon = new SyncDaemon();

    const instances = [
      {
        guid: "r1",
        className: "Folder",
        name: "ReplicatedStorage",
        path: ["ReplicatedStorage"],
      },
      {
        guid: "s1",
        className: "Script",
        name: "ToDelete",
        path: ["ReplicatedStorage", "ToDelete"],
        source: "print('delete me')",
      },
    ];
    (daemon as any).handleStudioMessage({
      type: "fullSnapshot",
      data: instances,
    });

    const scriptPath = path.join(tmp, "ReplicatedStorage", "ToDelete.server.luau");
    assert.ok(fs.existsSync(scriptPath), "script path was written");

    const sentMessages: any[] = [];
    (daemon as any).ipc.send = (msg: any) => {
      sentMessages.push(msg);
      return true;
    };

    fs.unlinkSync(scriptPath);
    (daemon as any).handleFsEvent("unlink", scriptPath);

    const deletedMsg = sentMessages.find(
      (m: any) => m.type === "deleted" && m.data.guid === "s1"
    );
    assert.ok(deletedMsg, "deleted message sent for guid s1");

    const treeNode = (daemon as any).tree.getNode("s1");
    assert.strictEqual(treeNode, undefined, "tree node removed from TreeManager");
  } finally {
    await daemon?.stop();
    config.syncDir = prevSyncDir;
    config.sourcemapPath = prevSourcemapPath;
    config.port = prevPort;
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

``

# File: src\tests\pack.test.ts
``
import test from "node:test";
import assert from "node:assert/strict";
import { PackCommand } from "../pack.js";
import { config } from "../config.js";

test("PackCommand regenerate and pack produce _azul metadata and pack nodes", () => {
  const prevPort = config.port;
  config.port = 0;
  const pack = new PackCommand({});
  try {
    const snapshot = [
      {
        guid: "groot",
        className: "ReplicatedStorage",
        name: "ReplicatedStorage",
        path: ["ReplicatedStorage"],
      },
      {
        guid: "gmod",
        className: "Folder",
        name: "ModuleA",
        path: ["ReplicatedStorage", "ModuleA"],
        parentGuid: "groot",
      },
      {
        guid: "gfoo",
        className: "ModuleScript",
        name: "Foo",
        path: ["ReplicatedStorage", "ModuleA", "Foo"],
        parentGuid: "gmod",
        properties: { X: 1 },
        attributes: { A: true },
        tags: ["t"],
      },
    ];

    const root = (pack as any).regenerateSourcemap(snapshot, null);
    const packed = (pack as any).packIntoSourcemap(snapshot, root);
    assert.strictEqual(typeof root._azul?.packedAt, "string");
    assert.strictEqual(root._azul?.packVersion, 1);
    assert.strictEqual(typeof packed, "number");
  } finally {
    (pack as any).ipc.close();
    config.port = prevPort;
  }
});

``

# File: src\tests\property_loader.test.ts
``
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import {
  buildInstancesFromSourcemap,
  applySourcemapProperties,
  loadSourcemapPropertyIndex,
} from "../sourcemap/propertyLoader.js";

function makeTempDir(prefix = "azul-test-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("buildInstancesFromSourcemap reads file contents and applySourcemapProperties merges properties", async () => {
  const tmp = makeTempDir();
  const scriptFile = path.join(tmp, "script.luau");
  fs.writeFileSync(scriptFile, "print('smap')", "utf8");

  const sourcemap = {
    name: "Game",
    className: "DataModel",
    children: [
      {
        name: "ReplicatedStorage",
        className: "ReplicatedStorage",
        children: [
          {
            name: "ModuleA",
            className: "Folder",
            children: [
              {
                name: "Foo",
                className: "ModuleScript",
                guid: "g1",
                properties: { MyProp: 123 },
                attributes: { Build: "dev" },
                tags: ["Client"],
                filePaths: [scriptFile],
              },
            ],
          },
        ],
      },
    ],
  };

  const smPath = path.join(tmp, "sourcemap.json");
  fs.writeFileSync(smPath, JSON.stringify(sourcemap, null, 2), "utf8");

  const instances = buildInstancesFromSourcemap(smPath);
  assert.ok(instances && instances.length > 0, "instances built");
  const foo = instances!.find((i) => i.name === "Foo");
  assert.ok(foo?.source?.includes("smap"));

  // Clear fields so merge/write-back path must restore them from sourcemap index
  foo!.properties = undefined;
  foo!.attributes = undefined;
  foo!.tags = undefined;

  const index = loadSourcemapPropertyIndex(smPath);
  assert.ok(index, "property index loaded");
  const applied = applySourcemapProperties(instances!, index);
  assert.strictEqual(applied, 1);
  assert.deepStrictEqual(foo!.properties, { MyProp: 123 });
  assert.deepStrictEqual(foo!.attributes, { Build: "dev" });
  assert.deepStrictEqual(foo!.tags, ["Client"]);

  fs.rmSync(tmp, { recursive: true, force: true });
});

``

# File: src\tests\rojo.test.ts
``
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { RojoSnapshotBuilder } from "../snapshot/rojo/index.js";

function makeTempDir(prefix = "azul-test-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("RojoSnapshotBuilder builds instances from default.project.json and files", async () => {
  const tmp = makeTempDir();
  const modules = path.join(tmp, "Modules");
  fs.mkdirSync(modules, { recursive: true });
  const file = path.join(modules, "Foo.server.lua");
  fs.writeFileSync(file, "print('from rojo')", "utf8");

  const project = {
    name: "TestProj",
    tree: {
      $className: "DataModel",
      ReplicatedStorage: {
        Modules: {
          Foo: { $path: "Modules/Foo.server.lua" },
        },
      },
    },
  };

  fs.writeFileSync(
    path.join(tmp, "default.project.json"),
    JSON.stringify(project, null, 2),
    "utf8",
  );

  const builder = new RojoSnapshotBuilder({
    cwd: tmp,
    projectFile: "default.project.json",
  });
  const instances = await builder.build();

  const script = instances.find(
    (i) => i.path.join("/") === "ReplicatedStorage/Modules/Foo",
  );
  assert.ok(script, "rojo script present");
  assert.strictEqual(script?.className, "Script");
  assert.strictEqual(script?.source?.includes("from rojo"), true);

  fs.rmSync(tmp, { recursive: true, force: true });
});

test("RojoSnapshotBuilder handles init.luau in a folder as an init script", async () => {
  const tmp = makeTempDir();
  const dir = path.join(tmp, "modules", "MyModule");
  fs.mkdirSync(dir, { recursive: true });
  const initFile = path.join(dir, "init.luau");
  fs.writeFileSync(initFile, "print('init module')", "utf8");

  const project = {
    name: "InitProj",
    tree: {
      $className: "DataModel",
      ReplicatedStorage: {
        Modules: {
          MyModule: { $path: "modules/MyModule" },
        },
      },
    },
  };

  fs.writeFileSync(
    path.join(tmp, "default.project.json"),
    JSON.stringify(project, null, 2),
    "utf8",
  );

  const builder = new RojoSnapshotBuilder({
    cwd: tmp,
    projectFile: "default.project.json",
  });
  const instances = await builder.build();

  const inst = instances.find(
    (i) => i.path.join("/") === "ReplicatedStorage/Modules/MyModule",
  );
  assert.ok(inst, "init-based instance emitted");
  assert.strictEqual(inst?.className, "ModuleScript");
  assert.strictEqual(typeof inst?.source, "string");
  assert.ok(inst?.source?.includes("init module"));

  fs.rmSync(tmp, { recursive: true, force: true });
});

test("RojoSnapshotBuilder parses complex .model.json and converts properties", async () => {
  const tmp = makeTempDir();
  const models = path.join(tmp, "models");
  fs.mkdirSync(models, { recursive: true });

  const modelJson = `
{
  "Name": "TestSuite",
  "ClassName": "Model",
  "Children": [
    {
      "Name": "TestPart",
      "ClassName": "Part",
      "Properties": {
        "Size": { "Type": "Vector3", "Value": [4, 2, 1] },
        "Position": { "Type": "Vector3", "Value": [10, 5, 0] },
        "CFrame": { "Type": "CFrame", "Value": [10, 5, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1] },
        "Color": { "Type": "Color3", "Value": [1, 0, 0] },
        "BrickColor": { "Type": "BrickColor", "Value": 1001 },
        "Shape": { "Type": "Enum", "Value": { "enumType": "PartType", "value": "Block" } },
        "Material": { "Type": "Enum", "Value": { "enumType": "Material", "value": "Plastic" } },
        "Anchored": true,
        "CanCollide": false,
        "Transparency": 0.25,
        "Reflectance": 0.1,
        "CustomPhysicalProperties": true,
        "CustomPhysicalProperties": {
          "Type": "PhysicalProperties",
          "Value": { "Density": 0.7, "Friction": 0.5, "Elasticity": 0.3, "FrictionWeight": 1, "ElasticityWeight": 1 }
        }
      }
    },
    {
      "Name": "TestAttachment",
      "ClassName": "Attachment",
      "Properties": {
        "CFrame": { "Type": "CFrame", "Value": [1, 2, 3, 0, 1, 0, -1, 0, 0, 0, 0, 1] },
        "Position": { "Type": "Vector3", "Value": [0.5, 1.5, 0] },
        "Axis": { "Type": "Vector3", "Value": [0, 1, 0] },
        "Visible": true
      }
    },
    {
      "Name": "TestLabel",
      "ClassName": "TextLabel",
      "Properties": {
        "Text": "Hello World",
        "FontFace": { "Type": "Font", "Value": { "family": "rbxasset://fonts/families/RobotoMono.json", "weight": "Thin", "style": "Normal" } },
        "TextColor3": { "Type": "Color3", "Value": [1, 1, 1] },
        "TextSize": 14,
        "RichText": true,
        "TextScaled": false,
        "TextWrapped": true,
        "Position": { "Type": "UDim2", "Value": [0, 10, 0, 20] },
        "Size": { "Type": "UDim2", "Value": [1, -20, 0, 30] },
        "BackgroundColor3": { "Type": "Color3", "Value": [0.2, 0.2, 0.2] },
        "BackgroundTransparency": 0.5,
        "ZIndex": 2,
        "LayoutOrder": 1,
        "AutoButtonColor": false
      }
    },
    {
      "Name": "TestParticles",
      "ClassName": "ParticleEmitter",
      "Properties": {
        "SpreadAngle": { "Type": "Vector2", "Value": [15, 30] },
        "Speed": { "Type": "NumberRange", "Value": [5, 10] },
        "Lifetime": { "Type": "NumberRange", "Value": [2, 4] },
        "Rate": 10,
        "Color": { "Type": "ColorSequence", "Value": [[0, 1, 0, 0], [1, 1, 1, 1]] },
        "Transparency": { "Type": "NumberSequence", "Value": [[0, 1], [1, 0]] },
        "Enabled": true,
        "LightEmission": 0.5,
        "LightInfluence": 0
      }
    },
    {
      "Name": "TestBeam",
      "ClassName": "Beam",
      "Properties": {
        "Color": { "Type": "ColorSequence", "Value": { "keypoints": [{ "time": 0, "value": [1, 0, 0] }, { "time": 1, "value": [0, 0, 1] }] } },
        "Transparency": { "Type": "NumberSequence", "Value": { "keypoints": [{ "time": 0, "value": 1, "envelope": 0 }, { "time": 1, "value": 0, "envelope": 0 }] } },
        "Width0": 0.5,
        "Width1": 1,
        "CurveSize0": 0,
        "CurveSize1": 0,
        "FaceCamera": true
      }
    },
    {
      "Name": "TestVectors",
      "ClassName": "Model",
      "Children": [
        {
          "Name": "Vec3Value",
          "ClassName": "Vector3Value",
          "Properties": {
            "Value": { "Type": "Vector3", "Value": [1, 2, 3] }
          }
        },
        {
          "Name": "ColorVal",
          "ClassName": "Color3Value",
          "Properties": {
            "Value": { "Type": "Color3", "Value": [0.5, 0.5, 0.5] }
          }
        }
      ]
    },
    {
      "Name": "TestValues",
      "ClassName": "Model",
      "Children": [
        {
          "Name": "NumVal",
          "ClassName": "NumberValue",
          "Properties": { "Value": 42.5 }
        },
        {
          "Name": "IntVal",
          "ClassName": "IntValue",
          "Properties": { "Value": { "Type": "Int32", "Value": 999 } }
        },
        {
          "Name": "BoolVal",
          "ClassName": "BoolValue",
          "Properties": { "Value": { "Type": "Bool", "Value": true } }
        },
        {
          "Name": "StrVal",
          "ClassName": "StringValue",
          "Properties": { "Value": { "Type": "String", "Value": "test string" } }
        }
      ]
    },
    {
      "Name": "SoundEffect",
      "ClassName": "Sound",
      "Properties": {
        "SoundId": { "Type": "ContentId", "Value": "rbxassetid://123456789" },
        "Volume": 0.8,
        "PlaybackSpeed": 1.5,
        "Looped": true,
        "RollOffMode": { "Type": "Enum", "Value": { "enumType": "RollOffMode", "value": "Inverse" } },
        "RollOffMinDistance": 10,
        "RollOffMaxDistance": 200
      }
    },
    {
      "Name": "TestScript",
      "ClassName": "Script",
      "Properties": {
        "Enabled": false,
        "RunContext": { "Type": "Enum", "Value": { "enumType": "RunContext", "value": "Legacy" } }
      }
    },
    {
      "Name": "TestTags",
      "ClassName": "Folder",
      "Tags": ["red", "blue", "green"]
    },
    {
      "Name": "ImplicitInference",
      "ClassName": "Model",
      "Properties": {},
      "Children": [
        {
          "Name": "ImplicitPart",
          "ClassName": "Part",
          "Properties": {
            "CFrame": [0, 10, 20, 1, 0, 0, 0, 1, 0, 0, 0, 1],
            "Size": [2, 2, 2],
            "Position": [5, 0, 5],
            "Color": [0, 1, 0],
            "Anchored": true,
            "Transparency": 0.5
          }
        },
        {
          "Name": "ImplicitLabel",
          "ClassName": "TextLabel",
          "Properties": {
            "Position": [0, 50, 0, 100],
            "Size": [0.5, 0, 0.5, 0],
            "Text": "Implicit",
            "TextColor3": [1, 1, 1],
            "BackgroundColor3": [0.1, 0.1, 0.1],
            "BackgroundTransparency": 0.3
          }
        },
        {
          "Name": "ImplicitEmitter",
          "ClassName": "ParticleEmitter",
          "Properties": {
            "SpreadAngle": [45, 60],
            "Color": [[0, 1, 0, 0, 0], [1, 1, 1, 1, 0]],
            "Transparency": [[0, 1], [1, 0]],
            "Speed": [5, 10],
            "Rate": 20
          }
        }
      ]
    },
    {
      "Name": "InstanceAttributes",
      "ClassName": "Part",
      "Attributes": {
        "Speed": 10,
        "DisplayName": "Runner",
        "IsActive": true,
        "SpawnPos": { "Type": "Vector3", "Value": [1, 2, 3] }
      },
      "Properties": {
        "Anchored": true,
        "Position": [0, 10, 0],
        "Color": [0, 0, 1]
      },
      "Tags": ["important", "test"]
    }
  ]
}
`;

  fs.writeFileSync(path.join(models, "test.model.json"), modelJson, "utf8");

  const project = {
    name: "ModelProj",
    tree: {
      $className: "DataModel",
      ReplicatedStorage: {
        Models: {
          TestSuite: { $path: "models/test.model.json" },
        },
      },
    },
  };

  fs.writeFileSync(
    path.join(tmp, "default.project.json"),
    JSON.stringify(project, null, 2),
    "utf8",
  );

  const builder = new RojoSnapshotBuilder({
    cwd: tmp,
    projectFile: "default.project.json",
  });
  const instances = await builder.build();

  const part = instances.find((i) => i.name === "TestPart");
  assert.ok(part, "TestPart emitted");
  assert.strictEqual(part?.className, "Part");
  assert.ok(
    part?.properties &&
      (part.properties as any).Size &&
      (part.properties as any).Size.__type === "Vector3",
  );
  assert.strictEqual(part?.properties?.Anchored, true);

  const label = instances.find((i) => i.name === "TestLabel");
  assert.ok(label, "TestLabel emitted");
  assert.strictEqual(label?.properties?.Text, "Hello World");
  assert.ok(
    label?.properties &&
      (label.properties as any).FontFace &&
      (label.properties as any).FontFace.__type === "Font",
  );

  const particles = instances.find((i) => i.name === "TestParticles");
  assert.ok(particles, "TestParticles emitted");
  assert.ok(
    particles?.properties &&
      (particles.properties as any).Color &&
      (particles.properties as any).Color.__type === "ColorSequence",
  );

  const implicit = instances.find((i) => i.name === "ImplicitPart");
  assert.ok(implicit, "ImplicitPart emitted");
  assert.ok(
    implicit?.properties &&
      (implicit.properties as any).CFrame &&
      (implicit.properties as any).CFrame.__type === "CFrame",
  );

  fs.rmSync(tmp, { recursive: true, force: true });
});

``

# File: src\tests\snapshot.test.ts
``
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { SnapshotBuilder } from "../snapshot.js";

function makeTempDir(prefix = "azul-test-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("SnapshotBuilder creates folders and script instances correctly", async () => {
  const tmp = makeTempDir();
  const src = path.join(tmp, "src");
  fs.mkdirSync(path.join(src, "ReplicatedStorage", "Modules"), {
    recursive: true,
  });
  const scriptPath = path.join(
    src,
    "ReplicatedStorage",
    "Modules",
    "Foo.server.lua",
  );
  fs.writeFileSync(scriptPath, "print('hello')", "utf8");

  const builder = new SnapshotBuilder({ sourceDir: src });
  const instances = await builder.build();

  const folderPaths = instances
    .filter((i) => i.className === "Folder")
    .map((i) => i.path.join("/"));
  assert.ok(folderPaths.includes("ReplicatedStorage"));
  assert.ok(folderPaths.includes("ReplicatedStorage/Modules"));

  const script = instances.find((i) => i.name === "Foo");
  assert.ok(script, "script instance present");
  assert.strictEqual(script?.className, "Script");
  assert.strictEqual(script?.path.join("/"), "ReplicatedStorage/Modules/Foo");

  fs.rmSync(tmp, { recursive: true, force: true });
});

``

# File: src\tests\syncable.test.ts
``
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { classifyFileName, isSyncableFile } from "../util/scriptFile.js";
import { SnapshotBuilder } from "../snapshot.js";
import { FileWriter } from "../fs/fileWriter.js";
import { TreeNode } from "../fs/treeManager.js";

function makeTempDir(prefix = "azul-test-") {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

test("classifyFileName classifies extra class suffixes case-insensitively", () => {
  const result1 = classifyFileName("MyEvent.remoteevent");
  assert.strictEqual(result1.className, "RemoteEvent");
  assert.strictEqual(result1.instanceName, "MyEvent");
  assert.strictEqual(result1.isScript, false);

  const result2 = classifyFileName("MyFunction.REMOTEFUNCTION");
  assert.strictEqual(result2.className, "RemoteFunction");
  assert.strictEqual(result2.instanceName, "MyFunction");
  assert.strictEqual(result2.isScript, false);

  const result3 = classifyFileName("MyScript.server.luau");
  assert.strictEqual(result3.className, "Script");
  assert.strictEqual(result3.instanceName, "MyScript");
  assert.strictEqual(result3.isScript, true);
});

test("isSyncableFile detects syncable files correctly", () => {
  assert.ok(isSyncableFile("foo.lua"));
  assert.ok(isSyncableFile("foo.luau"));
  assert.ok(isSyncableFile("foo.remoteevent"));
  assert.ok(isSyncableFile("foo.REMOTEFUNCTION"));
  assert.ok(!isSyncableFile("foo.txt"));
});

test("SnapshotBuilder collects non-script files and folders with init.json", async () => {
  const tmp = makeTempDir();
  const src = path.join(tmp, "src");
  fs.mkdirSync(path.join(src, "ReplicatedStorage", "Network.remoteevent"), {
    recursive: true,
  });

  // Write properties inside directory init.json
  const initJsonPath = path.join(
    src,
    "ReplicatedStorage",
    "Network.remoteevent",
    "init.json"
  );
  const metadata = {
    properties: {
      ClassName: "RemoteEvent",
      CoolProperty: "Yes",
    },
    attributes: {
      AwesomeAttribute: 42,
    },
    tags: ["Important"],
  };
  fs.writeFileSync(initJsonPath, JSON.stringify(metadata, null, 2), "utf8");

  // Write a leaf remote event file next to it
  const leafPath = path.join(
    src,
    "ReplicatedStorage",
    "GetUserData.remotefunction"
  );
  const leafMetadata = {
    properties: {
      CoolerProperty: "Absolutely",
    },
  };
  fs.writeFileSync(leafPath, JSON.stringify(leafMetadata, null, 2), "utf8");

  const builder = new SnapshotBuilder({ sourceDir: src });
  const instances = await builder.build();

  // Verify GetUserData (leaf file)
  const leafFunc = instances.find((i) => i.name === "GetUserData");
  assert.ok(leafFunc, "leaf function instance present");
  assert.strictEqual(leafFunc.className, "RemoteFunction");
  assert.strictEqual(leafFunc.path.join("/"), "ReplicatedStorage/GetUserData");
  assert.strictEqual(leafFunc.properties?.CoolerProperty, "Absolutely");

  // Verify Network (folder with init.json)
  const networkEvent = instances.find((i) => i.name === "Network");
  assert.ok(networkEvent, "network event instance present");
  assert.strictEqual(networkEvent.className, "RemoteEvent");
  assert.strictEqual(networkEvent.path.join("/"), "ReplicatedStorage/Network");
  assert.strictEqual(networkEvent.properties?.CoolProperty, "Yes");
  assert.strictEqual(networkEvent.attributes?.AwesomeAttribute, 42);
  assert.deepEqual(networkEvent.tags, ["Important"]);

  fs.rmSync(tmp, { recursive: true, force: true });
});

test("FileWriter writes non-script nodes correctly as file/dir", () => {
  const tmp = makeTempDir();
  const writer = new FileWriter(tmp);

  const rootNode: TreeNode = {
    guid: "root",
    className: "DataModel",
    name: "Game",
    path: [],
    children: new Map(),
  };

  const repStorageNode: TreeNode = {
    guid: "rep",
    className: "Folder",
    name: "ReplicatedStorage",
    path: ["ReplicatedStorage"],
    parentGuid: "root",
    parent: rootNode,
    children: new Map(),
  };
  rootNode.children.set("rep", repStorageNode);

  // 1. Childless RemoteEvent (should write as file MyEvent.remoteevent)
  const eventNode: TreeNode = {
    guid: "event1",
    className: "RemoteEvent",
    name: "MyEvent",
    path: ["ReplicatedStorage", "MyEvent"],
    parentGuid: "rep",
    parent: repStorageNode,
    properties: { CoolProp: "Event" },
    children: new Map(),
  };
  repStorageNode.children.set("event1", eventNode);

  // 2. RemoteFunction with children (should write as directory MyFunc.remotefunction/init.json)
  const funcNode: TreeNode = {
    guid: "func1",
    className: "RemoteFunction",
    name: "MyFunc",
    path: ["ReplicatedStorage", "MyFunc"],
    parentGuid: "rep",
    parent: repStorageNode,
    properties: { CoolProp: "Func" },
    children: new Map(),
  };
  repStorageNode.children.set("func1", funcNode);

  const childScript: TreeNode = {
    guid: "child1",
    className: "Script",
    name: "ChildScript",
    path: ["ReplicatedStorage", "MyFunc", "ChildScript"],
    parentGuid: "func1",
    parent: funcNode,
    source: "print('child')",
    children: new Map(),
  };
  funcNode.children.set("child1", childScript);

  // Write tree
  const nodes = new Map<string, TreeNode>([
    ["root", rootNode],
    ["rep", repStorageNode],
    ["event1", eventNode],
    ["func1", funcNode],
    ["child1", childScript],
  ]);
  writer.writeTree(nodes);

  // Check childless RemoteEvent file exists
  const eventFilePath = path.join(tmp, "ReplicatedStorage", "MyEvent.remoteevent");
  assert.ok(fs.existsSync(eventFilePath), "childless event file exists");
  const eventContent = JSON.parse(fs.readFileSync(eventFilePath, "utf8"));
  assert.strictEqual(eventContent.properties?.CoolProp, "Event");

  // Check RemoteFunction directory and init.json exists
  const funcInitPath = path.join(tmp, "ReplicatedStorage", "MyFunc.remotefunction", "init.json");
  assert.ok(fs.existsSync(funcInitPath), "directory function init.json exists");
  const funcContent = JSON.parse(fs.readFileSync(funcInitPath, "utf8"));
  assert.strictEqual(funcContent.properties?.CoolProp, "Func");

  // Check child script file exists
  const childScriptPath = path.join(
    tmp,
    "ReplicatedStorage",
    "MyFunc.remotefunction",
    "ChildScript.server.luau"
  );
  assert.ok(fs.existsSync(childScriptPath), "child script file exists");
  assert.strictEqual(fs.readFileSync(childScriptPath, "utf8"), "print('child')");

  fs.rmSync(tmp, { recursive: true, force: true });
});

``

# File: src\util\cliArgs.ts
``
import { config } from "../config.js";
import { parseArgs } from "node:util";

/**
 * Flags that accept an OPTIONAL value: `--flag` (use implicit default) or
 * `--flag=value` / `--flag value`. Add new optional-value flags here so the
 * normalization logic in `ensureOptionalStringFlagValues` covers them in one
 * place instead of being special-cased per flag.
 */
const OPTIONAL_VALUE_FLAGS = ["--from-sourcemap"] as const;

export interface ParsedCliArgs {
  command: string | null;

  //   Global options
  help: boolean;
  version: boolean;
  debug: boolean;
  noWarn: boolean;
  syncDir?: string;
  port?: number;

  //   Build/Push options
  rojo: boolean;
  rojoProject?: string;
  fromSourcemap?: string;
  //   fromSourcemapValue: string | null;
  source?: string;
  destination?: string;
  noPlaceConfig: boolean;
  destructive: boolean;

  //   Pack options
  output?: string;
  scriptsOnly: boolean;

  //   Config options
  configPath: boolean;
}

export function parseCliArgs(argv: string[]): ParsedCliArgs {
  const args = ensureOptionalStringFlagValues(argv, OPTIONAL_VALUE_FLAGS);

  const { values, positionals } = parseArgs({
    args,
    strict: false,
    allowPositionals: true,
    options: {
      // Global options
      help: { type: "boolean", short: "h" },
      version: { type: "boolean" },
      debug: { type: "boolean" },
      "no-warn": { type: "boolean" },
      "sync-dir": { type: "string" },
      port: { type: "string" },

      // Build/Push options
      rojo: { type: "boolean" },
      "rojo-project": { type: "string" },
      "from-sourcemap": { type: "string" },
      source: { type: "string", short: "s" },
      destination: { type: "string", short: "d" },
      "no-place-config": { type: "boolean" },
      destructive: { type: "boolean" },

      // Pack options
      output: { type: "string", short: "o" },
      "scripts-only": { type: "boolean" },

      // Config options
      path: { type: "boolean" },
    },
  });

  const command = positionals[0] ?? null;
  //   const fromSourcemapRawValue = getStringOption(values, "from-sourcemap");

  return {
    command,
    help: getBooleanOption(values, "help"),
    version: getBooleanOption(values, "version"),
    debug: getBooleanOption(values, "debug"),
    noWarn: getBooleanOption(values, "no-warn"),
    configPath: getBooleanOption(values, "path"),
    syncDir: getStringOption(values, "sync-dir"),
    port: getNumberOptionInRange(values, "port", 1, 65535),
    rojo: getBooleanOption(values, "rojo"),
    rojoProject: getStringOption(values, "rojo-project"),
    fromSourcemap: getStringOptionWithImplicitDefault(
      values,
      "from-sourcemap",
      config.sourcemapPath,
    ),
    // fromSourcemap: fromSourcemapRawValue !== undefined,
    // fromSourcemapValue:
    //   fromSourcemapRawValue === "" || fromSourcemapRawValue === undefined
    //     ? null
    //     : fromSourcemapRawValue,
    source: getStringOption(values, "source"),
    destination: getStringOption(values, "destination"),
    noPlaceConfig: getBooleanOption(values, "no-place-config"),
    destructive: getBooleanOption(values, "destructive"),
    output: getStringOption(values, "output"),
    scriptsOnly: getBooleanOption(values, "scripts-only"),
  };
}

function getBooleanOption(
  values: Record<string, string | boolean | undefined>,
  flagName: string,
): boolean {
  return values[flagName] === true;
}

function getStringOption(
  values: Record<string, string | boolean | undefined>,
  flagName: string,
  //   hasOptionalValue = false, // For flags that can be provided as --flag or --flag=value
): string | undefined {
  const flagValue = values[flagName];

  return typeof flagValue === "string" ? flagValue : undefined;
}

function getStringOptionWithImplicitDefault(
  values: Record<string, string | boolean | undefined>,
  flagName: string,
  defaultValue: string,
): string | undefined {
  const flagValue = values[flagName];

  if (flagValue === undefined) {
    return undefined;
  }

  if (flagValue === "") {
    return defaultValue;
  }

  return typeof flagValue === "string" ? flagValue : undefined;
}

function getNumberOptionInRange(
  values: Record<string, string | boolean | undefined>,
  flagName: string,
  min: number,
  max: number,
): undefined | number {
  const value = getStringOption(values, flagName);

  if (value === undefined) {
    return undefined;
  }

  const numberValue = Number(value);
  if (isNaN(numberValue) || numberValue < min || numberValue > max) {
    throw new Error(
      `Invalid --${flagName} value "${value}": expected a number between ${min} and ${max}.`,
    );
  }

  return numberValue;
}

function ensureOptionalStringFlagValues(
  argv: string[],
  flags: readonly string[],
): string[] {
  const normalized: string[] = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const matchedFlag = flags.find((flag) => arg === flag);

    if (!matchedFlag) {
      normalized.push(arg);
      continue;
    }

    const nextArg = argv[i + 1];
    if (!nextArg || nextArg.startsWith("-")) {
      normalized.push(`${matchedFlag}=`);
      continue;
    }

    normalized.push(arg);
  }

  return normalized;
}

``

# File: src\util\id.ts
``
import { randomBytes } from "crypto";

/**
 * Generate a unique GUID for tracking instances
 */
export function generateGUID(): string {
  return randomBytes(16).toString("hex");
}

/**
 * Validate GUID format
 */
export function isValidGUID(guid: string): boolean {
  return /^[a-f0-9]{32}$/.test(guid);
}

``

# File: src\util\log.ts
``
/**
 * Simple logging utility with color support
 */

import { config } from "../config.js";

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",

  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

function timestamp(): string {
  return new Date().toISOString().slice(11, 23);
}

export const log = {
  info(message: string, ...args: any[]): void {
    console.log(
      `${colors.dim}[${timestamp()}]${colors.reset} ${colors.blue}ℹ${
        colors.reset
      } ${message}`,
      ...args,
    );
  },

  success(message: string, ...args: any[]): void {
    console.log(
      `${colors.dim}[${timestamp()}]${colors.reset} ${colors.green}✓${
        colors.reset
      } ${message}`,
      ...args,
    );
  },

  warn(message: string, ...args: any[]): void {
    console.log(
      `${colors.dim}[${timestamp()}]${colors.reset} ${colors.yellow}⚠ ${message}${colors.reset}`,
      ...args,
    );
  },

  error(message: string, ...args: any[]): void {
    console.error(
      `${colors.dim}[${timestamp()}]${colors.reset} ${colors.red}✗ ${message}${colors.reset}`,
      ...args,
    );
  },

  debug(message: string, ...args: any[]): void {
    if (config.debugMode) {
      console.log(
        `${colors.dim}[${timestamp()}] 🔍 ${message}${colors.reset}`,
        ...args,
      );
    }
  },

  userInput(message: string, ...args: any[]): void {
    console.log(
      `${colors.dim}[${timestamp()}]${colors.reset} ${colors.cyan}?${
        colors.reset
      } ${message}`,
      ...args,
    );
  },

  script(path: string, action: "created" | "updated" | "deleted"): void {
    const emoji = action === "created" ? "+" : action === "updated" ? "~" : "−";
    const color =
      action === "created"
        ? colors.green
        : action === "updated"
          ? colors.yellow
          : colors.red;
    console.log(
      `${colors.dim}[${timestamp()}]${colors.reset} ${color}${emoji}${
        colors.reset
      } ${path}`,
    );
  },
};

``

# File: src\util\prompt.ts
``
import * as ReadLine from "readline";
import { log } from "./log.js";

function promptLine(): Promise<string> {
  return new Promise((resolve) => {
    const rl = ReadLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.once("line", (input) => {
      rl.close();
      resolve(input);
    });
  });
}

export const prompt = {
  getInput(message: string): Promise<string> {
    log.userInput(message);
    return promptLine();
  },

  async getYesNoInput(
    message?: string,
    retryMessage?: string,
  ): Promise<boolean> {
    if (message) {
      log.userInput(message);
    }

    while (true) {
      const input = (await promptLine()).trim().toLowerCase();
      if (input === "y" || input === "yes") {
        return true;
      }
      if (input === "n" || input === "no") {
        return false;
      }
      log.userInput(retryMessage ?? "Please answer Y (yes) or N (no).");
    }
  },
};

``

# File: src\util\scriptFile.ts
``
import { config } from "../config.js";

export type ScriptClassName = "Script" | "LocalScript" | "ModuleScript";

export interface ClassifiedScriptFile {
  className: ScriptClassName;
  scriptName: string;
}

export interface ClassifyScriptFileOptions {
  stripDisambiguationSuffix?: boolean;
}

export function isScriptClassName(
  className: string,
): className is ScriptClassName {
  return (
    className === "Script" ||
    className === "LocalScript" ||
    className === "ModuleScript"
  );
}

export function isScriptFileName(fileName: string): boolean {
  return fileName.endsWith(".lua") || fileName.endsWith(".luau");
}

export function isInstanceJsonName(fileName: string): boolean {
  return fileName.endsWith(".model.json") 
  // || fileName.endsWith(".meta.json"); // No support for this yet
}

export function normalizeLuaLikeFileName(fileName: string): string {
  return fileName.replace(/\.lua$/i, ".luau");
}

export function stripScriptDisambiguationSuffix(scriptName: string): string {
  return scriptName.replace(/__\{?[a-z0-9-]{6,}\}?$/i, "");
}

export function classifyScriptFileName(
  fileName: string,
  options: ClassifyScriptFileOptions = {},
): ClassifiedScriptFile {
  const normalized = normalizeLuaLikeFileName(fileName);
  const base = normalized.replace(/\.luau$/i, "");

  const normalizeName = (name: string) =>
    options.stripDisambiguationSuffix
      ? stripScriptDisambiguationSuffix(name)
      : name;

  if (base.endsWith(".server")) {
    return {
      className: "Script",
      scriptName: normalizeName(base.replace(/\.server$/, "")),
    };
  }

  if (base.endsWith(".legacy")) {
    return {
      className: "Script",
      scriptName: normalizeName(base.replace(/\.legacy$/, "")),
    };
  }

  if (base.endsWith(".client")) {
    return {
      className: "LocalScript",
      scriptName: normalizeName(base.replace(/\.client$/, "")),
    };
  }

  if (base.endsWith(".local")) {
    return {
      className: "LocalScript",
      scriptName: normalizeName(base.replace(/\.local$/, "")),
    };
  }

  if (base.endsWith(".module")) {
    return {
      className: "ModuleScript",
      scriptName: normalizeName(base.replace(/\.module$/, "")),
    };
  }

  return {
    className: "ModuleScript",
    scriptName: normalizeName(base),
  };
}

export interface ClassifiedFile {
  className: string;
  instanceName: string;
  isScript: boolean;
}

export function isSyncableFile(fileName: string): boolean {
  const lower = fileName.toLowerCase();
  if (lower.endsWith(".lua") || lower.endsWith(".luau")) {
    return true;
  }
  for (const suffix of Object.keys(config.extraClassSuffixes)) {
    if (lower.endsWith(suffix.toLowerCase())) {
      return true;
    }
  }
  return false;
}

export function classifyFileName(fileName: string): ClassifiedFile {
  const lower = fileName.toLowerCase();
  for (const [suffix, className] of Object.entries(config.extraClassSuffixes)) {
    if (lower.endsWith(suffix.toLowerCase())) {
      const instanceName = fileName.slice(0, -suffix.length);
      return {
        className,
        instanceName,
        isScript: false,
      };
    }
  }

  if (isScriptFileName(fileName)) {
    const { className, scriptName } = classifyScriptFileName(fileName, {
      stripDisambiguationSuffix: true,
    });
    return {
      className,
      instanceName: scriptName,
      isScript: true,
    };
  }

  return {
    className: "Folder",
    instanceName: fileName,
    isScript: false,
  };
}
``

# File: src\util\versionUtils.ts
``
import fs from "node:fs";
import { dirname, resolve } from "path";
import { log } from "./log.js";
import { fileURLToPath } from "url";

export async function getLatestVersion(
  packageName = "azul-sync",
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://registry.npmjs.org/${packageName}/latest`,
    );

    if (!response.ok) {
      log.warn(`Could not check for updates: ${response.statusText}`);
      return null;
    }

    const data = (await response.json()) as { version: string };

    log.debug(`Latest version of ${packageName} is ${data.version}`);

    return data.version;
  } catch (error) {
    log.warn(`Could not check for updates: ${error}`);
    return null;
  }
}

export function getCurrentVersion(): string {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pkg = JSON.parse(
    fs.readFileSync(resolve(__dirname, "../../package.json"), "utf8"), // we need to go up two levels because this file is in src/util
  );

  return pkg.version;
}

``

