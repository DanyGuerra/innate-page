/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CITAS_URL: process.env.CITAS_URL,
  },
};

module.exports = nextConfig;
