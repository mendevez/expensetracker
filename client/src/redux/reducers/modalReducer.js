import { HIDE_MODAL, SHOW_MODAL } from '../actions/actionTypes';

const initialState = {
  showModal: false,
  data: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return { ...state, showModal: true, data: payload };

    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};
