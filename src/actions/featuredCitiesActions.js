import * as types from './actionTypes';
import CityApi from '../api/CityApi';

export function fetchFeaturedCitiesBegin() {
  return {type: types.FETCH_FEATURED_CITIES_BEGIN};
}
export function fetchFeaturedCitiesSuccess(items) {
  return {type: types.FETCH_FEATURED_CITIES_SUCCESS, featuredCities:{items}};
}
export function fetchFeaturedCitiesFailure(error) {
  return {type: types.FETCH_FEATURED_CITIES_FAILURE, featuredCities:{error}};
}

export function fetchFeaturedCities() {
  return function (dispatch) {
    dispatch(fetchFeaturedCitiesBegin());
    return CityApi.getFeaturedCities().then(featuredCities => {
      dispatch(fetchFeaturedCitiesSuccess(featuredCities));
    }).catch(error => {
      dispatch(fetchFeaturedCitiesFailure(error));
    });
  };
}
