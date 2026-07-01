// src/app/casestudies/[slug]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  ArrowLeft,
  CheckCircle,
  Award,
  Heart,
  Star,
  TrendingUp,
  Share2,
  Link as LinkIcon,
  ChevronRight,
  Quote
} from "lucide-react";
import Link from "next/link";

// Hardcoded case studies data
const caseStudiesData = [
  {
    id: 1,
    title: "Rhapsody of Love",
    slug: "rhapsody-of-love-layo-obidike",
    author: "Layo Obidike",
    authorProfession: "Entrepreneur, Business Coach, Speaker",
    genre: "Inspirational / Christian Living",
    coverImage: "../rl.jpg",
    excerpt: "A transformational book combining reflections, poetry, guided exercises, and scriptural insights to help readers experience healing, self-love, forgiveness, and authentic relationships.",
    publishedDate: "2025-01-15",
    readTime: 8,
    featured: true,
    challenges: [
      "Getting a suitable book cover design",
      "Structuring content effectively",
      "Meeting publishing standards",
      "Preparing print and digital editions"
    ],
    solutions: [
      "Professional editing and formatting",
      "Custom cover design consultation",
      "ISBN support and digital publishing assistance",
      "Print-ready preparation"
    ],
    results: [
      "Successfully published in digital and print formats",
      "Enhanced author credibility",
      "Created speaking and coaching opportunities",
      "Expanded audience reach"
    ],
    testimonial: "Working with the publishing team made my dream of becoming a published author seamless. Their professionalism, guidance, and attention to detail ensured that Rhapsody of Love was published to a high standard while preserving the heart of my message.",
    authorBio: "Layo Obidike is passionate about personal and spiritual growth, emotional healing, and purposeful living. She is an entrepreneur, business coach, speaker, and author dedicated to helping others transform their lives.",
    publishingGoals: "To publish a book that inspires readers to embrace love, heal from emotional wounds, rediscover their identity, and build meaningful relationships through practical wisdom and biblical principles."
  },
  {
    id: 2,
    title: "The Crown and the Burden",
    slug: "the-crown-and-the-burden-temitope-soewu",
    author: "Temitope Soewu",
    authorProfession: "Lawyer, Writer, Speaker",
    genre: "Memoir / Literary Nonfiction",
    coverImage: "../crown.jpg",
    excerpt: "A reflective memoir that explores identity, family dynamics, birth order, resilience, forgiveness, and healing through the author's experience as a firstborn daughter in a Nigerian polygamous household.",
    publishedDate: "2025-02-20",
    readTime: 12,
    featured: true,
    challenges: [
      "Documenting sensitive family experiences",
      "Balancing personal truth with privacy",
      "Structuring a narrative spanning decades",
      "First-time author navigating publishing"
    ],
    solutions: [
      "Comprehensive manuscript editing (5 stages)",
      "Custom cover design representing the memoir's theme",
      "ISBN and copyright registration",
      "Amazon publication setup"
    ],
    results: [
      "Successfully published memoir",
      "Professional editorial development",
      "Global print distribution via Amazon",
      "Published on author's birthday"
    ],
    testimonial: "The publishing team helped me transform my deeply personal manuscript into a professionally published memoir. Their expertise and sensitivity made all the difference.",
    authorBio: "Temitope Soewu is a lawyer, writer, and speaker with a growing interest in family systems, identity, womanhood, and personal development.",
    publishingGoals: "To explore the lasting influence of family structure, birth order, and inherited expectations on identity, relationships, and emotional well-being through honest storytelling."
  },
  {
    id: 3,
    title: "A Visit to Aunt Ngozi",
    slug: "a-visit-to-aunt-ngozi-omolara-adeola",
    author: "Omolara Adeola",
    authorProfession: "Children's Author, Storyteller, Literacy Advocate",
    genre: "Children's Fiction / Educational",
    coverImage: "../ngozi.jpg",
    excerpt: "A culturally rich children's story that celebrates the beauty of family, community, and everyday learning through a memorable visit to a beloved aunt.",
    publishedDate: "2025-03-10",
    readTime: 6,
    featured: false,
    challenges: [
      "Finding books that reflect Nigerian culture",
      "Teaching values without being instructional",
      "Creating universally relatable stories",
      "Encouraging a love for reading"
    ],
    solutions: [
      "Authentic Nigerian family storytelling",
      "Age-appropriate language and engaging pace",
      "Subtle integration of values and lessons",
      "Culturally resonant illustrations and themes"
    ],
    results: [
      "Valuable educational resource for parents and teachers",
      "Supports literacy and character development",
      "Celebrates Nigerian traditions and identity",
      "Nurtures lifelong love for reading"
    ],
    testimonial: "I wanted to create a book that reminds children that some of life's greatest lessons are found in the simple moments we share with family.",
    authorBio: "Omolara Adeola believes that some of life's greatest lessons are learned through ordinary moments. She is dedicated to creating stories that capture the warmth of Nigerian family life while helping children develop meaningful values.",
    publishingGoals: "To create a story that captures the warmth of Nigerian family life while helping children develop values that extend far beyond the final page."
  },
  {
    id: 4,
    title: "Kingdom Strategies for Purpose-Driven Entrepreneurs",
    slug: "kingdom-strategies-pastor-ireti-sholola",
    author: "Pastor Ireti Sholola",
    authorProfession: "Christian Minister, Leadership Mentor",
    genre: "Christian Entrepreneurship",
    coverImage: "../kingdom.jpg",
    excerpt: "A transformative book bridging faith and entrepreneurship with practical, Scripture-based strategies for leadership, stewardship, integrity, and sustainable business growth.",
    publishedDate: "2025-04-05",
    readTime: 10,
    featured: false,
    challenges: [
      "Transforming years of ministry experience into a book",
      "Maintaining biblical accuracy and readability",
      "Meeting high publishing standards"
    ],
    solutions: [
      "Manuscript editing and proofreading",
      "Professional typesetting and cover design",
      "Quality assurance and publication support"
    ],
    results: [
      "Successfully published and serving as a resource",
      "Encouraging Christian entrepreneurs globally",
      "Creating lasting impact for Kingdom businesses"
    ],
    testimonial: "The publishing process was seamless. They helped me present my message professionally while keeping the heart of my ministry intact.",
    authorBio: "Pastor Ireti Sholola is a Christian minister, leadership mentor, and Kingdom-minded entrepreneur dedicated to equipping business leaders with biblical principles.",
    publishingGoals: "To equip entrepreneurs with biblical principles for building purpose-driven businesses that glorify God while creating lasting impact."
  },
  {
    id: 5,
    title: "Names I've Worn",
    slug: "names-ive-worn-oluwaseun-deborah-adebayo",
    author: "Oluwaseun Deborah Adebayo",
    authorProfession: "Storyteller, Memoir Writer, Creative Artist",
    genre: "Inspirational Memoir / Women's Literature",
    coverImage: "../niw.jpg",
    excerpt: "An inspirational memoir exploring the journey of identity, grief, healing, resilience, and faith through the experiences of Deborah Adebayo and the women whose lives shaped her.",
    publishedDate: "2025-05-12",
    readTime: 14,
    featured: true,
    challenges: [
      "Transforming personal experiences into a broad memoir",
      "Organizing complex narrative across generations",
      "Balancing memoir, history, and faith-based reflection",
      "Maintaining emotional consistency"
    ],
    solutions: [
      "Comprehensive developmental editing",
      "Structural refinement and chapter sequencing",
      "Line editing and copyediting",
      "Professional cover and interior design"
    ],
    results: [
      "Successfully published 141-page memoir",
      "Professionally edited and designed",
      "Published under LO Publications imprint",
      "Complete editorial and design team support"
    ],
    testimonial: "The team helped me transform my manuscript into a professionally published work while preserving my authentic voice and the emotional depth of my story.",
    authorBio: "Oluwaseun Deborah Adebayo is a storyteller, memoir writer, creative artist, and founder of the Crafts and Impressions platform, dedicated to amplifying overlooked voices through storytelling.",
    publishingGoals: "To amplify the voices of women whose stories have been overlooked; inspire healing through storytelling; encourage women to reclaim their identity beyond labels, pain, and societal expectations."
  }
];

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const found = caseStudiesData.find(study => study.slug === slug);
      setCaseStudy(found || null);
      setLoading(false);
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading case study...</p>
        </div>
      </main>
    );
  }

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
            <BookOpen size={32} className="text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-black mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Link
            href="/casestudies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-900 text-white rounded-xl hover:bg-red-800 transition shadow-lg"
          >
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen  bg-gradient-to-b from-gray-50 to-white pt-20 md:pt-10 pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-950 via-red-900 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
          <Link
            href="/casestudies"
            className="inline-flex items-center gap-2 text-red-200 hover:text-white transition mb-6"
          >
            <ArrowLeft size={18} />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={caseStudy.coverImage || "https://via.placeholder.com/800x600?text=Case+Study"}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              {caseStudy.featured && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                  <Star size={14} fill="currentColor" />
                  Featured Case Study
                </div>
              )}
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <BookOpen size={16} />
                <span>Case Study</span>
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                <span>{caseStudy.genre}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-red-200">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {caseStudy.author}
                </span>
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(caseStudy.publishedDate)}
                </span>
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {caseStudy.readTime} min read
                </span>
              </div>

              <p className="text-base md:text-lg text-red-100/90 leading-relaxed">
                {caseStudy.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 space-y-8">
          {/* Author Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className=" md:flex items-start gap-4 p-4 bg-gray-50 rounded-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <User size={32} className="text-red-900" />
            </div>
            <div>
              <h3 className="font-bold text-black text-lg">{caseStudy.author}</h3>
              <p className="text-sm text-gray-600">{caseStudy.authorProfession}</p>
              <p className="text-sm text-gray-500 mt-1">{caseStudy.authorBio}</p>
            </div>
          </motion.div>

          {/* Publishing Goals */}
          {caseStudy.publishingGoals && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="border-l-4 border-red-900 pl-4 py-2"
            >
              <h3 className="text-sm font-semibold text-red-900 uppercase tracking-wider mb-1">Publishing Goals</h3>
              <p className="text-gray-700 leading-relaxed">{caseStudy.publishingGoals}</p>
            </motion.div>
          )}

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {caseStudy.challenges && caseStudy.challenges.length > 0 && (
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  The Challenge
                </h3>
                <ul className="space-y-3">
                  {caseStudy.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-red-900 font-bold mt-0.5">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {caseStudy.solutions && caseStudy.solutions.length > 0 && (
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  The Solution
                </h3>
                <ul className="space-y-3">
                  {caseStudy.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Results */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                <Award size={24} className="text-amber-600" />
                The Results
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {caseStudy.results.map((result: string, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-amber-600" />
                    </div>
                    <span className="text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 relative"
            >
              <Quote size={40} className="text-red-900/20 absolute top-4 right-4" />
              <div className="flex items-start gap-4">
                <Heart size={24} className="text-red-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{caseStudy.testimonial}"
                  </p>
                  <p className="mt-3 font-semibold text-black">
                    — {caseStudy.author}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bottom Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-200"
          >
            <Link
              href="/casestudies"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-red-900 transition"
            >
              <ArrowLeft size={18} />
              All Case Studies
            </Link>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigator.share?.({
                    title: caseStudy.title,
                    text: caseStudy.excerpt,
                    url: window.location.href
                  });
                }}
                className="p-2.5 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-900 transition"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="p-2.5 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-900 transition"
              >
                <LinkIcon size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}