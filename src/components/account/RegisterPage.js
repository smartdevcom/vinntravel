import React, {Component} from 'react';

class RegisterPage extends Component {
  render() {
    return (
      <div>

        <div className="title ">
          <h1>Register</h1>
        </div>

        <div className="register-page">
          <div className="inner">
            <div className="input-area">
              <label>E mail</label>
              <input type="text"/>

            </div>
            <div className="input-area">
              <label>Name</label>
              <input type="text"/>

            </div>
            <div className="input-area">
              <label>Surname</label>
              <input type="text"/>
            </div>
            <div className="input-area">
              <label>Password</label>
              <input type="password"/>
            </div>
            <div className="input-area">
              <label>Password Again</label>
              <input type="password"/>
            </div>
            <div className="bottom">
              <a href="#">
                <input id="check-1" type="checkbox"/>
                <label htmlFor="check-1">Send me Special Offers & Promotions</label>
              </a>
              <a href="#">

                <input id="check-2" type="checkbox" checked/>
                <label htmlFor="check-2">I have read the terms and conditions.</label>
              </a>
            </div>

            <div className="button-area">
              <button>Register</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
