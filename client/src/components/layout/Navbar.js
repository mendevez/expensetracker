import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { REGISTER_MODAL, LOGIN_MODAL } from '../modals/modalTypes';
import { showModal } from '../../redux/actions/modalActions';

export const Navbar = () => {
  const dispatch = useDispatch();

  const openRegisterModal = () => {
    dispatch(showModal(null, REGISTER_MODAL));
  };
  const openLoginModal = () => {
    dispatch(showModal(null, LOGIN_MODAL));
  };

  return (
    <nav className="navbar">
      <h1>
        <NavLink className="logo navlink" to="/">
          Expense Tracker
        </NavLink>
      </h1>

      <ul>
        <li>
          <NavLink to="" className="navlink" onClick={openRegisterModal}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="" onClick={openLoginModal}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
