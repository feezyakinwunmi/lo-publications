// src/app/authors/page.tsx
import type { Metadata } from "next";
import AuthorsClient from "./AuthorsClient";
import { getSiteContent } from "@/app/data/getSiteContent";
import { SiteContentProvider } from "@/app/data/SiteContentProvider";

// Re-check the database for new books, authors and testimonials every minute
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Featured Authors | LO Publications",
  description:
    "Meet the authors who published with LO Publications and discover their books — memoirs, children's stories, faith-based and inspirational titles.",
  alternates: { canonical: "/authors" },
};

export default async function AuthorsPage() {
  const content = await getSiteContent();
  return (
    <SiteContentProvider value={content}>
      <AuthorsClient />
    </SiteContentProvider>
  );
}
