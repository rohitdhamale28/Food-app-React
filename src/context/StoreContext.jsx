import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    
    // useEffect(()=>{
    //    console.log(cartItems);
    // },[cartItems])

    const getTotal= ()=>{
        let totalAmount =0;
        for(const items in cartItems){
            if (cartItems[items]> 0){
                let itemInfo= food_list.find((product)=> product._id === items);
                totalAmount += itemInfo.price* cartItems[items];
            }
           
        }
        return totalAmount;
    }

    const removeFromCart =(itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue ={
        food_list, cartItems,setCartItems,addToCart,removeFromCart,getTotal
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;
