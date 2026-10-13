import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, "..", ".vercel", "output", "static");
const destDir = path.resolve(__dirname, "..", "dist");
const serverEntry = path.resolve(__dirname, "..", ".vercel", "output", "functions", "__server.func", "index.mjs");
const publicHtaccess = path.resolve(__dirname, "..", "public", ".htaccess");

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Routes to pre-render for static cPanel deployment
const STATIC_ROUTES = [
  "/",
  "/about",
  "/business-model",
  "/calculator",
  "/careers",
  "/clients",
  "/contact",
  "/corporate-office",
  "/e-kart",
  "/leadership",
  "/life-at-vevra",
  "/rfq-results",
  "/testimonials",
  "/warehouses",
  "/products",
  "/services",
  "/products/corrugated",
  "/products/plastic-pp",
  "/products/metal",
  "/products/wood-plywood",
  "/products/pulp-packaging",
  "/products/honeycomb-packaging",
  "/products/labels-identification",
  "/products/protective-dunnage",
  "/products/customized-packaging",
  "/services/packaging-engineering",
  "/services/returnable-packaging-management",
  "/services/packaging-rental",
  "/services/equipment-pooling",
  "/services/on-site-packaging-operations",
  "/services/warehouse-packaging-management",
  "/services/transport-logistics",
  "/services/air-ocean-freight",
  "/services/packaging-optimization-sustainability",
];

async function prerenderRoutes() {
  if (!fs.existsSync(serverEntry)) {
    console.warn(`[PRERENDER WARNING] Server entry not found at: ${serverEntry}`);
    generateFallbackIndexHtml();
    return;
  }

  try {
    console.log("Loading SSR bundle to pre-render static HTML pages...");
    const { default: handler } = await import(pathToFileURL(serverEntry).href);

    if (!handler || typeof handler.fetch !== "function") {
      console.warn("[PRERENDER WARNING] SSR handler fetch is not a function. Generating fallback index.html...");
      generateFallbackIndexHtml();
      return;
    }

    let renderedCount = 0;
    for (const route of STATIC_ROUTES) {
      try {
        const response = await handler.fetch(new Request(`http://localhost${route}`));
        if (response.status === 200) {
          const html = await response.text();
          let targetPath;

          if (route === "/") {
            targetPath = path.join(destDir, "index.html");
          } else {
            const relDir = route.startsWith("/") ? route.slice(1) : route;
            const routeDir = path.join(destDir, relDir);
            if (!fs.existsSync(routeDir)) {
              fs.mkdirSync(routeDir, { recursive: true });
            }
            targetPath = path.join(routeDir, "index.html");
          }

          fs.writeFileSync(targetPath, html, "utf-8");
          renderedCount++;
        } else {
          console.warn(`[PRERENDER] Route ${route} returned HTTP ${response.status}`);
        }
      } catch (routeErr) {
        console.warn(`[PRERENDER] Failed to render route ${route}:`, routeErr.message);
      }
    }

    console.log(`[PRERENDER SUCCESS] Pre-rendered ${renderedCount} pages into dist/ (including dist/index.html)!`);

    // Ensure root index.html exists
    const rootIndex = path.join(destDir, "index.html");
    if (!fs.existsSync(rootIndex) || fs.statSync(rootIndex).size === 0) {
      console.warn("[PRERENDER WARNING] dist/index.html is missing or empty. Creating fallback...");
      generateFallbackIndexHtml();
    }
  } catch (err) {
    console.error("[PRERENDER ERROR]", err);
    generateFallbackIndexHtml();
  }
}

function generateFallbackIndexHtml() {
  const rootIndex = path.join(destDir, "index.html");
  if (fs.existsSync(rootIndex) && fs.statSync(rootIndex).size > 1000) {
    return;
  }

  // Find assets
  const assetsDir = path.join(destDir, "assets");
  let cssFile = "";
  let jsFile = "";

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    // Find latest styles-*.css
    const cssCandidates = files.filter(f => f.startsWith("styles-") && f.endsWith(".css"));
    if (cssCandidates.length > 0) {
      cssFile = "/assets/" + cssCandidates[cssCandidates.length - 1];
    }
    // Find latest index-*.js
    const jsCandidates = files.filter(f => f.startsWith("index-") && f.endsWith(".js"));
    if (jsCandidates.length > 0) {
      jsFile = "/assets/" + jsCandidates[jsCandidates.length - 1];
    }
  }

  const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vevra Packaging — End-to-End Packaging Solutions</title>
  <meta name="description" content="VEVRA designs, manufactures, manages and optimizes packaging ecosystems so businesses can focus on their core products." />
  <meta property="og:title" content="Vevra Packaging — We Manage Your Packaging Ecosystem" />
  <meta property="og:description" content="End-to-end packaging and supply-chain solutions across design, manufacturing, returnables, warehousing and logistics." />
  <meta property="og:type" content="website" />
  <link rel="icon" href="/favicon.png" type="image/png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Caveat:wght@600;700&family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@1,600;1,700&family=Archivo:wght@600;700&family=Manrope:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" />
  ${cssFile ? `<link rel="stylesheet" href="${cssFile}" />` : ""}
</head>
<body>
  <div id="root"></div>
  ${jsFile ? `<script type="module" src="${jsFile}"></script>` : ""}
</body>
</html>`;

  fs.writeFileSync(rootIndex, fallbackHtml, "utf-8");
  console.log("[FALLBACK] Created dist/index.html with asset links.");
}

function ensureHtaccess() {
  const destHtaccess = path.join(destDir, ".htaccess");
  if (fs.existsSync(publicHtaccess)) {
    fs.copyFileSync(publicHtaccess, destHtaccess);
    console.log("[HTACCESS] Copied public/.htaccess to dist/.htaccess");
  } else {
    const htaccessContent = `# VEVRA Packaging - Apache / cPanel Production Configuration
DirectoryIndex index.html index.php
AddDefaultCharset UTF-8
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^.*\\.php$ - [L]
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [L]
</IfModule>
`;
    fs.writeFileSync(destHtaccess, htaccessContent, "utf-8");
    console.log("[HTACCESS] Generated dist/.htaccess");
  }
}

async function main() {
  console.log(`Copying build output from ${srcDir} to ${destDir}...`);
  copyDirRecursive(srcDir, destDir);
  console.log("Copied static assets.");

  await prerenderRoutes();
  ensureHtaccess();

  console.log(">>> [SUCCESS] dist/ directory is completely ready for cPanel upload!");
  console.log(">>> dist/index.html is created and ready to be served by Apache.");
}

main().catch((err) => {
  console.error("Build copy/prerender script failed:", err);
  process.exit(1);
});
