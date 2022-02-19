import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import AppRoutes from "./AppRoutes";
import Loading from "Components/Loading";

function App() {
  const loading = useSelector((state) => state.loading);
  return (
    <BrowserRouter>
      {loading && <Loading />}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
