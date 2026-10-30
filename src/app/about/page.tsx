// src/app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { getSiteContent } from "@/app/data/getSiteContent";
import { SiteContentProvider } from "@/app/data/SiteContentProvider";

// Re-check the database for new books, authors and testimonials every minute
export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us | LO Publications",
  description:
    "LO Publications publishes truth with love and purpose. Learn about our faith-inspired mission, what we publish, and why authors choose to work with us.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const content = await getSiteContent();
  return (
    <SiteContentProvider value={content}>
      <AboutClient />
    </SiteContentProvider>
  );
}
