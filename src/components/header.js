import { Link, StaticQuery, graphql } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'
import Tags from '../components/Tags'
import SocialBox from './SocialBox'
import Search from '../components/search'
import Select from '../components/select'


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
    .headroom--scrolled {
        padding-left: 3rem;
        padding-right: 3rem;
        @media screen and (max-width: 1000px) {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const Row = styled.div`
    display:flex;
    align-items: center;
`

const RowMid = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
`
const RowEnd = styled.div`
    display:flex;
    align-items: center;
    justify-self: end;
    padding-top: 1rem;
    @media screen and (max-width: 1000px) {
        margin-right: 0;
        width: 100%;
    }
`

const NavBar = styled.nav`
    justify-content: flex-end;
    align-items: center;
    display: block;
    margin-top: 4rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 1000px) {
        margin-right: 0;
        width: 100%;
        margin-top: 0;
        margin-bottom: 0;
    }

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
                    <RowMid>
                        <NavBar>
                            <Tags tags={menuLinks} linkPrefix="categories" />
                        </NavBar>
                    </RowMid>
                    <RowEnd>
                        <SocialBox />
                    </RowEnd>
                </Container>
                {/* <Select></Select> */}
                {/* <Select options={data.siteSearchIndex.index} isClearable="true" isSearchable="true" /> */}

                <Search searchIndex={data.siteSearchIndex.index} />
            </Wrapper>
        )}
    />

)

export default header