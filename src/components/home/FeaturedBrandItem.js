import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class FeaturedBrandItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      brand: props.brand
    };
  }

  render() {
    let d = this.state.brand;
    return (
      <div key={d.id} className="item brands-item">
        <Link to={'/brand/' + d.id}><img src={d.imgSrc} alt=""/></Link>
      </div>
    );
  }
}

FeaturedBrandItem.propTypes = {
  brand: PropTypes.object.isRequired
};

export default FeaturedBrandItem;
