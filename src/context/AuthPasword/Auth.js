import React, { useContext, useState, useEffect, createContext } from "react";

const Auth = createContext();

export function useAuth() {
  return useContext(Auth);
}

export function AuthProvider(props) {
  const [currenUser, setCurrenUser] = useState();
  const [loading, setLoading] = useState();

  const signup = (email, password, usuario) => {
    fetch("http://localhost:3050/auth/register", {
      method: "POST",
      body: JSON.stringify({
        correo: email,
        clave: password,
        usuario: usuario,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  const login = (usuario, clave, correo) => {
    fetch("http://localhost:3050/auth/login", {
      method: "POST",
      body: JSON.stringify({
        correo: correo,
        clave: clave,
        usuario: usuario,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  function logout() {
    return signup();
  }

  const resetPassword = () => {};
}
