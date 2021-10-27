import { combineReducers } from 'redux';
import commonReducers from './common';
import boardReducers from './boards/boardReducers';

export default combineReducers({
  common: commonReducers,
  boards: boardReducers,
});