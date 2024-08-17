import React from 'react'
import { NavLink, Link } from "react-router-dom";

const Portada = () => {
    return (
        <div className='portada'>

            <div className="portada-contenedor">
                <div className="portada-imagen">
                    <img src="https://i.pinimg.com/originals/a4/29/2f/a4292fb06e15c8f288d3e3896665d52b.jpg" alt="Portada Pagina" />
                </div>
                <div className="portada-texto">
                    <NavLink className=''>IR AL PRODUCTO</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Portada