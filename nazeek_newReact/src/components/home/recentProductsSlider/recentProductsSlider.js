import React from 'react'
import chunk from 'lodash.chunk'
import OwlCarousel from 'react-owl-carousel'
import RecentProductsSliderItem from './recentProductsSliderItem'

const RecentProductsSlider = ({ products }) => {
  const data = chunk(products, 2)
  return (
    <OwlCarousel
      id='recent-slider'
      className='owl-carousel style-owl'
      items={2}
      margin={25}
      nav
      responsive={{
        0: {
          items: 1
        },
        992: {
          items: 1
        },
        1199: {
          items: 2
        }
      }}

    >
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
