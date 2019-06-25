import delay from '../delay';
import Client from '../../services/Client';
import * as stringUtils from "../../utils/stringUtils";
const images = require.context('../../assets/images', true);
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const featuredCities = [
  {
    id: 1,
    imgSrc: images("./hotels/wide_1.jpg"),
    text: "Antalya",
    count: 1243,
    flagSrc: images("./Flags/Turkey.png")
  },
  {
    id: 2,
    imgSrc: images("./hotels/wide_2.jpg"),
    text: "MOSCOW",
    count: 689,
    flagSrc: images("./Flags/Russia.png")
  },
  {
    id: 3,
    imgSrc: images("./hotels/wide_3.jpg"),
    text: "London",
    count: 395,
    flagSrc: images("./Flags/United-kingdom.png")
  },
  {
    id: 4,
    imgSrc: images("./hotels/wide_4.jpg"),
    text: "Berlin",
    count: 284,
    flagSrc: images("./Flags/Germany.png")
  }];

class CityApi {
  static getFeaturedCities() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], featuredCities));
      }, delay);
    });
  }

  static getMatchingCities(value) {
    const escapedValue = stringUtils.escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }
    let url = '/api/facilities/suggest/location?text=' + value;
    return Client.fetchJson(url);

  }

}

export default CityApi;
