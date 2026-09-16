// app/blog/[slug]/posts/WhyTeensShouldWrite.tsx

import {
  CheckCircle,
  Sparkles,
  TrendingUp,
  Heart,
  BookOpen,
  Mic,
  Award,
  Globe,
  PenLine,
} from 'lucide-react';
import Link from 'next/link';

const reasons = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Writing Builds Confidence and Creates Opportunity',
    stat: '34%',
    statLabel:
      'Students with strong writing skills are 34% more likely to succeed academically and pursue higher education (National Writing Project).',
    body: 'Whether you\'re applying to college, pitching for a scholarship, or crafting a business idea, being able to clearly express your thoughts gives you an undeniable edge.',
    actions: [
      'Start writing regularly — even 10 minutes a day counts.',
      'Practice expressing your opinion on real-world topics.',
      'Rewrite your own bio or college essay until it reflects who you really are.',
    ],
  },
  {
    number: '02',
    icon: Mic,
    title: 'Social Media Writing Amplifies Your Voice',
    example:
      'Malala Yousafzai began blogging at age 11 about education under Taliban rule. Her words reached the world.',
    body: 'The content you create now can influence real people. Blogs, Instagram captions, TikTok scripts — these are modern publishing platforms.',
    actions: [
      'Pick one issue you care about and write posts around it.',
      'Start a free blog on Medium or Substack. You don\'t need permission to publish.',
      'Be intentional about what you share — your voice has reach.',
    ],
  },
  {
    number: '03',
    icon: Heart,
    title: 'Writing Supports Emotional Health',
    stat: 'Journaling',
    statLabel:
      'Journaling reduces stress, improves mood, and helps people process trauma (University of Texas at Austin).',
    body: 'Mental clarity and emotional resilience are essential — especially during the chaos of being a teen.',
    actions: [
      'Write without judgment. Set a timer for 5 minutes and just start.',
      'Don\'t overthink grammar — focus on honesty.',
      'Track what\'s actually going on in your mind, not what you "should" feel.',
    ],
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Creative Writing Can Change Lives',
    example:
      'J.K. Rowling wrote Harry Potter during some of the darkest years of her life.',
    body: 'Your stories could evolve into books, scripts, video games, or films. Creative writing builds discipline, imagination, and purpose.',
    actions: [
      'Start writing stories — even short ones.',
      'Join writing communities like Wattpad or Scribophile.',
      'Set a 30-day goal: write a short story or chapter a week.',
    ],
  },
  {
    number: '05',
    icon: Globe,
    title: 'Writing Is a Tool for Real-World Change',
    example:
      'Greta Thunberg started with a simple essay on climate change. It sparked a global movement.',
    body: 'Change begins with clarity. Writing gives you that clarity — and a way to mobilize others.',
    actions: [
      'Write a letter, speech, or blog post about a cause you care about.',
      'Submit it to a youth publication or read it at a local event.',
      'Keep refining your message. Words become action when they\'re clear and repeated.',
    ],
  },
  {
    number: '06',
    icon: TrendingUp,
    title: 'Writing Can Make You Money',
    stat: '$25–$100',
    statLabel:
      'Teen freelance writers earn $25–$100 per article. Many sell stories, run blogs, or build audiences that pay.',
    body: 'Writing isn\'t just creative — it\'s marketable. And most careers need it.',
    actions: [
      'Practice writing emails, sales copy, or blog content.',
      'Pitch short articles to youth platforms or magazines.',
      'Start a niche blog and monetize it through ads or affiliate links.',
    ],
  },
  {
    number: '07',
    icon: Award,
    title: 'Writing Preserves Your Legacy',
    example:
      'Anne Frank wrote her diary between the ages of 13 and 15. She didn\'t know she was writing one of the most powerful books in human history.',
    body: 'You may not realize the importance of your story — yet. But others will.',
    actions: [
      'Keep a journal or audio log. Revisit it monthly.',
      'Write down key moments from your life, even if they seem small.',
      'Ask yourself: What do I want future generations to know about me?',
    ],
  },
  {
    number: '08',
    icon: PenLine,
    title: 'Writing Sharpens Critical Thinking',
    stat: 'Problem-solving',
    statLabel:
      'Writing improves problem-solving and metacognition — your ability to think about your own thinking (Journal of Writing Research).',
    body: 'Whether you\'re debating, designing, or dreaming up a business, your ideas need structure. Writing gives you that structure.',
    actions: [
      'Write about your thought process — how do you decide what matters?',
      'After every project or challenge, write a short reflection: What worked? What didn\'t?',
      'Use writing to teach something you just learned.',
    ],
  },
  {
    number: '09',
    icon: Heart,
    title: 'Writing Builds Real Connections',
    example:
      'Beth Reekles wrote The Kissing Booth on Wattpad at 15. She built an audience, signed a publishing deal, and got a Netflix movie deal.',
    body: 'Writing helps you find your people — whether they\'re readers, collaborators, or mentors.',
    actions: [
      'Join writing forums or Discord servers. Offer feedback and get some in return.',
      'Comment meaningfully on others\' work to start conversations.',
      'Collaborate, co-write, edit, or guest post with someone your age.',
    ],
  },
  {
    number: '10',
    icon: Globe,
    title: 'Writing Helps You Discover Who You Are',
    stat: '93%',
    statLabel:
      '93% of teens write outside school — through social media, notes, texts, or journals (Pew Research Center).',
    body: 'Writing is how you figure out what you believe, what drives you, and what you stand for. It gives you direction.',
    actions: [
      'Write a personal manifesto. What are your core values?',
      'Keep a "Why I write" document. Revisit and update it regularly.',
      'Set monthly writing goals that align with your identity.',
    ],
  },
];

