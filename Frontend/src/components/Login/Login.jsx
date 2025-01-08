import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Login = ({setShowLogin}) => {
 
    const {url}= useContext(StoreContext);
    const [currState,setCurrState]= useState("SignUp")
    const [data,setData]= useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=> ({...data, [name]:value}))
    }

//     useEffect(()=>{
// console.log(data);
//     },[data])

    const onLogin = async(e) =>{
        event.preventDefault();
        let newUrl = url;
        if(currState==="Login"){
            newUrl+= "/api/user/login"
        }else{
             newUrl+= "/api/user/register"
        }
         const response = await axios.post(newUrl,data);

         if(response.data.success){
            setToken(response.data.success);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
         }else{
            alert(response.data.message); 
         }

    }

  return (
    <div className='login'>
        <form onSubmit={onLogin} className='l-container'>
            <div className="l-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="l-input">
                {currState==="Login" ? <></>: <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required /> }
                <input type="email" placeholder='Your Email' name='email' onChange={onChangeHandler} value={data.email} required />
                <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Your Password' required />         
            </div>
            <button type='submit'>{currState==="SignUp" ? "Create Account": "Login"} </button>
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
