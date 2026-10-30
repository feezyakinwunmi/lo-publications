"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import AuthorAvatar from "../AuthorAvatar";
import AuthorModal from "../AuthorModal";
import BookCover from "../../components/BookCover";
import { type DirectoryAuthor } from "../../data/catalogue";
import { findInDirectory } from "../../data/siteContent";
import { useSiteContent } from "@/app/data/SiteContentProvider";

export default function AllAuthorsClient() {
  const { authorDirectory: AUTHOR_DIRECTORY, catalogue: CATALOGUE } = useSiteContent();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // The ?author=<slug> param drives the pop-up, so old profile URLs (redirected
  // here) and shared links open straight to that author
  const authorParam = searchParams.get("author");
  const selected = authorParam ? findInDirectory(AUTHOR_DIRECTORY, authorParam) ?? null : null;

  const open = (author: DirectoryAuthor) => router.replace(`/authors/all?author=${author.slug}`, { scroll: false });
  const close = useCallback(() => router.replace("/authors/all", { scroll: false }), [router]);

  const authors = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return AUTHOR_DIRECTORY;
    return AUTHOR_DIRECTORY.filter(
      (a) => a.name.toLowerCase().includes(term) || a.books.some((b) => b.title.toLowerCase().includes(term))
    );
  }, [AUTHOR_DIRECTORY, query]);

  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* Header */}
      <section className="relative overflow-hidden bg-[#141010] px-5 pb-16 pt-32 text-white sm:px-8 md:pt-40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#8d171c]/45 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/authors"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Featured Authors
          </Link>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.25em] text-white/50">The Pen Masters</p>
              <h1 className="text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-6xl">
                All Our{" "}
                <span className="font-serif italic font-bold text-[#e0474d]">Authors</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/60">
                {AUTHOR_DIRECTORY.length} authors and {CATALOGUE.length} titles. Tap any author to see their story
                and books.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search authors or books"
                aria-label="Search authors or books"
                className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-10 text-sm text-white placeholder-white/40 transition focus:border-white/40 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {authors.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-black">No authors found</h2>
            <button onClick={() => setQuery("")} className="mt-4 text-sm font-semibold text-[#8d171c] hover:underline">
              Show all authors
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authors.map((author, index) => (
              <motion.button
                key={author.slug}
                onClick={() => open(author)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white text-left shadow-sm transition-shadow duration-500 hover:shadow-[0_30px_60px_-24px_rgba(141,23,28,.4)]"
              >
                {/* Fanned covers */}
                <div className="relative flex h-56 items-end justify-center overflow-hidden bg-gradient-to-br from-[#f5f2ed] to-[#e5d8ce] pb-0">
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#8d171c] transition-transform duration-500 ease-out group-hover:scale-y-100" />
                  {author.books.slice(0, 3).map((book, i, arr) => {
                    const offset = i - (arr.length - 1) / 2;
                    return (
                      <div
                        key={book.slug}
                        className="absolute bottom-[-18px] w-28 overflow-hidden rounded-md shadow-[10px_14px_28px_rgba(0,0,0,.3)] transition-transform duration-500 group-hover:-translate-y-3"
                        style={{
                          transform: `translateX(${offset * 62}px) rotate(${offset * 8}deg)`,
                          zIndex: 3 - Math.abs(offset),
                        }}
                      >
                        <BookCover book={book} compact />
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-1 items-center gap-4 p-6">
                  <AuthorAvatar author={{ name: author.name, photo: author.photo }} size="sm" />
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-lg font-bold text-black transition-colors group-hover:text-[#8d171c]">
                      {author.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {author.books.length} {author.books.length === 1 ? "book" : "books"}
                      {author.profile && ` · ${author.profile.profession.split(",")[0]}`}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-[#8d171c] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </section>

      <AnimatePresence>{selected && <AuthorModal author={selected} onClose={close} />}</AnimatePresence>
    </main>
  );
}
