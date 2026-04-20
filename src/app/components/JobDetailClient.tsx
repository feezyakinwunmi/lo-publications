"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Mail, ArrowLeft, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Job } from "../data/jobsData";

type JobDetailClientProps = {
  job: Job;
};

export default function JobDetailClient({ job }: JobDetailClientProps) {
  return (
    <>
      {/* Hero Section with Job Title */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{job.department}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Back button */}
          <Link href="/careers">
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-800 mb-10 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to all positions
            </button>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About the Role */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">About the Role</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
                  {job.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">Key Responsibilities</h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={22} className="text-red-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">What You'll Need</h2>
                <ul className="space-y-4">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={22} className="text-red-700 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar - How to Apply */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:sticky lg:top-28 h-fit"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6">How to Apply</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-600 mb-4">
                      Send us your application with the following:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-red-700">•</span>
                        <span>Your CV / Resume</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700">•</span>
                        <span>2-3 samples of your work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-700">•</span>
                        <span>A brief cover letter</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href={`mailto:${job.applyEmail}?subject=Application for ${job.title}`}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-red-900 hover:bg-red-800 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-xl"
                  >
                    <Mail size={20} />
                    Apply Now
                  </a>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Or email your application to: <br />
                    <a href={`mailto:${job.applyEmail}`} className="text-red-700 hover:underline">
                      {job.applyEmail}
                    </a>
                  </p>
                </div>
              </div>

              {/* Share role */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Know someone perfect for this role? <br />
                  Share it with them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join us in publishing truth with love and purpose.
          </p>
          <a
            href={`mailto:${job.applyEmail}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl"
          >
            Submit Your Application
            <Mail size={20} />
          </a>
        </div>
      </section>
    </>
  );
}