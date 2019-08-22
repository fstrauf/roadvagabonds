import React, { Component } from "react"
import { Link } from "gatsby"
import { Index } from "elasticlunr"
import theme from '../../config/theme'
import styled from 'styled-components'
// import Select from 'react-select'
import Select from 'react-select/async';

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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

// Search component
export default class Search extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         query: ``,
    //         results: [],
    //         inputValue: ``
    //     }
    // }

    state = {
        selectedOption: null,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        this.search()
    };  

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onInputChange={this.handleChange}
                loadOptions={this.loadOptions}
            />
            // <Wrapper>
            //     <Select 
            //         value={this.state.query} 
            //         options={this.state.results} 
            //         onChange={this.handleChange}
            //     />
            //     {/* <AsyncSelect
            //         cacheOptions
            //         loadOptions={this.loadOptions}
            //         defaultOptions
            //         onInputChange={this.handleInputChange}
            //     /> */}
            //     <SearchBar type="text" value={this.state.query} onChange={this.search} placeholder="Search the Blog" />
            //     <ResultList>
            //         {this.state.results.slice(0, 5).map(page => (
            //             <ListItem>
            //                 <Link to="/">{page.value}</Link>
            //                 {": " + page.categories.join(`,`)}
            //             </ListItem>
            //         ))}
            //     </ResultList>
            // </Wrapper>
        )
    }

    // handleChange = (query) => {
    //     console.log("query")
    //     // const inputValue = newValue.replace(/\W/g, '');
    //     this.setState({ query });
    //     this.search();
    //     // return inputValue;
    // }

    filterColors = () => {
        // console.log(this.state.results)
        const reMap = this.state.results.map(
            res => {
                // console.log(res)
                return{
                    value: res.id,
                    label: res.title
                }
            }
        )
        // console.log(reMap)
        return reMap;
      };

    loadOptions = (inputValue, callback) => {
        setTimeout(() => {
          callback(this.filterColors());
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
        console.log(query)
  
        // return({
        //     query,
        //     // Query the index with search string to get an [] of IDs
        //     results: this.index
        //         .search(query, { expand: true })
        //         .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        // })

        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index
                .search(query, { expand: true }) // Accept partial matches
                // Map over each ID and return the full document
                .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        })
        // console.log(this.state.results)
        // return{
        //     value: this.index.documentStore.getDoc(ref).title,
        //     label: this.index.documentStore.getDoc(ref).categories
        // } 
    }
}
