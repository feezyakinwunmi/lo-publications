// app/blog/[slug]/posts/LongTermWritingCareer.tsx

import {
  CheckCircle,
  Lightbulb,
  Palette,
  Briefcase,
  TrendingUp,
  Compass,
  Heart,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    icon: Compass,
    eyebrow: 'Foundation',
    title: 'Understanding the Digital Writing Ecosystem',
    intro:
      'The writing industry has undergone a seismic transformation. Digital publishing has replaced traditional print as the primary medium for sharing written content.',
    paragraphs: [
      'In the past, aspiring writers navigated a maze of gatekeepers — agents, editors, and publishers. Today, those barriers have significantly diminished.',
      'Digital publishing offers greater flexibility, faster turnaround times, and a broader reach. Articles, books, essays, and newsletters can be published with a few clicks.',
    ],
    list: [
      'Medium — essays, personal stories, and thought leadership.',
      'Substack — loyal readership through email newsletters.',
      'Kindle Direct Publishing (KDP) — global ebook and print distribution.',
      'Wattpad and Radish — serialized storytelling for younger audiences.',
    ],
    bg: 'bg-white',
  },
  {
    icon: Palette,
    eyebrow: 'Focus',
    title: 'Finding and Evolving Your Niche',
    intro:
      'Carving out a well-defined niche is one of the smartest moves you can make as a writer.',
    paragraphs: [
      'It not only sets you apart in a crowded market but also helps attract loyal readers, clients, and collaborators.',
      'Unlike generalist writing, niche writing allows you to focus, deepen your knowledge, and become known as a go-to expert.',
    ],
    list: [
      'Authority and trust: readers follow consistent voices.',
      'Higher earning potential: niche writers command better rates.',
      'Consistent work opportunities: clients return to specialists.',
      'Streamlined research: the more you write in a niche, the easier it gets.',
    ],
    bg: 'bg-gray-50',
  },
  {
    icon: BookOpen,
    eyebrow: 'Craft',
    title: 'Sharpening Writing and Communication Skills',
    intro:
      'At the heart of every successful writing career lies one constant: strong, effective communication.',
    paragraphs: [
      'Great writers never stop learning. The digital world evolves rapidly, bringing new tools, platforms, and styles into play.',
      'Reading widely expands your vocabulary and exposes you to different voices. Writing daily builds fluency and confidence.',
    ],
    list: [
      'Commit to continuous learning — courses, webinars, books.',
      'Make reading and writing a daily habit.',
      'Seek constructive feedback from peers and editors.',
      'Master the art of storytelling, even in non-fiction.',
      'Write with clarity and basic SEO awareness.',
    ],
    bg: 'bg-white',
  },
  {
    icon: TrendingUp,
    eyebrow: 'Visibility',
    title: 'Building Visibility and a Professional Presence',
    intro:
      'Great writing alone isn\'t enough — you need to be seen.',
    paragraphs: [
      'Think of your online presence as your digital storefront. The better it looks and the easier it is to find, the more opportunities will come your way.',
      'Social media platforms are powerful tools for writers to showcase personality, share content, and connect with readers.',
    ],
    list: [
      'Create an online portfolio with curated writing samples.',
      'Choose platforms that align with your goals.',
      'Build a consistent personal brand (voice, visuals, values).',
      'Use email newsletters, guest posting, and SEO.',
    ],
    bg: 'bg-gray-50',
  },
  {
    icon: Briefcase,
    eyebrow: 'Business',
    title: 'Mastering the Business and Legal Side of Writing',
    intro:
      'Success as a digital writer goes beyond creativity and storytelling.',
    paragraphs: [
      'Writers who treat their work like a business tend to enjoy longer, more stable careers.',
      'This means knowing your rights, setting appropriate rates, diversifying your income, and planning wisely for the future.',
    ],
    list: [
      'Understand contract terms: payment, rights, revisions, termination.',
      'Set fair rates based on experience, complexity, and industry benchmarks.',
      'Build multiple income streams — freelance, self-publishing, coaching.',
      'Uphold ethical practices: credit sources, respect copyright.',
      'Plan long-term: track income, set aside taxes, build emergency funds.',
    ],
    bg: 'bg-white',
  },
  {
    icon: Heart,
    eyebrow: 'Sustainability',
    title: 'Growing Sustainably in a Fast-Paced Industry',
    intro:
      'The digital writing world is exhilarating — but it can also be overwhelming. Burnout is a real risk.',
    paragraphs: [
      'To ensure long-term success, adopt habits and strategies that promote balance, growth, and motivation.',
      'A sustainable writing career isn\'t just about how hard you work; it\'s about how wisely you grow.',
    ],
    list: [
      'Avoid burnout: set boundaries and learn to say no.',
      'Master time management: Trello, Notion, Google Calendar.',
      'Stay connected through community and networking.',
      'Set clear goals, celebrate small wins, and keep a swipe file.',
      'Leverage analytics to refine your voice and topics.',
    ],
    bg: 'bg-gray-50',
  },
];

export default function LongTermWritingCareer() {
  return (
    <article className="space-y-20">
      {/* Hero */}
      <header className="max-w-4xl mx-auto space-y-8 px-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <Briefcase className="w-4 h-4" />
          Writing Career
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          How to Build a Long-Term Writing Career in the Digital Publishing Era
        </h1>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            The digital revolution has transformed nearly every aspect of our lives, and the writing world is no exception. For writers, this shift presents both exciting opportunities and unique challenges.
          </p>

          <p>
            Traditional publishing barriers have crumbled, giving rise to a landscape where anyone with internet access can share their voice with a global audience. Yet, standing out demands more than just talent. It requires strategy, adaptability, and a clear long-term vision.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              Looking to expand your reach? Our guide on{' '}
              <Link href="/blog/networking-in-the-publishing-industry" className="text-red-600 hover:underline font-semibold">
                networking in the publishing industry
              </Link>{' '}
              shows how relationships accelerate a career.
            </p>
          </div>
        </div>
      </header>

      {/* Six themed sections with alternating backgrounds */}
      <section className="space-y-4">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <div key={i} className={`${section.bg} py-12 md:py-16`}>
              <div className="max-w-4xl mx-auto px-6 space-y-6">
                <div className="md:flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                      {section.eyebrow}
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {section.intro}
                    </p>

                    {section.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 leading-relaxed mb-3"
                      >
                        {p}
                      </p>
                    ))}

                    <ul className="mt-6 space-y-3">
                      {section.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              A Career Built on Passion and Persistence
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Building a writing career in the digital age is a journey filled with passion, persistence, and a fair share of plot twists.
              </p>

              <p>
                It&apos;s not just about talent; it&apos;s about showing up, day after day, even when the words don&apos;t flow easily.
              </p>

              <p>
                Rejections will come, and not every piece will resonate. But each experience is a stepping stone, shaping you into a more resilient and insightful writer.
              </p>

              <p className="text-gray-600 text-sm">
                If self-publishing is part of your plan, read our guide on{' '}
                <Link href="/blog/self-publishing-success-from-manuscript-to-marketplace" className="text-red-600 hover:underline">
                  self-publishing success
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
              Build a Career That Lasts
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              LO Publications offers a platform for writers to showcase their work, connect with industry professionals, and access resources to support their writing journey.
            </p>

            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
              Explore Resources
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
          <Link href="/blog/networking-in-the-publishing-industry" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop"
                alt="Publishing industry networking"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Networking in the Publishing Industry
              </h4>
              <p className="text-gray-500 text-sm mt-2">How authors build relationships that accelerate a publishing career.</p>
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