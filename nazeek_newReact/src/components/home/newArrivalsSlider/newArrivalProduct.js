import React from 'react'

const NewArrivalProduct = ({product}) => {
  return (
    <div className='product-item'>
      <a href='product-details.html' className='proThumb'>
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-main' />
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-hover' />
      </a>
      <div className='proTxt'>
        <p className='re-salary'><span className='sa-new'>{product.price} DK</span></p>
        <p className='desc-p'>{product.description}</p>
        <a href='#' className='addCart'>Add To Cart</a>
      </div>
      <a href='#' className='favorite-pro-btn'><i className='icon-heart icons' /></a>
    </div>
  )
}

export default NewArrivalProduct
