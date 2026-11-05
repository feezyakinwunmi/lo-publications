// src/app/young-authors-contest/ContestClient.tsx
"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Award,
  BookOpen,
  BookOpenCheck,
  CalendarDays,
  Check,
  ClipboardCheck,
  Clapperboard,
  Feather,
  FileText,
  Gavel,
  Globe2,
  Mail,
  Minus,
  Palette,
  PartyPopper,
  PenLine,
  Phone,
  Plus,
  Printer,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Upload,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  APPLY_URL,
  CATEGORIES,
  CONTACT,
  COUNTDOWNS,
  ELIGIBILITY,
  FAQ_GROUPS,
  FEE,
  JUDGING_CRITERIA,
  MILESTONES,
  PRIZES,
  RESTRICTION,
} from "./contestData";

/* Brand */
const RED = "#C62836";
const GOLD = "#F2B544";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ------------------------------ small parts ------------------------------ */

function RegisterButton({ children = "Register for the Contest", dark = false }: { children?: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-7 py-3.5 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl ${
        dark ? "bg-[#171717] text-white" : "bg-[#C62836] text-white hover:bg-[#a91f2c]"
      }`}
    >
      {children}
      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.22em] ${light ? "text-[#F2B544]" : "text-[#C62836]"}`}
    >
      <span className={`h-px w-8 ${light ? "bg-[#F2B544]" : "bg-[#C62836]"}`} />
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-2xl font-bold leading-tight md:text-4xl ${light ? "text-white" : "text-[#64152D]"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/80" : "text-[#171717]/70"}`}>{text}</p>}
    </motion.div>
  );
}

function Illustration({
  src,
  alt,
  w = 1400,
  h = 700,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`h-auto w-full ${className}`}
    />
  );
}

/* ------------------------------ countdown ------------------------------ */

