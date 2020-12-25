import api from '../../utils/api';
import {
  REGISTER_USER,
  LOGIN_USER,
  LOAD_USER,
  LOGOUT,
  UPDATE_MONTHLY_BUDGET,
} from './actionTypes';
import { hideModal } from './modalActions';
import { setAlert } from './alertActions';
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
    dispatch(setAlert(error.response.data.error, 'fail'));
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
    dispatch(setAlert('Login successful', 'success'));
  } catch (error) {
    dispatch(setAlert(error.response.data.error, 'fail'));
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
    dispatch(setAlert('Registered successfully', 'success'));
  } catch (error) {
    dispatch(setAlert(error.response.data.error, 'fail'));
  }
};

export const updateMonthlyBudget = (formData) => async (dispatch) => {
  try {
    const response = await api.post('/auth', formData);

    dispatch({
      type: UPDATE_MONTHLY_BUDGET,
      payload: response.data,
    });
    dispatch(hideModal());
  } catch (error) {}
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
