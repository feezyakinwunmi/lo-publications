// src/app/articles/first-time-author-publishing-ottawa/page.tsx
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
  Palette,
  Rocket,
  Shield,
  Award,
  TrendingUp,
  MapPin,
  MessageCircle,
  Building2
} from "lucide-react";

export default function FirstTimeAuthorPublishingArticle() {
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
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=500&fit=crop"
              alt="First-time author publishing in Ottawa - writer at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">New Author Guide • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  First-Time Author Publishing in Ottawa: Everything You Need to Know
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 12 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Target size={16} /> First-Time Author</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Becoming a published author is a dream for many aspiring writers in Ottawa. If you are a first-time author in Ottawa, 
              the publishing journey can seem overwhelming. From writing and editing your manuscript to choosing the right publishing 
              method and marketing your book, there are many important decisions to make.
            </p>

            {/* Why Ottawa Is a Great Place */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" size={28} />
                Why Ottawa Is a Great Place for New Authors
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa is one of Canada's most supportive cities for emerging writers, offering valuable resources, professional services, 
                and networking opportunities for first-time authors. The city offers a unique combination of literary resources, 
                professional publishing services, educational opportunities, and a strong reading culture that can help new authors 
                successfully transition from manuscript creation to book publication.
              </p>

              {/* Thriving Literary Community */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <Users className="text-red-900" size={20} />
                  A Thriving Literary Community
                </h3>
                <p className="text-gray-700 mb-3">
                  The city offers a vibrant literary scene that welcomes writers at every stage of their journey. The city is home to 
                  numerous writing groups, book clubs, literary organizations, and author networks where aspiring writers can connect 
                  with experienced authors and industry professionals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Receive constructive feedback on manuscripts",
                    "Participate in writing workshops and critique groups",
                    "Learn from established authors",
                    "Build professional relationships within the publishing industry",
                    "Gain encouragement and support throughout the publishing process",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Being part of a literary community in Ottawa can significantly reduce the isolation many new writers experience as they 
                  work on their first book. <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">LO Media House</a> offers resources to help you connect with fellow writers and industry professionals.
                </p>
              </div>

              {/* Access to Professional Publishing Services */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <PenTool className="text-red-900" size={20} />
                  Access to Professional Publishing Services in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  One of Ottawa's greatest advantages is the availability of experienced publishing professionals. First-time authors 
                  in Ottawa can easily find experts who specialize in every stage of the publishing process.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black">Professional Editors</h4>
                    <p className="text-gray-600 text-sm">
                      Editing is one of the most critical investments for any author. Ottawa offers access to developmental editors, 
                      copy editors, and proofreaders who can help transform a rough manuscript into a polished, publication-ready book.
                      <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline ml-1">LO Media Studio</a> provides professional editing services tailored for first-time authors.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Book Designers</h4>
                    <p className="text-gray-600 text-sm">
                      Professional cover designers and interior layout specialists can help create visually appealing books that meet 
                      industry standards and attract readers in Ottawa.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Publishing Consultants</h4>
                    <p className="text-gray-600 text-sm">
                      Many publishing professionals in Ottawa provide guidance on publishing strategies, helping emerging authors choose 
                      among traditional, self-publishing, and hybrid publishing options.
                      <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline ml-1">LO Platforms</a> offers comprehensive publishing consultation for new authors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strong Publishing Industry */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <Building2 className="text-red-900" size={20} />
                  Strong Publishing Industry Presence in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  The city is home to several independent publishers, university presses, and publishing organizations. This gives 
                  local writers opportunities to:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Submit manuscripts to local publishers",
                    "Attend publishing events and conferences",
                    "Learn directly from industry experts",
                    "Understand current publishing trends",
                  ].map((item) => (
                    <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Local publishing professionals in Ottawa often have a deeper understanding of the Canadian book market and can provide 
                  targeted advice for new authors. <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">iThriveOnWisdom</a> offers wisdom and guidance for authors on their publishing journey.
                </p>
              </div>

              {/* Literary Festivals */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <Calendar className="text-red-900" size={20} />
                  Literary Festivals and Author Events in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  Local organizations provide various literary festivals, book fairs, author readings, and cultural events throughout 
                  the year. These events create excellent opportunities for first-time authors in Ottawa to:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Network with publishers and literary agents",
                    "Promote their books",
                    "Meet readers face-to-face",
                    "Participate in panel discussions",
                    "Gain media exposure",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Literary festivals in Ottawa can serve as valuable platforms for launching a new book and building an author brand.
                </p>
              </div>

              {/* Educational Opportunities */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 shadow-sm">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <BookOpen className="text-red-900" size={20} />
                  Educational Opportunities for Writers in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  The city offers numerous educational resources designed to help writers improve their craft and understand the 
                  publishing industry in Ottawa. These include:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Creative writing workshops",
                    "Publishing seminars",
                    "Author masterclasses",
                    "Online and in-person training programs",
                    "University writing courses",
                  ].map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  For first-time authors in Ottawa, continuous learning can significantly improve both writing quality and publishing 
                  success. <a href="https://pfschools.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">PF Schools</a> offers educational programs designed for aspiring authors.
                </p>
              </div>

              {/* Library Resources */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <Globe className="text-red-900" size={20} />
                  Excellent Library and Research Resources in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  Authors can access public libraries and educational institutions that provide extensive resources for writers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Research materials",
                    "Writing guides",
                    "Publishing resources",
                    "Literary databases",
                    "Author events and workshops",
                  ].map((item) => (
                    <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Libraries also frequently host local author showcases, creating additional opportunities for exposure for new writers.
                </p>
              </div>

              {/* Marketing Opportunities */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <TrendingUp className="text-red-900" size={20} />
                  Opportunities for Book Marketing and Promotion in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  Publishing a book is only part of the journey; successful promotion is equally important.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Local media coverage",
                    "Community events",
                    "Book signings",
                    "Author interviews",
                    "Podcast appearances",
                    "Literary blogs and publications",
                  ].map((item) => (
                    <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  These promotional avenues can help authors in Ottawa build visibility and establish credibility within the literary 
                  community. <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">Layo Obidike</a> offers insights on author branding and visibility strategies.
                </p>
              </div>

              {/* Support for Self-Published Authors */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <Rocket className="text-red-900" size={20} />
                  Supportive Environment for Self-Published Authors in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  The rise of self-publishing has created new opportunities for aspiring writers. Ottawa has embraced this trend by 
                  offering resources specifically tailored to independent authors.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Print-on-demand services",
                    "Independent publishing consultants",
                    "Marketing specialists",
                    "Author networking groups",
                    "Self-publishing workshops",
                  ].map((item) => (
                    <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  This supportive ecosystem makes it easier for first-time authors in Ottawa to publish professionally while maintaining 
                  creative control.
                </p>
              </div>

              {/* Diverse Reading Audience */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-black mb-3 flex items-center gap-2">
                  <Users className="text-red-900" size={20} />
                  A Diverse and Engaged Reading Audience in Ottawa
                </h3>
                <p className="text-gray-700 mb-3">
                  As Canada's capital city, Ottawa is home to a diverse and highly educated population with a strong appreciation for 
                  literature. This creates a receptive audience for new books across various genres, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Fiction",
                    "Non-fiction",
                    "Memoirs",
                    "Business books",
                    "Children's literature",
                    "Academic publications",
                  ].map((item) => (
                    <span key={item} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Having access to an active reading community in Ottawa can help first-time authors gain early readers and valuable 
                  feedback.
                </p>
              </div>
            </div>

            {/* Understanding Publishing Options */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Understanding Your Publishing Options in Ottawa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As an emerging author in Ottawa, choosing the right publishing path is one of the most important decisions you will make. 
                Ottawa offers access to traditional publishers, self-publishing services, and hybrid publishing companies, each with its 
                own advantages.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  { 
                    title: "Traditional Publishing", 
                    desc: "Professional industry support, wider distribution, greater credibility, no upfront costs",
                    color: "from-blue-900 to-blue-700"
                  },
                  { 
                    title: "Self-Publishing", 
                    desc: "Faster publication, full creative control, higher royalty rates, flexible distribution",
                    color: "from-green-900 to-green-700"
                  },
                  { 
                    title: "Hybrid Publishing", 
                    desc: "Combines professional support with author involvement, growing in popularity among first-time authors",
                    color: "from-amber-900 to-amber-700"
                  },
                ].map((option, i) => (
                  <div key={i} className={`bg-gradient-to-br ${option.color} rounded-xl p-6 text-white`}>
                    <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                    <p className="text-white/80 text-sm">{option.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Understanding these options will help you select the publishing route that best aligns with your goals, budget, and 
                long-term vision as an author. <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">LO Platforms</a> can help you navigate these options and find the right path for your book.
              </p>
            </div>

            {/* Essential Steps Before Publishing */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <CheckCircle className="text-red-900" size={28} />
                Essential Steps Before Publishing Your Book in Ottawa
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Complete Your Manuscript</h3>
                    <p className="text-gray-600 text-sm">Ensure your manuscript is fully written and revised before moving to the next stages.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Invest in Professional Editing</h3>
                    <p className="text-gray-600 text-sm">
                      Professional editing is one of the most critical investments you can make. 
                      <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline ml-1">LO Media Studio</a> offers comprehensive editing services for first-time authors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Design a Professional Book Cover</h3>
                    <p className="text-gray-600 text-sm">Your cover is the first thing readers see. Invest in professional cover design that reflects your genre and message.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-red-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Format Your Book for Print and eBook Distribution</h3>
                    <p className="text-gray-600 text-sm">Proper formatting ensures your book looks professional across all platforms and devices.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Your Book */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MessageCircle className="text-red-900" size={28} />
                Marketing Your Book in Ottawa After Publishing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Build an author platform",
                  "Create a professional website",
                  "Use social media effectively",
                  "Organize a book launch",
                  "Develop an email list",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">Layo Obidike</a> offers expert guidance on author branding and book marketing strategies for new authors.
              </p>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-50 rounded-2xl p-8 mb-10 border-l-4 border-red-900">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Shield className="text-red-900" size={28} />
                Common Mistakes to Avoid
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Publishing too early",
                  "Skipping professional editing",
                  "Ignoring marketing",
                  "Choosing services based only on price",
                  "Having unrealistic expectations",
                ].map((mistake) => (
                  <div key={mistake} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                    <span className="text-gray-700">{mistake}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">iThriveOnWisdom</a> provides wisdom and practical advice to help authors avoid common publishing pitfalls.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa provides an ideal environment for first-time authors by combining a vibrant literary culture, professional 
                publishing support, educational opportunities, and a welcoming community of readers. Whether you choose traditional 
                publishing, self-publishing, or a hybrid model, the city offers the resources and connections needed to turn your 
                manuscript into a professionally published book.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <a href="https://pfschools.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">PF Schools</a> offers educational programs to help you develop your writing skills and understand the publishing industry.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Become a Published Author in Ottawa?</h2>
              <p className="mb-4 text-white/90">
                Whether you're publishing your first book or expanding your portfolio, <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline font-semibold">LO Publications</a> can help you navigate every stage of the publishing process—from professional editing and book design to publishing and marketing support.
              </p>
              <p className="mb-6 text-white/80">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">LO Platforms</a> — Turning Manuscripts into Masterpieces.
              </p>
              <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Get in Touch Today to Start Your Publishing Journey!
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