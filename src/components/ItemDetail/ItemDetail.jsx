import React, { useEffect, useState } from 'react';
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {


  const [cantidad, setCantidad] = useState(0)

  const incrementar = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const decrementar = () => {
    setCantidad(prevCantidad => (prevCantidad > 0 ? prevCantidad - 1 : 0));
  };

  return (
    <div className='item-detail'>

      <div className="item-left">
        <div className="product-container-img">
          <img className='product-img' src={product.img} alt={product.nombre} />
        </div>
      </div>

      <div className="item-right">
        <h2 className="product-nombre">{product.nombre}</h2>

        <p className="product-precio">${product.precio}</p>

        <div className="product-cantidades">
          <p className="product-contador">{cantidad}</p>
          <button onClick={incrementar}>+</button>
          <button onClick={decrementar}>-</button>
          <p className="product-stock">Stock: {product.stock}</p>
        </div>
        <button className="product-agregar-carrito"><i className="bi bi-cart-plus"></i> Agregar al carrito</button>

        <p className="product-descripcion">{product.descripcion}</p>
      </div>
    </div>
  )
}

export default ItemDetail