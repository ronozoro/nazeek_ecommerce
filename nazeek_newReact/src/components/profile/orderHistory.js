import React from 'react'

const OrderHistory = () => {
  return (
    <div className='col-lg-9 col-md-8 col-sm-12'>
      <div className='sec-head marg-b0 clearfix'>
        <h2 className='sec-title f-left'>Order History</h2>
      </div>
      <div className='sec-warpper'>
        <div className='order-history-list'>
          <div className='order-hRow'>
            <div className='ooh-head'>
              <ul className='order-hHead clearfix'>
                <li>order date: <span>9/11/2017</span></li>
                <li>Order#:<span>2017</span></li>
                <li>Order price(KD):<span>9017</span></li>
                <li>status:<span>Delivered on  1/1/2017</span></li>
              </ul>
            </div>
            <div className='ooh-body'>
              <div className='table-responsive'>
                <table className='table table-st1'>
                  <thead>
                    <tr>
                      <th className='th-product'>Product</th>
                      <th>Item ID</th>
                      <th>Item price</th>
                      <th>Quantity</th>
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
                      <td>#32948</td>
                      <td>948</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='delivery-note'><span>Delivery address:</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit,</div>
            </div>
          </div>
          <div className='order-hRow'>
            <div className='ooh-head'>
              <ul className='order-hHead clearfix'>
                <li>order date: <span>9/11/2017</span></li>
                <li>Order#:<span>2017</span></li>
                <li>Order price(KD):<span>9017</span></li>
                <li>status:<span>Delivered on  1/1/2017</span></li>
              </ul>
            </div>
            <div className='ooh-body'>
              <div className='table-responsive'>
                <table className='table table-st1'>
                  <thead>
                    <tr>
                      <th className='th-product'>Product</th>
                      <th>Item ID</th>
                      <th>Item price</th>
                      <th>Quantity</th>
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
                      <td>#32948</td>
                      <td>948</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='delivery-note'><span>Delivery address:</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit,</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
