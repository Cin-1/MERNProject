import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import { TAREAS_PROYECTO } from "../../types/index";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Hosting", estado: false, proyectoId: 2 },
      { nombre: "Elegir colores", estado: true, proyectoId: 3 },
      { nombre: "Elegir plataformas de pago", estado: false, proyectoId: 4 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Hosting", estado: false, proyectoId: 2 },
      { nombre: "Elegir colores", estado: true, proyectoId: 3 },
      { nombre: "Elegir plataformas de pago", estado: false, proyectoId: 4 },
    ],
  };
  const [state, dispatch] = useReducer(TareaReducer, initialState);
  const obtenerTareas = (proyectoId) => {
    dispatch({ type: TAREAS_PROYECTO, payload: proyectoId });
  };
  return (
    <TareaContext.Provider value={{ tareas: state.tareas, obtenerTareas }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
