import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  GET_EXPENSE,
  EDIT_EXPENSE,
  GET_TOTAL_BY_CATEGORY,
} from './actionTypes';
import api from '../../utils/api';
import history from '../../history';

export const getExpenses = () => async (dispatch) => {
  try {
    const response = await api.get('/expenses');

    dispatch({
      type: GET_EXPENSES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getExpense = (id) => async (dispatch) => {
  try {
    const response = await api.get(`/expenses/${id}`);

    dispatch({
      type: GET_EXPENSE,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addExpense = (formData) => async (dispatch) => {
  try {
    const response = await api.post('/expenses', formData);
    dispatch({
      type: ADD_EXPENSE,
      payload: response.data,
    });
    history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const editExpense = (id, formValues) => async (dispatch) => {
  try {
    const response = await api.put(`/expenses/${id}`, formValues);

    dispatch({
      type: EDIT_EXPENSE,
      payload: response.data,
    });
    history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const removeExpense = (id) => async (dispatch) => {
  try {
    await api.delete(`/expenses/${id}`);

    dispatch({
      type: REMOVE_EXPENSE,
      payload: id,
    });

  } catch (error) {
    console.log(error);
  }
};

export const getTotalByCategory = () => async (dispatch) => {

  try {
    const response = await api.get('expenses/total');

    dispatch({
      type: GET_TOTAL_BY_CATEGORY,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
