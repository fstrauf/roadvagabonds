import React from 'react';
import styled from 'styled-components'
import RightColumn from '../elements/Rightcolumn'
import Insta from '../components/insta'
import Youtube from '../components/youtube'

const Card = styled.div`
    border-radius: ${props => props.theme.borderRadius.default};
    background-color: ${props => props.theme.colors.main.light};
    padding: 5px;
    width: 100%;
`

class sideContent extends React.Component {
    render() {
        let { posts, insta } = this.props;
        return (
            <RightColumn>
                <Card>
                    <h2>About us</h2>
                    <p> Hi! We are Vicky & Flo a German couple living in Sydney. In our Troopy we explore
                         Australia.</p>
                </Card>
                <Card>
                    <Insta posts={posts} insta={insta} />
                </Card>
                <Card>
                    <Youtube/>
                </Card>
            </RightColumn>

        );
    }
}

export default sideContent