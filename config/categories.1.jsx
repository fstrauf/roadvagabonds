import React from 'react'
// import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from '../elements/Container'
import Layout from '../elements/Layout'
import SkipNavContent from '../elements/SkipNavLink'
import Footer from '../components/footer'
import Header from '../components/header'
import Tags from '../components/tags'

// import { LocaleConsumer } from '../elements/Layout'
import categoryHash from '../pages/categories.json'
// import config from '../../config/website'

const CategoriesContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

// categoryHash.categories.map(({ title })


// const Categories = ({ data: { posts } }) => {
  const Categories = ({ }) => {
  const allCategories = categoryHash.categories.map(category => category.title)

  return (

    
    <div>
    <Layout title="test">
      <Helmet title="test"/>
      <Header></Header>
      </Layout>
    </div>


  )
}

export default Categories

// Categories.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.array.isRequired,
//       edges: PropTypes.array.isRequired,
//     }),
//   }).isRequired,
//   pageContext: PropTypes.shape({
//     locale: PropTypes.string.isRequired,
//   }).isRequired,
//   // location: PropTypes.object.isRequired,


// }

// export const pageQuery = graphql`
//   query CategoriesPage{
//     posts: allMarkdownRemark(
//       limit: 2000) {
//       group(field: frontmatter___categories) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `




  {/* <SkipNavContent>
    <CategoriesContainer>
      <Tags tags={allCategories} linkPrefix="categories" />
    </CategoriesContainer>

  </SkipNavContent> */}
