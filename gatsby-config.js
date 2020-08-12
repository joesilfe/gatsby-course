require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `Joel Silva`,
    position: `Designer de UI/UX. Expertise em Front-End e Mobile.`,
    description: `A Blog about frontend development and otlher cool stuff.`,
    author: `@Joel`,
    siteUrl: `https://joelsilva.netlify.app/`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // [Atenção] : Por padrão, tudo vem true, se desejar pode remover.
        // CommonMark mode (default: true)
        // commonmark: true,
        // Footnotes mode (default: true)
        // footnotes: true,
        // Pedantic mode (default: true)
        // pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        // gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true, // default: false
      },
    }, 
    // {
    //   resolve: `gatsby-plugin-performance-metrics`,
    //   options: {
    //     firstPaint: true,
    //     firstContentfulPaint: true,
    //     firstInputDelay: true,
    //     useLogging: true,
    //     useGoogleAnalytics: false
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joel Silva`,
        short_name: `Joel Silva`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/images/profile-jorel.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
