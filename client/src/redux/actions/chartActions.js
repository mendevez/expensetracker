import api from '../../utils/api';
import { GET_TOTAL_COST_BY_MONTH, GET_TOTAL_BY_CATEGORY } from './actionTypes';

export const getTotalCostByMonth = () => async (dispatch) => {
  const response = await api.get('/expenses/totalbymonth');

  dispatch({
    type: GET_TOTAL_COST_BY_MONTH,
    payload: response.data,
  });
};

export const getTotalByCategory = () => async (dispatch) => {
  try {
    const response = await api.get('expenses/totalbycategory');

    dispatch({
      type: GET_TOTAL_BY_CATEGORY,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
