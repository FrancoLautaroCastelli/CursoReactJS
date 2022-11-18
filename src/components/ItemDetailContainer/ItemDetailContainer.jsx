import React,{useState, useEffect} from "react"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import {getSingleItemFromAPI} from "../../services/firebase"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer (props)
{
    const [product,setProduct] = useState([]);

    
    let params = useParams();
    let id= params.id;
    
   
    useEffect (()=> {
        getSingleItemFromAPI(id)
        .then((itemsDB) =>{
             setProduct(itemsDB);
            })
    .catch((error) => alert (error));
    }, []);
       
    return(
        <div>
            <FlexWrapper>

              <ItemDetail product={product}/>
            </FlexWrapper>
        </div>

    )
}

export default ItemDetailContainer