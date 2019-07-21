const config = require('./config/website')


module.exports = {
  siteMetadata: {
    title: config.title,
    siteDescription: config.siteDescription,
    siteShortName: config.siteShortName,
    siteUrl: config.siteUrl,
    siteLogo: config.siteLogo,
    siteLogoSmall: config.siteLogoSmall,
    siteBanner: config.siteBanner,
    siteBannerWidth: config.siteBannerWidth,
    siteBannerHeight: config.siteBannerHeight,
    social: {
      instagram: config.instagram,
    },
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'services',
        link: '/services'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-pinterest`,
      options: {
        // Set to true to display a bigger button
        tall: true, // default
        // Set to true to hide the text and display only a round P button
        round: false // default
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "13353892861.1677ed0.3d1e027d2b64459fac8cb3633b80f4de"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              maxHeight: 900,
              backgroundColor: 'transparent',   
              wrapperStyle: 'margin-left: 1rem; margin-right: 1rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
              // showCaptions: true   
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
        "excerpt_separator": `<!-- end -->`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-143550976-1`,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Road Vagabonds`,
        short_name: `Road Vagabonds`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `static/RoadVagabonds_Logo-01.png`,
        background_color: "#f0f0f0",
        theme_color: "#878787",
        crossOrigin: `use-credentials`
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `config/typography.js`,
      },
    },
  ],
}
