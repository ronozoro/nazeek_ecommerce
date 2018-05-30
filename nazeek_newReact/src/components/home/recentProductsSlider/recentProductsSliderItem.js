import React from 'react'
import RecentProduct from './recentProduct'

const RecentProductsSliderItem = ({product}) => {
  return (
    <div className='item'>
      <RecentProduct product={product[0]} />
      {
        product[1] &&
        <RecentProduct product={product[1]} />
      }
    </div>
  )
}

export default RecentProductsSliderItem
