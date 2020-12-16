/*eslint no-undef: 0*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginWithUserNameAndPassword } from '../../redux/actions/authActions';

export const LoginModal = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const submitData = (data) => {
    dispatch(loginWithUserNameAndPassword(data));
  };
  return (
    <div className="modal-login add-border-radius">
      <form className="modal-form" onSubmit={handleSubmit(submitData)}>
        <h1 className="app-form-title">
          <FontAwesomeIcon icon="user" /> Login
        </h1>

        <input
          className="app-form-input "
          name="email"
          placeholder="Email"
          type="text"
          ref={register({
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        {errors.email?.type === 'required' && (
          <span className="app-form-error">Email is required</span>
        )}
        {errors.email?.type === 'pattern' && (
          <span className="app-form-error">Please enter a valid email</span>
        )}
        <input
          className="app-form-input"
          placeholder="Password"
          name="password"
          type="password"
          ref={register({
            required: true,
          })}
        />
        {errors.password && <span>Please enter password</span>}
        <button className="btn-form">Login</button>
      </form>
    </div>
  );
};

export default LoginModal;
