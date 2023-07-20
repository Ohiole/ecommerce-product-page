import React from 'react';
import Shoe from '../images/image-product-1-thumbnail.jpg';
import Delete from '../images/icon-delete.svg';


function DialogBox({count, setCount}) {
  function deleteOrder (){
    setCount(0)
  }

  return (
    <div className='dialogBox'>
        <h2>Cart</h2>
        <div className='checkout'>
            {(count === 0) &&<p className='emptyMsg'>Your cart is empty</p>}
           {(count > 0) && <div className='checkoutFull'>
              <div className='checkoutText'>
                <img src={Shoe} alt='Shoe Png' className='mainPicForCheck'/>
                <div className='mainCheckText'>
                  <p className='checkName'>Fall Limited Edition Sneakers</p>
                  <div className='countCash'>
                    <p className='checkCost'>$125 x {count}</p> <span>${125 * count}</span>
                  </div>
                </div>
                <img src={Delete} alt='Delete Button'
                onClick={deleteOrder}/>
              </div>
              <button className='checkBtn'
              onClick={deleteOrder}>Checkout</button>
            </div>}
        </div>
    </div>
  )
}

export default DialogBox