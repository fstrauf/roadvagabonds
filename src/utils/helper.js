const _ = require('lodash')

const sortPosts = (initials) => {
  let newObj = {}
  let formObj = []
  initials.map(function (item) {
    let initial = item.node.frontmatter.title.charAt(0)

    if (!newObj.hasOwnProperty(initial)) {
      newObj[initial] = initial
      newObj[initial] = []
    }

    newObj[initial].push({
      title: item.node.frontmatter.title,
      author: item.node.frontmatter.author,
      date: item.node.frontmatter.date,
      slug: item.node.frontmatter.slug,
    })

    return initial
  })

  Object.entries(newObj).forEach(entry => {
    let helpObj = {}
    helpObj.header = entry[0]
    helpObj.detail = entry[1]

    formObj.push(helpObj)
  })

  return formObj
}

module.exports = { sortPosts }
