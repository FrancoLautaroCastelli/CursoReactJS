import React, {useContext} from "react";
import cartContext from "../../storage/CartContext";




function CartView(){
    const {cart, removeItem, totalPriceInCart, clear} = useContext(cartContext);
    console.log("valor de cart: ",cart);
    // if (cart.length === 0) return <h1>Sin items en el carrito</h1>
    return (
        <div>
            
            {cart.map((cartItem) => (
                <div key={cartItem.id}>
                <img src={cartItem.imagen} alt={cartItem.title} />
                <h3>{cartItem.title}</h3>
                <h4>$ {cartItem.precio}</h4>
                <h4>Cantidad: {cartItem.count}</h4>
                <h4>Precio a pagar: {cartItem.count * cartItem.precio}</h4>
                <button onClick={()=> removeItem(cartItem.id)}>Quitar Producto</button>
              </div>
            ))};
            <h2 onClick={clear}>Vaciar carrito completo </h2>
            <h2>Total a pagar: $ {totalPriceInCart()}</h2>
        </div> 
    )
}

export default CartView;