"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Briefcase, ArrowRight, Eye } from "lucide-react";
import { getAllJobs } from "../data/jobsData";

export default function CareersPage() {
  const jobs = getAllJobs();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white mt-20 md:mt-0">
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team working together"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Join Our <span className="text-red-400">Mission</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Build something eternal. Use your gifts to publish truth with love and purpose.
          </motion.p>
        </div>
      </section>

      {/* Jobs Grid Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're looking for passionate people to help us create books that illuminate the soul.
            </p>
          </motion.div>

          {/* Grid: changes based on screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-red-300"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Department badge */}
                  <span className="absolute top-4 right-4 bg-red-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {job.department}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-red-800 transition-colors">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {job.shortDescription}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <Briefcase size={16} />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* Apply button */}
                  <Link href={`/careers/${job.slug}`}>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-red-900 transition-all duration-300 group/btn">
                      <Eye size={18} />
                      <span>View Details</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - Why join us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 text-center text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Don't see the perfect role?
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're always looking for talented people who share our mission. Send us your resume and we'll keep you in mind.
            </p>
            <a
              href="mailto:layo@lopublications.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold text-lg rounded-full transition-all shadow-xl hover:shadow-2xl"
            >
              Send Speculative Application
              <ArrowRight size={22} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}