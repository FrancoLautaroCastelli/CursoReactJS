import { useState,createContext } from "react";

const cartContext = createContext();

export function CartContextProvider (props) {
    const [cart, setCart] = useState([]);

    function addToCart (itemData){
       
        let itemFound = cart.find (itemInCart => itemInCart.id === itemData.id)
        if(itemFound){
            let newCart = cart.map(itemInCart=>{
                if(itemInCart.id === itemData.id){
                    itemInCart.count += itemData.count;
                    return itemInCart
                }
                else {
                    return itemInCart
                }
            })
            setCart(newCart);

        }else {
            // const newCart = [...cart];
            // newCart.push(itemData);
            // setCart(newCart);
            setCart([...cart,itemData])
        }
        
    }

    function totalItemsInCart (){
        let total = 0;
        cart.forEach (itemInCart => {
            total = total + itemInCart.count;
        })
        return total;
    }
    function totalPriceInCart (){
        
    }

    function removeItem (itemId){
        console.log("Removiendo el item", itemId)
    }
    
    function clear (){
        
    }

    const value = {   
        totalItemsInCart :totalItemsInCart, 
        addToCart :addToCart ,
        removeItem : removeItem ,
        clear: clear ,
        totalPriceInCart: totalPriceInCart};
    return ( 
        <cartContext.Provider value={value}>
          <>{props.children}</>
        </cartContext.Provider>
    )
}

export default cartContext;