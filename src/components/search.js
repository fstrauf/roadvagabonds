import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import theme from '../../config/theme'
import styled from 'styled-components'

const ResultList = styled.ul`    
    position: fixed;
    width: 250px;
    z-index: 99998;
    background: ${theme.colors.main.light};
    list-style: none;
    margin-left: 2rem;
    margin-top: 40px;
`

const SearchBar = styled.input`
    align-self: center;
    border: 2px solid ${theme.colors.main.dark};
    outline: none;
    width: 160px;
    height: 40px;
    z-index: 99999;
    border-radius: 15px;
    not(:valid) ~ .close-icon {
	display: none;
}
    @media screen and (max-width: 1000px) {
        height: 30px;
        width: 130px;
  }
`

const ListItem = styled.li`
    display:block;
    cursor:pointer;
    :hover{
        background-color:#ccc;
        color:#000;
        text-decoration:normal;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2rem;
    @media screen and (max-width: 1000px) {
        padding-top: 1rem;
        justify-content: center;
  }
`

const CloseIcon = styled.button`
	border:1px solid transparent;
	background-color: transparent;
	display: inline-block;
	vertical-align: middle;
    outline: 0;
    cursor: pointer;
    :after{
        content: "X";
        display: block;
        width: 15px;
        height: 15px;
        position: absolute;
        background-color: #FA9595;
        z-index:1;
        right: 35px;
        top: 0;
        bottom: 0;
        margin: auto;
        padding: 2px;
        border-radius: 50%;
        text-align: center;
        color: white;
        font-weight: normal;
        font-size: 12px;
        box-shadow: 0 0 2px #E50F0F;
        cursor: pointer;
    }
`

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
        }
    }

    render() {
        return (
            <Wrapper>
                <SearchBar type="text" value={this.state.query} onChange={this.search} placeholder="Search the Blog" />
                <CloseIcon type="reset">

                </CloseIcon>
                <ResultList>
                    {this.state.results.slice(0, 5).map(page => (
                        <ListItem key={page.id}>
                            <Link to={"/" + page.path}>{page.title}</Link>
                            {": " + page.tags.join(`,`)}
                        </ListItem>
                    ))}
                </ResultList>
            </Wrapper>
        )
    }
    getOrCreateIndex = () =>
        this.index
            ? this.index
            : // Create an elastic lunr index and hydrate with graphql query results
            Index.load(this.props.searchIndex)

    search = evt => {
        const query = evt.target.value
        this.index = this.getOrCreateIndex()
        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index
                .search(query, { expand: true }) // Accept partial matches
                // Map over each ID and return the full document
                .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        })
    }
}
