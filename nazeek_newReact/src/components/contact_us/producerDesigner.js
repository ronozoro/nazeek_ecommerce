import React from 'react'

const ProducerDesigner = () => {
  return (
    <div className='contact-group-block' id='Preducer-Designer'>
      <h2>Preducer / Designer </h2>
      <div className='contact-list-row'>
        <div className='row is-flex'>
          <div className='col-sm-4'>
            <div className='con-block clearfix'>
              <div className='con-icon'>
                <i className='icon-screen-smartphone icons' />
              </div>
              <div className='con-txt'>
                <p>+965-333-333-333</p>
                <p>(available Sunday to Thusday </p>
                <p>From 9 :00 AM to 5 : 00 PM Kuwait Loacl Time ) (GMT +3)</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4'>
            <div className='con-block clearfix'>
              <div className='con-icon'>
                <i className='icon-envelope-open icons' />
              </div>
              <div className='con-txt'>
                <h3>You are a producer , designer an interior designer </h3>
                <p>designer@nazzek.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-form-block'>
        <form className='form-st2' action='#'>
          <div className='row'>
            <div className='col-sm-9'>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Name' />
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='form-group'>
                    <input type='email' className='form-control' placeholder='Email' />
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Mobile (optional)' />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Subject' />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='form-group'>
                    <textarea className='form-control' placeholder='Comment' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='form-group'>
                <label className='upload-label'>Upload Files (optional)</label>
                <div className='upload-file'>
                  <div className='btn-upload'>
                    <input type='file' className='form-control' />
                    <i className='icon-plus icons' /> Add File
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-offset-4 col-sm-4'>
              <button type='submit' className='btn btn-submit btn-block marg-t20'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProducerDesigner
