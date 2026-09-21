// src/app/books/page.tsx
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  BookOpen,
  Calendar,
  User,
  Globe,
  Search,
  Filter,
  BookMarked,
  Link as LinkIcon,
  ArrowRight,
  Send,
  FileText,
  Sparkles,
} from "lucide-react";
import NextLink from "next/link";
import { DEMO_BOOKS, type Book } from "./data";

// ========== DEMO DATA ==========

export default function BookClient() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeGenre, setActiveGenre] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const books = DEMO_BOOKS;

  const genreCounts = useMemo(() => {
    return books.reduce<Record<string, number>>((acc, book) => {
      const g = book.genre?.trim() || "General";
      acc[g] = (acc[g] || 0) + 1;
      return acc;
    }, {});
  }, [books]);

  const genres = useMemo(
    () => ["All", ...Object.keys(genreCounts).sort()],
    [genreCounts]
  );

  const filteredBooks = useMemo(() => {
    let result = books;

    if (activeGenre !== "All") {
      result = result.filter(
        (b) => (b.genre?.trim() || "General") === activeGenre
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          (b.description || "").toLowerCase().includes(q)
      );
    }

    return result;
  }, [books, activeGenre, searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-900 text-xs font-semibold tracking-widest uppercase mb-6">
            <BookMarked size={14} />
            Our Catalogue
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Our Published Works
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stories of faith, hope, transformation, and purpose — crafted with
            love and excellence.
          </p>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          <div className="relative max-w-md mx-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search by title, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search books by title, author, or keyword"
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900/10 transition"
            />
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter size={16} className="text-gray-400 mr-1" />
            {genres.map((genre) => {
              const isActive = activeGenre === genre;
              const count =
                genre === "All" ? books.length : genreCounts[genre] || 0;
              return (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-red-900 text-white shadow-md shadow-red-900/20"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-red-900 hover:text-red-900"
                  }`}
                >
                  {genre}
                  <span
                    className={`ml-1.5 text-xs ${
                      isActive ? "text-red-100" : "text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-24">
            <Search className="mx-auto text-gray-300 mb-4" size={56} />
            <p className="text-gray-600 text-lg mb-2">
              No books match your filters.
            </p>
            <button
              onClick={() => {
                setActiveGenre("All");
                setSearchQuery("");
              }}
              className="text-red-900 hover:underline text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Books Grid */}
        {filteredBooks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedBook(book)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={book.cover_url || ""}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {book.genre && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-red-900 rounded-full shadow-sm">
                      {book.genre}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-white text-sm font-medium tracking-wide">
                      View details →
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-black mb-1.5 line-clamp-2 leading-snug group-hover:text-red-900 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
                    <User size={14} /> {book.author}
                  </p>

                  <div className="mt-auto flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {book.published_year || "N/A"}
                    </span>
                    {book.downloads && book.downloads.length > 0 && (
                      <span className="flex items-center gap-1.5 text-red-900 font-medium">
                        <Download size={13} />
                        {book.downloads.length}{" "}
                        {book.downloads.length === 1 ? "format" : "formats"}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Results count */}
        {filteredBooks.length > 0 && (
          <p className="text-center text-sm text-gray-500 mt-12">
            Showing {filteredBooks.length} of {books.length}{" "}
            {books.length === 1 ? "book" : "books"}
          </p>
        )}

        {/* ===== Submit Manuscript CTA ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-900 via-red-800 to-amber-800 p-10 md:p-16 text-center shadow-xl">
            {/* Decorative background blobs */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-amber-300 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold tracking-widest uppercase">
                <Sparkles size={13} />
                Have a Story to Tell?
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                Submit Your Manuscript
              </h2>

              {/* Subtext */}
              <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re a first-time author or a seasoned writer,
                we&apos;d love to hear your story. Share your manuscript with
                our team and let&apos;s bring it to life — together.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <NextLink
                  href="/submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-red-900 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <Send size={18} />
                  Submit Your Manuscript
                </NextLink>

               
              </div>

              {/* Trust line */}
              <p className="text-white/60 text-sm pt-2">
                You keep 100% of your royalties · Full creative control · No
                upfront costs
              </p>
            </div>
          </div>
        </motion.section>

        {/* Modal */}
        <AnimatePresence>
          {selectedBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              onClick={() => setSelectedBook(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-white/95 backdrop-blur-sm rounded-full hover:bg-gray-100 transition shadow-md group"
                  aria-label="Close"
                >
                  <X
                    size={20}
                    className="text-gray-800 group-hover:rotate-90 transition-transform duration-300"
                  />
                </button>

                {/* Scrollable body */}
                <div className="overflow-y-auto">
                  {/* Cover hero */}
                  <div
                    className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
                    style={{ padding: "20px 0" }}
                  >
                    <div
                      className="rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10"
                      style={{
                        height: "300px",
                        aspectRatio: "4 / 4",
                      }}
                    >
                      <img
                        src={
                          selectedBook.cover_url ||
                          "https://via.placeholder.com/300x400?text=No+Cover"
                        }
                        alt={selectedBook.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 sm:p-8 md:p-10 space-y-6">
                    {selectedBook.genre && (
                      <div className="inline-block px-3 py-1 bg-red-50 text-red-900 text-xs font-semibold uppercase tracking-wider rounded-full">
                        {selectedBook.genre}
                      </div>
                    )}

                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
                        {selectedBook.title}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-600 flex items-center gap-2">
                        <User size={18} className="text-red-900 flex-shrink-0" />
                        {selectedBook.author}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-red-900" />
                        <span>{selectedBook.published_year || "N/A"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={16} className="text-red-900" />
                        <span>{selectedBook.genre || "General"}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100" />

                    <div>
                      <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
                        About This Book
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedBook.description ||
                          "No description available for this title yet."}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Download size={16} className="text-red-900" />
                        Available Formats
                      </h3>

                      {selectedBook.downloads &&
                      selectedBook.downloads.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedBook.downloads.map((download, idx) => (
                            <a
                              key={idx}
                              href={download.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-5 py-3.5 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-all shadow-sm hover:shadow-md font-medium text-sm"
                            >
                              <Globe size={16} />
                              {download.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm italic">
                          No download formats available yet.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}