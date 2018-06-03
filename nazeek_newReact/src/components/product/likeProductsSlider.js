import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import kuImg from '../../assets/images/ku.png'

const LikeProduct = () => {
  return (
    <OwlCarousel
      className='owl-carousel style-owl'
      id='like-product-slider'
      margin={0}
    >
      <div className='item'>
        <div className='like-product-item clearfix'>
          <a href='#' className='lp-thumb'>
            <img src={kuImg} alt='' />
          </a>
          <div className='lp-txt'>
            <p className='desc-p'>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className='star-rating'>
              <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
            </div>
            <span className='pr-sa'>345 DK</span>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='like-product-item clearfix'>
          <a href='#' className='lp-thumb'>
            <img src={kuImg} alt='' />
          </a>
          <div className='lp-txt'>
            <p className='desc-p'>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className='star-rating'>
              <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
            </div>
            <span className='pr-sa'>345 DK</span>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='like-product-item clearfix'>
          <a href='#' className='lp-thumb'>
            <img src={kuImg} alt='' />
          </a>
          <div className='lp-txt'>
            <p className='desc-p'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className='star-rating'>
              <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
            </div>
            <span className='pr-sa'>345 DK</span>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='like-product-item clearfix'>
          <a href='#' className='lp-thumb'>
            <img src={kuImg} alt='' />
          </a>
          <div className='lp-txt'>
            <p className='desc-p'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className='star-rating'>
              <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
            </div>
            <span className='pr-sa'>345 DK</span>
          </div>
        </div>
      </div>
    </OwlCarousel>)
}

export default LikeProduct
