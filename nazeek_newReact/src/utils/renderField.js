import React from 'react'

export default ({ input, label, type, meta: { touched, error, warning } }) => (
  <React.Fragment>
    <input {...input} placeholder={label} type={type} className='form-control' />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </React.Fragment>
)
