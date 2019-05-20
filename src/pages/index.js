import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import { HeadContent } from '../components/HeadContent';
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
        <HeadContent />
        <Bio />
        <div style={{
            display:'table-cell', 
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
                  background:'#CCCC51',
                }}>
                  <Section>
                    <BlogList
                      node={node}
                    />
                  </Section>
              </div>
            )
          })}
          <SideContent> </SideContent>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                  resize(width: 1500, height: 1500) {
                    src
                  }
                  fluid(maxWidth: 786) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    }
  }
`
