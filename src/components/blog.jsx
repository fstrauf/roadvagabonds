import React from "react"
import ItemBlog from '../components/ItemBlog'
import theme from '../../config/theme'
import styled from 'styled-components'
import Tag from '../components/Tag'

const NumContainer = styled.section`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: ${props => props.theme.layout[props.type]};
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

const Section = styled.div`
    margin: 1.5rem 0;
`

const BlogBox = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background: ${props => props.theme.colors.main.light};
`

class blog extends React.Component {
    render() {
        let { posts, numPage } = this.props;
        return (
            <div>
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

                <NumContainer>
                    {Array.from({ length: numPage }, (_, i) => (
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
                </NumContainer>
            </div>
        )
    }
}

export default blog