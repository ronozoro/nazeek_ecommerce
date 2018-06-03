import React, { Component } from 'react'
import SideBar from './sideBar'
import kuImg from '../../assets/images/ku.png'

class Products extends Component {
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchCategotie(id)
  }

  render () {
    console.log('hh')

    return (
      <React.Fragment>
        <div class='breadcrumb-bar'>
          <div class='container'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'><a href='index.html'><i class='icon-home icons' /></a></li>
              <li class='breadcrumb-item active'>All CATEGORIES</li>
            </ol>
          </div>
        </div>
        <div class='content-innerPage'>
          <div class='container'>
            <div class='row'>
              <div class='col-lg-3 col-md-4'>
                <SideBar />
              </div>
              <div class='col-lg-9 col-md-8'>
                <div class='sec-head marg-b0 col-left-right clearfix'>
                  <h2 class='sec-title f-left'>Living Room</h2>
                  <div class='col--right clearfix'>
                    <div class='filter-sortrg'>
                      <i class='zmdi zmdi-unfold-more' />
                      <select class='form-control sort-s'>
                        <option>Sort by</option>
                        <option>Sort</option>
                        <option>Sort</option>
                        <option>Sort</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div class='sec-warpper'>
                  <p class='p-results'>23 Results</p>
                  <div class='product-result-list'>
                    <div class='row'>
                      <div class='col-lg-4 col-md-6 col-sm-6 col-xs-6'>
                        <div class='product-result-item'>
                          <a href='#' class='pro-resThumb'>
                            <img data-image='color1' class='active' src={kuImg} alt='' />
                          </a>
                          <div class='pro-resCaption'>
                            <div class='color-choose'>
                              <div>
                                <input data-image='color1' type='radio' id='color1' name='color' value='color1' checked />
                                <label for='color1'>
                                  <span />
                                </label>
                              </div>
                              <div>
                                <input data-image='color2' type='radio' id='color2' name='color' value='color2' />
                                <label for='color2'>
                                  <span />
                                </label>
                              </div>
                              <div>
                                <input data-image='color3' type='radio' id='color3' name='color' value='color3' />
                                <label for='color3'>
                                  <span />
                                </label>
                              </div>
                              <div>
                                <input data-image='color4' type='radio' id='color4' name='color' value='color4' />
                                <label for='color4'>
                                  <span />
                                </label>
                              </div>
                              <div>
                                <input data-image='color5' type='radio' id='color5' name='color' value='color5' />
                                <label for='color5'>
                                  <span />
                                </label>
                              </div>
                            </div>
                            <div class='pro-resTxt'>
                              <h2 class='pr-title'><a href='#'>Item Name</a></h2>
                              <p class='pr-shop'>Shop Name</p>
                              <span class='pr-sa'>345 DK</span>
                              <ul class='pro-resAction'>
                                <li>
                                  <a href='#' class='heart-btn'><i class='icon-heart icons' /></a>
                                </li>
                                <li>
                                  <a href='#' class='basket-btn'><i class='icon-basket icons' /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='pagination-product clearfix'>
                      <a href='#' class='pagination-next'><i class='icon-arrow-left icons' /></a>
                      <a href='#' class='active'>1</a>
                      <a href='#'>2</a>
                      <a href='#'>3</a>
                      <a href='#'>...</a>
                      <a href='#'>34</a>
                      <a href='#' class='pagination-prev'><i class='icon-arrow-right icons' /></a>
                    </div>
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
