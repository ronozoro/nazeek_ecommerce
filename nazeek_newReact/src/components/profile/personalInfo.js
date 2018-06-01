import React from 'react'

const PersonalInfo = ({ user }) => {
  return (
    <div className='col-lg-9 col-md-8 col-sm-7'>
      <div className='sec-head clearfix'>
        <h2 className='sec-title f-left'>Personal Information</h2>
      </div>
      <div className='sec-warpper'>
        <div className='row'>
          <div className='col-lg-7 col-md-11 col-sm-12'>
            <form className='form-st1' action='#'>
              <div className='form-group row'>
                <label className='col-sm-3 control-label'>Full Name</label>
                <div className='col-sm-9'>
                  <div className='control--group input-edit'>
                    <input type='text' className='form-control' value={user.full_name} disabled />
                    <span className='fc-icon'><i className='icon-user icons' /></span>
                    <span className='edit-btnInput'><i className='zmdi zmdi-border-color' /></span>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-3 control-label'>Password</label>
                <div className='col-sm-9'>
                  <div className='control--group input-edit'>
                    <input type='password' className='form-control' value='Password' disabled />
                    <span className='fc-icon'><i className='icon-lock-open icons' /></span>
                    <span className='edit-btnInput'><i className='zmdi zmdi-border-color' /></span>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-3 control-label'>Email</label>
                <div className='col-sm-9'>
                  <div className='control--group input-edit'>
                    <input type='email' className='form-control' value={user.email} disabled />
                    <span className='fc-icon'><i className='icon-envelope icons' /></span>
                    <span className='edit-btnInput'><i className='zmdi zmdi-border-color' /></span>
                  </div>
                </div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-3 control-label'>Moible</label>
                <div className='col-sm-9'>
                  <div className='control--group input-edit'>
                    <input type='text' className='form-control' value={user.mobile} disabled />
                    <span className='fc-icon'><i className='icon-screen-smartphone icons' /></span>
                    <span className='edit-btnInput'><i className='zmdi zmdi-border-color' /></span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PersonalInfo
