import { Link } from "gatsby"
import React from 'react'

const Header = ({ siteTitle, menuLinks }) => (
    <React.Fragment>
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
        <nav>
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
        </nav>

    </React.Fragment>
)

export default Header