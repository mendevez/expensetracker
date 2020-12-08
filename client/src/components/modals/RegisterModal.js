import React from 'react';

const RegisterModal = () => {
  return (
    <div className="modal">
      <div className="modal-header">
        <FontAwesomeIcon size="5x" color="#ffd700" icon="times-circle" />
      </div>
      <h3 className="modal-title">Are you sure you want to remove?</h3>
      <div className="modal-buttons">
        <button onClick={removeExpense} className="btn-modal-button">
          Yes
        </button>
        <button onClick={hideModal} className="btn-modal-button">
          No
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
