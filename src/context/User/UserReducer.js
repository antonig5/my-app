import { Get_Users, Get_Profile, Get_email } from "../type";

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
    case Get_email:
      return {
        ...state,
        selectEmail: payload,
      };

    default:
      return state;
  }
};
