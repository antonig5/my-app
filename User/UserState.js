import React, { useReducer } from "react";
import UseReducer from "./UserReducer";
import UseContext from "./UserContext";

const UserState = (props) => {
  const InicialState = {
    users: [],
    selectUser: null,
  };
  const [state, dispatch] = useReducer(UseReducer, InicialState);
  const getUsers = () => {
    const res = fetch("http://localhost:3050/usuario")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const getProfiles = (id) => {
    const res = fetch("http://localhost:3050/usuario/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <UseContext.Provider
      value={{
        users: state.users,
        selectUser: state.selectUser,
        getUsers,
        getProfiles,
      }}
    >
      {props.children}
    </UseContext.Provider>
  );
};

export default UserState;
