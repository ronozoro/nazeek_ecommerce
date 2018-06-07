import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo-site.png'

const middleHeader = () => {
  return (
    <div className='header-middle'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-3'>
            <Link to='/' className='logo-site'>
              <img src={Logo} alt='' className='img-responsive' />
            </Link>
          </div>
          <div className='col-md-6 col-sm-6'>
            <form className='form-search-head' action='#'>
              <input type='text' className='form-control' placeholder='Search' />
              <button type='submit' className='btn btn-submit-search'><i className='icon-magnifier icons' aria-hidden='true' /></button>
            </form>
          </div>
          <div className='col-md-3 col-sm-3'>
            <div className='clearfix'>
              <ul className='menu-purches clearfix'>
                <li className='favorite-btn'>
                  <Link to='/profile'><i className='icon-heart icons' /><span>0</span></Link>
                </li>
                <li className='cart-purches-btn'>
                  <Link to='/cart'><i className='icon-basket icons' /><span>23</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default middleHeader
