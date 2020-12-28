import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/actions/modalActions';
import { DELETE_MODAL } from '../modals/modalTypes';
import moment from 'moment';
const ExpenseItem = ({ expense }) => {
  const { _id, name, cost, description, createdAt } = expense;
  const dispatch = useDispatch();
  const [displayButtons, setDisplayButtons] = useState('hide-buttons');

  const openDeleteModal = () => {
    dispatch(showModal(expense, DELETE_MODAL));
  };

  return (
    <div
      className="expense-list-item"
      onMouseEnter={() => setDisplayButtons('show-buttons')}
      onMouseLeave={() => setDisplayButtons('hide-buttons')}
    >
      <div>
        <NavLink className="link" to={`/${_id}`}>
          <span className="expense-name"> {name}</span>
        </NavLink>
        <span>{moment(createdAt).format('DD/MM/YYYY')}</span>
      </div>
      <h3>
        <FontAwesomeIcon icon="dollar-sign" size="xs" />
        {cost}
      </h3>
      <div className="expense-list-item-description">
        <p>{description}</p>

        <div className={displayButtons}>
          <NavLink to={`/edit/${expense._id}`} className="btn-edit">
            <FontAwesomeIcon icon="pen" className="icon-edit" />
          </NavLink>
          <a href="#!" onClick={openDeleteModal} className="btn-delete">
            <FontAwesomeIcon icon="trash" className="icon-delete" />
          </a>
        </div>
      </div>
      <div className="expense-list-item-buttons"></div>
    </div>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
};
export default ExpenseItem;
