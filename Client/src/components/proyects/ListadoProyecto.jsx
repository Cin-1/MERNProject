import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/Proyectos/ProyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertaContext from "../../context/alertas/alertaContext";

const ListadoProyectos = () => {
  const alertaContext = useContext(AlertaContext);
  const { mostrarAlerta } = alertaContext;

  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos, mensaje } = proyectosContext;
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);

  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;
  return (
    <ul className="listado-proyectos">
      {
        // {alerta ? (
        //   <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
        // ) : null}
      }

      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
