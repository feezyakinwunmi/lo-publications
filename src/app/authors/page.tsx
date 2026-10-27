// src/app/authors/page.tsx
import type { Metadata } from "next";
import AuthorsClient from "./AuthorsClient";

export const metadata: Metadata = {
  title: "Featured Authors | LO Publications",
  description:
    "Meet the authors who published with LO Publications and discover their books — memoirs, children's stories, faith-based and inspirational titles.",
  alternates: { canonical: "/authors" },
};

export default function AuthorsPage() {
  return <AuthorsClient />;
}
