import {
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case REGISTRO_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return state;
  }
};