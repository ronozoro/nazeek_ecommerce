import React from 'react'
import CuostmerCare from './cuostmerCare'
import ProducerDesigner from './producerDesigner'
import Career from './career'

const Contact = () => {
  return (
    <React.Fragment>
      <div className='breadcrumb-bar'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
            <li className='breadcrumb-item active'>Contact us</li>
          </ol>
        </div>
      </div>
      <div className='content-innerPage'>
        <div className='container'>
          <div className='sec-head clearfix'>
            <h2 className='sec-title f-left'>CONCAT US</h2>
          </div>
          <CuostmerCare />
          <ProducerDesigner />
          <Career />
        </div>
      </div>

    </React.Fragment>
  )
}

export default Contact
