import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.productsList.map((products) => (
        <Item
        key={products.id}
        title={products.title}
        precio={products.precio}
        stock={products.stock}
        categoria={products.categoria}
        descripcion={products.descripcion}
        imagen={products.imagen}

    />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;