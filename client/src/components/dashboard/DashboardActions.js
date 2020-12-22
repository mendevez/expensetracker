import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectTotalCost,
  selectTotalCostForCurrentWeek,
} from '../../redux/selectors/expenseSelectors';

const DashboardActions = () => {
  const totalCost = useSelector((state) => selectTotalCost(state));
  const totalCostForCurrentWeek = useSelector((state) =>
    selectTotalCostForCurrentWeek(state)
  );
  return (
    <div className="dashboard-actions add-margin-x add-box-shadow">
      <NavLink className="btn-dashboard add-margin-y" to="/add">
        Add New Expense
      </NavLink>
      <span className="btn-dashboard add-margin-y">
        Total Cost: {totalCost}
      </span>
      <span className="btn-dashboard add-margin-y">
        Current Week Total: {totalCostForCurrentWeek}
      </span>
    </div>
  );
};

export default DashboardActions;
