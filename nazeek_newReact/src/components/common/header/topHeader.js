import React from 'react'
import { Link } from 'react-router-dom'
const TopHeader = () => {
  return (
    <div className='header-top'>
      <div className='container'>
        <ul className='topHmenu-left clearfix'>
          <li><a href='contact.html'><i className='fa fa-envelope-o' aria-hidden='true' />mail@mail.com</a></li>
          <li><i className='fa fa-mobile' aria-hidden='true' />+965-444-444-444</li>
        </ul>
        <ul className='topHmenu-right clearfix'>
          <li>
            <Link to='/register'>
              <i className='icon-user-follow icons' />Register
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <i className='icon-login icons' />Sigin
            </Link>
          </li>
          <li>
            <a href='index_ar.html'><i className='icon-globe icons' />Arabic</a>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default TopHeader
