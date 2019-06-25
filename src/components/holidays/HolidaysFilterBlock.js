import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HolidaysFilterBlock extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      termBucket: props.termBucket
    };
    this.onFilter = this.onFilter.bind(this);
  }

  onFilter(newValue) {
    this.props.onFilter(newValue);
  }

  render() {
    if(!this.state.termBucket){
      return <li>--</li>
    }
    return (
      <li>
        <h3><i className="fa fa-hotel"/>{this.state.termBucket.name}</h3>
        <ul>
          {
            this.state.termBucket.buckets.map(function (d) {
              return <li key={d.id}>
                <input id={"box-type-" + d.id} type="checkbox"/>
                <label htmlFor={"box-type-" + d.id}>{d.name}({d.docCount})</label>
              </li>;
            })
          }
        </ul>
      </li>
    );
  }
}

HolidaysFilterBlock.propTypes = {
  termBucket: PropTypes.object.isRequired,
  onFilter: PropTypes.func.isRequired
};

export default HolidaysFilterBlock;
