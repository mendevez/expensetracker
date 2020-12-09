import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegisterModal = () => {
  return (
    <div className="modal-register add-border-radius">
      <form className="app-form">
        <h1 className="app-form-title">
          <FontAwesomeIcon icon="user" /> Register
        </h1>
        <input className="app-form-input " placeholder="Name" type="text" />

        <input className="app-form-input " placeholder="Email" type="text" />

        <input
          className="app-form-input"
          placeholder="Password"
          type="password"
        />
        <button className="btn-form"> Register</button>
      </form>
    </div>
  );
};

export default RegisterModal;
