import React from "react";
import { Link } from "react-router-dom";

const Barra = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
  };
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Cinthia!</span>
      </p>
      <nav className="nav-principal">
        <Link to="/" onClick={handleClick}>
          Cerrar Sesión
        </Link>
      </nav>
    </header>
  );
};

export default Barra;
