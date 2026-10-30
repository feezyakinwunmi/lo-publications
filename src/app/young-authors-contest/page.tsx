// src/app/young-authors-contest/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  BookOpen,
  Trophy,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Globe,
  UserCheck,
  ShieldCheck,
  FileText,
  Film,
  AlertCircle,
  Phone,
  Mail,
} from "lucide-react";

// Respondent link for the registration Google Form
const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe2hggLkX-7xYLd_vCbfJ5GuN30mAHbsIu5PTVul1CwMBRqWQ/viewform";

const timeline = [
  { icon: UserCheck, label: "Registration", date: "October 5 – November 14, 2026", note: "$10 registration fee, non-refundable" },
  { icon: FileText, label: "Submission Period", date: "November 15, 2026 – January 15, 2027", note: "Final deadline: January 15, 2027" },
  { icon: Trophy, label: "Winners Announced", date: "February 13, 2027" },
  { icon: BookOpen, label: "Publication", date: "Target: March 2027", note: "Selected entries published by LO Publications" },
];

const faqs = [
  {
    question: "What is the Young Authors Contest 2027?",
    answer:
      "The Young Authors Contest is a writing contest by LO Publications for young writers aged 17–30. Participants submit an original short story or movie script, and selected entries are intended for publication by LO Publications.",
  },
  {
    question: "Who can enter?",
    answer:
      "The contest is open internationally to writers aged 17–30.\n• Participants aged 17 require parent or legal guardian consent\n• One entry per participant\n• Work must be original and unpublished",
  },
  {
    question: "What categories can I enter?",
    answer: "Choose one category:\n• Short Story: 1,000–3,000 words\n• Movie Script: maximum 15 pages",
  },
  {
    question: "How do I register, and what does it cost?",
    answer:
      "Register through the online registration form between October 5 and November 14, 2026. The registration fee is $10 and is non-refundable.",
  },
  {
    question: "Are registration and submission the same thing?",
    answer:
      "No. Registration and submission are two separate steps. Register first, then prepare and submit your completed work during the submission period (November 15, 2026 – January 15, 2027).",
  },
  {
    question: "What is the submission deadline?",
    answer: "The final deadline is January 15, 2027. Late submissions will not be accepted.",
  },
  {
    question: "Are there prizes?",
    answer: "Yes:\n• 1st Place: $1,000\n• 2nd Place: $500\n• 3rd Place: $250",
  },
  {
    question: "When are winners announced?",
    answer: "Winners will be announced on February 13, 2027.",
  },
  {
    question: "Will the winning entries be published?",
    answer: "Selected entries are intended for publication by LO Publications, with a publication target of March 2027.",
  },
  {
    question: "Is the work required to be original?",
    answer:
      "Yes. All submissions must be original and unpublished. Plagiarism or AI-generated content will result in immediate disqualification.",
  },
  {
    question: "Do authors keep ownership of their work?",
    answer:
      "Yes. Authors retain full ownership of their intellectual property. By submitting, authors grant LO Publications a non-exclusive right to edit, publish, distribute, and promote the work as part of the contest publication.",
  },
  {
    question: "Who decides the winners?",
    answer:
      "Submissions are reviewed by an editorial panel appointed by LO Publications. Judging is based on originality, storytelling strength, structure, clarity, and overall quality. All decisions are final.",
  },
  {
    question: "Will participants receive feedback?",
    answer:
      "Due to the volume of submissions, individual feedback is not provided to every entry. Selected participants receive editorial guidance during the publishing process.",
  },
  {
    question: "How do I contact the organisers?",
    answer: "Email layo@lopublications.com or call +1 (514) 219-2987.",
  },
];

