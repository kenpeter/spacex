import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

/**
 * Create Store with middleware
 * @type {Store}
 */
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
