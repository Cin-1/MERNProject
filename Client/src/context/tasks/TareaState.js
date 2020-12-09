import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
} from "../../types/index";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Hosting", estado: false, proyectoId: 2 },
      { id: 2, nombre: "Elegir colores", estado: true, proyectoId: 3 },
      {
        id: 3,
        nombre: "Elegir plataformas de pago",
        estado: false,
        proyectoId: 4,
      },
      { id: 4, nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { id: 5, nombre: "Elegir Hosting", estado: false, proyectoId: 2 },
      { id: 6, nombre: "Elegir colores", estado: true, proyectoId: 3 },
      {
        id: 7,
        nombre: "Elegir plataformas de pago",
        estado: false,
        proyectoId: 4,
      },
    ],
    tareasproyecto: null,
    errortarea: false,
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);
  const obtenerTareas = (proyectoId) => {
    dispatch({ type: TAREAS_PROYECTO, payload: proyectoId });
  };
  const agregarTarea = (tarea) => {
    dispatch({ type: AGREGAR_TAREA, payload: tarea });
  };
  const validarTarea = () => {
    dispatch({ type: VALIDAR_TAREA });
  };
  const eliminarTarea = (id) => {
    dispatch({ type: ELIMINAR_TAREA, payload: id });
  };
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
