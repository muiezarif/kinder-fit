/** @type {import('next').NextConfig} */

module.exports = {
  i18n:{
    locales:["de","en"],
    defaultLocale: "de",
    // localeDetection: true,
  },
  reactStrictMode: true
}
module.exports = {
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' }
    }
  },
}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
