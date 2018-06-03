import React from 'react'

const WishlistProduct = ({ product }) => {
  return (
    <tr>
      <td>
        <div className='t-prItem clearfix'>
          <a href='#' className='tp-thumb'>
            <img src='images/ku.png' alt='' className='img-responsive' />
          </a>
          <div className='tp-desc'>
            <p className='desc-p'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div className='star-rating'>
              <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
            </div>
            <span className='pr-sa'>345 DK</span>
          </div>
        </div>
      </td>
      <td>shop name</td>
      <td>#32948</td>
      <td>34</td>
      <td>
        <a href='#' className='caart-icon'><i className='icon-basket icons' /></a>
      </td>
      <td>
        <a href='#' className='address-remove'><i className='icon-close icons' /></a>
      </td>
    </tr>
  )
}

export default WishlistProduct
