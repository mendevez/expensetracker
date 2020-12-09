import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getExpenses,
  getTotalByCategory,
} from '../../redux/actions/expenseActions';
import Spinner from '../layout/Spinner';
import ExpenseItem from './ExpenseItem';
import { NavLink } from 'react-router-dom';
import ExpenseChart from './ExpenseChart';

const Dashboard = ({
  getExpenses,
  getTotalByCategory,
  expenses: { expenses, isLoading },
  data,
}) => {
  
  useEffect(() => {
    getExpenses();
    getTotalByCategory();
  }, [getExpenses, getTotalByCategory]);

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
            <ExpenseChart chartData={data} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  data: state.expenses.chartData,
  modal: state.modal.showModal,
  id: state.modal.data
});

export default connect(mapStateToProps, { getExpenses, getTotalByCategory })(
  Dashboard
);
