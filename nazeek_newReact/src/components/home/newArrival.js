import React from 'react'
import { connect } from 'react-redux'
import NewArrivalSlider from './newArrivalsSlider/newArrivalsSlider'
import OffersSlider from './offersSlider/offersSlider'

const NewArraival = ({ products, isFetching, error, addToWishList }) => {
  return (
    <section className='section-new-arrivals' id='new-arrivals'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-5'>
            <div className='offers-box'>
              <div className='sec-head clearfix'>
                <h2 className='sec-title f-left'>OFFERS</h2>
                <a href='#' className='more-page f-right'>more <i className='icon-arrow-right icons' /></a>
              </div>
              <div className='sec-warpper'>
                {
                  isFetching
                    ? <h4>Loading ...</h4>
                    : <OffersSlider products={products} />
                }

              </div>
            </div>
          </div>
          <div className='col-lg-9 col-md-8 col-sm-7'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>new arrivals</h2>
              <a href='#' className='more-page f-right'>more <i className='icon-arrow-right icons' /></a>
            </div>
            <div className='sec-warpper'>
              {
                isFetching
                  ? <h4>Loading ...</h4>
                  : <NewArrivalSlider
                    products={products}
                    addToWishList={addToWishList}
                  />
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({products}) => {
  const {products: Products, isFetching, error} = products

  return {
    products: Products,
    isFetching: isFetching,
    error: error
  }
}

export default connect(mapStateToProps)(NewArraival)
