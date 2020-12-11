import { HIDE_MODAL, SHOW_MODAL } from './actionTypes';

export const showModal = (data, modalType) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: { data, modalType },
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
