import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SideContent from "../components/sideContent"
import SEO from "../components/seo"
// import BlogList from '../components/blogList'
import styled from "@emotion/styled"
// import categoryHash from '../pages/categories.json'
// import BlogSection from "../components/blogSection"
import '../css/toggleButton.css'
import PropTypes from 'prop-types'
import ItemBlog from '../components/ItemBlog'

const Section = styled("div")({
  margin: '1.5rem 0',
})

// const Button = styled('button')({
//   display: 'inline-block',
//   backgroundColor: 'white',
//   padding: '0.1em 1em',
//   margin: '0 1em 0.1em 0',
//   border: '0.16em solid #4CAF50',
//   borderRadius: '2em',
//   boxSizing: 'border-box',
//   textDecoration: 'none',
//   fontFamily: 'sans-serif',
//   fontWeight: '300',
//   color: 'black',
//   textShadow: '0 0.04em 0.04em #AAAAAA',
//   textAlign: 'center',
//   transitionDuration: '0.4s',
//   transition: 'all 0.2s',
//   ':hover': {
//     backgroundColor: '#4CAF50',
//   },
//   '@media all and (max-width:30em)': {
//     display: 'block',
//     margin: '0.2em auto',
//   }
// })

// function changeFilter = node => (
//   node
// )

const CategoryPage = ({
  data: {
    content: { siteMetadata: site },
    blog: { edges: posts },
    insta: { edges: allInsta },
  },
  pageContext: { cat },
}) => (
    <Layout title={site.title}>
      <SEO title="All posts" />
      {/* <Header /> */}
      <Bio />
      <div style={{
        height: '100%',
        width: '100%',
        background: '#F1684E',
        display: 'table'
      }}>
        {/* {categoryHash.categories.map(({ title }) => {
          return (
            <Button
              key={title}
              onClick={event => this.changeFilter(title)}
            >
              {title}
            </Button>
          )
        })} */}
        <div style={{
        height: '100%',
        width: '70%',
        background: '#F1eeee',
        display: 'table-cell'
        }}> 
        {posts.map(({ node }) => {
          {/* const title = node.frontmatter.title || node.fields.slug */ }
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
            categories
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