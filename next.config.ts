import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // Required for static export
  trailingSlash: true, // Fixes Vercel routing issues
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;