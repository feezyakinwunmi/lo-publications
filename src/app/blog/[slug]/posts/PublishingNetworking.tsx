// app/blog/[slug]/posts/PublishingNetworking.tsx

import {
  CheckCircle,
  Users,
  Globe,
  MessageCircle,
  Mic,
  Mail,
  BookOpen,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

const channels = [
  {
    icon: Globe,
    title: 'Social Media as a Career Accelerator',
    body: 'Twitter (X), Instagram, LinkedIn, and TikTok have become professional tools. Authors share writing progress, connect with readers, find critique partners, and even attract agents.',
    points: [
      'LinkedIn for formal networking and publishing professionals.',
      'Instagram and TikTok for building a personal brand.',
      'Consistent, genuine engagement leads to contracts and media features.',
    ],
  },
  {
    icon: Users,
    title: 'Online Communities: Writers Supporting Writers',
    body: 'Discord, Reddit (r/writing, r/selfpublish), and Facebook Groups host vibrant ecosystems of writers at every stage.',
    points: [
      'Instant feedback on queries and blurbs.',
      'Beta reader exchanges.',
      'Daily writing sprints and accountability challenges.',
      'Industry insights and news updates.',
    ],
  },
  {
    icon: Mic,
    title: 'Virtual Book Events',
    body: 'In-person book tours have been joined by virtual events that are more accessible and cost-effective.',
    points: [
      'Host virtual launches with global attendees.',
      'Join panels at virtual writing conferences.',
      'Collaborate on multi-author events to pool audiences.',
      'Attract bloggers, podcasters, and industry pros.',
    ],
  },
];

const professionalTips = [
  {
    title: 'Personalize Your Outreach',
    body: 'Avoid blanket emails. Reference the agent or editor\'s interests, genres, and recent projects.',
  },
  {
    title: 'Be Clear and Concise',
    body: 'Provide your book\'s title, genre, word count, and pitch — without overwhelming them.',
  },
  {
    title: 'Be Professional Yet Friendly',
    body: 'Strike a balance between approachable and professional. Show you\'re serious but pleasant.',
  },
  {
    title: 'Wait Patiently',
    body: 'Industry response times can be slow. Wait at least 2–3 weeks before following up.',
  },
  {
    title: 'Offer New Information',
    body: 'If you\'ve won an award or made significant revisions, a polite follow-up can reignite interest.',
  },
  {
    title: 'Be Gracious',
    body: 'Always thank them for their time — even on a rejection. It leaves the door open.',
  },
];

const tools = [
  { name: 'Airtable / Notion', use: 'Track outreach, follow-ups, and contacts.' },
  { name: 'HubSpot CRM', use: 'Free, robust contact segmentation and email tracking.' },
  { name: 'Streak for Gmail', use: 'Lightweight CRM built into your inbox.' },
  { name: 'ConvertKit / MailerLite', use: 'Segment lists and send personalized sequences.' },
  { name: 'Zapier / Metricool', use: 'Automate tracking and engagement metrics.' },
];

export default function PublishingNetworking() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — editorial with pull-quote */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Publishing
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Networking in the Publishing Industry: How Authors Grow Faster
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          In 2025, it&apos;s not just about writing a great book. It&apos;s also about who you know, how you engage with the community, and the relationships you build along the way.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            Networking in the publishing industry has shifted from closed-door meetings and exclusive literary events to accessible, global platforms where both new and seasoned authors can thrive.
          </p>

          <p>
            Whether you&apos;re self-publishing your first novel or pitching to traditional publishers, strategic networking can open doors you never knew existed. It helps authors find mentors, secure book deals, gain exposure, and build loyal readerships.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              If you&apos;re still building your foundation, our guide on{' '}
              <Link href="/blog/how-to-build-a-long-term-writing-career-digital-publishing" className="text-red-600 hover:underline font-semibold">
                building a long-term writing career
              </Link>{' '}
              covers the wider picture.
            </p>
          </div>
        </div>
      </header>

      {/* Digital Evolution */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Digital Evolution of Author Networking
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Gone are the days when writers had to rely solely on in-person events, snail-mail queries, or cold calling to build meaningful industry connections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.body}
                </p>
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industry Professionals */}
      <section className="space-y-8">
        <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[2rem] p-10 md:p-14">
          <div className="max-w-3xl space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Mail className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-3xl font-bold">
              Connecting With Industry Professionals
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Agents, editors, and publishers often act as gatekeepers, mentors, and champions. In 2025, the emphasis isn&apos;t just on who you know — it&apos;s on how you nurture those connections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {professionalTips.map((tip, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <p className="font-semibold text-white mb-2">{tip.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indie vs Traditional */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Indie vs Traditional Authors: Different Paths, Same Goals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-600 mb-4">
              Indie Authors
            </div>
            <p className="text-gray-600 leading-relaxed">
              Without the backing of a major publisher, indie authors wear multiple hats — writing, editing, marketing, distribution. Networking becomes not just a way to grow but a survival strategy. They focus on connections with other indie authors, beta readers, freelance editors, and self-publishing experts.
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <div className="inline-block px-3 py-1 bg-white rounded-lg text-xs font-medium text-red-600 mb-4">
              Traditional Authors
            </div>
            <p className="text-gray-700 leading-relaxed">
              They often have in-house teams for editing, design, and marketing — yet still need to network to stand out. Networking helps them gain visibility, form speaking opportunities, and build their long-term author brand.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700">
            Despite these differences, both types of authors benefit immensely from strategic networking; it&apos;s just the approach that varies. Book fairs and conferences are vital hubs — and the hybrid model (in-person + digital) has become the gold standard in 2025.
          </p>
        </div>
      </section>

      {/* Tools & Tracking */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tools for Optimizing Your Networking
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tracking matters. The difference between successful and stagnant networking often comes down to knowing what&apos;s working.
          </p>
        </div>

        <div className="space-y-3">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{tool.name}</p>
                <p className="text-gray-600 text-sm">{tool.use}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
          <p className="font-medium text-gray-900 mb-3">
            Common networking mistakes to avoid:
          </p>
          <ul className="space-y-2">
            {[
              'Over-promotion without relationship building.',
              'Neglecting follow-ups.',
              'Not tracking interactions.',
              'Ignoring platform fit.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Peer & Influencer Support */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Collaborative Growth Through Peer & Influencer Support
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            No author grows alone. Peer groups, co-marketing, influencer outreach, and review exchanges drive real momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Users,
              title: 'Peer Groups: Your Writing Tribe',
              body: 'Accountability teams, creative sounding boards, and marketing allies. Discord, Slack, and Facebook Groups host thousands of niche communities.',
            },
            {
              icon: Heart,
              title: 'Co-Marketing: Growing Together',
              body: 'Newsletter swaps, social shoutouts, and joint giveaways. When an author endorses a fellow writer, it builds trust with readers.',
            },
            {
              icon: MessageCircle,
              title: 'Influencer Outreach',
              body: 'BookTok, Bookstagram, and BookTube. Micro-influencers (1K–10K followers) hold incredible sway. Personalize your pitch and build relationships first.',
            },
            {
              icon: CheckCircle,
              title: 'Ethical Review Exchanges',
              body: 'Disclose that the review is honest and unbiased. Choose books you genuinely want to read. Avoid exchanging reviews for 5-star ratings.',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Future of Networking for Authors
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              In 2025, networking isn&apos;t just about shaking hands at book fairs. It&apos;s about building genuine connections that resonate both online and offline.
            </p>

            <p>
              Every bestselling author started somewhere. They faced rejections, doubts, and the daunting blank page. But they also found communities that uplifted them, mentors who guided them, and peers who celebrated their successes.
            </p>

            <p className="text-gray-600 text-sm">
              Take actionable steps — join writing communities, attend workshops, engage with influencers, collaborate with peers. And if you want a partner in the journey, see how{' '}
              <Link href="/blog/self-publishing-success-from-manuscript-to-marketplace" className="text-red-600 hover:underline">
                self-publishing success
              </Link>{' '}
              connects to all of this.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            You&apos;re Not Publishing Alone
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            LO Publications is more than a publishing house — it&apos;s a community that champions authors at every stage. From personalized guidance to comprehensive marketing strategies, we help your voice resonate.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
            Join the Community
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
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
                Self-Publishing Success
              </h4>
              <p className="text-gray-500 text-sm mt-2">From manuscript to marketplace without a traditional publisher.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}