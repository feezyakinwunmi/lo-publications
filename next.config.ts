import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Case Studies became Featured Authors
      { source: "/casestudies", destination: "/authors", permanent: true },
      { source: "/casestudies/:slug", destination: "/authors/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
