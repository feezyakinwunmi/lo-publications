// src/app/articles/bilingual-publishing-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Globe, Languages, BookOpen, Building2, Laptop, Users, Calendar } from "lucide-react";

export default function BilingualPublishingArticle() {
  return (
    <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/articles" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-900 mb-8 transition group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition" />
          Back to all articles
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Hero */}
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=500&fit=crop"
              alt="Bilingual Ottawa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Official Languages • Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Bilingual Publishing in Ottawa (English & French)
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 8 min read</span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In Canada, bilingual publishing has become more than a communication strategy—it reflects 
              professionalism, accessibility, inclusivity, and a commitment to serving diverse audiences.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In Ottawa, Canada, our publishing company specialises in providing top-notch bilingual 
              publishing services. We help authors, businesses, educational institutions, ministries, 
              nonprofits, and corporate organizations publish high-quality content in both English and 
              French with linguistic accuracy and cultural authenticity.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
              <p className="text-gray-700">
                Whether you are publishing a book, corporate report, educational manual, magazine, annual report, 
                government document, marketing material, or digital publication, we ensure your message maintains 
                the same impact, elegance, and professionalism in both official languages.
              </p>
            </div>

            {/* Why Bilingual Matters */}
            <h2 className="text-2xl font-bold text-black mb-6">Why Bilingual Publishing Matters in Canada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {[
                "Reach wider Canadian audiences",
                "Build credibility and inclusiveness",
                "Comply with federal & provincial standards",
                "Improve accessibility & engagement",
                "Strengthen brand reputation",
                "Expand educational & corporate influence",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <CheckCircle size={18} className="text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Solutions Grid */}
            <h2 className="text-2xl font-bold text-black mb-6">Complete Bilingual Solutions</h2>
            <div className="grid grid-cols-1 gap-6 mb-10">
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-red-900" size={28} />
                  <h3 className="text-xl font-bold">Book Publishing</h3>
                </div>
                <p className="text-gray-600">Fiction, non-fiction, textbooks, memoirs, faith-based, academic, children's books, poetry.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Languages className="text-red-900" size={28} />
                  <h3 className="text-xl font-bold">Translation & Editorial</h3>
                </div>
                <p className="text-gray-600">Grammatically accurate, professionally localized, culturally relevant, brand consistent.</p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-red-900" size={28} />
                  <h3 className="text-xl font-bold">Corporate & Government</h3>
                </div>
                <p className="text-gray-600">Annual reports, policy docs, training manuals, brochures, conference materials.</p>
              </div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Laptop className="text-amber-400" size={28} />
                  <h3 className="text-xl font-bold">Digital & Print</h3>
                </div>
                <p className="text-gray-300">eBook formatting, Kindle, PDF, interactive pubs, magazine layout, hard/soft cover.</p>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Users className="text-red-900" /> Who We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Independent authors", "Businesses", "Churches & ministries", "Educational institutions", "Government agencies", "Nonprofits", "Corporate enterprises", "Coaches & consultants"].map((item) => (
                  <div key={item} className="bg-white rounded-lg p-2 text-center text-sm font-medium text-gray-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Elevate Your Message Through Bilingual Publishing</h2>
              <p className="mb-6">Publishing in both English and French shows professionalism, inclusion, and national reach.</p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Contact Us Today
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}