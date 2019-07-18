import React from "react"
import BlogMain from "../components/blogMain"
import { graphql } from 'gatsby'

class CategoryPage extends React.Component {
  render() {
    const { data } = this.props
    const site = data.content.siteMetadata
    const posts = data.blog.edges
    const allInsta = data.insta.edges
    const cats = data.cats

    return (
        <BlogMain 
          site={site} 
          posts={posts} 
          allInsta={allInsta} 
          cats={cats}             
        />
    )
  }
}

export default CategoryPage

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
                    maxWidth: 450,
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
    insta: allInstagramContent(
      limit: 6
    ) {
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