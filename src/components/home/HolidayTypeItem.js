import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class HolidayTypeItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      holidayType: props.holidayType
    };
  }

  render() {
    let d = this.state.holidayType;
    return (
      <div className="three-column">
        <div className="tour-types">
          <Link to={'/holiday-type/' + d.id}>
            <div className="text">
              <h3>{d.name}</h3>
            </div>
            <img src={d.imgSrc} alt={d.name}/>
          </Link>
        </div>
      </div>
    );
  }
}

HolidayTypeItem.propTypes = {
  holidayType: PropTypes.object.isRequired
};

export default HolidayTypeItem;
