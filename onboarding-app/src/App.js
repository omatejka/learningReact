import React, { Component } from "react";
import Button from "./components/button";
import FilterBar from "./components/filterResultsBar";
import FilteredResults from "./components/filteredList";
import SearchBar from "./components/searchBar";
import { connect } from "react-redux";
import * as actions from './actions/actions';
import "./styles/style.css";

class App extends Component {
  componentDidMount () {
    const { searchResults } = this.props
    searchResults('ondrej');
  }

  render() {
    console.log(this.props.filterResults);
    const { filterResults, filterTerm, searchTerm } = this.props;

    return (
      <div>
        <SearchBar value={searchTerm} onChange={searchTerm} />
        <FilterBar value={filterTerm} onChange={filterTerm} />
        <Button />

        {
          (filterResults.length === 0 ? (
            `No results found for: '${filterTerm}'`
          ) : (
              <FilteredResults filteredResults={filterResults} />
          ))
          }
      </div>
    );
  }
}
//
const mapStateToProps = state => ({
  filterResults: state.githubUsers.filterResults,
  searchResults: state.githubUsers.searchResults,
});

const mapDispatchToProps = dispatch => ({
  searchResults: (term) => actions.setSearchResults(dispatch, term)
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
