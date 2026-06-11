// src/app/articles/self-publishing-consultation-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Calendar, 
  Globe,
  Lightbulb,
  Rocket,
  ChartLine,
  Users,
  ShieldCheck,
  DollarSign
} from "lucide-react";

export default function SelfPublishingConsultationArticle() {
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
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=500&fit=crop"
              alt="Author writing and publishing consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Author Guide • Ottawa</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Self-Publishing Consultation for Ottawa Authors: Turning Your Manuscript into a Successful Book
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 7 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
            </div>

            {/* Sarah's Story - Engaging Opening */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Users className="text-red-900" size={28} />
                Every Author's Journey in Ottawa Begins with a Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sarah, an aspiring author from Ottawa, spent three years writing her first book. She poured her heart into every chapter, 
                carefully crafted each character, and revised countless drafts. When she finally typed "The End," she felt a sense of 
                accomplishment and excitement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, her excitement quickly turned into confusion. Questions immediately flooded her mind: How do I publish my book? 
                Do I need a traditional publisher? Which platform should I choose? How do I market my book effectively?
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-amber-500 pl-4">
                Like many authors, Sarah discovered that writing a book is only half the journey. Publishing it successfully is an 
                entirely different challenge. This is where self-publishing consultation becomes invaluable.
              </p>
            </div>

            {/* Understanding Self-Publishing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">Understanding Self-Publishing for Ottawa Authors</h2>
              <p className="text-gray-700 leading-relaxed">
                Self-publishing is the process of publishing a book independently without relying on a traditional publishing company. 
                Authors maintain full control over their content, cover design, pricing, marketing, distribution channels, and royalties.
              </p>
            </div>

            {/* Challenges */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
              <h2 className="text-xl font-bold text-black mb-4">The Challenges Ottawa Authors Commonly Face</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Lack of publishing knowledge",
                  "Manuscript preparation issues",
                  "Book design challenges",
                  "Marketing uncertainty",
                ].map((challenge, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Is Consultation */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                What Is a Self-Publishing Consultation?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A self-publishing consultation is a professional service that guides authors through every stage of the publishing process, 
                including editing, formatting, design, publishing platforms, distribution, and marketing.
              </p>
            </div>

            {/* How It Solves Problems */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Rocket className="text-red-900" size={28} />
                How Self-Publishing Consultation Solves Problems in Ottawa
              </h2>
              <div className="space-y-4">
                {[
                  "Clarifying publishing goals",
                  "Evaluating the manuscript",
                  "Choosing the right publishing platform",
                  "Professional formatting and design",
                  "Developing a pricing strategy",
                  "Creating a marketing and visibility plan",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-red-900 text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Benefits */}
            <div className="bg-red-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <ShieldCheck className="text-red-900" size={28} />
                Why Ottawa Authors Benefit from Localized Consultation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa has a thriving community of writers, entrepreneurs, educators, and professionals. Local consultation provides 
                market insight, networking opportunities, and access to relevant publishing resources.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  { title: "Market Insight", desc: "Understanding Ottawa readers" },
                  { title: "Networking", desc: "Local author connections" },
                  { title: "Resources", desc: "Ottawa-specific publishing tools" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 text-center">
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Benefits */}
            <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="text-amber-300" size={28} />
                The Financial Benefits of Self-Publishing in Ottawa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Retain larger percentage of royalties",
                  "Maintain ownership of intellectual property",
                  "Speaking engagements income",
                  "Consulting services opportunities",
                  "Online courses revenue",
                  "Personal brand development",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-amber-300" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Myths */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <TrendingUp className="text-red-900" size={28} />
                Common Myths About Self-Publishing in Ottawa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { myth: "Self-published books are low quality", truth: "Professional services ensure high quality" },
                  { myth: "Self-publishing is easy", truth: "It requires planning and expertise" },
                  { myth: "Marketing is optional", truth: "Marketing is essential for success" },
                  { myth: "Self-publishing is only for new authors", truth: "Experienced authors choose it too" },
                ].map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4">
                    <p className="font-semibold text-red-900 mb-1">❌ {item.myth}</p>
                    <p className="text-gray-600 text-sm">✓ {item.truth}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future of Publishing */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ChartLine className="text-amber-300" size={28} />
                The Future of Publishing in Ottawa
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Digital publishing platforms",
                  "Audiobooks",
                  "Print-on-demand technology",
                  "Social media marketing",
                  "Global distribution networks",
                ].map((item) => (
                  <span key={item} className="bg-white/20 rounded-full px-4 py-2 text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/90 mt-6">
                These technologies have created unprecedented opportunities for authors to reach readers worldwide.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Writing a book is a remarkable achievement worthy of celebration. However, transforming a manuscript into a successful 
                published work requires careful planning, professional execution, and strategic marketing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For Ottawa authors, self-publishing consultation provides the expertise needed to navigate every stage of the journey 
                with confidence.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Turn Your Manuscript into a Successful Book?</h2>
              <p className="mb-6">Get professional self-publishing consultation tailored for Ottawa authors.</p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Book Your Consultation Today →
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}