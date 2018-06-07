import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  componentDidMount () {
    this.props.getDummyPages()
  }

  render () {
    const { pages, isFetching } = this.props

    return (
      <footer id='footer'>
        <div className='top-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-sm-6 col-xs-6'>
                <div className='f-box'>
                  <h2>Contact Us</h2>
                  <ul className='f-menu'>
                    <li>
                      <Link to='/contact-us'>Customer Care</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Producer/Designer</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Career</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-xs-6'>
                <div className='f-box'>
                  <h2>Customer Service</h2>
                  <ul className='f-menu'>
                    {
                      isFetching
                        ? <li />
                        : pages.map((page) => {
                          return <li><Link to={{
                            pathname: `/static/${page.page_type}`,
                            desc: page.desc,
                            img: page.image,
                            title: page.page_type
                          }}>{page.page_type}</Link></li>
                        })
                    }
                  </ul>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-xs-6'>
                <div className='f-box'>
                  <h2>Delivery & Return</h2>
                  <ul className='f-menu'>
                    <li><a href='#'>Delivary Time</a></li>
                    <li><a href='#'>Exchange & Return</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 col-sm-6 col-xs-6'>
                <div className='f-box'>
                  <h2>Payment Methods</h2>
                  <ul className='f-menu'>
                    <li><i className='fa fa-cc-visa' aria-hidden='true' />Visa</li>
                    <li><i className='fa fa-cc-mastercard' aria-hidden='true' />Master Card</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-footer'>
          <div className='container'>
            <div className='social-site'>
              <h2>Follow us on </h2>
              <ul className='social-menu clearfix'>
                <li className='facebook'>
                  <a href='#' target='_blank'><i className='fa fa-facebook' aria-hidden='true' /></a>
                </li>
                <li className='twitter'>
                  <a href='#' target='_blank'><i className='fa fa-twitter' aria-hidden='true' /></a>
                </li>
                <li className='instagram'>
                  <a href='#' target='_blank'><i className='fa fa-instagram' aria-hidden='true' /></a>
                </li>
                <li className='snapchat'>
                  <a href='#' target='_blank'><i className='fa fa-snapchat-ghost' aria-hidden='true' /></a>
                </li>
              </ul>
            </div>
            <div className='copy-right'>2018 Nazzek All rights Reserved | powered by line</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
