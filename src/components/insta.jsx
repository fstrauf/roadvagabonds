import React from "react"
import Image from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
`

class Insta extends React.Component {
    render() {
        let { posts, insta } = this.props;
        return (        
         <div>
                 <h3>
                        <a
                            style={{
                                boxShadow: `none`,
                                textDecoration: `none`,
                                color: `inherit`,
                            }}
                            href={`https://instagram.com/${insta}`}>Follow us on Instagram
                        </a>
                    </h3>
                    <Container className='grid'>
                        {
                            posts.map((item, i) => {
                                let captionText = "Instagram Post"
                                return (
                                    item.node.localImage ?
                                        <a
                                            href={item.node.link}
                                            key={i}
                                            style={{
                                                boxShadow: '0 1px 2px 0 rgba(43, 59, 93, 0.29)',
                                                textDecoration: `none`,
                                                color: `inherit`,
                                                ':hover': {
                                                    boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.29)',
                                                },
                                            }}>
                                            <Image
                                                fluid={item.node.localImage.childImageSharp.fluid}
                                                key={i}
                                                caption={captionText} />
                                        </a>
                                        : <div></div>
                                )
                            })
                        }
                    </Container>
         </div>
        )
    }
}

export default Insta