const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // ####### Blog Post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // const blogPage = path.resolve(`./src/templates/page.js`)

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      // switch (post.node.frontmatter.layout) {
      //   case 'page':
      //     // code block
      //     createPage({
      //       path: post.node.frontmatter.slug,
      //       component: blogPage,
      //       context: {
      //         slug: post.node.fields.slug,
      //         previous,
      //         next,
      //       },
      //     })
      //     break;
      //   case 'post':
          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
          // code block
      //     break;
      //   default:
      //     // code block
      //     break;
      // }


    })

    // const pages = result.data.pages.edges
    // pages.forEach(page => {
    //   if ()
    //     createPage({
    //         path: page.node.fields.slug,
    //         component: blogPage,
    //         context: {
    //           slug: page.node.fields.slug,         
    //         },
    //     })
    // })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}



// posts:allMarkdownRemark(
//   sort: { fields: [frontmatter___date], order: DESC }
//   limit: 1000
//   filter:{frontmatter: {layout:{eq:"post"}}}
// ) {
//   edges {
//     node {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// }
