// src/app/articles/professional-book-publishing-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, BookOpen, PenTool, Target, Users, MapPin, Calendar, Globe } from "lucide-react";

export default function OttawaPublishingArticle() {
  return (
    <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link href="/articles" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-900 mb-8 transition group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Back to all articles
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&h=500&fit=crop"
              alt="Ottawa publishing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Ottawa Author Guide</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Professional Book Publishing Services for Authors in Ottawa
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 6 min read</span>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Ottawa is home to a thriving literary community. From historical non-fiction inspired by the national archives 
              to gripping fiction penned in local coffee shops, the capital city is bursting with stories waiting to be told.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              However, writing your manuscript is only the first step. Navigating the world of formatting, cover design, 
              distribution, and marketing can feel overwhelming. That's where <strong className="text-red-900">professional 
              book publishing services for authors in Ottawa</strong> come in.
            </p>

            {/* Why Choose */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-6">Why Choose Professional Publishing Services?</h2>
              <p className="text-gray-700 mb-6">
                In the modern literary market, readers expect indie books to match the quality of major publishing houses. 
                Professional publishing services elevate your raw manuscript into a market-ready product.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: PenTool, title: "Structural & Copy Editing", desc: "Flawless pacing, tone, and grammar" },
                  { icon: BookOpen, title: "Bespoke Cover Design", desc: "Visual impact that targets your genre" },
                  { icon: Target, title: "Interior Formatting", desc: "Perfect for Kindle and print" },
                  { icon: Users, title: "Metadata Optimization", desc: "Discoverable on Amazon, Indigo, Kobo" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white rounded-xl shadow-sm">
                    <item.icon className="text-red-900 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publishing Landscape */}
            <h2 className="text-2xl font-bold text-black mb-6">The Publishing Landscape in Ottawa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Traditional Publishing", color: "from-blue-900 to-blue-700", desc: "Baico Publishing, Borealis Press, and Chaudiere Books" },
                { title: "Self-Publishing", color: "from-green-900 to-green-700", desc: "100% creative control with KDP and IngramSpark" },
                { title: "Hybrid Publishing", color: "from-amber-900 to-amber-700", desc: "Best of both worlds with professional support" },
              ].map((type, i) => (
                <div key={i} className={`bg-gradient-to-br ${type.color} rounded-xl p-6 text-white`}>
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-white/80 text-sm">{type.desc}</p>
                </div>
              ))}
            </div>

            {/* Local Reach */}
            <div className="bg-red-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" /> Maximizing Local Reach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Ottawa Public Library", desc: "Submit to physical & digital collections" },
                  { title: "Independent Bookstores", desc: "Black Squirrel, Perfect Books, Octopus Books" },
                  { title: "Local Festivals", desc: "Ottawa International Writers Festival" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Share Your Story?</h2>
              <p className="mb-6">The journey from blank page to finished book is a marathon — but you don't have to walk it alone.</p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Get Started Today →
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}