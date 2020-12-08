import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import DeleteModal from './DeleteModal';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modalActions';

const Modal = ({ hideModal, modal }) => {
  if (!modal) {
    return null;
  }
  return ReactDOM.createPortal(
    <Fragment>
      <div onClick={hideModal} className="backdrop"></div>
      <DeleteModal />
    </Fragment>,
    document.getElementById('portal')
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal.showModal,
  };
};

export default connect(mapStateToProps, { hideModal })(Modal);
