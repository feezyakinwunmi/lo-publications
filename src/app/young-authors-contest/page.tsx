// src/app/young-authors-contest/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, BookOpen, Trophy, ChevronDown, ChevronUp, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function YoungAuthorsContest() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Young Authors Contest?",
      answer: "The Young Authors Contest is a guided authorship and publishing initiative by LO Publications. Participants receive structured writing training, develop an original short story or movie script, and submit their work for review. Selected entries are professionally edited and published in a printed multi-author book. This is not just a writing competition — it is a pathway to becoming a published author.",
    },
    {
      question: "Who can participate?",
      answer: "The contest is open to students across all disciplines:\n• University students\n• College students\n• Secondary school students\nYou do not need to study literature, arts, or media. Anyone with a story and a willingness to learn can apply.",
    },
    {
      question: "Do participants receive training?",
      answer: "Yes. All participants receive structured writing training before submission. The training focuses on storytelling, structure, character development, clarity, and writing for publication.",
    },
    {
      question: "What kind of work can I submit?",
      answer: "Each participant may submit only one original work:\n• An original short story, or\n• An original movie script\nAcademic essays, poetry, opinion pieces, or previously published work are not accepted.",
    },
    {
      question: "What is the required word count?",
      answer: "• Short stories: 3,500 – 7,500 words\n• Movie scripts: 5,000 – 10,000 words\nSubmissions outside these ranges will not be considered.",
    },
    {
      question: "Is the work required to be original?",
      answer: "Yes. All submissions must be original and unpublished. Plagiarism or AI-generated content will result in immediate disqualification.",
    },
    {
      question: "Will everyone who submits be published?",
      answer: "No. All submissions are reviewed by an editorial panel. Only the strongest entries are shortlisted and published. This ensures quality and credibility.",
    },
    {
      question: "How many entries will be published?",
      answer: "Twenty entries will be shortlisted and published in a professionally printed book by LO Publications.",
    },
    {
      question: "Do authors keep ownership of their work?",
      answer: "Yes. Authors retain full ownership of their intellectual property. By submitting, authors grant LO Publications a non-exclusive right to edit, publish, distribute, and promote the work as part of the contest publication.",
    },
    {
      question: "Are there prizes?",
      answer: "Yes. Cash prizes are awarded to top selected entries:\n• First Prize: $500\n• Second Prize: $300\n• Third Prize: $200\nCash prizes are transferred only to a bank account bearing the winner’s name.",
    },
    {
      question: "Is there a cost to participate?",
      answer: "Participation details, including any fees if applicable, will be clearly communicated through official LO Publications channels.",
    },
    {
      question: "How do participants communicate with organisers?",
      answer: "Only shortlisted participants are added to a dedicated WhatsApp community for coordination and updates during the publishing process. Participants under 18 do not join directly — only a parent or legal guardian is added.",
    },
    {
      question: "What happens if a participant is under 18?",
      answer: "Participants under 18 must provide written parental or guardian consent. All official communication will be handled through the parent or guardian.",
    },
    {
      question: "How are submissions made?",
      answer: "Submissions are sent by email in Microsoft Word format only (DOCX).\nEmail: layo@ithriveonwisdom.com",
    },
    {
      question: "What is the submission deadline?",
      answer: "30 April 2026 at 11:59 pm GMT. Late submissions will not be accepted.",
    },
    {
      question: "Will participants receive feedback?",
      answer: "Due to the volume of submissions, individual feedback is not provided to non-shortlisted entries. Shortlisted participants receive editorial guidance during the publishing process.",
    },
    {
      question: "Can I withdraw my submission?",
      answer: "Yes. Participants may withdraw their submission by written notice before the submission deadline. LO Publications reserves the right to disqualify any entry found to be in breach of the guidelines at any stage.",
    },
    {
      question: "Who decides the winners?",
      answer: "Submissions are reviewed by an editorial panel appointed by LO Publications. Judging is based on originality, storytelling strength, structure, clarity, and overall quality. All decisions are final.",
    },
    {
      question: "Why should I participate?",
      answer: "The Young Authors Contest offers training, structure, and a real publishing opportunity. It helps students move from ideas to execution and from writing to authorship, while building confidence and a strong creative portfolio.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-br from-red-900/10 to-white overflow-hidden">
  <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Open Bible with soft light"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
          >
            Turn Your Story Into a <span className="text-red-900">Published Book</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12"
          >
            The Young Authors Contest is a guided authorship and publishing initiative by LO Publications. We train students to write original short stories or movie scripts, support them through the writing process, and publish selected works in a professionally printed book.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="mailto:layo@ithriveonwisdom.com?subject=Young%20Authors%20Contest%20Submission"
              className="flex text-center items-center px-10 py-5 bg-red-900 text-white font-bold text-lg rounded-full hover:bg-red-800 transition shadow-xl"
            >
              Submit Your Manuscript <ArrowRight className="ml-3" size={24} />
            </a>
            <a
              href="#faq"
              className="flex text-center  items-center px-10 py-5 border-2 border-red-900 text-white font-bold text-lg rounded-full hover:bg-red-50 hover:text-red-800 transition"
            >
              Read FAQ
            </a>
          </motion.div>
        </div>
      </section>

     

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">About the Initiative</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The Young Authors Contest was created to identify and develop emerging storytellers within universities, colleges, and secondary schools. Many students have strong ideas but lack structure, training, and a credible platform. This initiative bridges that gap.
            </p>
            <p className="text-lg text-gray-700">
              Participants receive structured writing training, editorial guidance, and the opportunity to become published authors under LO Publications.
            </p>
          </div>
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 w-fit"
          >
            <img
              src="/yac.jpeg" // Replace with your actual flyer URL
              alt="Young Authors Contest Flyer"
              className="w-[400] h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Who Can Participate?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["University Students", "College Students", "Secondary School Students"].map((group, i) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <Users className="w-16 h-16 text-red-900 mx-auto mb-6" />
                <h3 className="text-2xl text-black font-bold mb-4">{group}</h3>
                <p className="text-gray-700">Open to all disciplines — no literature background required.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">How the Programme Works</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Training", desc: "Structured writing training on storytelling, structure, and more." },
              { step: "2", title: "Writing", desc: "Develop your original short story or movie script with guidance." },
              { step: "3", title: "Submission", desc: "Submit in Microsoft Word format by the deadline." },
              { step: "4", title: "Review", desc: "Editorial panel reviews and shortlists the best entries." },
              { step: "5", title: "Publication", desc: "Shortlisted works edited and published in a book." },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full bg-red-900 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                <p className="text-gray-700">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-red-200 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Prizes & Publication</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { place: "First Prize", amount: "$500" },
              { place: "Second Prize", amount: "$300" },
              { place: "Third Prize", amount: "$200" },
            ].map((prize, i) => (
              <motion.div
                key={prize.place}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl"
              >
                <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2 ">{prize.place}</h3>
                <p className="text-4xl font-bold">{prize.amount}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xl mb-8">
            Twenty entries will be shortlisted and published in a professionally printed book by LO Publications.
          </p>
          <p className="text-lg opacity-90">
            Each shortlisted author receives one complimentary copy.
          </p>
        </div>
      </section>

      {/* FAQ Accordion – 2 columns on wide screens, 1 column on mobile */}
<section id="faq" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
      Frequently Asked Questions
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white"
        >
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
              {faq.question}
            </span>
            {openFaq === index ? (
              <ChevronUp className="text-red-900 flex-shrink-0" size={24} />
            ) : (
              <ChevronDown className="text-red-900 flex-shrink-0" size={24} />
            )}
          </button>

          <AnimatePresence>
            {openFaq === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-5 md:px-8 md:py-6 text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line bg-white">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Final CTA */}
      <section className="py-20 bg-red-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Become a Published Young Author?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Train. Write. Publish. Your story deserves to be told — take the first step today.
          </p>
          <a
            href="mailto:layo@ithriveonwisdom.com?subject=Young%20Authors%20Contest%20-%20I'm%20Interested"
            className="inline-flex items-center px-12 py-6 bg-white text-red-900 font-bold text-xl rounded-full hover:bg-gray-100 transition shadow-2xl"
          >
            Submit Your Interest <ArrowRight className="ml-4" size={28} />
          </a>
        </div>
      </section>
    </main>
  );
}