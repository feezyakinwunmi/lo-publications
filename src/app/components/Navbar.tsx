"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";

interface NavLink {
  name: string;
  href?: string;
  dropdown?: boolean;
  items?: { name: string; href: string }[];
}

interface SearchItem {
  title: string;
  href: string;
  type: string;
  excerpt?: string;
  thumbnail?: string;
  date?: string;
  author?: string;
}

// Your navLinks
const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
  {
    name: "Explore",
    dropdown: true,
    items: [
      { name: "Blog", href: "/blog" },
      { name: "Articles", href: "/articles" },
      { name: "Case Studies", href: "/casestudies" },
      { name: "Submit Manuscript", href: "/submit" },
      { name: "Young Authors Contest", href: "/young-authors-contest" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [allContent, setAllContent] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Load all content (articles, blogs, books) on mount
  useEffect(() => {
    const loadAllContent = async () => {
      setIsLoading(true);
      const supabase = createClient();
      const items: SearchItem[] = [];

      try {
        // 1. Load STATIC ARTICLES from your articles array
        // Import your articles data (you'll need to export it from the articles page)
        // For now, I'll define them here - but you should export them from your articles page
        const staticArticles = [
          {
            slug: "professional-book-publishing-ottawa",
            title: "Professional Book Publishing Services for Authors in Ottawa",
            excerpt: "From manuscript to market-ready book — explore traditional, self, and hybrid publishing in Ottawa.",
            category: "Publishing",
            date: "2024",
          },
          {
            slug: "bilingual-publishing-ottawa",
            title: "Bilingual Publishing in Ottawa (English & French)",
            excerpt: "Professional English & French publishing services for authors, businesses, and organizations.",
            category: "Bilingual",
            date: "2024",
          },
          {
            slug: "self-publishing-consultation-ottawa",
            title: "Self-Publishing Consultation for Ottawa Authors",
            excerpt: "Every author's journey begins with a story. Learn how self-publishing consultation can help.",
            category: "Consultation",
            date: "2024",
          },
          {
            slug: "corporate-heritage-publishing-ottawa",
            title: "Corporate and Heritage Publishing in Ottawa, Canada",
            excerpt: "Preserving stories, building legacies through professional publishing.",
            category: "Heritage",
            date: "2024",
          },
          {
            slug: "author-branding-book-marketing-ottawa",
            title: "Author Branding & Book Marketing in Ottawa",
            excerpt: "Learn how Ottawa authors can build a strong author brand and grow their readership.",
            category: "Marketing",
            date: "2024",
          },
          {
            slug: "self-publishing-services-ottawa",
            title: "Self-Publishing Services in Ottawa: A Complete Guide",
            excerpt: "Discover the benefits of self-publishing services in Ottawa.",
            category: "Self-Publishing",
            date: "2024",
          },
          {
            slug: "faith-based-publishing-ottawa",
            title: "Faith-Based Publishing in Ottawa: Choosing the Right Path",
            excerpt: "Discover how to publish your faith-based book in Ottawa.",
            category: "Faith-Based",
            date: "2024",
          },
          {
            slug: "author-support-services-ottawa",
            title: "Author Support Services in Ottawa",
            excerpt: "Discover comprehensive author support services in Ottawa.",
            category: "Support Services",
            date: "2024",
          },
          {
            slug: "first-time-author-publishing-ottawa",
            title: "First-Time Author Publishing in Ottawa",
            excerpt: "Becoming a published author is a dream for many aspiring writers in Ottawa.",
            category: "First-Time Author",
            date: "2024",
          },
        ];

        // Add static articles to search items
        staticArticles.forEach(article => {
          items.push({
            title: article.title,
            href: `/articles/${article.slug}`,
            type: "Article",
            excerpt: article.excerpt,
            date: article.date,
            author: "LO Publications",
          });
        });

        // 2. Load BLOG POSTS from Supabase
        const { data: blogPosts, error: blogError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("status", "published")
          .order("published_at", { ascending: false });

        if (blogError) {
          console.error("Error loading blog posts:", blogError);
        } else if (blogPosts) {
          blogPosts.forEach(post => {
            items.push({
              title: post.title,
              href: `/blog/${post.slug || post.id}`,
              type: "Blog",
              excerpt: post.excerpt || post.content?.slice(0, 150) + "...",
              thumbnail: post.thumbnail_url,
              date: post.published_at ? new Date(post.published_at).toLocaleDateString() : "Recent",
              author: post.publisher_name || "LO Publications",
            });
          });
        }

        // 3. Load BOOKS from Supabase (assuming you have a books table)
        const { data: books, error: booksError } = await supabase
          .from("books")
          .select("*")
          .eq("status", "published")
          .order("created_at", { ascending: false });

        if (booksError) {
          console.error("Error loading books:", booksError);
        } else if (books) {
          books.forEach(book => {
            items.push({
              title: book.title,
              href: `/books/${book.slug || book.id}`,
              type: "Book",
              excerpt: book.description || book.excerpt,
              thumbnail: book.cover_image,
              date: book.published_date,
              author: book.author_name || "LO Publications",
            });
          });
        }

        // 4. Add static pages from nav
        const staticPages = [
          { title: "Home", href: "/", type: "Page" },
          { title: "About", href: "/about", type: "Page" },
          { title: "Books", href: "/books", type: "Page" },
          { title: "Team", href: "/team", type: "Page" },
          { title: "Contact", href: "/contact", type: "Page" },
          { title: "Careers", href: "/careers", type: "Page" },
          { title: "Submit Manuscript", href: "/submit", type: "Page" },
          { title: "Young Authors Contest", href: "/young-authors-contest", type: "Page" },
          { title: "Case Studies", href: "/casestudies", type: "Page" },
        ];

        staticPages.forEach(page => {
          // Only add if not already in items
          if (!items.some(item => item.href === page.href)) {
            items.push(page);
          }
        });

        // Sort items: Articles first, then Blogs, then Books, then Pages
        const typeOrder = { Article: 0, Blog: 1, Book: 2, Page: 3 };
        items.sort((a, b) => (typeOrder[a.type as keyof typeof typeOrder] || 4) - (typeOrder[b.type as keyof typeof typeOrder] || 4));

        setAllContent(items);
      } catch (error) {
        console.error("Error loading content:", error);
        // Fallback: Add only static content
        setAllContent([
          { title: "Articles", href: "/articles", type: "Page" },
          { title: "Blog", href: "/blog", type: "Page" },
          { title: "Books", href: "/books", type: "Page" },
          ...navLinks.flatMap(link => {
            if (link.dropdown && link.items) {
              return link.items.map(item => ({
                title: item.name,
                href: item.href,
                type: "Page"
              }));
            }
            return link.href ? {
              title: link.name,
              href: link.href,
              type: "Page"
            } : null;
          }).filter(Boolean) as SearchItem[]
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllContent();
  }, []);

  // Handle search with dynamic data
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allContent.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(query)) ||
        (item.author && item.author.toLowerCase().includes(query))
    );
    setSearchResults(results.slice(0, 20)); // Limit to 20 results
  }, [searchQuery, allContent]);

  // Focus search input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  // Close search on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleResultClick = (href: string) => {
    handleSearchClose();
    router.push(href);
  };

  // Get icon for result type
  const getTypeIcon = (type: string) => {
    switch(type) {
      case "Article": return "📄";
      case "Blog": return "📝";
      case "Book": return "📚";
      case "Page": return "📌";
      default: return "🔗";
    }
  };

  // Get color for result type badge
  const getTypeColor = (type: string) => {
    switch(type) {
      case "Article": return "bg-blue-100 text-blue-800";
      case "Blog": return "bg-purple-100 text-purple-800";
      case "Book": return "bg-green-100 text-green-800";
      case "Page": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-2"
        } backdrop-blur-xl bg-red-800 border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" onClick={closeAllMenus}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative px-1 py-1 rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute inset-0 rounded-full border-2 border-red-900/40 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-30 transition-all duration-700" />
                <span className="relative text-2xl font-bold text-white drop-shadow-lg">
                  <img
                    src="/logolop.png"
                    alt="LO Publications Logo"
                    className="w-14 h-auto"
                  />
                </span>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearchOpen}
                className="relative px-4 py-3 rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-out" />
                <Search className="text-white w-5 h-5 relative" />
              </motion.button>

              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="relative">
                      <motion.div
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="relative px-6 py-3 rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg overflow-hidden group cursor-pointer"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-out" />
                        <span className="absolute inset-0 rounded-full border border-red-900/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-40 transition-all duration-700" />
                        <span className="relative text-white font-medium drop-shadow-md flex items-center gap-1">
                          {link.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openDropdown === link.name
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </span>
                      </motion.div>

                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-red-800 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                          {link.items?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-6 py-4 text-white font-bold hover:bg-white/20 transition-colors border-b border-white/10 last:border-0"
                              onClick={closeAllMenus}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link key={link.name} href={link.href!} onClick={closeAllMenus}>
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      className="relative px-6 py-3 rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg overflow-hidden group cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700 ease-out" />
                      <span className="absolute inset-0 rounded-full border border-red-900/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-40 transition-all duration-700" />
                      <span className="relative text-white font-medium drop-shadow-md">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-8 space-y-4">
              {/* Search in Mobile */}
              <button
                onClick={() => {
                  handleSearchOpen();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 text-white text-lg font-medium hover:text-red-400 transition bg-white/10 px-4 py-3 rounded-xl border border-white/20"
              >
                <Search size={20} />
                Search articles, blogs, books...
              </button>

              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full text-left text-white text-lg font-medium hover:text-red-400 transition flex items-center justify-between"
                      >
                        {link.name}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            openDropdown === link.name
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        />
                      </button>

                      {openDropdown === link.name && (
                        <div className="pl-4 space-y-2 mt-2">
                          {link.items?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block text-white/80 text-lg hover:text-red-400 transition"
                              onClick={closeAllMenus}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href!}
                    className="block text-white text-lg font-medium hover:text-red-400 transition"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleSearchClose}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search articles, blogs, books, case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-5 text-black text-lg outline-none border-b border-gray-200"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {isLoading ? (
                    <div className="p-8 text-center text-gray-500">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-800 mx-auto"></div>
                      <p className="mt-3">Loading content...</p>
                    </div>
                  ) : searchQuery.trim() === "" ? (
                    <div className="p-8 text-center text-gray-500">
                      <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p className="text-lg">Search articles, blogs, books, and more</p>
                      <p className="text-sm mt-1">
                        Try searching for "publishing", "writing", or "Ottawa"
                      </p>
                    </div>
                  ) : searchResults.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <p className="text-lg">No results found for "{searchQuery}"</p>
                      <p className="text-sm mt-1">Try different keywords</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result.href)}
                          className="w-full text-left px-6 py-4 hover:bg-gray-50 transition group"
                        >
                          <div className="flex items-start gap-4">
                            {/* Thumbnail if available */}
                            {result.thumbnail && (
                              <img 
                                src={result.thumbnail} 
                                alt={result.title}
                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-black font-medium group-hover:text-red-800 transition line-clamp-1">
                                  {result.title}
                                </h4>
                              </div>
                              
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                                  {getTypeIcon(result.type)} {result.type}
                                </span>
                                {result.date && (
                                  <span className="text-xs text-gray-400">• {result.date}</span>
                                )}
                                {result.author && (
                                  <span className="text-xs text-gray-400">• {result.author}</span>
                                )}
                              </div>
                              
                              {result.excerpt && (
                                <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                                  {result.excerpt}
                                </p>
                              )}
                            </div>
                            <span className="text-red-800 opacity-0 group-hover:opacity-100 transition flex-shrink-0">
                              →
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-gray-50 text-xs text-gray-500 flex justify-between items-center">
                  <span>Press ESC to close • {allContent.length} total items</span>
                  <span>{searchResults.length} results found</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}