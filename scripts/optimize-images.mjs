import { access, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const assetsDir = path.join(publicDir, "assets");
const inputDir = await directoryExists(assetsDir) ? assetsDir : publicDir;
const defaultMaxWidth = 1600;
const smallMaxWidths = new Map(
  [
    ...Array.from({ length: 8 }, (_, index) => [`press-${index + 1}`, 400]),
    ...Array.from({ length: 4 }, (_, index) => [`product-${index + 1}-front`, 480]),
    ...Array.from({ length: 4 }, (_, index) => [`product-${index + 1}-back`, 480]),
    ...Array.from({ length: 6 }, (_, index) => [`ugc-${index + 1}`, 800]),
    ...Array.from({ length: 3 }, (_, index) => [`spotlight-${index + 1}`, 980]),
  ],
);
const sourceExtensions = new Set([".png", ".jpg", ".jpeg"]);

const files = (await readdir(inputDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && sourceExtensions.has(path.extname(entry.name).toLowerCase()))
  .map((entry) => entry.name)
  .sort();

if (files.length === 0) {
  console.log(`No PNG/JPG assets found in ${path.relative(root, inputDir)}.`);
  process.exit(0);
}

console.log(`Optimizing ${files.length} image(s) from ${path.relative(root, inputDir)}...`);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const parsed = path.parse(file);
  const outputPath = path.join(inputDir, `${parsed.name}.webp`);
  const maxWidth = smallMaxWidths.get(parsed.name) ?? defaultMaxWidth;
  const before = (await stat(inputPath)).size;

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  console.log(
    `${file} -> ${parsed.name}.webp | ${formatBytes(before)} -> ${formatBytes(after)} | max width ${maxWidth}px`,
  );
}

async function directoryExists(directory) {
  try {
    return (await stat(directory)).isDirectory();
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}
