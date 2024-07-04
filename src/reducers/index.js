import { combineReducers } from 'redux';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  invoices: invoiceReducer
  // Add other reducers here
});

export default rootReducer;
