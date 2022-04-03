import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "Pages/Home";
import Register from "Pages/Register";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default AppRoutes;
