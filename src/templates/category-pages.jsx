import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import '../css/toggleButton.css'
import PropTypes from 'prop-types'
import ItemBlog from '../components/ItemBlog'
import Container from '../elements/Container'
import Tags from '../components/Tags'

const Section = styled("div")({
  margin: '1.5rem 0',
})

const CategoriesContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const CategoryPage = ({
  data: {
    content: { siteMetadata: site },
    blog: { edges: posts },
    insta: { edges: allInsta },
    cats
  },
  pageContext: { cat },
}) => (
    <Layout title={site.title}>
      <SEO title="All posts" />
      <Bio />
      <CategoriesContainer>
        <Tags tags={cats.group} linkPrefix="categories" />
      </CategoriesContainer>
      <div style={{
        height: '100%',
        width: '100%',
        background: '#F1684E',
        display: 'table'
      }}>
        <div style={{
        height: '100%',
        width: '70%',
        background: '#F1eeee',
        display: 'table-cell'
        }}> 
        {posts.map(({ node }) => {
          return (
            <div
              key={node.fields.slug}
              style={{
                background: '#CCCC51',
              }}>
              <Section>
                  <ItemBlog
                    key={node.fields.slug}
                    path={node.fields.slug}
                    cover={node.frontmatter.image.childImageSharp.fluid}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    category={node.frontmatter.categories}
                    excerpt={node.excerpt}
                  />               
              </Section>
            </div>
          )
        })}
        </div>
        <SideContent posts={allInsta} insta={site.social.instagram} />
      </div>
    </Layout>
  )

export default CategoryPage

CategoryPage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.object.isRequired,
    blog: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    insta: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    cat: PropTypes.string.isRequired,
  }).isRequired,

}

export const pageQuery = graphql`
  query CategoryPage($cat: String!) {  
    cats: allMarkdownRemark(
      limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    content: site {
      siteMetadata {
        title
        social {
          instagram
        }
      }
    }
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {categories: {regex: $cat}}}
      limit: 100
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            categories
            image {
                childImageSharp {
                  fluid(
                    maxWidth: 700,
                    maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 700, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
          }
        }
      }
    }
    insta: allInstagramContent {
      edges {
        node {
        link
        caption{
           text
        }
        localImage{
            childImageSharp {
                fluid(maxHeight: 1000, maxWidth: 1000 quality: 50) {
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
  }
`