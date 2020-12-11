import React from 'react';
import { useEffect } from 'react';
import { getExpense } from '../../redux/actions/expenseActions';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Spinner from '../layout/Spinner';

const ExpenseDetails = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expenses[id]);
  useEffect(() => {
    dispatch(getExpense(id));
  }, [dispatch, id]);

  if (!expense) {
    return <Spinner />;
  }

  const { cost, name, createdAt, description } = expense;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{cost}</h3>
      <h3>{moment(createdAt).format('YYYY-MM-DD')}</h3>
      <h3>{description}</h3>
    </div>
  );
};

export default ExpenseDetails;
