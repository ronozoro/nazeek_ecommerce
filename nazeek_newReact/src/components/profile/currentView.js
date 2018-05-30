import React from 'react'
import ProfileInfo from './profileInfo'
import AddressBook from './addressBook'
import PresonalInfo from './personalInfo'
import Payment from './payment'
import OrderHistory from './orderHistory'

const CurruntView = ({view}) => {
  switch (view) {
    case 'presonal-info':
      return <PresonalInfo />
    case 'address-book':
      return <AddressBook />
    case 'order-history':
      return <OrderHistory />
    case 'payment':
      return <Payment />
    default:
      return <ProfileInfo />
  }
}

export default CurruntView
