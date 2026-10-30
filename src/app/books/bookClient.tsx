// src/app/books/bookClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
import { X, BookOpen, User, Search, BookMarked, ArrowRight, Send, Sparkles, Layers } from "lucide-react";
import NextLink from "next/link";
import BookCover from "../components/BookCover";
import {
  CATEGORIES,
  authorHref,
  categoryOf,
  readLinkFor,
  type CatalogueBook,
  type CategoryKey,
} from "../data/catalogue";
import { useSiteContent } from "@/app/data/SiteContentProvider";

export default function BookClient() {
  const { catalogue: CATALOGUE, catalogueAuthors: CATALOGUE_AUTHORS } = useSiteContent();
  const categoryCounts = useMemo(
    () =>
      CATALOGUE.reduce<Record<string, number>>((acc, book) => {
        acc[book.category] = (acc[book.category] || 0) + 1;
        return acc;
      }, {}),
    [CATALOGUE]
  );
  const [selectedBook, setSelectedBook] = useState<CatalogueBook | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");
  const [activeAuthor, setActiveAuthor] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!selectedBook) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelectedBook(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedBook]);

  const filteredBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATALOGUE.filter(
      (b) =>
        (activeCategory === "all" || b.category === activeCategory) &&
        (activeAuthor === "all" || b.author === activeAuthor) &&
        (!q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    );
  }, [CATALOGUE, activeCategory, activeAuthor, searchQuery]);

  const isFiltered = activeCategory !== "all" || activeAuthor !== "all" || searchQuery.trim() !== "";

  // Unfiltered view is shown as one shelf per category
  const shelves = useMemo(
    () =>
      CATEGORIES.map((cat) => ({ ...cat, books: CATALOGUE.filter((b) => b.category === cat.key) })).filter(
        (s) => s.books.length > 0
      ),
    [CATALOGUE]
  );

  const clearFilters = () => {
    setActiveCategory("all");
    setActiveAuthor("all");
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen bg-[#f8f6f3] pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#8d171c]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8d171c]">
              <BookMarked size={14} />
              Our Catalogue
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl">Our Published Works</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Stories of faith, hope, learning and purpose, crafted with love and excellence by{" "}
              {CATALOGUE_AUTHORS.length} authors.
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="text-4xl font-black text-[#8d171c]">{CATALOGUE.length}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Titles</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#8d171c]">{CATEGORIES.length}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Categories</p>
            </div>
          </div>
        </motion.div>

        {/* Toolbar */}
        <div className="sticky top-16 z-30 -mx-5 mb-10 border-y border-black/5 bg-[#f8f6f3]/90 px-5 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 xl:top-20">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search books by title or author"
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#8d171c] focus:outline-none focus:ring-2 focus:ring-[#8d171c]/15"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <select
              value={activeAuthor}
              onChange={(e) => setActiveAuthor(e.target.value)}
              aria-label="Filter by author"
              className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-900 focus:border-[#8d171c] focus:outline-none focus:ring-2 focus:ring-[#8d171c]/15 sm:w-72"
            >
              <option value="all">All authors</option>
              {CATALOGUE_AUTHORS.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6">
            {[{ key: "all" as const, name: "All Books" }, ...CATEGORIES].map((cat) => {
              const isActive = activeCategory === cat.key;
              const count = cat.key === "all" ? CATALOGUE.length : categoryCounts[cat.key] || 0;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#8d171c] text-white shadow-md shadow-[#8d171c]/20"
                      : "border border-gray-200 bg-white text-gray-700 hover:border-[#8d171c] hover:text-[#8d171c]"
                  }`}
                >
                  {cat.name}
                  <span className={`ml-1.5 text-xs ${isActive ? "text-white/70" : "text-gray-400"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        {isFiltered ? (
          filteredBooks.length === 0 ? (
            <div className="py-24 text-center">
              <Search className="mx-auto mb-4 text-gray-300" size={56} />
              <p className="mb-2 text-lg text-gray-600">No books match your filters.</p>
              <button onClick={clearFilters} className="text-sm font-medium text-[#8d171c] hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-gray-500">
                Showing {filteredBooks.length} of {CATALOGUE.length} books
                <button onClick={clearFilters} className="ml-3 font-medium text-[#8d171c] hover:underline">
                  Clear filters
                </button>
              </p>
              <BookGrid books={filteredBooks} onSelect={setSelectedBook} />
            </>
          )
        ) : (
          <div className="space-y-16">
            {shelves.map((shelf) => (
              <section key={shelf.key} id={shelf.key} className="scroll-mt-48">
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-black/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-1.5 rounded-full" style={{ background: shelf.tone }} />
                    <h2 className="text-xl font-bold text-black md:text-2xl">{shelf.name}</h2>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-gray-500">
                      {shelf.books.length}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setActiveCategory(shelf.key);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="group hidden shrink-0 items-center gap-1 text-sm font-semibold text-[#8d171c] sm:inline-flex"
                  >
                    View category
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
                <BookGrid books={shelf.books} onSelect={setSelectedBook} />
              </section>
            ))}
          </div>
        )}

        {/* ===== Submit Manuscript CTA ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-900 via-red-800 to-amber-800 p-10 text-center shadow-xl md:p-16">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-amber-300 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-200">
                <Sparkles size={13} />
                Have a Story to Tell?
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Submit Your Manuscript
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/85">
                Whether you&apos;re a first-time author or a seasoned writer, we&apos;d love to hear your story.
                Share your manuscript with our team and let&apos;s bring it to life together.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                <NextLink
                  href="/submit"
                  onClick={() => sendGAEvent("event", "button_click", { value: "Submit Your Manuscript" })}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-red-900 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl sm:w-auto"
                >
                  <Send size={18} />
                  Submit Your Manuscript
                </NextLink>
              </div>
              <p className="pt-2 text-sm text-white/60">
                You keep 100% of your royalties · Full creative control · No upfront costs
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBook && <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
      </AnimatePresence>
    </main>
  );
}

function BookGrid({ books, onSelect }: { books: CatalogueBook[]; onSelect: (book: CatalogueBook) => void }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books.map((book, index) => (
        <motion.article
          key={book.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: (index % 5) * 0.05 }}
          className="group flex flex-col"
        >
          <button
            onClick={() => onSelect(book)}
            className="relative block w-full overflow-hidden rounded-xl text-left shadow-[0_14px_30px_-14px_rgba(0,0,0,.35)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_26px_50px_-20px_rgba(141,23,28,.45)]"
            aria-label={`View details for ${book.title}`}
          >
            <BookCover book={book} />
            <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/10 to-transparent pb-4 text-xs font-semibold tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              View details
            </span>
          </button>

          <h3 className="mt-4 line-clamp-2 text-sm font-bold leading-snug text-black">{book.title}</h3>
          <p className="mt-1 line-clamp-1 text-xs text-gray-500">{book.author}</p>

          <a
            href={readLinkFor(book)}
            target={book.readUrl ? "_blank" : undefined}
            rel={book.readUrl ? "noopener noreferrer" : undefined}
            onClick={() => sendGAEvent("event", "read_book", { value: book.title })}
            className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#8d171c]/25 px-3.5 py-1.5 text-xs font-semibold text-[#8d171c] transition hover:bg-[#8d171c] hover:text-white"
          >
            <BookOpen size={13} />
            Read
          </a>
        </motion.article>
      ))}
    </div>
  );
}

function BookModal({ book, onClose }: { book: CatalogueBook; onClose: () => void }) {
  const category = categoryOf(book.category);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl md:grid-cols-[280px_1fr]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={book.title}
      >
        <button
          onClick={onClose}
          className="group absolute right-4 top-4 z-20 rounded-full bg-white/95 p-2.5 shadow-md transition hover:bg-gray-100"
          aria-label="Close"
        >
          <X size={20} className="text-gray-800 transition-transform duration-300 group-hover:rotate-90" />
        </button>

        <div className="flex items-center justify-center p-8" style={{ background: `${category.tone}14` }}>
          <div className="w-44 overflow-hidden rounded-lg shadow-2xl md:w-full">
            <BookCover book={book} />
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
            style={{ background: category.tone }}
          >
            <Layers size={12} />
            {category.name}
          </div>

          <div>
            <h2 className="pr-8 text-2xl font-bold leading-tight text-black sm:text-3xl">{book.title}</h2>
            <p className="mt-3 flex items-center gap-2 text-base text-gray-600">
              <User size={18} className="shrink-0 text-[#8d171c]" />
              {book.author}
            </p>
          </div>

          <p className="leading-relaxed text-gray-600">
            Published by LO Publications. {book.readUrl ? "Start reading now" : "Request a copy"} or explore more
            from this author.
          </p>

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row">
            <a
              href={readLinkFor(book)}
              target={book.readUrl ? "_blank" : undefined}
              rel={book.readUrl ? "noopener noreferrer" : undefined}
              onClick={() => sendGAEvent("event", "read_book", { value: book.title })}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8d171c] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6b1215] hover:shadow-md"
            >
              <BookOpen size={16} />
              Read This Book
            </a>
            <NextLink
              href={authorHref(book.authorSlug)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-[#8d171c] hover:text-[#8d171c]"
            >
              Meet the Author
              <ArrowRight size={16} />
            </NextLink>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
