// src/app/articles/author-branding-book-marketing-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle, 
  BookOpen, 
  Calendar, 
  Globe,
  Target,
  Users,
  TrendingUp,
  Share2,
  Globe2,
  Building2,
  Sparkles,
  Eye,
  MessageCircle,
  Calendar as CalendarIcon,
  MapPin
} from "lucide-react";

export default function AuthorBrandingMarketingArticle() {
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
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=500&fit=crop"
              alt="Author branding and book marketing - Ottawa author at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Author Success • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Author Branding & Book Marketing in Ottawa: How Local Authors Build Visibility and Grow Their Readership
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 10 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Share2 size={16} /> Branding & Marketing</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Authors in Ottawa often face a similar challenge: getting their work in front of the right readers.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                Conversations within Ottawa's writing community frequently revolve around finding writing groups, attending workshops, 
                participating in literary events, connecting with bookstores, and learning how to promote a book effectively. 
                While these may seem like separate concerns, they all connect to two important areas of an author's career: 
                <strong className="text-red-900"> branding and marketing</strong>.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              A strong author brand helps readers recognize and remember you. Effective book marketing helps readers discover your work. 
              Together, they form the foundation of a sustainable writing career.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              For authors in Ottawa, branding and marketing are not limited to online platforms. They are shaped by participation in 
              the city's literary community, relationships with readers, and the way an author's work is presented both online and offline.
            </p>

            {/* What Is Author Branding */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                What Is Author Branding?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Author branding is the perception readers have of you and your work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many writers associate branding with logos, colour palettes, or social media graphics. While visual identity plays a role, 
                branding extends much further. Your author website, biography, book covers, public appearances, online presence, and 
                interactions with readers all contribute to how people perceive you.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-black mb-3">A strong author brand typically includes:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "A consistent author message",
                    "Professional book presentation",
                    "A recognizable visual identity",
                    "A clear understanding of your audience",
                    "An active presence within relevant communities",
                    "Consistent communication across platforms",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-900" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  Layo Obidike
                </a> offers expert guidance on author branding and building a recognizable author identity.
              </p>
            </div>

            {/* Why Branding Matters in Ottawa */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" size={28} />
                Why Author Branding Matters in Ottawa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa offers a unique environment for authors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The city has an active literary community, independent bookstores, libraries, writing groups, festivals, and cultural 
                organizations that regularly support writers and readers. These local networks create opportunities that are difficult 
                to replicate through online advertising alone.
              </p>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-3">Readers frequently discover authors through:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Literary festivals",
                    "Author readings",
                    "Community events",
                    "Independent bookstores",
                    "Libraries",
                    "Writing workshops",
                    "Recommendations",
                  ].map((item) => (
                    <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media House
                </a> offers resources to help you connect with Ottawa's vibrant literary community.
              </p>
            </div>

            {/* Branding Starts Before Publishing */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                Author Branding Starts Before Book Promotion
              </h2>
              <p className="text-white/90 mb-4">
                Many authors begin thinking about branding when a manuscript is ready for publication. In reality, branding begins much earlier.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                {[
                  "Your website",
                  "Author biography",
                  "Social media profiles",
                  "Published work",
                  "Speaking engagements",
                  "Community involvement",
                  "Book cover design",
                  "Reader interactions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-6">
                <a href="https://pfschools.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  PF Schools
                </a> offers educational programs to help you develop your author brand and writing skills.
              </p>
            </div>

            {/* Ottawa's Literary Community */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Users className="text-red-900" size={28} />
                Ottawa's Literary Community as a Marketing Asset
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every workshop, festival, reading, or literary event creates opportunities to meet readers, industry professionals, 
                booksellers, journalists, and fellow authors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Globe2, title: "Media opportunities", desc: "Local coverage and interviews" },
                  { icon: MessageCircle, title: "Speaking invitations", desc: "Workshops and panels" },
                  { icon: Users, title: "Collaborative projects", desc: "Work with other authors" },
                  { icon: Eye, title: "Advance readers", desc: "Early reviews and feedback" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <item.icon className="text-red-900" size={24} />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  iThriveOnWisdom
                </a> provides wisdom and practical advice for navigating the literary community and building your author career.
              </p>
            </div>

            {/* Common Branding Mistakes */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4">Common Branding Mistakes We See Among Ottawa Authors</h2>
              <div className="space-y-4">
                {[
                  { title: "Inconsistent Author Messaging", desc: "Website, social media, and bio should communicate consistent identity" },
                  { title: "Weak Visual Presentation", desc: "Professional cover design establishes credibility" },
                  { title: "No Local Visibility Strategy", desc: "Don't overlook opportunities within your own city" },
                  { title: "Launching Without a Marketing Foundation", desc: "Build audience and visibility before publication" },
                ].map((mistake, i) => (
                  <div key={i} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                    <h3 className="font-semibold text-black">{mistake.title}</h3>
                    <p className="text-gray-600 text-sm">{mistake.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Platforms
                </a> offers publishing consultation to help you avoid these common pitfalls and build a strong foundation.
              </p>
            </div>

            {/* Book Marketing Strategies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Share2 className="text-red-900" size={28} />
                Book Marketing Strategies for Ottawa Authors
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Globe2, title: "Build an Author Website", desc: "Optimize for searches like 'Ottawa author' and 'book marketing Ottawa'" },
                  { icon: BookOpen, title: "Professional Publishing Foundation", desc: "Editing, cover design, and formatting influence perception" },
                  { icon: Building2, title: "Build Relationships with Local Media", desc: "Newspapers, podcasts, and community publications" },
                  { icon: Share2, title: "Leverage Social Media Strategically", desc: "Share writing updates, events, and community involvement" },
                  { icon: MapPin, title: "Independent Bookstores", desc: "Book signings, launch events, and featured displays" },
                  { icon: CalendarIcon, title: "Literary Festivals and Events", desc: "Attend consistently and become an active participant" },
                ].map((strategy, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <strategy.icon className="text-red-900 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-bold text-black">{strategy.title}</h3>
                      <p className="text-gray-600">{strategy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media Studio
                </a> provides professional editing, cover design, and book formatting services to ensure your book makes a strong impression.
              </p>
            </div>

            {/* Where Readers Discover Books */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="text-amber-300" size={28} />
                Where Ottawa Readers Discover New Books
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Independent bookstores",
                  "Literary festivals",
                  "Libraries",
                  "Book clubs",
                  "Community events",
                  "Author recommendations",
                  "Local media coverage",
                  "Online communities",
                ].map((channel) => (
                  <div key={channel} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{channel}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-4">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Publications
                </a> helps authors navigate these channels and develop effective marketing strategies.
              </p>
            </div>

            {/* How LO Publications Supports Authors */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4">How LO Publications Supports Ottawa Authors</h2>
              <p className="text-white/90 mb-4">
                Publishing a book involves more than preparing a manuscript for release. Authors often need guidance on branding, 
                publishing, positioning, and marketing to ensure their work reaches the right audience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                {[
                  "Author branding",
                  "Editing & proofreading",
                  "Cover design",
                  "Book formatting",
                  "Publishing consultation",
                  "Author websites",
                  "Distribution support",
                  "Marketing strategy",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-1 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-6 text-sm">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Media House
                </a>
                <span className="text-white/30">|</span>
                <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Media Studio
                </a>
                <span className="text-white/30">|</span>
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Platforms
                </a>
                <span className="text-white/30">|</span>
                <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  Layo Obidike
                </a>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Final Thoughts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Author branding and book marketing in Ottawa are closely connected to community, consistency, and visibility.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Readers are more likely to engage with authors they recognize, trust, and encounter regularly through both digital 
                and local channels.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For Ottawa authors, opportunities exist far beyond social media and advertising campaigns. Literary events, bookstores, 
                workshops, community organizations, and local media all contribute to how books are discovered and remembered.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <p className="text-gray-800 italic">
                  "The most successful authors are rarely the most visible overnight. They are often the ones who consistently show up, 
                  contribute to the literary community, and create lasting connections with readers."
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                    iThriveOnWisdom
                  </a> offers wisdom and guidance to help authors build sustainable careers.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Author Brand?</h2>
              <p className="mb-6">Get expert guidance on author branding and book marketing tailored for Ottawa authors.</p>
              <p className="mb-6 text-white/80">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Platforms
                </a> — Turning Manuscripts into Masterpieces.
              </p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Start Building Your Brand Today →
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
                Discover more resources and services to support your publishing journey.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}