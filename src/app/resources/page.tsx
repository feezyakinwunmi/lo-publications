// src/app/resources/page.tsx
import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Free Author & Publisher Tools | LO Publications",
  description:
    "Free tools for authors and publishers: publishing cost calculator, word count to page calculator, royalty calculator, manuscript readiness assessment, a 30-day book marketing plan and a free ISBN barcode generator.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
