// app/blog/[slug]/posts/BuildingReadingHabit.tsx

import {
  CheckCircle,
  Home,
  BookOpen,
  Sparkles,
  Target,
  Heart,
  Globe,
  Baby,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    icon: Home,
    eyebrow: '01',
    title: 'Creating the Right Environment and Routine',
    intro:
      'Children thrive on routine and comfort. Creating a space that feels inviting and making reading a regular part of the day can transform reading from a task into a treasured habit.',
    points: [
      'Design a special reading corner — beanbag, soft cushions, warm lighting.',
      'Keep distractions to a minimum — no TVs or loud devices.',
      'Make reading a daily ritual (10 minutes counts).',
      'Use visual cues and timers — a reading chart on the wall.',
      'Be a reading role model — children imitate adults.',
      'Start small and grow slowly.',
    ],
  },
  {
    icon: BookOpen,
    eyebrow: '02',
    title: 'Choosing the Right Books and Tools',
    intro:
      'Kids are far more likely to engage with books that reflect their world, spark their imagination, or dive into subjects they\'re naturally drawn to.',
    points: [
      'Match books to developmental stage — picture books (3–6), chapter books (6–9).',
      'Align choices with interests — dinosaurs, magic, sports, science.',
      'Refer to reading level guides like Lexile or AR levels.',
      'Embrace digital formats — eBooks and interactive story apps.',
      'Try audiobooks for auditory learners and reluctant readers.',
      'Rotate material periodically to keep curiosity alive.',
    ],
  },
  {
    icon: Sparkles,
    eyebrow: '03',
    title: 'Making Reading Fun and Engaging',
    intro:
      'When children associate reading with joy, laughter, and togetherness, it quickly transforms from a task into a treasured activity.',
    points: [
      'Use expressive tones, dramatic pauses, and animated gestures.',
      'Change your voice for different characters.',
      'Add fun sound effects — rain, footsteps, laughter.',
      'Try "story bingo" and "find the word" games.',
      'Set aside a family reading night.',
      'Create small traditions around reading — themed snacks, dress-up.',
    ],
  },
  {
    icon: Target,
    eyebrow: '04',
    title: 'Setting Goals and Tracking Progress',
    intro:
      'Children thrive on structure and positive reinforcement. Achievable reading goals and visible progress make the process more exciting.',
    points: [
      'Start with small, realistic targets based on age and attention span.',
      'Make targets specific: "Read 10 minutes every night before bed."',
      'Use reading charts, sticker calendars, or reading logs.',
      'Introduce small, meaningful rewards.',
      'Celebrate milestones — big or small.',
    ],
  },
  {
    icon: Heart,
    eyebrow: '05',
    title: 'Overcoming Resistance and Building Confidence',
    intro:
      'Resistance to reading is completely normal. The key lies not in pushing harder, but in responding with patience, creativity, and support.',
    points: [
      'Approach with empathy — ask what they don\'t like about a book.',
      'Validate their feelings — avoid criticism or comparison.',
      'Use peer influence positively — buddy reading, book recommendations.',
      'Promote a growth mindset — celebrate effort over perfection.',
      'Use encouraging statements: "You\'re growing as a reader every day."',
    ],
  },
  {
    icon: Globe,
    eyebrow: '06',
    title: 'Expanding Horizons Through Diversity and Community',
    intro:
      'Encourage children to engage with diverse books and community-based reading activities. Exposure to a variety of voices teaches kids to appreciate the richness of human experiences.',
    points: [
      'Introduce books representing different cultures and traditions.',
      'Visit local libraries regularly — they\'re cultural hubs.',
      'Join reading communities or book exchange programs.',
      'Encourage book swaps with classmates and neighbours.',
      'Attend multicultural storytelling sessions.',
    ],
  },
];

const ageBands = [
  {
    icon: Baby,
    age: 'Ages 3–6',
    label: 'Early Readers',
    content: 'Picture books with vivid illustrations and simple, rhythmic text.',
  },
  {
    icon: BookOpen,
    age: 'Ages 6–9',
    label: 'Emerging Readers',
    content: 'Short chapter books, graphic novels, and early series.',
  },
  {
    icon: Users,
    age: 'Ages 9–12',
    label: 'Middle Grade',
    content: 'Fantasy adventures, realistic fiction, and age-relevant themes.',
  },
  {
    icon: Sparkles,
    age: 'Ages 12+',
    label: 'Young Adult',
    content: 'Complex narratives with deeper themes of identity and growth.',
  },
];

const finalTips = [
  'Keep it low-pressure — let children read at their own pace.',
  'Be a role model — show them you enjoy reading too.',
  'Stay flexible — don\'t worry about missed days.',
  'Make it social — read together and celebrate the joy.',
];

export default function BuildingReadingHabit() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Reading
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Building a Reading Habit: Tips for Young Readers
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          Reading is more than a skill — it&apos;s a gateway to imagination, knowledge, and lifelong learning.
        </p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
          <p>
            For young readers, developing a reading habit early can shape their academic success, emotional growth, and communication skills. However, with increasing distractions and screen time, helping children fall in love with books requires thoughtful strategies, patience, and creativity.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
            <p className="text-gray-700 text-sm">
              Looking for books to recommend? See our list of{' '}
              <Link
                href="/blog/top-10-inspirational-books-for-adolescents"
                className="text-red-600 hover:underline font-semibold"
              >
                top 10 inspirational books for adolescents
              </Link>
              .
            </p>
          </div>
        </div>
      </header>

      {/* Six pillars */}
      <section className="space-y-10">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-red-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">
                    Pillar {pillar.eyebrow}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                    {pillar.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-5">
                {pillar.intro}
              </p>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="font-medium text-gray-900 mb-4">
                  What to do:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {pillar.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      {/* Age bands */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Age-Appropriate Book Selection
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Books that are too simple may bore them; overly complex ones can lead to frustration. Match the material to their stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {ageBands.map((band, i) => {
            const Icon = band.icon;
            return (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                      {band.age}
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {band.label}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {band.content}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final tips */}
      <section className="space-y-8">
        <div className="bg-amber-50 border border-amber-100 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Final Tips for Consistency
          </h2>

          <ul className="space-y-3">
            {finalTips.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 text-lg"
              >
                <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                {tip}
              </li>
            ))}
          </ul>

          <p className="text-gray-700 mt-6 italic">
            Small steps every day lead to big transformations.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Lifelong Impact of Early Reading Habits
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Instilling a reading habit in children is more than just encouraging them to pick up a book. It&apos;s about nurturing curious, confident, and compassionate individuals.
            </p>

            <p>
              A child who learns to read daily doesn&apos;t just grow into a bookworm; they grow into a thinker. Regular reading strengthens cognitive abilities, sharpens focus, and builds emotional intelligence.
            </p>

            <p className="text-gray-600 text-sm">
              Want to keep older readers engaged? Read{' '}
              <Link
                href="/blog/why-more-teens-should-write"
                className="text-red-600 hover:underline"
              >
                why more teens should write
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
            Stories That Keep Young Readers Hooked
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            LO Publications curates diverse, engaging, and high-quality children&apos;s books that don&apos;t just entertain — they empower.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Browse Books
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
            href="/blog/top-10-inspirational-books-for-adolescents"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop"
                alt="Top books for teens"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Top 10 Inspirational Books for Adolescents
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                Ten transformative books that teach empathy and resilience.
              </p>
            </div>
          </Link>
          <Link
            href="/blog/why-more-teens-should-write"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop"
                alt="Why teens should write"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Why More Teens Should Write
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                Writing builds confidence, sharpens thinking, and creates real opportunity.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}