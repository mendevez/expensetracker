import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/actions/modalActions';
import { DELETE_MODAL } from '../modals/modalTypes';
const ExpenseItem = ({ expense }) => {
  const { _id, name, cost } = expense;
  const dispatch = useDispatch();
  const openDeleteModal = () => {
    dispatch(showModal(expense, DELETE_MODAL));
  };

  return (
    <div className="expense-list-item">
      <div className="expense-list-item-details">
        <NavLink className="link" to={`/${_id}`}>
          {name}
        </NavLink>
        <h3>
          <FontAwesomeIcon icon="dollar-sign" size="xs" />
          {cost}
        </h3>
      </div>
      <div className="expense-list-item-buttons">
        <NavLink to={`/edit/${expense._id}`} className="btn-edit">
          <FontAwesomeIcon icon="pen" className="icon-edit" />
        </NavLink>
        <button onClick={openDeleteModal} className="btn-delete">
          <FontAwesomeIcon icon="trash" className="icon-delete" />
        </button>
      </div>
    </div>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
};
export default ExpenseItem;
