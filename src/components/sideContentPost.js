import React from 'react';
import styled from 'styled-components'
import RightColumn from '../elements/Rightcolumn'
import Insta from '../components/insta'
import Youtube from '../components/youtube'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Card = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background-color: ${props => props.theme.colors.main.light};
    padding: 5px;
    width: 100%;
`

const FancyLink = styled(Link)`
	color: #323234; 
	font-size: 12px;
	font-weight: 800;
	line-height: 1.4;
	text-transform: uppercase;
    boxShadow: '0 1px 2px 0 rgba(43, 59, 93, 0.29)';
    ':hover': {
        boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.29)',
    },
`

const SimilarWrapper = styled.div`
    display: flex;
`


class sideContent extends React.Component {
    render() {
        let { posts, insta, similarPosts } = this.props;
        return (
            <RightColumn>
                <Card>
                    <h2>Similar posts</h2>
                    {
                        similarPosts.map((post) => {
                            return (
                                <FancyLink to={post.node.frontmatter.slug}>
                                        <Image fluid={post.node.frontmatter.image.childImageSharp.fluid} caption={post.node.frontmatter.title} />
                                        <p>{post.node.frontmatter.title}</p>
                                </FancyLink>
                            )
                        })
                    }
                </Card>
                <Card>
                    <h2>About us</h2>
                    <p> Hi! We are Vicky & Flo a German couple living in Sydney. In our Troopy we explore
                         Australia.</p>
                </Card>
                <Card>
                    <Insta posts={posts} insta={insta} />
                </Card>
                <Card>
                    <Youtube />
                </Card>
            </RightColumn>

        );
    }
}

export default sideContent