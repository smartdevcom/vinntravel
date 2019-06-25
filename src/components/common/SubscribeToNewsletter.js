import React, {Component} from 'react';

class SubscribeToNewsletter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row newsletter-area">
        <input type="text" className="textbox-news" placeholder="Newsletter" name="newsletter"/>
        <button type="button" className="newsletter-button" id="subsButton">Subscribe</button>
      </div>
    );
  }
}

export default SubscribeToNewsletter;
