"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Quote, X } from "lucide-react";
import AuthorAvatar from "./AuthorAvatar";
import BookCover from "../components/BookCover";
import { categoryOf, readLinkFor, type DirectoryAuthor } from "../data/catalogue";

export default function AuthorModal({ author, onClose }: { author: DirectoryAuthor; onClose: () => void }) {
  const { profile, books } = author;
  const shelves = Array.from(new Set(books.map((b) => categoryOf(b.category).name)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={author.name}
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-[#f8f6f3] shadow-2xl sm:rounded-3xl"
      >
        <button
          onClick={onClose}
          className="group absolute right-4 top-4 z-20 rounded-full bg-white/95 p-2.5 shadow-md transition hover:bg-white"
          aria-label="Close"
        >
          <X size={20} className="text-gray-800 transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* Header */}
        <div className="relative overflow-hidden bg-[#141010] px-6 pb-8 pt-10 text-white sm:px-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#8d171c]/50 blur-3xl" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            <AuthorAvatar author={{ name: author.name, photo: author.photo }} size="lg" ring="ring-4 ring-white/10" />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.25em] text-white/50">LO Publications Author</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{author.name}</h2>
              {profile && <p className="mt-1 text-white/60">{profile.profession}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#8d171c] px-3 py-1 text-xs font-semibold">
                  {books.length} {books.length === 1 ? "book" : "books"}
                </span>
                {shelves.slice(0, 3).map((name) => (
                  <span key={name} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">
                    {name}
                  </span>
                ))}
                {shelves.length > 3 && (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">+{shelves.length - 3} more</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 px-6 py-8 sm:px-10">
          {profile && (
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8d171c]">About</h3>
                <p className="leading-relaxed text-gray-700">{profile.bio}</p>
                <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-[#8d171c]">Mission</h3>
                <p className="leading-relaxed text-gray-700">{profile.mission}</p>
              </div>
              <figure className="rounded-2xl bg-white p-6 shadow-sm">
                <Quote className="mb-3 h-8 w-8 text-[#8d171c]/30" />
                <blockquote className="leading-relaxed text-gray-800">&ldquo;{profile.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-[#8d171c]">{author.name}</figcaption>
              </figure>
            </div>
          )}

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-wider text-[#8d171c]">
              Books by {author.name}
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4">
              {books.map((book) => (
                <div key={book.slug} className="flex flex-col">
                  <div className="overflow-hidden rounded-lg shadow-[0_12px_24px_-12px_rgba(0,0,0,.4)]">
                    <BookCover book={book} compact />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm font-bold leading-snug text-black">{book.title}</p>
                  <a
                    href={readLinkFor(book)}
                    target={book.readUrl ? "_blank" : undefined}
                    rel={book.readUrl ? "noopener noreferrer" : undefined}
                    className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#8d171c]/25 px-3 py-1 text-xs font-semibold text-[#8d171c] transition hover:bg-[#8d171c] hover:text-white"
                  >
                    <BookOpen size={12} />
                    Read
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
