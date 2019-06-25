import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as holidayActions from '../../actions/holidayActions';
import {connect} from 'react-redux';
import Stars from '../common/Stars';
import SocialButtons from '../common/SocialButtons';
import PlaceHolderTag from '../common/PlaceHolderTag';
import * as logger from '../../services/Logger';

class HolidayItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			holiday: Object.assign({}, props.holiday)
		};

		this.addToWishList = this.addToWishList.bind(this);
	}

	componentDidUpdate(nextProps) {
		if (this.props.holiday.id !== nextProps.holiday.id) {
			this.setState({holiday: Object.assign({}, nextProps.holiday)});
		}
	}

	addToWishList(event) {
		event.preventDefault();
		this.actions.addToWishList(this.state.holiday);
	}

	render() {
		let d = this.state.holiday;
		return (
			<div className='holiday-container'>
				<Link to={'/holiday/' + d.id}>
					<div className='img'>
						<img src={d.imgSrc} alt={d.name}/>
						<div className='text'>
							<h3>Average Daily Night From</h3>
							<span>{d.priceFrom} TL</span>
						</div>
					</div>
				</Link>
				<div className='content'>
					<div className='line'>
						<div className='title'>
							<h3>
								<Link to={'/holiday/' + d.id}>{d.name}</Link>
							</h3>
							<h4>{d.location}</h4>
						</div>
						<Stars/>
					</div>
					<div className='line'>
						<div className='point'>
							<span>{d.ratingPoint}</span>
						</div>
						<div className='results'>
							<h3>BEST</h3>
							<h4>Evaluation result by {d.userCountRated} user</h4>
						</div>
						<div className='online'>
							<PlaceHolderTag styleName='fa fa-desktop'/>
						</div>
					</div>
					<div className='line'>
						<div className='wishlist'>
							<a href={'/add-to-wish-list/' + d.id}>
								<PlaceHolderTag styleName='fa fa-heart'/>
								&nbsp;Add To Wishlist
							</a>
						</div>
						<SocialButtons/>
					</div>
				</div>
			</div>
		);
	}
}

HolidayItem.propTypes = {
	holiday: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

HolidayItem.contextTypes = {
	router: PropTypes.object
};

function mapStateToProps(state) {
	if (state) {
		logger.info("HolidaysItem.mapStateToProps");
	}
	return {
		// error: state.searchReducer.error,
		// loading: state.searchReducer.loading,
		//search: state.searchReducer
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
)(HolidayItem);
