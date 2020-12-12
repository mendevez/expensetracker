import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../redux/actions/modalActions';
import { removeExpense } from '../../redux/actions/expenseActions';
const DeleteModal = () => {
  const expense = useSelector((state) => state.modal.data);
  const dispatch = useDispatch();

  const removeCurrentExpense = () => {
    dispatch(removeExpense(expense));
  };

  const closeModal = () => {
    dispatch(hideModal())
  }
  return (
    <div className="modal-delete">
      <div className="modal-delete-header">
        <FontAwesomeIcon size="5x" color="#ffd700" icon="times-circle" />
      </div>
      <h3 className="modal-delete-title">Are you sure you want to remove {expense.name}</h3>
      <div className="modal-delete-buttons">
        <button onClick={removeCurrentExpense} className="btn-modal">
          Yes
        </button>
        <button onClick={closeModal} className="btn-modal">
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
