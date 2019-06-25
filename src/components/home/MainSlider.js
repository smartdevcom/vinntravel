import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import SearchBox from './SearchBox';
import * as mainSliderActions from '../../actions/mainSliderActions';
import { connect } from 'react-redux';
import ErrorMessage from '../common/ErrorMessage';
import Loading from '../common/Loading';

class MainSlider extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		this.props.dispatch(mainSliderActions.fetchMainSliderData());
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
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className='slider-area z-index-999' id='slider-area'>
				<div className='top-slider slider-container'>
					<Slider {...settings} className='owl-carousel owl-theme main-slider'>
						{items.map(function(d) {
							return (
								<div key={d.id} className='item'>
									<img src={d.imgSrc} alt={d.id} />
								</div>
							);
						})}
					</Slider>
				</div>
				<SearchBox />
			</div>
		);
	}
}

MainSlider.propTypes = {
	title: PropTypes.string.isRequired,
	error: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	items: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		title: ownProps.title,
		error: state.mainSliderReducer.error,
		loading: state.mainSliderReducer.loading,
		items: state.mainSliderReducer.items
	};
}

export default connect(mapStateToProps)(MainSlider);
