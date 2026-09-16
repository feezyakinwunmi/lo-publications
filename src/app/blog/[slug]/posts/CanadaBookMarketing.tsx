// app/blog/[slug]/posts/CanadaBookMarketing.tsx

import { CheckCircle, MapPin, BookOpen, Users, Megaphone, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const mistakes = [
  {
    number: '01',
    icon: TrendingUp,
    title: 'Assuming Canadian Ads Scale Like American Ads',
    content:
      'One common mistake is assuming that if an advertising strategy works in the U.S., switching the targeting to Canada will produce the same result. It may not. A niche Canadian audience becomes smaller once genre, age, language, location, and reading preferences are added. A campaign can reach saturation before generating enough conversions to become profitable.',
    points: [
      'There is no universal benchmark proving Canadian advertising is always more expensive.',
      'The practical issue is audience scale — Canada has a smaller population.',
      'Narrowly targeted campaigns can exhaust their potential audience more quickly.',
      'Test performance rather than assume a U.S. strategy transfers unchanged.',
    ],
  },
  {
    number: '02',
    icon: Megaphone,
    title: 'Treating Canada-Wide Physical Promotion as Cheap Grassroots Marketing',
    content:
      'Physical ARCs, signed copies, and giveaway books can create personal connections with readers and reviewers. But Canadian geography makes fulfillment expensive. Canada Post\'s published rates list non-standard Lettermail weighing more than 200 grams and up to 500 grams at $14.99 within Canada before applicable taxes.',
    points: [
      'For one reviewer, that may be reasonable. For 100 recipients, postage alone could reach approximately $1,499.',
      'Packaging, tracking, dimensions, weight, and parcel requirements can increase the total.',
      'Reserve physical copies for strategically important recipients.',
      'Use digital ARCs for broader outreach where appropriate.',
    ],
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'Assuming Distribution Automatically Creates Demand',
    content:
      'Making a book available through a distribution network does not mean readers will buy it or bookstores will stock it. IngramSpark\'s network can make titles available to bookstores, libraries, schools, and online retailers. That is useful infrastructure. But availability is not demand.',
    points: [
      'Bookstores have limited shelf space and financial risk to manage.',
      'Pricing, wholesale discount, returnability, metadata, and demand influence stocking.',
      'A tailored pitch to a small number of relevant bookstores beats a generic national request.',
      'Distribution is infrastructure, not marketing.',
    ],
  },
  {
    number: '04',
    icon: Users,
    title: 'Underestimating Canadian Readers',
    content:
      'The answer isn\'t simply that Canada is "too small." A 2025 Canadian consumer study reported that 38% of Canadian book buyers searched for books by Canadian authors or illustrators, up from 32% in 2024. It also found that 29% searched for books about Canada or Canadian regions.',
    points: [
      '73% of Canadian book buyers visited a physical bookstore in a typical month.',
      '80% visited a bookstore online.',
      'Canadian identity, settings, and bookstore discovery can be valuable marketing angles.',
      'The strategy is not to reach everyone — it is to reach the right communities.',
    ],
  },
  {
    number: '05',
    icon: Megaphone,
    title: 'Expecting Publicity to Replace Marketing',
    content:
      'A publicist can open doors. They cannot manufacture demand. New authors sometimes assume that a publisher, publicist, or press release will automatically produce national media coverage. It won\'t. Publicity depends on the book, author, story angle, timing, geography, relationships, and editorial priorities.',
    points: [
      'A debut author needs to give media outlets a reason to care beyond "I published a book."',
      'Local exposure can reach people more likely to buy, recommend, review, or share the book.',
      'Track sales, event attendance, reviews, referrals, mailing-list growth.',
      'The goal isn\'t exposure — it is creating recommendation pathways.',
    ],
  },
];

const regionalExamples = [
  {
    region: 'Nova Scotia',
    genre: 'Historical Mystery',
    angle: 'Atlantic Canadian readers interested in historical fiction and regional history.',
    message: '"A murder mystery set along Nova Scotia\'s South Shore."',
  },
  {
    region: 'Vancouver',
    genre: 'Memoir',
    angle: 'Libraries, newcomer organizations, community groups, and book clubs.',
    message: 'A story about immigration and belonging on the West Coast.',
  },
  {
    region: 'Halifax',
    genre: 'Mystery',
    angle: 'Regional readers, libraries, historical organizations, and Atlantic Canadian communities.',
    message: 'A mystery rooted in local history and place.',
  },
  {
    region: 'Saskatoon',
    genre: 'Nonfiction',
    angle: 'Agriculture, regional history, environmental issues, and regional media.',
    message: 'Prairie drought, farming, and the people who live with both.',
  },
];

export default function CanadaBookMarketing() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero — editorial style */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <MapPin className="w-4 h-4" />
          Book Marketing — Canada
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What New Authors in Canada Get Wrong About Book Marketing
          </h1>

          <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
            A breakdown of Canadian publishing realities.
          </p>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              A Canadian author can spend hundreds of dollars sending books across the country, pay to advertise to an audience too small to convert profitably, and secure distribution that makes a book easy to order without giving readers or booksellers a reason to seek it out.
            </p>

            <p className="text-gray-900 font-medium text-xl">
              That is the central problem with Canadian book marketing: authors often mistake national availability for national demand.
            </p>

            <p>
              Canada had a population of approximately 41.5 million on January 1, 2026. Its population is spread across a vast geographic area and divided into distinct regional, linguistic, cultural, and genre-specific markets.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl my-6">
              <p className="text-gray-700 text-sm">
                A strategy that works in the United States may work in Canada — but not necessarily at the same scale, cost, or speed. The goal isn&apos;t to treat Canada as an impossible market. It is to stop treating the entire country as one advertising audience.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Mistakes — big numbered rows */}
      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Five Common Mistakes
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            These are the assumptions that quietly cost Canadian authors time, money, and momentum.
          </p>
        </div>

        <div className="space-y-12">
          {mistakes.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Big number watermark */}
                <span
                  aria-hidden="true"
                  className="absolute top-6 right-8 text-[6rem] md:text-[8rem] font-bold leading-none text-gray-50 select-none"
                >
                  {item.number}
                </span>

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 leading-snug pr-16">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.content}
                  </p>

                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <p className="font-medium text-gray-900 mb-4">
                      What to do instead:
                    </p>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
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
        </div>
      </section>

      {/* Regional Examples */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Precision Looks Like in Practice
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Regional identity is not a limitation — it is a targeting advantage. Here is how the same principles play out across different Canadian markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {regionalExamples.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {item.region}
                </span>
                <span className="ml-auto text-xs px-2 py-1 bg-gray-100 rounded-lg text-gray-500">
                  {item.genre}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.angle}
              </p>

              <p className="text-red-600 text-sm font-medium italic">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Canadian Advantage */}
      <section className="space-y-8">
        <div className="bg-gray-900 text-white rounded-[2rem] p-10 md:p-14">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold">
              The Canadian Marketing Advantage
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              The biggest mistake Canadian authors can make is thinking their market is either too small or exactly like the American market. Neither is true.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-3xl font-bold text-white">48M</p>
                <p className="text-gray-400 text-sm mt-1">
                  Physical trade books sold in Canada in 2025
                </p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-3xl font-bold text-white">$1.14B</p>
                <p className="text-gray-400 text-sm mt-1">
                  Value of the Canadian physical book market in 2025
                </p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-3xl font-bold text-white">38%</p>
                <p className="text-gray-400 text-sm mt-1">
                  Canadian book buyers who search for Canadian authors or illustrators
                </p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-3xl font-bold text-white">73%</p>
                <p className="text-gray-400 text-sm mt-1">
                  Buyers who visited a physical bookstore in a typical month
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-lg">
          The opportunity is to market with precision. A Prince Edward Island historical novelist might start with regional bookstores, libraries, festivals, historical societies, and local media. A Toronto business author might focus on professional associations, universities, conferences, and Canadian business podcasts. A bilingual Montreal author may need distinct English- and French-language campaigns.
        </p>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Canadian Book Marketing Doesn&apos;t Require Thinking Smaller
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              It requires thinking more strategically about where small, relevant audiences can compound into a real readership.
            </p>

            <ul className="space-y-3 not-prose">
              {[
                'Use digital advertising where it can scale.',
                'Use physical ARCs strategically.',
                'Build bookstore relationships instead of assuming distribution creates demand.',
                'Target regional media and communities.',
                'Use larger markets such as the U.S. and U.K. to expand beyond Canada\'s finite audience when the economics make sense.',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm">
              If you&apos;re still working out your overall author strategy, read our guide on{' '}
              <Link href="/blog/book-marketing-101-social-media-for-first-time-authors" className="text-red-600 hover:underline">
                social media marketing for first-time authors
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
            Ready to Market Your Book With Precision?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We help Canadian authors build marketing strategies that reach the right readers — not just the biggest audience.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-gray-200 pt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          You Might Also Like
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/book-marketing-101-social-media-for-first-time-authors" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop"
                alt="Book marketing with social media"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Book Marketing 101: Social Media for First-Time Authors
              </h4>
              <p className="text-gray-500 text-sm mt-2">How first-time authors can use social media to build an author brand and keep momentum after launch day.</p>
            </div>
          </Link>
          <Link href="/blog/why-do-ottawa-publishers-reject-manuscripts" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop"
                alt="Publishers reject manuscripts"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                Why Do Ottawa Publishers Reject Manuscripts?
              </h4>
              <p className="text-gray-500 text-sm mt-2">The most common reasons Ottawa publishers reject manuscripts — and how authors can respond strategically.</p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}