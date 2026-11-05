// src/app/resources/ToolHero.tsx
"use client";

import Link from "next/link";
import { MotionConfig, motion } from "framer-motion";
import { Clock, Gift, Lock } from "lucide-react";
import type { ResourceTool } from "./data";
import { TOOL_ICONS } from "./ToolVisual";

export default function ToolHero({ tool }: { tool: ResourceTool }) {
  const Icon = TOOL_ICONS[tool.slug];
  return (
    <MotionConfig reducedMotion="user">
      <section className={`relative overflow-hidden bg-gradient-to-br ${tool.gradient} text-white`}>
        <div className="absolute inset-0 bg-black/25" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[.08]"
          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />
        <motion.span
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-2xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/75">
              <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">&gt;</span>{" "}
              <Link href="/resources" className="hover:text-white">Free Resources</Link> <span aria-hidden="true">&gt;</span>{" "}
              <span className="text-white">{tool.title}</span>
            </nav>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Free tool · {tool.category}</span>
            <h1 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-tight md:text-5xl">{tool.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">{tool.short}</p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><Gift size={15} /> Free</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><Clock size={15} /> About {tool.time}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur"><Lock size={15} /> Nothing is saved</span>
            </div>
          </motion.div>

          {Icon && (
            <motion.div
              className="relative mx-auto shrink-0 md:mx-0"
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
            >
              <motion.div
                className="flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white/20 shadow-2xl ring-1 ring-white/40 backdrop-blur-md md:h-44 md:w-44"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={72} strokeWidth={1.6} />
              </motion.div>
              <motion.span
                className="absolute -bottom-3 -left-4 h-10 w-10 rounded-2xl bg-white/30"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.span
                className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-amber-300"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}
