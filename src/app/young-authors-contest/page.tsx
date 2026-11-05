// src/app/young-authors-contest/page.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import ContestClient from "./ContestClient";
import { ALL_FAQS } from "./contestData";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-playfair", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const PAGE_URL = "https://lopublications.com/young-authors-contest";

export const metadata: Metadata = {
  title: "Young Authors Contest 2027 | LO Publications",
  description:
    "Writers aged 17–30, anywhere in the world: enter an original short story or movie script, compete for cash awards and the chance to be published by LO Publications.",
  alternates: { canonical: "/young-authors-contest" },
  openGraph: {
    title: "Young Authors Contest 2027 | LO Publications",
    description: "Your story. Your voice. Your book. Enter the LO Publications Young Authors Contest 2027.",
    url: "/young-authors-contest",
    images: [{ url: "/young-authors/og-image.jpg", width: 1200, height: 630, alt: "Young writers creating stories together" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Authors Contest 2027 | LO Publications",
    images: ["/young-authors/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Young Authors Contest 2027",
    description:
      "A writing contest by LO Publications for writers aged 17–30. Enter an original short story or movie script.",
    startDate: "2026-10-05",
    endDate: "2027-02-13",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url: PAGE_URL },
    image: "https://lopublications.com/young-authors/og-image.jpg",
    organizer: { "@type": "Organization", name: "LO Publications", url: "https://lopublications.com" },
    url: PAGE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\n• /g, " • ").replace(/\n/g, " ") },
    })),
  },
];

export default function YoungAuthorsContestPage() {
  return (
    <div className={`${poppins.className} ${playfair.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <ContestClient />
    </div>
  );
}
