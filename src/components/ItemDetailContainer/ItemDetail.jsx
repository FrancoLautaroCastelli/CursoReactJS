import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from '../ItemCount';

function ItemDetail(props) {
  return (
    <FlexWrapper>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure><img src={props.product.imagen} alt="Album"/></figure>
              <div className="card-body">
                <h2 className="card-title">{props.product.title}</h2>
                <p>{props.product.descripcion}</p>
                
                
                <p>Precio del producto: ${props.product.precio}</p>
                <div className="card-actions justify-end">
                <ItemCount   stock={props.product.stock} />
                </div>
              </div>
            </div>
    </FlexWrapper>
  );
}

export default ItemDetail;