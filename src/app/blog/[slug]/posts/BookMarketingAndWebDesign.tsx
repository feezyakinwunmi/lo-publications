'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Building2, Calendar, CalendarIcon, CheckCircle, Eye, Globe, Globe2, MapPin, MessageCircle, Share2, Sparkles, Target, TrendingUp, Users, Laptop, Search, Mail, PenTool, Layout, User, Star } from 'lucide-react';
import Link from 'next/link';

export default function BookMarketingAndWebDesignOttawa() {
  return (
    <article className="max-w-3xl mx-auto space-y-10">
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
              src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=1200&h=500&fit=crop"
              alt="Book marketing and web design for Ottawa authors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Author Success • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  The Ultimate Guide to Book Marketing & Web Design for Ottawa Authors
                </h1>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-4 border-b flex-wrap">
              <span className="flex items-center gap-2"><Calendar size={16} /> 2024</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> 15 min read</span>
              <span className="flex items-center gap-2"><Globe size={16} /> Ottawa, Canada</span>
              <span className="flex items-center gap-2"><Share2 size={16} /> Branding & Marketing</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Publishing a book is only one part of becoming an author. Once your book is ready, there is another challenge: helping the right readers discover it.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                For Ottawa authors, book marketing can be both exciting and confusing. There are social media platforms, bookstores, libraries, book events, advertising, email newsletters, reviews, podcasts, local media, and countless other promotional possibilities. The challenge isn't finding things you <em>could</em> do but determining <strong className="text-red-900">what you should do, when you should do it, and which activities are most likely to reach your readers.</strong>
              </p>
              <p className="text-gray-600 text-sm mt-3">
                This guide explains the fundamentals of book marketing for Ottawa authors, including when to start, what a marketing strategy can include, how local opportunities fit into the picture, and the crucial role a professional author website plays in your success.
              </p>
            </div>

            {/* What Is Book Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                What Is Book Marketing?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Book marketing is the process of creating awareness of a book and connecting it with potential readers. It can include everything from establishing an author's online presence to arranging book events, generating media attention, building an email list, promoting reviews, and advertising the book.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But book marketing is not simply "telling people that your book exists." Effective marketing answers three questions:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Who is the book for?",
                    "Why would those readers be interested in it?",
                    "Where can those readers be reached?",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-900" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                A mystery novel, for example, may be marketed through completely different channels than a business book, memoir, or children's book. There is no single marketing formula that works for every author.
              </p>
            </div>

            {/* When Should You Start Marketing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MapPin className="text-red-900" size={28} />
                When Should You Start Marketing a Book?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                One of the most common misconceptions about book marketing is that it begins on publication day. Ideally, marketing starts well before the book is released.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A pre-publication marketing process might include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                {[
                  "Identifying your target readers",
                  "Developing your author profile",
                  "Creating or updating your website",
                  "Establishing social media accounts",
                  "Preparing promotional materials",
                  "Connecting with potential reviewers",
                  "Planning a launch event",
                  "Building an email list",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-red-900" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Starting early gives you something extremely valuable: <strong>time</strong>.
              </p>
            </div>

            {/* Start With Your Reader */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                Start With Your Reader, Not Your Marketing Channel
              </h2>
              <p className="text-white/90 mb-4">
                It's easy to begin book marketing by asking: "Should I use Instagram, run Facebook ads, or advertise on Amazon?" Those questions may come later. The first question should be: <strong>Who is most likely to read this book?</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "What interests does your reader have?",
                  "What problems are they trying to solve?",
                  "Where do they spend time online?",
                  "What other books do they read?",
                  "What podcasts or publications do they follow?",
                  "Are they primarily local or international?",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Marketing Opportunities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Users className="text-red-900" size={28} />
                How Ottawa Authors Can Use Local Marketing Opportunities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ottawa offers something valuable to authors: a local community in which readers, bookstores, libraries, organizations, media, and other authors can intersect.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Building2, title: "Local Bookstores", desc: "Author events, signings, readings, and local author displays." },
                  { icon: BookOpen, title: "Libraries", desc: "Author talks, community programming, and local author collections." },
                  { icon: Users, title: "Local Organizations", desc: "Professional associations, schools, historical societies, and more." },
                  { icon: MessageCircle, title: "Community Events", desc: "Literary festivals, workshops, and cultural gatherings." },
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
                Being an Ottawa author does not necessarily mean your book should only be marketed in Ottawa. Instead, Ottawa can be one part of a broader marketing strategy.
              </p>
            </div>

            {/* The Role of an Author Website */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Laptop className="text-red-900" size={28} />
                The Role of an Author Website
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Social media is useful for connecting with readers, but your profiles do not give you complete control over your online presence. A website gives you a central platform that you own and can use to build your author brand.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                An author website can help you:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Establish credibility",
                    "Showcase your published books",
                    "Give readers a central place to learn about you",
                    "Promote book launches and author events",
                    "Share articles, news, and media features",
                    "Provide links for purchasing your books",
                    "Build an email list and connect with readers",
                    "Strengthen your overall author brand",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-red-900" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Your website should do more than look attractive. It should communicate <strong>who you are, what you write, and why readers should connect with your work.</strong>
              </p>
            </div>

            {/* Web Design Services */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Layout className="text-amber-300" size={28} />
                Essential Web Design Services for Ottawa Authors
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Laptop, title: "Custom Author Website Design", desc: "Websites tailored to your author identity, genre, audience, and goals." },
                  { icon: User, title: "Author Bio and About Page", desc: "A well-written page that lets readers learn about your background and writing journey." },
                  { icon: BookOpen, title: "Book Showcase and Book Pages", desc: "Dedicated online spaces for your published and upcoming books." },
                  { icon: CalendarIcon, title: "Book Launch and Event Pages", desc: "Your website as the central destination for event information." },
                  { icon: PenTool, title: "Blog and Author Content", desc: "Communicate with your audience beyond your books with articles and updates." },
                  { icon: Search, title: "Search Engine Optimization (SEO)", desc: "A website structure built with SEO best practices so readers can find you." },
                  { icon: Mail, title: "Newsletter and Email Signup", desc: "Build a direct relationship with your readers." },
                  { icon: Globe2, title: "Mobile-Friendly Website Design", desc: "A smooth experience on desktops, tablets, and mobile devices." },
                ].map((strategy, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-xl">
                    <strategy.icon className="text-amber-300 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-white">{strategy.title}</h3>
                      <p className="text-white/80 text-sm">{strategy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Book Marketing Mistakes */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6">Common Book Marketing Mistakes Authors Make</h2>
              <div className="space-y-4">
                {[
                  { title: "Waiting until publication day", desc: "By the time the book is published, there may be very little time to build awareness." },
                  { title: "Trying to be everywhere", desc: "Choose the channels that make sense for your audience." },
                  { title: "Marketing to everyone", desc: "'This book is for everyone' usually means the marketing message isn't specific enough." },
                  { title: "Talking only about the book", desc: "Readers are interested in the ideas, stories, and experiences surrounding the book." },
                  { title: "Spending money without measuring results", desc: "Marketing should be evaluated. Ask: What did we spend? Who did we reach? Did sales increase?" },
                  { title: "Expecting one promotion to change everything", desc: "Book marketing is usually cumulative. Repeated exposure can matter." },
                ].map((mistake, i) => (
                  <div key={i} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                    <h3 className="font-semibold text-black">{mistake.title}</h3>
                    <p className="text-gray-600 text-sm">{mistake.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* When to Consider Professional Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Star className="text-red-900" size={28} />
                When Should You Consider Professional Services?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Many authors successfully handle at least some of their own marketing. However, the challenge is usually <strong>time and expertise</strong>. Professional support can be useful when you don't know where to begin, don't have time to manage the campaign yourself, or want to reach audiences beyond your existing network.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A book marketing service may help with areas such as:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                {[
                  "Marketing Strategy",
                  "Audience Research",
                  "Author Positioning",
                  "Launch Planning",
                  "Social Media",
                  "Content Creation",
                  "Publicity",
                  "Media Outreach",
                  "Bookstore Outreach",
                  "Event Coordination",
                  "Email Marketing",
                  "Advertising",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1 text-sm">
                    <CheckCircle size={12} className="text-red-900" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                A good marketing plan should be <strong>proportionate to the book, audience, goals, and budget</strong>.
              </p>
            </div>

            {/* Simple Framework */}
            <div className="bg-amber-50 rounded-xl p-6 text-center mb-10">
              <h3 className="text-xl font-bold text-black mb-4">A Simple Book Marketing Framework for Ottawa Authors</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  "Who is my reader?",
                  "Why would they want this book?",
                  "Where can I reach them?",
                  "What can I consistently do?",
                  "What will success look like?",
                ].map((item, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="block text-red-900 font-bold text-lg mb-1">{i + 1}</span>
                    <p className="text-gray-700 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Final Thoughts for Ottawa Authors</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Book marketing is about <strong>finding the people who are most likely to care about your book and giving them opportunities to discover it.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Ottawa authors, that can involve a combination of local relationships and broader digital marketing: bookstores, libraries, community organizations, events, media, social platforms, websites, newsletters, reviews, and online retailers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You don't have to use every channel, become a social media expert, or spend a large amount of money. Start with your readers. Understand what makes your book relevant to them. Choose the channels that make sense. Give yourself enough time. Measure what you can. Then adjust your approach as you learn.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <p className="text-gray-800 italic">
                  "The earlier you think about your readers, the easier it becomes to build a publishing and marketing strategy around them."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Author Brand?</h2>
              <p className="mb-6">Get expert guidance on book marketing and web design tailored for Ottawa authors.</p>
              <Link href="/contact" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Start Building Your Brand Today →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-black text-center mb-6">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/articles/first-time-author-publishing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop" 
                      alt="First-time author publishing in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      First-Time Author Publishing in Ottawa: Everything You Need to Know
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">A comprehensive guide for aspiring authors navigating the publishing journey in Ottawa.</p>
                  </div>
                </Link>
                <Link href="/articles/professional-book-publishing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop" 
                      alt="Professional book publishing services in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Professional Book Publishing Services for Authors in Ottawa
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">Learn how professional publishing services can elevate your manuscript into a market-ready book.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
    </article>
  );
}