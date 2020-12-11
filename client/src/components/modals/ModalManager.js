import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from './DeleteModal';
import RegisterModal from './RegisterModal';
import { DELETE_MODAL, LOGIN_MODAL, REGISTER_MODAL } from './modalTypes';
import { hideModal } from '../../redux/actions/modalActions';
import LoginModal from './LoginModal';

const ModalManager = () => {
  const openModal = useSelector((state) => state.modal.showModal);
  const modalType = useSelector((state) => state.modal.modalType);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideModal());
  };

  if (!openModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={handleClick} className="backdrop"></div>
      {modalType === DELETE_MODAL && <DeleteModal />}
      {modalType === REGISTER_MODAL && <RegisterModal />}
      {modalType === LOGIN_MODAL && <LoginModal />}
    </Fragment>,
    document.getElementById('portal')
  );
};

export default ModalManager;
