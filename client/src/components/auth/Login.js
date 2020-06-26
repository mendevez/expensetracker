import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  return (
    <div>
      <form className="app-form add-box-shadow add-border-radius ">
        <h1 className="app-form-title">
          <FontAwesomeIcon icon="user" /> Login
        </h1>

        <input className="app-form-input " placeholder="Email" type="text" />

        <input
          className="app-form-input"
          placeholder="Password"
          type="password"
        />
        <button className="btn-form-button"> Login</button>
      </form>
    </div>
  );
};

export default Login;
