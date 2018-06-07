import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivalProduct = ({ product, addToWishList }) => {
  return (
    <div className='product-item'>
      <Link to={`/products/${product.id}`} className='proThumb'>
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-main' />
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-hover' />
      </Link>
      <div className='proTxt'>
        <p className='re-salary'><span className='sa-new'>{product.price} KD</span></p>
        <p className='desc-p'>{product.description}</p>
        <a href='#' className='addCart'>Add To Cart</a>
      </div>
      <a onClick={() => addToWishList(product)} className='favorite-pro-btn'><i className='icon-heart icons' /></a>
    </div>
  )
}

export default NewArrivalProduct
