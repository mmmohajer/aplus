import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "Pages/Home";
import Register from "Pages/Register";
import Login from "Pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default AppRoutes;
