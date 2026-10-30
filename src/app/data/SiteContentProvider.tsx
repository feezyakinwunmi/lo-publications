"use client";

import { createContext, useContext } from "react";
import { STATIC_CONTENT, type SiteContent } from "./siteContent";

// Pages wrap their client component in this with the merged content from
// getSiteContent(); without a provider, components see the hardcoded data.
const SiteContentContext = createContext<SiteContent>(STATIC_CONTENT);

export function SiteContentProvider({ value, children }: { value: SiteContent; children: React.ReactNode }) {
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
