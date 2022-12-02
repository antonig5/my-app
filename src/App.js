import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserState from "./context/User/UserState";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";

import ResultError from "./ResultError";
import ResetPassword from "./pages/resetpassword/ResetPasword";
import Nodemail from "./pages/Nodemail/Nodemail";
import FormPass from "./pages/resetpassword/FormPass";
import Successfully from "./pages/SucessfullPass";

export default function App() {
  return (
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/" element={<Navbar />} />
          <Route path="/admin/*" element={<Navbar />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/reset/*" element={<Nodemail />} />
          <Route path="/reset/password/*" element={<FormPass />} />
          <Route path="/sucessfull" element={<Successfully />} />
          <Route path="*" element={<ResultError />} />
        </Routes>
      </BrowserRouter>
    </UserState>
  );
}
