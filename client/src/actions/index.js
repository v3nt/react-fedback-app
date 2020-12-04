// Actions
import axios from "axios";
import { FETCH_USER } from "./types";

// this is how we talk to the backend! Defined in parent server project.
// ReDUX THUNK will see a function returned and add dispact as a param to the return function(dispatch)
export const fetchUser = () => {
  return function (dispatch) {
    //  we want to dispatch an **after** after this request/promise is complete
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res }));
  };
};
