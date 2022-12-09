import { Get_Users, Get_Profile, Get_email, Get_Novedad } from "../type";

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
    case Get_Novedad:
      return {
        ...state,
        novedades: payload,
      };

    default:
      return state;
  }
};
