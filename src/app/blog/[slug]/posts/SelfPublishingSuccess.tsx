// app/blog/[slug]/posts/SelfPublishingSuccess.tsx

import {
  CheckCircle,
  BookOpen,
  PenTool,
  Palette,
  Globe,
  Megaphone,
  TrendingUp,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

const stages = [
  {
    number: '01',
    icon: BookOpen,
    phase: 'Understand',
    title: 'Understanding the Self-Publishing Path',
    intro:
      'The publishing world has experienced a dramatic transformation over the past two decades. At the heart of this revolution is self-publishing — a model that empowers authors to take their books directly to readers.',
    points: [
      'Ownership: self-published authors retain full rights to their work.',
      "Control: you choose how your book looks, where it's sold, and how it's priced.",
      'Timeline: a much quicker route to market — sometimes within days.',
      'Higher royalties: up to 70% on platforms like Amazon KDP vs 10–15% traditionally.',
    ],
  },
  {
    number: '02',
    icon: PenTool,
    phase: 'Prepare',
    title: 'Preparing Your Manuscript for Publishing',
    intro:
      'Before your book reaches the marketplace, it must pass through one of the most crucial phases: manuscript preparation.',
    points: [
      'Write with your reader in mind — know their interests, needs, and problems.',
      'Self-edit: take a break, read aloud, cut filler, break up long sentences.',
      'Use tools like Grammarly, ProWritingAid, and Hemingway Editor.',
      'Hire a professional editor — developmental, copyediting, and proofreading.',
    ],
  },
  {
    number: '03',
    icon: Palette,
    phase: 'Design',
    title: 'Designing and Formatting Your Book',
    intro:
      'Readers often judge a book by its cover, and presentation can make or break your sales. This stage is where your manuscript becomes a product.',
    points: [
      'Invest in a professional cover designer — $100 to $500+ pays for itself.',
      'Format for print: margins, gutters, chapter headings, trim sizes (5"x8" or 6"x9").',
      'Format for ebook: clickable TOC, reflowable text, compatible with Kindle and Apple Books.',
      'Get an ISBN — free through KDP (with Amazon as publisher) or purchase your own.',
    ],
  },
  {
    number: '04',
    icon: Globe,
    phase: 'Distribute',
    title: 'Choosing Platforms and Managing Distribution',
    intro:
      'Once your manuscript is polished, the next crucial step is deciding where and how to publish it.',
    points: [
      'Amazon KDP — largest ebook retailer, great for visibility.',
      'Draft2Digital — wide distribution to Apple Books, Barnes & Noble, Kobo.',
      'IngramSpark — expanded print distribution to bookstores and libraries.',
      'Print-on-Demand means no inventory, no upfront printing costs.',
    ],
  },
  {
    number: '05',
    icon: Megaphone,
    phase: 'Market',
    title: 'Marketing and Monetizing Your Book',
    intro:
      'Publishing your book is only half the journey; marketing and monetization are where the real magic happens.',
    points: [
      'Build your author brand and website — voice, visuals, values.',
      'Leverage social media: pick 1–2 platforms where your readers are.',
      'Email marketing: start a mailing list early with a free story or chapter.',
      'Launch strategy: build anticipation, host a virtual launch, send ARCs to reviewers.',
      'Promotions: discount periods, BookBub, Freebooksy, targeted ads.',
    ],
  },
  {
    number: '06',
    icon: TrendingUp,
    phase: 'Grow',
    title: 'Tracking Sales and Iterating',
    intro:
      'Sales tracking and iteration turn a launch into a sustainable business.',
    points: [
      'Monitor metrics: KDP dashboard, Book Report, or similar tools.',
      'Note spikes during promos, ads, or newsletter sends.',
      'Improve blurbs, keywords, or covers if conversion is weak.',
      'Treat pricing as an experiment — not a one-time decision.',
    ],
  },
];

export default function SelfPublishingSuccess() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — with sticky-looking stage rail intro */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Self-Publishing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Self-Publishing Success: From Manuscript to Marketplace
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          Without a traditional publisher — on your own terms.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            In today&apos;s digital age, authors no longer need to wait for a nod from traditional publishers to see their stories come to life. With accessible tools and platforms, self-publishing has become a powerful and legitimate path for writers to take full control of their creative journey.
          </p>

          <p>
            Self-publishing success isn&apos;t just about uploading a file online. It&apos;s a carefully navigated process involving writing, editing, designing, marketing, and distributing your work. But the rewards? They&apos;re immense — full rights, higher royalties, and a direct relationship with your audience.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              Not sure if self-publishing is right for you? Read our{' '}
              <Link href="/blog/faith-fueled-guide-to-self-publishing-your-book" className="text-red-600 hover:underline font-semibold">
                faith-fueled guide to self-publishing
              </Link>{' '}
              for a different angle on the decision.
            </p>
          </div>
        </div>
      </header>

      {/* Stage rail — visual progress indicator */}
      <section className="bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-3xl p-6">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4 text-center">
          The Six Stages
        </p>
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={i} className="flex items-center gap-2 flex-shrink-0">
                <div className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-red-200 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                    {stage.phase}
                  </span>
                </div>
                {i < stages.length - 1 && (
                  <div className="w-6 h-px bg-red-200 flex-shrink-0 mb-6" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Stages — numbered cards with big phase badges */}
      <section className="space-y-10">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <div
              key={i}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Stage number watermark */}
              <span
                aria-hidden="true"
                className="absolute top-6 right-8 text-[5rem] md:text-[7rem] font-bold leading-none text-gray-50 select-none"
              >
                {stage.number}
              </span>

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
                      Stage {stage.number} — {stage.phase}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      {stage.title}
                    </h2>
                  </div>
                </div>

                {/* Intro */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {stage.intro}
                </p>

                {/* Points */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <p className="font-medium text-gray-900 mb-4">
                    Key actions:
                  </p>
                  <ul className="space-y-3">
                    {stage.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Empowering conclusion */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
            <DollarSign className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl font-bold">
            Your Path to Self-Publishing Success
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have you ever imagined holding your published book, feeling the weight of your words transformed into pages? That&apos;s not just a dream; it&apos;s a destination within reach.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Think about the stories that have inspired you. Now, envision your story doing the same for someone else.
          </p>

          <p className="text-red-400 font-medium text-lg">
            Starting can be the hardest part. But every author you&apos;ve admired once faced a blank page, just like you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Bring Your Book to Life?
          </h2>

          <p className="text-red-100 text-lg leading-relaxed">
            Imagine a partner who handles the heavy lifting — editing, design, and distribution — so you can focus on your passion: writing. At LO Publications, you keep 100% of your royalties and complete creative control.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-red-600 font-semibold hover:bg-gray-100 transition-all duration-300">
            Start Your Publishing Journey
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/faith-fueled-guide-to-self-publishing-your-book" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop"
                alt="Faith-fueled self-publishing"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                A Faith-Fueled Guide to Self-Publishing Your Book
              </h4>
              <p className="text-gray-500 text-sm mt-2">For the aspiring author who&apos;s been called to write — and ready to step into action.</p>
            </div>
          </Link>
          <Link href="/blog/7-common-writing-mistakes-editors-hate" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
                alt="Common writing mistakes"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                7 Common Writing Mistakes Editors Hate
              </h4>
              <p className="text-gray-500 text-sm mt-2">Sharpen your craft and avoid the mistakes that get manuscripts rejected.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}