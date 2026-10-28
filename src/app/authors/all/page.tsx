// src/app/authors/all/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import AllAuthorsClient from "./AllAuthorsClient";

export const metadata: Metadata = {
  title: "All Authors | LO Publications",
  description:
    "Browse every LO Publications author and their books, from memoirs and Christian living to children's stories, business and education.",
  alternates: { canonical: "/authors/all" },
};

export default function AllAuthorsPage() {
  return (
    <Suspense>
      <AllAuthorsClient />
    </Suspense>
  );
}
