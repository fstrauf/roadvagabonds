import React from "react"
import { StaticQuery } from "gatsby"
import Header from '../components/header'
import PropTypes from "prop-types"
import Footer from "./footer"


const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1500,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          background: '#123445'
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
        <main>{children}</main>
        <footer>
          <Footer posts={data.allInstagramContent} insta={data.site.siteMetadata.social.instagram} />
          {/* © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
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
          allInstagramContent {
      edges {
        node {
        link
        caption{
           text
        }
        localImage{
            childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        images {
            standard_resolution {
              width
              height
              url
            }
            low_resolution{
                url
            }
          }
        }
      }
    }
  #         allInstaNode {
  #   edges {
  #     node {
  #       id
  #       likes
  #       comments
  #       mediaType
  #       preview
  #       original
  #       timestamp
  #       caption
  #       localFile {
  #         childImageSharp {
  #           fixed(width: 150, height: 150) {
  #             ...GatsbyImageSharpFixed
  #           }
  #         }
  #       }
  #       # Only available with the public api scraper
  #       thumbnails {
  #         src
  #         config_width
  #         config_height
  #       }
  #       dimensions {
  #         height
  #         width
  #       }
  #     }
  #   }
  # }
    }
  `

export default Layout