import api from '../../utils/api';
import { REGISTER_USER, LOGIN_USER, LOAD_USER, LOGOUT } from './actionTypes';
import { hideModal } from './modalActions';
import setAuthenticationToken from '../../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthenticationToken(localStorage.token);
  }
  try {
    const response = await api.get('/auth');

    dispatch({
      type: LOAD_USER,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginWithUserNameAndPassword = (formData) => async (dispatch) => {
  try {
    const response = await api.post('/auth/login', formData);
    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
    dispatch(hideModal());
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

export const registerNewUser = (formData) => async (dispatch) => {
  try {
    const response = await api.post('/auth/register', formData);
    dispatch({
      type: REGISTER_USER,
      payload: response.data,
    });
    dispatch(hideModal());
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
