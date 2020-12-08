import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../redux/actions/modalActions';
const ExpenseItem = ({ expense, showModal }) => {
  const { _id, name, cost } = expense;
  const displayModal = () => {
    showModal(_id);
  };

  return (
    <div className="expense-list-item">
      <h3 className="expense-list-item-name">
        <NavLink className="link" to={`/${_id}`}>
          {name}
        </NavLink>
      </h3>
      <div className="expense-list-item-cost">
        <h3>
          <FontAwesomeIcon icon="dollar-sign" size="xs" />
          {cost}
        </h3>
        <NavLink to={`/edit/${_id}`} className="fa-icon">
          <FontAwesomeIcon icon="pen" color="green" />
        </NavLink>
        <button onClick={displayModal} className="btn-delete-button">
          <FontAwesomeIcon icon="trash" color="white" />
        </button>
      </div>
    </div>
  );
};
export default connect(null, { showModal })(ExpenseItem);
