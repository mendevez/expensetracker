import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer';
import chartReducer from './chartReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
  charts: chartReducer,
  modal: modalReducer,
});

export default rootReducer;
