import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const DashboardActions = React.memo(
  ({ totalCost, totalCostForCurrentMonth, totalCostForCurrentWeek }) => {
    return (
      <div className="dashboard-actions add-margin-x add-box-shadow">
        <NavLink className="btn-dashboard add-margin-y" to="/add">
          <FontAwesomeIcon icon="plus" /> New Expense
        </NavLink>
        <span className="dashboard-actions-text add-margin-y">
          Total Expenses: {totalCost}
        </span>
        <span className="dashboard-actions-text add-margin-y">
          Current Week Total: {totalCostForCurrentWeek}
        </span>
        <span className="dashboard-actions-text add-margin-y">
          Current Month Total: {totalCostForCurrentMonth}
        </span>
      </div>
    );
  }
);

DashboardActions.propTypes = {
  totalCost: PropTypes.number.isRequired,
  totalCostForCurrentMonth: PropTypes.number.isRequired,
  totalCostForCurrentWeek: PropTypes.number.isRequired,
};
export default DashboardActions;
