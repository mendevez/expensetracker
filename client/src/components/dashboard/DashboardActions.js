import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardActions = () => {
  const totalCost = useSelector((state) => state.expenses.totalCost);
  return (
    <div className="dashboard-actions add-box-shadow add-margin-x">
      <NavLink className="btn-dashboard" to="/add">
        Add New Expense
      </NavLink>
      <span className="dashboard-total-cost add-border-radius add-margin-y">Total Cost: {totalCost}</span>
    </div>
  );
};

export default DashboardActions;
