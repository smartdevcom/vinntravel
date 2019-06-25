import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function holidayTypesReducer(state = initialState.holidayTypes, action) {
  switch (action.type) {
    case types.FETCH_HOLIDAY_TYPES_BEGIN:
      return {
        items: [],
        loading: true,
        error: null
      };
    case types.FETCH_HOLIDAY_TYPES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.holidayTypes.items,
        error: null
      });
    case types.FETCH_HOLIDAY_TYPES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        items: [],
        error: action.holidayTypes.error
      });
    default:
      return state;
  }
}
