import React from 'react';
import PropTypes from 'prop-types';
import HolidayTypeItem from './HolidayTypeItem';
import * as holidayTypesActions from '../../actions/holidayTypesActions';
import { connect } from 'react-redux';
import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';

class HolidayTypeList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.dispatch(holidayTypesActions.fetchHolidayTypes());
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
				<section id='tour-types'>
					{items.map(function(d) {
						return <HolidayTypeItem key={d.id} holidayType={d} />;
					})}
				</section>
			</div>
		);
	}
}

HolidayTypeList.propTypes = {
	title: PropTypes.string.isRequired,
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	items: PropTypes.array.isRequired,
	dispatch: PropTypes.func
};

function mapStateToProps(state, ownProps) {
	return {
		title: ownProps.title,
		error: state.holidayTypesReducer.error,
		loading: state.holidayTypesReducer.loading,
		items: state.holidayTypesReducer.items
	};
}

export default connect(mapStateToProps)(HolidayTypeList);
