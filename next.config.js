/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_HUB_BASE_URL: process.env.NEXT_PUBLIC_HUB_BASE_URL,
  },
  // assetPrefix: "./",
};

module.exports = nextConfig;


