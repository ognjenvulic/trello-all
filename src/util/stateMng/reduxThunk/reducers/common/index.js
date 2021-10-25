import { combineReducers } from 'redux';
import authReducers from './authReducers';
import boardReducers from './boardReducers';

export default combineReducers({
  authUser: authReducers,
  boards: boardReducers,
});