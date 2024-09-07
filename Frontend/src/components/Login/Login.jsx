import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {
 
    const [currState,setCurrState]= useState("SignUp")

  return (
    <div className='login'>
        <form className='l-container'>
            <div className="l-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="l-input">
                {currState==="Login" ? <></>: <input type="text" placeholder='Your Name' required /> }
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your Password' required />         
            </div>
            <button>{currState==="SignUp" ? "Create Account": "Login"} </button>
            <div className="l-condition">
                <input type="checkbox" required />
                <p>By continuing , I agree to the trems of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account ? <span onClick={()=>setCurrState("SignUp")}>Click here!</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Click Here</span></p>
        }
            
        </form>
      
    </div>
  )
}

export default Login
