import React, {Component} from 'react';
import * as logger from '../../services/Logger';
import Client from "../../services/Client";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cities: Client.getFeaturedCities()
    };
  }

  closeNav() {
  }

  goBack(number) {
    logger.info(number);
  }

  openinside(number) {
    return number;
  }

  render() {
    return (
      <div>

        <div className="search-filter-area">

          <span className="filter-open" onClick="openNav()"> Filter <i className="fa fa-filter"/></span>

          <div id="myNav" className="overlay">
            <div className="overlay-content">
              <div className="go-back-area" id="go-back-1">
                <a href="javascript:void(0)" className="closebtn close1" onClick={this.closeNav}>Go Back </a>
              </div>

              <span className="divider"/>

              <button className="clear-all">Clear</button>
              <div className="filter-box-container">
                <a href="javascript:void(0)" onClick="openinside(0)"><h3>Search<span>Search content here.</span></h3>
                </a>
                <div id="inside-div-0" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(0)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <input type="text" placeholder="Search content here"
                             className="filter-search-input-text ico-marker"/>
                    </div>
                    <div className="filter-box">
                      <h4>Check In</h4><input type="text" placeholder="Search content here"
                                              className="filter-search-input-text ico-date"/>
                    </div>
                    <div className="filter-box">
                      <h4>Check Out</h4><input type="text" placeholder="Search content here"
                                               className="filter-search-input-text ico-date"/>
                    </div>
                    <div className="filter-box">
                      <h4>Kids</h4> <input type="text" placeholder="1" className="filter-search-input-text"/>
                    </div>
                    <div className="filter-box">
                      <h4>Adults</h4> <input type="text" placeholder="1" className="filter-search-input-text"/>
                    </div>
                    <div className="filter-box">
                      <h4>Room</h4> <input type="text" placeholder="1" className="filter-search-input-text"/>
                    </div>
                    <button className="clear-all">Apply</button>

                  </div>


                </div>


              </div>
              <div className="filter-box-container">
                <a href="javascript:void(0)" onClick="openinside(1)"><h3><span>All Types</span>Type</h3></a>
                <div id="inside-div-1" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(1)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">All Types</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>

                    <button className="clear-all">Apply</button>

                  </div>


                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF titleB" href="javascript:void(0)" onClick={this.openinside(2)}><h3>Sort
                  By<span>Price</span></h3></a>
                <div id="inside-div-2" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(2)}>Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">Price</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>

                    <button className="clear-all">Apply</button>

                  </div>


                </div>


              </div>
              <div className="divider"/>
              <h3>Filters</h3>
              <div className="filter-box-container">
                <a className="titleF " href="javascript:void(0)" onClick={this.openinside(3)}><h3>Type</h3></a>
                <div id="inside-div-3" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(3)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">Hotel</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Hostel</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Apart Hotel</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Guest Hotel</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Apartment</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Residance</a>
                    </div>
                    <button className="clear-all">Apply</button>

                  </div>


                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(4)}><h3>Star</h3></a>
                <div id="inside-div-4" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(4)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">1 Star</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">2 Stars</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">3 Stars</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">4 Stars</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">5 Stars</a>
                    </div>
                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(5)}><h3>Meal Types</h3></a>
                <div id="inside-div-5" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(5)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">BB</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">HB</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">HB+</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">FB</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">FB +</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">AI</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">UAI</a>
                    </div>
                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(6)}><h3>Price</h3></a>
                <div id="inside-div-6" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(6)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <h4>From $</h4> <input type="text" className="filter-search-input-text"/>
                    </div>
                    <div className="filter-box">
                      <h4>To $</h4> <input type="text" className="filter-search-input-text"/>
                    </div>


                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(4)}><h3>Filter Type 7</h3></a>
                <div id="inside-div-7" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(7)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">Filter Type 7</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>

                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(8)}><h3>Filter Type 8</h3></a>
                <div id="inside-div-8" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(8)}>Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">Filter Type 8</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>

                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(8)}><h3>Filter Type 9</h3></a>
                <div id="inside-div-9" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(9)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">Filter Type 8</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>

                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
              <div className="filter-box-container">
                <a className="titleF" href="javascript:void(0)" onClick={this.openinside(8)}><h3>Filter Type 10</h3></a>
                <div id="inside-div-10" className="inside-div">
                  <div className="inside-container">
                    <div className="go-back-area">
                      <a href="javascript:void(0)" className="closebtn" onClick={this.goBack(10)}> Go Back </a>
                    </div>

                    <span className="divider"/>

                    <div className="filter-box">
                      <a className="active" href="#">Filter Type 8</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>
                    <div className="filter-box">
                      <a href="#">Random</a>
                    </div>

                    <button className="clear-all">Apply</button>

                  </div>

                </div>


              </div>
            </div>
          </div>


          <div className="search-filter">
            <div id="filter-button" className="filter-button-c">
              <a href="#" className="button margin-top">FILTER </a>
              <a href="#" className="button-red">CLEAR </a>
            </div>

            <div className="filter-menu" id="filter-menu">

              <h4>Filter Results</h4>

              <ul>
                <li>
                  <h3><i className="fa fa-usd"/>Price</h3>
                  <ul>
                    <li>
                      <span className="price-span">$</span> <input type="text" className="filter-price"/>
                      <span className="price-span"> to $</span> <input type="text" className="filter-price"/>
                    </li>

                  </ul>
                </li>
                <li>
                  <h3><i className="fa fa-filter"/> Search</h3>
                  <ul>
                    <li>
                      <span className="search-span">Search &nbsp;</span><input type="text"
                                                                               className="filter-search-text ico-marker"/>
                    </li>
                    <li>
                      <span className="search-span">Check In &nbsp;</span><input type="text"
                                                                                 className="filter-check-in-out ico-date flatpickr"/>
                    </li>
                    <li>
                      <span className="search-span">Check Out &nbsp;</span><input type="text"
                                                                                  className="filter-check-in-out ico-date flatpickr"/>
                    </li>
                    <li>
                      <div className="text-select-div-filter">
                        <span className="search-span">Room &nbsp;</span><select
                        className="filter-adult-kids-room text-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      </div>
                    </li>
                    <li>
                      <div className="text-select-div-filter">
                        <span className="search-span">Adults &nbsp;</span><select
                        className="filter-adult-kids-room text-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      </div>
                    </li>
                    <li>
                      <div className="text-select-div-filter">
                        <span className="search-span">Kids &nbsp;</span><select
                        className="filter-adult-kids-room text-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3><i className="fa fa-hotel"/> Type</h3>
                  <ul>
                    <li>
                      <input id="box-type-1" type="checkbox"/>
                      <label htmlFor="box-type-1">Hotel(5)</label>
                    </li>
                    <li>
                      <input id="box-type-2" type="checkbox"/>
                      <label htmlFor="box-type-2">Hostel(2)</label>
                    </li>
                    <li>
                      <input id="box-type-3" type="checkbox"/>
                      <label htmlFor="box-type-3">Apart Hotel(3)</label>
                    </li>
                    <li>
                      <input id="box-type-4" type="checkbox"/>
                      <label htmlFor="box-type-4">Guest Hotel</label>
                    </li>
                    <li>
                      <input id="box-type-5" type="checkbox"/>
                      <label htmlFor="box-type-5">Apartment</label>
                    </li>
                    <li>
                      <input id="box-type-6" type="checkbox"/>
                      <label htmlFor="box-type-6">Residance</label>
                    </li>


                  </ul>
                </li>

                <li>
                  <h3><i className="fa fa-star"/>Star</h3>
                  <ul>
                    <li>
                      <input id="box-star-1" type="checkbox"/>
                      <label htmlFor="box-star-1"><i className="fa fa-star"/><i className="fa fa-star-o"/><i
                        className="fa fa-star-o"/><i className="fa fa-star-o"/><i
                        className="fa fa-star-o"/></label>
                    </li>
                    <li>
                      <input id="box-star-2" type="checkbox"/>
                      <label htmlFor="box-star-2"><i className="fa fa-star"/><i className="fa fa-star"/><i
                        className="fa fa-star-o"/><i className="fa fa-star-o"/><i
                        className="fa fa-star-o"/></label>
                    </li>
                    <li>
                      <input id="box-star-3" type="checkbox"/>
                      <label htmlFor="box-star-3"><i className="fa fa-star"/><i className="fa fa-star"/><i
                        className="fa fa-star"/><i className="fa fa-star-o"/><i
                        className="fa fa-star-o"/></label>
                    </li>
                    <li>
                      <input id="box-star-4" type="checkbox"/>
                      <label htmlFor="box-star-4"><i className="fa fa-star"/><i className="fa fa-star"/><i
                        className="fa fa-star"/><i className="fa fa-star"/><i
                        className="fa fa-star-o"/></label>
                    </li>
                    <li>
                      <input id="box-star-5" type="checkbox"/>
                      <label htmlFor="box-star-5"><i className="fa fa-star"/><i className="fa fa-star"/><i
                        className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></label>
                    </li>
                  </ul>
                </li>
                <li>
                  <h3><i className="fa fa-suitcase"/>Meal Types</h3>
                  <ul>
                    <li>
                      <input id="box-meal-1" type="checkbox"/>
                      <label htmlFor="box-meal-1">BB</label>
                    </li>
                    <li>
                      <input id="box-meal-2" type="checkbox"/>
                      <label htmlFor="box-meal-2">HB</label>
                    </li>
                    <li>
                      <input id="box-meal-3" type="checkbox"/>
                      <label htmlFor="box-meal-3">HB+</label>
                    </li>
                    <li>
                      <input id="box-meal-4" type="checkbox"/>
                      <label htmlFor="box-meal-4">FB</label>
                    </li>
                    <li>
                      <input id="box-meal-5" type="checkbox"/>
                      <label htmlFor="box-meal-5">FB+</label>
                    </li>
                    <li>
                      <input id="box-meal-6" type="checkbox"/>
                      <label htmlFor="box-meal-6">AI</label>
                    </li>
                    <li>
                      <input id="box-meal-7" type="checkbox"/>
                      <label htmlFor="box-meal-7">UAI</label>
                    </li>

                  </ul>
                </li>

              </ul>


            </div>
          </div>


          <div className="campaing-box">
            <div className="image">
              <img src="assets/images/europe_tours_1.jpg"/>
              <div className="text">
                <h3>15% Discount On Europe!</h3>
              </div>

            </div>
          </div>
          <div className="campaing-box">
            <div className="image">
              <img src="assets/images/europe_tours_2.jpg"/>
              <div className="text">
                <h3>Explore The World</h3>
              </div>

            </div>
          </div>
        </div>


        <div className="search-result-area">


          <div className="search-result-wide">
            <div className="image">
              <div className="ribbon-red"><span>TOP RATED</span></div>
              <img src="assets/images/hotels/hotel_1.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Very Best</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-life-bouy fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-tree fa-stack-1x fa-inverse"/>
                            </span>
                </a>
              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>99</h3>

              <a href="#" className="button">DETAILS</a>
            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <img src="assets/images/hotels/hotel_2.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Last Test</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>

                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>

                </a>
              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>399</h3><a href="#" className="button">DETAILS</a>

            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <div className="ribbon-blue"><span>LAST 5</span></div>

              <img src="assets/images/hotels/hotel_3.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Very Best</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-tree fa-stack-1x fa-inverse"/>
                            </span>
                </a>
              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>1299</h3><a href="#" className="button">DETAILS</a>

            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <img src="assets/images/hotels/hotel_1.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Very Best</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-life-bouy fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-tree fa-stack-1x fa-inverse"/>
                            </span>
                </a>
              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>99</h3>

              <a href="#" className="button">DETAILS</a>
            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <div className="ribbon-orange"><span>BEST</span></div>
              <img src="assets/images/hotels/hotel_2.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Last Test</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>

                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>

              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>399</h3><a href="#" className="button">DETAILS</a>

            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <div className="ribbon-red"><span>TOP RATED</span></div>
              <img src="assets/images/hotels/hotel_1.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Very Best</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-life-bouy fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-tree fa-stack-1x fa-inverse"/>
                            </span>
                </a>
              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>99</h3>

              <a href="#" className="button">DETAILS</a>
            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <img src="assets/images/hotels/hotel_2.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Last Test</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>

              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>399</h3><a href="#" className="button">DETAILS</a>

            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <div className="ribbon-red"><span>TOP RATED</span></div>
              <img src="assets/images/hotels/hotel_1.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Very Best</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-life-bouy fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-tree fa-stack-1x fa-inverse"/>
                            </span>
                </a>
              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>99</h3>

              <a href="#" className="button">DETAILS</a>
            </div>
          </div>

          <div className="search-result-wide">
            <div className="image">
              <img src="assets/images/hotels/hotel_2.jpg"/>
            </div>
            <div className="text">
              <h3><b>The Last Test</b> Hotel <span><i className="fa fa-star"/><i className="fa fa-star"/><i
                className="fa fa-star"/><i className="fa fa-star"/><i className="fa fa-star"/></span></h3>
              <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini.</p>
              <div className="result-icons">
                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-hotel fa-stack-1x fa-inverse"/>
                            </span>
                </a>

                <a href="#">
                            <span className="fa-stack">
                                <i className="fa fa-circle fa-stack-2x top-back-circle-face"/>
                                <i className="fa fa-map-marker fa-stack-1x fa-inverse"/>
                            </span>
                </a>

              </div>
            </div>
            <div className="price">
              <h4>starts from</h4>
              <h3><span>$</span>399</h3><a href="#" className="button">DETAILS</a>

            </div>
          </div>

          <div className="pagination">
            <ul className="pagination">
              <li><a href="#">«</a></li>
              <li><a href="#">PREV</a></li>
              <li><a href="#" className="active"> 1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">NEXT</a></li>
              <li><a href="#">»</a></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Search;
