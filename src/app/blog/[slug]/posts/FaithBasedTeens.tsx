// app/blog/[slug]/posts/FaithBasedTeens.tsx

import {
  CheckCircle,
  Heart,
  BookOpen,
  Users,
  Compass,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';

const themes = [
  {
    icon: Heart,
    title: 'Redemption and Forgiveness',
    body: 'At the heart of many faith-based stories lies the theme of redemption — a powerful reminder that no one is beyond saving. Literature that shows flawed characters finding forgiveness offers reassurance that teens, too, can overcome their past.',
  },
  {
    icon: Sparkles,
    title: 'Courage and Standing for Truth',
    body: 'Characters making tough choices, standing firm in their beliefs, and facing adversity with conviction. These narratives encourage teens to be brave — not just in dramatic moments, but in everyday decisions.',
  },
  {
    icon: Compass,
    title: "Hope and Trust in God's Plan",
    body: "The idea that life has purpose, even in the chaos. Stories of characters who endure trials and emerge stronger through trust resonate deeply with teens navigating uncertainty about their future.",
  },
  {
    icon: Users,
    title: 'Identity and Belonging',
    body: 'Finding one\'s identity is a central journey for every teen. Faith-based books root identity not in appearance, popularity, or performance, but in being created and loved by God.',
  },
  {
    icon: MessageCircle,
    title: 'Compassion, Service, and Loving Others',
    body: 'Acts of kindness, generosity, and selflessness. These books promote a lifestyle of love and compassion — challenging teens to live out their faith through action.',
  },
  {
    icon: BookOpen,
    title: 'The Battle Between Good and Evil',
    body: 'Allegory and metaphor portray the ongoing spiritual battle. While often fantastical, these narratives reflect real inner struggles that youth experience every day.',
  },
];

const books = [
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    why: 'Christian symbolism woven into fantasy and adventure. Themes of sacrifice, redemption, and courage.',
  },
  {
    title: 'Left Behind: The Kids Series',
    author: 'Jerry B. Jenkins & Tim LaHaye',
    why: 'A post-apocalyptic world that challenges teens to think about faith, purpose, and eternity.',
  },
  {
    title: 'Saints and Misfits',
    author: 'S.K. Ali',
    why: 'A fresh Muslim perspective — a hijabi teen grappling with trauma, self-image, and spirituality.',
  },
  {
    title: 'Number the Stars',
    author: 'Lois Lowry',
    why: 'A young Danish girl helps her Jewish friend escape Nazi persecution. Themes of faith, bravery, and moral integrity.',
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    why: 'Raises questions about free will, purpose, and what it means to live a meaningful life.',
  },
  {
    title: 'A Wrinkle in Time',
    author: "Madeleine L'Engle",
    why: 'A sci-fi classic infused with Christian allegory — love, sacrifice, and truth.',
  },
];

const diversityTypes = [
  {
    label: 'Christian Fiction',
    body: 'Still the most widely available — contemporary teen life to apocalyptic thrillers.',
  },
  {
    label: 'Islamic Narratives',
    body: 'More Muslim authors telling stories that reflect the challenges and beauty of a faith-filled life.',
  },
  {
    label: 'Jewish Fiction',
    body: 'Tradition, family, and resilience — often in historical contexts.',
  },
  {
    label: 'Interfaith & Universal',
    body: 'Spirituality, compassion, and purpose explored from a broader lens.',
  },
];

