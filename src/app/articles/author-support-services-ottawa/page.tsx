// src/app/articles/author-support-services-ottawa/page.tsx
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
  Sparkles,
  PenTool,
  Share2,
  Palette,
  Rocket,
  Shield,
  Award,
  MessageCircle,
  MapPin
} from "lucide-react";

export default function AuthorSupportServicesArticle() {
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
              src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=500&fit=crop"
              alt="Author support services in Ottawa - writer at desk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Ottawa Author Support • Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Author Support Services in Ottawa: Turn Your Manuscript into a Published Success Story
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 9 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Shield size={16} /> Support Services</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Writing a book is a remarkable achievement, but finishing your manuscript is only the first step. The journey from 
              manuscript to published book involves editing, design, publishing, marketing, and audience building. For many writers, 
              these stages can feel overwhelming.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                That's where professional <strong className="text-red-900">Author Support Services in Ottawa</strong> can help. 
                Whether you're a first-time author or an experienced writer, expert guidance can transform your manuscript into a 
                polished, professionally published book that reaches the right audience.
              </p>
            </div>

            {/* Why Authors Need Professional Support */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Why Authors Need Professional Support
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many writers spend months—or even years—creating their manuscripts, only to face unexpected challenges when it's 
                time to publish.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-3">Common obstacles include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Understanding the publishing process",
                    "Finding qualified editors",
                    "Creating a professional book cover and layout",
                    "Formatting for print and eBook platforms",
                    "Marketing the book effectively",
                    "Building visibility and generating sales",
                  ].map((obstacle) => (
                    <div key={obstacle} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                      <span className="text-gray-700">{obstacle}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 italic">
                  Without proper support, these challenges can delay publication and limit a book's potential success.
                </p>
              </div>
            </div>

            {/* Comprehensive Support Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Sparkles className="text-red-900" size={28} />
                Comprehensive Author Support Services in Ottawa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Professional author support services provide end-to-end solutions that guide writers through every stage of the 
                publishing process.
              </p>

              {/* Manuscript Evaluation */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-red-900" size={24} />
                  <h3 className="text-xl font-bold text-black">Manuscript Evaluation and Development</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Before publication, your manuscript should be carefully reviewed to identify areas for improvement.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Story structure and organization",
                    "Character development",
                    "Clarity and readability",
                    "Audience engagement",
                    "Content flow and consistency",
                  ].map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Editing */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <PenTool className="text-red-900" size={24} />
                  <h3 className="text-xl font-bold text-black">Professional Editing and Proofreading</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Every successful book benefits from professional editing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Developmental editing",
                    "Line editing",
                    "Copy editing",
                    "Proofreading",
                  ].map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book Design */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="text-red-900" size={24} />
                  <h3 className="text-xl font-bold text-black">Book Design and Formatting</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  A professionally designed book creates a positive first impression and enhances the reader experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Interior layout and formatting",
                    "Custom cover design",
                    "eBook formatting",
                    "Print-ready file preparation",
                    "Typography and visual presentation",
                  ].map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Self-Publishing Support */}
              <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="text-amber-300" size={24} />
                  <h3 className="text-xl font-bold">Self-Publishing Support</h3>
                </div>
                <p className="text-white/90 mb-3">
                  Many authors choose self-publishing to maintain creative control and higher royalty potential.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ISBN registration",
                    "Publishing platform setup",
                    "Print-on-demand services",
                    "Distribution strategies",
                    "Publishing requirements and compliance",
                  ].map((item) => (
                    <span key={item} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* The Biggest Challenge */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MessageCircle className="text-red-900" size={28} />
                The Biggest Challenge: Moving from Manuscript to Published Book
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most common frustrations authors experience is completing a manuscript but not knowing what to do next.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "How do I publish my book professionally?",
                  "Which publishing option is best for me?",
                  "How do I market my book?",
                  "How can I avoid expensive publishing mistakes?",
                ].map((question) => (
                  <div key={question} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    <span className="text-gray-700">{question}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Professional author support services provide a clear roadmap that takes authors from manuscript completion to 
                successful publication and promotion.
              </p>
            </div>

            {/* Book Marketing and Author Branding */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Share2 className="text-red-900" size={28} />
                Book Marketing and Author Branding
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Publishing a book is only part of the journey. Readers need to discover it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Author Brand Development", desc: "Build credibility and create long-term connections with readers" },
                  { icon: Globe, title: "Author Websites and Online Presence", desc: "A professional website serves as a central hub for readers" },
                  { icon: Users, title: "Social Media Marketing", desc: "Engage readers, build communities, and grow your audience" },
                  { icon: Rocket, title: "Book Launch Support", desc: "Email campaigns, press releases, media outreach, and launch events" },
                ].map((service, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <service.icon className="text-red-900 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-black">{service.title}</h3>
                      <p className="text-gray-500 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Local Support Services */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-amber-300" size={28} />
                Why Choose Local Author Support Services in Ottawa?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Personalized consultations",
                  "Better understanding of the Canadian publishing industry",
                  "Easier communication and collaboration",
                  "Access to local literary communities and events",
                  "Ongoing support throughout the publishing journey",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-amber-300" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Can Benefit */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Users className="text-red-900" size={28} />
                Who Can Benefit from Author Support Services?
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "First-time authors",
                  "Self-published writers",
                  "Business professionals",
                  "Coaches and consultants",
                  "Faith-based authors",
                  "Children's book authors",
                  "Fiction writers",
                  "Non-fiction writers",
                ].map((group) => (
                  <span key={group} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                    {group}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                No matter your experience level or genre, professional support can help improve your publishing outcomes.
              </p>
            </div>

            {/* Start Your Journey */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Rocket className="text-amber-300" size={28} />
                Start Your Publishing Journey with Confidence
              </h2>
              <p className="text-white/90 mb-4">
                Writing a book takes dedication, creativity, and perseverance. Publishing and marketing that book successfully 
                requires additional expertise and strategy.
              </p>
              <p className="text-white/90">
                Professional Author Support Services in Ottawa help writers refine their manuscripts, publish professionally, 
                build their author brand, and connect with readers.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're ready to take your manuscript from draft to published success story, partnering with experienced publishing 
                professionals can help you achieve your goals faster and with greater confidence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your story deserves to be read. With the right support, it can reach the audience it was written for.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Turn Your Manuscript into a Published Success Story?</h2>
              <p className="mb-6">Get professional author support services tailored for Ottawa writers.</p>
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