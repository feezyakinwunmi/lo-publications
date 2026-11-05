// src/app/resources/ToolVisual.tsx
// Icons and small animated illustrations for each free tool.
"use client";

import { motion } from "framer-motion";
import { Barcode, Calculator, CalendarDays, ClipboardCheck, Coins, FileText, type LucideIcon } from "lucide-react";
import type { ResourceTool } from "./data";

export const TOOL_ICONS: Record<string, LucideIcon> = {
  "book-publishing-cost-calculator": Calculator,
  "word-count-to-page-calculator": FileText,
  "book-royalty-calculator": Coins,
  "manuscript-readiness-assessment": ClipboardCheck,
  "book-marketing-plan-generator": CalendarDays,
  "barcode-generator": Barcode,
};

function CostArt() {
  const bars = [38, 58, 46, 78, 64];
  return (
    <div className="flex h-20 items-end gap-2">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-4 rounded-t-md bg-white/85"
          initial={{ height: 6 }}
          whileInView={{ height: h }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: "easeOut" }}
        />
      ))}
      <motion.span
        className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-black text-[#8d171c] shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        $
      </motion.span>
    </div>
  );
}

function PagesArt() {
  return (
    <div className="relative h-24 w-28">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-24 w-20 rounded-lg bg-white p-2 shadow-lg"
          style={{ left: i * 12, top: (2 - i) * 4, zIndex: i }}
          initial={{ rotate: 0, opacity: 0 }}
          whileInView={{ rotate: (i - 1) * 7, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
        >
          {[70, 90, 80, 60, 85].map((w, j) => (
            <span key={j} className="mb-1.5 block h-1 rounded bg-blue-200" style={{ width: `${w}%` }} />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function RoyaltyArt() {
  return (
    <div className="flex items-end gap-3">
      {[3, 5, 4].map((n, col) => (
        <div key={col} className="flex flex-col-reverse">
          {Array.from({ length: n }).map((_, i) => (
            <motion.span
              key={i}
              className="-mt-2 block h-4 w-10 rounded-full border-2 border-teal-700/30 bg-amber-300 shadow"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (col * 5 + i) * 0.06, type: "spring", stiffness: 260, damping: 16 }}
            />
          ))}
        </div>
      ))}
      <motion.svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </motion.svg>
    </div>
  );
}

function ReadinessArt() {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 80 80" className="h-24 w-24 -rotate-90">
        <circle cx="40" cy="40" r={r} stroke="rgba(255,255,255,.25)" strokeWidth="9" fill="none" />
        <motion.circle
          cx="40"
          cy="40"
          r={r}
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * 0.22 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-white">78%</span>
    </div>
  );
}

function MarketingArt() {
  const hot = new Set([2, 6, 9, 13, 17]);
  return (
    <div className="grid grid-cols-6 gap-1.5 rounded-xl bg-white/15 p-2.5">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className={`h-4 w-4 rounded ${i === 9 ? "bg-white" : hot.has(i) ? "bg-amber-200" : "bg-white/35"}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, type: "spring", stiffness: 300, damping: 18 }}
        />
      ))}
    </div>
  );
}

function BarcodeArt() {
  const bars = [3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 1, 3, 1, 1, 2, 1, 3];
  return (
    <div className="relative rounded-lg bg-white px-3 pb-2 pt-3 shadow-lg">
      <div className="flex h-14 items-stretch gap-[2px]">
        {bars.map((w, i) => (
          <motion.span
            key={i}
            className="block bg-gray-900"
            style={{ width: w * 2 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.03, ease: "easeOut" }}
          />
        ))}
      </div>
      <p className="mt-1 text-center font-mono text-[9px] tracking-[.2em] text-gray-700">978 0 00000</p>
      <motion.span
        className="absolute inset-x-1 top-3 h-0.5 rounded bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.9)]"
        animate={{ y: [0, 52, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const ART: Record<string, () => React.JSX.Element> = {
  "book-publishing-cost-calculator": CostArt,
  "word-count-to-page-calculator": PagesArt,
  "book-royalty-calculator": RoyaltyArt,
  "manuscript-readiness-assessment": ReadinessArt,
  "book-marketing-plan-generator": MarketingArt,
  "barcode-generator": BarcodeArt,
};

// Coloured panel with the tool's icon and its little illustration.
export function ToolVisual({ tool, tall = false }: { tool: ResourceTool; tall?: boolean }) {
  const Icon = TOOL_ICONS[tool.slug] ?? Calculator;
  const Art = ART[tool.slug];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tool.gradient} ${tall ? "h-56" : "h-44"}`}>
      {/* Decorative circles */}
      <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
      <span className="absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-black/10" />
      <span className="absolute right-16 top-6 h-3 w-3 rounded-full bg-white/40" />

      <div className="relative flex h-full items-center justify-between px-6">
        <motion.span
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white ring-1 ring-white/30 backdrop-blur-sm"
          whileHover={{ rotate: [0, -12, 10, 0] }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={28} />
        </motion.span>
        {Art && <Art />}
      </div>
    </div>
  );
}
