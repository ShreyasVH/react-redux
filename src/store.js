import { createStore } from 'redux';
import { combineReducers } from 'redux';
import CounterReducer from './reducers/CounterReducer';

const store = createStore(combineReducers({
  counter: CounterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;