module.exports = {
  siteMetadata: {
    title: 'Caracal Site',
    description: 'Some description here!',
    author: '@pedronauck',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: { addSassLoader: false },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-emotion',
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'caracal-site',
        short_name: 'caracal',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/caracal-icon.png',
      },
    },
  ],
}
