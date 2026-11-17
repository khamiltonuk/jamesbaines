/** @type {import('next').NextConfig} */

module.exports = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      { hostname: "i.vimeocdn.com" },
      { hostname: "images.ctfassets.net" },
      { hostname: "placekitten.com" },
      { hostname: "downloads.ctfassets.net" },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
