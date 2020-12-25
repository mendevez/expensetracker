import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectTotalCost,
  selectTotalCostForCurrentMonth,
  selectTotalCostForCurrentWeek,
} from '../../redux/selectors/expenseSelectors';

const DashboardActions = () => {
  console.log('renderactions');
  const totalCost = useSelector(selectTotalCost);
  const totalCostForCurrentWeek = useSelector(selectTotalCostForCurrentWeek);
  const totalCostForCurrentMonth = useSelector(selectTotalCostForCurrentMonth);
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
      <span className="btn-dashboard add-margin-y">
        Current Month Total: {totalCostForCurrentMonth}
      </span>
    </div>
  );
};

export default DashboardActions;
