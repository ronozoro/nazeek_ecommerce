import React from 'react'
import emailImg from '../../assets/images/email.png'

const Subscribe = () => {
  return (
    <section className='section-subscribe'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-sm-6'>
            <div className='scribe-txt'>
              <img src={emailImg} alt='' />
              <p>Subscrib For Mailing List</p>
            </div>
          </div>
          <div className='col-md-offset-2 col-md-5 col-sm-6'>
            <form className='scribe-form' action='#'>
              <input type='email' className='form-control' placeholder='Enter Your Mail' />
              <button type='submit' className='btn btn-scribe'><i className='icon-paper-plane icons' /></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
