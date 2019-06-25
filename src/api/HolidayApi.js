import delay from './delay';
import initialState from "../reducers/initialState";
import Client from '../services/Client';

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
    let url = '/api/facilities/search';
    let data = {
      location: search.destination,
      start: search.startDate.format('YYYY-MM-DD'),
      end: search.endDate.format('YYYY-MM-DD'),
      room: (search.selectedRoom) ? search.selectedRoom.value : null,
      adults: (search.selectedAdult) ? search.selectedAdult.value : null,
      kids: (search.selectedKid) ? search.selectedKid.value : null,
      min: (search.min) ? search.min : "0",
      max: (search.max) ? search.max : "2147483647",
      connected: (search.connected) ? search.connected : null,
      sanal: (search.sanal) ? search.sanal : null,
      tanitim: (search.tanitim) ? search.tanitim : null,
      yildiz: (search.yildiz) ? search.yildiz : null,
      sinifi: (search.sinifi) ? search.sinifi : [],
      turu: (search.turu) ? search.turu : [],
      aktif: (search.aktif) ? search.aktif : null,
      q: (search.q) ? search.q : null,
      page: (search.page && search.page>0) ? search.page : 1,
      rows: (search.rows && search.rows>0) ? search.rows : 10
    };
    let fetchResult = Client.postData(url, data);
    return fetchResult;
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
