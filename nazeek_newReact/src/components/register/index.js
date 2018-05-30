import React, { Component } from 'react'
import RegisterForm from '../containers/RegisterForm'

class Register extends Component {
  handleSubmit = (values) => {
    console.log('values', values)
  }

  render () {
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
              <li className='breadcrumb-item active'>Register</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head center-head clearfix'>
              <h2 className='sec-title'>Register</h2>
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
                    <RegisterForm />
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

export default Register
