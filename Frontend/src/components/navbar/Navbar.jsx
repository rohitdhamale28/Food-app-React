import React, { useContext, useState } from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'
import {Link} from'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    let [menu,setMenu]= useState("home");
    const {getTotal} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='nav-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu== "home" ?"active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu== "meun" ?"active" : ""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu== "mobile-app" ?"active" : ""}>Moblie-App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu== "contact-us" ?"active" : ""}>Contact Us</a>
      </ul>
      <div className='nav-right'>
        <img src={assets.search_icon} alt="" />
        <div className='nav-searchicon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotal()===0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>Sign In</button>
      </div>
      
    </div>
  )
}

export default Navbar
