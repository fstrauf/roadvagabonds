module.exports = {
  siteMetadata: {
    title: `Road Vagabonds`,
    author: `Florian Strauf`,
    description: `Our blog for travel, troopy and adventure!`,
    siteUrl: `https://nostalgic-leakey-9b5457.netlify.com/`,
    social: {
      instagram: `fstrauf`,
    },
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'get in touch',
        link: '/getInTouch'
      },
      {
        name: 'photography',
        link: '/photography'
      },
      {
        name: 'privacy policy',
        link: '/privacyPolicy'
      },
      {
        name: 'services',
        link: '/services'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "7108811573.1677ed0.d41dc21c794a476787fe7118e5dcd1e0"
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
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
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
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
