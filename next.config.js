/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  webpack(nextConfig) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = nextConfig.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    nextConfig.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        // use: ['@svgr/webpack'],
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      }
    );

    return nextConfig;
  },

  // webpack(config) {
  //   config.module.rules.push({
  //     loader: '@svgr/webpack',
  //     options: {
  //       prettier: false,
  //       svgo: true,
  //       svgoConfig: {
  //         plugins: [
  //           {
  //             name: 'preset-default',
  //             params: {
  //               overrides: { removeViewBox: false },
  //             },
  //           },
  //         ],
  //       },
  //       titleProp: true,
  //     },
  //     test: /\.svg$/,
  //   });

  //   return config;
  // },

  // ...other config
};
