import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TopNavBar from './TopNavBar';
import urls from "../../urls";


const images = require.context('../../assets/images', true);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    return (
      <header>
        <div className="top-bar">
          <div className="top-bar-inner">
            <div className="top-bar-inner-left">
              <a href="/">
                <div className="social-face-top"/>
              </a>
              <a href="/">
                <div className="social-twitter-top"/>
              </a>
              <a href="/">
                <div className="social-linked-top"/>
              </a>
              <a href="/">
                <div className="social-youtube-top"/>
              </a>
              <a href="/">
                <div className="social-pinterest-top"/>
              </a>
              <a href="/">
                <div className="social-vimeo-top"/>
              </a>
              <a href="/">
                <div className="social-tumblr-top"/>
              </a>
              <a href="/">
                <div className="social-instagram-top"/>
              </a>
            </div>
            <div className="top-bar-inner-right">
              <ul className="right-nav">
                <li className="button-dropdown">
                  <a href="javascript:void(0)" className="dropdown-toggle">
                    <img src={images("./Flags/Turkey.png")} alt=""/> <span>▼</span>
                  </a>
                  <ul className="dropdown-menu flag-drop">
                    <li>
                      <a href="/">
                        <img src={images("./Flags/Russia.png")} alt=""/>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={images("./Flags/Germany.png")} alt=""/>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={images("./Flags/United-kingdom.png")} alt=""/>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={images("./Flags/France.png")} alt=""/>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={images("./Flags/Italy.png")} alt=""/>
                      </a>
                    </li>

                  </ul>
                </li>
                <li className="button-dropdown">
                  <a href="javascript:void(0)" className="dropdown-toggle">
                    US Dollar $<span>▼</span>
                  </a>
                  <ul className="dropdown-menu currency-drop">
                    <li>
                      <a href="/">
                        Turkish Liras ₺
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Euro €
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Pound £
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        Ruble ₽
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={urls.register}>
                    Register
                    <div className="ico-reg-2"/>
                  </Link>
                </li>
                <li>
                  <Link to={urls.login}>
                    <div className="ico-log-2"/>
                    Login
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="logo-bar">

          <div className="row">
            <div className="top-logo-container">
              <Link to={urls.root}><img src={images("./main_logo.png")} className="top-main-logo" alt=""/></Link>
            </div>

            <div className="top-text-container"/>
            <div className="top-right-nav-container">

              <ul className="right-nav">
                <li>
                  <Link to={urls.cart}>
                    <i className="fa fa-shopping-basket"/> My Cart (2)
                  </Link>
                </li>
                <li>
                  <Link to={urls.wishList}>
                    <i className="fa fa-heart"/>&nbsp;Wishlist
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
        <TopNavBar/>
      </header>
    );
  }
}

export default Header;
