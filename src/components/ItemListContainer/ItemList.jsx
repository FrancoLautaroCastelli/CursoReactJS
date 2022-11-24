import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

function ItemList(props) {
let emptyArray = props.productsList.length === 0;


  return (
    <FlexWrapper>
      {emptyArray ? ( <div className="flex"> <Loader color="black"/></div>  ) 
      : 
      (props.productsList.map((products) => (
        <Item key={products.id}  products={products} />)
    
      ))
      }
    </FlexWrapper>
  );
}

export default ItemList;

