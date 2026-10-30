// src/app/about/AboutClient.tsx
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Feather,
  Heart,
  PenTool,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { useSiteContent } from "@/app/data/SiteContentProvider";
import TiltCard from "../components/TiltCard";
import CountUp from "../components/CountUp";
import { PUBLISHING_CATEGORIES } from "../data/publishing";

function useCovers() {
  const { showcaseAuthors } = useSiteContent();
  return showcaseAuthors.map((a) => ({
    slug: a.slug,
    title: a.books[0].title,
    author: a.name,
    src: a.books[0].coverImage,
  }));
}

const values = [
  "Love & Obedience",
  "Faith-Inspired Purpose",
  "Excellence With Integrity",
  "Author-First Partnership",
  "Stories That Matter",
];

const stats = [
  { number: "20+", label: "Authors Published" },
  { number: "100+", label: "Books Published" },
  { number: "4+", label: "Countries Reached" },
];

const pillars = [
  {
    icon: Heart,
    title: "Faith-Inspired Purpose",
    desc: "Our faith in the Lord Jesus Christ guides our work. We publish with biblical conviction and a commitment to creating works that inspire positive change, transform lives, and make a lasting impact on individuals, families, and society.",
  },
  {
    icon: Sparkles,
    title: "Publishing Across Genres",
    desc: "From fiction and nonfiction to Christian literature, children's books, business, academic works, poetry, memoirs, and professional publications, we welcome diverse stories and ideas that align with our publishing values.",
  },
  {
    icon: Users,
    title: "xcellence With Integrity",
    desc: "From manuscript to final publication, we uphold high editorial standards, professional quality, and integrity in every project we undertake.",
  },
  {
    icon: Users,
    title: "Author-First Partnership",
    desc: "Every author has a story worth telling. We work closely with you to preserve your voice, honour your vision, and bring your manuscript to life through publishing solutions tailored to your goals.",
  },
];

const categories = PUBLISHING_CATEGORIES.slice(0, 3);

const reasons = [
  {
    icon: Heart,
    title: "We Honour Your Calling",
    desc: "Your message is sacred. We pray over every project and treat it with the reverence it deserves.",
  },
  {
    icon: PenTool,
    title: "Excellence Without Compromise",
    desc: "From editing and cover design to distribution, we deliver work that stands out for its quality and clarity.",
  },
  {
    icon: Users,
    title: "Personal & Relational",
    desc: "You're not just a client. You're a partner. We listen, guide, and celebrate every milestone with you.",
  },
];

