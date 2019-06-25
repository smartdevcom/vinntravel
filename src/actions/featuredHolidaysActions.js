import * as types from "./actionTypes";
import holidayApi from "../api/HolidayApi";


export function fetchFeaturedHolidaysBegin() {
  return {type: types.FETCH_FEATURED_HOLIDAYS_BEGIN};
}

export function fetchFeaturedHolidaysSuccess(items) {
  return {type: types.FETCH_FEATURED_HOLIDAYS_SUCCESS, featuredHolidays: {items}};
}

export function fetchFeaturedHolidaysFailure(error) {
  return {type: types.FETCH_FEATURED_HOLIDAYS_FAILURE, featuredHolidays: {error}};
}

export function fetchFeaturedHolidays() {
  return function (dispatch) {
    dispatch(fetchFeaturedHolidaysBegin());
    return holidayApi.getFeaturedHolidays().then(featuredHolidays => {
      dispatch(fetchFeaturedHolidaysSuccess(featuredHolidays));
    }).catch(error => {
      dispatch(fetchFeaturedHolidaysFailure(error));
    });
  };
}
