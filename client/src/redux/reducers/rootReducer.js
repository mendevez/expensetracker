import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expenseReducer,
  modal: modalReducer,
});

export default rootReducer;
