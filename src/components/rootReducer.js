import { combineReducers } from 'redux';
import HomepageReducer from './_reducers/HomepageReducer';

const appReducer = combineReducers({
  HomepageReducer,
});

export default (state, action) => appReducer(state, action);
