import React from 'react'

const RecentProduct = ({product}) => {
  return (
    <div className='recent-item clearfix'>
      <a href='product-details.html' className='recThumb'>
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-main' />
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-hover' />
      </a>
      <div className='recTxt'>
        <p className='re-salary'>
          <span className='sa-new'>{product.price} DK</span>
          <span className='sa-old'>{product.price} DK</span>
        </p>
        <p className='desc-p'>
          {product.description}
        </p>
        <div className='star-rating'>
          <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
        </div>
        <a href='#' className='addCart'>Add To Cart</a>
        <div className='label-xs'>offers</div>
      </div>
      <a href='#' className='favorite-pro-btn'><i className='icon-heart icons' /></a>
    </div>
  )
}

export default RecentProduct
