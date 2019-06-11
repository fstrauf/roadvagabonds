import React from "react"
import { StaticQuery } from "gatsby"
import Header from '../components/header'
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'

const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <ThemeProvider theme={theme}>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: '1000px',
          width: '100%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          background: '#123445'
        }}
      >

        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
        <main>{children}</main>
        <footer>
          {/* <Footer posts={data.allInstagramContent} insta={data.site.siteMetadata.social.instagram} /> */}
        </footer>
      </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
              social {
                instagram
              }
            }
            
          }
    #       allInstagramContent {
    #   edges {
    #     node {
    #     link
    #     caption{
    #        text
    #     }
    #     localImage{
    #         childImageSharp {
    #             fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
    #                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
    #             }
    #         }
    #     }
    #     images {
    #         standard_resolution {
    #           width
    #           height
    #           url
    #         }
    #         low_resolution{
    #             url
    #         }
    #       }
    #     }
    #   }
    # }
    }
  `

export default Layout