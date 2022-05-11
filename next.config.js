/** @type {import('next').NextConfig} */
const PWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
};

const withPWA = PWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig, withPWA;