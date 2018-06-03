import React, { Component } from 'react'
// import PropTypes from "prop-types";
import {reduxForm, Field, propTypes} from 'redux-form'
import {required} from 'redux-form-validators'
import {renderField, renderError, renderCheckbox} from '../../utils/renderUtils'
import {signupUser} from '../../actions/authActions'

class Signup extends Component {
    static propTypes = {
      ...propTypes
    };

    render () {
      const { handleSubmit, error } = this.props
      var divStyle = {
        color: 'blue'
      }
      return (
        <div class='block-register'>
          <div class='row'>
            <div class='col-md-6 col-sm-10 margin-auto'>
              <div class='block-bySocial'>
                <h3>Sign up with social media</h3>
                <ul class='sign-Social clearfix'>
                  <li class='s-facebook'>
                    <a href='#'><i class='fa fa-facebook' aria-hidden='true' />Facebook</a>
                  </li>
                  <li class='s-twitter'>
                    <a href='#'><i class='fa fa-twitter' aria-hidden='true' />Twitter</a>
                  </li>
                  <li class='s-instagram'>
                    <a href='#'><i class='fa fa-instagram' aria-hidden='true' />Instagram</a>
                  </li>
                </ul>
              </div>
              <div class='signOr'><span>OR</span></div>
              <form horizontal
                className='form-st1'
                onSubmit={handleSubmit}>
                <h4 className='text-md-center'>Sign Up</h4>
                <hr />
                <fieldset className='form-group'>
                  <Field name='username' label='Username' component={renderField}
                    type='text' validate={[required({ message: 'This field is required.' })]} />
                </fieldset>

                <fieldset className='form-group'>
                  <Field name='full_name' label='Full Name' component={renderField}
                    type='text' validate={[required({ message: 'This field is required.' })]}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Field name='password1' label='Password' component={renderField}
                    type='password' validate={[required({ message: 'This field is required.' })]}
                  />
                </fieldset>

                <fieldset className='form-group'>
                  <Field name='password2' label='Confirm Password' component={renderField}
                    type='password' validate={[required({ message: 'This field is required.' })]}
                  />
                </fieldset>

                <fieldset className='form-group'>
                  <Field name='email' label='Email' component={renderField}
                    type='text' />
                </fieldset>
                <fieldset className='form-group'>
                  <Field name='mobile' label='Mobile' component={renderField}
                    type='text' />
                </fieldset>

                <fieldset className='form-check'>
                  <Field name='terms_conditions' label='Accept of term of use&policy'
                    component={renderCheckbox}
                    type='checkbox'
                    validate={[required({message: 'You must accept the terms to signup'})]} />
                  <br />
                  <Field name='subscribe' label='Subscribe newsletters' component={renderCheckbox}
                    type='checkbox' />
                </fieldset>

                <fieldset className='form-group'>
                  {renderError(error)}
                  <button action='submit' className='btn btn-primary btn-submit'>Sign Up</button>
                  <p class='aready-p'>Already have an account? <a href='login.html'>login</a></p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      )
    }
}

// Sync field level validation for password match
const validateForm = values => {
  const errors = {}
  const { password1, password2 } = values
  if (password1 !== password2) {
    errors.password2 = 'Passwords does not match.'
    errors.password1 = 'Passwords does not match.'
  }
  return errors
}

export default reduxForm({
  form: 'signup',
  validate: validateForm,
  onSubmit: signupUser
})(Signup)
