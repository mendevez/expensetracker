import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenses,
  getTotalCost,
  getTotalCostCurrentWeek,
} from '../../redux/actions/expenseActions';
import { getTotalByCategory } from '../../redux/actions/chartActions';
import { getTotalCostByMonth } from '../../redux/actions/chartActions';
import Spinner from '../layout/Spinner';
import TotalByCategoryChart from '../charts/TotalByCategoryChart';
import ExpenseList from '../expenses/ExpenseList';
import DashboardActions from './DashboardActions';
import TotalCostByMonthChart from '../charts/TotalCostByMonthChart';

const Dashboard = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  const isLoading = useSelector((state) => state.expenses.isLoading);
  const totalByCategoryChartData = useSelector(
    (state) => state.charts.totalByCategoryChartData
  );
  const totalCostByMonthChartData = useSelector(
    (state) => state.charts.totalCostByMonthChartData
  );

  useEffect(() => {
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
            <ExpenseList expenses={expenses} />

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
