import {v4 as uuid} from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './actionTypes';

export const setAlert = (alertMessage, alertType, timeout = 3000) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { alertMessage, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
