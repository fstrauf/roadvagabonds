import React from 'react'

export default ({ insta }) => (
        <h1>
            <a 
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                }} 
                href={`https://instagram.com/${insta}`}>Follow us on Instagram</a>
        </h1>

)