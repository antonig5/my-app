import React, { useReducer } from "react";
import UseReducer from "./UserReducer";
import userContext from "./UserContext";

const UserState = (props) => {
  const InicialState = {
    users: [],
    selectUser: null,
    selectEmail: [],
  };
  const [state, dispatch] = useReducer(UseReducer, InicialState);

  const verify = (data) => {
    dispatch({
      type: "Get_Users",
      payload: data,
    });
  };

  const reset = (data) => {
    dispatch({
      type: "Get_email",
      payload: data,
    });
  };

  const getUsers = (data) => {
    dispatch({
      type: "Get_Users",
      payload: data,
    });
  };

  const getProfiles = (id) => {
    fetch("http://localhost:3040/usuario/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    })
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
        reset,
        selectEmail: state.selectEmail,
        getProfiles,
        verify,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
