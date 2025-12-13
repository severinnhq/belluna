/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },

  webpack: (config, options) => {
    return config;
  },

  // Force Webpack instead of Turbopack
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
