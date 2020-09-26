import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getExpense, editExpense } from '../../redux/actions/expenseActions';
import Spinner from '../layout/Spinner';
import ExpenseForm from './ExpenseForm';
const EditExpense = ({ match, expense, getExpense, editExpense }) => {
  const id = match.params.id;

  useEffect(() => {
    getExpense(id);
  }, [getExpense, id]);

  const onSubmit = (data) => {
    editExpense(id, data);
  };

  if (!expense) {
    return <Spinner />;
  }

  return <ExpenseForm initialValues={expense} onSubmit={onSubmit} />;
};

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getExpense, editExpense })(
  EditExpense
);
