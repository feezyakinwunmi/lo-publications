// app/blog/[slug]/posts/FaithFueledSelfPublishing.tsx

import {
  CheckCircle,
  Heart,
  PenTool,
  Palette,
  Globe,
  DollarSign,
  Megaphone,
  Rocket,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: Heart,
    title: 'Pray & Plan',
    intro:
      'Before any strategy, come back to the source.',
    points: [
      'Pray over your project. What is God saying about the timing? The purpose? The audience?',
      'Define your "why." Is this book meant to heal, teach, share a testimony, or encourage others in their walk of faith?',
      'Clarify your message. If you had only one sentence to describe what your book is about, what would it be?',
    ],
    callout:
      'Let the answers to these questions guide every decision from here on out.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Edit Like It Matters — Because It Does',
    intro:
      'Your message is powerful — but how you deliver it matters just as much.',
    points: [
      'Don\'t skip editing. A spiritually rich book still needs structural flow, grammar checks, and sentence-level polish.',
      'Hire a faith-sensitive editor — someone who understands both the mechanics of writing and the heart behind it.',
      'Read your manuscript out loud to catch awkward phrasing.',
    ],
    callout:
      'This is where many self-publishing authors stumble. Don\'t be one of them.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design a Book That Reflects Its Message',
    intro:
      'First impressions happen in milliseconds — online and in bookstores.',
    points: [
      'Cover design matters. Invest in a professional cover that reflects your message and genre.',
      'Interior formatting should be clean, easy to read, and aligned with publishing standards.',
      'Faith-filled doesn\'t mean low-budget. Your book deserves to look as powerful as its message.',
    ],
    callout:
      'A book that looks cheap will be treated like it is cheap — regardless of what\'s inside.',
  },
  {
    number: '04',
    icon: Globe,
    title: 'Choose Your Publishing Platform',
    intro:
      'Self-publishing gives you control — but it also means making smart choices.',
    points: [
      'Amazon KDP — for print and Kindle.',
      'IngramSpark — for expanded distribution to bookstores and libraries.',
      'Draft2Digital — for multiple eBook outlets.',
      'Most authors use a combination. KDP for visibility. IngramSpark for bookstore potential.',
    ],
    callout:
      'Don\'t commit to one platform until you understand what each one is optimized for.',
  },
  {
    number: '05',
    icon: DollarSign,
    title: 'Set Your Price & Royalties',
    intro:
      'Pricing can feel tricky, but there\'s a basic framework.',
    points: [
      'eBooks: $2.99–$6.99.',
      'Paperbacks: $12.99–$19.99 (depending on genre and page count).',
      'Royalties: Vary by platform, but often 35%–70% depending on list price and distribution.',
      'Don\'t undervalue your work — but do price it to reach the audience God has put on your heart.',
    ],
    callout:
      'Price for reach — not for ego.',
  },
  {
    number: '06',
    icon: Megaphone,
    title: 'Market With Purpose, Not Pressure',
    intro:
      'Marketing your book doesn\'t have to feel like self-promotion — it can be ministry.',
    points: [
      'Build your author platform. Start with one or two social media channels where your audience is active.',
      'Create content that serves. Share pieces of your book, behind-the-scenes writing reflections, or faith insights.',
      'Use email wisely. Build a small list of readers who care about your message. Serve them well.',
    ],
    callout:
      'If you\'ve written with purpose, you can promote with confidence.',
  },
  {
    number: '07',
    icon: Rocket,
    title: 'Launch & Steward',
    intro:
      'Your launch day is not the finish line — it\'s the beginning.',
    points: [
      'Host a virtual or in-person launch (even if it\'s small).',
      'Offer signed copies to early supporters.',
      'Pray over every book sent out — it\'s not just paper; it\'s purpose.',
      'Celebrate faithfully and then… keep going. Your first book opens the door to your next.',
    ],
    callout:
      'Steward the message. Don\'t just ship it.',
  },
];

