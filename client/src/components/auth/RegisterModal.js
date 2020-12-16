
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { registerNewUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const submitData = (data) => {
    dispatch(registerNewUser(data));
  };
  return (
    <div className="modal-register add-border-radius">
      <form className="modal-form" onSubmit={handleSubmit(submitData)}>
        <h1 className="app-form-title">
          <FontAwesomeIcon icon="user" /> Register
        </h1>
        <input
          className="app-form-input "
          name="name"
          placeholder="Name"
          type="text"
          ref={register({
            required: true,
            pattern: /[a-zA-z]+/,
          })}
        />
        {errors.name?.type === 'required' && (
          <span className="app-form-error">Please enter name</span>
        )}
        {errors.name?.type === 'pattern' && (
          <span className="app-form-error">
            Name can only consist of alphabetic characters
          </span>
        )}
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
        {errors.password?.type === 'required' && (
          <span className="app-form-error">Please enter password</span>
        )}
        <button className="btn-form"> Register</button>
      </form>
    </div>
  );
};

export default RegisterModal;
