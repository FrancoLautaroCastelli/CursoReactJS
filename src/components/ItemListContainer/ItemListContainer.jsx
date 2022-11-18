import React,{useState, useEffect} from "react"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import { getItemFromAPI, getItemFromAPIByCategory} from "../../services/firebase"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
function ItemListContainer (props)
{
    const [productsList,setProductsList] = useState([]);
    const { categoryid } = useParams();

    useEffect( ()=> {
        if (categoryid) {
        getItemFromAPIByCategory(categoryid).then( (itemsDB)=>{
            setProductsList(itemsDB);
        });
    } else {
        getItemFromAPI().then((itemsDB) => {
            setProductsList(itemsDB);
        });
    } 
  },  [categoryid]);

    
    return(
        <div>
            <FlexWrapper>

            <ItemList productsList={productsList}/>
            </FlexWrapper>
        </div>

    )
}

export default ItemListContainer