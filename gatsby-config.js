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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Acetech Infra Engineers`,
        short_name: `Acetech`,
        start_url: `/`,
        background_color: `#1e3a8a`, // Your brand blue
        theme_color: `#1e3a8a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // <--- This path must match your file
      },
    },
  ],
}