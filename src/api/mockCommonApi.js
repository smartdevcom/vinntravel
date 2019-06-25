import delay from './delay';

const images = require.context('../assets/images', true);
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const mainSliderData=[
  {id: 1, imgSrc: images("./Slider/slide_1.jpg")},
  {id: 2, imgSrc: images("./Slider/slide_2.jpg")},
  {id: 3, imgSrc: images("./Slider/slide_3.jpg")}
];

class CommonApi {
  static getMainSliderData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], mainSliderData));
      }, delay);
    });
  }
}

export default CommonApi;
