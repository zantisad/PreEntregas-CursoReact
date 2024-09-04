import React from "react";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => {
    setCantidad((prevCantidad) =>
      prevCantidad < stock ? prevCantidad + 1 : stock
    );
  };

  const decrementar = () => {
    setCantidad((prevCantidad) => (prevCantidad > 1 ? prevCantidad - 1 : 1));
  };

  return (
    <>
      <div className="product-cantidades">
        <p className="product-contador">{cantidad}</p>
        <button className="incrementar" onClick={incrementar}> + </button>
        <button className="decrementar" onClick={decrementar}> - </button>
         <button
          onClick={stock ? () => onAdd(cantidad) : console.log("No hay mas stock")}
          className="product-agregar-carrito"><i className="bi bi-cart-plus"></i> Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
