// app/blog/[slug]/posts/BookMarketing101.tsx

import {
  CheckCircle,
  Sparkles,
  Palette,
  Users,
  Radio,
  Rocket,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

const toolkits = [
  {
    icon: Sparkles,
    title: 'Author Brand & Home Base',
    color: 'from-purple-50 to-white',
    intro: "Your brand is more than a logo — it's your voice and soul as the author.",
    items: [
      'Choose 1–2 platforms where your readers actually hang out.',
      "Write a bio that's punchy, fun, and totally you.",
      'Use a professional, approachable headshot.',
      'Post like chapters — a glimpse into your world each time.',
      'Respond to comments. Talk to your followers like future fans.',
    ],
  },
  {
    icon: Rocket,
    title: 'Pre-Launch Campaign',
    color: 'from-amber-50 to-white',
    intro: 'Start talking about your book 3 to 6 months before launch day.',
    items: [
      'Map a loose content calendar — rhythm beats rigidity.',
      'Reveal your title with a story about how you chose it.',
      'Make the cover reveal an event (piece-by-piece, or live).',
      'Post teasers: one-liners, mini character bios, mood boards.',
      'Use countdowns — 10 days out, one themed post each day.',
    ],
  },
  {
    icon: Palette,
    title: 'Visuals, Hashtags & Viral Content',
    color: 'from-pink-50 to-white',
    intro: 'Your feed is your digital handshake. Make it pull people in.',
    items: [
      'Use Canva or BookBrush for professional-looking graphics.',
      'Mix popular (#BookTok) and niche hashtags for your genre.',
      'Turn dramatic book lines into visual quote posts.',
      'Film 15-second reels — "5 things only your main character would understand."',
      'Use polls and questions — people love to chime in.',
    ],
  },
  {
    icon: Users,
    title: 'Community, Influencers & Giveaways',
    color: 'from-blue-50 to-white',
    intro: 'These strategies work because they feel personal, exciting, and a little magical.',
    items: [
      'Follow and genuinely engage with Bookstagrammers and BookTubers first.',
      'Reach out with a personal message and a free ARC.',
      'Host giveaways: "Follow and tag a friend to win."',
      'Go live: readings, Q&As, or casual chats.',
      'Check platform rules before running a giveaway.',
    ],
  },
  {
    icon: Radio,
    title: 'Post-Launch Momentum',
    color: 'from-green-50 to-white',
    intro: 'Your readers just showed up for you. Keep showing up for them.',
    items: [
      'Share early reviews, fan messages, favourite quotes.',
      'Keep the conversation going — ask what readers loved most.',
      'Reshare launch-day content with a fresh caption.',
      'Pitch yourself to book clubs and podcasts.',
      'Post consistently — even one thoughtful post a week.',
    ],
  },
];

const faqs = [
  {
    q: 'How early should I start marketing my book on social media?',
    a: 'Ideally, start 3–6 months before your launch. The earlier you build buzz, the better your results.',
  },
  {
    q: "What's the best platform for book promotion?",
    a: 'It depends on your genre and audience. TikTok works wonders for Young Adults, while Facebook and Instagram are great for general fiction and non-fiction.',
  },
  {
    q: 'Do I need to be on all platforms?',
    a: 'No. Choose 2–3 platforms that align with your audience and focus your energy there.',
  },
  {
    q: 'How do I get book influencers to review my book?',
    a: 'Build relationships first — like and comment on their posts, then reach out with a personalized pitch offering a free ARC.',
  },
  {
    q: 'Is paid advertising worth it for new authors?',
    a: 'Yes, if done correctly. Start small, target well, and monitor performance closely.',
  },
  {
    q: "What if I'm not comfortable on camera?",
    a: 'Start with stories or pre-recorded videos. As you grow confident, experiment with live sessions.',
  },
];

export default function BookMarketing101() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — centered, consistent with other posts */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Book Marketing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Book Marketing 101: Social Media for First-Time Authors
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          In today&apos;s digital age, social media is no longer optional — it&apos;s essential. Think of it as your virtual stage.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            Whether you&apos;re self-publishing or working with a traditional publisher, learning how to use social media can make or break your book launch. You don&apos;t need a massive budget — just strategy, creativity, and consistency.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              Want to know what mistakes to avoid first? Read our breakdown of{' '}
              <Link
                href="/blog/what-new-authors-in-canada-get-wrong-about-book-marketing"
                className="text-red-600 hover:underline font-semibold"
              >
                what new authors in Canada get wrong about book marketing
              </Link>
              .
            </p>
          </div>
        </div>
      </header>

      {/* Full-width banner image, below the intro */}
      <section>
        <div className="relative aspect-[16/8] rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&h=800&fit=crop"
            alt="Social media book marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>

      {/* Why it matters — three pillars */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Social Media Is a Game-Changer
          </h2>
          <p className="text-lg text-gray-600">
            You&apos;re not just selling a book. You&apos;re building a connection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Heart,
              title: 'You Build a Connection',
              body: 'People are way more likely to support your work when they feel like they know you. Social media lets readers meet the author behind the story.',
            },
            {
              icon: Users,
              title: 'Small Audience, Big Impact',
              body: 'A small but loyal crew of readers can do more for your launch than thousands of silent followers.',
            },
            {
              icon: Sparkles,
              title: "You Don't Need Perfection",
              body: 'Every successful author started with a first post, a shaky video, or a nervous "Hey guys, I wrote a book!"',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Toolkit — colour-coded section cards */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            The Social Media Toolkit
          </h2>
          <p className="text-lg text-gray-600">
            Five areas to master — from author brand to post-launch momentum.
          </p>
        </div>

        <div className="space-y-6">
          {toolkits.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${tool.color} border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm italic">
                      {tool.intro}
                    </p>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {tool.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            FAQs About Social Media Book Marketing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-start gap-2">
                <span className="text-red-600">Q.</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Owning Your Journey as a First-Time Author
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Social media is the compass you need — guiding you to connect directly with readers and build a community around your work. It&apos;s not just about promotion; it&apos;s about creating genuine relationships that can turn readers into lifelong fans.
            </p>

            <p>
              There will be challenges; you will have days when your posts don&apos;t get the engagement you hoped for or when self-doubt creeps in. But remember, every interaction, no matter how small, is a step forward.
            </p>

            <p className="text-gray-600 text-sm">
              Ready to take it further? Read our guide on{' '}
              <Link
                href="/blog/what-new-authors-in-canada-get-wrong-about-book-marketing"
                className="text-red-600 hover:underline"
              >
                what new authors in Canada get wrong about book marketing
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
            Let Us Help You Reach Readers
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            At LO Publications, we specialize in empowering authors like you. With 100% royalties, complete creative control, and personalized guidance, we ensure your publishing journey is smooth and successful.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Visit LO Publications
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/blog/what-new-authors-in-canada-get-wrong-about-book-marketing"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"
                alt="Book marketing in Canada"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                What New Authors in Canada Get Wrong About Book Marketing
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                Why authors mistake national availability for national demand.
              </p>
            </div>
          </Link>
          <Link
            href="/blog/networking-in-the-publishing-industry"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
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
              <p className="text-gray-500 text-sm mt-2">
                How authors build the relationships that accelerate a publishing career.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}