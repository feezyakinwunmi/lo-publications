// src/app/articles/ottawa-author-brand-website/page.tsx
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
  PenTool,
  Palette,
  Share2,
  Search,
  Rocket,
  Shield,
  MapPin,
  Users,
  MessageCircle,
  Award,
  DollarSign,
  User,
  Briefcase,
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
} from "lucide-react";

export default function OttawaAuthorBrandWebsiteArticle() {
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
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=500&fit=crop"
              alt="Ottawa author building their brand and website before book launch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">
                    Ottawa Author Guide • Branding
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Ottawa Author: Building Your Author Brand and Website Before
                  Your Book Launches
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
                <BookOpen size={16} /> 5 min read
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} /> Ottawa, Canada
              </span>
              <span className="flex items-center gap-2">
                <Target size={16} /> Author Branding
              </span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most authors finish the manuscript and assume the rest will sort
              itself out. Then launch day arrives, and there's no website, no
              email list, and nobody outside their friend group who even knows
              the book exists. The writing was never the hard part.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-10 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed">
                At LO Publications, we've seen this play out with Ottawa authors
                enough times to know the pattern. The ones who build a brand and
                a website before the book is even finished are the ones who
                launch to readers who are actually waiting, instead of an empty
                room.
              </p>
            </div>

            {/* Your Brand Is Just What People Remember About You */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <User className="text-red-900" size={28} />
                Your Brand Is Just What People Remember About You
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your name. Your voice. Whether someone who is looking for you on
                the internet finds anything. You're asking a stranger to find
                you and make a purchase within five seconds if none of that is
                known until the book ships. It's a difficult sell, and the
                solution is to develop it in before.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Star, label: "Your Name", desc: "Consistent across all platforms" },
                  { icon: Mic, label: "Your Voice", desc: "Authentic and recognizable" },
                  { icon: Eye, label: "Your Visibility", desc: "Easy to find online" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                    <item.icon className="text-red-900" size={20} />
                    <div>
                      <p className="font-semibold text-black text-sm">{item.label}</p>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Website Is the One Thing You Actually Own */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Home className="text-red-900" size={28} />
                Your Website Is the One Thing You Actually Own
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instagram can change its algorithm tomorrow. Nobody can take
                your website away from you the same way. A few things matter
                more than the rest:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: FileText, title: "About Page", desc: "Says something real about you, not a bio written in third person." },
                  { icon: ShoppingBag, title: "Book Pages", desc: "Cover, description, a place to buy it." },
                  { icon: Mail, title: "Email List", desc: "Readers can leave their email — that list answers to you, not to a platform's mood that week." },
                  { icon: Newspaper, title: "Press Page", desc: "So an editor at CBC Ottawa or Ottawa Magazine can find your photo without emailing you to ask for one." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <item.icon className="text-red-900 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-black">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ottawa Is Small Enough to Notice */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 mb-10 border border-red-100">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" size={28} />
                Ottawa Is Small Enough to Notice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa's literary scene notices who's been around and who just
                showed up asking for something.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Coffee, text: "Stop into Perfect Books or Octopus Books before you have anything to sell them." },
                  { icon: Mic, text: "Go to a reading at the Ottawa International Writers Festival as an audience member first, a writer second." },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <item.icon className="text-red-900" size={20} />
                    <p className="text-gray-700 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                It's slower than emailing every outlet the week before launch,
                but it's the difference between an invitation and a favor.
              </p>
            </div>

            {/* Where LO Publications Comes In */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                Where LO Publications Comes In
              </h2>
              <p className="text-white/90 mb-4">
                We assist writers in creating the brand, the website, and a
                launch schedule that isn't a rush, often even before the book is
                locked.
              </p>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <Clock className="text-amber-300 flex-shrink-0" size={24} />
                <p className="text-white/90">
                  If you're close to done, or a few months out, that's the
                  moment to start. Get in touch with LO Publications and we'll
                  figure out your timeline together.
                </p>
              </div>
            </div>

            {/* Quick Checklist */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-600" size={28} />
                Pre-Launch Checklist for Ottawa Authors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Define your author brand voice",
                  "Secure your author website domain",
                  "Create an authentic About page",
                  "Set up book pages with covers and descriptions",
                  "Build an email list from day one",
                  "Prepare a press page with media assets",
                  "Connect with local Ottawa bookstores",
                  "Attend local literary events as a community member",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Award className="text-red-900" size={28} />
                Your Book Deserves an Audience
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Writing a book is an achievement worth celebrating. But the real
                celebration happens when readers find it, love it, and share it
                with others. That doesn't happen by accident — it happens
                because you built the foundation before launch day arrived.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're just starting your manuscript or polishing the
                final chapters, now is the time to think about your brand, your
                website, and your place in Ottawa's literary community. The work
                you do today will pay off when readers are waiting for your book
                instead of the other way around.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Rocket className="text-amber-300" size={28} />
                Ready to Build Your Author Brand?
              </h2>
              <p className="mb-6">
                Let LO Publications help you create a brand and website that
                connects with readers before your book even launches.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
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
                  href="/articles/self-publishing-consultation-ottawa"
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop"
                      alt="Self-publishing consultation in Ottawa"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Self-Publishing Consultation for Ottawa Authors: Turning
                      Your Manuscript into a Successful Book
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Get expert guidance to navigate every stage of your
                      publishing journey with confidence.
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