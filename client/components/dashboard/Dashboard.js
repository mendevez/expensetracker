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
import {
  selectExpensesFilteredByName,
  selectLoading,
  selectTotalByCategoryChartData,
  selectTotalByMonthChartData,
} from '../../redux/selectors/expenseSelectors';

const Dashboard = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => selectExpensesFilteredByName(state));
  const isLoading = useSelector(selectLoading);
  const totalByCategoryChartData = useSelector(selectTotalByCategoryChartData);
  const totalCostByMonthChartData = useSelector(selectTotalByMonthChartData);

  useEffect(() => {
    dispatch(getTotalCostCurrentMonth());
    dispatch(getTotalCostCurrentWeek());
    dispatch(getExpenses());
    dispatch(getTotalCost());
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
              <ExpenseList expenses={expenses} />
            </div>
            <div className="dashboard-charts add-margin-y">
              <TotalByCategoryChart
                totalByCategoryChartData={totalByCategoryChartData}
              />
              <TotalCostByMonthChart
                totalCostByMonthChartData={totalCostByMonthChartData}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
