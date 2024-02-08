/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Casamento Carina e Luis`,
    siteUrl: `https://carinaeluis.pt`,
  },
  headers: [
    {
      source: `*`,
      headers: [
        {
          key: `Access-Control-Allow-Origin`,
          value: `carinaeluis.pt`,
        },
      ],
    },
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Marcellus`],
        display: "swap",
      },
    },
  ],
};
