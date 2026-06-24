// src/app/articles/professional-book-publishing-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle, 
  BookOpen, 
  PenTool, 
  Target, 
  Users, 
  MapPin, 
  Calendar, 
  Globe,
  Sparkles,
  Rocket,
  Award,
  Shield,
  MessageCircle,
  TrendingUp
} from "lucide-react";

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
              alt="Professional book publishing services for authors in Ottawa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Ottawa Author Guide • Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Professional Book Publishing Services for Authors in Ottawa
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 6 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Sparkles size={16} /> Professional Publishing</span>
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

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline font-semibold">
                  LO Publications
                </a> offers comprehensive professional publishing services designed specifically for Ottawa authors, 
                from manuscript development to book launch.
              </p>
            </div>

            {/* Why Choose */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Rocket className="text-red-900" size={28} />
                Why Choose Professional Publishing Services?
              </h2>
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
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media Studio
                </a> provides professional editing, cover design, and formatting services to help your book stand out.
              </p>
            </div>

            {/* Publishing Landscape */}
            <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
              <Target className="text-red-900" size={28} />
              The Publishing Landscape in Ottawa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { 
                  title: "Traditional Publishing", 
                  color: "from-blue-900 to-blue-700", 
                  desc: "Baico Publishing, Borealis Press, and Chaudiere Books" 
                },
                { 
                  title: "Self-Publishing", 
                  color: "from-green-900 to-green-700", 
                  desc: "100% creative control with KDP and IngramSpark" 
                },
                { 
                  title: "Hybrid Publishing", 
                  color: "from-amber-900 to-amber-700", 
                  desc: "Best of both worlds with professional support" 
                },
              ].map((type, i) => (
                <div key={i} className={`bg-gradient-to-br ${type.color} rounded-xl p-6 text-white`}>
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-white/80 text-sm">{type.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-10">
              <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                LO Platforms
              </a> offers expert publishing consultation to help you choose the right path for your book.
            </p>

            {/* Local Reach */}
            <div className="bg-red-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" /> 
                Maximizing Local Reach in Ottawa
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
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Publications
                </a> helps authors connect with Ottawa's literary community and maximize local visibility.
              </p>
            </div>

            {/* Author Branding & Marketing */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <TrendingUp className="text-red-900" size={28} />
                Author Branding & Book Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Publishing your book is just the beginning. Professional publishing services also include support for author 
                branding and book marketing to help you reach your target audience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Author website development",
                  "Social media strategy",
                  "Book launch planning",
                  "Media outreach",
                  "Speaking engagement preparation",
                  "Email list building",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  Layo Obidike
                </a> offers expert guidance on author branding and building visibility for your book.
              </p>
            </div>

            {/* Educational Resources */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="text-amber-300" size={28} />
                Educational Resources for Ottawa Authors
              </h2>
              <p className="text-white/90 mb-4">
                Continuous learning is essential for authors navigating the publishing industry. Educational programs and workshops 
                can help you develop your craft and understand the business of publishing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Creative writing workshops",
                  "Publishing seminars",
                  "Author masterclasses",
                  "Marketing training",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-amber-300" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-4">
                <a href="https://pfschools.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  PF Schools
                </a> offers educational programs designed to help authors succeed in the publishing industry.
              </p>
            </div>

            {/* Wisdom & Guidance */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                <Shield className="text-red-900" size={24} />
                Wisdom for Your Publishing Journey
              </h2>
              <p className="text-gray-700">
                Navigating the publishing industry requires wisdom, patience, and the right guidance. Learning from experienced 
                publishing professionals can help you avoid common pitfalls and make informed decisions.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  iThriveOnWisdom
                </a> provides wisdom and practical advice to help authors navigate their publishing journey.
              </p>
            </div>

            {/* Start Your Journey */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-amber-300" size={28} />
                Why Ottawa Authors Trust Our Publishing Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { title: "Expert Guidance", desc: "Professional support at every stage" },
                  { title: "Quality Standards", desc: "Rigorous editing and design processes" },
                  { title: "Local Knowledge", desc: "Understanding of Ottawa's literary community" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-3 text-center">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className="text-white/70 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-4 text-center">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Platforms
                </a> — Turning Manuscripts into Masterpieces.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa offers a vibrant and supportive environment for authors. Whether you're writing your first book or your tenth, 
                professional publishing services can help you navigate the complexities of the publishing industry and bring your 
                work to readers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From editing and design to publishing consultation and marketing support, working with experienced professionals 
                ensures your book reaches its full potential.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media House
                </a>, <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media Studio
                </a>, and <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Platforms
                </a> offer comprehensive publishing services for Ottawa authors.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Share Your Story?</h2>
              <p className="mb-6">The journey from blank page to finished book is a marathon — but you don't have to walk it alone.</p>
              <p className="mb-6 text-white/80">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Platforms
                </a> — Turning Manuscripts into Masterpieces.
              </p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Get Started Today →
              </button>
            </div>

            {/* Additional Resources / Partner Sites */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-black text-center mb-4">Explore Our Publishing Ecosystem</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-900 transition text-sm">
                  LO Media House
                </a>
                <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-900 transition text-sm">
                  LO Media Studio
                </a>
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-900 transition text-sm">
                  LO Platforms
                </a>
                <a href="https://pfschools.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-900 transition text-sm">
                  PF Schools
                </a>
                <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-900 transition text-sm">
                  Layo Obidike
                </a>
                <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-red-900 transition text-sm">
                  iThrive On Wisdom
                </a>
              </div>
              <p className="text-gray-500 text-xs text-center mt-4">
                Discover more resources and services to support your publishing journey in Ottawa.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}