import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../../utils/renderField'

const AddressForm = ({handleSubmit}) => {
  return (
    <form className='form-st1' onSubmit={handleSubmit}>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>City</label>
        <div className='col-sm-8'>
          <Field type='text' component={renderField} name='city' placeholder='Enter yours here' />
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Area</label>
        <div className='col-sm-8'>
          <Field name='type' component='select' props={{
            className: 'form-control chosen-select'
          }}>
            <option />
            <option>Shipping</option>
            <option>Billing</option>
          </Field>
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Street</label>
        <div className='col-sm-8'>
          <Field type='text' name='street' component={renderField} placeholder='Enter yours here' />
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Jadda/Avenue</label>
        <div className='col-sm-8'>
          <Field type='text' name='jadda' component={renderField} placeholder='Enter yours here' />
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>Huose</label>
        <div className='col-sm-8'>
          <Field type='text' name='house' component={renderField} placeholder='Enter yours here' />
        </div>
      </div>
      <div className='form-group row'>
        <label className='col-sm-4 control-label'>ZIP code</label>
        <div className='col-sm-8'>
          <Field type='text' name='zipcode' component={renderField} placeholder='Enter yours here' />
        </div>
      </div>
      <div className='form-check row marg-t20 marg-b20'>
        <div className='col-sm-offset-4 col-sm-8'>
          <div className='ui_checkbox'>
            <Field type='checkbox' name='example' component={renderField} />
            <label>This adress is defult</label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-offset-4 col-sm-8'>
          <button type='submit' className='btn btn-submit inline marg-t20'>Add</button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addressForm'
})(AddressForm)
