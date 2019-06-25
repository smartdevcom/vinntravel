import * as types from './actionTypes';
import holidayApi from '../api/HolidayApi';
import * as _ from 'lodash';

export function submitSearchSuccess(search) {
  return {type: types.SUBMIT_SEARCH_SUCCESS, search};
}

export function updateSearch(search) {
  return {type: types.UPDATE_SEARCH, search};
}

export function submitSearch(search) {
  return function (dispatch) {
    return holidayApi.submitSearch(search).then(search => {
      dispatch(submitSearchSuccess(search));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSearchSuccess(search) {
  return {type: types.LOAD_SEARCH_SUCCESS, search};
}

export function loadSearch() {
  return function (dispatch) {
    return holidayApi.getSearch().then(search => {
      dispatch(loadSearchSuccess(search));
    }).catch(error => {
      throw(error);
    });
  };
}

export function searchHolidayBegin(search) {
  return {type: types.SEARCH_HOLIDAY_BEGIN, holidays: {search}};
}

export function searchHolidaySuccess(search, items,facets,pagination) {
  return {type: types.SEARCH_HOLIDAY_SUCCESS, holidays: {search, items,facets,pagination}};
}

export function searchHolidayFailure(search, error) {
  return {type: types.SEARCH_HOLIDAY_FAILURE, holidays: {search, error}};
}

export function searchHoliday(search) {
  return function (dispatch) {
    dispatch(searchHolidayBegin(search));
    return holidayApi.searchHoliday(search).then((json) => {
      let holidays = _.map(json.items, function (h) {
        return Object.assign({}, h, {
          id: h.id,
          priceFrom: h.oda.oda_fiyati,
          imgSrc: h.medya.path,
          name: h.tesis.adi,
          description: h.tesis.aciklama,
          ratingPoint: h.tesis.yildiz,
          userCountRated: h.tesis.yildiz
        });
      });
      let facets=json.facets;
      let pagination= json.pagination;
      dispatch(searchHolidaySuccess(search, holidays,facets,pagination));
    }).catch(error => {
      dispatch(searchHolidayFailure(search, error));
    });
  };
}
