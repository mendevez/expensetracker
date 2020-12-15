import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
export const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="landing">
      <div className="overlay"></div>

      <div className="landing-content">
        <h1 className="landing-content-text">Track and manage your expenses</h1>

        <NavLink className="btn-main" to="/dashboard">
          Get started
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
