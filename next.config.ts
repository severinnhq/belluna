import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
   experimental: {
  optimizePackageImports: [],
},
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Windows-specific path fixes 
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;