import React, { useContext } from "react";
import proyectoContext from "../../context/Proyectos/ProyectoContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  if (proyecto === null) return null;
  const [proyectoActual] = proyecto;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            tipe="text"
            placeholder="Nombre Tarea..."
            className="input-text"
            name="nombre"
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
    </div>
  );
};

export default FormTarea;
