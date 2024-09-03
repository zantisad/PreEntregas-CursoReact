import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItems = (product, quantity) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + quantity,
                  item.product.stock
                ),
              }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.product.id === productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalOneProduct = (productId) => {
    const producto = cart.find((item) => item.product.id === productId);
    return producto.quantity * producto.product.precio;
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.product.precio * item.quantity;
    }, 0);
  };

  const getTotalProducts = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const decreaseProduct = (productId) => {
    // Busca el producto en el carrito
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : 1, // No permitir que la cantidad sea menor que 1
        };
      }
      return item;
    });

    // Actualiza el estado del carrito con el carrito modificado
    setCart(updatedCart);
  };

  const incrementProduct = (productId) => {
    // Busca el producto en el carrito
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        return {
          ...item,
          quantity:
            item.quantity < item.product.stock
              ? item.quantity + 1
              : item.product.stock, // No permitir que la cantidad sea menor que 1
        };
      }
      return item;
    });

    // Actualiza el estado del carrito con el carrito modificado
    setCart(updatedCart);
  };

  const buy = () => {
    {
      cart.length === 0
        ? alert("Lo siento, no hay productos en el carrito")
        : alert("Gracias por tu compra");
      clearCart();
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItems,
        isInCart,
        clearCart,
        getTotal,
        getTotalProducts,
        removeItem,
        buy,
        totalOneProduct,
        decreaseProduct,
        incrementProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
