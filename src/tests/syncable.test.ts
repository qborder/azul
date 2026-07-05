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
