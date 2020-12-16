import api from '../../utils/api';
import { GET_TOTAL_COST_BY_MONTH } from './actionTypes';

export const getTotalCostByMonth = () => async (dispatch) => {
  const response = await api.get('/expenses/totalbymonth');

  console.log(response.data);
  dispatch({
    type: GET_TOTAL_COST_BY_MONTH,
    payload: response.data,
  });
};
