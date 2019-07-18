import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'

const Wrapper = styled(HeadRoom)`    
    height: 81px;
    width: 100%;
    z-index: 2000;
    transition: top 0.3s;
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
        background: ${theme.colors.main.light}
    }
`

const Container = styled.table`
    position: relative;
    transform: translateY(0px);
    transition: all 0.25s ease-in-out 0s;
    display: table;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 1.5rem;
`

const NavBar = styled.nav`
    justify-content: flex-end;
    display: flex;
    -webkit-box-pack: end;
    -webkit-box-align: center;
    align-items: center;
`

const NavBarUl = styled.ul`
    display: flex;
    list-style: none;
    margin-left: 0;
    margin-bottom: 0;
`

const NavBarLi = styled.li`
    color: ${theme.colors.main.dark};
    padding-right: 1rem;
`

const header = ({ menuLinks }) => (
    <Wrapper>
        <Container>
            <tr>
            <Link
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                }}
                to={`/`}
            >
                <RoadVagabonds width='4rem' elementID="rv_svg_1" style={{ float: 'left' }} />
            </Link>
            </tr>
            <tr>
            <NavBar>
                <NavBarUl>
                    {menuLinks.map(link =>
                        <NavBarLi key={link.link}>
                            <Link
                                to={link.link}
                                style={{
                                    color: theme.colors.main.dark,
                                    textDecoration: 'none',
                                    boxShadow: 'none',
                                    margin: '5 rem'
                                }}>
                                {link.name}</Link>
                        </NavBarLi>
                    )}
                </NavBarUl>
            </NavBar>
            </tr>
        </Container>
    </Wrapper>
)

export default header