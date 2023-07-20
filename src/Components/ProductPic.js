import React, { useState } from 'react';
import PicOne from '../images/image-product-1.jpg';
import PicTwo from '../images/image-product-2.jpg';
import PicThree from '../images/image-product-3.jpg';
import PicFour from '../images/image-product-4.jpg';
import PicOneThumbnail from '../images/image-product-1-thumbnail.jpg';
import PicTwoThumbnail from '../images/image-product-2-thumbnail.jpg';
import PicThreeThumbnail from '../images/image-product-3-thumbnail.jpg';
import PicFourThumbnail from '../images/image-product-4-thumbnail.jpg';

function ProductPic({setShowImg}) {
  const [mainPic, setMainPic] = useState('thumbnailDiv');
  const [mainPicOne, setMainPicOne] = useState('thumbnailDiv');
  const [mainPicTwo, setMainPicTwo] = useState('thumbnailDiv');
  const [defaultPic, setDefaultPic] = useState('thumbnailDiv activeImg');
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
  }

  function prevImg() {
    setCurrentPic(currentPic - 1)
    if (currentPic === 1) {
      setCurrentPic(4)
    }
  }

  return (
    <div className='productPic'>
      <div className='mainPicShow'>
        <div className='leftArrowMain'
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
        alt= 'Main shoe' className='mainImg'
        onClick={function () {
          setShowImg(true)
        }} />
        <div className='rightArrowMain' 
        onClick={nextImg}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#000000" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
      </div>
        <div className='allPics'>
          <div className={defaultPic}
          onClick={clickImgMain}>
            <img className='thumbnail' src={ PicOneThumbnail } alt='Product Thumbnail' />
          </div>
          <div className={mainPic}
          onClick={clickImg}>
            <img className='thumbnail' src={ PicTwoThumbnail } alt='Product Thumbnail' />
          </div>
          <div className={mainPicOne}
          onClick={clickImgOne}>
            <img className='thumbnail' src={ PicThreeThumbnail } alt='Product Thumbnail' />
          </div>
          <div className={mainPicTwo}
          onClick={clickImgTwo}>
            <img className='thumbnail' src={ PicFourThumbnail } alt='Product Thumbnail' />
          </div>
        </div>
    </div>
  )
}

export default ProductPic