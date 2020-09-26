import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-list-item">
      <h3 className="expense-list-item-name">
        <NavLink className="link" to={`/${expense._id}`}>
          {expense.name}
        </NavLink>
      </h3>
      <div className="expense-list-item-cost">
        <h3>
          <FontAwesomeIcon icon="dollar-sign" size="xs" />
          {expense.cost}
        </h3>
        <NavLink to={`/edit/${expense._id}`} className="fa-icon">
          <FontAwesomeIcon icon="pen" color="green" />
        </NavLink>
        <NavLink to={`/remove/${expense._id}`} className="fa-icon">
          <FontAwesomeIcon icon="trash" color="red" />
        </NavLink>
      </div>
    </div>
  );
};
export default ExpenseItem;
