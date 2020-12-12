import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import clienteAxios from "../../config/axios";

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTULIZAR_TAREA,
} from "../../types/index";

const TareaState = (props) => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null,
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  const obtenerTareas = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/tareas", {
        params: { proyecto },
      });
      console.log(resultado.data.tareas);
      dispatch({ type: TAREAS_PROYECTO, payload: resultado.data.tareas });
    } catch (error) {
      console.log(error);
    }
  };
  const agregarTarea = async (tarea) => {
    try {
      await clienteAxios.post("/api/tareas", tarea);
      dispatch({ type: AGREGAR_TAREA, payload: tarea });
    } catch (error) {
      console.log(error);
    }
  };
  const validarTarea = () => {
    dispatch({ type: VALIDAR_TAREA });
  };
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } });
      dispatch({ type: ELIMINAR_TAREA, payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarTarea = async (tarea) => {
    console.log(tarea);
    try {
      const resultado = await clienteAxios.put(
        `/api/tareas/${tarea._id}`,
        tarea
      );
      console.log(resultado);
      dispatch({ type: ACTULIZAR_TAREA, payload: resultado.data.tarea });
    } catch (error) {
      console.log(error);
    }
  };
  const guardarTareaActual = (tarea) => {
    dispatch({ type: TAREA_ACTUAL, payload: tarea });
  };

  return (
    <TareaContext.Provider
      value={{
        tareaseleccionada: state.tareaseleccionada,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
