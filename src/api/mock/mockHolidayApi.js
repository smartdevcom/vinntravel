import delay from '../delay';
import initialState from "../../reducers/initialState";
import * as logger from '../../services/Logger';

const images = require.context('../assets/images', true);
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const holidayTypes = [
	{id: 1, imgSrc: images("./hotels/three_1.jpg"), name: "All Inclusive Holidays"},
	{id: 2, imgSrc: images("./hotels/three_2.jpg"), name: "Beach Holidays"},
	{id: 3, imgSrc: images("./hotels/three_3.jpg"), name: "City Breaks"},
	{id: 4, imgSrc: images("./hotels/three_4.jpg"), name: "Wedding Holidays"},
	{id: 5, imgSrc: images("./hotels/three_5.jpg"), name: "Safari &amp; Wildlife Holidays"},
	{id: 6, imgSrc: images("./hotels/three_6.jpg"), name: "Cruise Holidays"}
];

const featuredHolidays = [
	{
		id: 1,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 2,
		imgSrc: images("./not-found-logo.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 3,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 4,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 5,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 6,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 7,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 8,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 9,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 10,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 11,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	},
	{
		id: 12,
		imgSrc: images("./hotels/hotel_1.jpg"),
		name: "KALEICI HOTEL",
		location: "Antalya, Muratpaşa",
		priceFrom: 139.00,
		ratingPoint: 8.2,
		ratingCategory: "BEST",
		userCountRated: 1029
	}
];


class HolidayApi {
	static getHolidayTypes() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Object.assign([], holidayTypes));
			}, delay);
		});
	}

	static getFeaturedHolidays() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Object.assign([], featuredHolidays));
			}, delay);
		});
	}

	static searchHoliday(search) {
		if (search) {
			logger.info("search");
		}
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Object.assign([], featuredHolidays));
			}, delay);
		});
	}

	static submitSearch(search) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Object.assign({}, search));
			}, delay);
		});
	}

	static getSearch() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(initialState.search);
			}, delay);
		});
	}
}

export default HolidayApi;
