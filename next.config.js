/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CITAS_URL: process.env.CITAS_URL,
    // PRIVATE_KEY_ID_GOOGLE: process.env.PRIVATE_KEY_ID_GOOGLE,
  },
};

module.exports = nextConfig;
