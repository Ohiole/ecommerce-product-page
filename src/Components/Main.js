import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ProductPic from './ProductPic';
import ProductInfo from './ProductInfo';

function Main() {
  const {count, setCount, clickBtn, setClickBtn, setShowImg} = useContext(CartContext);

  return (
    <main>
        <ProductPic setShowImg={setShowImg} />
        <ProductInfo count={count} setCount={setCount} clickBtn={clickBtn} setClickBtn={setClickBtn}/>
    </main>
  )
}

export default Main