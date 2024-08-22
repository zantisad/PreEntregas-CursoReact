import "./CardWidget.css"
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext/CartProvider";

const CardWidget = () => {
    const { cart } = useContext(CartContext);

    return(
        <>
            <div className="carrito">
            <i className="bi bi-cart carrito-icon">
                <span className="carrito-numero">0</span>
            </i>    
            </div>        
        </>
    )
}

export default CardWidget;