import React from 'react';
import { NavLink } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="landing">
      <div className="overlay"></div>

      <div className="landing-content">
        <h1 className="landing-content-text">Track and manage your expenses</h1>

        <NavLink className="btn-main" to="/register">
          Get started
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
