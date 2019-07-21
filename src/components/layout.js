import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from '../components/header'
import { ThemeProvider } from 'styled-components'
import theme from '../../config/theme'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  // padding: 0px 1.0875rem 1.45rem;
  paddingTop: 0;
  background: theme.colors.main.light;
  padding-left: 3rem;
  padding-right: 3rem;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <ThemeProvider theme={theme}>
      {/* <SEO/> */}
        <Wrapper>
        {/* <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} /> */}
        <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.cats.group} />
        <main>{children}</main>
        {/* <Footer>
        </Footer> */}
      </Wrapper>
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