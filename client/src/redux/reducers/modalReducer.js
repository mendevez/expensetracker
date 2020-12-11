import { HIDE_MODAL, SHOW_MODAL, REMOVE_EXPENSE } from '../actions/actionTypes';

const initialState = {
  showModal: false,
  modalType: '',
  data: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        data: payload.data,
        modalType: payload.modalType,
      };

    case HIDE_MODAL:
      return initialState;
    case REMOVE_EXPENSE:
      return initialState;

    default:
      return state;
  }
};
