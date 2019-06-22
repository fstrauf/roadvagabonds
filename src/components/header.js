import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'



const Wrapper = styled.div`    
    height: 81px;
    position: fixed;
    width: 100%;
    z-index: 2000;
`

const Container = styled.div`
    position: relative;
    transform: translateY(0px);
    transition: all 0.25s ease-in-out 0s;
    display: flex;
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

const HeadBar = styled.h2`
    margin-bottom: 0.5 rem;
    margin-top: 0;
    display: flex;
    webkit-box-align: center;
    align-items: center;
`

const Header = ({ siteTitle, menuLinks }) => (
    <Wrapper>
        <Container>
            <div>
                <RoadVagabonds style={{width:'50 px'}} />
                <HeadBar>
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {siteTitle}
                    </Link>
                </HeadBar>
            </div>
            <NavBar>
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    marginLeft: '0',
                }}>
                    {menuLinks.map(link =>
                        <li key={link.link} style={{
                            paddingRight: '1rem'
                        }}>
                            <Link
                                to={link.link}
                                style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                    boxShadow: 'none',
                                    margin: '5 rem'
                                }}>
                                {link.name}</Link>
                        </li>
                    )}
                </ul>
            </NavBar>
        </Container>
    </Wrapper>
)

export default Header