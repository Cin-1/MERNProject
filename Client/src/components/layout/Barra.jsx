import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Barra = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAuth, usuario, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAuth();
  }, []);
  const handleClick = () => {
    cerrarSesion();
  };
  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion btn-primario "
          onClick={handleClick}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default Barra;
