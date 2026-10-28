// src/app/what-we-publish/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cross, Send } from "lucide-react";
import { PUBLISHING_CATEGORIES } from "../data/publishing";

export const metadata: Metadata = {
  title: "Book Publishing Categories | LO Publications",
  description:
    "Explore LO Publications' book publishing categories, from Christian books and children's literature to fiction, business, academic works, memoirs, and more.",
  alternates: { canonical: "/what-we-publish" },
};

export default function WhatWePublishPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden bg-[#141010] px-5 pb-20 pt-32 text-white sm:px-8 md:pt-40">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[460px] w-[460px] rounded-full bg-[#8d171c]/45 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[.25em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#e0474d]" />
            What We Publish
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            We Publish Across{" "}
            <span className="font-serif italic font-bold text-[#e0474d]">Genres</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
            From fiction and nonfiction to Christian literature, children&apos;s books, business, academic works,
            poetry, memoirs, and professional publications, LO Publications helps authors bring their ideas to life
            through quality publishing services.
          </p>
          <a
            href="#categories"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#8d171c] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#a91d23]"
          >
            Browse {PUBLISHING_CATEGORIES.length} categories
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section id="categories" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-black tracking-[-.02em] text-black md:text-5xl">Publishing Categories</h2>
            <p className="mt-4 text-lg leading-relaxed text-black/60">
              Whatever your subject, there&apos;s a home for it here. These are the kinds of books we help authors
              publish.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PUBLISHING_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <li
                  key={cat.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#8d171c]/20 hover:shadow-[0_24px_50px_-28px_rgba(141,23,28,.45)]"
                >
                  <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#8d171c] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="mb-6 flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d171c]/10 text-[#8d171c] transition-colors duration-300 group-hover:bg-[#8d171c] group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <span className="text-3xl font-black text-black/[.07]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-black">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{cat.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= CHRISTIAN VALUES ================= */}
      <section className="px-5 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#8d171c] px-8 py-16 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/[.06]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full border border-white/15" />
          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20">
              <Cross size={34} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-3xl font-black tracking-[-.02em] md:text-5xl">
                Our Faith. Our Values. Our Publishing.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
                As a Christian-founded publishing house, we are guided by our faith in the Lord Jesus Christ and the
                authority of Scripture. We accept projects that align with our biblical convictions and editorial
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 py-24 text-center sm:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black tracking-[-.03em] text-black md:text-6xl">
            Ready to Publish Your{" "}
            <span className="font-serif italic font-bold text-[#8d171c]">Book?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Whether your manuscript is complete or still in development, LO Publications can help you take the next
            step towards publication. Tell us about your book and explore the publishing support available for your
            project.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8d171c] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#6b1215] hover:shadow-xl"
            >
              <Send size={16} />
              Submit Your Manuscript
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-8 py-4 text-sm font-semibold text-black transition hover:border-[#8d171c] hover:text-[#8d171c]"
            >
              Explore Our Publishing Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <p className="mt-16 border-t border-black/10 pt-8 text-sm font-medium tracking-wide text-black/50">
            <span className="font-bold text-[#8d171c]">LO Publications</span> — Helping Authors Bring Their Stories,
            Knowledge and Ideas to the World.
          </p>
        </div>
      </section>
    </main>
  );
}
