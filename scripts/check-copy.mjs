import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = join(root, "public/index.html");
const html = readFileSync(htmlPath, "utf8");

const required = [
  "Update WordPress without the dread",
  "The same three steps, every time",
  "Update staging",
  "Check the pages",
  "Go live only if it passes",
  "See exactly what changed",
  "Works across all your sites",
  "Use the Guard where you already work",
  "Click Update. Then get on with your day.",
  "https://x.ai/bot/PiMQ3ggqSw61_IbxsIAB3",
  'rel="noopener"',
  'href="#bots"',
  "Coming soon",
  "Rolled back",
  "Pass",
  "Live",
  "Checking",
];

const assets = [
  "public/assets/logo/lockup-light.svg",
  "public/assets/logo/mascot-light.svg",
  "public/assets/logo/mascot-dark.svg",
  "public/assets/logo/icon-light.svg",
  "public/assets/bots/grok.png",
  "public/assets/bots/muse.png",
  "public/assets/fonts/Inter-Regular.woff",
  "public/assets/fonts/Inter-ExtraBold.woff",
  "public/styles/tokens.css",
  "public/styles/site.css",
];

const missingCopy = required.filter((snippet) => !html.includes(snippet));
const missingAssets = assets.filter((path) => !existsSync(join(root, path)));

if (missingCopy.length || missingAssets.length) {
  if (missingCopy.length) {
    console.error("Missing copy:");
    for (const snippet of missingCopy) console.error(`  ${snippet}`);
  }
  if (missingAssets.length) {
    console.error("Missing files:");
    for (const path of missingAssets) console.error(`  ${path}`);
  }
  process.exit(1);
}

if (/#[0-9a-fA-F]{6}\b/.test(html)) {
  console.error("index.html still has hardcoded hex colors. Use tokens.css variables.");
  process.exit(1);
}

console.log("Copy and assets match the approved homepage.");
