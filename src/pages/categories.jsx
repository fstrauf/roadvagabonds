import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
// import { SkipNavContent } from '../elements/SkipNavLink'
import theme from '../../config/theme'
import styled from 'styled-components'
import { sortPosts } from '../utils/helper'
import SEO from "../components/seo"
import Helmet from 'react-helmet'

const Grid = styled.div`
  display: flex;
  padding-top: 5rem;
  ${'' /* max-width: 50rem; */}
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: space-evenly;
`

const HeaderLine = styled.div`
  background: ${theme.colors.main.dark};
  text-align: center;
  font-size: 1.2rem;
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  padding: 0.2rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.default};
  margin: 0.3rem 0.6rem 0.3rem 0;
  white-space: nowrap;
`

const Group = styled.div`
  margin-left: 1rem;
  width: 10rem;
`

class Categories extends React.Component {
  render() {
    const { data } = this.props
    const site = data.content.siteMetadata
    const initials = data.initials

    return (
      <Layout title={site.title}>
        <Helmet
          title={site.title}
        />
        <SEO title="All posts" />
        <Grid>
          {sortPosts(initials.edges).map(node => {
            return (
              <Group>
                <HeaderLine key={node.header}>
                  {node.header}
                </HeaderLine>
                <ul style={{marginLeft: '0'}}>
                  {node.detail.map(detail => {
                    return (
                      <li style={{ listStyle: 'none' }}>
                        <Link to={detail.slug}>
                          {detail.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </Group>
            )
          })}

        </Grid>
      </Layout>
    )
  }
}

export default Categories

export const pageQuery = graphql`
  query CategoriesPage{
    content: site {
      siteMetadata {
        title
        social {
          instagram
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    initials:  allMarkdownRemark(
        sort: { fields: [frontmatter___title], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                author
                date
                slug
              }
            }
          }
        }
  }
`