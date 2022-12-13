import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import Empty from '../components/Empty'
import AlertCard from '../components/AlertCard'

const Cart = () => {
  const { cartItems, totalAmount, totalQty } = useSelector(state => state.cart);
  const [remove, setRemove] = useState(false);

  return (
    <div className='cart'>
      {totalQty !== 0 ? <div className="wrapper">
        <div className='header'>My Cart</div>
        <div className='container'>
          <div className="left">
            {cartItems.map(item => (
              <div className="cartItem" key={item.id}>
                <img src={item.img} alt="" />
                <div className='info'>
                  <div className='title'>{item.name}</div>
                  <small>Size: {item.size}</small>
                  <small>Width: {item.width}</small> <br />
                  <small>Brand: {item.brand}</small>
                  <small>Color: {item.color}</small>
                </div>
                <div>
                  <div>NRs: {item.sp}<small>(per item)</small></div>
                  <small>Pairs: {item.qty}</small>
                </div>
                  <AiOutlineCloseSquare className='icon' onClick={() => setRemove(true)} />
                {remove && <AlertCard title={"cart"} id={item.id} setRemove={setRemove} />}
              </div>
            ))}
          </div>
          <div className="right">
            <h3>Checkout</h3>
            <div className='cost'>
              <div>
                <p>Sub Total</p>
                <p>Shipping Fee</p>
                <h4>Total</h4>
              </div>
              <div>
                <p>: NRs. {totalAmount}</p>
                <p>: NRs. 87</p>
                <h4>: NRs. {totalAmount + 87}</h4>
              </div>
            </div>
            <button>Place Order</button>
          </div>
        </div>
      </div> : <Empty title={"Cart"} btnVal={"Continue Shopping"} />}
    </div>
  )
}

export default Cart