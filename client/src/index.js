// redux data layer
//
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
//

import App from "./components/App";
import reducers from "./reducers";

// testing for backend routes
import axios from "axios";
window.axios = axios;

// Testing - for use in console.
// const survey = {
//   title: "mytitle",
//   subject: "my subject 22222",
//   body: "here is the body!",
//   recipients: "mrdpcrabbe@gmail.com",
// };
// axios.post("/api/surveys", survey);
// so this talks directly to surveyRoutes

// () means invoke the function
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE KEY", process.env.REACT_APP_STRIPE_KEY);
console.log("Env is", process.env.NODE_ENV);
