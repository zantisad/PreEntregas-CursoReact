import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider";
import { Toaster, toast } from "sonner";

const Item = ({ item }) => {
  const [quantity, setQuantiy] = useState(1);

  const { addItems } = useContext(CartContext);

  const onAdd = (quantify, event) => {
    event.stopPropagation();
    event.preventDefault();
    addItems(item, quantify);
    toast.success("Producto agregado al carrito");
  };

  return (
    <Link className="link" to={`/Item/${item.id}`}>
      <div key={item.id} className="card">
        <div className="img-container">
          <img src={item.img} alt={item.nombre} />
        </div>
        <h2 className="item-nombre">{item.nombre}</h2>
        <p className="item-precio">${item.precio}</p>
        <button
          onClick={(event) => onAdd(quantity, event)}
          className="item-agregar-carrito"
        >
          <i className="bi bi-cart-plus"></i> Agregar al carrito
        </button>
      </div>
    </Link>
  );
};

export default Item;
