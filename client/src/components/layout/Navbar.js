import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_MODAL, LOGIN_MODAL } from '../modals/modalTypes';
import { showModal } from '../../redux/actions/modalActions';
import { logout } from '../../redux/actions/authActions';

export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
          Register
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

      {isAuthenticated ? AuthenticatedLinks : GuestLinks}
    </nav>
  );
};

export default Navbar;
