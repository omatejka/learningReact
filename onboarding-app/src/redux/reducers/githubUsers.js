import { SET_FILTER_USER_RESULTS, SET_SEARCH_RESULTS } from '../../actions/actions';

const initialState = {
    searchResults: [],
    searchTerm: "",
    filterTerm: "",
    filterResults: [],
  };

export default function filter (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    // case SET_FILTER_USER_RESULTS:
    //   return {
    //     ...state,
    //     ...action.payload
    //   };

    case SET_SEARCH_RESULTS:
      return {
        ...state,
        filterResults: action.payload
      }

    default:
      return state;
  }
}
