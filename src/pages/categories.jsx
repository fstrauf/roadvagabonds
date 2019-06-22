import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import Tags from '../components/Tags'
import { SkipNavContent } from '../elements/SkipNavLink'
import theme from '../../config/theme'
import styled from 'styled-components'

const CategoriesContainer = styled.section`
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
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

  let newObj = {}
  let formObj = []
  initials.map(function (item) {
    let initial = item.node.frontmatter.title.charAt(0)

    if (!newObj.hasOwnProperty(initial)) {
      newObj[initial] = initial
      newObj[initial] = []
    }

    newObj[initial].push({
      title: item.node.frontmatter.title,
      author: item.node.frontmatter.author,
      date: item.node.frontmatter.date,
      slug: item.node.frontmatter.slug,
    })

    return initial
  })

  Object.entries(newObj).forEach(entry => {
    let helpObj = {}
    helpObj.header = entry[0]
    helpObj.detail = entry[1]

    formObj.push(helpObj)
  })

  return formObj
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
        {sortPosts(initials.edges).map(node => {
          return (
            <div>
              <div
                key={node.header}
                style={{
                  background: theme.colors.main.yellow,
                }}>
                {node.header}
              </div>
              <ul>
                {node.detail.map(detail => {
                  return (
                    <li>
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