import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../redux/actions/expenseActions';
import ExpenseForm from './ExpenseForm';

const AddExpense = ({ addExpense }) => {
  const expense = { cost: '', description: '', name: '', category: '' };

  const onSubmit = async (data) => {
    addExpense(data);
  };

  return (
    <div>
      <ExpenseForm initialValues={expense} onSubmit={onSubmit} />
    </div>
  );
};
export default connect(null, { addExpense })(AddExpense);
