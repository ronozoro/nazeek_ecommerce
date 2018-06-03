import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import LoginForm from '../containers/LoginForm'

class Login extends Component {
  render () {
    if (this.props.authenticated) {
      return <Redirect to='/' />
    }

    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>Login</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head center-head clearfix'>
              <h2 className='sec-title'>Sign in</h2>
            </div>
            <div className='block-register'>
              <div className='row'>
                <div className='col-md-6 col-sm-10 margin-auto'>
                  <div className='block-bySocial'>
                    <h3>Sign up with social media</h3>
                    <ul className='sign-Social clearfix'>
                      <li className='s-facebook'>
                        <a href='#'><i className='fa fa-facebook' aria-hidden='true' />Facebook</a>
                      </li>
                      <li className='s-twitter'>
                        <a href='#'><i className='fa fa-twitter' aria-hidden='true' />Twitter</a>
                      </li>
                      <li className='s-instagram'>
                        <a href='#'><i className='fa fa-instagram' aria-hidden='true' />Instagram</a>
                      </li>
                    </ul>
                  </div>
                  <div className='signOr'><span>OR</span></div>
                  <div className='block-form'>
                    <LoginForm />
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

export default Login
