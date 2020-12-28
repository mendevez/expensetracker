import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsAuthenticated,
  selectUser,
} from '../../redux/selectors/authSelectors';
import { showModal } from '../../redux/actions/modalActions';
import { REGISTER_MODAL, LOGIN_MODAL } from '../modals/modalTypes';

export const Landing = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const displayModal = (modalType) => {
    dispatch(showModal('', modalType));
  };

  if (isAuthenticated && user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="home">
      <section className="landing">
        <div className="overlay"></div>
        <div className="landing-content">
          <h1 className="landing-content-text">
            Track and manage your expenses
          </h1>
          <div>
            <a
              onClick={() => displayModal(REGISTER_MODAL)}
              className="btn-landing"
              href="#!"
            >
              Sign Up
            </a>
            <a
              onClick={() => displayModal(LOGIN_MODAL)}
              className="btn-landing"
              href="#!"
            >
              Login
            </a>
          </div>
        </div>
      </section>
      <div className="container"></div>
    </div>
  );
};

export default Landing;
