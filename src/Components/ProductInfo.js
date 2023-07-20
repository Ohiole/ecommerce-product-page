import React from 'react';
import  PlusSign  from '../images/icon-plus.svg';
import  MinusSign  from '../images/icon-minus.svg';
import CartIcon from '../images/icon-cart.svg';

function ProductInfo({count, setCount, setClickBtn}) {

  function addToCart() {
      if (count !== 0) {
        setClickBtn(true);
      } else {
        setClickBtn(false)
      }
  }

  function increment(){
    setCount(prevCount => prevCount + 1);
  };

  function decrement(){
    if (count > 0) {
      setCount(prevCount => prevCount - 1); 
    } else {
      setCount(0)
    }
  };

  return (
    <div className='productInfo'>
        <div className='infoHead'>
          <h4>SNEAKER COMPANY</h4>
          <h1>Fall Limited Edition Sneakers</h1>
        </div>
        <div className='mainText'>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
        <div className='priceText'>
          <div className='percentageAndPrice'>
            <h2>$125.00</h2>
            <span>50%</span>
          </div>
          <p>$250.00</p>
        </div>
        <div className='cartAndButton'>
          <div className='counter'>
            <img src={ MinusSign } alt='Minus Sign' className='minus'
            onClick={decrement}/>
            <p className='quantity'>{count}</p>
            <img src={ PlusSign } alt='Plus Sign'  className='plus'
            onClick={increment}/>
          </div>
          <button className='cartBtn'
          onClick={addToCart}>
            <img src={ CartIcon } alt='Cart Icon' />
            Add to Cart
          </button>
        </div>
    </div>
  )
}

export default ProductInfo