import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image'


const Card = styled('div')({
    backgroundColor: 'white',
    padding: '20px',
    marginTop: '20px',
    background: '#FFFFFF',
    transition: 'all 0.5s ease',
    boxShadow: '0 1px 2px 0 rgba(43, 59, 93, 0.29)',
    ':hover': {
        background: '#F1684E',
        color: 'white',
        textDecoration: 'none',
        boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.29)',
    },
})


const LeftColumn = styled('div')({
    float: 'left',
    width: '70%',
})

const imgStyle = {
    objectFit: 'scale-down'
}



class blogList extends React.Component {
    render() {
        let { node } = this.props;
        return (
            <LeftColumn>
                <Card>
                    <Link
                        to={node.fields.slug}
                        style={{
                            color: 'black',
                        }}>
                        <h3>{node.frontmatter.title}</h3>
                        <h5>{node.frontmatter.date}</h5>
                        <Img
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            // width='1000'
                            // fixed={node.frontmatter.image.childImageSharp.fixed}     
                            imgStyle={{ ...imgStyle }}
                            style={{
                                width: "100%",
                                marginRight: 20,
                                height: '300px',
                                display: 'table',
                            }} />
                        <p>{node.excerpt}</p>
                    </Link>
                </Card>
            </LeftColumn>
        );
    }
}

export default blogList;