export default function FaithBasedTeens() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — centered, warm */}
      <header className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          Faith & Teens
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Empowering Teens Through Faith-Based Literature
        </h1>

        <p className="text-xl text-gray-500 leading-relaxed">
          By weaving timeless spiritual truths into relatable stories, these books do more than entertain — they inspire, uplift, and empower.
        </p>
      </header>

      {/* Opening reflection */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-8 md:p-10">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            In today&apos;s fast-paced, ever-evolving world, teenagers often find themselves caught between societal expectations, digital distractions, and the overwhelming task of discovering who they truly are.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Faith-based literature offers teens a safe space to explore their beliefs, understand moral values, and see themselves reflected in characters who struggle, grow, and triumph through their faith. Whether it&apos;s a tale of forgiveness, a journey of self-discovery, or a battle between good and evil, each narrative serves as a light pointing toward hope, resilience, and purpose.
          </p>
        </div>
      </section>

      {/* The Role of Faith */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Role of Faith in Teen Development
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Teenage years are often described as the most transformative and turbulent phase of life. During this critical stage, faith can serve as a vital anchor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Understanding the Teen Mind and Heart',
              body: 'Cognitive development during these years includes a shift toward abstract thinking — allowing teens to ponder purpose, morality, and existence. Faith-based literature meets them at this mental crossroad.',
            },
            {
              title: 'Faith as a Moral Compass',
              body: 'Books portray characters facing difficult choices. When teens read about others choosing honesty over popularity, kindness over cruelty, they\'re subtly encouraged to adopt these values.',
            },
            {
              title: 'Building Resilience and Emotional Strength',
              body: 'With rising anxiety and social stress among youth, resilience is more crucial than ever. Faith-filled stories show that hardships are not the end, but a path to growth.',
            },
            {
              title: 'Identity Formation Through Spiritual Narratives',
              body: 'Stories rooted in spirituality allow teens to see themselves as part of something larger. Characters struggling with peer pressure or discovering their purpose provide relatable paths.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Themes — 6-card grid */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Key Themes in Faith-Based Literature
          </h2>
          <p className="text-lg text-gray-600">
            These are the themes that make this genre so impactful for young readers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((theme, i) => {
            const Icon = theme.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug pt-2">
                    {theme.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {theme.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Must-Read Books */}
      <section className="space-y-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Must-Read Books for Teens
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            These books offer teens a mirror for their own struggles and a window into the lives of others.
          </p>
        </div>

        <div className="space-y-4">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 text-lg font-bold">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-red-600 font-medium mb-3">
                  by {book.author}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {book.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spectrum of Beliefs */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Representing a Spectrum of Beliefs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Faith-based literature should reflect the real-world diversity of beliefs, cultures, and spiritual experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {diversityTypes.map((type, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-5"
            >
              <p className="font-semibold text-gray-900 mb-2">
                {type.label}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {type.body}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700 leading-relaxed">
            Teens today are growing up in a multicultural, interconnected world. When they read stories that reflect different spiritual backgrounds, they become more empathetic, respectful, and open-minded. Faith-based literature that embraces diversity doesn&apos;t dilute religious values; it strengthens them by promoting unity, understanding, and love across boundaries.
          </p>
        </div>
      </section>

      {/* Guiding Through Doubt */}
      <section className="space-y-8">
        <div className="bg-gray-900 text-white rounded-[2rem] p-10 md:p-14">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold">
              Guiding Teens Through Doubt and Discovery
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Teenage years are a time of questions — about identity, purpose, relationships, and belief. For many teens, this period marks their first personal encounter with spiritual doubt and discovery.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="border-l-2 border-red-500 pl-4">
                <p className="font-semibold text-white mb-2">
                  Doubt Is Not the Enemy
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  It&apos;s a natural step in the journey of belief. Questioning faith doesn&apos;t mean losing it — it can deepen understanding and personal conviction.
                </p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="font-semibold text-white mb-2">
                  A Safe Space for Exploration
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Faith-based literature offers a non-judgmental space where teens can explore spiritual ideas without pressure.
                </p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="font-semibold text-white mb-2">
                  Encouraging Open Conversations
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Discussing a character&apos;s struggle with belief can naturally lead to discussing the teen&apos;s own questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Faith-Based Literature Matters
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Today&apos;s teens are up against a lot — social pressure, identity struggles, mental health challenges, and spiritual uncertainty. That&apos;s exactly why faith-based literature matters more than ever.
            </p>

            <p>
              Faith-based books give young people the tools to navigate life with resilience and grace. They model forgiveness, integrity, courage, and trust in something greater than themselves.
            </p>

            <p className="text-gray-600 text-sm">
              If you write for teens, our guide on{' '}
              <Link href="/blog/why-more-teens-should-write" className="text-red-600 hover:underline">
                why more teens should write
              </Link>{' '}
              pairs naturally with this.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Where Faith Meets Creativity
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            LO Publications offers uplifting, faith-filled books tailored for teens — plus opportunities for young aspiring writers to be published.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
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
          <Link href="/blog/why-more-teens-should-write" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
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
              <p className="text-gray-500 text-sm mt-2">Writing builds confidence, sharpens thinking, and creates real opportunity.</p>
            </div>
          </Link>
          <Link href="/blog/top-10-inspirational-books-for-adolescents" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop"
                alt="Inspirational books for adolescents"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Top 10 Inspirational Books for Adolescents
              </h4>
              <p className="text-gray-500 text-sm mt-2">Ten transformative books that teach empathy and resilience.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}