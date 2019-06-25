/* eslint-disable import/no-named-as-default */

import NotFoundPage from './common/NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './common/Header';
import Footer from './common/Footer';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import SearchPage from './holidays/Search';
import LoginPage from './account/LoginPage';
import RegisterPage from './account/RegisterPage';
import ShoppingCartPage from './account/MyCartPage';
import WishListPage from './account/WishListPage';
import BrandsPage from './brands/BrandsPage';
import BrandDetailPage from './brands/BrandDetailPage';
import DestinationsPage from './destinations/DestinationsPage';
import DestinationDetailPage from './destinations/DestinationDetailPage';
import HolidayTypesPage from './holidays/HolidayTypesPage';
import HolidayTypeDetailPage from './holidays/HolidayTypeDetailPage';
import AboutPage from './about/AboutPage';
import urls from '../urls';
import HolidayDetailPage from './holidays/HolidayDetailPage';
import HolidaysPage from './holidays/HolidaysPage';
import BlogPage from './blogs/BlogPage';
import BlogDetailPage from './blogs/BlogDetailPage';
import NewsPage from './news/NewsPage';
import NewsDetailPage from './news/NewsDetailPage';
// import PrivateRoute from "./common/PrivateRoute";
// import MyAccountPage from "./account/MyAccountPage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
	render() {
		// const activeStyle = {color: 'blue'};
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path={urls.root} component={HomePage} />
					<Route exact path={urls.index} component={HomePage} />
					<Route exact path={urls.home} component={HomePage} />
					<Route exact path={urls.search} component={SearchPage} />
					<Route exact path={urls.holidays} component={HolidaysPage} />
					<Route exact path={urls.holidays + '/:id'} component={HolidayDetailPage} />
					<Route exact path={urls.login} component={LoginPage} />
					<Route exact path={urls.register} component={RegisterPage} />
					<Route exact path={urls.cart} component={ShoppingCartPage} />
					<Route exact path={urls.wishList} component={WishListPage} />
					<Route exact path={urls.holidayTypes} component={HolidayTypesPage} />
					<Route exact path={urls.holidayTypes + '/:id'} component={HolidayTypeDetailPage} />
					<Route exact path={urls.destinations} component={DestinationsPage} />
					<Route exact path={urls.destinations + '/:id'} component={DestinationDetailPage} />
					<Route exact path={urls.brands} component={BrandsPage} />
					<Route exact path={urls.brands + '/:id'} component={BrandDetailPage} />
					<Route exact path={urls.blog} component={BlogPage} />
					<Route exact path={urls.blog + '/:id'} component={BlogDetailPage} />
					<Route exact path={urls.news} component={NewsPage} />
					<Route exact path={urls.news + '/:id'} component={NewsDetailPage} />
					<Route exact path={urls.about} component={AboutPage} />
					{/*<PrivateRoute exact path={urls.myAccount} component={MyAccountPage}/>*/}
					<Route component={NotFoundPage} />
				</Switch>
				<div className='clear-both' />
				<Footer />
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.element,
	store: PropTypes.object
};

export default hot(module)(App);
