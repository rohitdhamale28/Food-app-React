import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price ,description,image}) => {



  const {cartItems,addToCart,removeFromCart }= useContext(StoreContext)

  return (
    <div className='food-item'>
       <div className="fi-img-container">
       <img className='fi-img' src={image} alt="" />
        {!cartItems[id]
        ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
         : <div className='fi-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
         </div>
        }
       
       </div>
       <div className="fi-info"> 
         <div className="fi-name-rating">
          <p>{name} </p>
          <img src={assets.rating_starts}  alt="" />
         </div>
         <p className='fi-desc'>{description}</p>
         <p className='fi-price'>${price}</p>
       </div>
    </div>
  )
}

export default FoodItem
