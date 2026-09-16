// // src/app/books/page.tsx
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   X,
//   Download,
//   BookOpen,
//   Calendar,
//   User,
//   Globe,
//   Loader2,
//   Search,
//   Filter,
//   BookMarked,
// } from "lucide-react";
// import { createClient } from "@/lib/supabase/client";

// type Book = {
//   id: string;
//   title: string;
//   author: string;
//   cover_url?: string | null;
//   description?: string | null;
//   published_year?: number | null;
//   genre?: string | null;
//   downloads?: { label: string; url: string }[] | null;
//   status: "draft" | "published";
// };

// export default function BooksPage() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedBook, setSelectedBook] = useState<Book | null>(null);
//   const [activeGenre, setActiveGenre] = useState<string>("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch books from Supabase
//   useEffect(() => {
//     async function fetchBooks() {
//       setLoading(true);
//       setError(null);

//       const supabase = createClient();
//       const { data, error } = await supabase
//         .from("books")
//         .select("*")
//         .eq("status", "published")
//         .order("published_year", { ascending: false });

//       if (error) {
//         setError("Failed to load books. Please try again later.");
//         console.error("Fetch error:", error);
//       } else {
//         setBooks(data || []);
//       }
//       setLoading(false);
//     }

//     fetchBooks();
//   }, []);

//   // Derive unique genres with counts
//   const genreCounts = useMemo(() => {
//     return books.reduce<Record<string, number>>((acc, book) => {
//       const g = book.genre?.trim() || "General";
//       acc[g] = (acc[g] || 0) + 1;
//       return acc;
//     }, {});
//   }, [books]);

//   const genres = useMemo(
//     () => ["All", ...Object.keys(genreCounts).sort()],
//     [genreCounts]
//   );

//   // Filter by genre + search
//   const filteredBooks = useMemo(() => {
//     let result = books;

//     if (activeGenre !== "All") {
//       result = result.filter(
//         (b) => (b.genre?.trim() || "General") === activeGenre
//       );
//     }

//     if (searchQuery.trim()) {
//       const q = searchQuery.toLowerCase();
//       result = result.filter(
//         (b) =>
//           b.title.toLowerCase().includes(q) ||
//           b.author.toLowerCase().includes(q) ||
//           (b.description || "").toLowerCase().includes(q)
//       );
//     }

//     return result;
//   }, [books, activeGenre, searchQuery]);

//   return (
//     <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-14"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-900 text-xs font-semibold tracking-widest uppercase mb-6">
//             <BookMarked size={14} />
//             Our Catalogue
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
//             Our Published Works
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Stories of faith, hope, transformation, and purpose — crafted with
//             love and excellence.
//           </p>
//         </motion.div>

//         {/* Toolbar: Search + Genres */}
//         {!loading && !error && books.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mb-12 space-y-6"
//           >
//             {/* Search */}
//             <div className="relative max-w-md mx-auto">
//               <Search
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Search by title, author, or keyword..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900/10 transition"
//               />
//             </div>

//             {/* Genre Chips */}
//             <div className="flex items-center justify-center gap-2 flex-wrap">
//               <Filter size={16} className="text-gray-400 mr-1" />
//               {genres.map((genre) => {
//                 const isActive = activeGenre === genre;
//                 const count =
//                   genre === "All" ? books.length : genreCounts[genre] || 0;
//                 return (
//                   <button
//                     key={genre}
//                     onClick={() => setActiveGenre(genre)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                       isActive
//                         ? "bg-red-900 text-white shadow-md shadow-red-900/20"
//                         : "bg-white border border-gray-200 text-gray-700 hover:border-red-900 hover:text-red-900"
//                     }`}
//                   >
//                     {genre}
//                     <span
//                       className={`ml-1.5 text-xs ${
//                         isActive ? "text-red-100" : "text-gray-400"
//                       }`}
//                     >
//                       {count}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </motion.div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center py-24">
//             <Loader2
//               className="animate-spin mx-auto text-red-900"
//               size={48}
//             />
//             <p className="mt-4 text-gray-600">Loading books...</p>
//           </div>
//         )}

