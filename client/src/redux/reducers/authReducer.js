import {
  REGISTER_USER,
  LOGIN_USER,
  LOAD_USER,
  LOGOUT,
  UPDATE_MONTHLY_BUDGET,
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
        user: payload.user,
        isAuthenticated: true,
      };
    case LOGIN_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
      };
    case UPDATE_MONTHLY_BUDGET:
      return {
        ...state,
        user: { ...state.user, monthlyBudget: payload.data.monthlyBudget },
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
        user: payload.data,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
