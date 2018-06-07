import React, { Component } from 'react'

class Cart extends Component {
  componentDidMount () {
    this.props.getItemsOfCart()
  }
  render () {
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
              <li className='breadcrumb-item active'>cart</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>Shoping cart</h2>
              <div className='col--right'>
                <a href='#' className='btn-primary-cus'>Continue Shopping <i className='glyphicon glyphicon-share-alt' /></a>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table table-cart table-st1 table-striped'>
                <thead>
                  <tr>
                    <th className='width-35'>Product</th>
                    <th>Product ID</th>
                    <th>Quantitiy</th>
                    <th>Item Price (KD)</th>
                    <th>Subtotal (KD)</th>
                    <th />
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='t-prItem clearfix'>
                        <a href='#' className='tp-thumb'>
                          <img src='images/ku.png' alt='' className='img-responsive' />
                        </a>
                        <div className='tp-desc'>
                          <h2><a href='#'>Lorem ipsum dolor sit amet,</a></h2>
                          <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </td>
                    <td>#234</td>
                    <td>
                      <div className='quantity'>
                        <input type='text' name='count-quat1' className='count-quat' value='1' />
                        <div className='btn button-count inc jsQuantityIncrease'><i className='fa fa-plus' aria-hidden='true' /></div>
                        <div className='btn button-count dec jsQuantityDecrease' minimum='1'><i className='fa fa-minus' aria-hidden='true' /></div>
                      </div>
                      <button className='btn btn-refresh'><i className='icon-refresh icons' /></button>
                    </td>
                    <td>53</td>
                    <td>159</td>
                    <td>
                      <a href='#' className='address-heart'><i className='icon-heart icons' /></a>
                    </td>
                    <td>
                      <a href='#' className='address-edit'><i className='icon-note icons' /></a>
                    </td>
                    <td>
                      <a href='#' className='address-remove'><i className='icon-close icons' /></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='t-prItem clearfix'>
                        <a href='#' className='tp-thumb'>
                          <img src='images/ku.png' alt='' className='img-responsive' />
                        </a>
                        <div className='tp-desc'>
                          <h2><a href='#'>Lorem ipsum dolor sit amet,</a></h2>
                          <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                      </div>
                    </td>
                    <td>#234</td>
                    <td>
                      <div className='quantity'>
                        <input type='text' name='count-quat1' className='count-quat' value='1' />
                        <div className='btn button-count inc jsQuantityIncrease'><i className='fa fa-plus' aria-hidden='true' /></div>
                        <div className='btn button-count dec jsQuantityDecrease' minimum='1'><i className='fa fa-minus' aria-hidden='true' /></div>
                      </div>
                      <button className='btn btn-refresh'><i className='icon-refresh icons' /></button>
                    </td>
                    <td>53</td>
                    <td>159</td>
                    <td>
                      <a href='#' className='address-heart'><i className='icon-heart icons' /></a>
                    </td>
                    <td>
                      <a href='#' className='address-edit'><i className='icon-note icons' /></a>
                    </td>
                    <td>
                      <a href='#' className='address-remove'><i className='icon-close icons' /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='clearfix'>
              <div className='ch-b-left'>
                <p className='cc-note'>By countinu to checkout you accept of term of use and privecy policy </p>
              </div>
              <div className='ch-b-right'>
                <div className='without-div'><i className='icon-doc icons' /><p>TOTAL (<span>without delivry fees</span>)  : 3435 KD</p></div>
                <div className='cart-action clearfix'>
                  <a href='index.html' className='btn-primary-cus'>Continue Shopping <i className='glyphicon glyphicon-share-alt' /></a>
                  <a href='checkout.html' className='btn-primary-cus primary-cus-active'>Checkout</a>
                </div>
              </div>
            </div>
            <div className='box-like-product'>
              <div className='sec-head clearfix'>
                <h2 className='sec-title'>may be you like this</h2>
              </div>
              <div className='like-product-content'>
                <div className='owl-carousel style-owl' id='like-product-slider'>
                  <div className='item'>
                    <div className='like-product-item clearfix'>
                      <a href='#' className='lp-thumb'>
                        <img src='images/ku.png' alt='' />
                      </a>
                      <div className='lp-txt'>
                        <p className='desc-p'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className='star-rating'>
                          <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                        </div>
                        <span className='pr-sa'>345 DK</span>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='like-product-item clearfix'>
                      <a href='#' className='lp-thumb'>
                        <img src='images/ku.png' alt='' />
                      </a>
                      <div className='lp-txt'>
                        <p className='desc-p'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className='star-rating'>
                          <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                        </div>
                        <span className='pr-sa'>345 DK</span>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='like-product-item clearfix'>
                      <a href='#' className='lp-thumb'>
                        <img src='images/ku.png' alt='' />
                      </a>
                      <div className='lp-txt'>
                        <p className='desc-p'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className='star-rating'>
                          <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                        </div>
                        <span className='pr-sa'>345 DK</span>
                      </div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className='like-product-item clearfix'>
                      <a href='#' className='lp-thumb'>
                        <img src='images/ku.png' alt='' />
                      </a>
                      <div className='lp-txt'>
                        <p className='desc-p'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <div className='star-rating'>
                          <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                        </div>
                        <span className='pr-sa'>345 DK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Cart
