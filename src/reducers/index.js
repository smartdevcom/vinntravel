import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import hotelReducer from './hotelReducer';
import searchReducer from './searchReducer';
import featuredBrandsReducer from './featuredBrandsReducer';
import featuredCitiesReducer from './featuredCitiesReducer';
import holidayTypesReducer from './holidayTypesReducer';
import featuredHolidaysReducer from './featuredHolidaysReducer';
import holidaysReducer from './holidayReducer';
import mainSliderReducer from './mainSliderReducer';
import suggestionReducer from './destinationReducer';

export default history =>
	combineReducers({
		router: connectRouter(history),
		hotelReducer,
		searchReducer,
		featuredBrandsReducer,
		featuredCitiesReducer,
		holidayTypesReducer,
		featuredHolidaysReducer,
		holidaysReducer,
		mainSliderReducer,
		suggestionReducer
	});
