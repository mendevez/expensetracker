import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import chartReducer from './chartReducer';
import alertReducer from './alertReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  alerts: alertReducer,
  expenses: expenseReducer,
  charts: chartReducer,
  modal: modalReducer,
});

export default rootReducer;
