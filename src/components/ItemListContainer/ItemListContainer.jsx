import React,{useState, useEffect} from "react"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
import { getItemFromAPI, getItemFromAPIByCategory} from "../../services/firebase"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
import Loader from "../Loader/Loader";



function ItemListContainer (props)
{
    const [productsList,setProductsList] = useState([]);
    const { categoryid } = useParams();
    const [feedbackMsg,setFeedbackMsg]= useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=> {
        setIsLoading(true);
        if (categoryid) {
        getItemFromAPIByCategory(categoryid)
        .then( (itemsDB)=>{
            setProductsList(itemsDB);
        })
        .catch(error =>{
            setFeedbackMsg(error.message)
        })
        .finally( () => setIsLoading(false))
    } else {
        getItemFromAPI().then((itemsDB) => {
            setProductsList(itemsDB);
        })
        .finally( () => setIsLoading(false))
    } 
  },  [categoryid]);

  if (isLoading)
  return (
    <FlexWrapper>
      <div className="flex"> <Loader color="black"/></div>
    </FlexWrapper>
  );
    return(
        <div>
            <FlexWrapper>

            <ItemList feedbackMsg={feedbackMsg} productsList={productsList}/>
            </FlexWrapper>
        </div>

    )
}

export default ItemListContainer