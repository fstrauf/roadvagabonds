import React from 'react'
import styled from 'styled-components'
import Tag from '../components/Tag'

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const Tags = ({ tags, linkPrefix }) => (
  <TagsContainer>
    {/* <Tag
      to='/'
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
    >
      all
    </Tag> */}
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