import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RequireAuth from './RequierAuth'
import Header from './common/header/header'
import Subscribe from './common/subscribe'
import Footer from './common/footer'
import Home from './containers/Home'
import Register from './register'
import Login from './containers/Login'
import ContactUs from './contact_us'
import Profile from './containers/userProfile'
import Product from './containers/Product'
import Products from './products/products'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'redux-notifications/lib/styles.css'

class App extends Component {
  render () {
    return (
      <div className='main-wrapper'>
        {/* <div id='preloader'>
          <div className='loading' />
        </div> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/contact-us' component={ContactUs} />
          <Route exact path='/profile' component={RequireAuth(Profile)} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/products' component={Products} />
          <Redirect to='/' />
        </Switch>
        <Subscribe />
        <Footer />
      </div>
    )
  }
}

export default App