export default function AboutClient() {
  const covers = useCovers();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const coversY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative overflow-hidden bg-[#f5f2ed] px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pt-36">
        <motion.div
          style={{ y: blobY }}
          className="pointer-events-none absolute -right-[12%] top-[6%] h-[600px] w-[600px] rounded-[48%_52%_60%_40%] bg-[#e5d8ce]"
        />
        <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[420px] w-[420px] rounded-[60%_40%_45%_55%] bg-[#e8dfd7]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-black/40"
            >
              <Feather size={14} className="text-[#8d171c]" />
              About LO Publications
            </motion.p>

            <h1 className="text-5xl font-black leading-[.92] tracking-[-.05em] text-black sm:text-6xl lg:text-7xl xl:text-8xl">
              {["Stories That", "Illuminate", "the Soul"].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className={`block ${i === 1 ? "text-[#8d171c]" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-black/60 md:text-xl"
            >
              At LO Publications, we believe in the power of words to inspire,
              uplift, and transform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#8d171c] py-2 pl-2 pr-6 text-white shadow-lg"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Quote size={16} />
              </span>
              <span className="font-serif text-base italic md:text-lg">To publish truth with love and purpose</span>
            </motion.div>
          </div>

          {/* Cover collage */}
          <motion.div style={{ y: coversY }} className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[500px]">
            {covers.slice(0, 4).map((cover, i) => {
              const layout = [
                "left-0 top-6 w-[46%] -rotate-6",
                "right-2 top-0 w-[42%] rotate-6",
                "left-[10%] bottom-0 w-[40%] rotate-3",
                "right-0 bottom-8 w-[46%] -rotate-3",
              ][i];
              return (
                <motion.div
                  key={cover.slug}
                  initial={{ opacity: 0, scale: 0.7, y: 60 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.4 + i * 0.12 }}
                  style={{ zIndex: i + 1 }}
                  whileHover={{ zIndex: 30 }}
                  className={`absolute ${layout}`}
                >
                  <Link
                    href={`/authors/all?author=${cover.slug}`}
                    className="group block transition-transform duration-500 hover:-translate-y-3 hover:rotate-0 hover:scale-105"
                    aria-label={`${cover.title} by ${cover.author}`}
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-lg border-4 border-white bg-white shadow-[18px_24px_50px_rgba(0,0,0,.22)]">
                      <img src={cover.src} alt={cover.title} className="h-full w-full object-cover" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 360] }}
              transition={{
                opacity: { delay: 1, duration: 0.4 },
                scale: { delay: 1, type: "spring" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-2xl"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <path id="about-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-white text-[9.5px] font-bold uppercase tracking-[.25em]">
                  <textPath href="#about-circle">Love · Obedience · Purpose ·</textPath>
                </text>
              </svg>
              <span className="font-serif text-2xl font-bold italic">LO</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES MARQUEE ================= */}
      <div className="overflow-hidden whitespace-nowrap bg-[#8d171c] py-4 text-white">
        <motion.div
          className="inline-flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...values, ...values, ...values, ...values].map((value, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-6 text-sm font-semibold uppercase tracking-[.2em] md:text-base">
              {value}
              <Sparkles size={14} className="text-white/50" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ================= PURPOSE ================= */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Our Purpose</span>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-black md:text-6xl">
              We Don&apos;t Just
              <br />
              Publish Books
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pt-10"
          >
            <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
              We amplify voices that carry{" "}
              <span className="font-semibold text-[#8d171c]">healing, hope, and spiritual depth</span>.
              Every project we take on is a partnership — a shared commitment to
              telling stories that matter.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-[#8d171c] md:text-4xl">
                    <CountUp value={stat.number} />
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="bg-[#f8f6f3] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">What Guides Us</span>
            <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">Our Three Pillars</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                >
                  <TiltCard className="group h-full rounded-3xl" glow="rgba(255,255,255,0.18)">
                    <div className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 transition-colors duration-500 md:p-10">
                      <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#8d171c] transition-transform duration-500 ease-out group-hover:scale-y-100" />
                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8d171c]/10 text-[#8d171c] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-white group-hover:text-[#8d171c]">
                            <Icon size={26} />
                          </div>
                          <span className="text-6xl font-black leading-none text-black/[.05] transition-colors duration-500 group-hover:text-white/15">
                            0{idx + 1}
                          </span>
                        </div>
                        <h3 className="mt-8 text-2xl font-bold text-black transition-colors duration-500 group-hover:text-white">
                          {pillar.title}
                        </h3>
                        <p className="mt-4 leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/80">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE PUBLISH ================= */}
      <PublishingCategories />

      {/* ================= WHY AUTHORS CHOOSE US ================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">Why Us</span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-black md:text-5xl">
                Why Authors Choose LO Publications
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Many publishers exist. Few work with you like we do.
              </p>
              <Link
                href="/submit"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#8d171c] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#6b1215] hover:shadow-xl"
              >
                Submit Your Manuscript
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <ol className="space-y-6">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.li
                  key={reason.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="group relative flex gap-6 overflow-hidden rounded-3xl border border-gray-100 bg-[#f8f6f3] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#8d171c]/20 hover:bg-white hover:shadow-[0_30px_60px_-25px_rgba(141,23,28,.35)]"
                >
                  <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-[#8d171c] transition-transform duration-500 group-hover:scale-y-100" />
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#8d171c] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8d171c] group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8d171c]/60">Reason 0{idx + 1}</p>
                    <h3 className="mt-1 text-xl font-bold text-black md:text-2xl">{reason.title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-600">{reason.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= LO MEANING ================= */}
      <LoMeaning />

      {/* ================= AUTHORS TEASER ================= */}
      <section className="bg-[#f5f2ed] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8d171c]">The Proof</span>
              <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">Books We&apos;ve Brought to Life</h2>
            </div>
            <Link
              href="/authors"
              className="group inline-flex items-center gap-2 self-start font-semibold text-[#8d171c] md:self-auto"
            >
              Meet Our Featured Authors
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {covers.map((cover, i) => (
              <motion.div
                key={cover.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/authors/all?author=${cover.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    <img
                      src={cover.src}
                      alt={cover.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-sm font-bold leading-tight text-white">{cover.title}</p>
                        <p className="mt-1 text-xs text-white/70">{cover.author}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Expanding panels: the hovered (or tapped) category grows to reveal its description
function PublishingCategories() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#111] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">Our Catalogue</span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">What We Publish</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            From fiction and nonfiction to Christian literature, children&apos;s books, business, academic works,
            poetry, memoirs, and professional publications, we help authors bring their ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:h-[480px] md:flex-row">
          {categories.map((cat, idx) => {
            const isActive = active === idx;
            return (
              <motion.button
                key={cat.title}
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 28 }}
                className={`relative h-[260px] overflow-hidden rounded-3xl text-left md:h-auto ${
                  isActive ? "md:flex-[2.4]" : "md:flex-1"
                }`}
              >
                <img
                  src={cat.img}
                  alt={`${cat.title} book cover`}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    isActive ? "scale-105 opacity-60" : "scale-100 opacity-35 grayscale"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <span
                  className={`absolute right-6 top-6 text-5xl font-black transition-colors duration-500 ${
                    isActive ? "text-white/25" : "text-white/10"
                  }`}
                >
                  0{idx + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-xl font-bold leading-snug md:text-2xl">{cat.title}</h3>
                  <motion.p
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                    transition={{ duration: 0.35 }}
                    className="max-w-md overflow-hidden text-white/75"
                  >
                    <span className="block pt-3">{cat.desc}</span>
                  </motion.p>
                  <span
                    className={`mt-5 block h-1 rounded-full bg-[#e0474d] transition-all duration-500 ${
                      isActive ? "w-16" : "w-0"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-white/50">
            Plus {PUBLISHING_CATEGORIES.length - categories.length} more categories, from academic and business books to
            poetry, history and children&apos;s literature.
          </p>
          <Link
            href="/what-we-publish"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#8d171c] transition hover:shadow-[0_0_40px_rgba(255,255,255,.25)]"
          >
            See Everything We Publish
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// "LO" broken into its two words; each letter reveals its meaning on hover
function LoMeaning() {
  const letters = [
    { letter: "L", word: "Love", text: "Every story we publish is handled with love." },
    { letter: "O", word: "Obedience", text: "In obedience to the calling we've been given." },
  ];

  return (
    <section className="relative overflow-hidden bg-[#8d171c] py-24 text-white md:py-32">
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest">
            <Quote size={14} />
            Our Name
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            What <span className="font-serif italic">LO</span> Means
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {letters.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white md:p-12"
            >
              <span className="pointer-events-none absolute -bottom-10 -right-4 font-serif text-[220px] font-bold italic leading-none text-white/10 transition-all duration-700 group-hover:-translate-y-4 group-hover:text-[#8d171c]/10">
                {item.letter}
              </span>
              <div className="relative">
                <p className="font-serif text-7xl font-bold italic text-white transition-colors duration-500 group-hover:text-[#8d171c] md:text-8xl">
                  {item.letter}
                </p>
                <p className="mt-4 text-3xl font-bold transition-colors duration-500 group-hover:text-black md:text-4xl">
                  {item.word}
                </p>
                <p className="mt-3 max-w-xs text-lg text-white/75 transition-colors duration-500 group-hover:text-gray-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-14 max-w-2xl border-t border-white/15 pt-10 text-center text-lg leading-relaxed text-white/85 md:text-2xl"
        >
          It&apos;s our daily reminder: every story we publish is handled in love — and in
          obedience to the calling we&apos;ve been given.
          <span className="mt-6 block font-serif text-base italic text-white/60 md:text-xl">
            Real stories. Deep faith. Bold love.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
