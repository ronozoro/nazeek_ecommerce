import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import validate from './FromValidation'
import renderErrors from '../../utils/renderErrors'
import renderField from '../../utils/renderField'

const RegisterForm = ({ handleSubmit, errors, valid }) => {
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      {renderErrors(errors)}
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Username</label>
        <div className='col-sm-7'>
          <div className='control--group input-tooltip'>
            <Field type='text' component={renderField} name='username' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
            <a href='#' data-toggle='tooltip' data-placement='top' title='Description should Username' className='fc-qusetion'><i className='icon-question icons' /></a>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Full Name</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='text' component='input' name='full_name' className='form-control' />
            <span className='fc-icon'><i className='icon-user icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='password' component={renderField} name='password1' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Confirm Password</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='password' component={renderField} name='password2' />
            <span className='fc-icon'><i className='icon-lock-open icons' /></span>
          </div>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Email</label>
        <div className='col-sm-7'>
          <div className='control--group'>
            <Field type='email' component={renderField} name='email' />
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
            <Field type='checkbox' component={renderField} name='terms_conditions' />
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
      <button type='submit' className='btn btn-submit' disabled={!valid}>Sign Up</button>
      <p className='aready-p'>Already have an account? <Link to='/login'>login</Link></p>
    </form>
  )
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm)
