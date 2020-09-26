import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getExpenses } from '../../redux/actions/expenseActions';
import Spinner from '../layout/Spinner';
import ExpenseItem from './ExpenseItem';
import { NavLink } from 'react-router-dom';


const Dashboard = ({ getExpenses, expenses: { expenses, isLoading } }) => {
  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="dashboard add-box-shadow">
          <div className="expense-list">
            <h1>Expenses</h1>
            {expenses &&
              expenses.map((expense) => {
                return <ExpenseItem key={expense._id} expense={expense} />;
              })}
          </div>
          <div className="dashboard-options">
            <NavLink className="btn-dashboard-button" to="/add">
              Add New Expense
            </NavLink>
            <NavLink className="btn-dashboard-button" to="/dashboard">
              View Chart
            </NavLink>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps, { getExpenses })(Dashboard);
