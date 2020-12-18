import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  GET_EXPENSE,
  EDIT_EXPENSE,
  GET_TOTAL_COST,
  GET_TOTAL_COST_CURRENT_WEEK,
} from './actionTypes';
import api from '../../utils/api';
import history from '../../history';
import { hideModal } from './modalActions';
import { getTotalCostByMonth } from './chartActions';

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

export const removeExpense = (expense) => async (dispatch) => {
  const { _id } = expense;
  try {
    await api.delete(`/expenses/${_id}`);

    dispatch({
      type: REMOVE_EXPENSE,
      payload: expense,
    });
    dispatch(getTotalCostByMonth());
    dispatch(hideModal());
    dispatch(getTotalCostCurrentWeek());
  } catch (error) {
    console.log(error);
  }
};

export const getTotalCost = () => async (dispatch) => {
  try {
    const response = await api.get('expenses/total');

    dispatch({
      type: GET_TOTAL_COST,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getTotalCostCurrentWeek = () => async (dispatch) => {
  try {
    const response = await api.get('expenses/totalcurrentweek');
    dispatch({
      type: GET_TOTAL_COST_CURRENT_WEEK,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
