
"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Sparkles, PenTool, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white mt-20 md:mt-0">
      {/* Hero Section – Full bleed image + overlay text */}
      <section className="relative h-[80vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Open Bible with soft light"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-2xl"
          >
            Creating Stories That <span className="text-red-400">Illuminate the Soul</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            At LO Publications, we believe in the power of words to inspire, uplift, and transform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="inline-block px-12 py-6 bg-red-900/90 backdrop-blur-lg text-white text-2xl md:text-3xl font-serif italic rounded-2xl shadow-2xl border border-white/20"
          >
            To publish truth with love and purpose.
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision – Glass cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-white pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              We Don’t Just Publish Books
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              We amplify voices that carry healing, hope, and spiritual depth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Faith-Inspired Purpose",
                desc: "Every project is covered in prayer and guided by purpose. We only publish stories that align with truth, love, and God’s calling.",
              },
              {
                icon: Sparkles,
                title: "Excellence with Integrity",
                desc: "From first draft to final print, we uphold the highest editorial standards — delivering work that is clear, powerful, and purpose-filled.",
              },
              {
                icon: Users,
                title: "Author-First Partnership",
                desc: "We walk closely with every author — whether you’re writing your first book or your tenth, we treat your message with reverence and care.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all group"
              >
                <item.icon className="w-16 h-16 text-red-900 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-black mb-4 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Publish – Visual Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              What We Publish
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We specialize in books that are spiritually grounded, emotionally honest, and written with deep purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Devotionals & Christian Living",
                desc: "Daily guides, Bible studies, and books that draw readers closer to God.",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKHSNDTFzjCLu0lOJOHfKCd3m72qV3SRFVQ&s",
                title: "Inspirational Memoirs & Testimonies",
                desc: "Real-life stories of faith, redemption, healing, and God’s faithfulness.",
              },
              {
                img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                title: "Purpose-Driven Nonfiction & Poetry",
                desc: "Reflective essays, poetry, and books that stir the heart and soul.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us – Emotional Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Authors Choose LO Publications
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Plenty of publishers exist. Few walk with you like we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Heart,
                title: "We Honor Your Calling",
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
                desc: "You’re not just a client. You’re a partner. We listen, guide, and celebrate every milestone with you.",
              },
            ].map((reason, idx) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border border-gray-200 hover:border-red-200 hover:shadow-2xl transition-all group"
              >
                <reason.icon className="w-16 h-16 text-red-900 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-black mb-4 text-center">{reason.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/submit"
              className="inline-flex items-center px-12 py-6 bg-red-900 text-white font-bold text-xl rounded-full hover:bg-red-800 transition shadow-2xl group"
            >
              Let’s Create Something Eternal
              <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" size={28} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LO Meaning – Big Quote */}
      <section className="py-24 bg-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif italic mb-12 leading-tight"
          >
            What <span className="underline decoration-white/40">LO</span> Means
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium max-w-5xl mx-auto leading-relaxed"
          >
            “LO” stands for <span className="font-bold text-white underline decoration-white/60">Love & Obedience</span>.<br />
            It’s our daily reminder: every story we publish is handled in love — and in obedience to the calling we’ve been given.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-2xl font-medium italic opacity-90"
          >
            Real stories. Deep faith. Bold love.
          </motion.p>
        </div>
      </section>
    </main>
  );
}