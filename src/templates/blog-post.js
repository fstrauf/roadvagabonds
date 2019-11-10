import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactDisqusComments from 'react-disqus-comments'
import Line from '../elements/Line'
import styled from 'styled-components'
import theme from '../../config/theme'
import SideContentPost from "../components/sideContentPost"

const PostText = styled.div`
  max-width: 50rem;
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
  }
  hr {
    margin-bottom: 1 rem;
  }
  h1 {
    font-size: 2rem;
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
  blockquote p {
    display: inline;
  }
  ol {
  counter-reset: item;
  margin: 0 0 1.5em;
  padding: 0;
  > li {
    counter-increment: item;
    list-style-type: none;
    margin: 0;
    padding: 0 0 0 2rem;
    text-indent: -1.2rem;
    &::before {
      content: counter(item) '.';
      display: inline-block;
      font-weight: bold;
      padding-right: .5rem;      
      text-align: right;
      width: 1.5rem;
    }
  }
}
@media screen and (max-width: 1000px) {
    padding: 0;
}
`

const DisqusContainer = styled.section`
  margin-bottom: 4rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
`

const HeaderContainer = styled.section`
  margin-left: auto;
  max-width: 50rem;
  margin-right: auto;
  padding: 0px 1.5rem;
  p {
    display: block;
    margin-bottom: 1rem;
    margin-top: -1rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${theme.colors.main.light};
  display: flex;
  margin-top: 8rem;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    margin-top: 4rem;
    flex-wrap: wrap;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const site = this.props.data.site.siteMetadata
    const allInsta = this.props.data.insta.edges
    const similarPosts = this.props.data.allMarkdownRemark.edges

    const disqus = {
      shortname: 'roadvagabonds-com',
      url: site.siteUrl,
      identifier: post.frontmatter.slug,
      title: site.title,
      language: 'en',
    }

    return (
      <Layout location={this.props.location} title={site.title}>
        <SEO postNode={post} article />
        <MainWrapper>
          <div>
            <HeaderContainer>
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </HeaderContainer>
            <PostText dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <SideContentPost posts={allInsta} insta={site.social.instagram} similarPosts={similarPosts} />
        </MainWrapper>


        <hr />
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
  query BlogPostBySlug($slug: String!, $category: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          instagram
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}, slug: {ne: $slug}}}, limit: 3) {
      edges {
        node {
          frontmatter {
            title
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
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
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
