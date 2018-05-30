import React, { Component } from 'react'
import CurrentView from './currentView'

class Profile extends Component {
  state = {
    view: ''
  }

  handleCurrentViewChange = (view) => {
    this.setState({
      view
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
              <li className='breadcrumb-item active'>Profile</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-4 col-sm-5'>
                <div className='box-profile-side'>
                  <div className='bps-head clearfix'>
                    <img src='images/av.png' alt='' className='avatar-img' />
                    <div className='prof-txt'>
                      <h2>Username</h2>
                      <a href='#' className='logout-link'>Logout</a>
                    </div>
                  </div>
                  <div className='bps-body'>
                    <ul>
                      <li className='active' onClick={() => this.handleCurrentViewChange('')}>
                        <a><span><i className='icon-grid icons' /></span>Account Home</a>
                      </li>
                      <li onClick={() => this.handleCurrentViewChange('presonal-info')}>
                        <a ><span><i className='icon-user icons' /></span>Personal Information</a>
                      </li>
                      <li onClick={() => this.handleCurrentViewChange('order-history')}>
                        <a ><span><i className='icon-doc icons' /></span>Order History</a>
                      </li>
                      <li onClick={() => this.handleCurrentViewChange('address-book')}>
                        <a ><span><i className='icon-notebook icons' /></span>Address book</a>
                      </li>
                      <li onClick={() => this.handleCurrentViewChange('payment')}>
                        <a ><span><i className='icon-credit-card icons' /></span>Way of Payments</a>
                      </li>
                      <li>
                        <a ><span><i className='icon-heart icons' /></span>Wishlist</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <CurrentView view={this.state.view} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Profile
