// src/app/articles/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";




const articles = [

  {
    slug: "professional-book-publishing-ottawa",
    title: "Professional Book Publishing Services for Authors in Ottawa",
    excerpt: "From manuscript to market-ready book — explore traditional, self, and hybrid publishing in Ottawa. Learn about editing, cover design, distribution, and local resources for authors in Canada's capital.",
    category: "Publishing",
    date: "2024",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop",
    author: "Publishing Team",
  },

  
  {
    slug: "bilingual-publishing-ottawa",
    title: "Bilingual Publishing in Ottawa (English & French)",
    excerpt: "Professional English & French publishing services for authors, businesses, and organizations in Canada's capital. Reach wider audiences with culturally authentic bilingual content that meets federal standards.",
    category: "Bilingual",
    date: "2024",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
    author: "Bilingual Team",
  },

  {
    slug: "self-publishing-consultation-ottawa",
    title: "Self-Publishing Consultation for Ottawa Authors: Turning Your Manuscript into a Successful Book",
    excerpt: "Every author's journey begins with a story. Learn how self-publishing consultation can help you navigate editing, formatting, design, platforms, distribution, and marketing with confidence.",
    category: "Consultation",
    date: "2024",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    author: "Consultation Team",
  },

  {
    slug: "corporate-heritage-publishing-ottawa",
    title: "Corporate and Heritage Publishing in Ottawa, Canada",
    excerpt: "Preserving stories, building legacies through professional publishing. From corporate anniversary books to family heritage publications — document your history for future generations.",
    category: "Heritage",
    date: "2024",
    readTime: "9 min read",
    coverImage: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=800&h=500&fit=crop",
    author: "Heritage Team",
  },

  {
    slug: "author-branding-book-marketing-ottawa",
    title: "Author Branding & Book Marketing in Ottawa: How Local Authors Build Visibility and Grow Their Readership",
    excerpt: "Learn how Ottawa authors can build a strong author brand, leverage the local literary community, and implement effective book marketing strategies to reach the right readers.",
    category: "Marketing",
    date: "2024",
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=500&fit=crop",
    author: "Marketing Team",
  },

  {
    slug: "self-publishing-services-ottawa",
    title: "Self-Publishing Services in Ottawa: A Complete Guide for Aspiring Authors",
    excerpt: "Discover the benefits of self-publishing services in Ottawa. From editing and design to distribution and marketing, learn how to transform your manuscript into a market-ready book.",
    category: "Self-Publishing",
    date: "2024",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",
    author: "Publishing Team",
  },

  {
    slug: "faith-based-publishing-ottawa",
    title: "Faith-Based Publishing in Ottawa: Choosing the Right Path for Your Book",
    excerpt: "Discover how to publish your faith-based book in Ottawa. From traditional to self-publishing, learn the options, challenges, and opportunities for reaching readers in faith communities.",
    category: "Faith-Based",
    date: "2024",
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1438032005730-c779502df39b   ",
    author: "Maryanne",
  },

  {
    slug: "author-support-services-ottawa",
    title: "Author Support Services in Ottawa: Turn Your Manuscript into a Published Success Story",
    excerpt: "Discover comprehensive author support services in Ottawa. From manuscript evaluation and editing to book design and marketing, get the expert guidance you need to publish with confidence.",
    category: "Support Services",
    date: "2024",
    readTime: "9 min read",
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=500&fit=crop",
    author: "Victoria",
  },


];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Articles & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, guides, and inspiration for authors and readers alike.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link href={`/articles/${article.slug}`} className="block h-full flex flex-col">
                {/* Cover Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-red-900/20 to-amber-800/20">
                  {article.coverImage ? (
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl">📚</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-red-900 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {article.readTime}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-red-900 transition">
                    {article.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 line-clamp-3 mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center text-red-900 font-medium gap-1 group-hover:gap-2 transition-all mt-auto">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty state for when more articles are coming */}
        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  );
}