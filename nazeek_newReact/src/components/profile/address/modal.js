import React from 'react'
import { Modal } from 'react-bootstrap'
import AddressForm from '../../containers/AddressForm'

const AddressModal = ({ show, handleClose }) => {
  return (
    <Modal
      id='myModal-address'
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className='sec-head clearfix'>
          <h2 className='sec-title f-left'>Add New Address</h2>
          <button onClick={handleClose} type='button' className='close' data-dismiss='modal'>&times;</button>
        </div>
        <div className='modal-body'>
          <AddressForm />
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddressModal
