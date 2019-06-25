import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function mainSliderReducer(state = initialState.mainSliderData, action) {
	switch (action.type) {
		case types.FETCH_MAIN_SLIDER_DATA_BEGIN:
			return {
				items: [],
				loading: true,
				error: null
			};
		case types.FETCH_MAIN_SLIDER_DATA_SUCCESS:
			return Object.assign({}, state, {
				loading: false,
				items: action.mainSliderData.items,
				error: null
			});
		case types.FETCH_MAIN_SLIDER_DATA_FAILURE:
			return Object.assign({}, state, {
				loading: false,
				items: [],
				error: action.mainSliderData.error
			});
		default:
			return state;
	}
}
