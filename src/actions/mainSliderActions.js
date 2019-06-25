import * as types from './actionTypes';
import commonApi from '../api/mockCommonApi';

export function fetchMainSliderDataBegin() {
	return { type: types.FETCH_MAIN_SLIDER_DATA_BEGIN };
}

export function fetchMainSliderDataSuccess(items) {
	return { type: types.FETCH_MAIN_SLIDER_DATA_SUCCESS, mainSliderData: { items } };
}

export function fetchMainSliderDataFailure(error) {
	return { type: types.FETCH_MAIN_SLIDER_DATA_FAILURE, mainSliderData: { error } };
}

export function fetchMainSliderData() {
	return function(dispatch) {
		dispatch(fetchMainSliderDataBegin());
		return commonApi
			.getMainSliderData()
			.then(items => {
				dispatch(fetchMainSliderDataSuccess(items));
			})
			.catch(error => {
				dispatch(fetchMainSliderDataFailure(error));
			});
	};
}
