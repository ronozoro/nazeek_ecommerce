import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

const RegisterForm = ({ handleSubmit }) => {
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Username</label>
        <div className='col-sm-7'>
          <div className='control--group input-tooltip'>
            <Field type='text' component='input' name='username' className='form-control' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
            <a href='#' data-toggle='tooltip' data-placement='top' title='Description should Username' className='fc-qusetion'><i className='icon-question icons' /></a>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Full Name</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='text' component='input' name='full-name' className='form-control' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='password' component='input' name='password1' className='form-control' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Confirm Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='password' component='input' name='password2' className='form-control' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Email</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='email' component='input' name='email' className='form-control' />
            <span className='fc-icon'><i className='icon-envelope icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Moible (Optional)</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='text' component='input' name='mobile' className='form-control' />
            <span className='fc-icon'><i className='icon-screen-smartphone icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-check row'>
        <div className='col-sm-offset-4 col-sm-7'>
          <div className='ui_checkbox'>
            <Field type='checkbox' component='input' name='accept' />
            <label>I Accept of term of use & policy</label>
          </div>
          <div className='ui_checkbox'>
            <Field type='checkbox' component='input' name='subscribe' />
            <label>Subscribe to newslater</label>
          </div>
        </div>
      </div>
      <div className='not-robot'>
        <img src='images/a1.jpg' alt='' className='img-responsive' />
      </div>
      <button type='submit' className='btn btn-submit'>Sign Up</button>
      <p className='aready-p'>Already have an account? <Link to='/login'>login</Link></p>
    </form>
  )
}

export default reduxForm({
  form: 'register'
})(RegisterForm)
