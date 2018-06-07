import React from 'react'
import ProfileInfo from './profileInfo'
import AddressBook from '../containers/Address'
import PresonalInfo from './personalInfo'
import Payment from './payment/payment'
import OrderHistory from './orderHistory'
import Wishlist from '../containers/Wishlist'

const CurruntView = ({ view, user, handleCurrentViewChange }) => {
  switch (view) {
    case 'presonal-info':
      return <PresonalInfo user={user} />
    case 'address-book':
      return <AddressBook />
    case 'order-history':
      return <OrderHistory />
    case 'payment':
      return <Payment />
    case 'wishlist':
      return <Wishlist />
    default:
      return <ProfileInfo handleCurrentViewChange={handleCurrentViewChange} />
  }
}

export default CurruntView
