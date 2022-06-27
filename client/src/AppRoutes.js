import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'Pages/Home';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import ActivateUser from 'Pages/ActivateUser';
import ResetPassword from 'Pages/ResetPassword';
import Unknown404 from 'Pages/Unknown404';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/activate-user" element={<ActivateUser />}></Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route exact path="*" element={<Unknown404 />}></Route>
    </Routes>
  );
}

export default AppRoutes;
