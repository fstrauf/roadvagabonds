import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
// import Header from '../components/header';
import BlogList from '../components/blogList'
import styled from "@emotion/styled";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const Section = styled("div")({
      margin: '1.5rem 0',
    });
    const Bold = styled("span")({
      fontWeight: '700',
    });

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Header /> */}
        <Bio />
        <div style={{
          display: 'table-cell',
          height: '100%',
          width: '100%',
          background: '#F1684E'
        }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                key={node.fields.slug}
                style={{
                  background: '#CCCC51',
                }}>
                <Section>
                  <BlogList
                    node={node}
                  />
                </Section>
              </div>
            )
          })}
          <SideContent posts={data.allInstagramContent} insta={data.site.siteMetadata.social.instagram} />
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  # {"skip": 1, "limit": 2}
  # query ($skip: Int!, $limit: Int!){
    query{
    site {
      siteMetadata {
        title
        social {
          instagram
        }
      }
      
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      # limit: $limit
      # skip: $skip
      limit: 100
      skip: 5
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
            image {
                childImageSharp {
                  # resize(width: 1500, height: 1500) {
                  #   src
                  # }
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
    allInstagramContent {
      edges {
        node {
        link
        caption{
           text
        }
        localImage{
            childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
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
