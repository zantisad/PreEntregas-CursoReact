import "./Portada.css";

import React from "react";
import { NavLink, Link } from "react-router-dom";

const Portada = () => {
  return (
    <div className="portada">
      <div className="portada-contenedor">
        <img
          className="portada-imagen"
          src="https://i.pinimg.com/originals/a4/29/2f/a4292fb06e15c8f288d3e3896665d52b.jpg"
          alt="Portada Pagina"
        />
      </div>
      <NavLink>
        <span className="portada-texto">VER PRODUCTO</span>
      </NavLink>
    </div>
  );
};

export default Portada;
