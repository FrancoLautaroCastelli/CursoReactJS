import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from '../ItemCount';

function ItemDetail(props) {
  return (
    <FlexWrapper>
       <div className="card w-64 bg-base-100 shadow-xl ml-6 mb-1">
                <figure className="px-10 pt-10">
                    <img src={props.imagen} alt="Tshirt" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{props.title}</h2>
                    <ItemCount   stock={props.stock} />
                    <p>{props.descripcion}</p>
                    <p>${props.precio}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Ver Detalles</button>
                    </div>
                </div>
            </div>
    </FlexWrapper>
  );
}

export default ItemDetail;