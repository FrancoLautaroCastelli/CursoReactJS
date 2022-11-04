import React,{useState, useEffect} from "react"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import getItemFromAPI from "../../mockService/mockService"
import ItemList from "./ItemList"

function ItemListContainer (props)
{
    const [productsList,setProductsList] = useState([]);
    
    useEffect(
        ()=>{getItemFromAPI().then( (itemsDB)=>{
            setProductsList(itemsDB);
        });
    }, []);

    
    return(
        <div>
            <FlexWrapper>

            <ItemList productsList={productsList}/>
            </FlexWrapper>
        </div>

    )
}

export default ItemListContainer