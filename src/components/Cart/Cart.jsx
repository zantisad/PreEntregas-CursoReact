import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <>
      <div>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cart.map((item) => (
            <div key={item.product.id}>
              <p>{item.product.nombre}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
