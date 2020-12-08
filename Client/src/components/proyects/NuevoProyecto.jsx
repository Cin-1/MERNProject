import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/Proyectos/ProyectoContext";

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarForm,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });
  const { nombre } = proyecto;

  const onSubmitProyecto = (e) => {
    e.preventDefault();
    if (nombre === "") {
      mostrarError();
      return;
    }
    agregarProyecto(proyecto);
    guardarProyecto({
      nombre: "",
    });
  };
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarForm()}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nuevo Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}{" "}
    </Fragment>
  );
};

export default NuevoProyecto;
