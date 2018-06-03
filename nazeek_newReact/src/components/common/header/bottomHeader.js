import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BottomHeader extends Component {
  componentDidMount () {
    this.props.fetchCategoties()
  }
  render () {
    const { categories, isFetching, error } = this.props
    return (
      <div className='header-bottom'>
        <div className='container'>

          <div className='hb-right clearfix'>
            <a href='#' className='btn-design'>design your room</a>
            <a href='#menu' className='hamburger is-closed'>
              <span className='hamb-top' />
              <span className='hamb-middle' />
              <span className='hamb-bottom' />
            </a>
          </div>

          <div className='hb-left clearfix'>
            <ul className='menu-st search-by clearfix'>
              <li className='dropdown'>
                <a href='product-page.html' data-toggle='dropdown'><i className='icon-magnifier icons' aria-hidden='true' /> search by<span className='m-arrow'><i className='icon-arrow-down icons' /></span></a>

                <ul className='dropdown-menu multi-level' role='menu' aria-labelledby='dropdownMenu'>

                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>rooms</a>
                    <div className='dropdown-menu'>
                      <h3>rooms</h3>
                      <ul>
                        <li><a href='#'>Bedroom</a></li>
                        <li><a href='#'>Livingroom</a></li>
                        <li><a href='#'>Kids room</a></li>
                        <li><a href='#'>Kitchen</a></li>
                        <li><a href='#'>Bathroom</a></li>
                        <li><a href='#'>Dinning room</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>brands</a>
                    <div className='dropdown-menu'>
                      <h3>brands</h3>
                      <ul>
                        <li><a href='product-page.html'>Bedroom</a></li>
                        <li><a href='product-page.html'>Livingroom</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>styles</a>
                    <div className='dropdown-menu'>
                      <h3>styles</h3>
                      <ul>
                        <li><a href='product-page.html'>Bedroom</a></li>
                        <li><a href='product-page.html'>Livingroom</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>occasions</a>
                    <div className='dropdown-menu'>
                      <h3>occasions</h3>
                      <ul>
                        <li><a href='product-page.html'>Bedroom</a></li>
                        <li><a href='product-page.html'>Livingroom</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>

              </li>
            </ul>
            <ul className='menu-st main-menu clearfix'>
              {
                isFetching
                  ? <li />
                  : categories.map((categorie) => {
                    return (
                      <li className='dropdown'>
                        <Link to={`/categories/${categorie.id}`} onClick={() => this.props.fetchCategotie(categorie.id)}>{categorie.title}</Link>
                      </li>
                    )
                  })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BottomHeader
