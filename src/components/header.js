import { Link } from "gatsby"
import React from 'react'

import styled from 'styled-components'
// import theme from '../../config/theme'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    height: 81px;
    ${'' /* width: 100%;     */}
    ${'' /* position: fixed; */}
    justify-content: flex-end
`

const NavBar = styled.nav`
    justify-content: flex-end;
    display: flex;
`

const Header = ({ siteTitle, menuLinks }) => (
<Container>
        <h1
            style={{                
                marginBottom: '0.5 rem',
                marginTop: 0,
            }}
        >
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
        </h1>
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
)

export default Header