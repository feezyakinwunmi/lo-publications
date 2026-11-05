// src/app/resources/tools/CostCalculator.tsx
"use client";

import { useMemo, useState } from "react";
import { Disclaimer, Field, NumberInput, Panel, Stat, money } from "../ui";

// PLACEHOLDER RANGES (CAD). Replace with LO Publications' real pricing before promoting this tool.
const RATES = {
  developmental: { perWord: [0.04, 0.08] as const, label: "Developmental / manuscript editing" },
  copyedit: { perWord: [0.02, 0.04] as const, label: "Copyediting" },
  proofread: { perWord: [0.01, 0.02] as const, label: "Proofreading" },
  cover: { flat: [300, 800] as const, label: "Book cover design" },
  interior: { flat: [250, 700] as const, label: "Interior design and typesetting" },
  isbn: { flat: [0, 0] as const, label: "ISBN (free in Canada through the ISBN Canada agency)" },
  setup: { flat: [100, 300] as const, label: "Publishing platform and distribution set-up" },
};

type Key = keyof typeof RATES;

export default function CostCalculator() {
  const [words, setWords] = useState(50000);
  const [pages, setPages] = useState(200);
  const [copies, setCopies] = useState(100);
  const [selected, setSelected] = useState<Record<Key, boolean>>({
    developmental: false,
    copyedit: true,
    proofread: true,
    cover: true,
    interior: true,
    isbn: true,
    setup: true,
  });
  const [printing, setPrinting] = useState(true);

  const result = useMemo(() => {
    const lines: { label: string; low: number; high: number }[] = [];
    (Object.keys(RATES) as Key[]).forEach((k) => {
      if (!selected[k]) return;
      const r = RATES[k];
      if ("perWord" in r) lines.push({ label: r.label, low: words * r.perWord[0], high: words * r.perWord[1] });
      else lines.push({ label: r.label, low: r.flat[0], high: r.flat[1] });
    });
    if (printing && copies > 0) {
      // Placeholder print-on-demand / short-run estimate per copy
      const perCopy = 2.5 + pages * 0.03;
      lines.push({ label: `Printing, ${copies} copies`, low: perCopy * 0.85 * copies, high: perCopy * 1.3 * copies });
    }
    const low = lines.reduce((s, l) => s + l.low, 0);
    const high = lines.reduce((s, l) => s + l.high, 0);
    return { lines, low, high };
  }, [words, pages, copies, selected, printing]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <Panel>
        <h2 className="mb-6 text-xl font-bold text-gray-900">Your book</h2>
        <div className="space-y-5">
          <Field label="Manuscript word count">
            <NumberInput value={words} onChange={setWords} step={1000} />
          </Field>
          <Field label="Estimated printed pages" hint="Not sure? Use the Word Count to Page Calculator.">
            <NumberInput value={pages} onChange={setPages} step={10} />
          </Field>
        </div>

        <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">Services you need</h2>
        <div className="space-y-3">
          {(Object.keys(RATES) as Key[]).map((k) => (
            <label key={k} className="flex cursor-pointer items-start gap-3 text-gray-800">
              <input
                type="checkbox"
                checked={selected[k]}
                onChange={(e) => setSelected((s) => ({ ...s, [k]: e.target.checked }))}
                className="mt-1 h-4 w-4 accent-[#8d171c]"
              />
              <span>{RATES[k].label}</span>
            </label>
          ))}
          <label className="flex cursor-pointer items-start gap-3 text-gray-800">
            <input
              type="checkbox"
              checked={printing}
              onChange={(e) => setPrinting(e.target.checked)}
              className="mt-1 h-4 w-4 accent-[#8d171c]"
            />
            <span>Printed copies</span>
          </label>
        </div>
        {printing && (
          <div className="mt-5">
            <Field label="Number of printed copies">
              <NumberInput value={copies} onChange={setCopies} step={25} />
            </Field>
          </div>
        )}
      </Panel>

      <div className="space-y-6">
        <Panel>
          <h2 className="mb-5 text-xl font-bold text-gray-900">Your estimate</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Stat label="Low estimate" value={money(result.low)} />
            <Stat label="High estimate" value={money(result.high)} />
          </div>
          {result.lines.length > 0 && (
            <ul className="mt-6 divide-y divide-gray-100 text-sm">
              {result.lines.map((l) => (
                <li key={l.label} className="flex items-start justify-between gap-4 py-3">
                  <span className="text-gray-700">{l.label}</span>
                  <span className="shrink-0 font-semibold text-gray-900">
                    {l.high === 0 ? "Free" : `${money(l.low)} – ${money(l.high)}`}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <Disclaimer>
            These are rough planning ranges in Canadian dollars, not a quotation. Real costs depend on the condition of your
            manuscript, the size and complexity of the book, and the printer you choose. Request a quote for exact figures.
          </Disclaimer>
        </Panel>
      </div>
    </div>
  );
}
