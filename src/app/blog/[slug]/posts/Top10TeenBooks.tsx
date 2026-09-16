// app/blog/[slug]/posts/Top10TeenBooks.tsx

import { CheckCircle, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

const books = [
  {
    rank: 1,
    title: "The Empowered Teens' Daily Affirmations",
    author: 'Nike Okeke, Layo Obidike',
    takeaways:
      'Encourages self-confidence, self-acceptance, and emotional resilience. Integrates faith-based affirmations with actionable steps. Helps teens discover their God-given identity and purpose.',
    why:
      "It's more than reading — it's an interactive experience. Daily affirmations make self-love and self-worth a habit.",
    featured: true,
  },
  {
    rank: 2,
    title: 'Wonder',
    author: 'R.J. Palacio',
    takeaways:
      'Tells the story of Auggie Pullman, a boy with facial differences navigating mainstream school for the first time. Explores kindness, empathy, and the power of acceptance.',
    why:
      'Multiple points of view help readers understand different perspectives — an essential read about compassion and courage.',
  },
  {
    rank: 3,
    title: 'The Hate U Give',
    author: 'Angie Thomas',
    takeaways:
      'Inspired by the Black Lives Matter movement. Centers on Starr, a teen who witnesses police violence and finds her voice in the fight for justice.',
    why:
      'Timely themes, authentic voice, and fearless storytelling make it a favourite among socially conscious teens.',
  },
  {
    rank: 4,
    title: 'Anne Frank: The Diary of a Young Girl',
    author: 'Anne Frank',
    takeaways:
      "Chronicles Anne Frank's life hiding from Nazis during WWII. Her words offer timeless insights on hope, identity, and human resilience.",
    why:
      "Anne's authentic voice and emotional honesty make history personal and unforgettable.",
  },
  {
    rank: 5,
    title: 'Speak',
    author: 'Laurie Halse Anderson',
    takeaways:
      'Follows Melinda, a high school freshman who becomes mute after a traumatic event. A powerful story about reclaiming one’s voice and healing through truth.',
    why:
      'Its raw, realistic portrayal of trauma and recovery resonates deeply with young readers.',
  },
  {
    rank: 6,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    takeaways:
      'Explores racism, morality, and justice in the American South through the eyes of Scout Finch, a young girl growing up in a divided society.',
    why:
      "Themes of bravery, compassion, and integrity remain relevant. Scout's perspective brings innocence to complex issues.",
  },
  {
    rank: 7,
    title: 'The Perks of Being a Wallflower',
    author: 'Stephen Chbosky',
    takeaways:
      "Told through letters, this novel delves into mental health, friendship, and personal growth. Charlie's journey is a deeply personal look at adolescent struggles.",
    why:
      'The intimate, honest writing style helps teens feel seen and understood.',
  },
  {
    rank: 8,
    title: 'I Am Malala',
    author: 'Malala Yousafzai',
    takeaways:
      "Nobel Prize-winner Malala Yousafzai recounts her fight for girls' education after surviving a Taliban attack.",
    why:
      'Reading about a teen who stood up against oppression inspires young readers to believe they can change the world too.',
  },
  {
    rank: 9,
    title: 'Looking for Alaska',
    author: 'John Green',
    takeaways:
      'A thoughtful novel about love, loss, and the meaning of life. Follows Miles "Pudge" Halter as he discovers new perspectives at boarding school.',
    why:
      'Its poetic writing and deep philosophical questions resonate with introspective teens.',
  },
  {
    rank: 10,
    title: 'Long Way Down',
    author: 'Jason Reynolds',
    takeaways:
      "Told in free verse, this story unfolds over 60 seconds in an elevator as a teen grapples with revenge and morality after his brother's murder.",
    why:
      'The format is fast-paced and powerful — perfect for reluctant readers and fans of slam poetry.',
  },
];

const criteria = [
  'Age Appropriateness',
  'Relevance to Real Life',
  'Diversity of Voices',
  'Moral & Emotional Lessons',
  'Engaging Narrative Style',
];

const faqs = [
  {
    q: 'What is the most inspirational book for a 13-year-old?',
    a: '"Wonder" by R.J. Palacio is ideal. It teaches empathy, kindness, and bravery in a relatable way.',
  },
  {
    q: 'Are these books appropriate for school reading lists?',
    a: 'Yes, most are widely used in school curricula and are suitable for middle to high school students.',
  },
  {
    q: 'How can reading these books help teens?',
    a: 'They provide emotional insight, build empathy, encourage critical thinking, and inspire personal growth.',
  },
  {
    q: 'Are these books suitable for reluctant readers?',
    a: 'Yes! Books like "Long Way Down" and "Wonder" are especially engaging due to their unique formats.',
  },
  {
    q: 'What book deals with bullying in an inspirational way?',
    a: '"Wonder" is an excellent choice, as it addresses bullying and celebrates kindness and acceptance.',
  },
  {
    q: 'Are these books diverse in themes and authorship?',
    a: 'Absolutely. They cover a wide range of cultures, experiences, and voices.',
  },
];

export default function Top10TeenBooks() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — centered, book-list banner */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <BookOpen className="w-4 h-4" />
          Book Lists
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Top 10 Inspirational Books for Adolescents
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed">
          Ten transformative books that teach empathy, challenge perspectives, and ignite a sense of purpose.
        </p>

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl text-xs font-medium text-gray-600">
          <Star className="w-3.5 h-3.5 fill-red-500 text-red-500" />
          Curated for middle and high school readers
        </div>
      </header>

      {/* Why these books matter */}
      <section className="space-y-8">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Inspirational Books Matter for Teenagers
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Adolescence is a time of immense growth, exploration, and emotional development. Inspirational books serve as powerful tools for young readers navigating this pivotal phase.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These books don&apos;t just tell stories; they offer life lessons, spark critical thinking, and build empathy. The right story at the right time can change the course of a young person&apos;s life.
          </p>
        </div>
      </section>

      {/* Criteria strip */}
      <section className="space-y-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
          Selection Criteria
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {criteria.map((c, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-sm text-gray-700 shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Numbered book cards */}
      <section className="space-y-6">
        {books.map((book) => (
          <div
            key={book.rank}
            className={`relative bg-white border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
              book.featured
                ? 'border-red-200 ring-1 ring-red-100'
                : 'border-gray-100'
            }`}
          >
            <div className="flex items-start gap-5">
              {/* Rank badge */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-bold ${
                  book.featured
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {book.rank}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {book.title}
                  </h3>
                  {book.featured && (
                    <span className="px-2.5 py-1 bg-red-600 text-white text-[10px] font-semibold uppercase tracking-wider rounded-lg">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-red-600 font-medium mb-4">
                  by {book.author}
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Key Takeaways
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {book.takeaways}
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Why Teens Love It
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {book.why}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How to encourage reading */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How to Encourage Teens to Read Inspirational Books
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Encouraging teens to read can be challenging, but these proven tips help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Start With Their Interests',
              body: 'Connect books with topics they\'re already passionate about.',
            },
            {
              title: 'Use Audiobooks',
              body: 'They can make reading more accessible and engaging for auditory learners.',
            },
            {
              title: 'Create Book Clubs',
              body: 'Promote discussion and shared experiences with peers.',
            },
            {
              title: 'Model Reading Habits',
              body: 'Let them see adults enjoy reading regularly.',
            },
            {
              title: 'Reward Milestones',
              body: 'Celebrate finishing books or reaching reading goals.',
            },
            {
              title: 'Visit Libraries Together',
              body: 'Let teens choose their own books and discover new authors.',
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  {tip.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            FAQs About Inspirational Books for Teens
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
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
            A Story That Could Shape Their Future
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Inspirational books can shape a teenager&apos;s future by teaching empathy, resilience, and self-awareness. The stories listed above offer valuable lessons, relatable characters, and meaningful messages that stay with readers long after the final page.
            </p>

            <p>
              Choosing the right book can light a spark that encourages lifelong learning and emotional growth. Whether your teen is a reluctant reader or a bookworm, there&apos;s a transformative story waiting for them.
            </p>

            <p className="text-gray-600 text-sm">
              Want to build the habit even earlier? See our guide on{' '}
              <Link
                href="/blog/building-a-reading-habit-tips-for-young-readers"
                className="text-red-600 hover:underline"
              >
                building a reading habit for young readers
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
            Fuel Their Imagination
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            LO Publications is committed to uplifting, educating, and empowering young readers. Our ever-growing collection of inspirational books for teens is packed with heart, courage, and powerful voices.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Explore the Collection
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
          <Link
            href="/blog/empowering-teens-through-faith-based-literature"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
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
              <p className="text-gray-500 text-sm mt-2">
                How faith-based books help teenagers navigate identity, doubt, and purpose.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}