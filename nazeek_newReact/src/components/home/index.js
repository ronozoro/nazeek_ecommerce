import React, { Component } from 'react'
import {WOW} from 'wowjs'
import HomeSlider from './homeSlider/homeSlider'
import NewArraival from '../containers/NewArrivals'
import RecentProducts from '../containers/RecentProducts'

class Home extends Component {
  componentDidMount () {
    this.props.fetchProducts()
    this.props.filterProducts('created_date')
    new WOW().init()
  }

  render () {
    return (
      <React.Fragment>
        <HomeSlider />
        <NewArraival />
        <RecentProducts />
      </React.Fragment>
    )
  }
}

export default Home
