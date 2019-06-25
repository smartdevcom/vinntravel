import React, {Component} from 'react';

class BrandDetailPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="wrapper" id="wrapper">

        <div className="title ">
          <h1>Brands Detail Page</h1>
        </div>

        <div className="brands-page-container">
          Brand Detail Page Body
        </div>
      </div>

    );
  }
}

export default BrandDetailPage;
