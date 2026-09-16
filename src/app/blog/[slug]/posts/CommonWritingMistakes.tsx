// app/blog/[slug]/posts/CommonWritingMistakes.tsx

import { CheckCircle, AlertCircle, ArrowRight, X, Quote } from 'lucide-react';
import Link from 'next/link';

const mistakes = [
  {
    number: 1,
    title: 'Ignoring the Style Guide',
    intro:
      'When you submit a piece to a publication without following its style guide, you\'re essentially saying, "I didn\'t bother to understand your rules."',
    detail:
      'Every publication, whether it\'s a blog, magazine, or news outlet, has a unique tone, structure, and set of formatting guidelines. Disregarding them shows a lack of preparation, attention to detail, and professionalism.',
    fix: 'Always read the guidelines, and if they aren\'t provided, study a few published pieces to understand the unwritten rules.',
  },
  {
    number: 2,
    title: 'Weak or Misleading Headlines',
    intro:
      'Headlines are the first and often only chance to hook your reader and grab an editor\'s interest.',
    detail:
      'When a title is too broad, generic, or misleading, it fails to set accurate expectations for the reader.',
    before: 'Writing Tips',
    after: 'Avoid These 7 Common Writing Mistakes That Editors Hate',
    fix: 'Be specific. Use numbers. Incorporate emotion or urgency. Avoid clickbait.',
  },
  {
    number: 3,
    title: 'Overusing Passive Voice',
    intro:
      'While it isn\'t grammatically incorrect, passive constructions tend to weaken your writing by making it sound dull, impersonal, or ambiguous.',
    detail:
      'In passive voice, the object of the action comes before the subject, and the doer of the action is either relegated to the end of the sentence or left out entirely.',
    before: 'The article was written by Sarah.',
    after: 'Sarah wrote the article.',
    fix: 'Look for forms of "to be" (is, was, were, are) followed by a past participle. Then ask, "Who is doing the action?" If that\'s unclear, rewrite in active voice.',
  },
  {
    number: 4,
    title: 'Wordiness and Repetition',
    intro:
      'One of the fastest ways to frustrate an editor or lose your reader\'s attention is through wordiness and repetition.',
    detail:
      'Phrases like "each and every," "absolutely essential," "in my personal opinion," or "future plans" may sound natural but are actually redundant.',
    before: 'In my personal opinion, I believe this is absolutely essential.',
    after: 'In my opinion, this is essential.',
    fix: 'Replace phrases with single, stronger words. Avoid repeating the same idea. Read your draft out loud.',
  },
  {
    number: 5,
    title: 'Grammar and Spelling Errors',
    intro:
      'One of the quickest ways to lose an editor\'s interest is by submitting content riddled with grammar and spelling errors.',
    detail:
      'These mistakes are more than just small slip-ups — they signal carelessness, lack of polish, and a disregard for the editor\'s time.',
    before: 'Let\'s eat Grandma!',
    after: 'Let\'s eat, Grandma!',
    fix: 'Read your piece out loud. Ask someone else to review your draft. Take a break before editing.',
  },
  {
    number: 6,
    title: 'Poor Structure and Flow',
    intro:
      'Even if your grammar is perfect and your ideas are strong, poor organization can make your content feel jumbled, confusing, or just plain hard to follow.',
    detail:
      'A well-structured article guides the reader naturally from point to point. Without this, your writing can feel like a puzzle with missing pieces.',
    fix: 'Outline your main points. Use headings and subheadings. Start each section with a clear topic sentence. Use transition words.',
  },
  {
    number: 7,
    title: 'Failure to Fact-Check',
    intro:
      'One of the quickest ways to lose an editor\'s trust and your chance at publication is to submit a piece riddled with unchecked or incorrect facts.',
    detail:
      'If an editor spots a factual error, even a small one, it raises red flags about the rest of your work.',
    fix: 'Cross-reference at least two trustworthy sources. Link directly to official data. Include the year and source when citing stats. If unsure, leave it out.',
  },
];

export default function CommonWritingMistakes() {
  return (
    <article className="max-w-5xl mx-auto space-y-20">
      {/* Hero — centered, warning banner style */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <AlertCircle className="w-4 h-4" />
          Writing Craft
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          7 Common Writing Mistakes Editors Hate
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed">
          Avoid these seven mistakes and your writing will be sharper, tighter, and way more publishable.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Quote className="w-4 h-4" />
          <span>A behind-the-scenes guide for serious writers.</span>
        </div>
      </header>

      {/* Why mistakes hurt */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Mistakes Undermine Credibility',
            content:
              'Frequent errors can make you seem inexperienced or unprofessional — even if you know your subject well.',
          },
          {
            title: 'Readers Notice — And So Do Algorithms',
            content:
              'Sloppy writing hurts readability, leading to higher bounce rates, lower engagement, and poor SEO.',
          },
          {
            title: 'Consistency Builds Trust',
            content:
              'Publications have reputations to maintain. Mistakes in formatting, tone, or facts damage that consistency.',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-red-50 border border-red-100 rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {item.content}
            </p>
          </div>
        ))}
      </section>

      {/* Mistakes — accordion-style rows */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            The Seven Mistakes
          </h2>
          <p className="text-lg text-gray-600">
            Each one is fixable. Each fix makes your writing stronger.
          </p>
        </div>

        <div className="space-y-6">
          {mistakes.map((mistake, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header row */}
              <div className="flex items-center gap-5 p-6 md:p-8 border-b border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  {mistake.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {mistake.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-5">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {mistake.intro}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {mistake.detail}
                </p>

                {/* Before/After */}
                {(mistake.before || mistake.after) && (
                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    {mistake.before && (
                      <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <X className="w-4 h-4 text-red-600" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                            Before
                          </span>
                        </div>
                        <p className="text-gray-700 italic">
                          {mistake.before}
                        </p>
                      </div>
                    )}
                    {mistake.after && (
                      <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                            After
                          </span>
                        </div>
                        <p className="text-gray-700 italic">
                          {mistake.after}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Fix */}
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5">
                  <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
                    The Fix
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {mistake.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion — magazine-style */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">
            Become an Editor&apos;s Favourite
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            So, you&apos;ve been honing your writing skills, dodging those pesky mistakes that make editors cringe. But what&apos;s the next step in your journey to becoming a published author?
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Imagine having a team that not only respects your content but also amplifies it. At LO Publications, we believe that every author deserves complete control over their work.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Our seasoned professionals take care of design, editing, distribution, and marketing — so you can focus on what you do best: writing.
          </p>

          <p className="text-red-400 font-medium text-lg">
            Are you ready to transform your manuscript into a masterpiece?
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Partner With LO Publications
          </h2>

          <p className="text-red-100 text-lg leading-relaxed">
            Let us help you navigate the path to publishing success. Your story deserves to be told — and we&apos;re here to ensure it&apos;s heard loud and clear.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-red-600 font-semibold hover:bg-gray-100 transition-all duration-300">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/self-publishing-success-from-manuscript-to-marketplace" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
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
              <p className="text-gray-500 text-sm mt-2">How to publish your book without a traditional publisher.</p>
            </div>
          </Link>
          <Link href="/blog/how-to-build-a-long-term-writing-career-digital-publishing" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="Long-term writing career"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                How to Build a Long-Term Writing Career
              </h4>
              <p className="text-gray-500 text-sm mt-2">A sustainable career in the digital publishing era.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}