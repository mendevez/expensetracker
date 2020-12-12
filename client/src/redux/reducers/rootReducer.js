import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer';
import chartReducer from './chartReducer';
const rootReducer = combineReducers({
  expenses: expenseReducer,
  charts: chartReducer,
  modal: modalReducer,
});

export default rootReducer;
