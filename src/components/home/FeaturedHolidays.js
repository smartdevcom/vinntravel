import React from 'react';
import PropTypes from 'prop-types';
import HolidayItem from './HolidayItem';
import * as featuredHolidaysActions from '../../actions/featuredHolidaysActions';
import { connect } from 'react-redux';
import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';

class FeaturedHolidays extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.dispatch(featuredHolidaysActions.fetchFeaturedHolidays());
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
				<section id='holidays'>
					<div className='holiday-wrapper'>
						{items.map(function(d) {
							return <HolidayItem key={d.id} holiday={d} />;
						})}
					</div>
				</section>
			</div>
		);
	}
}

FeaturedHolidays.propTypes = {
	title: PropTypes.string.isRequired,
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	items: PropTypes.array.isRequired,
	dispatch: PropTypes.func
};

function mapStateToProps(state, ownProps) {
	return {
		title: ownProps.title,
		error: state.featuredHolidaysReducer.error,
		loading: state.featuredHolidaysReducer.loading,
		items: state.featuredHolidaysReducer.items
	};
}

export default connect(mapStateToProps)(FeaturedHolidays);
