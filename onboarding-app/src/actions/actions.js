import { checkStatus, filter } from '../libs/helpers';
export const SET_FILTER_USER_RESULTS = 'SET_FILTER_USER_RESULTS';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const setSearchResults = (dispatch, term) => {
  console.log(  term)
  fetch(`https://api.github.com/search/users?q=${term}`)
    .then(checkStatus)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: data.items
      })
  });
}

export const setFilterResults = (filterValue, searchResults) => {
  return dispatch => ({
    type: SET_FILTER_USER_RESULTS,
    payload: filterData(filterValue, searchResults)
  })
}


const filterData = (filterValue, searchResults) => {
  return filter(filterValue, searchResults)
};
