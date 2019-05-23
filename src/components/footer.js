import React from 'react'
import styled from '@emotion/styled';
import Image from 'gatsby-image'


const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridColumnGap: '10px',
    gridRowGap: '15px',
})


export default ({ posts, insta }) => (
    <div>
        <h1>
            <a 
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                }} 
                href={`https://instagram.com/${insta}`}>Follow us on Instagram</a>
        </h1>

        <Container className='grid'>
            {
                posts.edges.map((item, i) => {
                    let captionText = item.node.caption ? deleteTags(item.node.caption.text) : "Instagram Post"
                    //Check for missing images
                    return (
                        item.node.localImage ?
                            <a href={item.node.link}> <Image fluid={item.node.localImage.childImageSharp.fluid} key={i} caption={captionText} /></a>
                            : <div></div>
                    )
                })
            }
        </Container>
    </div>
)

function deleteTags(text) {
    return text.replace(/^(\s*#\w+\s*)+$/gm, "")
}