import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/header'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'

const layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <ThemeProvider theme={theme}>
      {/* <SEO/> */}
      <div
        style={{
          margin: `0 auto`,
          width: '100%',
          // padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          background: theme.colors.main.light
        }}
      >
        {/* <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} /> */}
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.cats.group} />
        <main>{children}</main>
        {/* <Footer>
        </Footer> */}
      </div>
      </ThemeProvider>
    )}
  />
)

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    cats: allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
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
    }
  `

export default layout