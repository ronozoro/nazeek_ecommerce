import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBar from './sideBar'
import Product from './product'

class Products extends Component {
  state = {
    products: this.props.products
  }

  componentDidMount () {
    const {pathname} = this.props.location
    if (pathname === '/products') {
      this.props.fetchProducts()
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      products: nextProps.products
    })
  }

  setSort = (ev) => {
    const val = ev.target.value
    const products = this.state.products
    let newProducts

    switch (val) {
      case 'order':
        // newProducts = products.sort((a, b) => {
        //   if (a.orders < b.orders) return -1
        //   if (a.orders > b.orders) return 1
        //   return 0
        // })
        // this.setState({
        //   products: newProducts
        // })
        break
      case 'price-low':
        newProducts = products.sort((a, b) => {
          if (a.price < b.price) return 1
          if (a.price > b.price) return -1
          return 0
        })
        this.setState({
          products: newProducts
        })
        break

      case 'price-height':
        newProducts = products.sort((a, b) => {
          if (a.price < b.price) return -1
          if (a.price > b.price) return 1
          return 0
        })
        this.setState({
          products: newProducts
        })
        break
      default:
        return products
    }
  }

  render () {
    const {productsCount, isFetching} = this.props
    const {pathname} = this.props.location

    return (
      isFetching
        ? <div id='preloader'>
          <div className='loading' />
        </div>
        : <React.Fragment>
          {
            pathname === '/products' &&
            <div className='breadcrumb-bar'>
              <div className='container'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
                  <li className='breadcrumb-item'><a href='product-page.html'>Products</a></li>
                </ol>
              </div>
            </div>
          }
          <div className='container' style={{ paddingTop: pathname === '/products' ? '60px' : 0 }}>
            <div className='row'>
              <div className='col-lg-3 col-md-4'>
                <SideBar />
              </div>
              <div className='col-lg-9 col-md-8'>
                <div className='sec-head marg-b0 col-left-right clearfix'>
                  <h2 className='sec-title f-left'>Living Room</h2>
                  <div className='col--right clearfix'>
                    <div className='filter-sortrg'>
                      <i className='zmdi zmdi-unfold-more' />
                      <select className='form-control sort-s' onChange={this.setSort}>
                        <option value='order'>Orders</option>
                        <option value='price-low'>Price low</option>
                        <option value='price-height' >Price hight</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div className='sec-warpper'>
                  <p className='p-results'>{productsCount || this.state.products.length} Results</p>
                  <div className='product-result-list'>
                    <div className='row'>
                      {
                        this.state.products.map((product) => {
                          return <Product product={product} />
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
  }
}

export default Products
