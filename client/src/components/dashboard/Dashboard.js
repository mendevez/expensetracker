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
  selectExpensesByName,
  selectLoading,
  selectTotalByCategoryChartData,
  selectTotalByMonthChartData,
  selectTotalCost,
  selectTotalCostForCurrentMonth,
  selectTotalCostForCurrentWeek,
} from '../../redux/selectors/expenseSelectors';

const Dashboard = () => {

  const dispatch = useDispatch();
  const expenses = useSelector((state) => selectExpensesByName(state));
  const isLoading = useSelector(selectLoading);
  const totalByCategoryChartData = useSelector(selectTotalByCategoryChartData);
  const totalCostByMonthChartData = useSelector(selectTotalByMonthChartData);
  const totalCost = useSelector(selectTotalCost);
  const totalCostForCurrentWeek = useSelector(selectTotalCostForCurrentWeek);
  const totalCostForCurrentMonth = useSelector(selectTotalCostForCurrentMonth);

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
          <DashboardActions
            totalCost={totalCost}
            totalCostForCurrentMonth={totalCostForCurrentMonth}
            totalCostForCurrentWeek={totalCostForCurrentWeek}
          />
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
