import { Link, StaticQuery, graphql } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'
import Tags from '../components/Tags'
import SocialBox from './SocialBox'
import Search from '../components/search'

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
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const Row = styled.div`
    display:flex;
    align-items: center;
`
const RowEnd = styled.div`
    display:flex;
    align-items: center;
    justify-self: end;
    @media screen and (max-width: 1000px) {
        margin-right: 0;
        width: 100%;
        padding-top: 1rem;
    }
`

const NavBar = styled.nav`
    justify-content: flex-end;
    align-items: center;
    display: block;
    margin: auto;
`

const Logo = styled.svg`
    display: block; 
    margin: auto; 
    width: 10rem;
    @media screen and (max-width: 1000px) {
        width: 3rem;
    }
`

const header = ({ menuLinks }) => (
    <StaticQuery
        query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
        render={data => (
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
                            <Logo
                                data-name="rv_svg_1"
                                viewBox="0 0 553.71 489.95"
                                id="rv_svg_1">
                                <RoadVagabonds />
                            </Logo>
                        </Link>
                    </Row>
                    <Row>
                        <NavBar>
                            <Tags tags={menuLinks} linkPrefix="categories" />
                        </NavBar>
                        <Search searchIndex={data.siteSearchIndex.index} />
                    </Row>
                    <RowEnd>
                        <SocialBox />
                    </RowEnd>
                </Container>
            </Wrapper>
        )}
    />

)

export default header