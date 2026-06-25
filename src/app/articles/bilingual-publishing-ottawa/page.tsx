// src/app/articles/bilingual-publishing-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Globe, Languages, BookOpen, Building2, Laptop, Users, Calendar, Target, MapPin, Award, MessageCircle, Rocket } from "lucide-react";

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
              alt="Bilingual publishing in Ottawa - English and French"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Official Languages • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Bilingual Publishing in Ottawa (English & French)
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 8 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Languages size={16} /> Bilingual Publishing</span>
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
              <p className="text-gray-600 text-sm mt-3">
                <Link href="/articles/corporate-heritage-publishing-ottawa" className="text-red-900 hover:underline font-semibold">
                  Corporate and heritage publishing
                </Link> services can help organizations preserve their legacy in both official languages.
              </p>
            </div>

            {/* Why Bilingual Matters */}
            <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <Target className="text-red-900" size={28} />
              Why Bilingual Publishing Matters in Canada
            </h2>
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
            <p className="text-gray-600 text-sm mb-10">
              <Link href="/articles/professional-book-publishing-ottawa" className="text-red-900 hover:underline">
                Professional book publishing services
              </Link> can help you reach bilingual audiences effectively.
            </p>

            {/* Solutions Grid */}
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
              <Award className="text-red-900" size={28} />
              Complete Bilingual Solutions
            </h2>
            <div className="grid grid-cols-1 gap-6 mb-10">
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-red-900" size={28} />
                  <h3 className="text-xl font-bold">Book Publishing</h3>
                </div>
                <p className="text-gray-600">Fiction, non-fiction, textbooks, memoirs, faith-based, academic, children's books, poetry.</p>
                <p className="text-gray-600 text-sm mt-2">
                  <Link href="/articles/faith-based-publishing-ottawa" className="text-red-900 hover:underline">
                    Faith-based publishing
                  </Link> and other genres benefit from bilingual accessibility.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Languages className="text-red-900" size={28} />
                  <h3 className="text-xl font-bold">Translation & Editorial</h3>
                </div>
                <p className="text-gray-600">Grammatically accurate, professionally localized, culturally relevant, brand consistent.</p>
                <p className="text-gray-600 text-sm mt-2">
                  <Link href="/articles/author-support-services-ottawa" className="text-red-900 hover:underline">
                    Author support services
                  </Link> include professional editing and translation for bilingual publications.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-red-900" size={28} />
                  <h3 className="text-xl font-bold">Corporate & Government</h3>
                </div>
                <p className="text-gray-600">Annual reports, policy docs, training manuals, brochures, conference materials.</p>
                <p className="text-gray-600 text-sm mt-2">
                  <Link href="/articles/corporate-heritage-publishing-ottawa" className="text-red-900 hover:underline">
                    Corporate and heritage publishing
                  </Link> services help organizations communicate effectively in both languages.
                </p>
              </div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Laptop className="text-amber-400" size={28} />
                  <h3 className="text-xl font-bold">Digital & Print</h3>
                </div>
                <p className="text-gray-300">eBook formatting, Kindle, PDF, interactive pubs, magazine layout, hard/soft cover.</p>
                <p className="text-gray-400 text-sm mt-2">
                  <Link href="/articles/self-publishing-services-ottawa" className="text-amber-400 hover:underline">
                    Self-publishing services
                  </Link> provide both digital and print solutions for bilingual projects.
                </p>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Users className="text-red-900" /> 
                Who We Serve in Ottawa and Beyond
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["Independent authors", "Businesses", "Churches & ministries", "Educational institutions", "Government agencies", "Nonprofits", "Corporate enterprises", "Coaches & consultants"].map((item) => (
                  <div key={item} className="bg-white rounded-lg p-2 text-center text-sm font-medium text-gray-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <Link href="/articles/first-time-author-publishing-ottawa" className="text-red-900 hover:underline">
                  First-time authors
                </Link> and established writers alike can benefit from bilingual publishing services.
              </p>
            </div>

            {/* Bilingual Publishing Benefits */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-amber-300" size={28} />
                Ottawa's Unique Bilingual Advantage
              </h2>
              <p className="text-white/90 mb-4">
                As Canada's capital city, Ottawa sits at the heart of the country's bilingual identity. Publishing in both 
                English and French is not just a best practice—it's a reflection of the city's cultural and linguistic heritage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Access to both English and French markets",
                  "Government and institutional credibility",
                  "Cultural authenticity and respect",
                  "Expanded distribution opportunities",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-amber-300" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-4">
                <Link href="/articles/author-branding-book-marketing-ottawa" className="text-amber-300 hover:underline">
                  Author branding and book marketing
                </Link> strategies should consider Ottawa's bilingual audience.
              </p>
            </div>

            {/* Bilingual Publishing Tips */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MessageCircle className="text-red-900" size={28} />
                Tips for Successful Bilingual Publishing
              </h2>
              <div className="space-y-4">
                {[
                  "Work with native speakers for each language",
                  "Ensure cultural relevance in both versions",
                  "Maintain consistent branding across languages",
                  "Consider layout and design differences",
                  "Plan for proper ISBN and distribution in both markets",
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-red-900 font-bold">{i + 1}.</span>
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <Link href="/articles/self-publishing-consultation-ottawa" className="text-red-900 hover:underline">
                  Self-publishing consultation
                </Link> can help you navigate the unique considerations of bilingual publishing.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bilingual publishing in Ottawa opens doors to wider audiences, greater credibility, and meaningful engagement with 
                diverse communities across Canada. Whether you're an author, business, government agency, or nonprofit, publishing 
                in both official languages demonstrates professionalism and a commitment to serving all Canadians.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With the right publishing partner, your message can resonate authentically in both English and French.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Rocket className="text-amber-300" size={28} />
                Elevate Your Message Through Bilingual Publishing
              </h2>
              <p className="mb-6">Publishing in both English and French shows professionalism, inclusion, and national reach.</p>
              <Link href="/articles/self-publishing-services-ottawa" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Contact Us Today
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-black text-center mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/articles/corporate-heritage-publishing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=600&h=400&fit=crop" 
                      alt="Corporate and heritage publishing in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Corporate and Heritage Publishing in Ottawa, Canada
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">Preserving stories and building legacies through professional publishing.</p>
                  </div>
                </Link>
                <Link href="/articles/faith-based-publishing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1504052434569-70ad5836ab9c?w=600&h=400&fit=crop" 
                      alt="Faith-based publishing in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Faith-Based Publishing in Ottawa: Choosing the Right Path for Your Book
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">A comprehensive guide for faith-based authors navigating the publishing journey.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}