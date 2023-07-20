import React , { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Logo from '../images/logo.svg';
import Menu from '../images/icon-menu.svg';
import CloseMenu from '../images/icon-close.svg';
import Avatar from '../images/image-avatar.png';
import DialogBox from './DialogBox';

function Header() {
    const {count, clickBtn, setCount} = useContext(CartContext)
    const [menu, setMenu] = useState("navigationLinks inactive");
    const [closeBtn, setCloseBtn] = useState("closeMenu inactive");
    let [isCartClicked, setIsCartClicked] = useState(false);

    function menuChange(){
        setMenu("navigationLinks active")
        setCloseBtn("closeMenu active")
    }

    function closeHamburger(){
        setMenu("navigationLinks inactive")
        setCloseBtn("closeMenu inactive")
    }



  return (
    <header>
        <div className='headerUnder'>
            <div className='logoAndMenu'>
                <div className='menuLogo'>
                    <img src={ Menu } alt='Menu Button' className='menubar'
                    onClick={menuChange}/>
                    <img src={ Logo } alt='Company Logo' className='compLogo'/>
                </div>
                <nav>
                    <ul className= {menu}>
                        <img src={CloseMenu} className={closeBtn} 
                        onClick={closeHamburger}
                        alt='Close Button'/>
                        <li>
                            <p>Collections</p>
                            <div className='lineUnder'></div>
                        </li>
                        <li>
                            <p>Men</p>
                            <div className='lineUnder'></div>
                        </li>
                        <li>
                            <p>Women</p>
                            <div className='lineUnder'></div>
                        </li>
                        <li>
                            <p>About</p>
                            <div className='lineUnder'></div>
                        </li>
                        <li>
                            <p>Contact</p>
                            <div className='lineUnder'></div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='cartAndPicture'>
                <div className='cartAndNum'>
                    <div className='cartImg'
                    onClick= {function () {
                        setIsCartClicked(true)

                        if (isCartClicked) {
                            setIsCartClicked(false)
                        }
                    }}>
                    <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D"/></svg>
                    </div>
                    {
                        (clickBtn && (count > 0)) && <div className='numberCount'>
                            <p>{count}</p>
                        </div>
                    }
                </div>
                <img src={Avatar} alt='Your Avatar' className='avatar'/>
            </div>
        </div>
        {isCartClicked && <DialogBox count={count} setCount={setCount} />}
    </header>
  )
}
export default Header