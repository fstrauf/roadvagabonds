import Tags from '../components/Tags'
import ItemBlog from '../components/ItemBlog'
import theme from '../../config/theme'
import styled from "@emotion/styled"
import Container from '../elements/Container'
import React from "react"

const CategoriesContainer = styled(Container)`
  
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const Section = styled("div")({
    margin: '1.5rem 0',
})

const Blog = ({ cats, posts }) => (
    <div>
        <CategoriesContainer>
            <Tags tags={cats.group} linkPrefix="categories" />
        </CategoriesContainer>
        <div style={{
            height: '100%',
            width: '70%',
            background: theme.colors.main.grey,
            display: 'table-cell'
        }}>
            {posts.map(({ node }) => {
                return (
                    <div
                        key={node.fields.slug}
                        style={{
                            background: theme.colors.main.yellow,
                        }}>
                        {console.log(node.frontmatter.slug)}
                        <Section>
                            <ItemBlog
                                key={node.fields.slug}
                                path={node.frontmatter.slug}
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
    </div>

)

export default Blog