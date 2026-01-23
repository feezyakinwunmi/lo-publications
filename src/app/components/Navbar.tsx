"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface NavLink {
  name: string;
  href?: string;
  dropdown?: boolean;
  items?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Books", href: "/books" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
  {
    name: "Services",
    dropdown: true,
    items: [
      { name: "Blog", href: "/blog" },
      { name: "Submit Manuscript", href: "/submit" },
      { name: "Young Authors Contest", href: "/young-authors-contest" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to close BOTH mobile menu AND dropdown
  const closeAllMenus = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
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
                <img src="/logolop.png" alt="LO Publications Logo" className="w-14 h-auto" />
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
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
                          className={`transition-transform ${openDropdown === link.name ? "rotate-180" : "rotate-0"}`}
                        />
                      </span>
                    </motion.div>

                    {/* Glass Dropdown */}
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-red-800       backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50"
                      >
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-6 py-4 text-white font-bold hover:bg-white/20 transition-colors border-b border-white/10 last:border-0"
                            onClick={closeAllMenus}  // ← Closes dropdown + mobile (if open)
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
                        className={`transition-transform ${openDropdown === link.name ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>

                    {openDropdown === link.name && (
                      <div className="pl-4 space-y-2 mt-2">
                        {link.items?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-white/80 text-lg hover:text-red-400 transition"
                            onClick={closeAllMenus}  // ← Closes both mobile menu AND dropdown
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
                  onClick={closeAllMenus}  // ← Closes mobile menu
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
}