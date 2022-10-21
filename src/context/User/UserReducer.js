import { Get_Users, Get_Profile } from "../type";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case Get_Users:
      return {
        ...state,
        users: payload,
      };
    case Get_Profile:
      return {
        ...state,
        selectUser: payload,
      };
    default:
      return state;
  }
};
