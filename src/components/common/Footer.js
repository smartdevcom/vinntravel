import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SubscribeToNewsletter from "./SubscribeToNewsletter";
import urls from "../../urls";

const images = require.context('../../assets/img', true);

class IndexContent extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {

    return (
      <footer>
        <div className="footer">
          <div className="footer-inner">

            <div className="four-column">
              <ul>
                <li><Link to={urls.search}>Search</Link></li>
                <li><Link to={urls.news}>News</Link></li>
                <li><Link to={urls.blog}>Blog</Link></li>
                <li><Link to={urls.faq}>FAQ</Link></li>
              </ul>

            </div>
            <div className="four-column">
              <ul>
                <li><Link to={urls.siteMap}>Sitemap</Link></li>
                <li><Link to={urls.privacyNotice}>Privacy Notice</Link></li>
                <li><Link to={urls.conditionsToUse}>Conditions to Use</Link></li>
                <li><Link to={urls.about}>About Us</Link></li>
                <li><Link to={urls.contact}>Contact Us</Link></li>
              </ul>

            </div>
            <div className="four-column">
              <ul>
                <li><Link to={urls.myAccount}>My Account</Link></li>
                <li><Link to={urls.myOrders}>Orders</Link></li>
                <li><Link to={urls.myAddresses}>Addresses</Link></li>
                <li><Link to={urls.cart}>My Cart</Link></li>
                <li><Link to={urls.wishList}>Wishlist</Link></li>
                <li><Link to={urls.help}>Help</Link></li>
              </ul>
            </div>
            <div className="four-column-last">
              <div className="row social-row">
                <a href="/">
                  <div className="social-face"/>
                </a>
                <a href="/">
                  <div className="social-twitter"/>
                </a>
                <a href="/">
                  <div className="social-linked"/>
                </a>
                <a href="/">
                  <div className="social-youtube"/>
                </a>
                <a href="/">
                  <div className="social-pinterest"/>
                </a>
                <a href="/">
                  <div className="social-instagram"/>
                </a>
                <a href="/">
                  <div className="social-vimeo"/>
                </a>
                <a href="/">
                  <div className="social-tumblr"/>
                </a>
                <br/>
              </div>
              <SubscribeToNewsletter/>


              <div className="row cards">
                <div className="credit-cards-visa"/>
                <div className="credit-cards-master"/>
                <div className="credit-cards-american"/>
                <div className="credit-cards-maestro"/>

              </div>
            </div>
            <div className="row follow-us">

              <span><i className="fa fa-envelope"/>&nbsp;web@vinntravel.com</span>
              <span><i className="fa fa-phone"/>&nbsp;+90 (850) 203 03 97</span>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <a href="http://www.tursab.org.tr"><img src={images("./tursab.jpg")} alt=""/></a>
          <h3>Türsab Licence No: 8487</h3>
        </div>
        <div className="footer-bottom"><h3>Copyright © 2007-2017 VinnTravel.com | All Rights Reserved</h3></div>
      </footer>
    );
  }
}

export default IndexContent;
