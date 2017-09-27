import React, { Component } from "react";
import Button from "./components/button";
import FilterBar from "./components/filterResultsBar";
import FilteredResults from "./components/filteredList";
import { checkStatus,filter } from "./libs/helpers";
import SearchBar from "./components/searchBar";
import "./styles/style.css";

class App extends Component {
  state = {
    results: {},
    searchTerm: "",
    filterResultTerm: "",
    filteredResults: [],
    error: null
  };

  searchTerm = e => {
    this.setState({ searchTerm: e.target.value });
  };

  myFetch = term => {
    fetch(`https://api.github.com/search/users?q=${term}`)
      .then(checkStatus)
      .then(res =>
        res.json().catch(e => {
          this.setState({ error: e.message });
        })
      )
      .then(data => {
        this.setState({
          results: data.items,
          filteredResults: data.items
        });
      })
      .catch(e => {
        this.setState({ error: e.message });
      });
  };

  componentDidMount() {
    this.myFetch("ondrej");
  }

  wikiSearch = () => {
    this.myFetch(this.state.searchTerm);
  };

  filterResultTerm = e => {
    this.setState({
      filterResultTerm: e.target.value,
      filteredResults: filter(e.target.value, this.state.results)
    });
  };

  render() {
    const { error, filteredResults, filterResultTerm, searchTerm } = this.state;

    return (
      <div>
        <SearchBar value={searchTerm} onChange={this.searchTerm} />
        <FilterBar value={filterResultTerm} onChange={this.filterResultTerm} />
        <Button search={this.wikiSearch} />
        {error && <div>{error}</div>}
        {!error &&
          (filteredResults.length === 0 ? (
            `No results found for: '${filterResultTerm}'`
          ) : (
            <FilteredResults filteredResults={filteredResults} />
          ))}
      </div>
    );
  }
}

export default App;
