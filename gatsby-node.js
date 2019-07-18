const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash');
const { createPosts, createCategories, createBlogList } = require('./src/utils/pageCreator')
const postsPerPage = 6 
let numPages = 0

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

  console.log(page)

  return createPage({
    ...page,
    path: page.path,
    context: {
      cat: `//`, //wildcard regex search
      limit: postsPerPage,
      numPage: numPages
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
              slug
            }
          }
        }
      }
      posts: allMarkdownRemark(
        limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }   
    `

  // ####### Blog Post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const categoryTemplate = require.resolve('./src/templates/category-pages.jsx')
  const blogList = require.resolve('./src/templates/blog-list.js')

  const result = await wrapper(
    graphql(`
      {
        ${initialQuery}
      }
    `)
  )

  numPages = Math.ceil(result.data.allMarkdownRemark.edges.length / postsPerPage);

  createBlogList(createPage, blogList, postsPerPage, numPages)
  createPosts(result.data.allMarkdownRemark.edges, createPage, blogPost)
  createCategories(result.data.posts.group, createPage, categoryTemplate)
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