import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="fc-left">
           <img src={assets.logo} alt="" />
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut provident illo et ducimus, quaerat odit repellat blanditiis aspernatur a tempore ullam sequi ex unde inventore culpa perspiciatis pariatur alias.</p>
           <div className='f-social-icons'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="fc-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      <div className='fc-right'>
        <h2>Get IN Touch</h2>
        <ul>
            <li>+1-212-231442</li>
            <li>contact@gmail.com</li>
        </ul>
      </div>
      </div>
      <hr />
      <p className="f-copyright">Copyright 2024 @ Tomato.cpm - All Rights Reserved</p>

    </div>
  )
}

export default Footer
