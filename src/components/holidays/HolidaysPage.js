import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HolidaysFilter from './HolidaysFilter';
import Holidays from './Holidays';
import * as holidayActions from '../../actions/holidayActions';
import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';

class HolidaysPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			search: Object.assign({}, props.search)
		};

		this.handlePageChange = this.handlePageChange.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	componentDidMount() {
		let search = Object.assign({}, this.state.search);
		this.props.dispatch(holidayActions.searchHoliday(search));
	}

	handlePageChange(pageNumber) {
		let page = pageNumber && pageNumber > 0 ? pageNumber : 1;
		let search = Object.assign({}, this.state.search, { page: page });
		this.props.dispatch(holidayActions.searchHoliday(search));
	}

	handleFilter(search) {
		this.props.dispatch(holidayActions.searchHoliday(search));
	}

	render() {
		const { error, loading, search, items, facets, pagination } = this.props;
		if (error) {
			return <ErrorMessage message={error.message} />;
		}

		if (loading) {
			return <Loading />;
		}
		return (
			<div>
				<HolidaysFilter search={search} filter={facets} onFilter={this.handleFilter} />
				<Holidays
					items={items}
					error={error}
					loading={loading}
					totalItemsCount={pagination.totalCount}
					activePage={pagination.pageIndex + 1}
					itemsCountPerPage={pagination.pageSize}
					pageRangeDisplayed={pagination.pageRangeDisplayed}
					onPageChange={this.handlePageChange}
				/>
			</div>
		);
	}
}

HolidaysPage.propTypes = {
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	search: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
	facets: PropTypes.object.isRequired,
	pagination: PropTypes.object.isRequired,
	dispatch: PropTypes.func
};

function mapStateToProps(state) {
	return {
		error: state.holidaysReducer.error,
		loading: state.holidaysReducer.loading,
		search: state.holidaysReducer.search,
		items: state.holidaysReducer.items,
		facets: state.holidaysReducer.facets,
		pagination: state.holidaysReducer.pagination
	};
}

export default connect(mapStateToProps)(HolidaysPage);
