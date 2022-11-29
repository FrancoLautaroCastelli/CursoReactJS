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
        let totalPrice = 0;
        cart.forEach((itemInCart)=>{
            totalPrice = totalPrice + itemInCart.count * itemInCart.precio
        });
        return totalPrice;
        
    }

    function removeItem (itemId){
        let indexABorrar = cart.findIndex(data => data.id === itemId);
        if (indexABorrar === -1) {
            return;
        }
        const newCart = [...cart];
        newCart.splice(indexABorrar, 1);
        setCart(newCart);
    }
    
    function clear (){
        setCart([])
    }

    const value = {   
        totalItemsInCart :totalItemsInCart, 
        addToCart :addToCart ,
        removeItem : removeItem ,
        clear: clear ,
        cart,
        totalPriceInCart: totalPriceInCart};
    return ( 
        <cartContext.Provider value={value}>
          <>{props.children}</>
        </cartContext.Provider>
    )
}

export default cartContext;