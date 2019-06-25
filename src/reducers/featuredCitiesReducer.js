import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function featuredCitiesReducer(state = initialState.featuredCities, action) {
  switch (action.type) {
    case types.FETCH_FEATURED_CITIES_BEGIN:
      return {
        items: [],
        loading: true,
        error: null
      };
    case types.FETCH_FEATURED_CITIES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.featuredCities.items,
        error: null
      });
    case types.FETCH_FEATURED_CITIES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        items: [],
        error: action.featuredCities.error
      });
    default:
      return state;
  }
}
