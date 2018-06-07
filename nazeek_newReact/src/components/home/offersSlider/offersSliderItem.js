import React from 'react'
import { Link } from 'react-router-dom'

const OffersSliderItem = ({ product }) => {
  return (
    <div className='item'>
      <div className='offer-item'>
        <div className='offer-top clearfix'>
          <div className='offer-desc'>
            <p className='re-salary'>
              <span className='sa-new'>{product.price} KD</span>
              <span className='sa-old'>{product.price} KD</span>
            </p>
            <p className='desc-p'>
              {product.description}
            </p>
          </div>
          <div className='save-circle'><p>save<span>15: KD</span></p></div>
        </div>
        <div className='offer-bottom'>
          <Link to={`/products/${product.id}`} className='offerThumb'>
            <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive' />
          </Link>
          <a href='#' className='favorite-pro-btn'><i className='icon-heart icons' /></a>
          <div className='add-div'>
            <a href='#' className='addCart'>Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffersSliderItem
