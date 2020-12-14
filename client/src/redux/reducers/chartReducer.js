import { GET_TOTAL_BY_CATEGORY, REMOVE_EXPENSE } from '../actions/actionTypes';

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
