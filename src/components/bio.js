import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import RoadVagabonds from '../icons/RoadVagabonds'

const HeadContent = styled.p`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
  height: 400px
`

function bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        // const { author, social } = data.site.siteMetadata
        return (
          <Wrapper>
            <HeadContent>
              <div style={{ width: '240px' }}>
                <RoadVagabonds style={{ width: '240px' }} />                
              </div>
            </HeadContent>
          </Wrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`

export default bio
