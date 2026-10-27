// src/app/components/CountUp.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Counts up to the numeric part of `value` (e.g. "50+", "98%") once scrolled into view.
export default function CountUp({ value, duration = 1.8 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !target) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  if (!match) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {match[1]}
      {display}
      {match[3]}
    </span>
  );
}
