import React, { useContext } from "react";
import tareaContext from "../../context/tasks/TareaContext";
import proyectoContext from "../../context/Proyectos/ProyectoContext";
import Proyecto from "../proyects/Proyecto";

const Tarea = ({ tarea }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;
  const [proyectoactual] = proyecto;
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoactual.id);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
