import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image'
import theme from '../../config/theme'

const RightColumn = styled('div')({
    width: '30%',
    paddingLeft: '20px',
    display: 'table-cell',
    background: theme.colors.black.lighter,
    verticalAlign: 'top',
})

const Card = styled('div')({
    backgroundColor: theme.colors.secondary.base,
    padding: '5px',
    marginTop: '20px',
})

const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: '5px',
    gridRowGap: '5px',
})

class sideContent extends React.Component {
    render() {
        console.log(this.props)
        let { posts, insta } = this.props;
        console.log(this.props)
        return (
            <RightColumn>
                <Card>
                    <h2>About Me</h2>
                    <p>Hey this is me</p>
                </Card>
                <Card>
                    <h3>Popular on the Blog</h3>
                </Card>
                <Card>
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
                                let captionText = item.node.caption ? deleteTags(item.node.caption.text) : "Instagram Post"
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
                </Card>
            </RightColumn>

        );
    }
}

export default sideContent

function deleteTags(text) {
    return text.replace(/^(\s*#\w+\s*)+$/gm, "")
}