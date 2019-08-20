import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from '../../config/theme'
import { darken } from 'polished'

const TagsContainer = styled.ul`
  clear: none;
  float: right;
  max-height: none;
  background-color: ${theme.colors.main.light};
  list-style: none;
  margin: 0;
  padding: 0;
  @media(max-width: 1000px) {
    overflow: hidden;    
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
    z-index: 2000;
    position: relative;
  }
`

const MenuLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;    
  padding: 20px 30px;
  :hover{
    background-color: ${theme.colors.main.light};
  }
  @media (max-width: 1000px) {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
  }
`

const MenuIcon = styled.label`
  display: none;
  @media screen and (max-width: 1000px) {      
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 20px 20px;
    position: relative;
    user-select: none;
  }
`

const NavIcon = styled.span`
  background: ${theme.colors.main.dark};
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
  :before{
    background: ${theme.colors.main.dark};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
    top: 5px;
  };
  :after{
    background: ${theme.colors.main.dark};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
    top: -5px;
  }
`

const MenuButton = styled.input`
  display: none;
  :hover{
    background-color: ${theme.colors.main.light};
  }
  &:checked ~ ${TagsContainer} {
      overflow: visible;
  }
  &:checked + ${MenuIcon} {
    transform: rotate(-90deg);
  }
`

const MenuLi = styled.li`
  background: ${theme.colors.main.light};
  float: left;
  margin: 0;
  &:hover {
    background: ${props => darken(0.35, props.theme.tint.black)};
    color: ${theme.colors.brands.social.orange};
  }
  @media screen and (max-width: 1000px) {
    border-right: 2px solid ${theme.colors.main.dark};
    float: none;
  }`

const Tags = ({ tags, linkPrefix }) => (
  <div>
    <MenuButton type="checkbox" id="menu-btn" />
    <MenuIcon for="menu-btn">
      <NavIcon/>
    </MenuIcon>
    <TagsContainer>
      {tags.map(tag => (
        <MenuLi>
          <MenuLink
            to={`${linkPrefix}/${tag.fieldValue}`}
          >
            {tag.fieldValue}
          </MenuLink>
        </MenuLi>
      ))}
      <MenuLi>
        <MenuLink
          to='/categories'
        >
          overview
        </MenuLink>
      </MenuLi>
    </TagsContainer>
  </div>
)

export default Tags