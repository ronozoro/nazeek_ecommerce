import React from 'react'

const Payment = () => {
  return (
    <div className='col-lg-9 col-md-8 col-sm-12'>
      <div className='sec-head marg-b0 clearfix'>
        <h2 className='sec-title f-left'>Way of Payments</h2>
      </div>
      <div className='sec-warpper'>
        <div className='table-address'>
          <div className='table-responsive'>
            <table className='table table-view-address'>
              <tbody>
                <tr>
                  <td>
                    <div className='address-title pay-row'>
                      <div className='add-icons'><img src='images/pay.png' alt='' className='img-responsive' /></div>
                      <div className='add-tTxt'>
                        <h2>Master Card</h2>
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
                    <div className='address-title pay-row'>
                      <div className='add-icons'><img src='images/pay.png' alt='' className='img-responsive' /></div>
                      <div className='add-tTxt'>
                        <h2>Master Card</h2>
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
              </tbody>
            </table>
          </div>
          <a href='#' className='add-newAddress'><i className='icon-plus icons' />Add New Method</a>
        </div>
      </div>
    </div>

  )
}

export default Payment
