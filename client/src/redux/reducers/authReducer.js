import { REGISTER_USER, LOGIN_USER } from '../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
