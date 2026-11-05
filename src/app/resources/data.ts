// src/app/resources/data.ts
// Free Author & Publisher Resource Centre: the list of tools.

export type ToolCategory = "Publishing" | "Writing" | "Book Marketing";

export type ResourceTool = {
  slug: string;
  title: string;
  short: string;
  description: string; // meta description
  category: ToolCategory;
  keyword: string;
  time: string; // how long it takes
  gradient: string; // Tailwind gradient classes for the card visual
  accent: string; // solid accent colour
};

export const RESOURCE_TOOLS: ResourceTool[] = [
  {
    slug: "book-publishing-cost-calculator",
    title: "Book Publishing Cost Calculator",
    short: "Estimate what it may cost to edit, design, print and publish your book, in Canadian dollars.",
    description:
      "How much does it cost to publish a book in Canada? Estimate editing, proofreading, cover design, formatting, printing and distribution costs with this free calculator.",
    category: "Publishing",
    keyword: "book publishing costs in Canada",
    time: "1 min",
    gradient: "from-[#8d171c] via-[#b4262c] to-[#ea580c]",
    accent: "#b4262c",
  },
  {
    slug: "word-count-to-page-calculator",
    title: "Word Count to Page Calculator",
    short: "Turn your manuscript word count into an estimated number of printed book pages.",
    description:
      "How many pages is 50,000 words? Enter your word count, trim size and font size to estimate the printed page count of your book.",
    category: "Writing",
    keyword: "how many pages is my book",
    time: "30 sec",
    gradient: "from-indigo-600 via-blue-600 to-sky-500",
    accent: "#2563eb",
  },
  {
    slug: "book-royalty-calculator",
    title: "Book Pricing and Royalty Calculator",
    short: "See what you could earn per copy and in total, and how many copies you need to sell to break even.",
    description:
      "How much money can you make selling your book? Work out earnings per copy, total profit and break-even copies from your price, printing cost and retailer share.",
    category: "Publishing",
    keyword: "how much do authors make per book",
    time: "1 min",
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    accent: "#0d9488",
  },
  {
    slug: "manuscript-readiness-assessment",
    title: "Manuscript Readiness Assessment",
    short: "Answer 14 quick questions to find out whether your manuscript is ready for publishing.",
    description:
      "Is your manuscript ready for publishing? Take this free assessment and get a personalised readiness score with clear next steps.",
    category: "Writing",
    keyword: "is my manuscript ready for publishing",
    time: "3 min",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-500",
    accent: "#9333ea",
  },
  {
    slug: "book-marketing-plan-generator",
    title: "30-Day Book Marketing Plan Generator",
    short: "Enter your launch date and get a day-by-day marketing calendar you can copy or print.",
    description:
      "Generate a free 30-day book marketing calendar from your publication date, with daily tasks for before, during and after your launch.",
    category: "Book Marketing",
    keyword: "how to market a book",
    time: "2 min",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accent: "#f97316",
  },
];

export const COMING_SOON: { title: string; category: string }[] = [
  { title: "ISBN Guide and Validator", category: "Publishing" },
  { title: "Book Cover Size Calculator", category: "Publishing" },
  { title: "Book Publishing Checklist Generator", category: "Publishing" },
  { title: "Author Biography Generator", category: "Book Marketing" },
  { title: "Book Proposal Generator", category: "Writing" },
  { title: "Ministry Book Readiness Test", category: "Faith-Based" },
  { title: "Sermon-to-Book Planner", category: "Faith-Based" },
  { title: "Christian Book Launch Planner", category: "Faith-Based" },
];

export const getTool = (slug: string) => RESOURCE_TOOLS.find((t) => t.slug === slug);
