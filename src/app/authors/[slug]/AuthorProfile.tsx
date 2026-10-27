// src/app/authors/[slug]/AuthorProfile.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle,
  Compass,
  Link as LinkIcon,
  Quote,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";
import type { FeaturedAuthor } from "../../data/authors";
import AuthorAvatar from "../AuthorAvatar";
import TiltCard from "../../components/TiltCard";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long" });

export default function AuthorProfile({
  author,
  others,
}: {
  author: FeaturedAuthor;
  others: FeaturedAuthor[];
}) {
  const [copied, setCopied] = useState(false);
  const book = author.books[0];

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${author.name} | LO Publications`, text: author.bio, url });
      } catch {
        // Share sheet dismissed
      }
      return;
    }
    copyLink();
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f5f2ed] px-5 pb-24 pt-32 sm:px-8 lg:px-10">
        <motion.div
          className="pointer-events-none absolute -right-[12%] -top-[10%] h-[560px] w-[560px] rounded-[48%_52%_60%_40%] bg-[#e5d8ce]"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/authors"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-black/50 transition hover:text-[#8d171c]"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            All Featured Authors
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-5">
                <AuthorAvatar author={author} size="lg" ring="ring-4 ring-white" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#8d171c]">
                    Featured Author
                  </p>
                  <p className="mt-1 text-sm text-black/50">{author.profession}</p>
                </div>
              </div>

              <h1 className="text-5xl font-black leading-[.95] tracking-[-.04em] text-black sm:text-6xl lg:text-7xl">
                {author.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/60">{author.bio}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={share}
                  className="inline-flex items-center gap-2 rounded-full bg-[#8d171c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6b1215]"
                >
                  <Share2 size={16} />
                  Share Profile
                </button>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:border-[#8d171c] hover:text-[#8d171c]"
                >
                  {copied ? <Check size={16} /> : <LinkIcon size={16} />}
                  {copied ? "Link Copied" : "Copy Link"}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 70 }}
              className="relative mx-auto w-[240px] sm:w-[300px]"
            >
              <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-xl bg-[#8d171c]" />
              <TiltCard className="group" maxTilt={12} glow="rgba(255,255,255,0.25)">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-[25px_30px_60px_rgba(0,0,0,.3)]">
                  <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= THE BOOK ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {author.books.map((b) => (
          <motion.div
            key={b.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 rounded-[28px] bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_1.3fr]"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">The Book</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-black md:text-4xl">{b.title}</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#8d171c]/10 px-3 py-1 text-xs font-semibold text-[#8d171c]">
                  {b.genre}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  <Calendar size={12} />
                  {formatDate(b.publishedDate)}
                </span>
                {b.formats.map((format) => (
                  <span key={format} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-gray-700">{b.synopsis}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {b.highlights.map((highlight, i) => (
                  <motion.li
                    key={highlight}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="rounded-2xl border border-gray-100 bg-[#f8f6f3] p-4 text-sm leading-snug text-gray-700 transition hover:-translate-y-1 hover:border-[#8d171c]/30 hover:shadow-md"
                  >
                    <Sparkles size={16} className="mb-2 text-[#8d171c]" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ================= MISSION & QUOTE ================= */}
      <section className="relative overflow-hidden bg-[#8d171c] py-20 text-white">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Target size={22} />
            </div>
            <h2 className="text-3xl font-bold">Why This Book Exists</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{author.mission}</p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
          >
            <Quote className="absolute right-6 top-6 h-12 w-12 text-white/15" />
            <p className="text-xl italic leading-relaxed text-white/90">&ldquo;{author.quote}&rdquo;</p>
            <footer className="mt-6 flex items-center gap-3">
              <AuthorAvatar author={author} size="sm" ring="ring-2 ring-white/40" />
              <span className="font-semibold">{author.name}</span>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ================= PUBLISHING JOURNEY ================= */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Behind the Book</p>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">The Publishing Journey</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Where the Author Started", icon: Compass, items: author.journey.challenges },
            { title: "How We Helped", icon: CheckCircle, items: author.journey.support },
          ].map((col, colIndex) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIndex * 0.15 }}
                className={`rounded-3xl bg-white border border-gray-100 p-8 shadow-sm`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8d171c]/10 text-[#8d171c]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-black">{col.title}</h3>
                </div>
                <ol className="relative space-y-5 border-l-2 border-dashed border-[#8d171c]/20 pl-6">
                  {col.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="relative text-gray-700"
                    >
                      <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-[#8d171c] shadow" />
                      {item}
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= MORE AUTHORS ================= */}
      {others.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-bold text-black md:text-4xl">More Featured Authors</h2>
              <Link
                href="/authors"
                className="group hidden items-center gap-2 text-sm font-semibold text-[#8d171c] sm:inline-flex"
              >
                View All
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {others.slice(0, 4).map((other, i) => (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/authors/${other.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-gray-100 bg-[#f8f6f3] p-4 transition hover:-translate-y-1 hover:border-[#8d171c]/30 hover:bg-white hover:shadow-xl"
                  >
                    <div className="w-16 shrink-0 overflow-hidden rounded-md shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <img src={other.books[0].coverImage} alt={other.books[0].title} className="aspect-[3/4] w-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold leading-tight text-black transition-colors group-hover:text-[#8d171c]">
                        {other.name}
                      </p>
                      <p className="mt-1 flex items-start gap-1 text-xs text-gray-500">
                        <BookOpen size={12} className="mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{other.books[0].title}</span>
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-black md:text-4xl">Ready to Tell Your Story?</h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Join authors like {author.name} and publish a book you&apos;re proud of.
        </p>
        <Link
          href="/submit"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#8d171c] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#6b1215] hover:shadow-xl"
        >
          Start Your Book
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </main>
  );
}
