import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  GET_EXPENSE,
  EDIT_EXPENSE,
  GET_TOTAL_COST,
  GET_TOTAL_COST_CURRENT_WEEK,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  expenses: [],
  isLoading: true,
  totalCostCurrentWeek: 0,
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
      const { _id, cost } = payload;
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense._id !== _id),
        totalCost: state.totalCost - cost,
        isLoading: false,
      };
    case GET_TOTAL_COST:
      return {
        ...state,
        totalCost: payload.data.total,
      };
    case GET_TOTAL_COST_CURRENT_WEEK:
      return {
        ...state,
        totalCostCurrentWeek: payload.data.total,
      };
    case LOGOUT:
      return {
        ...state,
        expenses: [],
        isLoading: true,
        totalCost: null,
      };

    default:
      return state;
  }
};
