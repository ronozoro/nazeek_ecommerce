import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import OffersSliderItem from './offersSliderItem'

const OffersSlider = ({ products }) => {
  return (
    <OwlCarousel
      id='offers-slider'
      className='owl-carousel'
      nav
      navText={['Next <i class="fa fa-angle-right"/>', '<i class="fa fa-angle-left"/> Previous']}
      items={1}
    >
      {
        products.map((product) => {
          return <OffersSliderItem key={product.id} product={product} />
        })
      }
    </OwlCarousel>

  )
}

export default OffersSlider
