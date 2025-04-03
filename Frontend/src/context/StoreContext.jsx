import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
import axios from "axios";


const StoreContextProvider = (props) => {
    const url = "http://localhost:8000";
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList]= useState([])
    const [restau_list, setRestauList]= useState([])

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

    const fetchFoodList = async()=>{
        const response = await axios.get(url+"/api/food/list");
        // console.log(response.data);
        setFoodList(response.data.data)
        
    }

    useEffect(()=>{
        
        async function localData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        localData();
    },[])

    const fetchRestauList = async()=>{
        const response = await axios.get(url+"/api/listings");
        // console.log(response.data);
        setRestauList(response.data.data)
        
    }

    useEffect(()=>{
        
        async function localData() {
            await fetchRestauList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        localData();
    },[])

    const removeFromCart =(itemId)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
    })

    const contextValue ={
       restau_list, food_list,url,token,setToken, cartItems,setCartItems,addToCart,removeFromCart,getTotal
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default  StoreContextProvider;
