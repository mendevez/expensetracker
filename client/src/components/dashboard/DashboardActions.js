import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardActions = () => {
  const totalCost = useSelector((state) => state.expenses.totalCost);
  const totalCostForCurrentWeek = useSelector(state => state.expenses.totalCostCurrentWeek)
  return (
    <div className="dashboard-actions add-box-shadow add-margin-x">
      <NavLink className="btn-dashboard" to="/add">
        Add New Expense
      </NavLink>
      <span className="dashboard-total-cost add-border-radius add-margin-y">Total Cost: {totalCost}</span>
      <span className="dashboard-total-cost add-border-radius add-margin-y">Current Week Total: {totalCostForCurrentWeek}</span>
    </div>
  );
};

export default DashboardActions;
