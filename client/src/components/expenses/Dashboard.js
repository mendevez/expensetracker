import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenses,
  getTotalByCategory,
} from '../../redux/actions/expenseActions';
import Spinner from '../layout/Spinner';
import ExpenseItem from './ExpenseItem';
import { NavLink } from 'react-router-dom';
import TotalByCategoryChart from '../charts/TotalByCategoryChart';

const Dashboard = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const isLoading = useSelector((state) => state.charts.isLoading);
  const totalByCategoryChartData = useSelector(
    (state) => state.charts.totalByCategoryChartData
  );

  useEffect(() => {
    dispatch(getExpenses())
    dispatch(getTotalByCategory());
  }, [dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="dashboard">
          <div className="dashboard-options">
            <NavLink className="btn-dashboard" to="/add">
              Add New Expense
            </NavLink>
          </div>

          <div className="dashboard-content">
            <div className="expense-list add-margin-y add-box-shadow">
              <h1>Expenses</h1>
              {expenses &&
                expenses.map((expense) => {
                  return <ExpenseItem key={expense._id} expense={expense} />;
                })}
            </div>
            <TotalByCategoryChart totalByCategoryChartData={totalByCategoryChartData} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
