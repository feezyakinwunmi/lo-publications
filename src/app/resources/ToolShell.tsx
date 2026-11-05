// src/app/resources/ToolShell.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESOURCE_TOOLS, type ResourceTool } from "./data";
import ToolHero from "./ToolHero";
import { ToolVisual } from "./ToolVisual";
import CostCalculator from "./tools/CostCalculator";
import PageCalculator from "./tools/PageCalculator";
import RoyaltyCalculator from "./tools/RoyaltyCalculator";
import ReadinessAssessment from "./tools/ReadinessAssessment";
import MarketingPlanGenerator from "./tools/MarketingPlanGenerator";

const TOOL_COMPONENTS: Record<string, React.ComponentType> = {
  "book-publishing-cost-calculator": CostCalculator,
  "word-count-to-page-calculator": PageCalculator,
  "book-royalty-calculator": RoyaltyCalculator,
  "manuscript-readiness-assessment": ReadinessAssessment,
  "book-marketing-plan-generator": MarketingPlanGenerator,
};

const CTA: Record<string, { heading: string; text: string; button: string; href: string }> = {
  "book-publishing-cost-calculator": {
    heading: "Ready to take your manuscript to the next stage?",
    text: "LO Publications can help with professional editing, proofreading, cover design, formatting, printing and distribution. Tell us about your book and we will send you a quotation.",
    button: "Request a Publishing Quote",
    href: "/contact",
  },
  "word-count-to-page-calculator": {
    heading: "Want your book typeset professionally?",
    text: "Our designers prepare print-ready interiors with careful typography and consistent layout, so the final page count and finish are exactly right.",
    button: "Talk to Us About Book Design",
    href: "/services#book-design",
  },
  "book-royalty-calculator": {
    heading: "Not sure how to price and distribute your book?",
    text: "We can help you choose a sensible price and the right print and distribution route for your goals.",
    button: "Book a Publishing Consultation",
    href: "/contact",
  },
  "manuscript-readiness-assessment": {
    heading: "Want an expert opinion on your manuscript?",
    text: "Submit your manuscript and our editorial team will tell you honestly where it stands and what it needs.",
    button: "Submit Your Manuscript",
    href: "/submit",
  },
  "book-marketing-plan-generator": {
    heading: "Need help running your book launch?",
    text: "We support launch planning, author branding, promotional materials and publicity, so you can focus on your readers.",
    button: "Ask About Launch Support",
    href: "/services#author-development",
  },
};

export default function ToolShell({ tool }: { tool: ResourceTool }) {
  const Tool = TOOL_COMPONENTS[tool.slug];
  const cta = CTA[tool.slug];
  const others = RESOURCE_TOOLS.filter((t) => t.slug !== tool.slug).slice(0, 3);

  return (
    <main className="bg-[#f8f6f3] pt-20">
      <ToolHero tool={tool} />

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {Tool ? <Tool /> : null}

        {cta && (
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-[#2a0c0e] to-[#5c0f13] p-8 text-white shadow-xl md:p-12 print:hidden">
            <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#8d171c]/40 blur-2xl" />
            <h2 className="relative text-2xl font-bold md:text-3xl">{cta.heading}</h2>
            <p className="relative mt-3 max-w-2xl text-white/70">{cta.text}</p>
            <Link
              href={cta.href}
              className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-[#8d171c] px-7 py-3.5 font-semibold transition hover:bg-[#b01e24]"
            >
              {cta.button} <ArrowRight size={18} />
            </Link>
          </div>
        )}

        <div className="mt-14 print:hidden">
          <h2 className="mb-5 text-xl font-bold text-gray-900">More free tools</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/resources/${t.slug}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <ToolVisual tool={t} />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 transition group-hover:text-[#8d171c]">{t.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{t.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
