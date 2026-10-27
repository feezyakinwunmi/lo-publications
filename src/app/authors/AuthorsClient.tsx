// src/app/authors/AuthorsClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Quote,
  Search,
  Star,
  X,
} from "lucide-react";
import { featuredAuthors, type FeaturedAuthor } from "../data/authors";
import AuthorAvatar from "./AuthorAvatar";
import TiltCard from "../components/TiltCard";

const spotlightAuthors = featuredAuthors.filter((author) => author.featured);
const allBooks = featuredAuthors.flatMap((author) =>
  author.books.map((book) => ({ ...book, author }))
);

// Group the detailed genres into broad shelves for filtering
function shelfFor(genre: string) {
  const g = genre.toLowerCase();
  if (g.includes("memoir")) return "Memoir";
  if (g.includes("children")) return "Children's";
  if (g.includes("entrepreneur")) return "Faith & Business";
  return "Inspirational";
}

const shelves = ["All", ...Array.from(new Set(allBooks.map((b) => shelfFor(b.genre))))];

export default function AuthorsClient() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [query, setQuery] = useState("");
  const [shelf, setShelf] = useState("All");

  useEffect(() => {
    if (!autoPlay || spotlightAuthors.length < 2) return;
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % spotlightAuthors.length),
      6000
    );
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goTo = (index: number) => {
    setCurrent((index + spotlightAuthors.length) % spotlightAuthors.length);
    setAutoPlay(false);
  };

  const filteredAuthors = useMemo(() => {
    const term = query.trim().toLowerCase();
    return featuredAuthors.filter((author) => {
      const matchesShelf =
        shelf === "All" || author.books.some((b) => shelfFor(b.genre) === shelf);
      const matchesQuery =
        !term ||
        author.name.toLowerCase().includes(term) ||
        author.profession.toLowerCase().includes(term) ||
        author.books.some(
          (b) =>
            b.title.toLowerCase().includes(term) ||
            b.genre.toLowerCase().includes(term)
        );
      return matchesShelf && matchesQuery;
    });
  }, [query, shelf]);

  const spotlight = spotlightAuthors[current];

  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f5f2ed] px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <motion.div
          className="pointer-events-none absolute -right-[10%] top-[8%] h-[520px] w-[520px] rounded-[48%_52%_60%_40%] bg-[#e5d8ce]"
          animate={{ rotate: [0, 8, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-[25%] -left-[8%] h-[380px] w-[380px] rounded-[60%_40%_45%_55%] bg-[#e8dfd7]"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-black/40">
              <span className="h-2 w-2 rounded-full bg-[#8d171c]" />
              Our Pen Masters
            </p>
            <h1 className="text-5xl font-black leading-[.92] tracking-[-.05em] text-black sm:text-6xl lg:text-7xl">
              Featured
              <br />
              <span className="text-[#8d171c]">Authors</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-black/60">
              Every book begins with a voice. Meet the authors who trusted us with
              their stories, and explore the books we were honoured to bring to
              readers.
            </p>

            <div className="mt-10 flex flex-wrap gap-10">
              {[
                { value: featuredAuthors.length, label: "Featured authors" },
                { value: allBooks.length, label: "Books spotlighted" },
                { value: shelves.length - 1, label: "Genres" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-4xl font-black text-[#8d171c]">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-black/45">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fanned book covers */}
          <div className="relative flex h-[380px] items-center justify-center sm:h-[460px]">
            <motion.div
              className="absolute h-[260px] w-[260px] rounded-[46%_54%_60%_40%] bg-[#8d171c] sm:h-[340px] sm:w-[340px]"
              animate={{ borderRadius: ["46% 54% 60% 40%", "56% 44% 42% 58%", "46% 54% 60% 40%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            {allBooks.slice(0, 5).map((book, index) => {
              const x = [-130, -65, 0, 65, 130][index];
              const r = [-14, -7, 0, 7, 14][index];
              return (
                <motion.div
                  key={book.slug}
                  className="absolute w-[130px] sm:w-[170px]"
                  style={{ zIndex: index === 2 ? 10 : 5 - Math.abs(index - 2) }}
                  initial={{ opacity: 0, y: 80, x: 0, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, x, rotate: r }}
                  transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 90, damping: 14 }}
                  whileHover={{ y: -24, scale: 1.08, rotate: 0, zIndex: 20 }}
                >
                  <Link href={`/authors/${book.author.slug}`} aria-label={`${book.title} by ${book.author.name}`}>
                    <div className="aspect-[3/4] overflow-hidden rounded-lg border border-white/70 bg-white shadow-[18px_24px_50px_rgba(0,0,0,.25)]">
                      <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= AUTHOR SPOTLIGHT ================= */}
      {spotlight && (
        <section className="relative overflow-hidden bg-[#8d171c] py-20 text-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.25em] text-white/60">
                  Author Spotlight
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">In Their Own Words</h2>
              </div>
              {spotlightAuthors.length > 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => goTo(current - 1)}
                    className="rounded-full border border-white/25 p-3 transition hover:bg-white hover:text-[#8d171c]"
                    aria-label="Previous author"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => goTo(current + 1)}
                    className="rounded-full border border-white/25 p-3 transition hover:bg-white hover:text-[#8d171c]"
                    aria-label="Next author"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={spotlight.slug}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
                className="grid items-center gap-10 lg:grid-cols-[280px_1fr]"
              >
                <div className="relative mx-auto w-[220px] lg:w-full">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/20">
                    <img
                      src={spotlight.books[0].coverImage}
                      alt={spotlight.books[0].title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6">
                    <AuthorAvatar author={spotlight} size="lg" ring="ring-4 ring-[#8d171c]" />
                  </div>
                </div>

                <div>
                  <Quote className="mb-4 h-10 w-10 text-white/30" />
                  <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
                    &ldquo;{spotlight.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div>
                      <p className="text-lg font-bold">{spotlight.name}</p>
                      <p className="text-sm text-white/60">
                        Author of <em>{spotlight.books[0].title}</em>
                      </p>
                    </div>
                    <Link
                      href={`/authors/${spotlight.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#8d171c] transition hover:shadow-xl"
                    >
                      Meet the Author
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {spotlightAuthors.length > 1 && (
              <div className="mt-12 flex gap-2">
                {spotlightAuthors.map((author, index) => (
                  <button
                    key={author.slug}
                    onClick={() => goTo(index)}
                    className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/20"
                    aria-label={`Show ${author.name}`}
                  >
                    {index === current && (
                      <motion.span
                        className="block h-full bg-white"
                        initial={{ width: autoPlay ? "0%" : "100%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: autoPlay ? 6 : 0, ease: "linear" }}
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= ALL AUTHORS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">
              The Collection
            </p>
            <h2 className="mt-3 text-4xl font-bold text-black md:text-5xl">Authors &amp; Their Books</h2>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search authors or books"
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm text-black shadow-sm transition focus:border-[#8d171c] focus:outline-none focus:ring-2 focus:ring-[#8d171c]/15"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {shelves.map((name) => (
            <button
              key={name}
              onClick={() => setShelf(name)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                shelf === name ? "text-white" : "bg-white text-gray-600 hover:text-[#8d171c]"
              }`}
            >
              {shelf === name && (
                <motion.span
                  layoutId="shelf-pill"
                  className="absolute inset-0 rounded-full bg-[#8d171c]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{name}</span>
            </button>
          ))}
        </div>

        {filteredAuthors.length === 0 ? (
          <div className="py-20 text-center">
            <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <Search size={30} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-black">No authors found</h3>
            <p className="mt-2 text-gray-600">Try a different name, title, or genre</p>
            <button
              onClick={() => {
                setQuery("");
                setShelf("All");
              }}
              className="mt-6 rounded-full bg-[#8d171c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6b1215]"
            >
              Show all authors
            </button>
          </div>
        ) : (
          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredAuthors.map((author, index) => (
                <AuthorCard key={author.slug} author={author} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-black px-8 py-16 text-center text-white md:px-16"
        >
          <motion.div
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#8d171c]/60 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <div className="relative">
            <PenTool className="mx-auto mb-5 h-10 w-10 text-white/70" />
            <h2 className="text-3xl font-bold md:text-5xl">Could You Be Our Next Featured Author?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Your manuscript deserves the same care, craft, and attention. Tell us
              about your book, and we&apos;ll help you take it from page to reader.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/submit"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#8d171c] transition hover:shadow-[0_0_40px_rgba(255,255,255,.3)]"
              >
                Submit Your Manuscript
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/publishing-journey"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold transition hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function AuthorCard({ author, index }: { author: FeaturedAuthor; index: number }) {
  const book = author.books[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <TiltCard className="group h-full">
        <Link
          href={`/authors/${author.slug}`}
          className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(141,23,28,.35)]"
        >
          {/* Book stage */}
          <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f2ed] to-[#e5d8ce] [perspective:900px]">
            <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#8d171c] transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <div className="relative w-36 transition-transform duration-500 group-hover:[transform:translateY(-8px)_rotateY(-18deg)]">
              <div className="aspect-[3/4] overflow-hidden rounded-r-md rounded-l-sm bg-white shadow-[12px_16px_30px_rgba(0,0,0,.3)]">
                <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
              </div>
              {/* spine shading */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-2 rounded-l-sm bg-gradient-to-r from-black/30 to-transparent" />
            </div>
            {author.featured && (
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#8d171c] shadow-sm">
                <Star size={11} fill="currentColor" />
                Spotlight
              </span>
            )}
            <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              {book.genre}
            </span>
          </div>

          {/* Author details */}
          <div className="relative flex flex-1 flex-col p-6">
            <div className="-mt-14 mb-4">
              <AuthorAvatar author={author} size="md" ring="ring-4 ring-white" />
            </div>
            <h3 className="text-xl font-bold text-black transition-colors group-hover:text-[#8d171c]">
              {author.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{author.profession}</p>

            <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#f8f6f3] p-3">
              <BookOpen size={16} className="mt-0.5 shrink-0 text-[#8d171c]" />
              <p className="text-sm font-semibold leading-snug text-black">{book.title}</p>
            </div>

            <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
              {book.synopsis}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8d171c]">
              Meet the Author
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </div>
        </Link>
      </TiltCard>
    </motion.article>
  );
}
