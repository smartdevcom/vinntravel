import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as hotelActions from '../../actions/hotelActions';

class HotelsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hotel: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

    }
    onTitleChange(event) {
        const hotel = this.state.hotel;
        hotel.title = event.target.value;
        this.setState({ hotel: hotel });
    }
    onClickSave() {
        this.props.actions.createHotel(this.state.hotel);
    }
    hotelRow(hotel, index) {
        return <div key={index}>{hotel.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Hotels</h1>
                {this.props.hotels.map(this.hotelRow)}
                <h2>Add Hotel</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.title} />
                <input type="submit" value="Save" onClick={this.onClickSave} />
            </div>
        );
    }
}
HotelsPage.propTypes = {
    hotels: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        hotels: state.hotels
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(hotelActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelsPage);
