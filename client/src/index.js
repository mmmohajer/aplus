import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./assets/styles/main.scss";
import AppRoutes from "./AppRoutes";
import { store } from "Store";

ReactDOM.render(
  // <BrowserRouter basename="/dist/">
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app")
);
