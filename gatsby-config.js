module.exports = {
  siteMetadata: {
    title: `Road Vagabonds`,
    author: `Florian Strauf`,
    description: `Our blog for travel, troopy and adventure!`,
    siteUrl: `https://nostalgic-leakey-9b5457.netlify.com/`,
    social: {
      instagram: `roadvagabonds`,
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
        name: `Road Vagabonds`,
        short_name: `Road Vagabonds`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `static/RoadVagabonds_Logo-01.png`,
      },
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
