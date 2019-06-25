import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as holidayActions from '../../actions/holidayActions';
import { connect } from 'react-redux';

const images = require.context('../../assets/images', true);
const notFoundImage = images('./not-found-logo.jpg');

class HolidayRowItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			holiday: Object.assign({}, props.holiday)
		};

		this.addToWishList = this.addToWishList.bind(this);
	}

	componentDidUpdate(nextProps) {
		if (this.props.holiday.id !== nextProps.holiday.id) {
			this.setState({ holiday: Object.assign({}, nextProps.holiday) });
		}
	}

	addToWishList(event) {
		event.preventDefault();
		this.actions.addToWishList(this.state.holiday);
	}

	render() {
		let d = this.state.holiday;
		let imageSrc = d.medya && d.medya.length > 0 ? d.medya[0].medya_path : notFoundImage;
		let priceFrom = d.oda && d.oda.length > 0 ? d.oda[0].oda_fiyati : 0.0;
		let stars = [];
		for (let i = 0; i < d.tesis.yildiz; i++) {
			stars.push(i);
		}
		return (
			<div className='search-result-wide'>
				<div className='image'>
					<div className='ribbon-red'>
						<span>TOP RATED</span>
					</div>
					<img src={imageSrc} alt={d.name} />
				</div>
				<div className='text'>
					<h3>
						{d.name} &nbsp;{' '}
						<span>
							{stars.map(function(s) {
								return <i className='fa fa-star' key={d.id + '-' + s} />;
							})}
						</span>
					</h3>
					<h4>
						{d.location.il_id}, {d.location.ilce} , {d.location.mevkii}
					</h4>
					<p>{d.description}</p>
					<h5>
						Rating Point <b>{d.ratingPoint}</b>
					</h5>
					<h6>Evaluation result by {d.userCountRated} user</h6>
					<div className='result-icons'>
						<Link to={'/'}>
							<span className='fa-stack'>
								<i className='fa fa-circle fa-stack-2x top-back-circle-face' />
								<i className='fa fa-hotel fa-stack-1x fa-inverse' />
							</span>
						</Link>
						<Link to={'/'}>
							<span className='fa-stack'>
								<i className='fa fa-circle fa-stack-2x top-back-circle-face' />
								<i className='fa fa-life-bouy fa-stack-1x fa-inverse' />
							</span>
						</Link>
						<Link to={'/'}>
							<span className='fa-stack'>
								<i className='fa fa-circle fa-stack-2x top-back-circle-face' />
								<i className='fa fa-map-marker fa-stack-1x fa-inverse' />
							</span>
						</Link>
						<Link to={'/'}>
							<span className='fa-stack'>
								<i className='fa fa-circle fa-stack-2x top-back-circle-face' />
								<i className='fa fa-tree fa-stack-1x fa-inverse' />
							</span>
						</Link>
					</div>
				</div>
				<div className='price'>
					<h4>starts from</h4>
					<h3>
						<span>$</span>
						{priceFrom}
					</h3>
					<Link to={'/holidays/' + d.id} className='button'>
						DETAILS
					</Link>
				</div>
			</div>
		);
	}
}

HolidayRowItem.propTypes = {
	holiday: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

HolidayRowItem.contextTypes = {
	router: PropTypes.object
};

function mapStateToProps() {
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
)(HolidayRowItem);
