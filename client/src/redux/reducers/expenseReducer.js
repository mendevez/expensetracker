import { GET_EXPENSES } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return action.payload;

    default:
      return state;
  }
};
