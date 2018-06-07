import React from 'react'

const CheckOut = () => {
  return (
    <React.Fragment>
      <div className='breadcrumb-bar'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
            <li className='breadcrumb-item active'>checkout</li>
          </ol>
        </div>
      </div>
      <div className='content-innerPage'>
        <div className='container'>
          <div className='sec-head clearfix'>
            <h2 className='sec-title f-left'>checkout</h2>
          </div>
          <div className='checkout-block'>
            <div className='table-responsive'>
              <table className='table table-st2'>
                <thead>
                  <tr>
                    <th>Address List</th>
                    <th />
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='address-title'>
                        <div className='add-icons'><i className='icon-location-pin icons' /></div>
                        <div className='add-tTxt'>
                          <h2>Office  Address </h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        </div>
                      </div>
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
                      <div className='address-title'>
                        <div className='add-icons'><i className='icon-location-pin icons' /></div>
                        <div className='add-tTxt'>
                          <h2>Home   Address </h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                      </div>
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
            <a href='#myModal-address' data-toggle='modal' className='add-newAddress'><i className='icon-plus icons' />Add New Address</a>
          </div>
          <div className='checkout-block'>
            <div className='table-responsive'>
              <table className='table table-st2'>
                <thead>
                  <tr>
                    <th>Order Summery</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='add-tTxt'>
                        <h2>Item(1)</h2>
                        <p>Delivery in 3 days thought delivery</p>
                      </div>
                    </td>
                    <td className='td-price'>2 KD</td>
                  </tr>
                  <tr>
                    <td>
                      <div className='add-tTxt'>
                        <h2>Item(2)</h2>
                        <p>Delivery in 3 days thought delivery</p>
                      </div>
                    </td>
                    <td className='td-price'>2 KD</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='block--discount'>
              <div className='without-div'><i className='icon-doc icons' /><p>TOTAL (<span>without delivry fees</span>)  : 3435 KD</p></div>
              <label className='label-disc'>30 %  Discont</label>
            </div>
            <div className='checkout-bottom clearfix'>

              <div className='ch-b-left'>
                <a href='#' className='ge-request'>General Requset</a>
                <ul className='ch-des'>
                  <li>Items : 23424 K.D</li>
                  <li>Deliver Fees : 23 K.D</li>
                  <li>Total Amount : 234234 K.D</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='checkout-block'>
            <h2 className='title-head2'>Payment Way</h2>
            <div className='payment--method clearfix'>
              <div className='pay-mrg'>
                <input type='radio' name='pay-method' />
                <img src='images/py1.png' alt='' />
                <h3>k-net</h3>
              </div>
              <div className='pay-mrg'>
                <input type='radio' name='pay-method' />
                <img src='images/py2.png' alt='' />
                <h3>Credit</h3>
              </div>
              <div className='pay-mrg'>
                <input type='radio' name='pay-method' />
                <img src='images/py3.png' alt='' />
                <h3>Tap pay</h3>
              </div>
            </div>
            <div className='checkout-bottom clearfix'>
              <div className='ch-b-left'>
                <a href='#' className='ge-request'>Pay now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CheckOut
