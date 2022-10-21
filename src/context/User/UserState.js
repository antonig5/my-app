import React, { useReducer } from "react";
import UseReducer from "./UserReducer";
import userContext from "./UserContext";

const UserState = (props) => {
  const InicialState = {
    users: [],
    selectUser: null,
  };
  const [state, dispatch] = useReducer(UseReducer, InicialState);
  const getUsers = () => {
    fetch("http://localhost:3050/auth/login", {
      method: "POST",
      body: {
        usuario: "pepe143",
        clave: "pepe041",
        correo: "pepe@yahoo.com2",
      },
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "Get_Users",
          payload: data,
        });
        console.log(data);
      });
  };
  const getProfiles = (id) => {
    fetch("http://localhost:3050/usuario/" + id)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "Get_Profile",
          payload: data,
        });
      });
  };

  return (
    <userContext.Provider
      value={{
        users: state.users,
        selectUser: state.selectUser,
        getUsers,
        getProfiles,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
