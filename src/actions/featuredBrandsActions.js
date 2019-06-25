import * as types from './actionTypes';
import brandApi from '../api/mockBrandApi';

export function fetchFeaturedBrandsBegin() {
  return {type: types.FETCH_FEATURED_BRANDS_BEGIN};
}

export function fetchFeaturedBrandsSuccess(items) {
  return {type: types.FETCH_FEATURED_BRANDS_SUCCESS, featuredBrands: {items: items}};
}

export function fetchFeaturedBrandsFailure(error) {
  return {type: types.FETCH_FEATURED_BRANDS_FAILURE, featuredBrands: {error}};
}

export function fetchFeaturedBrands() {
  return function (dispatch) {
    dispatch(fetchFeaturedBrandsBegin());
    return brandApi.getFeaturedBrands().then(featuredBrands => {
      dispatch(fetchFeaturedBrandsSuccess(featuredBrands));
    }).catch(error => {
      dispatch(fetchFeaturedBrandsFailure(error));
    });
  };
}
