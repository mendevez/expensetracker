import React from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list add-margin-y add-box-shadow">
      <h1>Expenses</h1>
      {expenses &&
        expenses.map((expense) => {
          return <ExpenseItem key={expense._id} expense={expense} />;
        })}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpenseList;
