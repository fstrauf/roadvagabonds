import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'
import GitHub from '../icons/GitHub'
import Facebook from '../icons/Facebook'
import Pinterest from '../icons/Pinterest'
import Instagram from '../icons/Instagram'
import Youtube from '../icons/Youtube'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'
import Tags from '../components/Tags'

const Wrapper = styled(HeadRoom)`    
    height: 160px;
    width: 100%;
    z-index: 2000;
    transition: top 0.3s;
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
        background: ${theme.colors.main.light}
    }
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
`

const SocialBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    ${'' /* width: 100%;
    height: 100%; */}
`

const Row = styled.div`
    display:flex;
    align-items: center;
`
const RowEnd = styled.div`
    display:flex;
    align-items: center;
    justify-self: end;
    margin-right: 2rem
`

const NavBar = styled.nav`
    justify-content: flex-end;
    align-items: center;
    display: block;
    margin: auto;
`

const header = ({ menuLinks }) => (
    <Wrapper>
        <Container>
            <Row>
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                        display: `block`,
                        marginLeft: '1rem'
                    }}
                    to={`/`}
                >
                    <RoadVagabonds width='10rem' elementID="rv_svg_1" style={{ display: `block`, margin: `auto` }} />
                </Link>
            </Row>
            <Row>
                <NavBar>
                    <Tags tags={menuLinks} linkPrefix="categories" />
                </NavBar>
            </Row>
            <RowEnd>
                    <SocialBox>
                        <Facebook width='3rem'/>
                        <Youtube width='3rem'/>
                        <Instagram width='3rem'/>                        
                        <Pinterest width='3rem'/>
                        <GitHub width='3rem'/>
                    </SocialBox>
            </RowEnd>
        </Container>
    </Wrapper>
)

export default header