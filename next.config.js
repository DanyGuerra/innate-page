/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CITAS_URL: process.env.CITAS_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_ANALYTICS_ID_TWO: process.env.GOOGLE_ANALYTICS_ID_TWO,
  },
};

module.exports = nextConfig;
