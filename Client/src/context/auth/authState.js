import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import clienteAxios from "../../config/axios";
import authToken from "../../config/token";

import {
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const registrarUsuario = async (datos) => {
    try {
      const rta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({ type: REGISTRO_EXITOSO, payload: rta.data });
      usuarioAuth();
    } catch (error) {
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({ type: REGISTRO_ERROR, payload: alerta });
    }
  };

  const usuarioAuth = async () => {
    const token = localStorage.getItem("token");
    console.log("state", token);
    if (token) {
      authToken(token);
    }
    try {
      const rta = await clienteAxios.get("/api/auth");
      dispatch({ type: OBTENER_USUARIO, payload: rta.data.usuario });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: LOGIN_ERROR });
    }
  };
  const iniciarSesion = async (datos) => {
    try {
      const rta = await clienteAxios.post("/api/auth", datos);
      dispatch({ type: LOGIN_EXITOSO, payload: rta.data });
      usuarioAuth();
    } catch (error) {
      console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({ type: LOGIN_ERROR, payload: alerta });
    }
  };
  const cerrarSesion = async () => {
    dispatch({ type: CERRAR_SESION });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSesion,
        usuarioAuth,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
