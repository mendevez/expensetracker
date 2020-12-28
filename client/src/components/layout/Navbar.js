import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_MODAL, LOGIN_MODAL } from '../modals/modalTypes';
import { showModal } from '../../redux/actions/modalActions';
import { logout } from '../../redux/actions/authActions';
import {
  selectIsAuthenticated,
  selectIsLoading,
} from '../../redux/selectors/authSelectors';

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => selectIsAuthenticated(state));
  const isLoading = useSelector((state) => selectIsLoading(state));

  const openRegisterModal = () => {
    dispatch(showModal(null, REGISTER_MODAL));
  };
  const openLoginModal = () => {
    dispatch(showModal(null, LOGIN_MODAL));
  };
  const logoutUser = () => {
    dispatch(logout());
  };

  const GuestLinks = (
    <ul>
      <li>
        <a className="navlink" href="#!" onClick={openRegisterModal}>
          Sign Up
        </a>
      </li>
      <li>
        <a className="navlink" href="#!" onClick={openLoginModal}>
          Login
        </a>
      </li>
    </ul>
  );

  const AuthenticatedLinks = (
    <ul>
      <li>
        <a className="navlink" href="#!" onClick={logoutUser}>
          Logout
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1>
        <NavLink className="logo navlink" to="/">
          Expense Tracker
        </NavLink>
      </h1>

      {!isLoading && (isAuthenticated ? AuthenticatedLinks : GuestLinks)}
    </nav>
  );
};

export default Navbar;
