// src/app/articles/editing-vs-proofreading-ottawa/page.tsx
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
  Sparkles,
  Users,
  Award,
  Eye,
  PenTool,
  Rocket,
  Shield,
  Search,
  FileText,
  Edit,
  SpellCheck,
  ArrowRight,
  GitBranch,
  BookMarked,
  TrendingUp,
  Star,
  Clock,
  DollarSign,
  Zap,
  Scale,
  AlignLeft,
  Type,
  Highlighter,
  Eraser,
  FileCheck,
  Layers,
  Merge,
  Split,
  Pencil,
  Scissors,
  CheckSquare,
  AlertCircle,
  Info,
  Lightbulb,
  ArrowRightCircle,
  LayoutTemplate,
  BookText,
  ListChecks,
  PenLine,
  FilePen,
  ScanEye,
  Signature,
} from "lucide-react";

export default function EditingVsProofreadingArticle() {
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
              src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1200&h=500&fit=crop"
              alt="Editing vs proofreading - Ottawa author reviewing manuscript"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <PenTool size={16} className="text-blue-300" />
                  <span className="text-blue-300 text-sm">
                    Ottawa Author Guide • Editing & Proofreading
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Editing vs. Proofreading: What Ottawa Authors Need to Know
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
                <PenTool size={16} /> Editing
              </span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you are preparing a manuscript for publication in Ottawa,
              understanding the difference between editing and proofreading can
              save time, money, and help you publish a professional-quality
              book. While these services are often confused, they serve
              different purposes and are both valuable at different stages of
              the publishing process.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10 border-l-4 border-blue-500">
              <div className="flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Quick distinction:</span>{" "}
                  Editing improves the <span className="font-medium">content</span> and{" "}
                  <span className="font-medium">structure</span> of your
                  manuscript. Proofreading corrects the{" "}
                  <span className="font-medium">surface-level errors</span> in a
                  finished manuscript. Both are essential for a polished book.
                </p>
              </div>
            </div>

            {/* What Is Editing? */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Edit className="text-red-900" size={28} />
                What Is Editing?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Editing improves the overall quality of your manuscript. It
                focuses on clarity, structure, flow, grammar, consistency,
                style, and readability.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your needs, editing may include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: GitBranch,
                    title: "Developmental Editing",
                    desc: "Big-picture structure, plot, character development, and overall flow",
                  },
                  {
                    icon: AlignLeft,
                    title: "Line Editing",
                    desc: "Sentence-level clarity, tone, and writing style",
                  },
                  {
                    icon: Layers,
                    title: "Copy Editing",
                    desc: "Grammar, consistency, and technical accuracy",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <item.icon className="text-red-900 mb-2" size={32} />
                    <h3 className="font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                A professional editor helps strengthen your ideas while
                preserving your unique voice.
              </p>
            </div>

            {/* What Is Proofreading? */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <SpellCheck className="text-red-900" size={28} />
                What Is Proofreading?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Proofreading is the final quality check before publication. It
                identifies:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: Type, label: "Spelling mistakes" },
                  { icon: Highlighter, label: "Punctuation errors" },
                  { icon: LayoutTemplate, label: "Formatting inconsistencies" },
                  { icon: Eraser, label: "Missing words" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl"
                  >
                    <item.icon size={16} className="text-red-900" />
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 rounded-xl p-4 mt-4 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Important:</span> Proofreading
                    should be performed <span className="font-medium">only after</span>{" "}
                    the manuscript has been fully edited and formatted.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Differences - Comparison Table */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Scale className="text-red-900" size={28} />
                Key Differences
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 text-sm font-semibold text-gray-700 border-b w-1/4">
                        Aspect
                      </th>
                      <th className="text-left p-3 text-sm font-semibold text-red-900 border-b w-1/3">
                        Editing
                      </th>
                      <th className="text-left p-3 text-sm font-semibold text-blue-700 border-b w-1/3">
                        Proofreading
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        aspect: "Focus",
                        editing: "Improves content and readability",
                        proofreading: "Corrects surface-level errors",
                      },
                      {
                        aspect: "When",
                        editing: "Early to middle stages of writing",
                        proofreading: "Final stage, after formatting",
                      },
                      {
                        aspect: "Scope",
                        editing: "Substantial improvements",
                        proofreading: "Minor corrections",
                      },
                      {
                        aspect: "Time Required",
                        editing: "More time (content changes)",
                        proofreading: "Faster (polishing only)",
                      },
                      {
                        aspect: "Result",
                        editing: "Stronger, clearer manuscript",
                        proofreading: "Error-free, polished final version",
                      },
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-3 text-sm font-medium text-gray-700 border-b">
                          {row.aspect}
                        </td>
                        <td className="p-3 text-sm text-gray-600 border-b">
                          {row.editing}
                        </td>
                        <td className="p-3 text-sm text-gray-600 border-b">
                          {row.proofreading}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Ottawa Authors Need Both */}
            <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 mb-10 border border-red-100">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <BookMarked className="text-red-900" size={28} />
                Why Ottawa Authors Need Both
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you are self-publishing or pursuing traditional
                publishing, readers expect a polished book.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Edit size={18} className="text-red-900" />
                    <h3 className="font-semibold text-black">Editing</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Ensures your message is clear and engaging
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <SpellCheck size={18} className="text-blue-700" />
                    <h3 className="font-semibold text-black">Proofreading</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Gives your manuscript a professional finish
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={18} className="text-amber-500" />
                  <h3 className="font-semibold text-black">Combined Impact</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Investing in both services improves credibility, reader
                  satisfaction, and review quality.
                </p>
              </div>
            </div>

            {/* SEO Benefits */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Search className="text-red-900" size={28} />
                SEO Benefits for Author Websites
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you promote your book online, quality editing also benefits
                search engine optimization (SEO). Well-written, original content
                keeps readers engaged, reduces bounce rates, and increases the
                likelihood of ranking for keywords such as:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "book editing services in Ottawa",
                  "Ottawa proofreader",
                  "professional manuscript editing",
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm border border-blue-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Quality editing and proofreading also help your website content
                perform better in search results.
              </p>
            </div>

            {/* Choosing the Right Service */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Choosing the Right Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Edit size={20} className="text-red-900" />
                    <h3 className="font-semibold text-black">Choose Editing First</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    If your manuscript is still being revised or needs
                    substantial improvement.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <SpellCheck size={20} className="text-blue-700" />
                    <h3 className="font-semibold text-black">Choose Proofreading Next</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    If your book has already been edited and formatted for print
                    or ebook.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl mt-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle size={18} className="text-green-600" />
                  <h3 className="font-semibold text-black">Best Practice</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Many authors benefit from using{" "}
                  <span className="font-medium">both services</span> before
                  publication.
                </p>
              </div>
            </div>

            {/* The Process Flow */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ArrowRightCircle className="text-amber-300" size={28} />
                The Publishing Timeline
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {[
                  { step: "1", label: "Write", icon: PenLine, color: "text-amber-300" },
                  { step: "2", label: "Edit", icon: Edit, color: "text-red-400" },
                  { step: "3", label: "Format", icon: LayoutTemplate, color: "text-blue-400" },
                  { step: "4", label: "Proofread", icon: SpellCheck, color: "text-green-400" },
                  { step: "5", label: "Publish", icon: Rocket, color: "text-purple-400" },
                ].map((item, index) => (
                  <div key={item.step} className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/30">
                        <span className="font-bold text-lg">{item.step}</span>
                      </div>
                      <item.icon className={`${item.color} mt-2`} size={20} />
                      <span className="text-sm text-white/80 mt-1">{item.label}</span>
                    </div>
                    {index < 4 && (
                      <ArrowRight className="text-white/30 hidden md:block" size={20} />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm text-center mt-6">
                Editing and proofreading happen at different stages — both are
                essential for a professional book.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Award className="text-red-900" size={28} />
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Editing and proofreading are complementary, not interchangeable.
                By understanding when each service is needed, Ottawa authors can
                publish books that are accurate, engaging, and ready to impress
                readers.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-700 leading-relaxed">
                    A professionally refined manuscript gives your work the best
                    chance of success in a competitive publishing market.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <FilePen className="text-amber-300" size={28} />
                Ready to Refine Your Manuscript?
              </h2>
              <p className="mb-6">
                Let LO Publications connect you with professional editing and
                proofreading services in Ottawa.
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
                  href="/articles/ottawa-author-brand-website"
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
                      alt="Ottawa author brand and website"
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
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}