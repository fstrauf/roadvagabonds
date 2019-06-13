import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import styled from "@emotion/styled"
import Container from '../elements/Container'
import Tags from '../components/Tags'
import { SkipNavContent } from '../elements/SkipNavLink'

const CategoriesContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '5px',
  gridRowGap: '5px',
})

function sortPosts(initials) {
  let sortedPosts
  sortedPosts = initials.map(function (item) {
    
    return item.node.frontmatter.title
  })
  console.log(sortedPosts)
  return sortedPosts
}

const Categories = ({
  data: {
    content: { siteMetadata: site },
    posts,
    initials
  },
}) => (
    <Layout title={site.title}>
      <SkipNavContent>
        <CategoriesContainer>
          <Tags tags={posts.group} linkPrefix="categories" />
        </CategoriesContainer>
      </SkipNavContent>
      <Grid className='grid'>
        {sortPosts(initials.edges).map(({ node }) => {
          return (
            <div
              key={node}
              style={{
                background: '#CCCC51',
              }}>
              {node}
            </div>
          )
        })}
      </Grid>
    </Layout>
  )

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
              }
            }
          }
        }
  }
`