import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-6 col-xs-6'>
      <div className='product-result-item'>
        <Link to={`/products/${product.id}`} className='pro-resThumb'>
          <img data-image='color1' className='active' src={`data:image/jpg;base64, ${product.image}`} alt='' />
        </Link>
        <div className='pro-resCaption'>
          <div className='color-choose'>
            {
              product.variation_set.map((item) => {
                return (
                  <div>
                    <input type='radio' id={item.id} name='color' value='color1' checked />
                    <label for='color1'>
                      <span style={{backgroundColor: item.color ? item.color : '#eee'}} />
                    </label>
                  </div>
                )
              })
            }
          </div>
          <div className='pro-resTxt'>
            <h2 className='pr-title'><a href='#'>{product.title}</a></h2>
            <p className='pr-shop'>{product.seller_name}</p>
            <span className='pr-sa'>{product.price} DK</span>
            <ul className='pro-resAction'>
              <li>
                <a href='#' className='heart-btn'><i className='icon-heart icons' /></a>
              </li>
              <li>
                <a href='#' className='basket-btn'><i className='icon-basket icons' /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
