// src/app/articles/corporate-heritage-publishing-ottawa/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  CheckCircle, 
  BookOpen, 
  Calendar, 
  Globe,
  Building2,
  Users,
  Landmark,
  Camera,
  Printer,
  Laptop,
  Award,
  Heart,
  Clock,
  Shield,
  Target,
  MapPin,
  MessageCircle,
  Rocket,
  Sparkles
} from "lucide-react";

export default function CorporateHeritagePublishingArticle() {
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
              src="https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=1200&h=500&fit=crop"
              alt="Corporate and heritage publishing - Ottawa archives and historical documents"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Landmark size={16} className="text-amber-300" />
                  <span className="text-amber-300 text-sm">Preserving Legacies • Ottawa, Canada</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
                  Corporate and Heritage Publishing in Ottawa, Canada
                </h1>
                <p className="text-white/80 mt-2 text-lg">Preserving Stories, Building Legacies Through Professional Publishing</p>
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
              <span className="flex items-center gap-2"><Building2 size={16} /> Corporate & Heritage</span>
            </div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ottawa is home to countless organisations, families, institutions, and communities with stories that deserve to be 
              preserved and shared for future generations. Corporate and heritage publishing helps transform these stories into 
              professionally published works.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-10">
              <p className="text-gray-700 italic">
                Ottawa is a city rich in history, culture, innovation, and institutional excellence. From government organisations 
                and corporations to community groups, churches, families, and historical societies, there is a growing need to 
                preserve important stories and communicate them professionally.
              </p>
              <p className="text-gray-600 text-sm mt-3">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Platforms
                </a> offers comprehensive publishing consultation to help organisations preserve their legacy through professional publishing.
              </p>
            </div>

            {/* What Is Corporate Publishing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Building2 className="text-red-900" size={28} />
                What Is Corporate Publishing?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Corporate publishing involves creating professional publications that represent an organisation's brand, achievements, 
                culture, and vision. These publications are often used for communication, marketing, stakeholder engagement, and 
                historical documentation.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-3">Examples of corporate publishing include:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "Company anniversary books",
                    "Corporate history publications",
                    "Annual reports",
                    "Employee handbooks",
                    "Training manuals",
                    "Executive biographies",
                    "Corporate magazines",
                    "Brand story books",
                    "Organisational profiles",
                    "Strategic reports",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-red-900" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media House
                </a> specializes in corporate publishing projects that strengthen brand identity and preserve institutional knowledge.
              </p>
            </div>

            {/* What Is Heritage Publishing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Heart className="text-red-900" size={28} />
                What Is Heritage Publishing?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Heritage publishing focuses on preserving history, culture, family stories, and community narratives. It ensures that 
                valuable memories and historical records are documented in a professionally produced format.
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-black mb-3">Heritage publishing projects may include:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "Family history books",
                    "Community heritage publications",
                    "Church history books",
                    "Cultural preservation projects",
                    "Memoirs and autobiographies",
                    "Historical archives",
                    "Indigenous storytelling projects",
                    "Local history publications",
                    "Legacy books",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-red-900" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  iThriveOnWisdom
                </a> provides wisdom and guidance on preserving cultural heritage and family legacies through professional publishing.
              </p>
            </div>

            {/* Why It Matters */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                <Shield className="text-red-900" size={28} />
                Why Corporate and Heritage Publishing Matters
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every organisation and community has a story worth preserving. Without proper documentation, valuable knowledge, 
                experiences, and achievements can be lost over time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Clock, title: "Preserve Institutional Knowledge", desc: "Create permanent records for future generations" },
                  { icon: Award, title: "Strengthen Brand Identity", desc: "Communicate mission, values, and impact professionally" },
                  { icon: Calendar, title: "Celebrate Milestones", desc: "Recognise achievements and reinforce pride" },
                  { icon: Shield, title: "Protect Cultural Heritage", desc: "Safeguard traditions and family histories" },
                  { icon: Users, title: "Inspire Future Generations", desc: "Provide valuable lessons and inspiration" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition">
                    <item.icon className="text-red-900 mx-auto mb-2" size={24} />
                    <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://layoobidike.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  Layo Obidike
                </a> offers expert guidance on building lasting brand legacies through professional publishing.
              </p>
            </div>

            {/* Professional Services */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-6 text-center flex items-center justify-center gap-2">
                <Sparkles className="text-red-900" size={28} />
                Professional Publishing Services in Ottawa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: "Research & Content Development", desc: "Interviews, archival research, historical documents" },
                  { icon: CheckCircle, title: "Editing & Proofreading", desc: "Clarity, consistency, accuracy, readability" },
                  { icon: Laptop, title: "Book Design & Layout", desc: "Professional design enhances reading experience" },
                  { icon: Camera, title: "Photography & Image Restoration", desc: "Restore historical photographs and archives" },
                  { icon: Printer, title: "Printing & Production", desc: "High-quality printing options" },
                  { icon: Globe, title: "Digital Publishing", desc: "eBooks, interactive PDFs, online archives" },
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
              <p className="text-gray-600 text-sm mt-4 text-center">
                <a href="https://lomediastudio.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Media Studio
                </a> provides professional editing, design, and production services for corporate and heritage publishing projects.
              </p>
            </div>

            {/* Corporate Anniversary Books */}
            <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-amber-300" size={28} />
                Corporate Anniversary Books
              </h2>
              <p className="text-white/90 mb-4">
                One of the most popular corporate publishing projects in Ottawa is the anniversary book. These publications celebrate 
                key milestones such as 10, 25, 50, or even 100 years of organisational history.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                {[
                  "Founding stories",
                  "Historical timelines",
                  "Leadership profiles",
                  "Employee testimonials",
                  "Major achievements",
                  "Community impact",
                  "Photographic archives",
                  "Future vision",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-4">
                <a href="https://lomediahouse.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  LO Publications
                </a> specializes in creating stunning corporate anniversary books that celebrate organizational milestones.
              </p>
            </div>

            {/* Heritage Books for Families */}
            <div className="bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 mb-10 text-white">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="text-amber-300" size={28} />
                Heritage Books for Families and Communities
              </h2>
              <p className="text-white/90 mb-4">
                Many families and community organisations in Ottawa are recognising the importance of preserving their stories 
                through professionally published books.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Family trees",
                  "Personal memoirs",
                  "Historical photographs",
                  "Immigration stories",
                  "Faith journeys",
                  "Community contributions",
                  "Generational wisdom",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1 text-sm">
                    <CheckCircle size={12} className="text-amber-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-4">
                <a href="https://pfschools.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                  PF Schools
                </a> offers educational resources for families and communities interested in preserving their heritage.
              </p>
            </div>

            {/* Choosing the Right Partner */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <Target className="text-red-900" size={28} />
                Choosing the Right Publishing Partner
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Historical project experience",
                  "Writing & editing expertise",
                  "Design & production quality",
                  "Research capabilities",
                  "Project management",
                  "Print & digital options",
                  "Client testimonials",
                  "Portfolio examples",
                ].map((factor) => (
                  <div key={factor} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded-lg">
                    <CheckCircle size={12} className="text-green-600" />
                    <span className="text-gray-600">{factor}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  LO Platforms
                </a> provides expert guidance to help you choose the right publishing approach for your corporate or heritage project.
              </p>
            </div>

            {/* Testimonials / Trust Section */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                <MessageCircle className="text-red-900" size={28} />
                Why Organisations Trust Our Publishing Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Decades of Combined Experience", desc: "Expertise in corporate and heritage publishing" },
                  { title: "Professional Quality Standards", desc: "Rigorous editing, design, and production processes" },
                  { title: "Preservation-Focused Approach", desc: "Ensuring stories are preserved for future generations" },
                  { title: "Client-Centered Collaboration", desc: "Working closely with organisations and families" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-4">
                <a href="https://ithriveonwisdom.com" target="_blank" rel="noopener noreferrer" className="text-red-900 hover:underline">
                  iThriveOnWisdom
                </a> provides wisdom and guidance for organisations seeking to preserve their legacy through professional publishing.
              </p>
            </div>

            {/* Final CTA */}
            <div className="border-t border-gray-200 pt-8 text-center">
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center justify-center gap-2">
                <MapPin className="text-red-900" size={28} />
                Preserve Your Story for Future Generations
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you are documenting a company's journey, preserving a family's legacy, celebrating a community's history, 
                or commemorating an organisational milestone, professional corporate and heritage publishing provides a lasting way 
                to preserve and share your story.
              </p>
              <div className="bg-gradient-to-r from-red-900 to-amber-800 rounded-2xl p-8 text-center text-white">
                <p className="text-lg mb-4">
                  In Ottawa, where history, culture, and innovation intersect, professionally published works serve as powerful tools 
                  for preserving the past, celebrating the present, and inspiring the future.
                </p>
                <p className="mb-6 text-white/80">
                  <a href="https://loplatforms.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                    LO Platforms
                  </a> — Turning Manuscripts into Masterpieces.
                </p>
                <button className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
                  Start Your Publishing Project Today →
                </button>
              </div>
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
                Discover more resources and services to support your corporate and heritage publishing journey.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}