import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function holidayReducer(state = initialState.holidays, action) {
  switch (action.type) {
    case types.SEARCH_HOLIDAY_BEGIN:
      return {
        search: action.holidays.search,
        items: state.items,
        facets: state.facets,
        pagination: state.pagination,
        loading: true,
        error: null
      };
    case types.SEARCH_HOLIDAY_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        search: action.holidays.search,
        items: action.holidays.items,
        facets: action.holidays.facets,
        pagination: action.holidays.pagination,
        error: null
      });
    case types.SEARCH_HOLIDAY_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        search: action.holidays.search,
        items: state.items,
        facets: state.facets,
        pagination: state.pagination,
        error: action.holidays.error
      });
    default:
      return state;
  }
}
