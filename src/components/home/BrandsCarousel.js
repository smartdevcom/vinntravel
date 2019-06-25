import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import * as logger from '../../services/Logger';
import * as featuredBrands from '../../actions/featuredBrandsActions';
import FeaturedBrandItem from './FeaturedBrandItem';
import { connect } from 'react-redux';
import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';

class BrandsCarousel extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.dispatch(featuredBrands.fetchFeaturedBrands());
	}

	render() {
		const { error, loading, items } = this.props;

		if (error) {
			return <ErrorMessage message={error.message} />;
		}

		if (loading) {
			return <Loading />;
		}

		const settings = {
			className: 'center',
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 3, //this.props.featuredBrands.length,
			//slidesToScroll:4,
			//swipeToSlide: true,
			centerMode: true,
			afterChange: function(index) {
				logger.info(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
			}
		};
		return (
			<div>
				<div className='title '>
					<h1>{this.props.title}</h1>
				</div>
				<div className='brands-slider slider-container'>
					<Slider {...settings} className='owl-carousel owl-theme brands'>
						{items.map(function(d) {
							return <FeaturedBrandItem key={d.id} brand={d} />;
						})}
					</Slider>
				</div>
			</div>
		);
	}
}

BrandsCarousel.propTypes = {
	title: PropTypes.string.isRequired,
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	items: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		title: ownProps.title,
		error: state.featuredBrandsReducer.error,
		loading: state.featuredBrandsReducer.loading,
		items: state.featuredBrandsReducer.items
	};
}

export default connect(mapStateToProps)(BrandsCarousel);
