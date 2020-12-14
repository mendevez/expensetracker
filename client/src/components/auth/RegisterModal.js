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
      <form className="app-form" onSubmit={handleSubmit(submitData)}>
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
          })}
        />
        {errors.name && <span>Please enter name</span>}
        <input
          className="app-form-input "
          name="email"
          placeholder="Email"
          type="text"
          ref={register({
            required: true,
          })}
        />
        {errors.email && <span>Please enter email</span>}
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
        <button className="btn-form"> Register</button>
      </form>
    </div>
  );
};

export default RegisterModal;
