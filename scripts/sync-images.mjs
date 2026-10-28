// Scans public/covers and public/authors and writes the list of available
// images to src/app/data/image-manifest.json. Runs automatically before
// `npm run dev` and `npm run build`; run `npm run images` to refresh by hand.
//
// Files can be named loosely ("Leo_s home.png", "A Weekend in Bristol.png"):
// names are slugified the same way catalogue titles are. Names that still don't
// match a title go in ALIASES below.
//
// Each image is also shrunk to a web-sized WebP in public/<folder>/web/, which
// is what the site serves. Originals are left untouched.
import { readdirSync, writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, parse } from "node:path";

const root = process.cwd();
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;
const WIDTH = { covers: 600, authors: 500 };

// slugified filename -> catalogue slug
const ALIASES = {
  covers: {
    "a-christmass-to-remember": "a-christmas-to-remember",
    "car-watchers": "car-watchers-vroom-zoom-beep",
    "duke-shares-his-den": "duke-shares-her-den",
    "chidumebi-ella-bk4": "chidumebi-and-ella-book-4",
    "chidumebi-ella-turn-tp-trust-bk-7": "chidumebi-and-ella-book-7-turn-and-trust",
    "eli-and-bea-bk4": "eli-and-bea",
    "eli-and-bea-bk6": "eli-and-bea-book-6-six-words",
    "my-alphabet-dictionary": "my-first-alphabet-dictionary",
    "splish-splash": "splish-splash-wow-water-wonders",
    "then-now-always": "then-now-and-always",
    "novi-sa-protocol": "novi-sad-protocol",
  },
  authors: {
    "bishop-jesse-dibal": "jesse-dibal",
    "mr-ayokunle-bamigboye": "david-cross",
  },
};

// Must match slugify() in src/app/data/catalogue.ts; "_s" covers apostrophes
// that file systems or downloads turned into underscores.
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/_s\b/g, "s")
    .replace(/[’'&]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("images: sharp not available, serving original files unoptimised");
}

async function scan(folder) {
  const dir = join(root, "public", folder);
  const webDir = join(dir, "web");
  const found = {};

  if (existsSync(dir)) {
    for (const file of readdirSync(dir).sort()) {
      if (!IMAGE.test(file)) continue;
      const name = slugify(parse(file).name);
      const slug = ALIASES[folder][name] ?? name;
      found[slug] = `/${folder}/${encodeURIComponent(file)}`;

      if (!sharp) continue;
      const src = join(dir, file);
      const out = join(webDir, `${slug}.webp`);
      if (!existsSync(out) || statSync(out).mtimeMs < statSync(src).mtimeMs) {
        mkdirSync(webDir, { recursive: true });
        await sharp(src).resize({ width: WIDTH[folder], withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
      }
    }
  }

  // Optimised copies win, and still count when the originals aren't present
  if (existsSync(webDir)) {
    for (const file of readdirSync(webDir)) {
      if (file.endsWith(".webp")) found[parse(file).name] = `/${folder}/web/${file}`;
    }
  }
  return found;
}

const manifest = { covers: await scan("covers"), authors: await scan("authors") };
writeFileSync(
  join(root, "src", "app", "data", "image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log(
  `images: ${Object.keys(manifest.covers).length} book covers, ${Object.keys(manifest.authors).length} author photos`
);
