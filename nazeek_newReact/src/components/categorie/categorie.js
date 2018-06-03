import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SideBar from './sideBar'
import Product from './product'
class Products extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchCategotie(id)
  }

  render () {
    const { categorie, isFetching, error } = this.props
    console.log('categorie', categorie)

    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>All CATEGORIES</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          {
            isFetching
              ? <div id='preloader'>
                <div className='loading' />
              </div>
              : <div className='container'>
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
                          <select className='form-control sort-s'>
                            <option>Sort by</option>
                            <option>Sort</option>
                            <option>Sort</option>
                            <option>Sort</option>
                          </select>
                        </div>

                      </div>
                    </div>
                    <div className='sec-warpper'>
                      <p className='p-results'>{categorie.product_set.length} Results</p>
                      <div className='product-result-list'>
                        <div className='row'>
                          <div className='col-lg-4 col-md-6 col-sm-6 col-xs-6'>
                            {
                              categorie.product_set.map((product) => {
                                return <Product product={product} />
                              })
                            }
                          </div>
                        </div>
                        {/* <div className='pagination-product clearfix'>
                          <a href='#' className='pagination-next'><i className='icon-arrow-left icons' /></a>
                          <a href='#' className='active'>1</a>
                          <a href='#'>2</a>
                          <a href='#'>3</a>
                          <a href='#'>...</a>
                          <a href='#'>34</a>
                          <a href='#' className='pagination-prev'><i className='icon-arrow-right icons' /></a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Products
