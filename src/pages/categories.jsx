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

// const allCategories = categoryHash.categories.map(category => category.title)

const Categories = ({
  data: {
    content: { siteMetadata: site },
    posts
  },
}) => (
    <Layout title={site.title}>
      <SkipNavContent>
          <CategoriesContainer>
            <Tags tags={posts.group} linkPrefix="categories" />
          </CategoriesContainer>
      </SkipNavContent>
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
  }
`