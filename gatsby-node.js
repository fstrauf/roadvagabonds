const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash');
const { createPosts } = require('./src/utils/pageCreator')

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  
  deletePage(page)

  return createPage({
    ...page,
    path: page.path,
    context: {
      cat: `//`, //wildcard regex search
    },
  })

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const initialQuery =
    `
    
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
              layout
            }
          }
        }
      }

    `

  // ####### Blog Post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const result = await wrapper(
    graphql(`
      {
        ${initialQuery}
      }
    `)
  )

  createPosts(result.data.allMarkdownRemark.edges, createPage, blogPost)
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