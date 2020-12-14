import { REGISTER_USER, LOGIN_USER, LOAD_USER } from '../actions/actionTypes';

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
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGIN_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOAD_USER:
      return {
          ...state, 
          isAuthenticated: true,
          isLoading: false, 
          user: payload.data
      };
    default:
      return state;
  }
};
