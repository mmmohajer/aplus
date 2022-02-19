import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "basedesign-iswad/dist/style.js";

import "Styles/main.scss";
import App from "./App";
import { store } from "Store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
