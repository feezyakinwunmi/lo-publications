// src/app/articles/self-publishing-services-ottawa/page.tsx
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
  Shield
} from "lucide-react";

export default function SelfPublishingServicesArticle() {
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
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=500&fit=crop"
              alt="Self-publishing services in Ottawa - author at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Ottawa Author Guide • Self-Publishing</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Self-Publishing Services in Ottawa: A Complete Guide for Aspiring Authors
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 8 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Target size={16} /> Self-Publishing</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The publishing industry has evolved dramatically over the last decade, giving authors more control over their work 
              than ever before. Self-publishing has become a preferred option for writers who want to retain ownership of their 
              manuscripts, reach global audiences, and accelerate the publishing process.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                In Ottawa, self-publishing services have gained popularity among authors, entrepreneurs, educators, and professionals 
                seeking to share their knowledge and stories. This guide explores the benefits of self-publishing services in Ottawa, 
                the available solutions, and how authors can achieve publishing success.
              </p>
            </div>

            {/* What Are Self-Publishing Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <BookOpen className="text-red-900" size={28} />
                What Are Self-Publishing Services?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Self-publishing services are professional solutions designed to help authors transform manuscripts into market-ready 
                books. These services typically include editing, proofreading, book design, formatting, cover creation, ISBN registration, 
                printing, eBook conversion, distribution, and marketing support. By leveraging these services, authors can produce 
                high-quality books that meet industry standards without relying on traditional publishing houses.
              </p>
            </div>

            {/* Why Choose Self-Publishing in Ottawa */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Globe className="text-red-900" size={28} />
                Why Choose Self-Publishing in Ottawa?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ottawa is home to a vibrant literary and creative community, making it an excellent location for aspiring and 
                established authors. Self-publishing services in Ottawa offer personalized support, local expertise, and access 
                to professional publishing resources. Authors can collaborate closely with editors, designers, and marketing 
                specialists while maintaining full creative control over their projects.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                Key Benefits of Self-Publishing Services in Ottawa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Complete ownership of intellectual property",
                  "Faster publishing timelines",
                  "Higher royalty potential",
                  "Customized publishing packages",
                  "Direct access to professional publishing experts",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-amber-300" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6">Essential Self-Publishing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: PenTool, title: "Professional Editing & Proofreading", desc: "Ensure manuscripts are polished and error-free" },
                  { icon: Palette, title: "Book Design & Formatting", desc: "Visually appealing layouts for print and digital" },
                  { icon: Target, title: "Custom Cover Design", desc: "Stand out in competitive marketplaces" },
                  { icon: Globe, title: "ISBN & Distribution", desc: "Available through major retailers and platforms" },
                  { icon: Share2, title: "Marketing & Promotional Support", desc: "Increase visibility and drive book sales" },
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

            {/* How to Choose a Provider */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Shield className="text-red-900" size={28} />
                How to Choose the Right Self-Publishing Service Provider
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When selecting a self-publishing company in Ottawa, authors should evaluate:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Experience",
                  "Portfolio quality",
                  "Client reviews",
                  "Pricing transparency",
                  "Service offerings",
                  "Customer support",
                ].map((factor) => (
                  <div key={factor} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-green-600" />
                    <span className="text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                It is important to choose a provider that understands your publishing goals and offers solutions tailored to your 
                target audience and genre.
              </p>
            </div>

            {/* SEO and Book Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Search className="text-red-900" size={28} />
                SEO and Book Marketing Strategies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Successful self-publishing extends beyond book production. Authors should invest in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Search engine optimization (SEO)",
                  "Content marketing",
                  "Social media promotion",
                  "Email campaigns",
                  "Author websites",
                  "Online advertising",
                ].map((strategy) => (
                  <div key={strategy} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg">
                    <CheckCircle size={14} className="text-red-900" />
                    <span className="text-gray-700">{strategy}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Using relevant keywords, engaging blog content, and optimized book descriptions can significantly improve 
                discoverability and sales performance.
              </p>
            </div>

            {/* The Future of Self-Publishing */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-amber-300" size={28} />
                The Future of Self-Publishing in Ottawa
              </h2>
              <p className="text-white/90 mb-4">
                As digital technologies continue to advance, self-publishing is expected to become even more accessible and profitable.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Print-on-demand services",
                  "AI tools",
                  "Enhanced eBook experiences",
                  "Global distribution networks",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/90 mt-4">
                Ottawa's growing creative ecosystem positions it as a strong hub for independent publishing and literary entrepreneurship.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Self-publishing services in Ottawa provide authors with the tools, expertise, and flexibility needed to bring their 
                books to life. Whether you are writing fiction, non-fiction, educational materials, or business content, partnering 
                with a reputable self-publishing provider can help you achieve professional results and reach readers worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By combining quality publishing services with effective marketing strategies, authors can successfully establish their 
                presence in today's competitive publishing landscape.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Self-Publish Your Book?</h2>
              <p className="mb-6">Get professional self-publishing services tailored for Ottawa authors.</p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Start Your Publishing Journey Today →
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}