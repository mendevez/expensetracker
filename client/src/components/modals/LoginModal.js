import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginModal = () => {
  return (
    <div className="modal-login add-border-radius">
      <form className="app-form  ">
        <h1 className="app-form-title">
          <FontAwesomeIcon icon="user" /> Login
        </h1>

        <input className="app-form-input " placeholder="Email" type="text" />

        <input
          className="app-form-input"
          placeholder="Password"
          type="password"
        />
        <button className="btn-form">Login</button>
      </form>
    </div>
  );
};

export default LoginModal;
