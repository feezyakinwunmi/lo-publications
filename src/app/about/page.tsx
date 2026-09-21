"use client";

import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Users,
  Sparkles,
  PenTool,
  ArrowRight,
  Quote,
  Feather,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white mt-20 md:mt-0">

      {/* ============ HERO ============ */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Open book with soft light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-8"
          >
            <Feather size={14} />
            About LO Publications
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            Creating Stories That{" "}
            <span className="text-red-400">Illuminate the Soul</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            At LO Publications, we believe in the power of words to inspire,
            uplift, and transform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block px-8 md:px-10 py-4 md:py-5 bg-red-900/90 backdrop-blur-md text-white text-lg md:text-xl font-serif italic rounded-2xl shadow-2xl border border-white/20"
          >
            To publish truth with love and purpose.
          </motion.div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-900 mb-4">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6 tracking-tight">
              We Don&apos;t Just Publish Books
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We amplify voices that carry healing, hope, and spiritual depth.
              Every project we take on is a partnership — a shared commitment to
              telling stories that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Heart,
                title: "Faith-Inspired Purpose",
                desc: "Every project is covered in prayer and guided by purpose. We only publish stories that align with truth, love, and God's calling.",
              },
              {
                icon: Sparkles,
                title: "Excellence with Integrity",
                desc: "From first draft to final print, we uphold the highest editorial standards — delivering work that is clear, powerful, and purpose-filled.",
              },
              {
                icon: Users,
                title: "Author-First Partnership",
                desc: "We walk closely with every author — whether you're writing your first book or your tenth, we treat your message with reverence and care.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                    <Icon className="w-6 h-6 text-red-900" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE PUBLISH ============ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-900 mb-4">
              Our Catalogue
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 tracking-tight">
              What We Publish
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Books that are spiritually grounded, emotionally honest, and
              written with deep purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Devotionals & Christian Living",
                desc: "Daily guides, Bible studies, and books that draw readers closer to God.",
              },
              {
                img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
                title: "Inspirational Memoirs & Testimonies",
                desc: "Real-life stories of faith, redemption, healing, and God's faithfulness.",
              },
              {
                img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Purpose-Driven Non-fiction & Poetry",
                desc: "Reflective essays, poetry, and books that stir the heart and soul.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2.5 leading-snug group-hover:text-red-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY AUTHORS CHOOSE US ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-900 mb-4">
              Why Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 tracking-tight">
              Why Authors Choose LO Publications
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Plenty of publishers exist. Few walk with you like we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Heart,
                title: "We Honour Your Calling",
                desc: "Your message is sacred. We pray over every project and treat it with the reverence it deserves.",
              },
              {
                icon: PenTool,
                title: "Excellence Without Compromise",
                desc: "From editing to cover design to distribution — we deliver work that stands out in quality and clarity.",
              },
              {
                icon: Users,
                title: "Personal & Relational",
                desc: "You're not just a client. You're a partner. We listen, guide, and celebrate every milestone with you.",
              },
            ].map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 to-red-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-red-900" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-14 text-center"
          >
            <Link
              href="/submit"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-900 text-white font-semibold text-base rounded-full hover:bg-red-800 transition-all shadow-lg hover:shadow-xl group mt-10"
            >
              Submit Your Manuscript
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============ LO MEANING ============ */}
      <section className="relative py-24 md:py-32 bg-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-8"
          >
            <Quote size={14} />
            Our Name
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight"
          >
            What <span className="font-serif italic">LO</span> Means
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto mb-8"
          >
            <span className="font-bold text-white">
              Love &amp; Obedience
            </span>
            <span className="block mt-6 text-lg md:text-2xl text-red-100/90 font-normal leading-relaxed">
              It&apos;s our daily reminder: every story we publish is handled in
              love — and in obedience to the calling we&apos;ve been given.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-10 border-t border-white/10"
          >
            <p className="text-lg md:text-xl font-medium italic text-red-100/90">
              Real stories. Deep faith. Bold love.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}