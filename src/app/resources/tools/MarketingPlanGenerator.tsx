// src/app/resources/tools/MarketingPlanGenerator.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Printer } from "lucide-react";
import { Field, Panel, Select, TextInput } from "../ui";

type Platform = "instagram" | "facebook" | "whatsapp" | "linkedin" | "tiktok";
const PLATFORMS: { value: Platform; label: string }[] = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "tiktok", label: "TikTok" },
];

type Day = { offset: number; phase: string; task: string };

const isoToday = () => new Date().toISOString().slice(0, 10);
const addDays = (iso: string, n: number) => {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return d;
};
const fmt = (d: Date) => d.toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric", year: "numeric" });

function buildPlan(title: string, audience: string, genre: string, platform: string): Day[] {
  const t = title.trim() || "your book";
  const a = audience.trim() || "your readers";
  const g = genre.trim() || "your genre";
  const p = platform;
  return [
    // Before launch: offsets -14 to -1
    { offset: -14, phase: "Prepare", task: `Write down who ${t} is for (${a}) and the one promise the book makes to them.` },
    { offset: -13, phase: "Prepare", task: `Finalise your short book description and a one-line pitch for ${t}.` },
    { offset: -12, phase: "Prepare", task: `Set up or update your author profile on ${p}: photo, bio and a link to where the book will be sold.` },
    { offset: -11, phase: "Prepare", task: `Make a list of 30 people who could help: friends, church or community groups, bloggers, reviewers and book clubs in ${g}.` },
    { offset: -10, phase: "Prepare", task: `Prepare 5 simple graphics for ${p}: cover reveal, quote card, author photo, launch date and a thank-you.` },
    { offset: -9, phase: "Build buzz", task: `Reveal the cover of ${t} on ${p} and explain why you wrote it.` },
    { offset: -8, phase: "Build buzz", task: `Message 10 people from your list personally and ask if they would read an early copy and share an honest review.` },
    { offset: -7, phase: "Build buzz", task: `Share a short story about what inspired ${t}. Speak to ${a} directly.` },
    { offset: -6, phase: "Build buzz", task: `Post a striking quote or excerpt from the book.` },
    { offset: -5, phase: "Build buzz", task: `Ask your community to share your launch date. Make it easy: give them a ready-made image and caption.` },
    { offset: -4, phase: "Build buzz", task: `Contact 3 local or niche outlets (blog, newsletter, radio, church bulletin) with a short pitch about ${t}.` },
    { offset: -3, phase: "Build buzz", task: `Post a behind-the-scenes look at how the book was made.` },
    { offset: -2, phase: "Build buzz", task: `Confirm everything works: purchase links, price, cover image and bio. Test the buying process yourself.` },
    { offset: -1, phase: "Build buzz", task: `Post a countdown: "Tomorrow ${t} is released." Send a reminder to your list.` },
    // Launch day
    { offset: 0, phase: "Launch", task: `Launch day! Announce ${t} everywhere you are active, thank people publicly and share the buying link.` },
    // After: offsets +1 to +15
    { offset: 1, phase: "Keep going", task: `Thank everyone who shared or bought. Repost a few of their messages with permission.` },
    { offset: 2, phase: "Keep going", task: `Share a short reading or video clip from ${t}.` },
    { offset: 3, phase: "Keep going", task: `Ask early readers to leave an honest review where the book is sold.` },
    { offset: 4, phase: "Keep going", task: `Post a key lesson from ${t} that helps ${a}.` },
    { offset: 5, phase: "Keep going", task: `Pitch a guest article, interview or podcast appearance related to ${g}.` },
    { offset: 6, phase: "Keep going", task: `Share a reader's photo or comment about the book.` },
    { offset: 7, phase: "Keep going", task: `Review week one: what got the most response on ${p}? Plan more of that.` },
    { offset: 8, phase: "Keep going", task: `Offer to speak, host a reading or run a Q&A for a group of ${a}.` },
    { offset: 9, phase: "Keep going", task: `Post a "5 things I learned writing ${t}" list.` },
    { offset: 10, phase: "Keep going", task: `Ask a book club, library or reading group about featuring ${t}.` },
    { offset: 11, phase: "Keep going", task: `Share a review you received, with the reviewer's permission.` },
    { offset: 12, phase: "Keep going", task: `Offer a small, time-limited incentive for readers who order this week (a signed note, a bundle or a free chapter).` },
    { offset: 13, phase: "Keep going", task: `Share a question for ${a} to answer and start a conversation in the comments.` },
    { offset: 14, phase: "Keep going", task: `Follow up with the people and outlets you contacted before launch.` },
    { offset: 15, phase: "Keep going", task: `Review your first month: sales, reviews and which activities worked. Choose three to repeat next month.` },
  ];
}