export default function WhyTeensShouldWrite() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — bold statement */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Teen Writing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Why More Teens Should Write
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          Unlock Your Voice, Power, and Future.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            Writing is one of the most powerful tools you already have, and most people don&apos;t realize it. It&apos;s not just something schools make you do. It&apos;s how you build confidence, claim your voice, sharpen your thinking, and create opportunities.
          </p>

          <p className="text-gray-900 font-medium text-lg">
            It&apos;s how people your age have started movements, built careers, and changed the world.
          </p>
        </div>
      </header>

      {/* Numbered reasons with stat callouts */}
      <section className="space-y-10">
        {reasons.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <div
              key={i}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Watermark number */}
              <span
                aria-hidden="true"
                className="absolute top-6 right-8 text-[5rem] md:text-[6rem] font-bold leading-none text-gray-50 select-none"
              >
                {reason.number}
              </span>

              <div className="relative z-10 space-y-5">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug pr-16">
                    {reason.title}
                  </h2>
                </div>

                {/* Stat or example callout */}
                {reason.stat && (
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 border-l-4 border-red-500 rounded-r-2xl p-5">
                    <p className="text-3xl font-bold text-red-600 mb-1">
                      {reason.stat}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {reason.statLabel}
                    </p>
                  </div>
                )}

                {reason.example && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-5">
                    <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
                      Example
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      {reason.example}
                    </p>
                  </div>
                )}

                {/* Body */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {reason.body}
                </p>

                {/* Actions */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <p className="font-medium text-gray-900 mb-4">
                    What to do:
                  </p>
                  <ul className="space-y-3">
                    {reason.actions.map((action, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* The Bigger Picture */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl font-bold">
            Writing Isn&apos;t Schoolwork. It&apos;s Survival, Strategy, and Self-Expression.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Before school systems existed, we wrote on cave walls, clay tablets, and scrolls. Writing helped humans store memory, preserve wisdom, and build civilizations. That hasn&apos;t changed.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Writing is how humans program reality. It&apos;s how we communicate laws, organize beliefs, and build movements. It is the original code — and unlike apps or trends, it doesn&apos;t go out of style.
          </p>

          <p className="text-red-400 font-medium text-lg">
            You don&apos;t need to wait for a grade, a class, or someone&apos;s approval. You just need a pen, a keyboard, or your voice.
          </p>
        </div>
      </section>

      {/* Getting started — steps */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Write Now: 5 Steps to Start Today
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: 1, label: 'Choose a Format', body: 'Journal, blog, story, or caption.' },
            { step: 2, label: 'Set a Micro Goal', body: '10 minutes a day. No editing.' },
            { step: 3, label: 'Share Selectively', body: 'Post or share with a trusted circle.' },
            { step: 4, label: 'Reflect Monthly', body: 'Review what you\'ve written.' },
            { step: 5, label: 'Level Up', body: 'Try speeches, scripts, essays, pitches.' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center"
            >
              <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">
                {s.step}
              </div>
              <p className="font-semibold text-gray-900 mb-2 text-sm">
                {s.label}
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            You Have a Voice. Writing Is How You Amplify It.
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Use it to document your journey, speak your truth, and change your future.
            </p>

            <p className="text-red-600 font-semibold text-xl">
              Start writing. Today.
            </p>

            <p className="text-gray-600 text-sm">
              If you&apos;re ready to take it further, see our guide on{' '}
              <Link
                href="/blog/how-to-build-a-long-term-writing-career-digital-publishing"
                className="text-red-600 hover:underline"
              >
                building a long-term writing career
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Your Voice Matters
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            At LO Publications, we champion young writers. Whether you&apos;re just starting or ready to publish, we help you take the next step.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Share Your Work
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
            href="/blog/how-to-build-a-long-term-writing-career-digital-publishing"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
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
              <p className="text-gray-500 text-sm mt-2">
                A sustainable career in the digital publishing era.
              </p>
            </div>
          </Link>
          <Link
            href="/blog/building-a-reading-habit-tips-for-young-readers"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                alt="Building a reading habit"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Building a Reading Habit: Tips for Young Readers
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                Practical tips to help children fall in love with reading.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}