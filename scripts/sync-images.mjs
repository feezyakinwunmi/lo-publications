// Scans public/covers, public/authors, and public/team and writes the list of available
// images to src/app/data/image-manifest.json. Runs automatically before
// `npm run dev` and `npm run build`; run `npm run images` to refresh by hand.
//
// Each image is optimized to a web-sized WebP in public/<folder>/web/:
// - covers: 450x600 (3:4 ratio) using contain + white background (prevents distortion & CLS)
// - authors: 400x400 (1:1 ratio) square avatar
// - team: 300x300 (1:1 ratio) square avatar
import { readdirSync, writeFileSync, existsSync, mkdirSync, statSync, copyFileSync } from "node:fs";
import { join, parse } from "node:path";

const root = process.cwd();
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;
const FORCE = process.argv.includes("--force");

// slugified filename -> catalogue slug
const ALIASES = {
  covers: {
    "a-complete-guide-to-publishing5": "a-complete-guide-to-publishing",
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
    "the-end-of-shadows": "the-end-of-shadows-from-adam-to-christ-promise-law-kingship-and-their-fulfilment-in-christ",
    "the-nation": "the-nations-book",
    "the-protocol-of-fasting": "the-protocol-of-fasting-biblical-patterns-principles-and-practices-for-fasting",
    "spiritual-encounters": "spiritual-encounters-knowing-god-by-koinonia",
    "working-with-god": "working-with-god-a-comprehensive-biblical-study-of-work-profession-calling-skill-enterprise-and-divine-assessment",
    "17d28aab-c046-4db4-b23b-902a3ab4515a": "light-at-the-end-of-the-tunnel",
    "long-trek-1": "the-long-trek",
    "pre-k": "mathematics-coursebook-pre-k",
    "pry-1": "mathematics-coursebook-grade-1",
    "pry-2": "mathematics-coursebook-grade-2",
    "pry-3": "mathematics-coursebook-grade-3",
    "pry-4": "mathematics-coursebook-grade-4",
    "pry-5": "mathematics-coursebook-grade-5",
    "pry-6": "mathematics-coursebook-grade-6",
    "pry-1-plus": "my-spelling-adventure-book-1",
    "pry-1-plus-1": "my-spelling-adventure-book-1",
    "pry-2-plus": "my-spelling-adventure-book-2",
    "pry-3-plus": "my-spelling-adventure-book-3",
    "pry-4-plus": "my-spelling-adventure-book-4",
    "pry-5-plus": "my-spelling-adventure-book-5",
    "pry-6-plus": "my-spelling-adventure-book-6",
    "prsyer": "prayer-journal-2027",
    "prsyer-2": "intercessors-prayer-guide-2027",
    "screenshot-2026-11-20-135516": "adult-sunday-bible-study-manual-fruitful-in-every-good-work-2027",
    "screenshot-2026-11-20-135621": "sodgem-midweek-bible-study-manual-2027",
  },
  authors: {
    "ayokunle-bamigboye": "david-cross",
    "pastor-ireti-sholola": "ireti-sholola",
    "bishop-jesse-dibal": "jesse-dibal",
  },
  team: {},
};

// Must match slugify() in src/app/data/catalogue.ts; "_s" covers apostrophes
// that file systems or downloads turned into underscores.
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/_s\b/g, "s")
    .replace(/\+/g, "-plus")
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