export default function MarketingPlanGenerator() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [audience, setAudience] = useState("");
  const [date, setDate] = useState("");

  // Default to 30 days from today (set after mount so server and browser agree)
  useEffect(() => {
    setDate((d) => d || addDays(isoToday(), 30).toISOString().slice(0, 10));
  }, []);
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const platformLabel = PLATFORMS.find((p) => p.value === platform)!.label;

  const plan = useMemo(
    () => !date ? [] : buildPlan(title, audience, genre, platformLabel).map((d, i) => ({ ...d, n: i + 1, date: addDays(date, d.offset) })),
    [title, audience, genre, platformLabel, date]
  );

  const asText = () =>
    `30-Day Book Marketing Plan${title ? `: ${title}` : ""}\nLaunch date: ${date ? fmt(addDays(date, 0)) : ''}\n\n` +
    plan.map((d) => `Day ${d.n} · ${fmt(d.date)} · ${d.phase}\n${d.task}`).join("\n\n") +
    "\n\nCreated with the free LO Publications tools (lopublications.com/resources)";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(asText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable: user can still print */
    }
  };

  return (
    <div className="space-y-8">
      <Panel className="print:hidden">
        <h2 className="mb-6 text-xl font-bold text-gray-900">About your book</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Book title">
            <TextInput value={title} onChange={setTitle} placeholder="e.g. Walking in Purpose" />
          </Field>
          <Field label="Genre or topic">
            <TextInput value={genre} onChange={setGenre} placeholder="e.g. Christian living" />
          </Field>
          <Field label="Who is it for?">
            <TextInput value={audience} onChange={setAudience} placeholder="e.g. young professionals" />
          </Field>
          <Field label="Launch date">
            <TextInput type="date" value={date} onChange={setDate} />
          </Field>
          <Field label="Main platform where you are active">
            <Select value={platform} onChange={setPlatform} options={PLATFORMS} />
          </Field>
        </div>
        <button
          disabled={!date}
          onClick={() => setGenerated(true)}
          className="mt-8 rounded-xl bg-[#8d171c] px-7 py-3.5 font-semibold text-white transition hover:bg-[#6b1215] disabled:opacity-40"
        >
          Generate my plan
        </button>
      </Panel>

      {generated && plan.length > 0 && (
        <Panel>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <h2 className="text-xl font-bold text-gray-900">Your 30-day plan</h2>
            <div className="flex gap-3">
              <button onClick={copy} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:border-[#8d171c] hover:text-[#8d171c]">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "Copy"}
              </button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:border-[#8d171c] hover:text-[#8d171c]">
                <Printer size={16} /> Print
              </button>
            </div>
          </div>
          <ol className="divide-y divide-gray-100">
            {plan.map((d) => (
              <li key={d.n} className="flex gap-4 py-4">
                <div className="w-20 shrink-0 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Day</p>
                  <p className="text-2xl font-black text-[#8d171c]">{d.n}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    {fmt(d.date)} · <span className={d.phase === "Launch" ? "text-[#8d171c]" : ""}>{d.phase}</span>
                  </p>
                  <p className="mt-1 text-gray-900">{d.task}</p>
                </div>
              </li>
            ))}
          </ol>
        </Panel>
      )}
    </div>
  );
}
