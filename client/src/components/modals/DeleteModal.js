import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modalActions';
import { removeExpense } from '../../redux/actions/expenseActions';
const DeleteModal = ({ removeExpense, hideModal, expenseId }) => {
  const removeCurrentExpense = () => {
    hideModal();
    removeExpense(expenseId);
  };
  return (
    <div className="modal">
      <div className="modal-header">
        <FontAwesomeIcon size="5x" color="#ffd700" icon="times-circle" />
      </div>
      <h3 className="modal-title">Are you sure you want to remove?</h3>
      <div className="modal-buttons">
        <button onClick={removeCurrentExpense} className="btn-modal-button">
          Yes
        </button>
        <button onClick={hideModal} className="btn-modal-button">
          No
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenseId: state.modal.data,
  };
};

export default connect(mapStateToProps, { removeExpense, hideModal })(
  DeleteModal
);
