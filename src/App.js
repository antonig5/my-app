import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserState from "./context/User/UserState";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";

import ResultError from "./ResultError";
import ResetPassword from "./pages/resetpassword/ResetPasword";
import Nodemail from "./pages/Nodemail/Nodemail";
import FormPass from "./pages/resetpassword/FormPass";
import Successfully from "./pages/SucessfullPass";

import Novedad from "./components/Novedad";
import Vehiculos from "./pages/vehiculos/Vehiculos";

export default function App() {
  return (
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/reset/*" element={<Nodemail />} />
          <Route path="/reset/password/*" element={<FormPass />} />
          <Route path="/sucessfull" element={<Successfully />} />
          <Route path="/conductor" element={<Novedad />} />
          <Route path="/edit/:id" element={<Novedad />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="*" element={<ResultError />} />
        </Routes>
      </BrowserRouter>
    </UserState>
  );
}
