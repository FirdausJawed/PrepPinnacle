import React from 'react';
import './login.css';

function Login() {
      return (
            <div className="container">
                  <input id="signin" type="radio" name="tab" checked="checked" />
                  <input id="register" type="radio" name="tab" />
                  <div className="pages">
                        <div className="page">
                              <div className="input">
                                    <div className="title"><i className="material-icons">account_box</i> USERNAME</div>
                                    <input className="text" type="text" placeholder="" />
                              </div>
                              <div className="input">
                                    <div className="title"><i className="material-icons">lock</i> PASSWORD</div>
                                    <input className="text" type="password" placeholder="" />
                              </div>
                              <div className="input">
                                    <input type="submit" value="ENTER" />
                              </div>
                        </div>
                        <div className="page signup">
                              <div className="input">
                                    <div className="title"><i className="material-icons">person</i> NAME</div>
                                    <input className="text" type="text" placeholder="" />
                              </div>
                              <div className="input">
                                    <div className="title"><i className="material-icons">markunread_mailbox</i> EMAIL</div>
                                    <input className="text" type="password" placeholder="" />
                              </div>
                              <div className="input">
                                    <input type="submit" value="SIGN ME UP!" />
                              </div>
                        </div>
                  </div>
                  <div className="tabs">
                        <label className="tab text" for="signin">
                              Sign In</label>
                        <label className="tab text" for="register">
                              Register</label>
                  </div>
            </div>

      );
}

export default Login;
