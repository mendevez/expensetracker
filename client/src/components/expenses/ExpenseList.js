import React from 'react';
import ExpenseItem from './ExpenseItem';

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

export default ExpenseList;
