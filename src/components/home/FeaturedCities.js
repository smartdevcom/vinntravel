import React from 'react';
import PropTypes from 'prop-types';
import HolidayCity from './HolidayCity';
import * as featuredCitiesActions from '../../actions/featuredCitiesActions';
import { connect } from 'react-redux';
import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';

class FeaturedCities extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.dispatch(featuredCitiesActions.fetchFeaturedCities());
	}

	render() {
		const { error, loading, items } = this.props;

		if (error) {
			return <ErrorMessage message={error.message} />;
		}

		if (loading) {
			return <Loading />;
		}

		return (
			<div>
				<div className='title '>
					<h1>{this.props.title}</h1>
				</div>
				<section id='wide-tours'>
					{items.map(function(d) {
						return <HolidayCity key={d.id} city={d} />;
					})}
				</section>
			</div>
		);
	}
}

FeaturedCities.propTypes = {
	title: PropTypes.string.isRequired,
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	items: PropTypes.array.isRequired,
	dispatch: PropTypes.func
};

function mapStateToProps(state, ownProps) {
	return {
		title: ownProps.title,
		error: state.featuredCitiesReducer.error,
		loading: state.featuredCitiesReducer.loading,
		items: state.featuredCitiesReducer.items
	};
}

export default connect(mapStateToProps)(FeaturedCities);