function ApplyButton({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function YoungAuthorsContest() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-br from-red-900/10 to-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Writing a story by hand"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-full">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-yellow-400 text-black font-bold tracking-wide text-sm md:text-base"
          >
            YOUNG AUTHORS CONTEST 2027
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
          >
            Turn Your Story Into a <span className="text-red-500">Published Book</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Are you 17–30 years old? Do you have a story to tell? Enter the LO Publications Young Authors Contest 2027
            and get the opportunity to have your creative work considered for publication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <ApplyButton className="flex text-center justify-center items-center px-10 py-5 bg-red-900 text-white font-bold text-lg rounded-full hover:bg-red-800 transition shadow-xl">
              Apply Now <ArrowRight className="ml-3" size={24} />
            </ApplyButton>
            <a
              href="#faq"
              className="flex text-center justify-center items-center px-10 py-5 border-2 border-red-900 text-white font-bold text-lg rounded-full hover:bg-red-50 hover:text-red-800 transition"
            >
              Read FAQ
            </a>
          </motion.div>
        </div>
      </section>

      {/* About + flyer */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">About the Contest</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The Young Authors Contest gives emerging storytellers aged 17–30, anywhere in the world, a real path to
              publication. Write an original short story or movie script, and your work could be published by LO
              Publications.
            </p>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-900 mb-2">Registration</p>
              <p className="text-2xl font-bold text-black">October 5 – November 14, 2026</p>
              <p className="text-gray-700 mt-1">Registration fee: $10 (non-refundable)</p>
            </div>
            <ApplyButton className="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-red-900 transition shadow-lg">
              Apply Now <ArrowRight className="ml-3" size={20} />
            </ApplyButton>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 max-w-md mx-auto"
          >
            <img
              src="/young-A.jpeg"
              alt="Young Author's Contest 2027 flyer: ages 17–30, registration October 5 – November 14, 2026, $10 fee"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Choose Your Category</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: BookOpen, title: "Short Story", detail: "1,000–3,000 words" },
              { icon: Film, title: "Movie Script", detail: "Maximum 15 pages" },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <cat.icon className="w-16 h-16 text-red-900 mx-auto mb-6" />
                <h3 className="text-2xl text-black font-bold mb-2">{cat.title}</h3>
                <p className="text-xl text-gray-700">{cat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Enter */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">Who Can Enter?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Globe, text: "Open internationally" },
              { icon: Calendar, text: "Ages 17–30" },
              { icon: ShieldCheck, text: "Participants aged 17 require parent/legal guardian consent" },
              { icon: UserCheck, text: "One entry per participant" },
              { icon: FileText, text: "Work must be original and unpublished" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-3xl border border-gray-200 text-center"
              >
                <item.icon className="w-10 h-10 text-red-900 mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-6">Key Dates</h2>
          <div className="max-w-3xl mx-auto mb-14 flex items-start gap-4 bg-yellow-50 border border-yellow-300 rounded-2xl p-6">
            <AlertCircle className="w-7 h-7 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-800 text-lg">
              <strong>Important:</strong> Registration and submission are two separate steps. Register first, then
              prepare and submit your completed work during the submission period.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full bg-red-900 text-white flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <step.icon size={34} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{step.label}</h3>
                <p className="text-gray-900 font-semibold">{step.date}</p>
                {step.note && <p className="text-gray-600 text-sm mt-1">{step.note}</p>}
                {i < timeline.length - 1 && (
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
              { place: "🥇 1st Place", amount: "$1,000" },
              { place: "🥈 2nd Place", amount: "$500" },
              { place: "🥉 3rd Place", amount: "$250" },
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
                <h3 className="text-2xl font-bold mb-2">{prize.place}</h3>
                <p className="text-4xl font-bold">{prize.amount}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xl mb-4">Winners announced February 13, 2027.</p>
          <p className="text-lg opacity-90 mb-10">
            Selected entries are intended for publication by LO Publications. Publication target: March 2027.
          </p>
          <ApplyButton className="inline-flex items-center px-12 py-6 bg-white text-red-900 font-bold text-xl rounded-full hover:bg-gray-100 transition shadow-2xl">
            Apply Now <ArrowRight className="ml-4" size={28} />
          </ApplyButton>
        </div>
      </section>

      {/* FAQ Accordion – 2 columns on wide screens, 1 column on mobile */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6 items-start">
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
                  <span className="text-lg md:text-xl font-semibold text-gray-900 pr-4">{faq.question}</span>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Become a Published Young Author?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Registration is open October 5 – November 14, 2026. Your story deserves to be told — take the first step
            today.
          </p>
          <ApplyButton className="inline-flex items-center px-12 py-6 bg-white text-red-900 font-bold text-xl rounded-full hover:bg-gray-100 transition shadow-2xl">
            Apply Now <ArrowRight className="ml-4" size={28} />
          </ApplyButton>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-white/90">
            <a href="tel:+15142192987" className="inline-flex items-center justify-center gap-2 hover:text-white">
              <Phone size={20} /> +1 (514) 219-2987
            </a>
            <a
              href="mailto:layo@lopublications.com?subject=Young%20Authors%20Contest%202027"
              className="inline-flex items-center justify-center gap-2 hover:text-white"
            >
              <Mail size={20} /> layo@lopublications.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
