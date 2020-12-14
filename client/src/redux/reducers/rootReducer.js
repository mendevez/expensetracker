import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import chartReducer from './chartReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
  charts: chartReducer,
  modal: modalReducer,
});

export default rootReducer;
