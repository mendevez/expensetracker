import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  GET_EXPENSE,
  EDIT_EXPENSE,
} from '../actions/actionTypes';

const initialState = {
  expenses: [],
  isLoading: true,
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
      console.log(payload);
      return {
        ...state,
        // expenses: state.expenses.map((expense) =>
        //   expense._id === payload.data._id
        //     ? {
        //         ...expense,
        //         name: payload.data.name,
        //         cost: payload.data.cost,
        //         description: payload.data.description,
        //       }
        //     : expense
        // ),
        isLoading: false,
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== payload),
        isLoading: false,
      };
    default:
      return state;
  }
};