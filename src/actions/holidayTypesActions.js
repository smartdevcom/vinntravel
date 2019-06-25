import * as types from "./actionTypes";
import holidayApi from "../api/HolidayApi";


export function fetchHolidayTypesBegin() {
  return {type: types.FETCH_HOLIDAY_TYPES_BEGIN};
}

export function fetchHolidayTypesSuccess(items) {
  return {type: types.FETCH_HOLIDAY_TYPES_SUCCESS, holidayTypes:{items}};
}

export function fetchHolidayTypesFailure(error) {
  return {type: types.FETCH_HOLIDAY_TYPES_FAILURE, holidayTypes:{error}};
}

export function fetchHolidayTypes() {
  return function (dispatch) {
    dispatch(fetchHolidayTypesBegin());
    return holidayApi.getHolidayTypes().then(holidayTypes => {
      dispatch(fetchHolidayTypesSuccess(holidayTypes));
    }).catch(error => {
      dispatch(fetchHolidayTypesFailure(error));
    });
  };
}
