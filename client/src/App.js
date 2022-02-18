import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import { store } from "Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
