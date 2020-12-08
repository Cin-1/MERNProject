import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/Proyectos/ProyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;
  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir Hosting", estado: false },
    { nombre: "Elegir colores", estado: true },
    { nombre: "Elegir plataformas de pago", estado: false },
  ];
  if (proyecto === null) return <h2>Selecciona un proyecto</h2>;
  const onEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  const [proyectoActual] = proyecto;
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">No hay Tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
        <button type="button" className="btn btn-eliminar" onClick={onEliminar}>
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
