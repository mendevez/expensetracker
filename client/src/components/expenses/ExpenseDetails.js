import React from 'react';
import { useEffect } from 'react';
import { getExpense } from '../../redux/actions/expenseActions';
import { connect } from 'react-redux';
import moment from 'moment';
import Spinner from '../layout/Spinner';

const ExpenseDetails = ({ getExpense, expense, match }) => {
  const id = match.params.id;

  useEffect(() => {
    getExpense(id);
  }, [getExpense, id]);

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
const mapStateToProps = (state,ownProps) => ({
  expense: state.expenses[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getExpense })(ExpenseDetails);
