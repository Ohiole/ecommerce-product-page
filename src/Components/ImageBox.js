import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import PicOne from '../images/image-product-1.jpg';
import PicTwo from '../images/image-product-2.jpg';
import PicThree from '../images/image-product-3.jpg';
import PicFour from '../images/image-product-4.jpg';
import PicOneThumbnail from '../images/image-product-1-thumbnail.jpg';
import PicTwoThumbnail from '../images/image-product-2-thumbnail.jpg';
import PicThreeThumbnail from '../images/image-product-3-thumbnail.jpg';
import PicFourThumbnail from '../images/image-product-4-thumbnail.jpg';

function ImageBox() {

  const {setShowImg} = useContext(CartContext)

    const [mainPic, setMainPic] = useState('thumbnailDivBox');
    const [mainPicOne, setMainPicOne] = useState('thumbnailDivBox');
    const [mainPicTwo, setMainPicTwo] = useState('thumbnailDivBox');
    const [defaultPic, setDefaultPic] = useState('thumbnailDivBox activeImg');
    let [currentPic, setCurrentPic] = useState(1);
  
    function imgTwo () {
      setMainPic('thumbnailDivBox activeImg');
      setMainPicOne('thumbnailDivBox');
      setMainPicTwo('thumbnailDivBox');
      setDefaultPic('thumbnailDivBox');
    }

    function imgThree() {
      setMainPic('thumbnailDivBox');
      setMainPicOne('thumbnailDivBox activeImg');
      setMainPicTwo('thumbnailDivBox');
      setDefaultPic('thumbnailDivBox');
    }

    function imgFour(){
      setMainPic('thumbnailDivBox');
      setMainPicOne('thumbnailDivBox');
      setMainPicTwo('thumbnailDivBox activeImg');
      setDefaultPic('thumbnailDivBox');
    }

    function imgOne(){
      setMainPic('thumbnailDivBox');
      setMainPicOne('thumbnailDivBox');
      setMainPicTwo('thumbnailDivBox');
      setDefaultPic('thumbnailDivBox activeImg');
    }

    function clickImg(){
      setCurrentPic(currentPic = 2);
      imgTwo();
    }
  
    function clickImgOne(){
      setCurrentPic(currentPic = 3);
      imgThree();
    }
  
    function clickImgTwo(){
      setCurrentPic(currentPic = 4);
      imgFour();
    }
  
    function clickImgMain(){
      setCurrentPic(currentPic = 1);
      if (currentPic === 1) {
        imgOne();
      }
    }

    function nextImg() {
      setCurrentPic(prevPic => prevPic + 1)
      if (currentPic === 4) {
        setCurrentPic(1)
      }

      if (currentPic === 1) {
        imgTwo();
      } else if(currentPic === 2){
        imgThree();
      } else if (currentPic === 3) {
        imgFour();
      } else {
        imgOne();
      }
    }

    function prevImg() {
      setCurrentPic(currentPic - 1)
      if (currentPic === 1) {
        setCurrentPic(4)
      }

      if (currentPic === 1) {
        imgFour();
      } else if(currentPic === 2){
        imgOne();
      } else if (currentPic === 3) {
        imgTwo();
      } else {
        imgThree();
      }
    }

    function clear(){
      setShowImg(false)
    }

  
  return (
    <div className='imageBox'>
        <div className='exitBtn'
        onClick={clear}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fill-rule="evenodd"/></svg>
        </div>
        <div className='imageBoxMain'>
            <div className='leftArrow'
            onClick={prevImg}>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#000000" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
            <img 
            src={ 
                (currentPic === 1) ? PicOne :
                (currentPic === 2) ? PicTwo :
                (currentPic === 3) ? PicThree :
                (currentPic === 4) ? PicFour: PicOne 
            } 
            className='mainBgImage'
            alt='Previous icon' />
            <div className='rightArrow'
            onClick={nextImg}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#000000" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </div>
        </div>
        <div className='imageBoxThumbnails'>
          <div className={defaultPic}
          onClick={clickImgMain}>
            <img src={ PicOneThumbnail } alt='Product Thumbnail' />
          </div>
          <div className={mainPic}
          onClick={clickImg}>
            <img src={ PicTwoThumbnail } alt='Product Thumbnail' />
          </div>
          <div className={mainPicOne}
          onClick={clickImgOne}>
            <img src={ PicThreeThumbnail } alt='Product Thumbnail' />
          </div>
          <div className={mainPicTwo}
          onClick={clickImgTwo}>
            <img  src={ PicFourThumbnail } alt='Product Thumbnail' />
          </div>
        </div>
    </div>
  )
}

export default ImageBox