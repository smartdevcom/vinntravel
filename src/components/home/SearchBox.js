import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import DestinationAutoSuggest from './DestinationAutoSuggest';
import * as holidayActions from '../../actions/holidayActions';
import { connect } from 'react-redux';
import * as searchHelper from '../../services/SearchHelper';
import toastr from 'toastr';

class SearchBox extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			focusedInput: null,
			selectedRoom: null,
			selectedAdult: null,
			selectedKid: null
		};

		this.updateSearch = this.updateSearch.bind(this);
		this.handleRoomChange = this.handleRoomChange.bind(this);
		this.handleAdultChange = this.handleAdultChange.bind(this);
		this.handleKidChange = this.handleKidChange.bind(this);
		this.onSearchBoxFormSubmit = this.onSearchBoxFormSubmit.bind(this);
		this.onDatesChange = this.onDatesChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.handleDestinationValueChange = this.handleDestinationValueChange.bind(this);
		this.getCopySearch = this.getCopySearch.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(holidayActions.loadSearch());
	}

	getCopySearch() {
		//return Object.assign({}, this.state.search);
		return this.state.search;
	}

	updateSearch(search) {
		this.props.dispatch(holidayActions.updateSearch(search));
	}

	handleRoomChange(event) {
		const selectedRoom = searchHelper.getSelectOptionByIndex(event.target);
		this.setState({ selectedRoom });
	}

	handleAdultChange(event) {
		const selectedAdult = searchHelper.getSelectOptionByIndex(event.target);
		this.setState({ selectedAdult });
	}

	handleKidChange(event) {
		const selectedKid = searchHelper.getSelectOptionByIndex(event.target);
		this.setState({ selectedKid });
	}

	onDatesChange({ startDate, endDate }) {
		this.setState({ startDate, endDate });
	}

	onFocusChange(focusedInput) {
		this.setState({ focusedInput });
	}

	handleDestinationValueChange(destination) {
		this.setState({ destination });
	}

	onSearchBoxFormSubmit(event) {
		event.preventDefault();
		const stateSearch = {
			startDate: this.state.startDate,
			endDate: this.state.endDate,
			focusedInput: this.state.focusedInput,
			selectedRoom: this.state.selectedRoom || this.props.search.selectedRoom,
			selectedAdult: this.state.selectedAdult || this.props.search.selectedAdult,
			selectedKid: this.state.selectedKid || this.props.search.selectedKid,
			destination: this.state.destination
		};
		const search = Object.assign({}, this.props.search, stateSearch);
		if (!search.destination || search.destination.length <= 1) {
			toastr.error('destination is required!');
		} else if (!search.startDate) {
			toastr.error('startDate is required!');
		} else if (!search.endDate) {
			toastr.error('endDate is required!');
		} else {
			const updatedSearch = Object.assign({}, this.props.search, search);
			this.props.dispatch(holidayActions.searchHoliday(updatedSearch));
			this.props.history.push('/holidays');
		}
	}

	render() {
		return (
			<div className='search-area'>
				<div className='search-area-inner'>
					<div className='search-area-inner-form'>
						<div className='search-inner-full-width'>
							<DestinationAutoSuggest onChange={this.handleDestinationValueChange} />
						</div>
						<div className='search-inner-half-width'>
							<DateRangePicker
								startDate={this.state.startDate} // momentPropTypes.momentObj or null,
								startDateId='datePickerCheckIn' // PropTypes.string.isRequired,
								endDate={this.state.endDate} // momentPropTypes.momentObj or null,
								endDateId='datePickerCheckOut' // PropTypes.string.isRequired,
								onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
								focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
								onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
								displayFormat='DD-MM-YYYY'
							/>
						</div>

						<div className='option-row'>
							<div className='search-inner-three-width'>
								<span>Room</span>
								<select
									name='search-box-rooms'
									className='search-bar-option'
									defaultValue={searchHelper.getSelectOptionValue(this.props.search.selectedRoom, 1)}
									onChange={this.handleRoomChange}
								>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
								</select>
							</div>
							<div className='search-inner-three-width'>
								<span>Adults</span>
								<select
									name='search-box-adults'
									className='search-bar-option'
									defaultValue={searchHelper.getSelectOptionValue(this.props.search.selectedAdult, 1)}
									onChange={this.handleAdultChange}
								>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
								</select>
							</div>
							<div className='search-inner-three-width'>
								<span>Kids</span>
								<select
									name='search-box-kids'
									className='search-bar-option'
									defaultValue={searchHelper.getSelectOptionValue(this.props.search.selectedKid, 0)}
									onChange={this.handleKidChange}
								>
									<option value='0'>0</option>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
									<option value='5'>5</option>
									<option value='6'>6</option>
									<option value='7'>7</option>
									<option value='8'>8</option>
								</select>
							</div>
						</div>
						<div className='search-button-row'>
							<div className='advanced-search-row'>
								<a href='/search'>Advanced Search</a>
							</div>
							<div className='search-button-right'>
								<button
									className='search-area-button'
									id='searchButton'
									onClick={this.onSearchBoxFormSubmit}
								>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

SearchBox.propTypes = {
	search: PropTypes.object.isRequired,
	history: PropTypes.object,
	dispatch: PropTypes.func
};

function mapStateToProps(state) {
	return {
		// error: state.searchReducer.error,
		// loading: state.searchReducer.loading,
		search: state.searchReducer
	};
}

export default withRouter(connect(mapStateToProps)(SearchBox));
