import { useEffect, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider.jsx";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addItems } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const onAdd = (quantify) => {
    addItems(product, quantify);
    setShowItemCount(false)
  };

  return (
    <div className="item-detail">
      <div className="item-left">
        <div className="product-container-img">
          <img className="product-img" src={product.img} alt={product.nombre} />
        </div>
      </div>

      <div className="item-right">
        <h2 className="product-nombre">{product.nombre}</h2>
        <p className="product-precio">${product.precio}</p>
        <p className="product-stock">Stock: {product.stock}</p>
        {showItemCount ? (
          <ItemCount stock={product.stock} onAdd={onAdd} />
        ) : (
          <Link to="/Cart">Terminar compra</Link>
        )}
        <p className="product-descripcion">{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
