import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
  // null for first call. ie no idea if user is logged in.
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
