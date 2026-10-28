import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Case Studies became Featured Authors
      { source: "/casestudies", destination: "/authors", permanent: true },
      { source: "/casestudies/:slug", destination: "/authors/all?author=:slug", permanent: true },
      // Individual author pages became pop-ups on the all-authors page
      { source: "/authors/:slug((?!all$)[^/]+)", destination: "/authors/all?author=:slug", permanent: true },
    ];
  },
};

export default nextConfig;
