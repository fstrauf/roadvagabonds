import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
`

const Image = styled.div`
  position: relative;
  box-shadow: ${props => props.theme.shadow.feature.small.default};
  transition: ${props => props.theme.transitions.boom.transition};
  border-radius: ${props => props.theme.borderRadius.default};
  min-height: 300px;
  img {
    border-radius: ${props => props.theme.borderRadius.default};
  }
  &:hover {
    box-shadow: ${props => props.theme.shadow.feature.small.hover};
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${props => props.theme.borderRadius.default};
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
      padding-bottom: 0% !important;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px ${props => props.theme.tint.blue};
    }
  }
  flex-basis: calc(99.9% * 2 / 5 - 1rem);
  max-width: calc(99.9% * 2 / 5 - 1rem);
  width: calc(99.9% * 2 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`

const Information = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.brands.social.orange};
    }
  }

  flex-basis: calc(99.9% * 3 / 5 - 1rem);
  max-width: calc(99.9% * 3 / 5 - 1rem);
  width: calc(99.9% * 3 / 5 - 1rem);
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`

const Statistics = styled.div`
  color: ${props => props.theme.colors.brands.social.orange};
`

const Excerpt = styled.div`
  margin-top: 1rem;
`

const ItemBlog = ({ path, cover, category, title, date, excerpt }) => (
      <Wrapper>
        <Image>
          <Link to={path} title={title}>
            <Img fluid={cover} />
          </Link>
        </Image>
        <Information>
          <Link to={path} >
            <h2 style={{marginTop:'1rem', marginRight:'1rem', fontSize:'1 vw'}}>{title}</h2>
          </Link>
          <Statistics>
            <span>{`${date}, ${category}`}</span>
          </Statistics>
          <Excerpt>{`${excerpt}...`}</Excerpt>
        </Information>
      </Wrapper>
)

export default ItemBlog
