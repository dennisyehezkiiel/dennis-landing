import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hpagcxkvaxjmofbxactw.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "zeqcngloqddjwgwicxqo.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cokran.blob.core.windows.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fgwdwvfrsqmwweyuevrm.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drscdn.500px.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
