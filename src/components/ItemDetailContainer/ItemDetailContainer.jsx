import React,{useState, useEffect} from "react"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import {getSingleItemFromAPI} from "../../mockService/mockService"
import ItemDetail from "./ItemDetail";

function ItemDetailContainer (props)
{
    const [product,setProduct] = useState([]);
    
    // useEffect(
    //     ()=>{getSingleItemFromAPI().then( (itemsDB)=>{
    //         setProduct(itemsDB);
    //     });
    // }, []);
    useEffect (()=> {
        getSingleItemFromAPI()
        .then(itemsDB=> setProduct(itemsDB) )}, [])
        console.log(product)
    return(
        <div>
            <FlexWrapper>

              <ItemDetail product={product}/>
            </FlexWrapper>
        </div>

    )
}

export default ItemDetailContainer