import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'gatsby'

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Tag = styled(props => <Link {...props} />)`
  background: ${props => props.theme.colors.main.dark};
  color: ${props => props.theme.colors.main.dark};
  font-size: 0.9rem;
  padding: 0.2rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.default};
  margin: 0.3rem 0.6rem 0.3rem 0;
  white-space: nowrap;
  &:hover {
    background: ${props => darken(0.35, props.theme.tint.black)};
    color: ${props => darken(0.35, props.theme.colors.main.light)};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`

const Tags = ({ tags, linkPrefix }) => (
  <TagsContainer>
    <Tag
      to='/'
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
    >
      all
    </Tag>
    {tags.map(tag => (

      <Tag
        to={`${linkPrefix}/${tag.fieldValue}`}
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
      >
        {tag.fieldValue}
      </Tag>      
    ))}
    <Tag
      to='/categories'
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
    >
      overview
    </Tag>
  </TagsContainer>
)

export default Tags