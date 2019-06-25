import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function featuredHolidaysReducer(state = initialState.featuredHolidays, action) {
  switch (action.type) {
    case types.FETCH_FEATURED_HOLIDAYS_BEGIN:
      return {
        items: [],
        loading: true,
        error: null
      };
    case types.FETCH_FEATURED_HOLIDAYS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.featuredHolidays.items,
        error: null
      });
    case types.FETCH_FEATURED_HOLIDAYS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        items: [],
        error: action.featuredHolidays.error
      });
    default:
      return state;
  }
}
