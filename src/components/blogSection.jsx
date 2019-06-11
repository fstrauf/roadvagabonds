// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import BlogList from '../components/blogList'
// import styled from "@emotion/styled"
// import categoryHash from '../pages/categories.json'

// const Section = styled("div")({
//   margin: '1.5rem 0',
// })

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

// function blogSection() {
//     return (
//         <StaticQuery
//             query={blogPostQuery}
//             render={data => {
//                 // const { author, social } = data.site.siteMetadata
//                 return (
//                     <div>
//                         {categoryHash.categories.map(({ title }) => {
//                             return (
//                                 <Button
//                                     key={title}
//                                 // onClick={event => this.changeFilter(title)}
//                                 >
//                                     {title}
//                                 </Button>
//                             )
//                         })}
//                         {posts.map(({ node }) => {
//                             {/* const title = node.frontmatter.title || node.fields.slug */ }
//                             return (
//                                 <div
//                                     key={node.fields.slug}
//                                     style={{
//                                         background: '#CCCC51',
//                                     }}>
//                                     <Section>
//                                         <BlogList
//                                             node={node}
//                                         />
//                                     </Section>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 )
//             }}
//         />
//     )
// }

// const blogPostQuery = graphql`
//   query blogPostQuery {
//     blog: allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: {frontmatter: {categories: {regex: $cat}}}
//       # limit: $limit
//       # skip: $skip
//       limit: 100
//     ) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             image {
//                 childImageSharp {
//                   # resize(width: 1500, height: 1500) {
//                   #   src
//                   # }
//                   fluid(
//                     maxWidth: 700,
//                     maxHeight: 300) {
//                     ...GatsbyImageSharpFluid
//                   }
//                   fixed(width: 700, height: 300) {
//                     ...GatsbyImageSharpFixed
//                   }
//                 }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export default blogSection