async function ensureStaticAssets() {
  const p = (rel) => join(root, "public", rel);

  // Logo fallback
  if (existsSync(p("logolop.png")) && !existsSync(p("logo.png"))) {
    copyFileSync(p("logolop.png"), p("logo.png"));
  }

  // Deborah Adebayo cover fallback
  if (existsSync(p("covers/names-ive-worn.jpeg")) && !existsSync(p("niw.jpg"))) {
    copyFileSync(p("covers/names-ive-worn.jpeg"), p("niw.jpg"));
  }

  // Missing pexels fallback
  if (existsSync(p("covers/names-ive-worn.jpeg")) && !existsSync(p("pexels-jessbaileydesign-762685.png"))) {
    copyFileSync(p("covers/names-ive-worn.jpeg"), p("pexels-jessbaileydesign-762685.png"));
  }

  if (!sharp) return;

  // Publishing experience strip
  if (existsSync(p("book.jpg")) && !existsSync(p("publishing-experience.webp"))) {
    await sharp(p("book.jpg"))
      .resize({ width: 960, height: 420, fit: "cover", position: "center" })
      .webp({ quality: 80 })
      .toFile(p("publishing-experience.webp"));
  }
  if (existsSync(p("publishing-experience.webp")) && !existsSync(p("img1.jpg"))) {
    await sharp(p("publishing-experience.webp")).jpeg({ quality: 80 }).toFile(p("img1.jpg"));
  }

  // Author principles 4:5 visual
  if (existsSync(p("book.jpg")) && !existsSync(p("author-principles.webp"))) {
    await sharp(p("book.jpg"))
      .resize({ width: 600, height: 750, fit: "cover", position: "center" })
      .webp({ quality: 82 })
      .toFile(p("author-principles.webp"));
  }

  // OpenGraph fallback images
  if (!existsSync(p("og-home.jpg"))) {
    const ogHomeSvg = Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#141010" />
        <text x="100" y="240" font-family="sans-serif" font-size="28" font-weight="700" fill="#e0474d">LO PUBLICATIONS</text>
        <text x="100" y="320" font-family="sans-serif" font-size="56" font-weight="900" fill="#ffffff">Your Story Deserves a Book</text>
        <text x="100" y="380" font-family="sans-serif" font-size="24" fill="#cccccc">Editorial, cover design, formatting, and publishing services.</text>
      </svg>
    `);
    await sharp(ogHomeSvg).jpeg({ quality: 90 }).toFile(p("og-home.jpg"));
  }

  if (!existsSync(p("og-books.jpg"))) {
    const ogBooksSvg = Buffer.from(`
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#141010" />
        <text x="100" y="240" font-family="sans-serif" font-size="28" font-weight="700" fill="#e0474d">LO PUBLICATIONS CATALOGUE</text>
        <text x="100" y="320" font-family="sans-serif" font-size="56" font-weight="900" fill="#ffffff">Our Published Works</text>
        <text x="100" y="380" font-family="sans-serif" font-size="24" fill="#cccccc">Browse our catalogue of published books across diverse genres.</text>
      </svg>
    `);
    await sharp(ogBooksSvg).jpeg({ quality: 90 }).toFile(p("og-books.jpg"));
  }
}

async function scan(folder) {
  const dir = join(root, "public", folder);
  const webDir = join(dir, "web");
  const found = {};

  if (existsSync(dir)) {
    mkdirSync(webDir, { recursive: true });
    for (const file of readdirSync(dir).sort()) {
      if (!IMAGE.test(file)) continue;
      let name = slugify(parse(file).name);
      // "pastor-kayode-adekoya.jpg" -> "kayode-adekoya": titles aren't part of author slugs
      if (folder === "authors") name = name.replace(/^(pastor|bishop|mrs|mr|dr)-/, "");
      const slug = ALIASES[folder]?.[name] ?? name;
      found[slug] = `/${folder}/${encodeURIComponent(file)}`;

      if (!sharp) continue;
      const src = join(dir, file);
      const out = join(webDir, `${slug}.webp`);

      const needsBuild =
        FORCE ||
        !existsSync(out) ||
        statSync(out).mtimeMs < statSync(src).mtimeMs;

      if (needsBuild) {
        try {
          if (folder === "covers") {
            await sharp(src, { limitInputPixels: false })
              .resize({ width: 450, height: 600, fit: "cover", position: "center" })
              .webp({ quality: 82 })
              .toFile(out);
          } else if (folder === "authors") {
            await sharp(src)
              .resize({ width: 400, height: 400, fit: "cover", position: "top" })
              .webp({ quality: 82 })
              .toFile(out);
          } else if (folder === "team") {
            await sharp(src)
              .resize({ width: 300, height: 300, fit: "cover", position: "top" })
              .webp({ quality: 82 })
              .toFile(out);
          }
        } catch (err) {
          console.warn(`Failed to optimize ${src}:`, err.message);
        }
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

await ensureStaticAssets();

const manifest = {
  covers: await scan("covers"),
  authors: await scan("authors"),
  team: await scan("team"),
};

writeFileSync(
  join(root, "src", "app", "data", "image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n"
);
console.log(
  `images: ${Object.keys(manifest.covers).length} book covers, ${Object.keys(manifest.authors).length} author photos, ${Object.keys(manifest.team).length} team photos`
);
