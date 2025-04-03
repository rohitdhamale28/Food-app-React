import React, { useContext } from 'react'
import './RestauDisplay.css'
import RestauItem from '../RestauItem/RestauItem.jsx';
import { StoreContext } from '../../context/StoreContext.jsx';

const FoodDisplay = ({category}) => {
    const {restau_list}= useContext(StoreContext);
console.log(category);  
  return (
    <div className='food-dispaly' id='food-display'>
      <h2>Top Restaurants Near You</h2>
      <div className="fd-list">
        {restau_list.map((item,index)=>{
        
            return <RestauItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image.url}/>
         
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
