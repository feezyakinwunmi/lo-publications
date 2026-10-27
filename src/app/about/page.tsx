// src/app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | LO Publications",
  description:
    "LO Publications publishes truth with love and purpose. Learn about our faith-inspired mission, what we publish, and why authors choose to work with us.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
