import React from "react"
import GitHub from '../icons/GitHub'
import Facebook from '../icons/Facebook'
import Pinterest from '../icons/Pinterest'
import Instagram from '../icons/Instagram'
import YouTube from '../icons/YouTube'
import styled from 'styled-components'
import theme from '../../config/theme'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    @media screen and (max-width: 1000px) {
        display: flex;
        align-self: center;
        width: 100%;
    }
`

const SocialIcon = styled.svg`
    vertical-align: middle; 
    display: block; 
    margin: auto; 
    width: 3rem;
    fill: ${theme.colors.main.dark};
    :hover{
        transform: scale(1.25);
        transition: background-color .5s, transform .5s ease-out;
        fill: ${theme.colors.brands.social.orange};
    }
    @media screen and (max-width: 1000px) {
        width: 2rem;
    }
`

const SocialLink = styled.a`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

class SocialBox extends React.Component {
    render() {
        return (
            <Wrapper>

                {/* {website.social.accounts.map({ account }) => {
                    return (
                        <SocialIcon
                            preserveAspectRatio="xMidYMid meet"               
                            viewBox="0 0 512 512"
                            role="img"
                            aria-hidden="true"
                            focusable="false"
                            icon={account}
                        >
                            <Instagram />
                        </SocialIcon>
                    )
                }} */}

                <SocialLink
                    href={`https://www.instagram.com/roadvagabonds`}>
                    <SocialIcon
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <Instagram />
                    </SocialIcon>
                </SocialLink>
                <SocialLink
                    href={`https://www.youtube.com/channel/UC0j9AJvGXFZRQjJ-qywQkFg`}>
                    <SocialIcon
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <YouTube />
                    </SocialIcon>
                </SocialLink>
                <SocialLink
                    href={`https://github.com/fstrauf/roadvagabonds`}>
                    <SocialIcon
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <GitHub />
                    </SocialIcon>
                </SocialLink>
                <SocialLink
                    href={`https://www.facebook.com/road.vagabonds.1`}>
                    <SocialIcon
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <Facebook />
                    </SocialIcon>
                </SocialLink>
                <SocialLink
                    href={`https://www.pinterest.com.au/roadvagabonds/`}>
                    <SocialIcon
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                        role="img"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <Pinterest />
                    </SocialIcon>
                </SocialLink>
            </Wrapper>
        )
    }
}

export default SocialBox