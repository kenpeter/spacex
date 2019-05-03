import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { filterReducer } from './filter';

const reducers = combineReducers({
  productsReducer,
  filterReducer
});

export default reducers;
