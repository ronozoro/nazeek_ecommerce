import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Products from '../porducts'

class Categorie extends Component {
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
              : <Products
                products={categorie.product_set}
                productsCount={categorie.product_set.length} />
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Categorie
