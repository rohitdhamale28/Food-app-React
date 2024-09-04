import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext.jsx'

const Cart = () => {
  const {cartItems, food_list, removeFromCart, getTotal}=useContext(StoreContext);
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="ci-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=> {
             if(cartItems[item._id]>0){
              return (
                <div>
                <div className='ci-title ci-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>rs. {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs. {item.price*cartItems[item._id]}</p>
                  <p className='cross' onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr />
                </div>
              )
             }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="ct-details">
              <p>Subtotal</p>
              <p>{getTotal()}</p>
            </div>
            <div className="ct-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="ct-details">
              <b>Total</b>
              <b>{getTotal()>0 ? getTotal()+2 : 0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cp-input'>
              <input type="text" placeholder='PROMO CODE' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart