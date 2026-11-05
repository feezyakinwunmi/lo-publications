// src/app/resources/ResourcesClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  BookHeart,
  BookOpenCheck,
  Church,
  Clock,
  FileSignature,
  Gift,
  Lock,
  MousePointerClick,
  NotebookPen,
  Ruler,
  Barcode,
  ListChecks,
  Rocket,
  Sparkles,
  UserRound,
  Wand,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { CATALOGUE } from "../data/catalogue";
import { COMING_SOON, RESOURCE_TOOLS, type ToolCategory } from "./data";
import { TOOL_ICONS, ToolVisual } from "./ToolVisual";

const ROTATING = ["Plan", "Price", "Prepare", "Publish", "Promote"];
const FILTERS: ("All" | ToolCategory)[] = ["All", "Publishing", "Writing", "Book Marketing"];

const SOON_ICONS: Record<string, LucideIcon> = {
  "ISBN Guide and Validator": Barcode,
  "Book Cover Size Calculator": Ruler,
  "Book Publishing Checklist Generator": ListChecks,
  "Author Biography Generator": UserRound,
  "Book Proposal Generator": FileSignature,
  "Ministry Book Readiness Test": BookHeart,
  "Sermon-to-Book Planner": NotebookPen,
  "Christian Book Launch Planner": Church,
};

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: MousePointerClick, title: "Pick a tool", text: "Choose the question you need answered today." },
  { icon: Wand, title: "Add your details", text: "A few numbers or answers. Nothing is saved or shared." },
  { icon: Rocket, title: "Get instant results", text: "Clear figures, a score or a plan, plus the next step." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ResourcesClient() {
  const [word, setWord] = useState(0);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % ROTATING.length), 2000);
    return () => clearInterval(t);
  }, []);

  // Real covers from our catalogue for the hero
  const covers = useMemo(() => CATALOGUE.filter((b) => b.coverImage).slice(0, 4), []);
  const tools = filter === "All" ? RESOURCE_TOOLS : RESOURCE_TOOLS.filter((t) => t.category === filter);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-[#f8f6f3] pt-20">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0709] via-[#5c0f13] to-[#8d171c] text-white">
          <motion.div
            className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#ea580c]/30 blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-fuchsia-500/20 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[.07]"
            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr]">
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[.18em] backdrop-blur"
              >
                <Gift size={14} /> 100% free · No sign-up
              </motion.span>
              <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Free tools to help you{" "}
                <span className="relative inline-block min-w-[5ch] text-amber-300">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING[word]}
                      className="inline-block"
                      initial={{ y: 30, opacity: 0, rotateX: -60 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -30, opacity: 0, rotateX: 60 }}
                      transition={{ duration: 0.35 }}
                    >
                      {ROTATING[word]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                your book.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
                Calculators, assessments and planners built by the LO Publications team, so you can make confident
                decisions about your book in minutes.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#tools"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#8d171c] shadow-xl transition hover:-translate-y-0.5"
                >
                  Explore the tools <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/resources/book-publishing-cost-calculator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-semibold transition hover:bg-white/10"
                >
                  What will my book cost?
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
                <span className="inline-flex items-center gap-2"><Zap size={16} className="text-amber-300" /> Instant results</span>
                <span className="inline-flex items-center gap-2"><Lock size={16} className="text-amber-300" /> Nothing is stored</span>
                <span className="inline-flex items-center gap-2"><Sparkles size={16} className="text-amber-300" /> Canadian dollars</span>
              </motion.div>
            </motion.div>

            {/* Floating covers and tool chips */}
            <div className="relative mx-auto hidden h-[440px] w-full max-w-md sm:block">
              {covers.map((b, i) => (
                <motion.img
                  key={b.slug}
                  src={b.coverImage}
                  alt=""
                  className="absolute w-36 rounded-xl border-4 border-white/80 object-cover shadow-2xl md:w-40"
                  style={{
                    left: ["4%", "52%", "18%", "62%"][i],
                    top: ["6%", "0%", "50%", "48%"][i],
                    aspectRatio: "3 / 4",
                  }}
                  initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: [-8, 6, 4, -5][i], y: [0, -12, 0] }}
                  transition={{
                    opacity: { delay: 0.3 + i * 0.15 },
                    scale: { delay: 0.3 + i * 0.15, type: "spring" },
                    rotate: { delay: 0.3 + i * 0.15 },
                    y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: 1 + i * 0.4 },
                  }}
                />
              ))}

              {RESOURCE_TOOLS.slice(0, 3).map((t, i) => {
                const Icon = TOOL_ICONS[t.slug];
                return (
                  <motion.div
                    key={t.slug}
                    className="absolute z-10 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-2xl"
                    style={{ left: ["-6%", "60%", "30%"][i], top: ["40%", "30%", "86%"][i] }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -8, 0] }}
                    transition={{
                      opacity: { delay: 1 + i * 0.2 },
                      y: { duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: 1 + i * 0.2 },
                    }}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ background: t.accent }}>
                      {Icon && <Icon size={16} />}
                    </span>
                    {t.title.replace("Book ", "").replace(" Calculator", "")}
                  </motion.div>
                );
              })}

              <motion.div
                className="absolute bottom-[22%] right-[-4%] z-20 rounded-2xl bg-white p-4 text-gray-900 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, type: "spring" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Estimated pages</p>
                <p className="text-2xl font-black text-[#8d171c]">146</p>
                <p className="text-[11px] text-gray-500">50,000 words · 6&quot; × 9&quot;</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= KEYWORD STRIP ================= */}
        <div className="marquee-pause overflow-hidden border-b border-gray-200 bg-white py-4">
          <div className="marquee-left flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[.2em] text-gray-400" style={{ ["--marquee-duration" as string]: "40s" }}>
            {[0, 1].map((k) => (
              <div key={k} className="flex gap-10" aria-hidden={k === 1}>
                {["Publishing costs", "Page counts", "Royalties", "Manuscript readiness", "Marketing plans", "ISBNs", "Cover sizes", "Book launches"].map((w) => (
                  <span key={w} className="inline-flex items-center gap-10">
                    {w} <span className="text-[#8d171c]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ================= TOOLS ================= */}
        <section id="tools" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:py-24">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-sm font-semibold uppercase tracking-[.2em] text-[#8d171c]">Free tools</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">Answers authors search for</h2>
            </motion.div>

            <div className="flex flex-wrap gap-2 rounded-2xl bg-white p-1.5 shadow-sm">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    filter === f ? "text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {filter === f && (
                    <motion.span layoutId="resource-filter" className="absolute inset-0 rounded-xl bg-[#8d171c]" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={`/resources/${tool.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
                  >
                    <ToolVisual tool={tool} />
                    <div className="flex flex-1 flex-col p-7">
                      <div className="mb-3 flex items-center justify-between text-xs font-semibold">
                        <span className="uppercase tracking-[.15em]" style={{ color: tool.accent }}>{tool.category}</span>
                        <span className="inline-flex items-center gap-1.5 text-gray-400"><Clock size={13} /> {tool.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-[#8d171c]">{tool.title}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-gray-600">{tool.short}</p>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 font-semibold text-[#8d171c]">
                          Use this tool <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                        </span>
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">Free</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div className="mb-14 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-sm font-semibold uppercase tracking-[.2em] text-[#8d171c]">How it works</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 md:text-4xl">Three steps. About a minute.</h2>
            </motion.div>
            <div className="relative grid gap-10 md:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-10 hidden h-0.5 bg-gradient-to-r from-[#8d171c]/10 via-[#8d171c]/40 to-[#8d171c]/10 md:block" />
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <motion.div
                    className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#8d171c] to-[#ea580c] text-white shadow-xl"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                  >
                    <s.icon size={32} />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-[#8d171c] shadow">
                      {i + 1}
                    </span>
                  </motion.div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{s.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-gray-600">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= COMING SOON ================= */}
        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <motion.div className="mb-10" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-sm font-semibold uppercase tracking-[.2em] text-[#8d171c]">On the way</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 md:text-4xl">More tools coming soon</h2>
            <p className="mt-3 max-w-2xl text-gray-600">Including tools made for ministers, churches and Christian authors.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMING_SOON.map((t, i) => {
              const Icon = SOON_ICONS[t.title] ?? BookOpenCheck;
              const faith = t.category === "Faith-Based";
              return (
                <motion.div
                  key={t.title}
                  className={`group rounded-2xl border p-5 transition ${
                    faith ? "border-amber-200 bg-gradient-to-br from-amber-50 to-white" : "border-gray-200 bg-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${faith ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-600"}`}>
                      <Icon size={20} />
                    </span>
                    <span className="rounded-full bg-gray-900/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">Soon</span>
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[.15em] text-gray-400">{t.category}</p>
                  <p className="mt-1 font-semibold text-gray-800">{t.title}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-6 pb-24">
          <motion.div
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] text-white shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0709]/95 via-[#5c0f13]/85 to-[#8d171c]/60" />
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">Ready to turn your plan into a published book?</h2>
              <p className="mt-4 max-w-xl text-lg text-white/80">
                Our tools help you plan. When you are ready for editing, design, publishing and launch support, our team is here.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#8d171c] transition hover:-translate-y-0.5">
                  Request a Quote <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/submit" className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-semibold transition hover:bg-white/10">
                  Submit Your Manuscript
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </MotionConfig>
  );
}
