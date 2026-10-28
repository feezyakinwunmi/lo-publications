// Scans public/covers and public/authors and writes the list of available
// images to src/app/data/image-manifest.json. Runs automatically before
// `npm run dev` and `npm run build`; run `npm run images` to refresh by hand.
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join, parse } from "node:path";

const root = process.cwd();
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

function scan(folder) {
  const dir = join(root, "public", folder);
  if (!existsSync(dir)) return {};
  const found = {};
  for (const file of readdirSync(dir).sort()) {
    if (!IMAGE.test(file)) continue;
    found[parse(file).name.toLowerCase()] = `/${folder}/${file}`;
  }
  return found;
}

const manifest = { covers: scan("covers"), authors: scan("authors") };
writeFileSync(
  join(root, "src", "app", "data", "image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log(
  `images: ${Object.keys(manifest.covers).length} book covers, ${Object.keys(manifest.authors).length} author photos`
);
