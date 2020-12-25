import React from 'react';
import ExpenseItem from './ExpenseItem';
import { useSelector} from 'react-redux';
import {selectExpensesByName} from '../../redux/selectors/expenseSelectors'

const ExpenseList = () => {
  const expenses = useSelector((state) => selectExpensesByName(state));
  return (
    <div className="expense-list add-margin-y">
      {expenses &&
        expenses.map((expense) => {
          return <ExpenseItem key={expense._id} expense={expense} />;
        })}
    </div>
  );
}


export default ExpenseList;
