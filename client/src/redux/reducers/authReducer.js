import {
  REGISTER_USER,
  LOGIN_USER,
  LOAD_USER,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
      };
    case LOGIN_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.data,
      };
    default:
      return state;
  }
};
