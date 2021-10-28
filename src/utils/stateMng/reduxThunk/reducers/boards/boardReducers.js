import { FETCH_BOARDS, FETCH_BOARD } from '../../actions/types';
import { addOrUpdateItemInArray, updateObject } from '../reducerHelpers';

// eslint-disable-next-line
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return action.payload || [];
    case FETCH_BOARD:
      return addOrUpdateItemInArray(state, action.payload.id, (existingObj) =>
        updateObject(existingObj, action.payload)
      );
    default:
      return state;
  }
}
