import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { CartContext } from './Context/CartContext';
import ImageBox from './Components/ImageBox';

function App() {

  const [count, setCount] = useState(0);
  const [clickBtn, setClickBtn] = useState(false);
  const [showImg, setShowImg] = useState(false);

  return (
    <div className='App'>
        <CartContext.Provider value={{count, setCount, clickBtn, setClickBtn, setShowImg}}>
          <Header />
          <Main />
          {showImg && <ImageBox />}
        </CartContext.Provider>
    </div>
  );
}

export default App;
