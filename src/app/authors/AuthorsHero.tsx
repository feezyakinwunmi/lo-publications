"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BookCover from "../components/BookCover";
import { CATALOGUE, CATALOGUE_AUTHORS, CATEGORIES, authorHref, type CatalogueBook } from "../data/catalogue";

// Real covers first, then one title from each shelf so the slider shows the range
function pickSliderBooks(): CatalogueBook[] {
  const withCovers = CATALOGUE.filter((b) => b.coverImage);
  const picked = new Set(withCovers.map((b) => b.slug));
  const spread: CatalogueBook[] = [];
  for (let round = 0; round < 2; round++) {
    for (const cat of CATEGORIES) {
      const next = CATALOGUE.filter((b) => b.category === cat.key && !picked.has(b.slug))[0];
      if (next) {
        picked.add(next.slug);
        spread.push(next);
      }
    }
  }
  // Interleave so real covers are spread across both columns
  const out: CatalogueBook[] = [];
  const max = Math.max(withCovers.length, spread.length);
  for (let i = 0; i < max; i++) {
    if (spread[i]) out.push(spread[i]);
    if (withCovers[i]) out.push(withCovers[i]);
  }
  return out;
}

const sliderBooks = pickSliderBooks();
const columnA = sliderBooks.filter((_, i) => i % 2 === 0);
const columnB = sliderBooks.filter((_, i) => i % 2 === 1);

function SliderColumn({
  books,
  direction,
  duration,
}: {
  books: CatalogueBook[];
  direction: "up" | "down";
  duration: string;
}) {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex flex-col ${direction === "up" ? "marquee-up" : "marquee-down"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {[...books, ...books].map((book, i) => (
          <Link
            key={`${book.slug}-${i}`}
            href={authorHref(book.authorSlug)}
            aria-hidden={i >= books.length}
            tabIndex={i >= books.length ? -1 : undefined}
            className="group mb-5 block"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_20px_40px_-18px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]">
              <BookCover book={book} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AuthorsHero() {
  return (
    <section className="relative overflow-hidden bg-[#141010] text-white">
      {/* Warm glow behind the sliders */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-[#8d171c]/40 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-28 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-10 lg:pt-0">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:py-32"
        >
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[.25em] text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#e0474d]" />
            Meet Our Pen Masters
          </p>
          <h1 className="text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            Our Authors
            <br />
            Write With{" "}
            <span className="font-serif italic font-bold text-[#e0474d]">Purpose.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
            From memoirs and devotionals to children&apos;s stories and business
            guides, these are the voices we&apos;ve been honoured to bring from
            manuscript to bookshelf.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/books"
              className="group inline-flex items-center gap-2 rounded-full bg-[#8d171c] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#a91d23] hover:shadow-[0_0_40px_rgba(224,71,77,.35)]"
            >
              Browse All Books
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Become an Author
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
            {[
              { value: CATALOGUE_AUTHORS.length, label: "Authors" },
              { value: `${CATALOGUE.length}+`, label: "Titles published" },
              { value: CATEGORIES.length, label: "Categories" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two infinite columns scrolling in opposite directions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="marquee-pause relative grid h-[520px] grid-cols-2 gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] sm:h-[620px] lg:h-[100svh] lg:-rotate-3"
        >
          <SliderColumn books={columnA} direction="up" duration="45s" />
          <SliderColumn books={columnB} direction="down" duration="50s" />
        </motion.div>
      </div>
    </section>
  );
}
