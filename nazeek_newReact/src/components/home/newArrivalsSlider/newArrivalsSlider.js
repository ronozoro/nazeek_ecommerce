import React from 'react'
import chunk from 'lodash.chunk'
import OwlCarousel from 'react-owl-carousel'
import NewArrivalItem from './newArrivalsItem'

const NewArrivalSlider = ({ products, addToWishList }) => {
  const data = chunk(products, 2)
  return (
    <OwlCarousel
      className='owl-carousel owl-theme style-owl'
      id='arrivals-slider'
      dots
      items={4}
      responsive={{
        0: {
          items: 1
        },
        470: {
          items: 2
        },
        650: {
          items: 3
        },
        767: {
          items: 2
        },
        991: {
          items: 3
        },
        1199: {
          items: 4
        }
      }}
    >
      {
        data.map((product) => {
          return (
            <NewArrivalItem
              product={product}
              key={product.id}
              addToWishList={addToWishList}
            />
          )
        })
      }
    </OwlCarousel>
  )
}

export default NewArrivalSlider
