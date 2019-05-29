import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
import BlogList from '../components/blogList'
import styled from "@emotion/styled"
import categoryHash from '../pages/categories.json'
import '../css/toggleButton.css'

class BlogIndex extends React.Component {
  render() {
    console.log(this.props.pageContext)
    const { data } = this.props
    this.state = {
      filter: 'all'
    }

    const siteTitle = "test"//data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const Section = styled("div")({
      margin: '1.5rem 0',
    })

    const Button = styled('button')({
      display: 'inline-block',
      backgroundColor: 'white',
      padding: '0.1em 1em',
      margin: '0 1em 0.1em 0',
      border: '0.16em solid #4CAF50',
      borderRadius: '2em',
      boxSizing: 'border-box',
      textDecoration: 'none',
      fontFamily: 'sans-serif',
      fontWeight: '300',
      color: 'black',
      textShadow: '0 0.04em 0.04em #AAAAAA',
      textAlign: 'center',
      transitionDuration: '0.4s',
      transition: 'all 0.2s',
      ':hover': {
        backgroundColor: '#4CAF50',
      },
      '@media all and (max-width:30em)': {
        display: 'block',
        margin: '0.2em auto',
      }
    })

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
          {/* <div className="onoffswitch">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked onChange={event => this.changeFilter(event)}/>
              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                  <span className="onoffswitch-inner"></span>
                  <span className="onoffswitch-switch"></span>
              </label>
          </div> */}
          {categoryHash.categories.map(({ title }) => {
            return (
              <Button key={title} onClick={event => this.changeFilter(title)}>{title}</Button>
            )
          })}
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

  changeFilter = title => {
    this.setState = 'filter:'+{title}
    console.log(this.state.title)
  }

}



export default BlogIndex


export const pageQuery = graphql`
  query AllPostsFiltered($cat: String!) {  
  # query {
    # site {
    #   siteMetadata {
    #     title
    #     social {
    #       instagram
    #     }
    #   }
      
    # }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {categories: {eq: $cat}}}
      # limit: $limit
      # skip: $skip
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
