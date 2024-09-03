import "./CardWidget.css"
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider";

const CardWidget = () => {
    const { cart, getTotalProducts } = useContext(CartContext);

    return(
        <>
            <div className="carrito">
            <i className="bi bi-cart carrito-icon">
                <span className="carrito-numero">{getTotalProducts()}</span>
            </i>    
            </div>        
        </>
    )
}

export default CardWidget;