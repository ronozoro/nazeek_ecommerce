import React from 'react'
import { Modal } from 'react-bootstrap'

const PaymentModal = ({ show, handleClose }) => {
  return (
    <Modal
      id='myModal-address'
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className='sec-head clearfix'>
          <h2 className='sec-title f-left'>Add New Method</h2>
          <button onClick={handleClose} type='button' className='close' data-dismiss='modal'>&times;</button>
        </div>
        <div className='modal-body'>
          <form className='form-st1' action='#'>
            <div className='form-group row'>
              <label className='col-sm-4 control-label'>City</label>
              <div className='col-sm-8'>
                <input type='text' className='form-control' placeholder='Enter yours here' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-4 control-label'>Area</label>
              <div className='col-sm-8'>
                <select className='form-control chosen-select'>
                  <option>Enter yours here</option>
                  <option>Enter yours here</option>
                  <option>Enter yours here</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-4 control-label'>Street</label>
              <div className='col-sm-8'>
                <input type='text' className='form-control' placeholder='Enter yours here' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-4 control-label'>Jadda/Avenue</label>
              <div className='col-sm-8'>
                <input type='text' className='form-control' placeholder='Enter yours here' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-4 control-label'>Huose</label>
              <div className='col-sm-8'>
                <input type='text' className='form-control' placeholder='Enter yours here' />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-4 control-label'>Extra directions</label>
              <div className='col-sm-8'>
                <input type='text' className='form-control' placeholder='Enter yours here' />
              </div>
            </div>
            <div className='form-check row marg-t20 marg-b20'>
              <div className='col-sm-offset-4 col-sm-8'>
                <div className='ui_checkbox'>
                  <input type='checkbox' name='example' />
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
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PaymentModal
