import React, {Component} from 'react';
import urls from "../../urls";
import {Link} from 'react-router-dom';
class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className="title ">
          <h1>Login</h1>
        </div>

        <div className="login-page">
          <div className="inner">
            <div className="input-area">
              <label>E mail</label>
              <input type="text"/>

            </div>
            <div className="input-area">
              <label>Password</label>
              <input type="password"/>
            </div>
            <div className="button-area">
              <button>Login</button>
            </div>
            <div className="bottom">
              <Link to={urls.forgotMyPassword}>Forgot my password</Link>
              <Link to={urls.register}>{"Doesn't have an account?"}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
