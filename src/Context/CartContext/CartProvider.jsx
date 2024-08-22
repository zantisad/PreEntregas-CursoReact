import React, { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    const addItems = (product, quantity) => {
        setCart([...cart, {product, quantity}])
    }

    const isInCart = () => {

    }

    const clearCart = () => {

    }

    const getTotal = () => {

    }

    const getTotalProducts = () => {

    }

    const removeItem = () => {

    }

    const buy = () => {

    }



    return (
        <CartContext.Provider value={{cart, addItems, isInCart, clearCart, getTotal, getTotalProducts, removeItem, buy}}>
            {children}
        </CartContext.Provider>
    )
}