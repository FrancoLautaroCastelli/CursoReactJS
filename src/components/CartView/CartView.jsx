import React, {useContext} from "react";
import { createBuyOrderFirestore } from "../../services/firebase";
import cartContext from "../../storage/CartContext";
import {useNavigate} from "react-router-dom"
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import BuyForm from "./BuyForm";



function CartView(){
    const {cart, removeItem, totalPriceInCart, clear} = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0) return <h1>Sin items en el carrito</h1>

    function createBuyOrder(userData) {
        const buyData={
            buyer :userData,
            items: cart,
            total: totalPriceInCart(),
            date:new Date()
       }
       createBuyOrderFirestore(buyData).then (orderId =>{
        clear();
        navigate(`/checkout/${orderId}`);
        alert(`Gracias por la compra, el identificador de tu orden de compra es: ${orderId}`)

       });
        
    }

    return (
        <FlexWrapper>
            <div>
                
                {cart.map((cartItem) => (
                    <div key={cartItem.id}>
                    <img src={cartItem.imagen} alt={cartItem.title} />
                    <h3 className="text-indigo-50">{cartItem.title}</h3>
                    <h4 className="text-indigo-50">$ {cartItem.precio}</h4>
                    <h4 className="text-indigo-50">Cantidad: {cartItem.count}</h4>
                    <h4 className="text-indigo-50">Precio a pagar por el item: {cartItem.count * cartItem.precio}</h4>
                    <button className="btn btn-error" onClick={()=> removeItem(cartItem.id)}>Quitar Producto</button>
                </div>
                ))}
                <button className="btn btn-warning" onClick={clear}>Vaciar carrito completo </button>
                {/* <div> 
                    <button className="btn btn-success" onClick={createBuyOrder}>Finalizar compra</button>
                </div> */}
                <h2 className="text-green-500">Total a pagar: $ {totalPriceInCart()}</h2>
                <BuyForm onSubmit={createBuyOrder}/>
            </div> 
        </FlexWrapper>
    )
}

export default CartView;