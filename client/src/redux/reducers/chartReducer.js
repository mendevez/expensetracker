import { GET_TOTAL_BY_CATEGORY } from '../actions/actionTypes';

const initialState = {
  totalByCategoryChartData: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOTAL_BY_CATEGORY:
      return {
        ...state,
        totalByCategoryChartData: payload.data,
        isLoading: false,
      };

    default:
      return state;
  }
};
