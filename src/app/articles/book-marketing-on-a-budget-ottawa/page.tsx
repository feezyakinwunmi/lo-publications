// src/app/articles/book-marketing-on-a-budget-ottawa/page.tsx
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
  TrendingUp,
  Sparkles,
  Users,
  MessageCircle,
  Award,
  DollarSign,
  User,
  Mail,
  Star,
  Eye,
  Zap,
  Clock,
  FileText,
  Home,
  ShoppingBag,
  Newspaper,
  Heart,
  Coffee,
  Mic,
  Share2,
  Search,
  PenTool,
  Palette,
  Rocket,
  Shield,
  MapPin,
  Video,
  BarChart,
  Building2,
  Library,
  Radio,
  Megaphone,
  Handshake,
  Store,
  Music,
  Camera,
  TrendingDown,
  Lightbulb,
  BookMarked,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  School,
  Church,
  UsersRound,
  Smartphone,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Ticket,
  Newspaper as NewspaperIcon,
  Podcast,
  Speaker,
  BookOpenCheck,
  BadgeCheck,
  ArrowUpRight,
  ThumbsUp,
  Quote,
  PenLine,
  NotebookPen,
  Presentation,
} from "lucide-react";

export default function BookMarketingOnABudgetArticle() {
  return (
    <main className="min-h-screen bg-gray-50 mt-20 md:mt-0 py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-red-900 mb-8 transition group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition"
          />
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
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&h=500&fit=crop"
              alt="Book marketing on a budget - Ottawa author promoting their book"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={16} className="text-green-300" />
                  <span className="text-green-300 text-sm">
                    Ottawa Author Guide • Book Marketing
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Book Marketing on a Budget: Strategies for First-Time
                  Self-Published Authors in Ottawa
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> July 14, 2026
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={16} /> 10 min read
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} /> Ottawa, Canada
              </span>
              <span className="flex items-center gap-2">
                <DollarSign size={16} /> Budget Marketing
              </span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Publishing your first book is a major achievement, but getting
              people to discover it is often the biggest challenge. Many
              first-time self-published authors in Ottawa assume they need
              thousands of dollars to market their books successfully.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-10 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed">
                The truth is that strategic, low-cost marketing can generate
                impressive results when done consistently. By combining local
                networking, digital marketing, community engagement, and
                professional branding, you can build visibility without
                exhausting your budget.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Whether you've written a novel, memoir, children's book,
                devotional, business guide, or educational resource, these
                practical strategies will help you promote your book effectively
                while keeping costs under control.
              </p>
            </div>

            {/* Why Book Marketing Matters */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Megaphone className="text-red-900" size={28} />
                Why Book Marketing Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many authors believe that publishing a book automatically
                attracts readers. Unfortunately, thousands of new books are
                released every day, making discoverability one of the biggest
                challenges.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Effective book marketing helps you:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Build credibility as an author",
                  "Reach your ideal readers",
                  "Generate book sales",
                  "Increase reviews and recommendations",
                  "Create long-term author recognition",
                  "Open opportunities for speaking engagements and media interviews",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                Marketing should begin before your book is published and
                continue long after launch day.
              </p>
            </div>

            {/* Define Your Target Audience */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Define Your Target Audience
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the biggest mistakes first-time authors make is trying to
                market to everyone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Instead, ask yourself:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {[
                  "Who is most likely to enjoy this book?",
                  "What age group am I writing for?",
                  "What problems does my book solve?",
                  "Where do these readers spend time online?",
                  "Which Ottawa communities are most interested in this topic?",
                ].map((question) => (
                  <div key={question} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <Lightbulb size={16} className="text-amber-500" />
                    <span className="text-gray-700 text-sm">{question}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-black text-sm mb-2">
                  For example:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { icon: School, label: "Children's books", desc: "parents, teachers, schools, libraries" },
                    { icon: Church, label: "Christian books", desc: "churches and faith communities" },
                    { icon: Briefcase, label: "Business books", desc: "entrepreneurs and professionals" },
                    { icon: UsersRound, label: "Memoirs", desc: "book clubs and local readers" },
                    { icon: GraduationCap, label: "Educational books", desc: "schools and training organisations" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon size={14} className="text-red-900" />
                      <span className="text-gray-700 text-sm">
                        <span className="font-medium">{item.label}</span> → {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Knowing your audience makes every marketing dollar more
                effective.
              </p>
            </div>

            {/* Build an Author Website */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Home className="text-red-900" size={28} />
                Build an Author Website
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A simple author website acts as your online home.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Author biography",
                  "Book information",
                  "Book purchasing links",
                  "Contact page",
                  "Blog",
                  "Media kit",
                  "Newsletter sign-up",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <CheckCircle size={14} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Search engines often rank well-maintained websites higher than
                social media profiles, making them a valuable long-term
                marketing tool.
              </p>
            </div>

            {/* Optimise Your Book for Search Engines */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Search className="text-red-900" size={28} />
                Optimise Your Book for Search Engines
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many readers discover books through Google searches rather than
                online bookstores.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Use relevant keywords throughout your website and promotional
                content, such as:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Self-published books in Ottawa",
                  "Canadian authors",
                  "Ottawa children's books",
                  "Christian books Canada",
                  "Local Ottawa authors",
                  "Buy books online in Ottawa",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-gray-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Adding these naturally into blog posts and product pages
                improves your visibility in search results.
              </p>
            </div>

            {/* Use Social Media Consistently */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Share2 className="text-red-900" size={28} />
                Use Social Media Consistently
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You don't need to be active on every platform. Choose two or
                three where your readers spend the most time. Popular options
                include:
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Youtube, label: "TikTok" },
                  { icon: Youtube, label: "YouTube" },
                ].map((platform) => (
                  <div
                    key={platform.label}
                    className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
                  >
                    <platform.icon size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{platform.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Share:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  "Behind-the-scenes writing updates",
                  "Book excerpts",
                  "Reader testimonials",
                  "Writing tips",
                  "Short videos",
                  "Cover reveals",
                  "Launch announcements",
                  "Author stories",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Consistency is more important than posting every day.
              </p>
            </div>

            {/* Create Valuable Content */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <PenTool className="text-red-900" size={28} />
                Create Valuable Content
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Content marketing is one of the most affordable ways to attract
                readers. Ideas include:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  "Blog articles",
                  "Short educational videos",
                  "Writing advice",
                  "Book recommendations",
                  "Personal stories",
                  "FAQs",
                  "Reading lists",
                  "Local Ottawa literary events",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Helpful content builds trust and improves your website's search
                rankings.
              </p>
            </div>

            {/* Build an Email List */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Mail className="text-red-900" size={28} />
                Build an Email List
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Social media algorithms change frequently, but your email list
                belongs to you. Offer readers something valuable in exchange for
                subscribing, such as:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Free chapter",
                  "Printable workbook",
                  "Reading guide",
                  "Bonus devotional",
                  "Children's activity pages",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <Star size={16} className="text-amber-500" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Email subscribers are often your most loyal readers and are more
                likely to purchase future books.
              </p>
            </div>

            {/* Partner with Ottawa Bookstores and Libraries */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Library className="text-red-900" size={28} />
                Partner with Ottawa Bookstores and Libraries
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Local partnerships provide valuable exposure without requiring a
                large marketing budget.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Consider contacting:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {[
                  "Independent bookstores",
                  "Community libraries",
                  "Local reading clubs",
                  "Schools",
                  "Churches",
                  "Community centres",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Offer:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Book readings",
                  "Author talks",
                  "Children's storytelling sessions",
                  "Writing workshops",
                  "Book signings",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Community engagement often leads to word-of-mouth referrals.
              </p>
            </div>

            {/* Encourage Reader Reviews */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Star className="text-red-900" size={28} />
                Encourage Reader Reviews
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reviews increase credibility and influence buying decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After readers finish your book, politely ask them to leave
                honest reviews on major online bookstores and reading platforms.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                Positive reviews also improve search visibility and increase
                customer confidence.
              </p>
            </div>

            {/* Network with Local Authors */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Users className="text-red-900" size={28} />
                Network with Local Authors
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa has an active writing and publishing community.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Writing groups",
                  "Literary festivals",
                  "Author meetups",
                  "Book fairs",
                  "Publishing workshops",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
                    <Handshake size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Networking often leads to collaboration opportunities, shared
                audiences, podcast interviews, and speaking invitations.
              </p>
            </div>

            {/* Use Free Public Relations Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Radio className="text-red-900" size={28} />
                Use Free Public Relations Opportunities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many local media outlets enjoy featuring local authors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Reach out to:
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  { icon: NewspaperIcon, label: "Community newspapers" },
                  { icon: Globe, label: "Local magazines" },
                  { icon: Podcast, label: "Podcasts" },
                  { icon: Radio, label: "Radio stations" },
                  { icon: MessageCircle, label: "Community blogs" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
                  >
                    <item.icon size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Prepare a professional media kit containing:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {[
                  "Author biography",
                  "High-quality author photo",
                  "Book cover",
                  "Press release",
                  "Contact information",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                    <CheckCircle size={14} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Earned media exposure can significantly increase awareness
                without paid advertising.
              </p>
            </div>

            {/* Invest in Professional Branding */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Sparkles className="text-red-900" size={28} />
                Invest in Professional Branding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Even on a tight budget, some investments are worthwhile.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Book cover design",
                  "Editing",
                  "Interior formatting",
                  "Website design",
                  "SEO optimisation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <CheckCircle size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                A professionally presented book is more likely to attract
                readers and generate positive reviews.
              </p>
            </div>

            {/* Attend Local Markets and Community Events */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Store className="text-red-900" size={28} />
                Attend Local Markets and Community Events
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Community events offer affordable opportunities to meet readers
                face-to-face.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Craft fairs",
                  "Farmers' markets",
                  "Cultural festivals",
                  "Church conferences",
                  "Educational exhibitions",
                  "Community celebrations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
                    <Ticket size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Personal interactions often result in stronger reader
                relationships than online advertising alone.
              </p>
            </div>

            {/* Use Video Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Video className="text-red-900" size={28} />
                Use Video Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Short-form videos continue to perform exceptionally well.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                Create videos showing:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Why you wrote the book",
                  "Writing process",
                  "Reader testimonials",
                  "Book signing events",
                  "Behind-the-scenes footage",
                  "Frequently asked questions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <Camera size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Simple smartphone videos can be highly effective without
                requiring expensive equipment.
              </p>
            </div>

            {/* Monitor Your Marketing Results */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <BarChart className="text-red-900" size={28} />
                Monitor Your Marketing Results
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track what works by measuring:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Website traffic",
                  "Book sales",
                  "Email subscribers",
                  "Social media engagement",
                  "Event attendance",
                  "Reader enquiries",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl">
                    <Eye size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Focus your future efforts on the strategies producing the best
                results.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Award className="text-red-900" size={28} />
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Marketing your first self-published book doesn't require a large
                budget—it requires consistency, creativity, and a clear
                understanding of your readers. By building an online presence,
                engaging with the Ottawa community, creating valuable content,
                and developing meaningful relationships with readers, you can
                steadily grow your audience and increase book sales over time.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                Remember, successful book marketing is not about one big
                campaign. It's about taking small, strategic actions
                consistently that continue to build your author brand long after
                your book is published.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Rocket className="text-green-300" size={28} />
                Ready to Market Your Book on a Budget?
              </h2>
              <p className="mb-6">
                Let LO Publications help you create a marketing strategy that
                works for your budget and your audience.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Get in Touch Today →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-black text-center mb-6">
                You Might Also Like
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  href="/articles/ottawa-author-brand-website"
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
                      alt="Ottawa author building brand and website"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Ottawa Author: Building Your Author Brand and Website
                      Before Your Book Launches
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Learn why building your brand and website before launch is
                      essential for success.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/articles/first-time-author-publishing-ottawa"
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop"
                      alt="First-time author publishing in Ottawa"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      First-Time Author Publishing in Ottawa: Everything You
                      Need to Know
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      A comprehensive guide for aspiring authors navigating the
                      publishing journey in Ottawa.
                    </p>
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