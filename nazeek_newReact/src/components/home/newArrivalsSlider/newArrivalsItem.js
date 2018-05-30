import React from 'react'
import NewArrivalProduct from './newArrivalProduct'

const NewArrivalItem = ({product}) => {
  return (
    <div className='item'>
      <NewArrivalProduct product={product[0]} />
      {
        product[1] &&
        <NewArrivalProduct product={product[1]} />
      }
    </div>
  )
}

export default NewArrivalItem
