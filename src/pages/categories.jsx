import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
// import Tags from '../components/Tags'
import { SkipNavContent } from '../elements/SkipNavLink'
import theme from '../../config/theme'
import styled from 'styled-components'
import { sortPosts } from '../utils/helper'
// import Bio from '../components/bio'
import SEO from "../components/seo"
import Helmet from 'react-helmet'

// const CategoriesContainer = styled.section`
//   padding: 0 1.5rem;
//   max-width: ${props => props.theme.layout[props.type]};
//   margin: 4rem auto;
//   a {
//     font-size: 1rem !important;
//     padding: 0.25rem 0.85rem !important;
//   }
// `

const Grid = styled.div`
  display: grid;
  gridTemplateColumns: repeat(3, 1fr);
  gridColumnGap: 5px;
  gridRowGap: 5px;
`

class Categories extends React.Component {
  render() {
    const { data } = this.props
    const site = data.content.siteMetadata
    // const posts = data.posts
    const initials = data.initials
    
    return (
<Layout title={site.title}>
      <Helmet
        title={site.title}
      />
      <SEO title="All posts" />
      {/* <Bio /> */}
      <SkipNavContent>
        {/* <CategoriesContainer>
          <Tags tags={posts.group} linkPrefix="categories" />
        </CategoriesContainer> */}
      </SkipNavContent>
      <Grid className='grid'>
        {sortPosts(initials.edges).map(node => {
          return (
            <div>
              <div
                key={node.header}
                style={{
                  background: theme.colors.main.dark,
                }}>
                {node.header}
              </div>
              <ul>
                {node.detail.map(detail => {
                  return (
                    <li style={{listStyle: 'none'}}>
                      <Link to={detail.slug}>
                        {detail.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
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
          sort: { fields: [frontmatter___date], order: DESC }
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