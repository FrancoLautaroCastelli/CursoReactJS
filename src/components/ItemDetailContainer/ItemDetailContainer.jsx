import React,{useState, useEffect} from "react"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import {getSingleItemFromAPI} from "../../services/firebase"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemDetailContainer (props)
{
    const [product,setProduct] = useState([]);
    const [isLoading,setIsLoading]= useState(true);

    
    let params = useParams();
    let id= params.id;
    
   
    useEffect (()=> {
        getSingleItemFromAPI(id)
        .then((itemsDB) =>{
             setProduct(itemsDB);
             setIsLoading(false);
            })
    .catch((error) =>{ alert (error)})
    .finally ( ()=> setIsLoading(false))
    }, [id]);
       

    if (isLoading) return <div className="flex"> <Loader  color="black"/></div> 
    return(
        <div>
            <FlexWrapper>

              <ItemDetail product={product}/>
            </FlexWrapper>
        </div>

    )
}

export default ItemDetailContainer