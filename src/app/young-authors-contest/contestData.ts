// src/app/young-authors-contest/contestData.ts
// All contest facts live here so the team can update dates, prizes and FAQs in one place.
// Source of truth: the official contest rules. Do not add rules that are not approved.

export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe2hggLkX-7xYLd_vCbfJ5GuN30mAHbsIu5PTVul1CwMBRqWQ/viewform";

export const CONTACT = {
  email: "layo@lopublications.com",
  phone: "+1 (514) 219-2987",
  phoneHref: "tel:+15142192987",
};

export const FEE = "$10";

// Milestones. `at` is used for the countdown and timeline status (end of day where relevant).
export const MILESTONES = [
  { key: "reg-open", label: "Registration opens", date: "October 5, 2026", at: "2026-10-05T00:00:00" },
  { key: "reg-close", label: "Registration closes", date: "November 14, 2026", at: "2026-11-14T23:59:59", note: `${FEE} registration fee, non-refundable` },
  { key: "sub-open", label: "Submissions open", date: "November 15, 2026", at: "2026-11-15T00:00:00" },
  { key: "sub-close", label: "Submission deadline", date: "January 15, 2027", at: "2027-01-15T23:59:59", note: "Late submissions are not accepted" },
  { key: "winners", label: "Winners announced", date: "February 13, 2027", at: "2027-02-13T00:00:00" },
  { key: "publication", label: "Publication period", date: "Target: March 2027", at: "2027-03-01T00:00:00", note: "Selected entries published by LO Publications" },
] as const;

// What the hero countdown shows next, in order
export const COUNTDOWNS = [
  { until: "2026-11-14T23:59:59", label: "Registration closes in", sub: "Registration closes November 14, 2026" },
  { until: "2026-11-15T00:00:00", label: "Submissions open in", sub: "Submissions open November 15, 2026" },
  { until: "2027-01-15T23:59:59", label: "Submission deadline in", sub: "Final deadline January 15, 2027" },
  { until: "2027-02-13T00:00:00", label: "Winners announced in", sub: "Winners announced February 13, 2027" },
];

export const CATEGORIES = [
  {
    key: "short-story",
    title: "Short Story",
    requirement: "1,000–3,000 words",
    text: "Tell your story in prose. Your short story must be your own original, unpublished work.",
    image: "/young-authors/category-short-story.webp",
    alt: "A young writer writing a story by hand, with a castle from her imagination in the background",
    w: 900,
    h: 726,
  },
  {
    key: "movie-script",
    title: "Movie Script",
    requirement: "Maximum 15 pages",
    text: "Write for the screen. Your script must be your own original, unpublished work.",
    image: "/young-authors/category-movie-script.webp",
    alt: "A young screenwriter at a laptop with a film camera, clapperboard and storyboard",
    w: 900,
    h: 818,
  },
];

export const ELIGIBILITY = [
  "Open internationally",
  "Writers aged 17–30",
  "Participants aged 17 need parent or legal guardian consent",
  "One entry per participant",
  "Work must be original and unpublished",
];

export const RESTRICTION = "Plagiarism or AI-generated content will result in immediate disqualification.";

export const PRIZES = [
  { place: "2nd Place", amount: "$500", image: "/young-authors/prize-silver.webp", alt: "Silver trophy", w: 567, h: 887, rank: 2 },
  { place: "1st Place", amount: "$1,000", image: "/young-authors/prize-gold.webp", alt: "Gold trophy", w: 603, h: 887, rank: 1 },
  { place: "3rd Place", amount: "$250", image: "/young-authors/prize-bronze.webp", alt: "Bronze trophy", w: 594, h: 887, rank: 3 },
];

export const JUDGING_CRITERIA = ["Originality", "Storytelling strength", "Structure", "Clarity", "Overall quality"];

export type Faq = { question: string; answer: string };
export const FAQ_GROUPS: { title: string; faqs: Faq[] }[] = [
  {
    title: "Eligibility and participation",
    faqs: [
      {
        question: "What is the Young Authors Contest 2027?",
        answer:
          "The Young Authors Contest is a writing contest by LO Publications for young writers aged 17–30. Participants submit an original short story or movie script, and selected entries are intended for publication by LO Publications.",
      },
      {
        question: "Who can enter?",
        answer:
          "The contest is open internationally to writers aged 17–30.\n• Participants aged 17 require parent or legal guardian consent\n• One entry per participant\n• Work must be original and unpublished",
      },
    ],
  },
  {
    title: "Registration and payment",
    faqs: [
      {
        question: "How do I register, and what does it cost?",
        answer:
          "Register through the online registration form between October 5 and November 14, 2026. The registration fee is $10 and is non-refundable.",
      },
      {
        question: "Are registration and submission the same thing?",
        answer:
          "No. Registration and submission are two separate steps. Register first, then prepare and submit your completed work during the submission period (November 15, 2026 – January 15, 2027).",
      },
    ],
  },
  {
    title: "Manuscript preparation",
    faqs: [
      { question: "What categories can I enter?", answer: "Choose one category:\n• Short Story: 1,000–3,000 words\n• Movie Script: maximum 15 pages" },
      {
        question: "Is the work required to be original?",
        answer:
          "Yes. All submissions must be original and unpublished. Plagiarism or AI-generated content will result in immediate disqualification.",
      },
    ],
  },
  {
    title: "Submission",
    faqs: [{ question: "What is the submission deadline?", answer: "The final deadline is January 15, 2027. Late submissions will not be accepted." }],
  },
  {
    title: "Judging and prizes",
    faqs: [
      { question: "Are there prizes?", answer: "Yes:\n• 1st Place: $1,000\n• 2nd Place: $500\n• 3rd Place: $250" },
      { question: "When are winners announced?", answer: "Winners will be announced on February 13, 2027." },
      {
        question: "Who decides the winners?",
        answer:
          "Submissions are reviewed by an editorial panel appointed by LO Publications. Judging is based on originality, storytelling strength, structure, clarity, and overall quality. All decisions are final.",
      },
      {
        question: "Will participants receive feedback?",
        answer:
          "Due to the volume of submissions, individual feedback is not provided to every entry. Selected participants receive editorial guidance during the publishing process.",
      },
    ],
  },
  {
    title: "Copyright and publication",
    faqs: [
      {
        question: "Will the winning entries be published?",
        answer: "Selected entries are intended for publication by LO Publications, with a publication target of March 2027.",
      },
      {
        question: "Do authors keep ownership of their work?",
        answer:
          "Yes. Authors retain full ownership of their intellectual property. By submitting, authors grant LO Publications a non-exclusive right to edit, publish, distribute, and promote the work as part of the contest publication.",
      },
      { question: "How do I contact the organisers?", answer: "Email layo@lopublications.com or call +1 (514) 219-2987." },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.faqs);
