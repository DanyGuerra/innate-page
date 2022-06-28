/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CITAS_URL: process.env.CITAS_URL,
    NEXT_PUBLIC_GOOGLE_AW: process.env.NEXT_PUBLIC_GOOGLE_AW,
  },
};

module.exports = nextConfig;
