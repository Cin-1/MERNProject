import React, { useContext, useEffect } from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tasks/FormTarea";
import ListadoTareas from "../tasks/ListadoTareas";
import AuthContext from "../../context/auth/authContext";

const Proyectos = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAuth } = authContext;

  useEffect(() => {
    usuarioAuth();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
