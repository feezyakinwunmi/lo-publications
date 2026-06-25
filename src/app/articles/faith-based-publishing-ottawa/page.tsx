// src/app/articles/faith-based-publishing-ottawa/page.tsx
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
  Heart,
  Church,
  Sparkles,
  PenTool,
  Share2,
  MessageCircle,
  MapPin,
  TrendingUp,
  Rocket,
  Award,
  Shield
} from "lucide-react";

export default function FaithBasedPublishingArticle() {
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
src="https://images.unsplash.com/photo-1438032005730-c779502df39b"
              alt="Faith-based publishing in Ottawa - church and community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Church size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Faith-Based Author Guide • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Faith-Based Publishing in Ottawa: Choosing the Right Path for Your Book
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
              <span className="flex items-center gap-2"><Heart size={16} /> Faith-Based</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For many faith-based authors in Ottawa, finishing a manuscript is only the beginning of the publishing journey.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                The next challenge is often harder: deciding how to publish a religious book, who to work with, and how to reach 
                readers in Ottawa, across Ontario, and throughout Canada.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                <Link href="/articles/first-time-author-publishing-ottawa" className="text-red-900 hover:underline font-semibold">
                  First-time authors in Ottawa
                </Link> often face unique challenges when navigating faith-based publishing options.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Faith-based publishing in Canada follows a different path from many mainstream publishing categories. The number of 
              dedicated faith-based publishers is relatively small, faith communities often play an important role in book discovery, 
              and authors frequently balance ministry goals with publishing goals.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              For writers in Ottawa, these decisions become even more nuanced. Beyond choosing between traditional publishing, 
              hybrid publishing, or self-publishing, authors must also consider their audience, local faith communities, community 
              connections, and long-term vision for their work.
            </p>

            {/* Understanding Your Publishing Options */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Understanding Your Publishing Options
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most faith-based authors in Ottawa and across Canada eventually find themselves considering one of three routes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { 
                    title: "Traditional Faith-Based Publishing", 
                    desc: "Strongest institutional support and established distribution channels, but high competition and low acceptance rates",
                    color: "from-blue-900 to-blue-700"
                  },
                  { 
                    title: "Hybrid or Assisted Publishing", 
                    desc: "Professional services while retaining greater control, though author typically invests financially",
                    color: "from-amber-900 to-amber-700"
                  },
                  { 
                    title: "Independent Self-Publishing", 
                    desc: "Highest level of independence and ownership, but responsible for assembling your own team",
                    color: "from-green-900 to-green-700"
                  },
                ].map((option, i) => (
                  <div key={i} className={`bg-gradient-to-br ${option.color} rounded-xl p-6 text-white`}>
                    <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                    <p className="text-white/80 text-sm">{option.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                The right choice depends less on the publishing model itself and more on what the author hopes to achieve. For many 
                Ottawa authors, the decision also depends on whether they want to reach local faith communities, readers across Ontario, 
                or a broader national audience.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                <Link href="/articles/self-publishing-consultation-ottawa" className="text-red-900 hover:underline">
                  Self-publishing consultation
                </Link> can help faith-based authors understand their options and choose the right path.
              </p>
            </div>

            {/* How to Choose the Right Path */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Sparkles className="text-red-900" size={28} />
                How to Choose the Right Publishing Path
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many first-time authors begin by asking which publishing route is best. A better question is: 
                <span className="italic font-semibold"> What is this book meant to accomplish?</span>
              </p>

              {/* Goal */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                  <Heart className="text-red-900" size={20} />
                  Is Your Goal Ministry, Reach, or Both?
                </h3>
                <p className="text-gray-700">
                  Some books are written primarily to support ministry work, discipleship, spiritual formation, or church leadership. 
                  Others are intended to reach broader audiences through bookstores, online retailers, speaking engagements, podcasts, 
                  conferences, or media opportunities. Neither goal is better than the other, but clarity matters.
                </p>
              </div>

              {/* Creative Control */}
              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                  <PenTool className="text-red-900" size={20} />
                  How Much Creative Control Do You Want?
                </h3>
                <p className="text-gray-700">
                  Publishing models differ significantly in terms of decision-making. Some authors want guidance on editing, design, 
                  and positioning. Others prefer to maintain full control over every aspect of the publishing process.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  <Link href="/articles/self-publishing-services-ottawa" className="text-red-900 hover:underline">
                    Self-publishing services
                  </Link> offer the highest level of creative control for faith-based authors.
                </p>
              </div>

              {/* Audience */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-black mb-2 flex items-center gap-2">
                  <Users className="text-red-900" size={20} />
                  Who Is Your Reader?
                </h3>
                <p className="text-gray-700 mb-3">
                  Faith-based publishing covers a wide range of genres and audiences, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Devotionals",
                    "Spiritual living",
                    "Memoirs",
                    "Bible studies",
                    "Theology",
                    "Faith-based fiction",
                    "Leadership resources",
                    "Ministry resources",
                  ].map((genre) => (
                    <span key={genre} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  <Link href="/articles/author-branding-book-marketing-ottawa" className="text-red-900 hover:underline">
                    Author branding and book marketing
                  </Link> strategies can help you reach your target faith-based audience.
                </p>
              </div>
            </div>

            {/* What Faith-Based Publishers Look For */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Church className="text-red-900" size={28} />
                What Faith-Based Publishers Look For
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most common misconceptions among new authors is that completing a manuscript means it is ready for publication. 
                In reality, most faith-based publishers evaluate far more than the writing itself.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Clarity of message",
                  "Audience definition",
                  "Theological alignment",
                  "Originality of perspective",
                  "Market relevance",
                  "Author platform",
                  "Manuscript quality",
                ].map((factor) => (
                  <div key={factor} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={14} className="text-red-900" />
                    <span className="text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                A well-written manuscript with a clearly defined audience will almost always receive stronger consideration than a 
                manuscript trying to appeal to everyone.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                <Link href="/articles/professional-book-publishing-ottawa" className="text-red-900 hover:underline">
                  Professional book publishing services
                </Link> can help faith-based authors prepare manuscripts that meet publisher standards.
              </p>
            </div>

            {/* How Faith-Based Books Reach Readers */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MessageCircle className="text-red-900" size={28} />
                How Faith-Based Books Reach Readers in Ottawa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One area that is often overlooked in publishing discussions is how faith-based books actually reach readers. Unlike many 
                mainstream genres, discovery frequently happens through community networks rather than traditional advertising.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Local church communities",
                  "Ministry organizations",
                  "Faith-based conferences",
                  "Bible study groups",
                  "Speaking engagements",
                  "Faith-based events",
                  "Faith-based schools",
                  "Personal recommendations",
                ].map((channel) => (
                  <div key={channel} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg">
                    <CheckCircle size={12} className="text-green-600" />
                    <span className="text-gray-700">{channel}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <Link href="/articles/corporate-heritage-publishing-ottawa" className="text-red-900 hover:underline">
                  Corporate and heritage publishing
                </Link> can also help faith-based organizations preserve their history and reach wider audiences.
              </p>
            </div>

            {/* Ottawa's Faith Communities */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-amber-300" size={28} />
                Ottawa's Diverse Faith Community
              </h2>
              <p className="text-white/90 mb-4">
                Ottawa's diverse faith community creates unique opportunities for authors to connect directly with readers. Churches 
                throughout neighborhoods such as Kanata, Orleans, Barrhaven, Nepean, Gloucester, and downtown Ottawa often serve as 
                important hubs for community engagement and book discovery.
              </p>
              <p className="text-white/90">
                This creates opportunities that many authors underestimate. A trusted recommendation from a church leader, ministry 
                partner, or fellow believer can carry more influence than a paid advertisement.
              </p>
              <p className="text-white/70 text-sm mt-4">
                <Link href="/articles/author-support-services-ottawa" className="text-amber-300 hover:underline">
                  Author support services
                </Link> can help faith-based authors connect with Ottawa's diverse church and ministry communities.
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Shield className="text-red-900" size={28} />
                Challenges Facing Faith-Based Authors in Ottawa
              </h2>
              
              <div className="space-y-4">
                {[
                  { 
                    title: "Finding the Right Audience", 
                    desc: "Faith-based readers are not a single group. Different denominations, traditions, and ministries often engage with different types of content."
                  },
                  { 
                    title: "Balancing Ministry and Marketing", 
                    desc: "Many faith-based authors feel uncomfortable promoting their work. However, visibility and service are not necessarily opposing goals."
                  },
                  { 
                    title: "Building Visibility Beyond Existing Networks", 
                    desc: "The challenge comes when trying to reach readers beyond immediate church circles. Strategic positioning and long-term audience building become important."
                  },
                  { 
                    title: "Navigating Ottawa's Bilingual Environment", 
                    desc: "With both English-speaking and French-speaking communities, some authors may find opportunities to reach broader audiences through bilingual content or translation."
                  },
                ].map((challenge, i) => (
                  <div key={i} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                    <h3 className="font-semibold text-black">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm">{challenge.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <Link href="/articles/bilingual-publishing-ottawa" className="text-red-900 hover:underline">
                  Bilingual publishing
                </Link> can help faith-based authors reach both English and French-speaking audiences in Ottawa.
              </p>
            </div>

            {/* Before You Submit */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <BookOpen className="text-red-900" size={28} />
                Before You Submit or Self-Publish
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Regardless of the publishing route you choose, preparation matters. Authors often spend months or years writing a 
                manuscript but relatively little time preparing it for publication.
              </p>
              <div className="space-y-4">
                {[
                  { icon: PenTool, title: "Professional Editing", desc: "Strengthen clarity, structure, and readability while ensuring the manuscript communicates effectively." },
                  { icon: Target, title: "Audience Positioning", desc: "Can you clearly explain who the book is for and why they need it? Further refinement may be necessary." },
                  { icon: Sparkles, title: "Visual Presentation", desc: "Cover design and formatting influence first impressions significantly. A professionally presented book can help compete effectively." },
                  { icon: Share2, title: "Marketing Preparation", desc: "Audience-building often begins long before a book is released. A website, email list, speaking opportunities, and church partnerships all contribute." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                    <item.icon className="text-red-900 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-black">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <Link href="/articles/author-support-services-ottawa" className="text-red-900 hover:underline">
                  Author support services
                </Link> can help you prepare your manuscript for publication, regardless of your chosen path.
              </p>
            </div>

            {/* Growing Opportunity */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-amber-300" size={28} />
                A Growing Opportunity for Faith-Based Authors in Ottawa
              </h2>
              <p className="text-white/90 mb-4">
                The Canadian faith-based publishing landscape continues to evolve. While traditional publishing remains an important 
                pathway, authors today have more options than ever before.
              </p>
              <p className="text-white/90">
                As Ottawa continues to grow as a centre for faith communities, education, ministry, and cultural diversity, opportunities 
                for faith-based authors and publishers are expanding as well.
              </p>
              <p className="text-white/70 text-sm mt-4">
                <Link href="/articles/self-publishing-services-ottawa" className="text-amber-300 hover:underline">
                  Self-publishing services
                </Link> offer faith-based authors more control and flexibility than ever before.
              </p>
            </div>

            {/* Conclusion */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Publishing is ultimately about more than producing a book. It's about creating something that reaches the people it was 
                written for, and making a meaningful impact within Ottawa, Ontario, and beyond.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Rocket className="text-amber-300" size={28} />
                Ready to Publish Your Faith-Based Book?
              </h2>
              <p className="mb-6">Get professional faith-based publishing services tailored for Ottawa authors.</p>
              <Link href="/articles/self-publishing-services-ottawa" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Start Your Publishing Journey Today →
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
                <Link href="/articles/bilingual-publishing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop" 
                      alt="Bilingual publishing in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Bilingual Publishing in Ottawa (English & French)
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">Publishing in both official languages for wider reach and credibility.</p>
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