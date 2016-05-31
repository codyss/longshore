import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routeReducer } from 'redux-simple-router';

const reducers = {
  routing: routeReducer
};
const reducer = combineReducers(reducers);
const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;