import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BrandsCarousel from './BrandsCarousel';
import HolidayTypeList from './HolidayTypeList';
import FeaturedHolidays from './FeaturedHolidays';
import FeaturedCities from './FeaturedCities';
import MainSlider from './MainSlider';

// import SearchBar from "./SearchBar";

class HomePage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<MainSlider title='slider' />
				{/*<SearchBar title="Search"/>*/}
				<div className='wrapper' id='wrapper'>
					<FeaturedCities title='Cities' />
					<HolidayTypeList title='Holiday Types' />
					<BrandsCarousel title='Brands' />
					<FeaturedHolidays title='Featured Holidays' />
					<a href='#' className='scrollToTop' />
				</div>
			</div>
		);
	}
}

export default withRouter(connect()(HomePage));
