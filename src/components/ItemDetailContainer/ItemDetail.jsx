import React, {useState, useContext} from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from '../ItemCount';
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

function ItemDetail(props) {
  const [isInCart,setIsInCart] = useState(false);
  const {addToCart} = useContext(cartContext);
  
  function onAddToCart(count) {
    
    const itemForCart = {
      ...props.product,
      count,
    };
    addToCart(itemForCart);
    setIsInCart(true);
  }
  return (
    <FlexWrapper>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure><img src={props.product.imagen} alt="Album"/></figure>
              <div className="card-body">
                <h2 className="card-title">{props.product.title}</h2>
                <p>{props.product.descripcion}</p>
                
                
                <p>Precio del producto: ${props.product.precio}</p>
                <div className="card-actions justify-end">
                {!isInCart ? (
                  <ItemCount onAddToCart={onAddToCart}  stock={props.product.stock} />
                  ): (
                    <Link to="/cart">
                      <button className="btn btn-xs mx-2.5"> Ir al Carrito</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
    </FlexWrapper>
  );
}

export default ItemDetail;