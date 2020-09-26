import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ReactDom from 'react-dom';
const Modal = ({ confirmAction, closeModal }) => {
  return (
    <div>
      <div onClick={closeModal} className="backdrop"></div>
      <div className="modal">
        <div className="modal-header">
          <FontAwesomeIcon size="5x" color="#ffd700" icon="times-circle" />
        </div>
        <h3 className="modal-title">Are you sure you want to remove?</h3>
        <div className="modal-buttons">
          <button onClick={confirmAction} className="btn-modal-button">
            Yes
          </button>
          <button onClick={closeModal} className="btn-modal-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
