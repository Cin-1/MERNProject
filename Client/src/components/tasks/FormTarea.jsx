import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/Proyectos/ProyectoContext";
import tareaContext from "../../context/tasks/TareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  const tareasContext = useContext(tareaContext);
  const {
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
    actualizarTarea,
  } = tareasContext;
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  const { nombre } = tarea;

  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({ nombre: "" });
    }
  }, [tareaseleccionada]);

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    guardarTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    if (tareaseleccionada === null) {
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      actualizarTarea(tarea);
    }

    obtenerTareas(proyectoActual.id);
    guardarTarea({ nombre: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            tipe="text"
            placeholder="Nombre Tarea..."
            className="input-text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio.</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
