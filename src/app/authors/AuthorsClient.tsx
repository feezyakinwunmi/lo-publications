// src/app/authors/AuthorsClient.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Feather,
  Megaphone,
  MessagesSquare,
  Palette,
  PenTool,
  Printer,
  Quote,
  ScanText,
} from "lucide-react";
import { featuredAuthors } from "../data/authors";
import { AUTHOR_DIRECTORY, CATALOGUE, authorHref, type CatalogueBook } from "../data/catalogue";
import AuthorAvatar from "./AuthorAvatar";
import AuthorsHero from "./AuthorsHero";
import BookCover from "../components/BookCover";

// Two rows for the books strip, alternating titles so neighbours differ
const stripBooks = [...CATALOGUE].sort((a, b) => Number(!!b.coverImage) - Number(!!a.coverImage)).slice(0, 36);
const stripRowA = stripBooks.filter((_, i) => i % 2 === 0);
const stripRowB = stripBooks.filter((_, i) => i % 2 === 1);

const steps = [
  {
    icon: Feather,
    title: "Editing",
    text: "Developmental edits, copy-editing and proofreading that sharpen your message while keeping your voice.",
  },
  {
    icon: Palette,
    title: "Cover & Design",
    text: "Covers and interiors designed to stand out on a shelf and read beautifully on every page.",
  },
  {
    icon: ScanText,
    title: "Typesetting",
    text: "Print-ready and eBook files, formatted to industry standards with ISBN support.",
  },
  {
    icon: Printer,
    title: "Print & Distribution",
    text: "Quality printing and distribution so readers can find your book online and in person.",
  },
  {
    icon: Megaphone,
    title: "Publicity",
    text: "Launch plans, author branding and marketing that put your book in front of the right readers.",
  },
  {
    icon: MessagesSquare,
    title: "Consultation",
    text: "One-on-one guidance from first draft to finished book, so you're never publishing alone.",
  },
];

// Every author with a quote, credited with their first catalogue title
const reviews = featuredAuthors
  .filter((a) => a.quote)
  .map((a) => ({ ...a, firstTitle: a.books[0]?.title ?? CATALOGUE.find((b) => b.authorSlug === a.slug)?.title }))
  .filter((a) => a.firstTitle);

// Authors with a photo first, then those with the most titles
const penMasters = [...AUTHOR_DIRECTORY]
  .sort((a, b) => Number(!!b.photo) - Number(!!a.photo) || b.books.length - a.books.length)
  .slice(0, 8);

