import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import '../css/toggleButton.css'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon16 from '../../static/favicon16.png'
import favicon32 from '../../static/favicon32.png'
import favicon64 from '../../static/favicon64.png'
import Blog from '../components/blog'
import theme from '../../config/theme'

const Index = ({
  data: {
    content: { siteMetadata: site },
    blog: { edges: posts },
    insta: { edges: allInsta },
    cats
  },
  pageContext: { cat },
}) => (
    <Layout title={site.title}>
      <Helmet
        title={site.title}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
          { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
          { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
        ]}
      />
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

export default Index

Index.propTypes = {
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
  query IndexQuery($cat: String!) {  
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
                    maxHeight: 700) {
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