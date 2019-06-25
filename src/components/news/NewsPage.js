import React, {Component} from 'react';

class NewsPage extends Component {
  render() {
    return (
      <div className="wrapper" id="wrapper">

        <div className="title ">
          <h1>News</h1>
        </div>

        <div className="news-page">
          <div className="news-container">
            <div className="img">
              <img src="assets/images/hotels/details_11.jpg"/>

            </div>
            <div className="text">
              <h3>Newsletter Headline</h3>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default NewsPage;
