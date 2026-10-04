import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/projects", destination: "/our-work", permanent: true },
      { source: "/campaigns", destination: "/our-work", permanent: true },
      { source: "/drives", destination: "/our-work", permanent: true }
    ];
  }
};

export default nextConfig;
