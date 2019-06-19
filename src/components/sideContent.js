import React from 'react';
import styled from 'styled-components'
import Image from 'gatsby-image'
import theme from '../../config/theme'
import YouTube from '../icons/YouTube'
import { LinkCard } from './Card'

const RightColumn = styled('div')({
    width: '30%',
    paddingLeft: '20px',
    display: 'table-cell',
    background: theme.colors.main.grey,
    verticalAlign: 'top',
})

const Card = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background-color: ${props => props.theme.colors.main.yellow};
    padding: 5px;
    margin-top: 20px;
`

const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
                    <h2>About us</h2>
                    <p>Vicky & Flo</p>
                    <p>📍Sydney</p>
                    <p>Exploring AUS in our Troopy 🚐</p>
                    <p>🇦🇺 • 🇩🇪</p>
                </Card>
                <Card>
                    <LinkCard link="https://www.youtube.com/channel/UC0j9AJvGXFZRQjJ-qywQkFg" type="youtube">
                        <YouTube />
                        Road Vagabonds
                    </LinkCard>
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