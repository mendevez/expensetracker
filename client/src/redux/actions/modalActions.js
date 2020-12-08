import { HIDE_MODAL, SHOW_MODAL } from './actionTypes';

export const showModal = (id) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: id,
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
