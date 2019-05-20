import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const RightColumn = styled('div')({
    width: '25%',
    paddingLeft: '20px',
    display:'table-cell',
    background: '#F9A'
})

//todo outsource
const Card = styled('div')({
    backgroundColor: 'white',
    padding: '20px',
    marginTop: '20px',
})

class sideContent extends React.Component {
    render() {
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
                    <h3>Follow me on Instagram</h3>
                </Card>
            </RightColumn>

        );
    }
}

export default sideContent