import {combineReducers} from 'redux';
import CounterReducer from './CounterReducer';
import HelloReducer from './HelloReducer';

export default combineReducers({
  count: CounterReducer,
  hello: HelloReducer,
});
