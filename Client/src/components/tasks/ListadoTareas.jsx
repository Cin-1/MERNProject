import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/Proyectos/ProyectoContext";
import tareaContext from "../../context/tasks/TareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;
  if (proyecto === null) return <h2>Selecciona un proyecto</h2>;
  const onEliminar = () => {
    eliminarProyecto(proyectoActual._id);
  };
  const [proyectoActual] = proyecto;
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li classNames="tarea">No hay Tareas</li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} className="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}{" "}
          </TransitionGroup>
        )}
        <button type="button" className="btn btn-eliminar" onClick={onEliminar}>
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
