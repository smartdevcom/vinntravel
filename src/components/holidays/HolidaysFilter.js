import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as logger from '../../services/Logger';
import * as searchHelper from '../../services/SearchHelper';
import DestinationAutoSuggest from "../home/DestinationAutoSuggest";
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import StarRatingComponent from 'react-star-rating-component';
import HolidaysFilterBlock from "./HolidaysFilterBlock";


const images = require.context('../../assets/images', true);

class HolidaysFilter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: props.search,
      filter: props.filter
    };

    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleAdultChange = this.handleAdultChange.bind(this);
    this.handleKidChange = this.handleKidChange.bind(this);
    this.onSearchBoxFormSubmit = this.onSearchBoxFormSubmit.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleDestinationValueChange = this.handleDestinationValueChange.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.goBack = this.goBack.bind(this);
    this.openinside = this.openinside.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  onFilter(newValue) {
    const search = Object.assign({}, this.props.search, newValue);
    this.props.onFilter(search);
  }

  handleFilter(newValue) {
    this.onFilter(newValue);
  }

  handleRoomChange(event) {
    const selectedRoom = searchHelper.getSelectOptionByIndex(event.target);
    const search = Object.assign({}, this.props.search);
    search.selectedRoom = selectedRoom;
    this.setState({search});
  }

  handleAdultChange(event) {
    const selectedAdult = searchHelper.getSelectOptionByIndex(event.target);
    const search = Object.assign({}, this.props.search);
    search.selectedAdult = selectedAdult;
    this.setState({search});
  }

  handleKidChange(event) {
    const selectedKid = searchHelper.getSelectOptionByIndex(event.target);
    const search = Object.assign({}, this.props.search);
    search.selectedKid = selectedKid;
    this.setState({search});
  }

  onSearchBoxFormSubmit(event) {
    event.preventDefault();
    const search = Object.assign({}, this.props.search);
    this.onFilter(search);
  }


  onDatesChange({startDate, endDate}) {
    const search = Object.assign({}, this.props.search);
    search.startDate = startDate;
    search.endDate = endDate;
    this.setState({search});
  }

  onFocusChange(focusedInput) {
    const search = Object.assign({}, this.props.search);
    search.focusedInput = focusedInput;
    this.setState({search});
  }

  handleDestinationValueChange(destination) {
    const search = Object.assign({}, this.props.search);
    search.destination = destination;
    this.setState({search});
  }

  onStarClick(nextValue) {
    const filter = Object.assign({}, this.props.filter);
    filter.selectedStar = nextValue;
    this.setState({filter});
  }

  goBack(num) {
    logger.info(num);
  }

  openinside(num) {
    logger.info(num);
  }

  render() {
    return (
      <div className="search-filter-area">

        <div className="search-filter">
          <div id="filter-button" className="filter-button-c">
            <a href="#" className="button margin-top" onClick={this.onSearchBoxFormSubmit}>FILTER </a>
            <a href="#" className="button-red">CLEAR </a>
          </div>

          <div className="filter-menu" id="filter-menu">

            <h4>Filter Results</h4>

            <ul>
              <li>
                <div className="filter-box">
                  <DestinationAutoSuggest onChange={this.handleDestinationValueChange}/>
                </div>
              </li>
              <li>
                <div className="search-inner-half-width">
                  <DateRangePicker
                    startDate={this.props.search.startDate} // momentPropTypes.momentObj or null,
                    startDateId="datePickerCheckIn" // PropTypes.string.isRequired,
                    endDate={this.props.search.endDate} // momentPropTypes.momentObj or null,
                    endDateId="datePickerCheckOut" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    displayFormat="DD-MM-YYYY"
                  />
                </div>
              </li>
              <li>
                <div className="filter-box">
                  <h4>Room</h4>
                  <select name="search-box-rooms" className="search-bar-option"
                          defaultValue={searchHelper.getSelectOptionValue(this.props.search.selectedRoom, 1)}
                          onChange={this.handleRoomChange}>
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
                <div className="filter-box">
                  <h4>Adults</h4>
                  <select name="search-box-adults" className="search-bar-option"
                          defaultValue={searchHelper.getSelectOptionValue(this.props.search.selectedAdult, 1)}
                          onChange={this.handleAdultChange}>
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
                <div className="filter-box">
                  <h4>Kids</h4>
                  <select name="search-box-kids" className="search-bar-option"
                          defaultValue={searchHelper.getSelectOptionValue(this.props.search.selectedKid, 0)}
                          onChange={this.handleKidChange}>
                    <option value="0">0</option>
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
                <h3><i className="fa fa-usd"/>Price</h3>
                <ul>
                  <li>
                    <span className="price-span">$</span> <input type="text" className="filter-price"/>
                    <span className="price-span"> to $</span> <input type="text" className="filter-price"/>
                  </li>

                </ul>
              </li>
              <li>
                <h3><i className="fa fa-star"/>Star</h3>
                <StarRatingComponent
                  name="star"
                  starCount={5}
                  value={this.state.search.yildiz}
                  onStarClick={this.onStarClick}
                />
              </li>
              <HolidaysFilterBlock termBucket={this.state.filter.turu} onFilter={this.handleFilter}/>
              <HolidaysFilterBlock termBucket={this.state.filter.sinifi} onFilter={this.handleFilter}/>
              <HolidaysFilterBlock termBucket={this.state.filter.connected} onFilter={this.handleFilter}/>
              <HolidaysFilterBlock termBucket={this.state.filter.sanal} onFilter={this.handleFilter}/>
              <HolidaysFilterBlock termBucket={this.state.filter.tanitim} onFilter={this.handleFilter}/>
            </ul>


          </div>
        </div>


        <div className="campaing-box">
          <div className="image">
            <img src={images("./europe_tours_1.jpg")} alt=""/>
            <div className="text">
              <h3>15% Discount On Europe!</h3>
            </div>

          </div>
        </div>
        <div className="campaing-box">
          <div className="image">
            <img src={images("./europe_tours_2.jpg")} alt=""/>
            <div className="text">
              <h3>Explore The World</h3>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

HolidaysFilter.propTypes = {
  search: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired,
  onFilter: PropTypes.func.isRequired
};

export default HolidaysFilter;
