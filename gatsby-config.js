module.exports = {
  siteMetadata: {
    title: `Acetech Infra Engineers`,
    description: `Expert Construction Services in Gurugram`,
    author: `@acetech`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}