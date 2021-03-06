module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: './data',
      },
    },
    'gatsby-transformer-json',
    `gatsby-plugin-emotion`,
  ],
}
