import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <NavLink className="logo navlink" to="/">
          Expense Tracker
        </NavLink>
      </h1>

      <ul>
        <li>
          <NavLink activeClassName="active" className="navlink" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="navlink" to="login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
