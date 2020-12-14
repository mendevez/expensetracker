import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dashboard-actions add-box-shadow add-margin-x">
      <NavLink className="btn-dashboard" to="/add">
        Add New Expense
      </NavLink>
    </div>
  );
};

export default DashboardActions;
