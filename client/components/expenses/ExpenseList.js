import React from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';

const ExpenseList = ({ expenses }) => {
    console.log('renderlist');

    return (
      <div className="expense-list add-margin-y">
        {expenses &&
          expenses.map((expense) => {
            return <ExpenseItem key={expense._id} expense={expense} />;
          })}
      </div>
    );
  }


ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpenseList;
