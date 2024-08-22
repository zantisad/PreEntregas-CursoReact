import React from "react";
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ item }) => {

    return (
        <Link className="link" to={`/Item/${item.id}`}>
            <div key={item.id} className="card">
                <div className="img-container">
                    <img src={item.img} alt={item.nombre}/>
                </div>
                <h2 className="item-nombre">{item.nombre}</h2>
                <p className="item-precio">${item.precio}</p>
                <button className="item-agregar-carrito"><i className="bi bi-cart-plus"></i> Agregar al carrito</button>
            </div>
        </Link>
    )
}

export default Item