import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../redux/actions/expenseActions';
import ExpenseForm from './ExpenseForm';

const AddExpense = ({ addExpense }) => {
  const expense = { cost: '', description: '', name: '' };

  const onSubmit = async (data) => {
    addExpense(data);
  };

  return <ExpenseForm initialValues={expense} onSubmit={onSubmit} />;
};
export default connect(null, { addExpense })(AddExpense);