function useNow() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function Countdown() {
  const now = useNow();
  if (now === null) return <div className="h-[132px]" aria-hidden="true" />;

  const next = COUNTDOWNS.find((c) => new Date(c.until).getTime() > now);
  if (!next) return null;

  let diff = Math.max(0, new Date(next.until).getTime() - now);
  const d = Math.floor(diff / 86400000);
  diff -= d * 86400000;
  const h = Math.floor(diff / 3600000);
  diff -= h * 3600000;
  const m = Math.floor(diff / 60000);
  const s = Math.floor((diff - m * 60000) / 1000);
  const parts = [
    { v: d, l: "Days" },
    { v: h, l: "Hours" },
    { v: m, l: "Minutes" },
    { v: s, l: "Seconds" },
  ];

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5" role="timer" aria-live="off">
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.18em] text-[#F2B544]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F2B544] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F2B544]" />
        </span>
        {next.label}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {parts.map((p) => (
          <div key={p.l} className="rounded-xl bg-white/95 px-1 py-2.5 text-center shadow-sm">
            <p className="text-xl font-bold tabular-nums text-[#64152D] sm:text-2xl">{String(p.v).padStart(2, "0")}</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#171717]/55">{p.l}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-white/70">{next.sub}</p>
    </div>
  );
}

/* ------------------------------ FAQ ------------------------------ */

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className={`overflow-hidden rounded-2xl border bg-white transition-colors ${open ? "border-[#C62836]/40 shadow-md" : "border-[#171717]/10"}`}>
      <h4>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C62836] md:px-6"
        >
          <span className="font-semibold text-[#171717]">{q}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
              open ? "bg-[#C62836] text-white" : "bg-[#64152D]/8 text-[#64152D]"
            }`}
          >
            {open ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>
      </h4>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="whitespace-pre-line px-5 pb-5 leading-relaxed text-[#171717]/75 md:px-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------ page ------------------------------ */

const HIGHLIGHTS: { icon: LucideIcon; title: string; text: string; tint: string }[] = [
  { icon: Users, title: "Eligibility", text: "Open internationally to writers aged 17–30.", tint: "bg-rose-50 text-[#C62836]" },
  { icon: Feather, title: "Competition Categories", text: "Enter one category: Short Story or Movie Script.", tint: "bg-amber-50 text-amber-600" },
  { icon: Trophy, title: "Cash Awards", text: "1st $1,000 · 2nd $500 · 3rd $250.", tint: "bg-yellow-50 text-yellow-600" },
  { icon: BookOpenCheck, title: "Publication Opportunity", text: "Selected entries are intended for publication by LO Publications.", tint: "bg-[#64152D]/8 text-[#64152D]" },
];

const STEPS: { icon: LucideIcon; title: string; text: string; when: string; img: string; w: number; alt: string }[] = [
  {
    icon: UserCheck,
    title: "Register",
    text: `Complete the online registration form. The ${FEE} registration fee is non-refundable.`,
    when: "Oct 5 – Nov 14, 2026",
    img: "/young-authors/step-1.webp",
    w: 354,
    alt: "A young person registering on a laptop",
  },
  {
    icon: PenLine,
    title: "Prepare",
    text: "Write your original, unpublished short story (1,000–3,000 words) or movie script (up to 15 pages).",
    when: "Write at your own pace",
    img: "/young-authors/step-2.webp",
    w: 328,
    alt: "A young writer writing in a notebook",
  },
  {
    icon: Upload,
    title: "Submit",
    text: "Submit your completed work during the submission period. Late submissions are not accepted.",
    when: "Nov 15, 2026 – Jan 15, 2027",
    img: "/young-authors/step-3.webp",
    w: 284,
    alt: "A laptop showing an upload symbol",
  },
  {
    icon: Gavel,
    title: "Get Judged",
    text: "An editorial panel appointed by LO Publications reviews every entry.",
    when: "After the deadline",
    img: "/young-authors/step-4.webp",
    w: 399,
    alt: "Two judges reading a manuscript together",
  },
  {
    icon: PartyPopper,
    title: "Celebrate",
    text: "Winners are announced, and selected entries move towards publication.",
    when: "February 13, 2027",
    img: "/young-authors/step-5.webp",
    w: 409,
    alt: "A young winner lifting a trophy",
  },
];

const JOURNEY: { icon: LucideIcon; title: string }[] = [
  { icon: FileText, title: "Write manuscript" },
  { icon: ClipboardCheck, title: "Edit professionally" },
  { icon: Palette, title: "Design book cover" },
  { icon: Printer, title: "Print and produce" },
  { icon: Rocket, title: "Publish" },
];

export default function ContestClient() {
  const now = useNow();
  const [openFaq, setOpenFaq] = useState<string | null>(`${FAQ_GROUPS[0].title}-0`);

  // Timeline status: index of the next milestone still ahead
  const nextIndex = now === null ? -1 : MILESTONES.findIndex((m) => new Date(m.at).getTime() > now);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-hidden bg-white text-[#171717]">
        {/* =============================== HERO =============================== */}
        <section className="relative overflow-hidden bg-[#64152D] pb-20 pt-28 text-white md:pb-24 md:pt-32 lg:min-h-[80vh]">
          {/* Decorative accents */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#C62836]/45 blur-3xl"
            animate={{ scale: [1, 1.12, 1], x: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-[#C62836]/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[.06]"
            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
            <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#F2B544]/40 bg-[#F2B544]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[.2em] text-[#F2B544]"
              >
                <Sparkles size={14} /> Young Authors Contest 2027
              </motion.span>

              <motion.h1 variants={fadeUp} className="mt-6 text-[2.25rem] font-bold leading-[1.05] sm:text-5xl xl:text-6xl">
                Your Story.
                <br />
                Your Voice.
                <br />
                <span className="relative inline-block text-[#F2B544]">
                  Your Book.
                  <svg aria-hidden="true" viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full">
                    <motion.path
                      d="M4 14 C 80 4, 200 4, 296 12"
                      fill="none"
                      stroke={RED}
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                The Young Authors Contest by LO Publications gives emerging writers the opportunity to showcase their
                creativity, compete and take their first steps towards becoming published authors.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <RegisterButton />
                <a
                  href="#guidelines"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-white px-7 py-3.5 font-semibold text-[#64152D] transition hover:-translate-y-0.5"
                >
                  Explore the Guidelines
                </a>
              </motion.div>

              <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
                <li className="inline-flex items-center gap-2"><Globe2 size={16} className="text-[#F2B544]" /> Open internationally</li>
                <li className="inline-flex items-center gap-2"><Users size={16} className="text-[#F2B544]" /> Ages 17–30</li>
                <li className="inline-flex items-center gap-2"><CalendarDays size={16} className="text-[#F2B544]" /> Register by Nov 14, 2026</li>
              </motion.ul>

              <motion.div variants={fadeUp} className="mt-8 max-w-md">
                <Countdown />
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            >
              <div className="absolute -inset-3 rotate-[-3deg] rounded-[2rem] bg-[#C62836]" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-[#fbf3ee] shadow-2xl">
                <Illustration
                  src="/young-authors/hero-illustration.webp"
                  alt="A diverse group of young writers reading, writing and imagining stories together, with a globe behind them"
                  priority
                />
              </div>

              <motion.div
                className="absolute -left-4 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#171717] shadow-2xl sm:-left-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{ opacity: { delay: 1 }, x: { delay: 1 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 } }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2B544]/20 text-[#b7791f]"><Trophy size={20} /></span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#171717]/50">1st prize</span>
                  <span className="block text-lg font-bold text-[#64152D]">$1,000</span>
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[#171717] shadow-2xl sm:-right-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
                transition={{ opacity: { delay: 1.2 }, x: { delay: 1.2 }, y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.6 } }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C62836]/10 text-[#C62836]"><BookOpen size={20} /></span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#171717]/50">Opportunity</span>
                  <span className="block font-bold text-[#64152D]">Get published</span>
                </span>
              </motion.div>

              {[{ t: "8%", l: "92%", s: 18, d: 0 }, { t: "88%", l: "4%", s: 14, d: 0.6 }, { t: "-4%", l: "48%", s: 12, d: 1.1 }].map((st, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className="absolute text-[#F2B544]"
                  style={{ top: st.t, left: st.l }}
                  animate={{ scale: [1, 1.35, 1], rotate: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.6, repeat: Infinity, delay: st.d }}
                >
                  <Star size={st.s} fill={GOLD} />
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Wave into next section */}
          <svg aria-hidden="true" className="absolute -bottom-px left-0 w-full text-white" viewBox="0 0 1440 60" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C240,70 480,0 720,20 C960,40 1200,70 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </section>

        {/* =============================== HIGHLIGHTS =============================== */}
        <section aria-labelledby="highlights-title" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <h2 id="highlights-title" className="sr-only">Contest highlights</h2>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-3xl bg-[#fbf3ee] shadow-lg ring-1 ring-[#171717]/5"
              >
                <Illustration
                  src="/young-authors/contest-highlights.webp"
                  alt="Young writers with books, a storyboard, a film clapperboard and a gold trophy"
                />
              </motion.div>
              <div className="grid gap-5 sm:grid-cols-2">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-[#171717]/8 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(23,23,23,.25)]"
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${h.tint}`}>
                      <h.icon size={24} />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-[#64152D]">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#171717]/70">{h.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =============================== ABOUT =============================== */}
        <section id="about" aria-labelledby="about-title" className="scroll-mt-24 bg-[#fbf6f3] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-[#C62836]/30" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <Illustration
                  src="/young-authors/about-contest.webp"
                  alt="A young writer with a bright idea writing beside a large open book showing a sunrise"
                />
              </div>
            </motion.div>
            <div>
              <SectionTitle
                eyebrow="About the contest"
                title={<span id="about-title">A real path to publication for young storytellers</span>}
              />
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                <p className="mt-5 text-base leading-relaxed text-[#171717]/75 md:text-lg">
                  The Young Authors Contest gives emerging storytellers aged 17–30, anywhere in the world, a real path to
                  publication. Write an original short story or movie script, and your work could be published by LO
                  Publications.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Compete for cash awards of up to $1,000",
                    "Selected entries are intended for publication by LO Publications",
                    "Selected participants receive editorial guidance during the publishing process",
                    "You keep full ownership of your work",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C62836] text-white">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-[#171717]/80">{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <RegisterButton dark>Register now</RegisterButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =============================== CATEGORIES =============================== */}
        <section id="categories" aria-labelledby="categories-title" className="scroll-mt-24 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <SectionTitle
              center
              eyebrow="Competition categories"
              title={<span id="categories-title">Choose your stage</span>}
              text="Enter one category. Both welcome bold, original voices."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {CATEGORIES.map((c, i) => {
                const film = c.key === "movie-script";
                const Icon = film ? Clapperboard : Feather;
                return (
                  <motion.article
                    key={c.key}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className={`group flex flex-col overflow-hidden rounded-3xl shadow-lg ring-1 transition-shadow hover:shadow-2xl ${
                      film ? "bg-[#171717] text-white ring-white/10" : "bg-white text-[#171717] ring-[#171717]/8"
                    }`}
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden ${film ? "bg-gradient-to-br from-[#2a1d2a] to-[#64152D]" : "bg-gradient-to-br from-[#fbf3ee] to-[#f7e3dc]"}`}>
                      <img
                        src={c.image}
                        alt={c.alt}
                        width={c.w}
                        height={c.h}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${film ? "object-right" : "object-left"}`}
                      />
                      <span className={`absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold shadow ${film ? "bg-[#F2B544] text-[#171717]" : "bg-[#C62836] text-white"}`}>
                        <Icon size={14} /> Category {i + 1}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-7">
                      <h3 className={`text-2xl font-bold ${film ? "text-white" : "text-[#64152D]"}`}>{c.title}</h3>
                      <p className={`mt-3 leading-relaxed ${film ? "text-white/75" : "text-[#171717]/70"}`}>{c.text}</p>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <span className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold ${film ? "bg-white/10 text-[#F2B544]" : "bg-[#C62836]/8 text-[#C62836]"}`}>
                          <FileText size={16} /> {c.requirement}
                        </span>
                        <a href="#guidelines" className={`inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline ${film ? "text-white" : "text-[#64152D]"}`}>
                          Submission guidelines <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =============================== ELIGIBILITY =============================== */}
        <section id="eligibility" aria-labelledby="eligibility-title" className="relative scroll-mt-24 overflow-hidden bg-[#64152D] py-16 text-white md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#C62836]/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionTitle light eyebrow="Who can participate?" title={<span id="eligibility-title">Open to young writers around the world</span>} />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {ELIGIBILITY.map((e, i) => (
                  <motion.li
                    key={e}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.07] p-4"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2B544] text-[#171717]">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-white/90">{e}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#F2B544]/30 bg-[#F2B544]/10 p-4">
                <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#F2B544]" />
                <p className="text-sm leading-relaxed text-white/90">
                  <strong className="text-white">Restriction:</strong> {RESTRICTION}
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl border-[6px] border-white/90 shadow-2xl"
            >
              <Illustration
                src="/young-authors/eligibility.webp"
                alt="A diverse group of smiling young people holding notebooks in front of a world map"
              />
            </motion.div>
          </div>
        </section>

        {/* =============================== HOW TO PARTICIPATE =============================== */}
        <section id="guidelines" aria-labelledby="steps-title" className="scroll-mt-24 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <SectionTitle center eyebrow="How to participate" title={<span id="steps-title">Five steps from idea to award</span>} />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-5"
            >
              <AlertCircle className="mt-0.5 shrink-0 text-amber-600" size={22} />
              <p className="text-[#171717]/85">
                <strong>Important:</strong> registration and submission are two separate steps. Register first, then prepare
                and submit your completed work during the submission period.
              </p>
            </motion.div>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ${
                    i === 0 || i === 2 ? "ring-[#C62836]/40" : "ring-[#171717]/8"
                  }`}
                >
                  <div className="relative flex h-40 items-end justify-center bg-gradient-to-b from-[#fbf3ee] to-[#f6e6df]">
                    <img src={s.img} alt={s.alt} width={s.w} height={620} loading="lazy" className="h-full w-auto object-contain" />
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#64152D] text-sm font-bold text-white shadow">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-[#64152D]">
                      <s.icon size={18} className="text-[#C62836]" /> {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#171717]/70">{s.text}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#C62836]">{s.when}</p>
                    {i === 0 && (
                      <a
                        href={APPLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#C62836] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a91f2c]"
                      >
                        Register now <ArrowRight size={15} />
                      </a>
                    )}
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* =============================== DATES =============================== */}
        <section id="dates" aria-labelledby="dates-title" className="scroll-mt-24 bg-[#fbf6f3] py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
              <SectionTitle eyebrow="Important dates" title={<span id="dates-title">Mark your calendar</span>} />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden overflow-hidden rounded-3xl lg:block"
              >
                <Illustration src="/young-authors/competition-timeline.webp" alt="A calendar, announcement, manuscript, trophy and book along a timeline" />
              </motion.div>
            </div>

            {/* Desktop: horizontal timeline. Mobile: vertical. */}
            <ol className="relative mt-12 grid gap-6 lg:grid-cols-6 lg:gap-4">
              <div aria-hidden="true" className="absolute left-[22px] top-2 h-[calc(100%-1rem)] w-0.5 bg-[#64152D]/15 lg:left-0 lg:top-[22px] lg:h-0.5 lg:w-full" />
              {MILESTONES.map((m, i) => {
                const done = nextIndex === -1 ? now !== null : i < nextIndex;
                const current = i === nextIndex;
                return (
                  <motion.li
                    key={m.key}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex gap-4 lg:block"
                  >
                    <span
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#fbf6f3] shadow ${
                        current ? "bg-[#C62836] text-white" : done ? "bg-[#64152D] text-white" : "bg-white text-[#64152D] ring-2 ring-[#64152D]/20"
                      }`}
                    >
                      {done ? <Check size={18} strokeWidth={3} /> : <CalendarDays size={18} />}
                      {current && <span className="absolute inset-0 animate-ping rounded-full bg-[#C62836]/40" aria-hidden="true" />}
                    </span>
                    <div className={`flex-1 rounded-2xl bg-white p-4 shadow-sm ring-1 lg:mt-5 ${current ? "ring-2 ring-[#C62836]" : "ring-[#171717]/8"}`}>
                      {current && (
                        <span className="mb-2 inline-block rounded-full bg-[#C62836] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          Up next
                        </span>
                      )}
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#171717]/50">{m.label}</p>
                      <p className="mt-1 font-bold text-[#64152D]">{m.date}</p>
                      {"note" in m && m.note && <p className="mt-1 text-xs leading-relaxed text-[#171717]/60">{m.note}</p>}
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* =============================== PRIZES =============================== */}
        <section id="prizes" aria-labelledby="prizes-title" className="relative scroll-mt-24 overflow-hidden bg-[#171717] py-16 text-white md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#64152D]/60 blur-3xl" />
          <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
            <SectionTitle center light eyebrow="Prizes and awards" title={<span id="prizes-title">Your words could win</span>} />

            <div className="mt-12 grid items-end gap-6 md:grid-cols-3">
              {PRIZES.map((p, i) => {
                const first = p.rank === 1;
                return (
                  <motion.div
                    key={p.place}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: [0.15, 0, 0.3][i], duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className={`relative overflow-hidden rounded-3xl text-center ${
                      first
                        ? "order-first bg-gradient-to-b from-[#F2B544] to-[#d9922b] text-[#171717] shadow-[0_30px_60px_-20px_rgba(242,181,68,.55)] md:order-none md:-mt-8 md:pb-4"
                        : "bg-white/[.06] ring-1 ring-white/15"
                    }`}
                  >
                    {first && (
                      <span className="absolute right-4 top-4 rounded-full bg-[#171717] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F2B544]">
                        Top prize
                      </span>
                    )}
                    <div className={`mx-auto ${first ? "w-40 pt-7" : "w-32 pt-5"}`}>
                      <motion.img
                        src={p.image}
                        alt={`${p.alt} for ${p.place}`}
                        width={p.w}
                        height={p.h}
                        loading="lazy"
                        className="h-auto w-full"
                        animate={first ? { y: [0, -6, 0] } : undefined}
                        transition={first ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
                      />
                    </div>
                    <div className="px-6 pb-8 pt-2">
                      <p className={`text-sm font-semibold uppercase tracking-[.2em] ${first ? "text-[#171717]/70" : "text-white/60"}`}>{p.place}</p>
                      <p className={`mt-1 font-bold ${first ? "text-5xl" : "text-4xl"}`}>{p.amount}</p>
                      <p className={`mt-2 text-sm ${first ? "text-[#171717]/70" : "text-white/60"}`}>Cash award</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Publication opportunity */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto mt-14 grid max-w-4xl items-center gap-6 rounded-3xl bg-white p-6 text-[#171717] shadow-2xl sm:grid-cols-[auto_1fr] md:p-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C62836] text-white">
                <BookOpen size={30} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#64152D]">Publication opportunity</h3>
                <p className="mt-2 leading-relaxed text-[#171717]/75">
                  Selected entries are intended for publication by LO Publications, with a publication target of March 2027.
                  Authors retain full ownership of their work.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =============================== JUDGING =============================== */}
        <section id="judging" aria-labelledby="judging-title" className="scroll-mt-24 bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#171717]/5"
            >
              <Illustration src="/young-authors/judging-process.webp" alt="A panel of judges reviewing manuscripts at a table full of books" />
            </motion.div>
            <div>
              <SectionTitle eyebrow="Judging process" title={<span id="judging-title">Read with care. Judged with fairness.</span>} />
              <div className="mt-7 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#64152D]"><Award size={18} className="text-[#C62836]" /> Judging criteria</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {JUDGING_CRITERIA.map((c) => (
                      <li key={c} className="rounded-full bg-[#64152D]/8 px-4 py-1.5 text-sm font-medium text-[#64152D]">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#64152D]"><Gavel size={18} className="text-[#C62836]" /> Evaluation and selection</h3>
                  <p className="mt-2 leading-relaxed text-[#171717]/75">
                    Submissions are reviewed by an editorial panel appointed by LO Publications. All decisions are final.
                    Due to the volume of submissions, individual feedback is not provided to every entry.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#64152D]"><PartyPopper size={18} className="text-[#C62836]" /> Announcement of results</h3>
                  <p className="mt-2 leading-relaxed text-[#171717]/75">Winners will be announced on February 13, 2027.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =============================== PUBLISHING JOURNEY =============================== */}
        <section aria-labelledby="journey-title" className="bg-[#fbf6f3] py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <SectionTitle
              center
              eyebrow="From manuscript to published book"
              title={<span id="journey-title">We know the road to print</span>}
              text="LO Publications takes books from first draft to finished copy every day. Selected entries benefit from that experience."
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-10 max-w-5xl"
            >
              <Illustration
                src="/young-authors/publishing-journey.webp"
                alt="A manuscript, an edited page, a book cover, a printer and a finished book, connected by arrows"
              />
            </motion.div>
            <ol className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {JOURNEY.map((j, i) => (
                <motion.li
                  key={j.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#171717]/8 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#64152D] text-white">
                    <j.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#C62836]">Stage {i + 1}</span>
                    <span className="block text-sm font-semibold text-[#171717]">{j.title}</span>
                  </span>
                </motion.li>
              ))}
            </ol>
            <p className="mt-8 text-center text-sm text-[#171717]/70">
              Curious about our services?{" "}
              <Link href="/services" className="font-semibold text-[#C62836] underline-offset-4 hover:underline">
                See how we publish books
              </Link>{" "}
              or try our{" "}
              <Link href="/resources" className="font-semibold text-[#C62836] underline-offset-4 hover:underline">
                free author tools
              </Link>
              .
            </p>
          </div>
        </section>

        {/* =============================== FAQ =============================== */}
        <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionTitle eyebrow="Frequently asked questions" title={<span id="faq-title">Questions? We have answers.</span>} />
              <div className="mt-8 overflow-hidden rounded-3xl bg-[#fbf3ee] shadow-md">
                <Illustration src="/young-authors/faq-illustration.webp" alt="A thoughtful young writer surrounded by question and speech bubbles" />
              </div>
              <p className="mt-6 text-sm text-[#171717]/70">
                Still unsure? Email{" "}
                <a href={`mailto:${CONTACT.email}?subject=Young%20Authors%20Contest%202027`} className="font-semibold text-[#C62836] hover:underline">
                  {CONTACT.email}
                </a>
                .
              </p>
            </div>
            <div className="space-y-10">
              {FAQ_GROUPS.map((g) => (
                <div key={g.title}>
                  <h3 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[.18em] text-[#64152D]">
                    <span className="h-2 w-2 rounded-full bg-[#C62836]" /> {g.title}
                  </h3>
                  <div className="space-y-3">
                    {g.faqs.map((f, i) => {
                      const key = `${g.title}-${i}`;
                      return (
                        <FaqItem key={key} q={f.question} a={f.answer} open={openFaq === key} onToggle={() => setOpenFaq(openFaq === key ? null : key)} />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =============================== FINAL CTA =============================== */}
        <section id="contact" aria-labelledby="cta-title" className="relative scroll-mt-24 overflow-hidden bg-[#64152D] py-16 text-white md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#C62836]/50 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[.06]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
              <motion.div variants={fadeUp}><Eyebrow light>Your moment</Eyebrow></motion.div>
              <motion.h2 variants={fadeUp} id="cta-title" className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Your story deserves to be told.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-white/85">
                Take the first step. Share your creativity, enter the competition and let the world discover your voice.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[52px] items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold uppercase tracking-wide text-[#C62836] shadow-2xl transition hover:-translate-y-0.5"
                >
                  Register for the Contest <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 text-white/85 sm:flex-row sm:gap-8">
                <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone size={18} className="text-[#F2B544]" /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}?subject=Young%20Authors%20Contest%202027`} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={18} className="text-[#F2B544]" /> {CONTACT.email}
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-3 rotate-[2deg] rounded-[2rem] bg-[#F2B544]/80" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border-[6px] border-white shadow-2xl">
                <Illustration src="/young-authors/final-cta.webp" alt="Young authors celebrating together beside a glowing open book" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </MotionConfig>
  );
}
