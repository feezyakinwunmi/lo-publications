'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Building2, Calendar, CalendarIcon, CheckCircle, Eye, Globe, Globe2, MapPin, MessageCircle, Share2, Sparkles, Target, TrendingUp, Users, Laptop, Search, Mail, PenTool, Layout, User, Star, Monitor, Smartphone, Link2, FileText } from 'lucide-react';
import Link from 'next/link';

export default function WebDesignServicesOttawaAuthors() {
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
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=500&fit=crop"
              alt="Web design services for Ottawa authors - building an author website"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Laptop size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Author Branding • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Web Design Services for Ottawa Authors: Build a Polished Online Presence for Your Author Brand
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
              <span className="flex items-center gap-2"><Share2 size={16} /> Web Design & Branding</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Being an author today involves more than writing and publishing a great book. Readers, publishers, event organizers, media contacts, and potential clients increasingly search for authors online before deciding to connect with them or buy their work.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 leading-relaxed">
                An author website gives you a dedicated online space where readers can discover your books, learn about your story, find upcoming events, and get in touch with you. At <strong className="text-red-900">LO Publications</strong>, we understand that every author has a unique story, message, and audience. Our web design services for Ottawa authors help writers create an engaging, user-friendly online presence that supports their books, personal brand, and long-term publishing goals.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Whether you are an aspiring author preparing to launch your debut book or an established writer looking to strengthen your digital presence, we can help you create a website that puts your story and books in front of a global audience.
              </p>
            </div>

            {/* Why Authors Need a Website */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Why Ottawa Authors Need a Website
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
                    "Share articles, news, interviews, and media features",
                    "Provide links for purchasing your books",
                    "Build an email list and connect with readers",
                    "Promote speaking engagements and services",
                    "Improve your visibility in search engines",
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

            {/* Our Web Design Services */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="text-amber-300" size={28} />
                Our Web Design Services for Ottawa Authors
              </h2>
              <p className="text-white/90 mb-6">
                At LO Publications, we create author websites tailored to each author's publishing goals and audience.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Layout, title: "Custom Author Website Design", desc: "Websites tailored to your author identity, genre, audience, and goals with a clean, modern design." },
                  { icon: User, title: "Author Bio and About Page", desc: "A well-written page that lets readers learn about your background, writing journey, and the message behind your books." },
                  { icon: BookOpen, title: "Book Showcase and Book Pages", desc: "Dedicated online spaces for your published and upcoming books with descriptions, purchase options, and reviews." },
                  { icon: CalendarIcon, title: "Book Launch and Event Pages", desc: "Your website as the central destination for event information, dates, locations, and registration details." },
                  { icon: PenTool, title: "Blog and Author Content", desc: "Communicate with your audience beyond your books with writing advice, articles, and behind-the-scenes stories." },
                  { icon: Search, title: "Search Engine Optimization (SEO)", desc: "A website structure built with SEO best practices so potential readers can find you in search results." },
                  { icon: Mail, title: "Newsletter and Email Signup", desc: "Build a direct relationship with your readers through email announcements and exclusive content." },
                  { icon: Globe2, title: "Mobile-Friendly Website Design", desc: "A responsive experience that works smoothly on desktops, tablets, and mobile devices." },
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

            {/* What Should an Author Website Include */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <FileText className="text-red-900" size={28} />
                What Should an Author Website Include?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                An author website may include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  { icon: Globe2, title: "Home", desc: "A strong introduction to your author brand and featured book" },
                  { icon: User, title: "About", desc: "Your author biography and writing journey" },
                  { icon: BookOpen, title: "Books", desc: "Your published and upcoming books" },
                  { icon: FileText, title: "Book Details", desc: "Dedicated pages for individual titles" },
                  { icon: PenTool, title: "Blog", desc: "Articles, updates, and insights" },
                  { icon: CalendarIcon, title: "Events", desc: "Book launches, signings, and speaking engagements" },
                  { icon: MessageCircle, title: "Media", desc: "Interviews, press mentions, podcasts, and features" },
                  { icon: Star, title: "Reviews", desc: "Reader testimonials and book reviews" },
                  { icon: Mail, title: "Newsletter", desc: "Email signup for readers" },
                  { icon: Link2, title: "Contact", desc: "A simple way for visitors to reach you" },
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
                The exact structure depends on your books, audience, and goals.
              </p>
            </div>

            {/* Web Design for Different Authors */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Users className="text-red-900" size={28} />
                Web Design for Different Types of Ottawa Authors
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Not every author needs the same type of website.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Fiction Authors", desc: "Introduce readers to your books, characters, series, writing style, upcoming releases, and literary world." },
                  { title: "Nonfiction Authors", desc: "Showcase your books, expertise, speaking services, workshops, articles, and resources." },
                  { title: "Christian Authors", desc: "Present faith-based books, devotionals, inspirational resources, ministry activities, events, and related content." },
                  { title: "Children's Book Authors", desc: "Create an engaging space for your books, illustrations, characters, educational resources, school visits, and reading activities." },
                  { title: "Coaches, Consultants, and Thought Leaders", desc: "Connect your books with your consulting, coaching, speaking, training, or business activities." },
                ].map((author, i) => (
                  <div key={i} className="border-l-4 border-red-900 bg-gray-50 p-4 rounded-r-xl">
                    <h3 className="font-semibold text-black">{author.title}</h3>
                    <p className="text-gray-600 text-sm">{author.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose LO Publications */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="text-amber-300" size={28} />
                Why Choose LO Publications?
              </h2>
              <p className="text-white/90 mb-4">
                At LO Publications, we understand that publishing is more than putting a manuscript into a book. We help authors move from manuscript to published work, and from published work to a stronger author brand.
              </p>
              <p className="text-white/90 mb-4">
                Our approach combines publishing support, presentation, content, branding, and digital solutions to help authors build a credible presence around their work. We focus on creating a website that is:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                {[
                  "Polished",
                  "User-friendly",
                  "Mobile-responsive",
                  "Search-engine friendly",
                  "Brand-focused",
                  "Easy to navigate",
                  "Designed around your books",
                  "Built for long-term goals",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Website Is Part of Your Author Brand */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Sparkles className="text-red-900" size={28} />
                Your Website Is Part of Your Author Brand
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your book may introduce readers to your ideas, but your website can give them a deeper connection to your work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Think of your website as your <strong>digital author headquarters</strong>. It brings your books, biography, events, articles, media appearances, and professional activities together in one place. Instead of sending readers across several social media platforms to find information about you, you can direct them to a single destination.
              </p>
            </div>

            {/* Build Your Author Website */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Laptop className="text-amber-300" size={28} />
                Build Your Author Website With LO Publications
              </h2>
              <p className="text-white/90 mb-4">
                Whether you are launching your first book or expanding an established writing career, a well-built website can help you present your work with confidence.
              </p>
              <p className="text-white/90 mb-6">
                If you are an author in Ottawa looking for web design services, LO Publications can help you create a website that tells your story, showcases your books, and gives your readers a place to connect with your work.
              </p>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-white italic">
                  "Your story deserves a digital home. Let LO Publications help you build an author website designed around your books, your brand, and your audience."
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <MessageCircle className="text-red-900" size={28} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How much does an author website cost in Ottawa?", a: "The cost depends on factors such as the number of pages, design requirements, functionality, e-commerce or book-purchase integration, content needs, SEO, and ongoing maintenance. LO Publications can develop a website package based on your specific publishing and author-brand needs." },
                  { q: "Do I need a website if I already have social media?", a: "Yes. Social media can help you connect with readers, while a website gives you a central online platform for your author brand. It can bring your books, biography, events, media features, blog content, and contact information together in one place." },
                  { q: "Can I sell my books through my author website?", a: "Yes. Depending on your preferred sales setup, your website can include direct purchasing functionality or links to the platforms where your books are available." },
                  { q: "Can you design a website for a first-time author?", a: "Absolutely. A first-time author can benefit from an online presence from the beginning. We can help structure your website around your first book while leaving room for future publications, events, and content." },
                  { q: "Will my author website work on mobile devices?", a: "Yes. A well-built website is responsive, so visitors can access and navigate it on smartphones, tablets, laptops, and desktop computers." },
                  { q: "Can my website help with SEO?", a: "Yes. Your website can be structured using SEO best practices, including relevant keywords, search-friendly headings, useful content, internal links, mobile responsiveness, and clear page structures." },
                  { q: "Can you update my website after it is launched?", a: "Yes. Updates and maintenance can be arranged depending on your project requirements, including adding new books, updating events, publishing articles, and changing author information." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-black mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-4">Start Building Your Author Brand Today</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your manuscript is only the beginning. A website can help turn your book into a broader author platform, giving readers, media contacts, event organizers, and potential clients a clear way to discover your work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                LO Publications helps authors publish, present, and promote their stories. If you are searching for web design services in Ottawa, let us help you create an online home for your books and your brand.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <p className="text-gray-800 font-semibold">
                  LO Publications
                </p>
                <p className="text-gray-600 italic text-sm mt-1">
                  "Publish Your Book. Build Your Authority. Reach Your Audience."
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white mt-10">
              <h2 className="text-2xl font-bold mb-4">Ready to Build Your Author Website?</h2>
              <p className="mb-6">Contact LO Publications today to discuss your web design project and create an online home for your books.</p>
              <Link href="/contact" className="inline-block bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                Start Your Website Project Today →
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
                <Link href="/articles/author-branding-marketing-ottawa" className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop" 
                      alt="Author branding and book marketing in Ottawa" 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black group-hover:text-red-900 transition">
                      Author Branding & Book Marketing in Ottawa
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">How local authors build visibility and grow their readership through branding and marketing.</p>
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