module.exports = {
  siteMetadata: {
    title: `Leonard Wedderburn`,
    description: `The website of one Leonard Wedderburn`,
    author: `@ktp4life`,
  },
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-typescript',
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leonard Wedderburn`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
