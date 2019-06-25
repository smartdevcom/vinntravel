import delay from './delay';

const images = require.context('../assets/images', true);
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const featuredBrands = [
  {id: 1, imgSrc:  images("./Brands/hotel_1.jpg")},
  {id: 2, imgSrc:  images("./Brands/hotel_2.jpg")},
  {id: 3, imgSrc:  images("./Brands/hotel_3.jpg")},
  {id: 4, imgSrc:  images("./Brands/hotel_4.jpg")},
  {id: 5, imgSrc:  images("./Brands/hotel_5.jpg")},
  {id: 6, imgSrc:  images("./Brands/hotel_6.jpg")},
  {id: 7, imgSrc:  images("./Brands/hotel_1.jpg")},
  {id: 8, imgSrc:  images("./Brands/hotel_2.jpg")},
  {id: 9, imgSrc:  images("./Brands/hotel_3.jpg")},
  {id: 10, imgSrc: images("./Brands/hotel_4.jpg")},
  {id: 11, imgSrc: images("./Brands/hotel_5.jpg")},
  {id: 12, imgSrc: images("./Brands/hotel_6.jpg")}
  ];

class BrandApi {
  static getFeaturedBrands() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], featuredBrands));
      }, delay);
    });
  }
}

export default BrandApi;
