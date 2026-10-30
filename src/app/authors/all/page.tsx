// src/app/authors/all/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import AllAuthorsClient from "./AllAuthorsClient";
import { getSiteContent } from "@/app/data/getSiteContent";
import { SiteContentProvider } from "@/app/data/SiteContentProvider";

// Re-check the database for new books, authors and testimonials every minute
export const revalidate = 60;

export const metadata: Metadata = {
  title: "All Authors | LO Publications",
  description:
    "Browse every LO Publications author and their books, from memoirs and Christian living to children's stories, business and education.",
  alternates: { canonical: "/authors/all" },
};

export default async function AllAuthorsPage() {
  const content = await getSiteContent();
  return (
    <Suspense>
      <SiteContentProvider value={content}>
        <AllAuthorsClient />
      </SiteContentProvider>
    </Suspense>
  );
}
