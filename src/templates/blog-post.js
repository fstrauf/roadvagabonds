import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactDisqusComments from 'react-disqus-comments'
import Line from '../elements/Line'
import styled from 'styled-components'

const PostText = styled(`div`)`
  max-width: 46rem;
  margin: 0px auto;
  padding: 0px 1.5rem;
  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 5;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  li {
    margin-bottom: calc(1.45rem / 2);
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 1.58;
  }
`

const DisqusContainer = styled.section`
  margin-bottom: 4rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const site = this.props.data.site.siteMetadata

      // Disqus
    const disqus = {
      shortname: 'roadvagabonds-com',
      url: site.siteUrl,
      identifier: post.frontmatter.slug,
      title: site.title,
      language: 'en',
    }

    return (
      <Layout location={this.props.location} title={site.title}>
        <SEO
          postNode={post} article
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`,
            marginBottom: '1 rem',
            marginTop: '-1 rem',
          }}
        >
          {post.frontmatter.date}
        </p>
        <PostText dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: '1 rem',
          }}
        />
        <DisqusContainer type="article">
          <ReactDisqusComments
            shortname={disqus.shortname}
            identifier={disqus.identifier}
            url={disqus.url}
            title={disqus.title}
            language={disqus.language}
          />
          <Line aria-hidden="true" />
        </DisqusContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  # query BlogPostBySlug($slug: String!, $skip: Int!, $limit: Int!) {
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      # limit: $limit
      # skip: $skip
    ){
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
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
`