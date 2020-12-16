import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExpense, editExpense } from '../../redux/actions/expenseActions';
import Spinner from '../layout/Spinner';
import ExpenseForm from './ExpenseForm';
const EditExpense = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expenses[id]);
  const title = 'Edit expense';

  useEffect(() => {
    dispatch(getExpense(id));
  }, [id, dispatch]);

  const onSubmit = (data) => {
    dispatch(editExpense(id, data));
  };

  if (!expense) {
    return <Spinner />;
  }

  return (
    <ExpenseForm initialValues={expense} onSubmit={onSubmit} title={title} />
  );
};

export default EditExpense;
