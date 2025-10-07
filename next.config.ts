import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    qualities: [72, 81, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      }
    ]
  },
   experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
