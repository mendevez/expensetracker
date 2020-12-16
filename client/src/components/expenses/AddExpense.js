import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/actions/expenseActions';
import ExpenseForm from './ExpenseForm';

const AddExpense = () => {
  const expense = { cost: '', description: '', name: '', category: '' };
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(addExpense(data));
  };
  const title = "Add a new expense"

  return (
    <div> 
      
      <ExpenseForm title ={title} initialValues={expense} onSubmit={onSubmit} />
    </div>
  );
};

export default AddExpense
