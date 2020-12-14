import api from '../../utils/api';
import { REGISTER_USER, LOGIN_USER } from './actionTypes';
import { hideModal } from './modalActions';
import history from '../../history';

export const loginWithUserNameAndPassword = (formData) => async (dispatch) => {
  try {
    const response = await api.post('/auth/login', formData);
    dispatch({
      type: LOGIN_USER,
      payload: response.data,
    });
    dispatch(hideModal());
    history.push('/dashboard');
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
    history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};