export default function FaithFueledSelfPublishing() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — warm, faith-forward */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <Heart className="w-4 h-4" />
          Self-Publishing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          A Faith-Fueled Guide to Self-Publishing Your Book
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          For the aspiring author who&apos;s been called to write — and ready to step into action.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            You&apos;ve prayed. You&apos;ve written. You&apos;ve felt the pull to share your story, your testimony, or your spiritual insight with the world. But now comes the question many faith-driven writers face:
          </p>

          <p className="text-gray-900 font-medium text-xl">
            Should I self-publish?
          </p>

          <p>
            The good news? You absolutely can. Self-publishing has become an empowering, accessible path for authors who are ready to steward their message with excellence — on their own terms.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              If you&apos;re still weighing the wider decision, read our guide on{' '}
              <Link
                href="/blog/self-publishing-success-from-manuscript-to-marketplace"
                className="text-red-600 hover:underline font-semibold"
              >
                self-publishing success
              </Link>
              .
            </p>
          </div>
        </div>
      </header>

      {/* Scripture-style opening frame */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-8 md:p-10 text-center">
        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">
          A Seven-Step Path
        </p>
        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed max-w-2xl mx-auto">
          &ldquo;Obedience over outcome. Publishing your book isn&apos;t just about sales or spotlight — it&apos;s about being faithful to the message God has given you.&rdquo;
        </p>
      </section>

      {/* Seven steps */}
      <section className="space-y-10">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Step number watermark */}
              <span
                aria-hidden="true"
                className="absolute top-6 right-8 text-[5rem] md:text-[6rem] font-bold leading-none text-gray-50 select-none"
              >
                {step.number}
              </span>

              <div className="relative z-10 space-y-5">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
                      Step {step.number}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 leading-snug pr-16">
                      {step.title}
                    </h2>
                  </div>
                </div>

                {/* Intro */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.intro}
                </p>

                {/* Points */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {step.points.map((point, idx) => (
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

                {/* Callout */}
                {step.callout && (
                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
                    <p className="text-gray-700 italic leading-relaxed">
                      {step.callout}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bonus — when to partner with a publisher */}
      <section className="space-y-8">
        <div className="bg-gray-900 text-white rounded-[2rem] p-10 md:p-14">
          <div className="max-w-3xl space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl font-bold">
              When to Partner With a Publisher
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              You don&apos;t have to walk this alone. If you&apos;re overwhelmed by editing, design, or distribution — or if you simply want to partner with a team that prays with you and believes in your message — a hybrid publisher like LO Publications might be the right fit.
            </p>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              {[
                'Professional editing & design',
                'Faith-aligned publishing support',
                'Marketing strategy and launch guidance',
                'Long-term vision development for authors',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Obedience Over Outcome
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              At the end of the day, publishing your book isn&apos;t just about sales or spotlight — it&apos;s about obedience. It&apos;s about being faithful to the message God has given you and trusting Him to guide every step.
            </p>

            <p className="text-gray-900 font-medium">
              So take the step. Write the words. Finish the work. And release your message into the world — with love and obedience.
            </p>

            <p className="text-gray-600 text-sm">
              If you&apos;re still shaping your message, our guide on{' '}
              <Link
                href="/blog/integrating-faith-and-creativity-in-writing"
                className="text-red-600 hover:underline"
              >
                integrating faith and creativity in writing
              </Link>{' '}
              pairs naturally with this.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where Faith Meets Publishing
          </h2>

          <p className="text-red-100 text-lg leading-relaxed">
            LO Publications: Where faith meets publishing, and purpose becomes legacy.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-red-600 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Submit Your Manuscript <Rocket className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/blog/self-publishing-success-from-manuscript-to-marketplace"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop"
                alt="Self-publishing success"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Self-Publishing Success: From Manuscript to Marketplace
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                How to publish your book without a traditional publisher.
              </p>
            </div>
          </Link>
          <Link
            href="/blog/integrating-faith-and-creativity-in-writing"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
                alt="Faith and creativity in writing"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Integrating Faith and Creativity in Writing
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                How faith-driven writers can unite spiritual conviction with creative excellence.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}