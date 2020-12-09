import React, { useReducer } from "react";
import proyectoContext from "./ProyectoContext";
import proyectoReducer from "./ProyectoReducer";
import { v4 as uuid } from "uuid";
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de Sitio Web" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
  };
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarForm = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();
    dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
  };
  const mostrarError = () => {
    dispatch({ type: VALIDAR_FORMULARIO });
  };
  const proyectoActual = (proyectoId) => {
    dispatch({ type: PROYECTO_ACTUAL, payload: proyectoId });
  };
  const eliminarProyecto = (proyectoId) => {
    dispatch({ type: ELIMINAR_PROYECTO, payload: proyectoId });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarForm,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};
export default ProyectoState;
