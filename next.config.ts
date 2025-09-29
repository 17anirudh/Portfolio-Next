import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  }
};

export default nextConfig;
