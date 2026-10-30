// app/blog/[slug]/posts/ChooseChildrensBookIllustrator.tsx

import {
  CheckCircle,
  Palette,
  Users,
  Search,
  Sparkles,
  Brush,
} from 'lucide-react';
import Link from 'next/link';

const lookFor = [
  {
    title: 'A relevant portfolio',
    desc: "Look for finished children's book work, not just single illustrations. A strong portfolio shows that the artist can sustain a style across many pages.",
  },
  {
    title: 'A style that fits your story',
    desc: "A gentle watercolor look suits a bedtime story, while bold, bright shapes suit a funny, fast-paced one. The art should match your story's tone.",
  },
  {
    title: 'Experience with your age group',
    desc: 'Picture books for toddlers, early readers, and middle-grade stories each call for different levels of detail and complexity.',
  },
  {
    title: 'Consistent characters',
    desc: 'Your main character must look the same on page 2 and page 22. Ask to see how the illustrator handles character sheets and expressions.',
  },
  {
    title: 'Storytelling ability',
    desc: 'A good illustrator adds to the narrative with details, emotions, and visual humor instead of simply repeating the text.',
  },
  {
    title: 'Clear communication and reliability',
    desc: 'Look for someone who responds promptly, accepts feedback gracefully, and keeps to deadlines.',
  },
  {
    title: 'Transparent terms',
    desc: 'Agree in writing on the fee, the number of revisions, the timeline, and who owns the rights to the artwork.',
  },
  {
    title: 'Print-ready delivery',
    desc: "Confirm that the final files will meet your printer's or publishing platform's requirements for size and resolution.",
  },
];

export default function ChooseChildrensBookIllustrator() {
  return (
    <article className="max-w-4xl mx-auto space-y-20">
      {/* Hero */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
          <Palette className="w-4 h-4" />
          Children&apos;s Books — Illustration
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          How to Choose an Illustrator for Your Children&apos;s Book
        </h1>

        <p className="text-xl text-gray-500 italic border-l-4 border-red-500 pl-6 py-2">
          A professional children&apos;s book illustrator is not a luxury. It is a necessity.
        </p>

        <div className="max-w-none text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            If you love writing children&apos;s books and enjoy illustrating, don&apos;t try to do everything alone. Most authors eventually discover that a professional children&apos;s book illustrator is not a luxury. It is a necessity.
          </p>
          <p>
            You might be wondering, &ldquo;How will I find an illustrator for my children&apos;s book?&rdquo; You might also be asking whether you should work as an author and illustrator team before submission, or whether you can submit your text only. This article answers both questions and guides you through a convenient way to get your book professionally illustrated.
          </p>
        </div>
      </header>

      {/* Why You Need an Illustrator */}
      <section className="space-y-6">
        <div className="md:flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <Brush className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why You Need a Children&apos;s Book Illustrator
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                A children&apos;s book illustrator creates the images that go along with your story. But there is something many authors don&apos;t realize: the illustrator is also a storyteller. That is why not every artist is a children&apos;s book illustrator.
              </p>
              <p>
                The writer isn&apos;t the only one who tells the story; the illustrator also brings it to life through visuals, whether those images echo the words on the page or deliver a completely different message. Together, the author and illustrator form a partnership that turns a manuscript into a children&apos;s book.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="font-medium text-gray-900 mb-4">Here is why this matters for you:</p>
          <ul className="space-y-3">
            {[
              { label: 'Children look at pictures first.', text: 'Young readers connect with colors, characters, and expressions before they follow the words.' },
              { label: 'Illustrations convey emotion.', text: 'A single well-drawn image can show joy or fear that would take a paragraph to explain.' },
              { label: 'Professional visuals build credibility.', text: 'Parents, teachers, librarians, and publishers judge a book by its cover and its pages.' },
              { label: 'Strong art helps your book sell.', text: 'In a crowded market, quality illustration makes your book stand out on shelves and online.' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900">{item.label}</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before Submission */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <Users className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Should Authors and Illustrators Work Together Before Submission?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This is one of the most common questions new authors ask, and the answer depends on your goal.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Submitting to a traditional publisher
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              You usually submit your text only. Publishers often prefer to choose their own illustrator, so a manuscript with unsolicited illustrations can work against you, unless you are a professional author-illustrator.
            </p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-3xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Self-publishing
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              You need a complete, finished book, which means finding an illustrator yourself. Choosing the right professional will make all the difference.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8">
          <p className="text-gray-700">
            Either way, understanding the illustrator&apos;s role helps you write a stronger story, because the best children&apos;s manuscripts leave room for the pictures to do part of the storytelling.
          </p>
        </div>
      </section>

      {/* What to Look For */}
      <section className="space-y-8">
        <div className="md:flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <Search className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Look for in a Professional Illustrator
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Not every talented artist is the right fit for a children&apos;s book. Before you commit, check the following:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {lookFor.map((item, i) => (
            <div key={i} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 text-4xl font-bold leading-none text-gray-100 select-none"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-10">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <p className="text-gray-700">
            A good final test is to ask for a <strong>sample character sketch</strong> before you hire. How the illustrator interprets your story in that first sketch will tell you a lot.
          </p>
        </div>
      </section>

      {/* LO Media House */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-[2rem] p-10 md:p-14">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Let LO Media House Handle Your Children&apos;s Book Illustration
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Finding the right illustrator doesn&apos;t have to be stressful. At LO Media House, we take that burden off your shoulders. We connect you with a professional children&apos;s book illustrator who understands your vision and knows how to tell your story through images, not just decorate your pages.
            </p>
            <p>
              From the first character sketch to the final illustration, we manage the entire process so you can focus on what you do best: writing. Your words deserve pictures that capture a child&apos;s imagination and keep them turning the page.
            </p>
          </div>
          <div className="bg-white/70 rounded-2xl p-6">
            <p className="font-medium text-gray-900 mb-4">Why authors choose LO Media House:</p>
            <ul className="space-y-3">
              {[
                "Professional illustrators experienced in children's books",
                'A smooth, managed process from concept to final artwork',
                "Illustrations that match your story's tone and your target age group",
                'One point of contact, with no chasing freelancers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Conclusion</h2>
        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Hiring an illustrator matters more than most new authors expect, since children look at the visuals before they read a single word. Whether you choose an illustrator yourself or work with a team, look for relevant experience, a style that fits your story, and clear terms.
          </p>
          <p>
            And if you&apos;d rather not dig through portfolios, LO Media House can match you with an illustrator and manage the process from the first sketch to the final art.
          </p>
          <p className="text-gray-900 font-medium">
            If you&apos;re sending your manuscript to us, submit the text only and we&apos;ll choose an illustrator suited to your story.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Bring Your Story to Life?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Send us your manuscript — text only — and we&apos;ll match you with an illustrator suited to your story.
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Submit Your Manuscript
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
            href="/blog/how-to-publish-a-childrens-picture-book-ottawa"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                alt="Child reading a picture book"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition">
                How to Publish a Children&apos;s Picture Book in Ottawa
              </h4>
              <p className="text-gray-500 text-sm mt-2">
                From your imagination to the printed page — every step of the journey.
              </p>
            </div>
          </Link>
          <Link
            href="/blog/building-a-reading-habit-tips-for-young-readers"
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop"
                alt="Books for young readers"
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
