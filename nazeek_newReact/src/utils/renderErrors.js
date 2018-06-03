import React from 'react'

export default (error) => {
  if (Object.keys(error).length) {
    let errors = []
    for (var key in error) {
      errors.push((<div key={key}><strong>{error[key]}</strong></div>))
    }

    return (
      <div className='alert alert-danger'>
        {errors}
      </div>
    )
  } else {
    return null
  }
}