//         {/* Error State */}
//         {!loading && error && (
//           <div className="text-center py-24">
//             <div className="inline-block px-6 py-4 bg-red-50 border border-red-100 rounded-2xl">
//               <p className="text-red-900 font-medium">{error}</p>
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && !error && books.length === 0 && (
//           <div className="text-center py-24">
//             <BookOpen className="mx-auto text-gray-300 mb-4" size={56} />
//             <p className="text-gray-600 text-lg">
//               No books available yet. Check back soon!
//             </p>
//           </div>
//         )}

//         {/* No Results (filtered) */}
//         {!loading &&
//           !error &&
//           books.length > 0 &&
//           filteredBooks.length === 0 && (
//             <div className="text-center py-24">
//               <Search className="mx-auto text-gray-300 mb-4" size={56} />
//               <p className="text-gray-600 text-lg mb-2">
//                 No books match your filters.
//               </p>
//               <button
//                 onClick={() => {
//                   setActiveGenre("All");
//                   setSearchQuery("");
//                 }}
//                 className="text-red-900 hover:underline text-sm font-medium"
//               >
//                 Clear filters
//               </button>
//             </div>
//           )}

//         {/* Books Grid */}
//         {!loading && !error && filteredBooks.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredBooks.map((book, index) => (
//               <motion.div
//                 key={book.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 whileHover={{ y: -6 }}
//                 onClick={() => setSelectedBook(book)}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-gray-100 flex flex-col"
//               >
//                 {/* Cover */}
//                 <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
//                   <img
//                     src={
//                       book.cover_url ||
//                       "https://via.placeholder.com/800x1000?text=No+Cover"
//                     }
//                     alt={book.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   {/* Genre Badge */}
//                   {book.genre && (
//                     <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold text-red-900 rounded-full shadow-sm">
//                       {book.genre}
//                     </div>
//                   )}
//                   {/* Hover overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
//                     <span className="text-white text-sm font-medium tracking-wide">
//                       View details →
//                     </span>
//                   </div>
//                 </div>

//                 {/* Info */}
//                 <div className="p-5 flex-1 flex flex-col">
//                   <h3 className="text-lg font-bold text-black mb-1.5 line-clamp-2 leading-snug group-hover:text-red-900 transition-colors">
//                     {book.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
//                     <User size={14} /> {book.author}
//                   </p>

//                   <div className="mt-auto flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
//                     <span className="flex items-center gap-1.5">
//                       <Calendar size={13} />
//                       {book.published_year || "N/A"}
//                     </span>
//                     {book.downloads && book.downloads.length > 0 && (
//                       <span className="flex items-center gap-1.5 text-red-900 font-medium">
//                         <Download size={13} />
//                         {book.downloads.length}{" "}
//                         {book.downloads.length === 1 ? "format" : "formats"}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Results Count */}
//         {!loading && !error && books.length > 0 && (
//           <p className="text-center text-sm text-gray-500 mt-12">
//             Showing {filteredBooks.length} of {books.length}{" "}
//             {books.length === 1 ? "book" : "books"}
//           </p>
//         )}

//         {/* Modal */}
//         <AnimatePresence>
//           {selectedBook && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
//               onClick={() => setSelectedBook(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, y: 30, opacity: 0 }}
//                 animate={{ scale: 1, y: 0, opacity: 1 }}
//                 exit={{ scale: 0.9, y: 30, opacity: 0 }}
//                 transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                 className="bg-white rounded-3xl max-w-5xl w-full my-8 relative overflow-hidden"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Close button */}
//                 <button
//                   onClick={() => setSelectedBook(null)}
//                   className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition shadow-md group"
//                   aria-label="Close"
//                 >
//                   <X
//                     size={20}
//                     className="text-gray-800 group-hover:rotate-90 transition-transform duration-300"
//                   />
//                 </button>

//                 <div className="grid md:grid-cols-5 gap-0">
//                   {/* Left: Cover */}
//                   <div className="md:col-span-2 relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center min-h-[320px] md:min-h-[560px]">
//                     <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
//                       <img
//                         src={
//                           selectedBook.cover_url ||
//                           "https://via.placeholder.com/800x1000?text=No+Cover"
//                         }
//                         alt={selectedBook.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>

//                   {/* Right: Details */}
//                   <div className="md:col-span-3 p-8 md:p-10 space-y-6 max-h-[80vh] overflow-y-auto">
//                     {/* Category */}
//                     {selectedBook.genre && (
//                       <div className="inline-block px-3 py-1 bg-red-50 text-red-900 text-xs font-semibold uppercase tracking-wider rounded-full">
//                         {selectedBook.genre}
//                       </div>
//                     )}

//                     {/* Title + Author */}
//                     <div>
//                       <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
//                         {selectedBook.title}
//                       </h2>
//                       <p className="text-lg text-gray-600 flex items-center gap-2">
//                         <User size={18} className="text-red-900" />
//                         {selectedBook.author}
//                       </p>
//                     </div>

//                     {/* Meta */}
//                     <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600 pt-2">
//                       <div className="flex items-center gap-2">
//                         <Calendar size={16} className="text-red-900" />
//                         <span>{selectedBook.published_year || "N/A"}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <BookOpen size={16} className="text-red-900" />
//                         <span>{selectedBook.genre || "General"}</span>
//                       </div>
//                     </div>

//                     {/* Divider */}
//                     <div className="border-t border-gray-100" />

//                     {/* Description */}
//                     <div>
//                       <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
//                         About This Book
//                       </h3>
//                       <p className="text-gray-700 leading-relaxed">
//                         {selectedBook.description ||
//                           "No description available for this title yet."}
//                       </p>
//                     </div>

//                     {/* Downloads */}
//                     <div className="pt-4 border-t border-gray-100">
//                       <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
//                         <Download size={16} className="text-red-900" />
//                         Available Formats
//                       </h3>

//                       {selectedBook.downloads &&
//                       selectedBook.downloads.length > 0 ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                           {selectedBook.downloads.map((download, idx) => (
//                             <a
//                               key={idx}
//                               href={download.url}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="group flex items-center justify-center gap-2 px-5 py-3.5 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-all shadow-sm hover:shadow-md font-medium text-sm"
//                             >
//                               <Globe size={16} />
//                               {download.label}
//                             </a>
//                           ))}
//                         </div>
//                       ) : (
//                         <p className="text-gray-500 text-sm italic">
//                           No download formats available yet.
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// }






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
} from "lucide-react";

type Book = {
  id: string;
  title: string;
  author: string;
  cover_url?: string | null;
  description?: string | null;
  published_year?: number | null;
  genre?: string | null;
  downloads?: { label: string; url: string }[] | null;
  status: "draft" | "published";
};

// ========== DEMO DATA ==========
const DEMO_BOOKS: Book[] = [
  {
    id: "1",
    title: "The Empowered Teens' Daily Affirmations",
    author: "Nike Okeke & Layo Obidike",
    cover_url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=1000&fit=crop",
    description:
      "A daily guide for teens to build confidence, self-acceptance, and emotional resilience through faith-based affirmations paired with actionable steps.",
    published_year: 2025,
    genre: "Faith & Teens",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Kindle Edition", url: "#" },
    ],
    status: "published",
  },
  {
    id: "2",
    title: "Walking in Purpose: A Faith-Fueled Journey",
    author: "Grace Adeyemi",
    cover_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=1000&fit=crop",
    description:
      "A 30-day devotional inviting readers to discover their God-given purpose. Each entry includes scripture, reflection, and a practical step forward.",
    published_year: 2024,
    genre: "Devotional",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Paperback", url: "#" },
      { label: "Audiobook", url: "#" },
    ],
    status: "published",
  },
  {
    id: "3",
    title: "The Quiet Harvest",
    author: "Emmanuel Okafor",
    cover_url: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=1000&fit=crop",
    description:
      "A literary novel about a Nigerian family navigating loss, faith, and reconciliation across three generations.",
    published_year: 2025,
    genre: "Fiction",
    downloads: [
      { label: "Kindle Edition", url: "#" },
      { label: "Paperback", url: "#" },
    ],
    status: "published",
  },
  {
    id: "4",
    title: "Letters to My Younger Self",
    author: "Tolu Bankole",
    cover_url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=1000&fit=crop",
    description:
      "Twenty contributors write honest letters to their younger selves — stories of faith, failure, forgiveness, and growing up.",
    published_year: 2024,
    genre: "Memoir",
    downloads: [{ label: "Download PDF", url: "#" }],
    status: "published",
  },
  {
    id: "5",
    title: "Building a Reading Culture at Home",
    author: "Dr. Amara Nwosu",
    cover_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
    description:
      "A practical guide for parents and educators who want to raise lifelong readers — from creating reading corners to picking age-appropriate books.",
    published_year: 2025,
    genre: "Parenting",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Paperback", url: "#" },
    ],
    status: "published",
  },
  {
    id: "6",
    title: "The Writer's Compass",
    author: "Chinelo Eze",
    cover_url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=1000&fit=crop",
    description:
      "For emerging authors: how to write, edit, publish, and build a career as a faith-driven writer in the digital age.",
    published_year: 2026,
    genre: "Writing Craft",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Kindle Edition", url: "#" },
    ],
    status: "published",
  },
  {
    id: "7",
    title: "Still Waters",
    author: "Ruth Adeleke",
    cover_url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=1000&fit=crop",
    description:
      "A collection of poetry and short reflections on rest, trust, and finding God in the quiet moments.",
    published_year: 2024,
    genre: "Poetry",
    downloads: [{ label: "Download PDF", url: "#" }],
    status: "published",
  },
  {
    id: "8",
    title: "The Marketplace Ministry",
    author: "Pastor David Balogun",
    cover_url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=1000&fit=crop",
    description:
      "How Christian professionals can bring faith into their careers — a practical theology of work, calling, and influence.",
    published_year: 2025,
    genre: "Faith & Work",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Paperback", url: "#" },
      { label: "Audiobook", url: "#" },
    ],
    status: "published",
  },
  {
    id: "9",
    title: "Parenting with Grace",
    author: "Funmi Adebayo",
    cover_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=1000&fit=crop",
    description:
      "A warm, practical guide for parents raising children with faith, patience, and intentionality.",
    published_year: 2026,
    genre: "Parenting",
    downloads: [
      { label: "Kindle Edition", url: "#" },
      { label: "Paperback", url: "#" },
    ],
    status: "published",
  },
  {
    id: "10",
    title: "Fire on the Mountain",
    author: "Samuel Oyelaran",
    cover_url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=1000&fit=crop",
    description:
      "A historical novel set in pre-colonial Nigeria — exploring faith, tradition, and the cost of conviction.",
    published_year: 2024,
    genre: "Fiction",
    downloads: [{ label: "Paperback", url: "#" }],
    status: "published",
  },
  {
    id: "11",
    title: "The Prayer Life",
    author: "Reverend Moses Adekunle",
    cover_url: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=1000&fit=crop",
    description:
      "A practical theology of prayer — how to build a consistent, meaningful prayer life in a distracted world.",
    published_year: 2025,
    genre: "Devotional",
    downloads: [
      { label: "Download PDF", url: "#" },
      { label: "Kindle Edition", url: "#" },
    ],
    status: "published",
  },
  {
    id: "12",
    title: "Raising Readers, Raising Leaders",
    author: "Dr. Amara Nwosu",
    cover_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop",
    description:
      "Why reading habits shape leadership — a case for cultivating a lifelong love of books in the next generation.",
    published_year: 2025,
    genre: "Parenting",
    downloads: [{ label: "Download PDF", url: "#" }],
    status: "published",
  },
];

export default function BooksPage() {
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
          
            <input
              type="text"
              placeholder="Search by title, author, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

  {/* Cover hero — compact, balanced */}
<div
  className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
  style={{ padding: '20px 0' }}
>
  <div
    className="rounded-lg overflow-hidden shadow-xl ring-1 ring-white/10"
    style={{
      height: '300px',
      aspectRatio: '4/ 4',
    }}
  >
    <img
      src={selectedBook.cover_url || "https://via.placeholder.com/300x400?text=No+Cover"}
      alt={selectedBook.title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
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

              {selectedBook.downloads && selectedBook.downloads.length > 0 ? (
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