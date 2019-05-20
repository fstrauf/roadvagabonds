import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Img from 'gatsby-image'

const Card = styled('div')({
    backgroundColor: 'white',
    padding: '20px',
    marginTop: '20px',
})

const LeftColumn = styled('div')({
    float: 'left',
    width: '75%',
})

class blogList extends React.Component {
    render() {
        let { node, showDate } = this.props;
        return (
            <LeftColumn>
                <Card>
                    <Link 
                        to={node.fields.slug}>
                        {node.frontmatter.title}
                    </Link>
                    <h5>{node.frontmatter.date}</h5>
                    <Img
                        fixed={node.frontmatter.image.childImageSharp.fluid}
                        style={{ width: "100%", marginRight: 20, height: '200px' }} />
                    <p>{node.excerpt}</p>
                </Card>
            </LeftColumn>
        );
    }
}

export default blogList;
