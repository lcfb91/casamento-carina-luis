/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/casamento-carina-luis",
  siteMetadata: {
    title: `Casamento Carina e Luis`,
    //siteUrl: `https://www.yourdomain.tld`,
  },
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
