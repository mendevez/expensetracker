import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import DeleteModal from '../expenses/DeleteModal';
import RegisterModal from '../auth/RegisterModal';
import UpdateMonthlyBudgetModal from '../auth/UpdateMonthlyBudgetModal';
import {
  DELETE_MODAL,
  LOGIN_MODAL,
  MONTHLY_BUDGET_MODAL,
  REGISTER_MODAL,
} from './modalTypes';
import { hideModal } from '../../redux/actions/modalActions';
import {
  selectModalType,
  selectShowModal,
} from '../../redux/selectors/modalSelectors';
import LoginModal from '../auth/LoginModal';

const ModalManager = () => {
  const openModal = useSelector((state) => selectShowModal(state));
  const modalType = useSelector((state) => selectModalType(state));
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
      {modalType === MONTHLY_BUDGET_MODAL && <UpdateMonthlyBudgetModal />}
    </Fragment>,
    document.getElementById('portal')
  );
};

export default ModalManager;
