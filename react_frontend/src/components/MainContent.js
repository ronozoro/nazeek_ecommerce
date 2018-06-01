import React from 'react'
import {Switch, Route} from 'react-router-dom'
import RequireAuth from './auth/RequireAuth'
import Login from './auth/Login'
import Logout from './auth/Logout'
import Signup from './auth/Signup'
import SignupDone from './auth/SignupDone'
import AccountActivation from './auth/AccountActivation'
import UserProfile from './auth/UserProfile'
import UserProfileEdit from './auth/UserProfileEdit'
import PasswordChange from './auth/PasswordChange'
import PasswordReset from './auth/PasswordReset'
import PasswordResetDone from './auth/PasswordResetDone'
import PasswordResetConfirm from './auth/PasswordResetConfirm'
import Shop from './cart/Shop'
import Cart from './cart/cart'
import Checkout from './cart/checkout'
import NoMatch from './NoMatch'
import AddAddress from './cart/add-new-addres'
import Profile from '../components/profile/index'
import AddressBook from '../components/profile/address-book'
import Furneture from '../pages/furneture'
import Homedecore from '../pages/homedecore'
import newv from '../pages/new'
import Outdoor from '../pages/outdoor'
import Offers from '../pages/offers'
import Servware from '../pages/serveware'
import wishlist from '../components/profile/wishlist'
import Sidemenue from '../components/sidemenue'
import ProductDetails from '../components/cart/product-details'
import Home from '../components/home'
import products from '../components/products'
import Contact from '../components/contact'
import Payment from '../components/payment'
import OrderHistory from './profile/orderhistory'
const MainContent = () => (
  <div >
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/payment' component={Payment} />
      <Route path='/logout' component={Logout} />
      <Route path='/signup' component={Signup} />
      <Route path='/shop' component={Shop} />
      <Route path='/productDetails' component={ProductDetails} />
      <Route path='/cart' component={Cart} />
      <Route path='/addressbook' component={AddressBook} />
      <Route path='/AddAddress' component={AddAddress} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/account/confirm-email/:key' component={AccountActivation} />
      <Route path='/signup_done' component={SignupDone} />
      <Route path='/reset_password' component={PasswordReset} />
      <Route path='/reset_password_done' component={PasswordResetDone} />
      <Route path='/reset/:uid/:token/' component={PasswordResetConfirm} />
      <Route path='/profile' component={Profile} />
      <Route path='/orderhistory' component={OrderHistory} />
      <Route path='/userProfile' component={RequireAuth(UserProfile)} />
      <Route path='/profile_edit' component={RequireAuth(UserProfileEdit)} />
      <Route path='/change_password' component={RequireAuth(PasswordChange)} />
      <Route path='/furniture' component={Furneture} />
      <Route path='/homedecore' component={Homedecore} />
      <Route path='/newv' component={newv} />
      <Route path='/wishlist' component={wishlist} />
      <Route path='/outdoor' component={Outdoor} />
      <Route path='/offers' component={Offers} />
      <Route path='/sidemenue' component={Sidemenue} />
      <Route path='/sevewhere' component={Servware} />
      <Route path='/products' component={products} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default MainContent
