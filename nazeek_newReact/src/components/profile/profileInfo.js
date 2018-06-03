import React from 'react'

const ProfileInfo = ({ handleCurrentViewChange }) => {
  return (
    <div className='col-lg-9 col-md-8 col-sm-7'>
      <div className='sec-head clearfix'>
        <h2 className='sec-title f-left'>Profile</h2>
      </div>
      <div className='sec-warpper'>
        <div className='profile-blocks-list'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('presonal-info')}>
                <div className='pbi-head'>
                  <div>Personal Information <span className='pbi-icon'><i className='icon-user icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>Manege your information</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('order-history')}>
                <div className='pbi-head'>
                  <div>Order History <span className='pbi-icon'><i className='icon-doc icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>Check orders status</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('address-book')}>
                <div className='pbi-head'>
                  <div>Address Book <span className='pbi-icon'><i className='icon-notebook icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>Manege your delivary address</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('wishlist')}>
                <div className='pbi-head'>
                  <div>Wishlist <span className='pbi-icon'><i className='icon-heart icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>Manege my wishlist</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('payment')}>
                <div className='pbi-head'>
                  <div>Way of Payment <span className='pbi-icon'><i className='icon-credit-card icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>Manege my payment methods</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProfileInfo
