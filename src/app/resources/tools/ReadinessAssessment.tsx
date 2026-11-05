// src/app/resources/tools/ReadinessAssessment.tsx
"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, CircleAlert, CircleDashed } from "lucide-react";
import { Panel } from "../ui";

type Answer = 2 | 1 | 0; // yes, partly, no

const QUESTIONS: { area: string; q: string; tip: string }[] = [
  { area: "Content", q: "The manuscript is complete from first page to last.", tip: "Finish the full draft before investing in editing or design." },
  { area: "Content", q: "I can describe the book's main idea or message in two sentences.", tip: "A clear central idea guides every editorial decision." },
  { area: "Content", q: "The structure is settled: chapters flow in a logical order.", tip: "A manuscript assessment can reveal structural gaps and repetition." },
  { area: "Editing", q: "I have revised the manuscript at least twice myself.", tip: "Revise for clarity and cut repetition before paying for editing." },
  { area: "Editing", q: "Someone other than me has read it and given honest feedback.", tip: "Beta readers catch what authors can no longer see." },
  { area: "Editing", q: "A professional editor has reviewed it.", tip: "Professional editing is the biggest single step toward publication quality." },
  { area: "Editing", q: "It has been proofread for spelling, grammar and punctuation.", tip: "Proofreading is the final check once the text is settled." },
  { area: "Audience", q: "I know exactly who this book is for.", tip: "'Everyone' is not an audience. Name the reader you want to reach." },
  { area: "Audience", q: "I know which books are similar and how mine is different.", tip: "Comparable titles help publishers and readers place your book." },
  { area: "Rights", q: "All quotations, images and sources are used with permission or properly credited.", tip: "Confirm permissions before publication to avoid problems later." },
  { area: "Preparation", q: "I have a short author biography ready.", tip: "You will need it for the back cover, website and retailers." },
  { area: "Preparation", q: "I have a draft back-cover description of the book.", tip: "A strong description is one of your best selling tools." },
  { area: "Preparation", q: "I have a budget and a timeline for publishing.", tip: "Knowing your costs early prevents stalled projects." },
  { area: "Preparation", q: "I have a plan for how readers will find the book.", tip: "Even a simple marketing plan beats none." },
];

const OPTIONS: { value: Answer; label: string }[] = [
  { value: 2, label: "Yes" },
  { value: 1, label: "Partly" },
  { value: 0, label: "Not yet" },
];

export default function ReadinessAssessment() {
  const [answers, setAnswers] = useState<(Answer | null)[]>(() => QUESTIONS.map(() => null));
  const [showResult, setShowResult] = useState(false);

  const answered = answers.filter((a) => a !== null).length;
  const complete = answered === QUESTIONS.length;

  const result = useMemo(() => {
    const score = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
    const pct = Math.round((score / (QUESTIONS.length * 2)) * 100);
    const areas = Array.from(new Set(QUESTIONS.map((q) => q.area))).map((area) => {
      const idx = QUESTIONS.map((q, i) => (q.area === area ? i : -1)).filter((i) => i >= 0);
      const got = idx.reduce((s, i) => s + (answers[i] ?? 0), 0);
      return { area, pct: Math.round((got / (idx.length * 2)) * 100) };
    });
    const gaps = QUESTIONS.map((q, i) => ({ ...q, a: answers[i] }))
      .filter((x) => x.a !== null && x.a < 2)
      .sort((x, y) => (x.a as number) - (y.a as number));
    const level =
      pct >= 85
        ? { title: "Ready for publication", text: "Your manuscript looks well prepared. A final professional review and production planning are the sensible next steps." }
        : pct >= 60
        ? { title: "Nearly there", text: "You have a solid base. Closing the gaps below will put you in a strong position to publish." }
        : pct >= 35
        ? { title: "Needs more work", text: "There is real progress here, but several important steps remain before publishing." }
        : { title: "Early stage", text: "You are at the start of the journey. That is a perfectly good place to be: focus on completing and shaping the manuscript first." };
    return { pct, areas, gaps, level };
  }, [answers]);

  if (showResult && complete) {
    return (
      <div className="space-y-6">
        <Panel>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gray-500">Your readiness score</p>
          <div className="mt-2 flex flex-wrap items-end gap-4">
            <span className="text-6xl font-black text-[#8d171c]">{result.pct}%</span>
            <span className="pb-2 text-2xl font-bold text-gray-900">{result.level.title}</span>
          </div>
          <p className="mt-3 max-w-2xl text-gray-700">{result.level.text}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {result.areas.map((a) => (
              <div key={a.area}>
                <div className="mb-1 flex justify-between text-sm font-semibold text-gray-800">
                  <span>{a.area}</span>
                  <span>{a.pct}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-[#8d171c]" style={{ width: `${a.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            {result.gaps.length ? "What to work on next" : "Nothing outstanding. Well done."}
          </h2>
          <ul className="space-y-4">
            {result.gaps.map((g) => (
              <li key={g.q} className="flex gap-3">
                {g.a === 0 ? (
                  <CircleAlert className="mt-0.5 shrink-0 text-[#8d171c]" size={20} />
                ) : (
                  <CircleDashed className="mt-0.5 shrink-0 text-amber-600" size={20} />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{g.q}</p>
                  <p className="text-sm text-gray-600">{g.tip}</p>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setShowResult(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-6 text-sm font-semibold text-[#8d171c] underline underline-offset-2"
          >
            Change my answers
          </button>
        </Panel>
      </div>
    );
  }

  return (
    <Panel>
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-900">Answer honestly. Nothing is saved.</h2>
        <span className="shrink-0 text-sm font-semibold text-gray-500">
          {answered} / {QUESTIONS.length}
        </span>
      </div>
      <ol className="space-y-6">
        {QUESTIONS.map((item, i) => (
          <li key={item.q}>
            <p className="mb-2 font-medium text-gray-900">
              <span className="mr-2 text-[#8d171c]">{i + 1}.</span>
              {item.q}
            </p>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={item.q}>
              {OPTIONS.map((o) => {
                const active = answers[i] === o.value;
                return (
                  <button
                    key={o.label}
                    role="radio"
                    aria-checked={active}
                    onClick={() => setAnswers((a) => a.map((v, idx) => (idx === i ? o.value : v)))}
                    className={`rounded-xl border px-5 py-2 text-sm font-semibold transition ${
                      active
                        ? "border-[#8d171c] bg-[#8d171c] text-white"
                        : "border-gray-300 bg-white text-gray-700 hover:border-[#8d171c] hover:text-[#8d171c]"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>
      <button
        disabled={!complete}
        onClick={() => {
          setShowResult(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#8d171c] px-7 py-3.5 font-semibold text-white transition hover:bg-[#6b1215] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <CheckCircle2 size={18} /> See my result
      </button>
      {!complete && <p className="mt-3 text-sm text-gray-500">Answer all {QUESTIONS.length} questions to see your result.</p>}
    </Panel>
  );
}
