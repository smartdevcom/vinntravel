import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import PlaceHolderTag from "../common/PlaceHolderTag";

class HolidayCity extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      city: props.city
    };
  }

  render() {
    let d = this.state.city;
    return (
      <div className="half-column">
        <div className="wide-city-tour">
          <div className="img">
            <img src={d.imgSrc} alt={d.text}/>
          </div>
          <div className="text">
            <div className="text-inner">
              <Link to={'/city/' + d.id}>
                <h3>{d.text}</h3>
                <div className="divider"/>
                <h4>{d.count} Properties</h4>
                <h5><PlaceHolderTag styleName="fa fa-plane"/><PlaceHolderTag styleName="fa fa-bus"/></h5>
                <img src={d.flagSrc} alt={d.text}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HolidayCity.propTypes = {
  city: PropTypes.object.isRequired
};

export default HolidayCity;