function BookRow({ books, reverse }: { books: CatalogueBook[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-5 pr-5 ${reverse ? "marquee-right" : "marquee-left"}`}
        style={{ ["--marquee-duration" as string]: reverse ? "70s" : "60s" }}
      >
        {[...books, ...books].map((book, i) => (
          <Link
            key={`${book.slug}-${i}`}
            href={authorHref(book.authorSlug)}
            aria-hidden={i >= books.length}
            tabIndex={i >= books.length ? -1 : undefined}
            className="group w-36 shrink-0 sm:w-44"
          >
            <div className="overflow-hidden rounded-xl shadow-[0_16px_30px_-16px_rgba(0,0,0,.45)] transition-transform duration-500 group-hover:-translate-y-2">
              <BookCover book={book} compact />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] ${
        light ? "text-white/50" : "text-black/45"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-[#8d171c]" />
      {children}
    </p>
  );
}

export default function AuthorsClient() {
  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* ================= HERO SLIDER ================= */}
      <AuthorsHero />

      {/* ================= OUR BOOKS ================= */}
      <section className="overflow-hidden py-24">
        <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Our Amazing Books</SectionLabel>
            <h2 className="max-w-2xl text-4xl font-black leading-[1] tracking-[-.03em] text-black md:text-6xl">
              Our Authors Lead With{" "}
              <span className="font-serif italic font-bold text-[#8d171c]">Heart.</span>
            </h2>
          </motion.div>
          <Link
            href="/books"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8d171c]"
          >
            Browse all {CATALOGUE.length} books
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="marquee-pause space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <BookRow books={stripRowA} />
          <BookRow books={stripRowB} reverse />
        </div>
      </section>

      {/* ================= HOW WE HELP ================= */}
      <section className="bg-white px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionLabel>From Manuscript to Bookshelf</SectionLabel>
              <h2 className="text-4xl font-black leading-[1] tracking-[-.03em] text-black md:text-5xl">
                How We Hold Your Hand From Dream to{" "}
                <span className="font-serif italic font-bold text-[#8d171c]">Reality</span>
              </h2>
            </motion.div>
            <p className="max-w-lg text-lg leading-relaxed text-black/60 lg:justify-self-end">
              Every author on this page walked the same path with us. Six stages, one team, and a finished book
              you&apos;re proud to hold.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden bg-white p-8 transition-colors duration-500 hover:bg-[#141010]"
              >
                <span className="absolute right-6 top-4 text-6xl font-black text-black/[.05] transition-colors duration-500 group-hover:text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d171c]/10 text-[#8d171c] transition-colors duration-500 group-hover:bg-[#8d171c] group-hover:text-white">
                  <step.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-black transition-colors duration-500 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-black/60 transition-colors duration-500 group-hover:text-white/65">
                  {step.text}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d171c] transition-colors group-hover:text-[#e0474d]"
                >
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      {reviews.length > 0 && (
        <section className="relative overflow-hidden bg-[#8d171c] py-24 text-white">
          <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto mb-12 max-w-7xl px-5 sm:px-8">
            <SectionLabel light>In Their Own Words</SectionLabel>
            <h2 className="text-4xl font-black leading-[1] tracking-[-.03em] md:text-6xl">
              Our Reviews Are{" "}
              <span className="font-serif italic font-bold text-white/70">Loud.</span>
            </h2>
          </div>

          <div className="marquee-pause flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex shrink-0 gap-6 pr-6 marquee-left" style={{ ["--marquee-duration" as string]: "55s" }}>
              {[...reviews, ...reviews].map((author, i) => (
                <figure
                  key={`${author.slug}-${i}`}
                  aria-hidden={i >= reviews.length}
                  className="flex w-[320px] shrink-0 flex-col rounded-3xl bg-white/[.08] p-7 ring-1 ring-white/15 backdrop-blur-sm sm:w-[400px]"
                >
                  <Quote className="mb-4 h-8 w-8 text-white/30" />
                  <blockquote className="flex-1 leading-relaxed text-white/90">&ldquo;{author.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                    <AuthorAvatar author={author} size="sm" ring="ring-2 ring-white/20" />
                    <div>
                      <p className="font-bold">{author.name}</p>
                      <p className="text-xs text-white/60">Author of {author.firstTitle}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PEN MASTERS ================= */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionLabel>Meet Our Pen Masters</SectionLabel>
            <h2 className="text-4xl font-black leading-[1] tracking-[-.03em] text-black md:text-6xl">
              Our Well-Seasoned{" "}
              <span className="font-serif italic font-bold text-[#8d171c]">Authors</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-black/60">
              Ministers, educators, entrepreneurs, parents and storytellers. Meet the {AUTHOR_DIRECTORY.length}{" "}
              voices behind our {CATALOGUE.length} titles.
            </p>
            <Link
              href="/authors/all"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#8d171c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#6b1215] hover:shadow-[0_14px_30px_-10px_rgba(141,23,28,.6)]"
            >
              See all {AUTHOR_DIRECTORY.length} authors
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {penMasters.map((author, i) => (
              <motion.div
                key={author.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={i % 2 === 1 ? "sm:translate-y-8" : ""}
              >
                <Link
                  href={authorHref(author.slug)}
                  className="group flex flex-col items-center rounded-3xl bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(141,23,28,.5)]"
                >
                  <AuthorAvatar
                    author={{ name: author.name, photo: author.photo }}
                    size="md"
                    ring="ring-4 ring-[#f8f6f3] transition-all duration-500 group-hover:ring-[#8d171c]/20"
                  />
                  <p className="mt-4 line-clamp-2 text-sm font-bold leading-snug text-black transition-colors group-hover:text-[#8d171c]">
                    {author.name}
                  </p>
                  <p className="mt-1 text-xs text-black/45">
                    {author.books.length} {author.books.length === 1 ? "book" : "books"}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 pb-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#141010] px-8 py-16 text-center text-white md:px-16"
        >
          <motion.div
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#8d171c]/60 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <div className="relative">
            <PenTool className="mx-auto mb-5 h-10 w-10 text-white/70" />
            <h2 className="text-3xl font-bold md:text-5xl">Would You Like to Be Our Next Featured Author?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
              Your manuscript deserves the same care, craft, and attention. Tell us about your book, and we&apos;ll
              help you take it from page to reader.
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
