import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import modalReducer from './modalReducer'
const rootReducer = combineReducers({
  expenses: expenseReducer,
  modal: modalReducer
});

export default rootReducer;