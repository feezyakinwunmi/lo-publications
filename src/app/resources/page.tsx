// src/app/resources/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, CalendarDays, ClipboardCheck, Coins, FileText } from "lucide-react";
import { COMING_SOON, RESOURCE_TOOLS } from "./data";

export const metadata: Metadata = {
  title: "Free Author & Publisher Tools | LO Publications",
  description:
    "Free tools for authors and publishers: publishing cost calculator, word count to page calculator, royalty calculator, manuscript readiness assessment and a 30-day book marketing plan.",
  alternates: { canonical: "/resources" },
};

const ICONS: Record<string, typeof Calculator> = {
  "book-publishing-cost-calculator": Calculator,
  "word-count-to-page-calculator": FileText,
  "book-royalty-calculator": Coins,
  "manuscript-readiness-assessment": ClipboardCheck,
  "book-marketing-plan-generator": CalendarDays,
};

export default function ResourcesPage() {
  return (
    <main className="bg-[#f8f6f3] pt-20">
      <section className="relative overflow-hidden bg-[#8d171c] py-24 text-white md:py-28">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 15% 30%, #fff 0, transparent 25%), radial-gradient(circle at 85% 70%, #fff 0, transparent 20%)" }}
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">Free Resources</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">Free Author &amp; Publisher Tools</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Everything you need to plan, prepare, publish and market your book. No sign-up, no cost.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Popular free tools</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCE_TOOLS.map((tool) => {
            const Icon = ICONS[tool.slug] ?? Calculator;
            return (
              <Link
                key={tool.slug}
                href={`/resources/${tool.slug}`}
                className="group flex flex-col rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8d171c]/10 text-[#8d171c]">
                    <Icon size={24} />
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">Free</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-[.15em] text-gray-400">{tool.category}</p>
                <h3 className="mt-1 text-xl font-bold text-gray-900 transition group-hover:text-[#8d171c]">{tool.title}</h3>
                <p className="mt-3 flex-1 text-gray-600">{tool.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#8d171c]">
                  Use this tool <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <h2 className="mb-6 mt-20 text-2xl font-bold text-gray-900">Coming soon</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMING_SOON.map((t) => (
            <div key={t.title} className="rounded-2xl border border-dashed border-gray-300 bg-white/60 p-5">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-gray-400">{t.category}</p>
              <p className="mt-1 font-semibold text-gray-700">{t.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gray-900 p-8 text-white md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">Need a hand with your book?</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Our free tools help you plan. When you are ready for professional editing, design, publishing and launch support,
            LO Publications is here.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#8d171c] px-7 py-3.5 font-semibold transition hover:bg-[#b01e24]">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-semibold transition hover:bg-white/10">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
