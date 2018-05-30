import React from 'react'

const AddressBook = () => {
  return (
    <div className='col-lg-9 col-md-8 col-sm-12'>
      <div className='sec-head marg-b0 clearfix'>
        <h2 className='sec-title f-left'>Address book</h2>
      </div>
      <div className='sec-warpper'>
        <div className='table-address'>
          <div className='table-responsive'>
            <table className='table table-view-address'>
              <tbody>
                <tr>
                  <td>
                    <div className='address-title'>
                      <div className='add-icons'><i className='icon-location-pin icons' /></div>
                      <div className='add-tTxt'>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                        <span className='address-defult'>defult</span>
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
      </div>
    </div>

  )
}

export default AddressBook
