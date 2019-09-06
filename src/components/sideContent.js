import React from 'react';
import styled from 'styled-components'
import Image from 'gatsby-image'
import theme from '../../config/theme'
import YouTube from '../icons/YouTubeSide'
import { LinkCard } from './Card'

const RightColumn = styled.div`
    width: 30%;
    padding-left: 20px;
    display: flex;
    background: ${theme.colors.main.light};
    flex-direction: column;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding-left: 0px;
        vertical-align: top;
      }
`

const Card = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background-color: ${props => props.theme.colors.main.light};
    padding: 5px;
    width: 100%;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
`

class sideContent extends React.Component {
    render() {
        let { posts, insta, similarPosts } = this.props;
        return (
            <RightColumn>
                <Card>
                    <h2>Similar posts</h2>
                </Card>
                <Card>
                    <h2>About us</h2>
                    <p> Hi! We are Vicky & Flo a German couple living in Sydney. In our Troopy we explore
                         Australia.</p>                  
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
                </Card>
            </RightColumn>

        );
    }
}

export default sideContent