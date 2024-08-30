import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='em-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ea voluptatibus quam vel nobis esse ad quia, laudantium quasi fugiat obcaecati dicta repellendus cum neque praesentium iusto suscipit laboriosam voluptas?</p>
      <div className='em-list'>
        {menu_list.map((item,index) =>{
            return (
                <div onClick={() => setCategory(prev => prev===item.menu_name? "All":item.menu_name)} key={index} className="em-list-items">
                    <img className={category===item.menu_name? "active" :""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
