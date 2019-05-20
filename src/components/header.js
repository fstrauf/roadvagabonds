import { Link } from "gatsby"
import React from 'react'
import { rhythm, scale } from "../utils/typography"

const Header = ({ siteTitle, menuLinks }) => (
    <React.Fragment>
        <h1
            style={{
                ...scale(1.5),
                marginBottom: rhythm(0.5),
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
        <nav>
            <ul style={{ display: 'flex', flex: 1, listStyle: 'none' }}>
                {menuLinks.map(link =>
                    <li key={link.link} >
                        <Link 
                            to={link.link} 
                            style={{
                                color: 'black', 
                                textDecoration:'none', 
                                boxShadow:'none', 
                                margin: rhythm(0.2) 
                            }}>
                            {link.name}</Link>
                    </li>
                )}
            </ul>
        </nav>
    </React.Fragment>
)

export default Header