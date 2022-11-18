import { useState,createContext } from "react";

const cartContext = createContext();

export function CartContextProvider (props) {
    const [cart, setCart] = useState([]);

    function AddToCart (itemData){
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
            setCart((newCart)=>{
                newCart.push(itemData)
                return newCart;
            })
        }
        
    }

    function totalItemsInCart (){
        let total = 0;
        cart.forEach (itemInCart => {
            total = total + itemInCart.count;
        })
        return total;
    }

    

    const value = {   
        totalItemsInCart :totalItemsInCart, 
        AddToCart :AddToCart };
    return ( 
        <cartContext.Provider value={{ AddToCart, totalItemsInCart }}>
          <>{props.children}</>
        </cartContext.Provider>
    )
}


export default cartContext;