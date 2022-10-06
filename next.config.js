/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  // i18n: {
  //   locales: ["gb", "de", "it"],
  //   defaultLocale: "gb",
  //   localeDetection: false,
  // },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextTranslate({
  webpack: (nextConfig, { isServer, webpack }) => {
    return nextConfig;
  },
});
