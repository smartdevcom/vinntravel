import React, {Component} from 'react';
const images = require.context('../../assets/images', true);
class BrandsPage extends Component {
  constructor(props,context){
    super(props,context);
  }
  render() {
    return (
      <div className="wrapper" id="wrapper">

        <div className="title ">
          <h1>Brands</h1>
        </div>

        <div className="brands-page-container">
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_1.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_2.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_2.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_2.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_2.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_2.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_5.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_3.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>
          <div className="brand-img">
            <a href="#"><img src={images("./Brands/hotel_4.jpg")} alt="" /></a>
          </div>

        </div>
      </div>

    );
  }
}

export default BrandsPage;
