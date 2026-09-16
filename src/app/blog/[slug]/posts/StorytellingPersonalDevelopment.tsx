// app/blog/[slug]/posts/StorytellingPersonalDevelopment.tsx

import {
  CheckCircle,
  Eye,
  Heart,
  MessageCircle,
  RefreshCw,
  Target,
  PenLine,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const panels = [
  {
    icon: Eye,
    eyebrow: '01',
    title: 'Self-Awareness & Reflection',
    from: 'Living on autopilot',
    to: 'Understanding your patterns',
    paragraphs: [
      'When individuals share or write their personal narratives, they embark on a journey of introspection. This process reveals thoughts, emotions, patterns, beliefs, and motivations that may otherwise remain hidden.',
      'Journaling transforms fleeting thoughts into structured narratives. Writing allows you to observe your life from a distance — almost like watching a movie of your own experiences.',
    ],
    practices: [
      'Ask: Why did that moment affect me so deeply?',
      'Journal to identify biases, blind spots, and breakthroughs.',
      'Share stories in safe spaces for emotional validation.',
      'Recognise recurring themes in relationships or self-doubt.',
    ],
  },
  {
    icon: Heart,
    eyebrow: '02',
    title: 'Emotional Intelligence & Empathy',
    from: 'Reacting without awareness',
    to: 'Understanding yourself and others',
    paragraphs: [
      'Storytelling reaches beyond the intellect and connects directly with the heart. It builds the two core components of personal development: emotional intelligence and empathy.',
      'By placing ourselves in the shoes of characters or storytellers, we experience their emotions and deepen our understanding of perspectives different from our own.',
    ],
    practices: [
      'Daily journaling — reflect on emotional moments.',
      'Active listening — engage without interrupting.',
      'Read fiction that explores complex human emotions.',
      'Practise empathy mapping with characters or real people.',
    ],
  },
  {
    icon: MessageCircle,
    eyebrow: '03',
    title: 'Communication & Leadership',
    from: 'Delivering information',
    to: 'Creating connection',
    paragraphs: [
      "Storytelling isn't just a method of sharing experiences; it's a strategic tool. Great leaders are often great storytellers — they use personal narratives to inspire action, build trust, and convey vision.",
      'Whether you\'re speaking in public, networking, or writing content, storytelling helps you become more persuasive, relatable, and impactful.',
    ],
    practices: [
      'Use personal experiences that teach or inspire.',
      'Know your audience — tailor tone and detail.',
      'Keep it authentic — speak from the heart, not a script.',
      'Focus on the message you want your audience to take away.',
    ],
  },
  {
    icon: RefreshCw,
    eyebrow: '04',
    title: 'Rewriting Limiting Beliefs',
    from: 'Stuck in old narratives',
    to: 'Author of a new story',
    paragraphs: [
      'Every person has an internal narrative — a story they tell themselves about who they are, what they\'re capable of, and what they deserve. Not all of these stories are empowering.',
      'The magic of storytelling lies in its ability to reframe reality. Just as a story can be edited, so too can our perception of past experiences.',
    ],
    practices: [
      'Identify the current narrative you repeat to yourself.',
      'Analyse its origin — childhood incident? single failure?',
      'Challenge the belief: "Is this absolutely true?"',
      'Rewrite it: "I\'m learning to be confident, and I\'ve made progress."',
      'Reinforce the new narrative through journaling and visualisation.',
    ],
  },
  {
    icon: Target,
    eyebrow: '05',
    title: 'Visioning, Goals & Motivation',
    from: 'Vague ambitions',
    to: 'A vivid, lived future',
    paragraphs: [
      'Future storytelling involves crafting vivid narratives about your desired life. By describing this future in detail, you create a mental map your brain can follow.',
      'This technique activates the reticular activating system (RAS) — your brain begins to notice opportunities and make choices that support the vision.',
    ],
    practices: [
      'Write a vivid scene of your future self in action.',
      'Frame goals as narratives, not task lists.',
      'Revisit and update your story monthly.',
      'Share your vision with others to build accountability.',
    ],
  },
];

export default function StorytellingPersonalDevelopment() {
  return (
    <article className="max-w-5xl mx-auto space-y-20">
      {/* Hero — editorial, centered */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Storytelling
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          The Role of Storytelling in Personal Development
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed">
          Storytelling shapes our identities, beliefs, and behaviours. In personal development, it becomes a transformative tool.
        </p>
      </header>

      {/* Intro pull-quote */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-8 md:p-10">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            From childhood bedtime stories to deeply personal anecdotes shared in adulthood, narratives play a crucial role in how we understand ourselves and the world around us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This article explores the essential ways storytelling fuels growth and offers practical insights on how to harness its power in your personal journey.
          </p>
        </div>
      </section>

      {/* Transformation panels — Layout D */}
      <section className="space-y-10">
        {panels.map((panel, i) => {
          const Icon = panel.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-5 p-6 md:p-8 border-b border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
                    {panel.eyebrow}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {panel.title}
                  </h2>
                </div>
              </div>

              {/* From → To rail */}
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border-b border-gray-100">
                <div className="p-6 bg-gray-50">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    From
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    {panel.from}
                  </p>
                </div>
                <div className="p-6 bg-red-50">
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
                    To
                  </p>
                  <p className="text-gray-800 text-sm font-medium">
                    {panel.to}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-5">
                {panel.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 leading-relaxed text-lg"
                  >
                    {p}
                  </p>
                ))}

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <p className="font-medium text-gray-900 mb-4">
                    Practical applications:
                  </p>
                  <ul className="space-y-3">
                    {panel.practices.map((point, idx) => (
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

      {/* Conclusion — dark, contemplative */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
            <PenLine className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl font-bold">
            Every Thought, Every Story, Every Dream
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Every thought you think, every experience you recount, and every dream you dare to imagine becomes a part of your personal journey. But the real question is — are you the conscious author of that story?
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Embracing storytelling as a personal development tool means taking the pen into your own hands. It&apos;s about acknowledging the past without being defined by it, creating goals that move you, and shaping a future that excites you.
          </p>

          <p className="text-red-400 font-medium text-lg">
            Self-mastery doesn&apos;t happen in silence; it unfolds in stories.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Your Next Chapter Starts Here
          </h2>

          <p className="text-red-100 text-lg leading-relaxed">
            Whether you&apos;re a budding writer, a reflective journaler, or someone who knows there&apos;s a powerful message within — LO Publications gives you the tools and inspiration to bring your story to life.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-red-600 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Start Writing <ArrowRight className="w-4 h-4" />
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