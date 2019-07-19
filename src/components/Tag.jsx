import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'gatsby'

const Tag = styled(props => <Link {...props} />)`
  font-size: 1.2rem;
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
  @media screen and (max-width: 1000px) {
    font-size: 0.7rem;
    margin: 0rem 0rem 0rem 0;
  }
`

export default Tag 