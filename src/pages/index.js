import React from "react"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import Blog from '../components/blog'
import theme from '../../config/theme'
import Bio from '../components/bio'
import { graphql } from 'gatsby'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const site = data.content.siteMetadata
    const posts = data.blog.edges
    const allInsta = data.insta.edges
    const cats = data.cats

    return (
      <Layout title={site.title}>
      <SEO/>
        <Helmet
          title={site.title}
        />
        <SEO title="All posts" />
        <Bio />
        <div style={{
          height: '100%',
          width: '100%',
          background: theme.colors.main.light,
          display: 'table'
        }}>
          <Blog cats={cats} posts={posts} numPage='3'/>
          <SideContent posts={allInsta} insta={site.social.instagram} />
        </div>
      </Layout>
    )
  }
}

export default Index

// const Index = ({
//   data: {
//     content: { siteMetadata: site },
//     blog: { edges: posts },
//     insta: { edges: allInsta },
//     cats
//   },
//   pageContext: { cat },
// }) => (
//     <Layout title={site.title}>
//     <SEO/>
//       <Helmet
//         title={site.title}
//       />
//       <SEO title="All posts" />
//       <Bio />
//       <div style={{
//         height: '100%',
//         width: '100%',
//         background: theme.colors.main.light,
//         display: 'table'
//       }}>
//         <Blog cats={cats} posts={posts} numPage='3'/>
//         <SideContent posts={allInsta} insta={site.social.instagram} />
//       </div>
//     </Layout>
//   )

// export default Index

// Index.propTypes = {
//   data: PropTypes.shape({
//     content: PropTypes.object.isRequired,
//     blog: PropTypes.shape({
//       edges: PropTypes.array.isRequired,
//     }),
//     insta: PropTypes.object.isRequired,
//   }).isRequired,
//   pageContext: PropTypes.shape({
//     cat: PropTypes.string.isRequired,
//   }).isRequired,

// }

export const pageQuery = graphql`
  query IndexQuery($cat: String!, $limit: Int!) {  
  # query IndexQuery($cat: String!) {  
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
      limit: $limit
      # skip: $skip
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