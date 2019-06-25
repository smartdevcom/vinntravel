import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function searchReducer(state =initialState.search, action) {
  switch (action.type) {
    case types.LOAD_SEARCH_SUCCESS:
      return action.search;
    case types.SUBMIT_SEARCH_SUCCESS:
      return Object.assign({},action.search);
    case types.UPDATE_SEARCH:
      return Object.assign({},action.search);
    default:
      return state;
  }
}
