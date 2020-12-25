import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  selectTotalCost,
  selectTotalCostForCurrentMonth,
  selectTotalCostForCurrentWeek,
} from '../../redux/selectors/expenseSelectors';
import { selectUserMonthlyBudget } from '../../redux/selectors/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../redux/actions/modalActions';
import { MONTHLY_BUDGET_MODAL } from '../modals/modalTypes';

const DashboardActions = () => {
  const dispatch = useDispatch();
  const totalCost = useSelector(selectTotalCost);
  const totalCostForCurrentWeek = useSelector(selectTotalCostForCurrentWeek);
  const totalCostForCurrentMonth = useSelector(selectTotalCostForCurrentMonth);
  const userMonthlyBudget = useSelector(selectUserMonthlyBudget);

  const displayModal = () => {
    dispatch(showModal(userMonthlyBudget, MONTHLY_BUDGET_MODAL));
  };

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
      <div className="dashboard-actions-text add-margin-y">
        <span className="">
          Monthly Budget: {userMonthlyBudget}
        </span>
        <span onClick={displayModal} className="btn-actions" >
          <FontAwesomeIcon icon="pen" />
        </span>
      </div>
    </div>
  );
};

export default DashboardActions;
