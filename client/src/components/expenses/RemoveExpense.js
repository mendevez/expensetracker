import React from 'react';
import Modal from '../modal/Modal';
import { removeExpense } from '../../redux/actions/expenseActions';
import { connect } from 'react-redux';
import history from '../../history';

const RemoveExpense = ({match, removeExpense}) => {
  const id = match.params.id;
  const closeModal = () => {
    history.push('/dashboard');
  };

  const deleteExpense = () => {
    removeExpense(id);
  };

  return (
    <div>
      <Modal closeModal={closeModal} confirmAction={deleteExpense} />
    </div>
  );
};

export default connect(null, { removeExpense })(RemoveExpense);
