import React from "react"
import { StaticQuery } from "gatsby"
import Header from '../components/header'
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import Footer from '../components/footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <ThemeProvider theme={theme}>
      <div
        style={{
          margin: `0 auto`,
          width: '100%',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          background: theme.colors.main.grey
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
        <main>{children}</main>
        <Footer>
        </Footer>
      </div>
      </ThemeProvider>
    )}
  />
)

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
    }
  `

export default Layout