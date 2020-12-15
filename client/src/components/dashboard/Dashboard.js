import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenses,
  getTotalByCategory,
  getTotalCost,
} from '../../redux/actions/expenseActions';
import Spinner from '../layout/Spinner';
import TotalByCategoryChart from '../charts/TotalByCategoryChart';
import ExpenseList from '../expenses/ExpenseList';
import DashboardActions from './DashboardActions';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const isLoading = useSelector((state) => state.expenses.isLoading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const totalByCategoryChartData = useSelector(
    (state) => state.charts.totalByCategoryChartData
  );

  useEffect(() => {
    dispatch(getExpenses());
    dispatch(getTotalCost())
    dispatch(getTotalByCategory());
  }, [dispatch]);

  if(!isAuthenticated) {
    return <Redirect to="/"/>
  }

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="dashboard">
          <DashboardActions />
          <div className="dashboard-content">
            <ExpenseList expenses={expenses} />
            <TotalByCategoryChart
              totalByCategoryChartData={totalByCategoryChartData}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
