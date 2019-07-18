const _ = require('lodash')

const prevNext = (list, item) => {
  // Create a random selection of the other posts (excluding the current post)
  const filterUnique = _.filter(list, input => input.node.fields.slug !== item.node.fields.slug)
  // Only use the current language
  const filterLanguage = _.filter(filterUnique, input => input.node.lang === item.node.lang)
  const sample = _.sampleSize(filterLanguage, 2)

  return {
    left: sample[0].node,
    right: sample[1].node,
  }
}

const createPosts = (list, createPage, template) => {

  list.forEach(post => {
    const { left, right } = prevNext(list, post)
    const {
      frontmatter: { slug },
    } = post.node

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
        cat: '//',
        left,
        right
      },
    })
  })
}

const createBlogList = (createPage, template, postsPerPage, numPages) => {

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: template,
      context: {      
        limit: postsPerPage,      
        skip: i * postsPerPage,      
        numPages,      
        cat: '//',
        currentPage: i + 1    
      } 
    });
  });
}


const createCategories = (list, createPage, template) =>
  list.forEach(c => {
    const category = c.fieldValue
    const path = `/categories/${_.kebabCase(category)}`
    createPage({
      path: path,
      component: template,
      context: {
        category,
        cat: `/${category}/`,
      },
    })
  })

module.exports = { createPosts, createCategories, createBlogList }
