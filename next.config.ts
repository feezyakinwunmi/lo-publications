import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL)
  : null;

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: supabaseUrl
      ? [
          {
            protocol: supabaseUrl.protocol === "http:" ? "http" : "https",
            hostname: supabaseUrl.hostname,
            pathname: "/storage/v1/object/public/**",
          },
        ]
      : [],
  },
  async redirects() {
    return [
      // Case Studies became Featured Authors
      { source: "/casestudies", destination: "/authors", permanent: true },
      { source: "/casestudies/:slug", destination: "/authors/all?author=:slug", permanent: true },
      // Individual author pages became pop-ups on the all-authors page
      { source: "/authors/:slug((?!all$)[^/]+)", destination: "/authors/all?author=:slug", permanent: true },
      // The barcode generator brief used /tools/barcode-generator; the tool lives with the other free resources
      { source: "/tools/barcode-generator", destination: "/resources/barcode-generator", permanent: true },
    ];
  },
};

export default nextConfig;
