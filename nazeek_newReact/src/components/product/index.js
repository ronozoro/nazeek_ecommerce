import React, { Component } from 'react'
import LikeProduct from './likeProductsSlider'
import ProductDetailsTab from './productDetailsTab'
import Sliders from './sliders'

class Product extends Component {
  componentDidMount () {
    const { id } = this.props.match.params

    this.props.fetchProduct(id)
  }
  render () {
    const { isFetching, product, error } = this.props
    console.log(product)

    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
              <li className='breadcrumb-item'><a href='product-page.html'>CAtegory</a></li>
              <li className='breadcrumb-item active'>Product</li>
            </ol>
          </div>
        </div>
        {error}
        {
          isFetching
            ? <h4>Loading ...</h4>
            : <div className='content-innerPage'>
              <div className='container'>
                <div className='product-detail-primary'>
                  <div className='row'>
                    <div className='col-md-7'>
                      <div className='block-product-slide'>
                        <Sliders />
                        <div className='bottom-slide-pro clearfix'>
                          <ul className='share-pro clearfix'>
                            <li className='sh-share'><i className='icon-share icons' /></li>
                            <li className='sh-instgram'>
                              <a href='#' target='_blank'><i className='fa fa-instagram' aria-hidden='true' /></a>
                            </li>
                            <li className='sh-face'>
                              <a href='#' target='_blank'><i className='fa fa-facebook' aria-hidden='true' /></a>
                            </li>
                          </ul>
                          <ul className='links-meta-left clearfix'>
                            <li>
                              <a href='#'><i className='icon-printer icons' /></a>
                            </li>
                            <li>
                              <a href='#'><i className='icon-envelope icons' /></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <div className='pdp-right'>
                        <h3>Shop Name<a href='#'><i className='fa fa-youtube-play' aria-hidden='true' /></a></h3>
                        <div className='sec-head marg-b0 clearfix'>
                          <h2 className='sec-title'>{product.title}</h2>
                        </div>
                        <div className='pdp--list'>
                          <div className='pdp-ro'>
                            <p className='f-rguler'>PRICE  : <span className='pr-sa'>{product.price} K.D</span></p>
                          </div>
                          <div className='pdp-ro'>
                            <p className='f-rguler'>COLOR : </p>
                            <div className='color-choose'>
                              {
                                product.variation_set.map(() => {
                                  return (
                                    <div>
                                      <input data-image='color1' type='radio' id='color1' name='color' value='color1' checked='' />
                                      <label htmlFor='color1'>
                                        <span />
                                      </label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                          <div className='pdp-ro'>
                            <p className='f-rguler'>QUANTITY:</p>
                            <div className='quantity'>
                              <input type='text' name='count-quat1' className='count-quat' value='1' />
                              <div className='btn button-count inc jsQuantityIncrease'><i className='fa fa-plus' aria-hidden='true' /></div>
                              <div className='btn button-count dec jsQuantityDecrease' minimum='1'><i className='fa fa-minus' aria-hidden='true' /></div>
                            </div>
                          </div>
                          <div className='pdp-ro'>
                            <p>Item id : #{product.id}</p>
                          </div>
                          <div className='pdp-ro'>
                            <p><i className='icon-check icons' />Stock Availbale</p>
                          </div>
                          <div className='pdp-ro'>
                            <p>Delivery Time: 34 Hours </p>
                          </div>
                          <div className='pdp-ro'>
                            <p className='f-rguler'>Dimensions: 234 23*3434</p>
                          </div>
                        </div>
                        <div className='pdp--action clearfix'>
                          <a href='#' className='addCart'>Add To Cart</a>
                          <a href='#' className='favorite-pro-btn'><i className='icon-heart icons' /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='product-details-tab'>
                  <ProductDetailsTab />
                </div>
                <div className='box-like-product'>
                  <div className='sec-head clearfix'>
                    <h2 className='sec-title'>Similer Items</h2>
                  </div>
                  <div className='like-product-content'>
                    <LikeProduct />
                  </div>
                </div>
              </div>
            </div>
        }
      </React.Fragment>
    )
  }
}

export default Product
