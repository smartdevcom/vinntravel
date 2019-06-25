import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function featuredBrandsReducer(state = initialState.featuredBrands, action) {
  switch (action.type) {
    case types.FETCH_FEATURED_BRANDS_BEGIN:
      return {
        items: [],
        loading: true,
        error: null
      };
    case types.FETCH_FEATURED_BRANDS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.featuredBrands.items,
        error: null
      });
    case types.FETCH_FEATURED_BRANDS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        items: [],
        error: action.featuredBrands.error
      });
    default:
      return state;
  }
}
