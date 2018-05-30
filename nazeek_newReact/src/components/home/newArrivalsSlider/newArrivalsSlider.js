import React from 'react'
import chunk from 'lodash.chunk'
import OwlCarousel from 'react-owl-carousel'
import NewArrivalItem from './newArrivalsItem'

const NewArrivalSlider = ({ products }) => {
  const data = chunk(products, 2)
  return (
    <OwlCarousel
      className='owl-carousel owl-theme style-owl'
      id='arrivals-slider'
      dots
      items={4}
    >
      {
        data.map((product) => {
          return (
            <NewArrivalItem
              product={product}
              key={product.id}
            />
          )
        })
      }
    </OwlCarousel>
  )
}

export default NewArrivalSlider
