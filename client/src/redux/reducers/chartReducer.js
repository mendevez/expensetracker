import {
  GET_TOTAL_BY_CATEGORY,
  GET_TOTAL_COST_BY_MONTH,
  REMOVE_EXPENSE,
} from '../actions/actionTypes';

const initialState = {
  totalByCategoryChartData: {},
  totalCostByMonthChartData: {},
  isLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOTAL_COST_BY_MONTH:
      return {
        ...state,
        totalCostByMonthChartData: payload.data,
      };

    case GET_TOTAL_BY_CATEGORY:
      return {
        ...state,
        totalByCategoryChartData: payload.data,
        isLoading: false,
      };
    case REMOVE_EXPENSE:
      const { cost, category } = payload;
      return {
        ...state,
        totalByCategoryChartData: {
          ...state.totalByCategoryChartData,
          [category]: state.totalByCategoryChartData[category] - cost,
        },
      };

    default:
      return state;
  }
};
