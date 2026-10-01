import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const files = [
  ["scripts/assets/grok.png.b64", "public/assets/bots/grok.png"],
  ["scripts/assets/muse.png.b64", "public/assets/bots/muse.png"],
  ["scripts/assets/Inter-Regular.woff.b64", "public/assets/fonts/Inter-Regular.woff"],
  ["scripts/assets/Inter-SemiBold.woff.b64", "public/assets/fonts/Inter-SemiBold.woff"],
  ["scripts/assets/Inter-Bold.woff.b64", "public/assets/fonts/Inter-Bold.woff"],
  ["scripts/assets/Inter-ExtraBold.woff.b64", "public/assets/fonts/Inter-ExtraBold.woff"],
];

for (const [encodedPath, outPath] of files) {
  const dest = join(root, outPath);
  if (existsSync(dest)) continue;
  const encoded = readFileSync(join(root, encodedPath), "utf8").trim();
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(encoded, "base64"));
}
