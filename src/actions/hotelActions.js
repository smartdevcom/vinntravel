import * as types from './actionTypes';

export function createHotel(hotel) {
    return { type: types.CREATE_HOTEL, hotel };
}

export function searchHoliday(search) {
  return { type: types.SEARCH_HOLIDAY_SUCCESS, search };
}
