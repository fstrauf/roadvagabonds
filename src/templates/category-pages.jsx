import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import '../css/toggleButton.css'
import PropTypes from 'prop-types'
import theme from '../../config/theme'
import Blog from '../components/blog'

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
      <div style={{
        height: '100%',
        width: '100%',
        background: theme.colors.main.grey,
        display: 'table'
      }}>
        <Blog cats={cats} posts={posts} />
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
            slug
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