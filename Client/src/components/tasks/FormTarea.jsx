import React, { useContext, useState } from "react";
import proyectoContext from "../../context/Proyectos/ProyectoContext";
import tareaContext from "../../context/tasks/TareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  const tareasContext = useContext(tareaContext);
  const {
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
  } = tareasContext;
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  const { nombre } = tarea;
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
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTarea(tarea);
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
            value="Agregar Tarea"
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
