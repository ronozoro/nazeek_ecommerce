import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handleSubmit }) => {
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Username</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field name='username' component='input' type='text' className='form-control' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field name='password' component='input' type='password' className='form-control' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-check row'>
        <div className='col-sm-offset-4 col-sm-7'>
          <a href='#' className='forget-pass'><i className='icon-question icons' />Forget Password ?</a>
        </div>
        <div className='col-sm-offset-4 col-sm-7'>
          <div className='ui_checkbox'>
            <Field type='checkbox' name='remember-me' component='input' />
            <label>Remember me</label>
          </div>
        </div>
      </div>
      <button type='submit' className='btn btn-submit'>Log in</button>
      <p className='aready-p'>don't have an account? <Link to='/register'>create account</Link></p>
    </form>

  )
}

export default reduxForm({
  form: 'login'
})(LoginForm)
