import React, { useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
    let [menu,setMenu]= useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("menu")} className={menu== "menu" ?"active" : ""}>Menu</li>
        <li onClick={()=>setMenu("home")} className={menu== "home" ?"active" : ""}>Home</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu== "mobile-app" ?"active" : ""}>Moblie-App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu== "contact-us" ?"active" : ""}>Contact Us</li>
      </ul>
      <div className='nav-right'>
        <img src={assets.search_icon} alt="" />
        <div className='nav-searchicon'>
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
      
    </div>
  )
}

export default Navbar
