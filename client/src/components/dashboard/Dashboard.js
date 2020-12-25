import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenses,
  getTotalCost,
  getTotalCostCurrentWeek,
  getTotalCostCurrentMonth,
} from '../../redux/actions/expenseActions';
import { getTotalByCategory } from '../../redux/actions/chartActions';
import { getTotalCostByMonth } from '../../redux/actions/chartActions';
import Spinner from '../layout/Spinner';
import TotalByCategoryChart from '../charts/TotalByCategoryChart';
import ExpenseList from '../expenses/ExpenseList';
import DashboardActions from './DashboardActions';
import TotalCostByMonthChart from '../charts/TotalCostByMonthChart';
import SearchBar from './SearchBar';
import { selectLoading } from '../../redux/selectors/expenseSelectors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getTotalCostCurrentWeek());
    dispatch(getExpenses());
    dispatch(getTotalCost());
    dispatch(getTotalCostCurrentMonth());
    dispatch(getTotalCostByMonth());
    dispatch(getTotalByCategory());
  }, [dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="dashboard">
          <DashboardActions />
          <div className="dashboard-content">
            <div className="expense-list-wrapper  add-box-shadow">
              <h1 className="expense-list-title">Expenses</h1>
              <SearchBar />
              <ExpenseList />
            </div>
            <div className="dashboard-charts">
              <TotalByCategoryChart />
              <TotalCostByMonthChart />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
