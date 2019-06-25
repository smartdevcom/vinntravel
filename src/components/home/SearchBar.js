import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as holidayActions from '../../actions/holidayActions';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			title: props.title
		};
	}

	render() {
		return (
			<div className='search-bar non-visible' id='search-bar'>
				<div className='search-bar-inner'>
					<div className='search-bar-inner-quartet'>
						<input
							type='text'
							className='textbox ico-marker textbox-md-bar scroll'
							placeholder='Country, state, city etc... '
							name='country-scroll'
							id='country-scroll'
						/>
					</div>
					<div className='search-bar-inner-quartet'>
						<input
							className='textbox textbox-sm flatpickr ico-date bar-pickr'
							type='text'
							placeholder='Check in'
							id='datePicker'
						/>
						<input
							className='textbox textbox-sm flatpickr ico-date bar-pickr'
							type='text'
							placeholder='Check out'
							id='datePicker'
						/>
					</div>
					<div className='search-bar-inner-halflet'>
						<span>Room</span>
						<div className='text-select-div-2'>
							<select className='search-bar-option' defaultValue='1'>
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
					<div className='search-bar-inner-halflet'>
						<span>Adults</span>
						<div className='text-select-div-2'>
							<select className='search-bar-option' defaultValue='1'>
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
					<div className='search-bar-inner-halflet'>
						<span>Kids</span>
						<div className='text-select-div-3'>
							<select className='search-bar-option' defaultValue='0'>
								<option value='1'>0</option>
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
					<div className='search-bar-inner-halflet search-tablet'>
						<button className='search-bar-button' id='searchBar'>
							Search
						</button>
					</div>
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	title: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		title: ownProps.title
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(holidayActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);
