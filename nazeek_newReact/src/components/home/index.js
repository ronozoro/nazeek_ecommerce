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
        {
          this.props.isFetching
            ? <div id='preloader'>
              <div className='loading' />
            </div>
            : <React.Fragment>
              <NewArraival />
              <RecentProducts />
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default Home
