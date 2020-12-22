import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/selectors/authSelectors';
export const Landing = () => {
  const isAuthenticated = useSelector((state) => selectIsAuthenticated(state));

  if (isAuthenticated) {
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
        </div>
      </section>
      <div className="container"></div>
    </div>
  );
};

export default Landing;
