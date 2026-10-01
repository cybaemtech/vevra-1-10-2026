import fs from "node:fs";
import path from "node:path";

// Fix TanStack Router code splitter syntax error when project path contains single quotes (e.g. "Client's Project")
const targetFiles = [
  "node_modules/@tanstack/router-plugin/dist/esm/core/code-splitter/compilers.js",
  "node_modules/@tanstack/router-plugin/dist/cjs/core/code-splitter/compilers.cjs",
];

for (const relPath of targetFiles) {
  const filePath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("import('${splitUrl}')")) {
    content = content.replaceAll("import('${splitUrl}')", "import(${JSON.stringify(splitUrl)})");
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`[patch] Successfully patched ${relPath}`);
  }
}
