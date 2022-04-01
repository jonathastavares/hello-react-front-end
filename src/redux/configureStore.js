import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './data/greeting';
// Import reducers here

const reducer = combineReducers({
  greetingReducer,

  // Add reducers here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
