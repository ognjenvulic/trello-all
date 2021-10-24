import { combineReducers } from 'redux';
import commonReducers from './common';

export default combineReducers({
  common: commonReducers
});