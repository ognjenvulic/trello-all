import { FETCH_USER } from "../../actions/types";

// eslint-disable-next-line
export default function (state = null, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;//just to be more convenient to treat false
    default:
      return state;
  }
}