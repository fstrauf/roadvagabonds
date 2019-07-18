import { Link } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'
import HeadRoom from 'react-headroom'
import theme from '../../config/theme'
// import Tag from '../components/Tag'
import Tags from '../components/Tags'

const Wrapper = styled(HeadRoom)`    
    height: 81px;
    width: 100%;
    z-index: 2000;
    transition: top 0.3s;
    .headroom--pinned {
        position: fixed;
        transform: translateY(0%);
        background: ${theme.colors.main.light}
    }
`
const Container = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    justifyContent:'center'

    // gridColumnGap: '5px',
    // gridRowGap: '5px',
})

const Row = styled.div`
    display:flex;
    align-items: center; /* Vertical center of image & text */
`


// const Container = styled.table`
//     position: relative;
//     transform: translateY(0px);
//     transition: all 0.25s ease-in-out 0s;
//     display: table;
//     justify-content: space-between;
//     flex-direction: row;
//     width: 100%;
//     padding: 1rem 1.5rem;
// `

const NavBar = styled.nav`
    justify-content: flex-end;
    align-items: center;
    display: block;
    margin: auto;
`

// const NavBarUl = styled.ul`
//     list-style: none;
//     display: flex;
//     margin: auto;
// `

// const NavBarLi = styled.li`
//     color: ${theme.colors.main.dark};
//     padding-right: 1rem;
//     padding-left: 1rem;
// `

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
                    margin: `auto`,
                }}
                to={`/`}
            >
                <RoadVagabonds width='10rem' elementID="rv_svg_1" style={{ display:`block`, margin:`auto` }} />
            </Link>
            </Row> 
            <Row>    
            <NavBar>
                {/* <NavBarUl> */}
                    <Tags tags={menuLinks} linkPrefix="categories" />
                    {/* {menuLinks.map(link =>
                        <NavBarLi key={link.link}>
                            <Link
                                to={link.link}
                                style={{
                                    color: theme.colors.main.dark,
                                    textDecoration: 'none',
                                    boxShadow: 'none',
                                }}>
                                {link.name}</Link>
                        </NavBarLi>
                    )} */}
                {/* </NavBarUl> */}
            </NavBar>
            </Row>

        </Container>
    </Wrapper>
)

export default header