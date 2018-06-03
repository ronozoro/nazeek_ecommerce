import React, { Component } from 'react'
import WishlistProduct from './wishlistProduct'

class Wishlist extends Component {
  componentDidMount () {
    const { getWishListItems } = this.props
    getWishListItems()
  }

  render () {
    const { wishlistItems } = this.props

    console.log(wishlistItems)

    return (
      <div className='col-lg-9 col-md-8 col-sm-7'>
        <div className='sec-head clearfix'>
          <h2 className='sec-title f-left'>Wishlist</h2>
        </div>
        <div className='sec-warpper'>
          <div className='table-responsive'>
            <table className='table table-st1 wishlist-table'>
              <thead>
                <tr>
                  <th className='th-product'>Product</th>
                  <th>Shop Name</th>
                  <th>Item ID</th>
                  <th>Price(KD)</th>
                </tr>
              </thead>
              <tbody>
                {
                  wishlistItems.map((item) => {
                    return <WishlistProduct product={item} />
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Wishlist
