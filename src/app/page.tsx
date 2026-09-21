// app/page.tsx
import type { Metadata } from "next";
import HomeClient from "./homeClient";

const SITE_URL = "https://lopublications.com"; // ← change to your real domain

export const metadata: Metadata = {
  title: "LO Publications | Independent Book Publishing for Authors",
  description:
    "LO Publications turns ideas, manuscripts, and voices into books people want to read. Editorial, cover design, formatting, and publishing services for authors worldwide.",
  keywords: [
    "book publishing",
    "independent publishing",
    "self publishing",
    "author services",
    "editorial services",
    "cover design",
    "manuscript publishing",
    "LO Publications",
  ],
  authors: [{ name: "LO Publications" }],
  creator: "LO Publications",
  publisher: "LO Publications",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "LO Publications",
    title: "LO Publications | Independent Book Publishing for Authors",
    description:
      "We turn ideas, manuscripts, and voices into books people want to read. Editorial, design, and publishing services for authors.",
    images: [
      {
        url: "/og-home.jpg", // ← add a 1200x630 OG image
        width: 1200,
        height: 630,
        alt: "LO Publications — Your Story Deserves a Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LO Publications | Independent Book Publishing",
    description:
      "We turn ideas, manuscripts, and voices into books people want to read.",
    images: ["/og-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Page() {
  // JSON-LD structured data for the Organization + Website
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "LO Publications",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [
          "https://facebook.com/yourpage",
          "https://twitter.com/yourhandle",
          "https://instagram.com/yourhandle",
          "https://linkedin.com/company/yourpage",
          "https://youtube.com/@yourchannel",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "hello@lopublications.com",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "LO Publications",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does the publishing process take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline varies depending on the scope of work, but typically ranges from 3-6 months from manuscript submission to publication.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer both print and digital publishing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we publish both print and digital formats, ensuring your book reaches readers in their preferred format.",
            },
          },
          {
            "@type": "Question",
            name: "Do I retain the rights to my book?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. You retain full rights to your work. We publish under a partnership model where you maintain ownership.",
            },
          },
          {
            "@type": "Question",
            name: "What genres do you publish?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We publish across all genres including fiction, non-fiction, memoirs, business books, children's books, and more.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}