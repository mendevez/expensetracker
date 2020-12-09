import { HIDE_MODAL, SHOW_MODAL } from './actionTypes';

export const showModal = (id, modalType) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: {id, modalType},
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
