import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add this for Vercel deployment compatibility
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
};

export default nextConfig;