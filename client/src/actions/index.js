// Actions
import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  // we use FETCH_USER as its part of the user model.
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

// super refactor
// export const fetchUser = () => async (dispatch) =>
//   dispatch({
//     type: FETCH_USER,
//     payload: await axios.get("/api/current_user"),
//   });

// old version,
// this is how we talk to the backend! Defined in parent server project.
// ReDUX THUNK will see a function returned and add dispact as a param to the return function(dispatch)
// refactor #1, you can remove the { and };
// #2 remove 'function' and add '=>' after '(dispatch)'
// #3 remove .then((res) => dispatch({ type: FETCH_USER, payload: res }))' with 'dispatch( obj )'
//
// export const fetchUser = () => {
//     return function (dispatch) {
//       //  we want to dispatch an **after** after this request/promise is complete
//       axios
//         .get("/api/current_user")
//         .then((res) => dispatch({ type: FETCH_USER, payload: res }));
//     };
//   };
