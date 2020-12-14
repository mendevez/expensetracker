import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  GET_EXPENSE,
  EDIT_EXPENSE,
  GET_TOTAL_BY_CATEGORY,
  GET_TOTAL_COST,
} from '../actions/actionTypes';

const initialState = {
  expenses: [],
  isLoading: true,
  totalByCategoryChartData: {},
  totalCost: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EXPENSES:
      return { ...state, expenses: payload.data, isLoading: false };

    case GET_EXPENSE:
      return { ...state, [payload.data._id]: payload.data, isLoading: false };

    case ADD_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.concat(payload.data),
        isLoading: false,
      };
    case EDIT_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense._id === payload.data._id
            ? {
                ...expense,
                name: payload.data.name,
                cost: payload.data.cost,
                description: payload.data.description,
              }
            : expense
        ),
        [payload.data._id]: { ...payload.data },
        isLoading: false,
      };
    case REMOVE_EXPENSE:
      const { _id, category, cost } = payload;
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense._id !== _id),
        totalByCategoryChartData: {
          ...state.totalByCategoryChartData,
          [category]: state.totalByCategoryChartData[category] - cost,
        },
        totalCost: state.totalCost - cost,
        isLoading: false,
      };
    case GET_TOTAL_COST:
      return {
        ...state,
        totalCost: payload.data.totalCost,
      };

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
