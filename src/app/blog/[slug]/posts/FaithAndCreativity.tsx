// app/blog/[slug]/posts/FaithAndCreativity.tsx

import {
  CheckCircle,
  Heart,
  Feather,
  Compass,
  BookOpen,
  Users,
  Send,
} from 'lucide-react';
import Link from 'next/link';

const principles = [
  {
    icon: Feather,
    eyebrow: 'Foundation',
    title: 'The Spiritual Foundation of Creativity',
    quote:
      'In the beginning, God created the heavens and the earth. (Genesis 1:1)',
    quoteContext: 'Creativity as an inherently divine act.',
    paragraphs: [
      'Faith and creativity have long been intertwined, forming a profound connection that transcends religion, culture, and time. When writers root their creative process in faith, their work takes on a richer, more meaningful dimension.',
      'This connection acknowledges that creativity is not merely a human talent but a divine gift — a sacred calling to co-create with the Creator.',
    ],
    points: [
      'Faith instills purpose and direction into the writing process.',
      'Writers of faith are motivated by hope, love, justice, and redemption.',
      'Faith provides the lens through which the world is seen differently.',
      'Faith offers a wellspring of emotional and spiritual resilience.',
    ],
  },
  {
    icon: Compass,
    eyebrow: 'Direction',
    title: 'Faith as a Creative Compass',
    quote:
      'Your word is a lamp for my feet, a light on my path. (Psalm 119:105)',
    quoteContext: 'Faith guides decisions, tone, and endurance.',
    paragraphs: [
      'Faith serves as more than a belief system; it becomes a compass, subtly and powerfully directing the heart of a writer\'s creativity.',
      'It provides not only the why behind the work, but also the how — guiding decisions, tone, and even the emotional endurance needed to complete a project.',
    ],
    points: [
      'Storytelling rooted in faith carries themes of redemption, hope, and transformation.',
      'Narratives reflect a moral framework and deeper meaning.',
      'Patience and trust become virtues in the creative process.',
      'Writing becomes a form of service — a calling rather than a career.',
    ],
  },
  {
    icon: Heart,
    eyebrow: 'Voice',
    title: 'Finding Voice and Purpose Through Faith',
    quote:
      'Let your light shine before others. (Matthew 5:16)',
    quoteContext: 'Authenticity as the cornerstone of impactful writing.',
    paragraphs: [
      'Discovering your voice as a writer is a journey of self-awareness, expression, and alignment. When faith becomes part of that journey, it transforms why and how you write.',
      'Authenticity means being real, sharing your thoughts, doubts, joys, and spiritual reflections without pretense.',
    ],
    points: [
      'Share your struggles alongside your victories.',
      'Let your imperfections illustrate the grace you\'ve received.',
      'Choose the genre that best carries your message.',
      'Experiment with tone, structure, and form to refine your voice.',
    ],
  },
  {
    icon: BookOpen,
    eyebrow: 'Craft',
    title: 'Crafting Impactful and Ethical Faith-Based Work',
    quote:
      'Whatever you do, work at it with all your heart. (Colossians 3:23)',
    quoteContext: 'Honouring the message without compromising the craft.',
    paragraphs: [
      'When faith meets writing, the result can be deeply moving and spiritually enriching. But crafting impactful faith-based work requires a thoughtful balance.',
      'It\'s not just about what you believe; it\'s about how you communicate those beliefs in ways that are both engaging and respectful.',
    ],
    points: [
      'Develop rich, relatable characters rather than stereotypes.',
      'Let themes emerge naturally through the narrative.',
      'Avoid preachiness — show faith in action.',
      'Respect diverse beliefs and avoid one-dimensional portrayals.',
      'Write with integrity: no plagiarism, no exaggeration, no manipulation.',
    ],
  },
  {
    icon: Users,
    eyebrow: 'Practice',
    title: 'Building a Spirit-Led Writing Lifestyle',
    quote:
      'Be still, and know that I am God. (Psalm 46:10)',
    quoteContext: 'Making room for Spirit-led creativity.',
    paragraphs: [
      'A spirit-led writing lifestyle places faith at the centre of the creative process. It\'s about inviting your faith to guide how, when, where, and why you write.',
      'When spiritual practices and routines align with writing goals, the result is deep, meaningful connection with your craft and your Creator.',
    ],
    points: [
      'Start with prayer and spiritual intent before writing.',
      'Establish sacred rhythms and routines.',
      'Create a sacred writing space — intentional, peaceful.',
      'Seek community support from like-minded writers.',
      'Stay accountable spiritually and creatively.',
    ],
  },
  {
    icon: Send,
    eyebrow: 'Publish',
    title: 'Sharing and Publishing Faith-Infused Stories',
    quote:
      'Let the message of Christ dwell among you richly. (Colossians 3:16)',
    quoteContext: 'Publishing as an act of obedience.',
    paragraphs: [
      'Publishing faith-infused stories is both a rewarding and strategic process. It\'s not just about finishing your manuscript — it\'s getting it into the right hands.',
      'Traditional Christian publishers like Thomas Nelson and Tyndale House specialize in books with spiritual themes. Self-publishing offers full creative control.',
    ],
    points: [
      'Explore traditional Christian publishers and self-publishing routes.',
      'Write for secular audiences with integrity — universal themes resonate.',
      'Face criticism with grace and growth.',
      'Market with purpose, not pressure — build authentic relationships.',
      'Learn from established faith-based authors.',
    ],
  },
];

