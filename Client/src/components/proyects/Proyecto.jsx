import React, { useState, useContext } from "react";
import proyectoContext from "../../context/Proyectos/ProyectoContext";
import tareaContext from "../../context/tasks/TareaContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  const seleccionarProyecto = (id) => {
    proyectoActual(id);
    obtenerTareas(id);
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
