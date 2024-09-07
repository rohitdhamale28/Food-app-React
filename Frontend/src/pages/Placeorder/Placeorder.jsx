import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {
  const {getTotal}= useContext(StoreContext);
  return (
    <form action="" className='placeorder'>
      <div className="po-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feilds">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email add'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-feilds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='Pin Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="po-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="ct-details">
              <p>Subtotal</p>
              <p>Rs.{getTotal()}</p>
            </div>
            <div className="ct-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotal()>0 ? 2 : 0}</p>
            </div>
            <div className="ct-details">
              <b>Total</b>
              <b>Rs.{getTotal()>0 ? getTotal()+2 : 0}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder