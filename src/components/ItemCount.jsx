import React, { useState } from "react"
import Button from "../components/Button/Button"


function ItemCount({stock, onAddToCart}){
    const [ cantidad , setCantidad] = useState(1);
    function Incremetar () {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    function Decrementar () {
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    // function agregarAlCarrito() {
    //     alert("Agregado al Carrito");
    // }
    return (
       <>
            <div className="menu menu-horizontal p-0">
                <br />
                <Button className="btn btn-xs mx-2.5" onClick={Decrementar} >-</Button>
                <br />
                <strong>{cantidad}</strong>
                <br />
                <Button className="btn btn-xs mx-2.5" onClick={Incremetar} >+</Button>
                <br />

            </div>
                <Button className="btn btn-success" onClick={() => onAddToCart(cantidad)} >Agregar al carrito</Button>
        </>
    )
}
export default ItemCount;