// redux data layer
//
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//
import reducers from "./reducers";

import App from "./components/App";

// () mean invoke te function
const store = createStore(reducers, {}, applyMiddleware());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
