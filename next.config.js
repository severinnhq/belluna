/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    return config;
  },
  // Force Webpack instead of Turbopack
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
