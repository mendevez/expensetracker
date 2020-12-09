import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import DeleteModal from './DeleteModal';
import RegisterModal from './RegisterModal';
import { DELETE_MODAL, LOGIN_MODAL, REGISTER_MODAL } from './modalTypes';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modalActions';
import LoginModal from './LoginModal';

const ModalManager = ({ hideModal, openModal, modalType }) => {
  if (!openModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={hideModal} className="backdrop"></div>
      {modalType === DELETE_MODAL && <DeleteModal />}
      {modalType === REGISTER_MODAL && <RegisterModal />}
      {modalType === LOGIN_MODAL && <LoginModal />}
    </Fragment>,
    document.getElementById('portal')
  );
};

const mapStateToProps = (state) => {
  return {
    openModal: state.modal.showModal,
    modalType: state.modal.modalType,
  };
};

export default connect(mapStateToProps, { hideModal })(ModalManager);
