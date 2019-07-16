import React from "react"
import Tags from '../components/Tags'
import ItemBlog from '../components/ItemBlog'
import theme from '../../config/theme'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Tag from '../components/Tag'

const CatContainer = styled.section`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const Section = styled.div`
    margin: 1.5rem 0;
`

const BlogBox = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background: ${props => props.theme.colors.main.dark};
`


const numPages = 3

const blog = ({ cats, posts, page, numPage }) => (
    <div>
        <CatContainer>
            <Tags tags={cats.group} linkPrefix="categories" />
        </CatContainer>
        <div style={{
            height: '100%',
            width: '70%',
            background: theme.colors.main.light,
            display: 'table-cell'
        }}>
            {posts.map(({ node }) => {
                return (
                    <BlogBox
                        key={node.fields.slug}>
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
                    </BlogBox>
                )
            })}
        </div>

        <CatContainer>
            {Array.from({ length: numPages }, (_, i) => (
                <Tag
                    to={`/${i === 0 ? '/' : i + 1}`}
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}>
                    {i + 1}
                </Tag>

            ))}
        </CatContainer>
    </div>

)

export default blog