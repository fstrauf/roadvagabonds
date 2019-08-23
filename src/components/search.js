import React from "react"
import { Index } from "elasticlunr"
import styled from 'styled-components'

import Select from 'react-select/async';

const SearchBar = styled(Select)`
    align-self: center;
    outline: none;
    width: 230px;
    height: 40px;
    @media screen and (max-width: 1000px) {
        height: 30px;
        width: 200px;
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

// Search component
export default class Search extends React.Component {

    state = {
        selectedOption: null,
        defaultValue: 'Search...'
    };

    handleChange = selectedOption => {
        console.log(selectedOption)
        this.setState({ selectedOption });
        this.search()
    };

    changeSelect = evt => {
        window.location.href = window.location.origin + "/" + evt.value
    };

    render() {
        const { defaultValue } = this.state;
        return (
            <Wrapper>
                <SearchBar
                    placeholder={defaultValue}
                    cacheOptions
                    defaultValue={defaultValue}
                    value={defaultValue}
                    onInputChange={this.handleChange}
                    loadOptions={this.loadOptions}
                    defaultOptions
                    onChange={this.changeSelect}
                    components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null
                    }}
                />
            </Wrapper>
        )
    }

    remapResult = () => {
        if (this.state.results !== undefined) {
            const reMap = this.state.results.map(
                res => {
                    return {
                        value: res.path,
                        label: res.title,
                    }
                }
            )
            return reMap;
        }
    };

    loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(this.remapResult());
        }, 1000);
    }

    getOrCreateIndex = () =>
        this.index
            ? this.index
            : // Create an elastic lunr index and hydrate with graphql query results
            Index.load(this.props.searchIndex)

    search = evt => {
        const { selectedOption } = this.state
        let query = selectedOption
        // const query = evt.target.value
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
