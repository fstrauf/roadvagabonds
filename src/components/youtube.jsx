import React from "react"
import { LinkCard } from './Card'
import YouTube from '../icons/YouTubeSide'

class Youtube extends React.Component {
    render() {
        return (
            <LinkCard link="https://www.youtube.com/channel/UC0j9AJvGXFZRQjJ-qywQkFg" type="youtube">
                <YouTube />
                Road Vagabonds
        </LinkCard>
        )
    }
}

export default Youtube