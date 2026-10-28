import { categoryOf, shortTitle, type CatalogueBook } from "../data/catalogue";

// Shows the real cover when we have one, otherwise a designed typographic cover
// tinted by the book's category.
export default function BookCover({
  book,
  className = "",
  compact = false,
}: {
  book: CatalogueBook;
  className?: string;
  compact?: boolean;
}) {
  if (book.coverImage) {
    return (
      <div className={`aspect-[3/4] overflow-hidden bg-white ${className}`}>
        <img src={book.coverImage} alt={book.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }

  const { tone, name } = categoryOf(book.category);
  const title = shortTitle(book.title);

  return (
    <div
      role="img"
      aria-label={`${book.title} by ${book.author}`}
      className={`relative flex aspect-[3/4] flex-col overflow-hidden text-white ${className}`}
      style={{ background: `linear-gradient(155deg, ${tone} 0%, ${tone} 55%, #111 160%)` }}
    >
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/15" />
      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-white/[.06]" />
      {/* Spine shading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/35 to-transparent" />

      <div className={`relative flex flex-1 flex-col ${compact ? "p-3" : "p-5"}`}>
        {!compact && (
          <p className="line-clamp-1 text-[9px] font-bold uppercase tracking-[.2em] text-white/55">{name}</p>
        )}
        <div className={`${compact ? "mt-2 h-px w-6" : "mt-3 h-px w-10"} bg-white/50`} />
        <h3
          className={`mt-auto font-serif font-bold leading-[1.05] tracking-tight ${
            compact ? "line-clamp-4 text-sm" : "line-clamp-5 text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h3>
        <p className={`mt-2 line-clamp-1 text-white/70 ${compact ? "text-[9px]" : "text-xs"}`}>{book.author}</p>
        <p className={`mt-3 font-black uppercase tracking-[.25em] text-white/40 ${compact ? "text-[7px]" : "text-[8px]"}`}>
          LO Publications
        </p>
      </div>
    </div>
  );
}
