import React from 'react'
import NewArrivalProduct from './newArrivalProduct'

const NewArrivalItem = ({ product, addToWishList }) => {
  return (
    <div className='item'>
      <NewArrivalProduct product={product[0]} addToWishList={addToWishList} />
      {
        product[1] &&
        <NewArrivalProduct product={product[1]} addToWishList={addToWishList} />
      }
    </div>
  )
}

export default NewArrivalItem
