import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartProvider";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    addItems,
    isInCart,
    clearCart,
    getTotal,
    getTotalProducts,
    removeItem,
    totalOneProduct,
    buy,
    decreaseProduct,
    incrementProduct
  } = useContext(CartContext);
  return (
    <>
      <div className="products-in-cart">
        {cart.length === 0 ? (
          <p className="cart-no-products">
            Aún no hay productos en el carrito <i className="bi bi-emoji-frown"></i>
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.product.id} className="product-cart">
                <div className="product-cart-image">
                  <img src={item.product.img} alt="" />
                </div>
                <p className="carrito-nombre">{item.product.nombre}</p>
                <p className="strong">${totalOneProduct(item.product.id)}</p>
                <div className="quantity-product">
                  <i
                    onClick={() => decreaseProduct(item.product.id)}
                    className="bi bi-dash-square"
                  ></i>
                  <p>
                    <span className="strong">{item.quantity}</span>
                  </p>
                  <i 
                    onClick={() => incrementProduct(item.product.id)}
                    className="bi bi-plus-square"></i>
                </div>
                <a
                  className="delete-item"
                  onClick={() => removeItem(item.product.id)}
                >
                  <i className="bi bi-x-circle"></i>
                </a>
              </div>
            ))}
            <div className="cart-functions">
              <div className="cart-functions-botones">
                <button className="strong" onClick={() => clearCart()}>
                  Vaciar carrito
                </button>
                <Link to={"/checkout"}>Comprar</Link>
              </div>
              <div className="total-productos">
                <p className="strong">Productos: {getTotalProducts()}</p>
              </div>
              <div className="total-carrito">
                <p className="strong">Total: ${getTotal()}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
