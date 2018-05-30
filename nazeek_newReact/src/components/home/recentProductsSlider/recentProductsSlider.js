import React from 'react'
import chunk from 'lodash.chunk'
import OwlCarousel from 'react-owl-carousel'
import RecentProductsSliderItem from './recentProductsSliderItem'

const RecentProductsSlider = ({ products }) => {
  const data = chunk(products, 2)
  return (
    <OwlCarousel className='owl-carousel style-owl' items={2} margin={25} nav id='recent-slider'>
      {
        data.map((product) => {
          return <RecentProductsSliderItem product={product} key={product.id} />
        })
      }
    </OwlCarousel>
  )
}

export default RecentProductsSlider

//
