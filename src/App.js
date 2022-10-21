import React from "react";
import Login from "./components/login";
import UserState from "./context/User/UserState";

export default function App() {
  return (
    <UserState>
      <Login />
    </UserState>
  );
}
