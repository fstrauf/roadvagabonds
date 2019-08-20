import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import theme from '../../config/theme'

import styled from 'styled-components'

const ResultList = styled.ul`    
    position: fixed;
    z-index: 99999;
    background: ${theme.colors.main.light};
    list-style: none;
    margin-left: 2rem;
`
const SearchBar = styled.input`
  width: 100%;
  align-self: center;
  border: 2px solid ${theme.colors.main.dark};
  outline: none;
  height: 40px;
  width: 370px;
  border-radius: 5px 5px 5px 5px;
  @media screen and (max-width: 1000px) {
    height: 30px;
    width: 130px;
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
            <div>
                <SearchBar type="text" value={this.state.query} onChange={this.search} placeholder="Search the Blog" />
                <ResultList>
                    {this.state.results.map(page => (
                        <li key={page.id}>
                            <Link to={"/" + page.path}>{page.title}</Link>
                            {": " + page.tags.join(`,`)}
                        </li>
                    ))}
                </ResultList>
            </div>
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
