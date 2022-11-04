import React, { useState } from "react"



function ItemCount({stock}){
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

    function agregarAlCarrito() {
        console.log("Agregado al Carrito");
    }
    return (
       <>
            <div className="menu menu-horizontal p-0">
                <br />
                <button className="btn btn-xs mx-2.5" onClick={Decrementar} >-</button>
                <br />
                <strong>{cantidad}</strong>
                <br />
                <button className="btn btn-xs mx-2.5" onClick={Incremetar} >+</button>
                <br />

            </div>
                <button className="btn btn-success" onClick={agregarAlCarrito} >Agregar al carrito</button>
        </>
    )
}
export default ItemCount;