export default function FaithAndCreativity() {
  return (
    <article className="space-y-20">
      {/* Hero */}
      <header className="max-w-4xl mx-auto space-y-8 px-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Faith & Writing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Integrating Faith and Creativity in Writing
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          For those guided by faith, creativity becomes more than a skill — it becomes a calling.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            Writing is a powerful expression of the human spirit. It is a canvas where imagination, experience, and values converge. Integrating faith and creativity in writing allows authors to express deeper truths, inspire hope, and share stories that resonate spiritually and emotionally.
          </p>

          <p>
            Whether you&apos;re crafting fiction, devotionals, or personal essays, your faith can inform your voice, shape your message, and touch the hearts of readers. But how do you blend conviction with creativity without compromising either?
          </p>
        </div>
      </header>

      {/* Six principles with scripture pull-quotes */}
      <section className="space-y-0">
        {principles.map((principle, i) => {
          const Icon = principle.icon;
          const isAlt = i % 2 === 1;
          return (
            <div key={i} className={isAlt ? 'bg-gray-50 py-14 md:py-16' : 'py-14 md:py-16'}>
              <div className="max-w-4xl mx-auto px-6 space-y-6">
                {/* Header */}
                <div className="md:flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                      {principle.eyebrow}
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      {principle.title}
                    </h2>
                  </div>
                </div>

                {/* Scripture pull-quote */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 border-l-4 border-red-500 rounded-r-3xl p-6 md:p-8">
                  <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-2">
                    &ldquo;{principle.quote}&rdquo;
                  </p>
                  <p className="text-sm text-red-600 font-medium">
                    {principle.quoteContext}
                  </p>
                </div>

                {/* Paragraphs */}
                {principle.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                    {p}
                  </p>
                ))}

                {/* Points */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6">
                  <p className="font-medium text-gray-900 mb-4">
                    Key practices:
                  </p>
                  <ul className="space-y-3">
                    {principle.points.map((point, idx) => (
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

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              A Sacred Calling
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Integrating faith and creativity in writing is more than a stylistic choice; it&apos;s a way of life. It means allowing your beliefs to guide not only what you write, but how you write and why you write.
              </p>

              <p>
                When you let your faith shape your creative process, you create with deeper purpose, compassion, and conviction. Your words become more than stories or poems — they become reflections of your soul and expressions of the divine spark within you.
              </p>

              <p>
                Whether you&apos;re writing devotionals, fiction, poetry, or memoirs, your faith can elevate your work from mere content to meaningful contribution.
              </p>

              <p className="text-gray-600 text-sm">
                Exploring where to publish? See our guide on{' '}
                <Link href="/blog/faith-fueled-guide-to-self-publishing-your-book" className="text-red-600 hover:underline">
                  a faith-fueled guide to self-publishing
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Write Boldly. Write Prayerfully.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Let every word be an offering. LO Publications helps faith-driven writers bring their God-given words to life — with excellence, integrity, and purpose.
            </p>

            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
              Share Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-4xl mx-auto px-6 border-t border-gray-200 pt-12 pb-16">
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
              <p className="text-gray-500 text-sm mt-2">For the aspiring author who&apos;s been called to write.</p>
            </div>
          </Link>
          <Link href="/blog/empowering-teens-through-faith-based-literature" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
                alt="Faith-based literature for teens"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Empowering Teens Through Faith-Based Literature
              </h4>
              <p className="text-gray-500 text-sm mt-2">How faith-based books help teenagers navigate identity, doubt, and purpose.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}