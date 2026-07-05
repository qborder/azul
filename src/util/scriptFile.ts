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