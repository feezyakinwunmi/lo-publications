// src/app/resources/tools/PageCalculator.tsx
"use client";

import { useMemo, useState } from "react";
import { Disclaimer, Field, NumberInput, Panel, Select, Stat, num } from "../ui";

// Approximate words per page at 11 pt, single-spaced body text, for each trim size.
const TRIMS = [
  { value: "5x8", label: '5" × 8" (compact paperback)', wpp: 290 },
  { value: "5.5x8.5", label: '5.5" × 8.5" (digest)', wpp: 330 },
  { value: "6x9", label: '6" × 9" (trade paperback)', wpp: 375 },
] as const;
type Trim = (typeof TRIMS)[number]["value"];

const FONTS = [
  { value: "10", label: "10 pt (compact)", mult: 1.12 },
  { value: "11", label: "11 pt (standard)", mult: 1 },
  { value: "12", label: "12 pt (larger, easier to read)", mult: 0.88 },
] as const;
type Font = (typeof FONTS)[number]["value"];

const SPACING = [
  { value: "1.15", label: "1.15 (standard)", mult: 1 },
  { value: "1.3", label: "1.3 (airy)", mult: 0.9 },
  { value: "1.5", label: "1.5 (very airy)", mult: 0.8 },
] as const;
type Spacing = (typeof SPACING)[number]["value"];

const estimate = (words: number, trim: Trim, font: Font, spacing: Spacing, extra: number) => {
  const wpp =
    TRIMS.find((t) => t.value === trim)!.wpp *
    FONTS.find((f) => f.value === font)!.mult *
    SPACING.find((s) => s.value === spacing)!.mult;
  const body = Math.ceil(words / wpp);
  let total = body + extra;
  if (total % 2) total += 1; // printed books use whole sheets, so page counts are even
  return { wpp: Math.round(wpp), body, total };
};

export default function PageCalculator() {
  const [words, setWords] = useState(50000);
  const [trim, setTrim] = useState<Trim>("6x9");
  const [font, setFont] = useState<Font>("11");
  const [spacing, setSpacing] = useState<Spacing>("1.15");
  const [extra, setExtra] = useState(12);

  const r = useMemo(() => estimate(words, trim, font, spacing, extra), [words, trim, font, spacing, extra]);
  const examples = [10000, 30000, 50000, 80000, 100000];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <Panel>
        <h2 className="mb-6 text-xl font-bold text-gray-900">Your manuscript</h2>
        <div className="space-y-5">
          <Field label="Word count">
            <NumberInput value={words} onChange={setWords} step={1000} />
          </Field>
          <Field label="Book size (trim)">
            <Select value={trim} onChange={setTrim} options={TRIMS.map((t) => ({ value: t.value, label: t.label }))} />
          </Field>
          <Field label="Font size">
            <Select value={font} onChange={setFont} options={FONTS.map((f) => ({ value: f.value, label: f.label }))} />
          </Field>
          <Field label="Line spacing">
            <Select value={spacing} onChange={setSpacing} options={SPACING.map((s) => ({ value: s.value, label: s.label }))} />
          </Field>
          <Field label="Front and back matter pages" hint="Title page, copyright, contents, dedication, about the author and so on.">
            <NumberInput value={extra} onChange={setExtra} step={2} />
          </Field>
        </div>
      </Panel>

      <div className="space-y-6">
        <Panel>
          <h2 className="mb-5 text-xl font-bold text-gray-900">Your estimate</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Total pages" value={num(r.total)} sub="Rounded to an even number" />
            <Stat label="Body pages" value={num(r.body)} />
            <Stat label="Words per page" value={`~${num(r.wpp)}`} />
          </div>
          <Disclaimer>
            This is an estimate. Chapter openings, headings, images, margins and the typeface all change the final page
            count. Your designer can confirm it once the interior is typeset.
          </Disclaimer>
        </Panel>

        <Panel>
          <h2 className="mb-4 text-xl font-bold text-gray-900">Common word counts at these settings</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                <th className="py-2 font-semibold">Words</th>
                <th className="py-2 font-semibold">Estimated pages</th>
              </tr>
            </thead>
            <tbody>
              {examples.map((w) => (
                <tr key={w} className="border-b border-gray-100">
                  <td className="py-2.5 text-gray-800">{num(w)}</td>
                  <td className="py-2.5 font-semibold text-gray-900">{num(estimate(w, trim, font, spacing, extra).total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </div>
  );
}
