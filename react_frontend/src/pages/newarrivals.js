import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";

require('./offerStyles.css')
import { getProducts } from "../actions/shopActions";
import { getProdDetails, getsorteditems } from '../actions/shopActions';
import { setToCart } from '../actions/cart'
import { getItemsOfCart } from '../actions/cart'
import { addToWishList } from '../actions/WishlistListActions'
import { Menu, MenuItem, Icon, Sidebar, Segment, Dimmer, Image, Loader, Grid, GridColumn, GridRow, Button } from 'semantic-ui-react'

class NewArivals extends React.Component {
  constructor() {
    super();
  }

  handleChange(e, object) {
    // console.log({ x: object.prod, xx: object.varId });
    this.props.setToCart(object)
  }
  handleClick(product) {
    // console.log(product);

    this.props.setToCart(product)
  }
  wishListClisk(product) {
    // console.log(product);

    this.props.addToWishList(product)
  }
  handleProdDetails(product) {
    //   console.log(product);
    this.props.getProdDetails(product.object)
  }
  // componentDidMount() {
  //   //this.props.getsorteditems('modified_date')
  //   //this.props.getProducts()
  // }
  item(object) {

    return <div className="product-item" style={{ width: 160 }}>
      <Link to="/productDetails" className="proThumb">
        <img src={'data:image/png;base64, ' + object.image} alt="" className="img-responsive Thumb-main" />
        <img src={'data:image/png;base64, ' + object.image} alt="" className="img-responsive Thumb-hover" />
      </Link>
      <div className="proTxt">
        <p className="re-salary"><span class="sa-new">{object.price} DK</span></p>
        <p className="desc-p">Lorem ipsum dolor sit amet, consectetur</p>
        <a href="#" className="addCart" onClick={this.handleClick.bind(this, { prod: object, varId: { id: 1 } })}>Add To Cart</a>
      </div>
      <a href="#" className="favorite-pro-btn"><i class="icon-heart icons" onClick={this.wishListClisk.bind(this, { object: object })}></i></a>
    </div>

    // return <div className="recent-item clearfix" style={{width: 500}}>
    //                 <Link to="/productDetails" className="recThumb">
    //                 <img alt="" className="img-responsive Thumb-main" src={'data:image/png;base64, ' + object.image}
    //                        onClick={this.handleProdDetails.bind(this,object)}/>
    //                   <img src={'data:image/png;base64, ' + object.image} alt="" className="img-responsive Thumb-hover"/>
    //                 </Link>
    //                 <div className="recTxt">
    //                   <p className="re-salary">
    //                     <span className="sa-new">{object.price}</span>
    //                     <span className="sa-old">{object.price}</span>
    //                   </p>
    //                   <p className="desc-p">
    //                               {object.Description}	this is description	
    //                                           </p>
    //                           <a href="#" className="addCart" onClick={this.handleClick.bind(this,{prod:object,varId:{id:1}})}>Add To Cart</a>
    //                   <div className="label-xs">offers</div>
    //                 </div>
    //                 <a href="#" className="favorite-pro-btn"><i className="icon-heart icons" onClick={this.wishListClisk.bind(this,{object:object})}></i></a>
    //               </div>
  }

  render() {
    console.log(this.props.products)
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      slidesToScroll: 1,
      speed: 500,
      slidesToShow: 1,
    };
    var settingsArrivals = {
      dots: true,
      arrows: false,
      infinite: true,
      slidesToScroll: 4,
      speed: 500,
      slidesToShow: 4,
    };
    return (
      <div style={{ width: 1380, margin: 'auto' }}>
        <Grid columns={2}>
          <Grid.Column width={4}>
            <div className="offers-box">
              <div className="sec-head clearfix">
                <h2 className="sec-title f-left">OFFERS</h2>
                <a href="#" className="more-page f-right">more <i className="icon-arrow-right icons"></i></a>
              </div>
              <Slider {...settings} stle={{ marginLeft: -35 }}>
                {this.props.products.map(prod => {
                  return <div>

                    <div className="item">
                      <div className="offer-item">
                        <div className="offer-top clearfix">
                          <div className="offer-desc">
                            <p className="re-salary">
                              <span className="sa-new">{prod.price} DK</span>
                              <span className="sa-old">{prod.price} DK</span>
                            </p>
                            <p className="desc-p">
                                {prod.Description} {prod.description}
													</p>
                          </div>
                          <div className="save-circle"><p>save<span>15: DK</span></p></div>
                        </div>
                        <div className="offer-bottom" style={{margin: 'auto', width: 200}}>
                          <a href="#" className="offerThumb">
                            <img src={'data:image/png;base64, ' + prod.image}  style={{width: 236,height: 210}} alt="" className="img-responsive" />
                          </a>
                          <a href="#" className="favorite-pro-btn"><i class="icon-heart icons" onClick={this.wishListClisk.bind(this,{object:prod})}></i></a>
                          <div className="add-div">
                            <a href="#" className="addCart" onClick={this.handleClick.bind(this,{prod:prod,varId:{id:1}})}>Add To Cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }


              </Slider>
            </div>

          </Grid.Column>
          <Grid.Column width={10}>
            {this.props.products.length ? <Slider {...settingsArrivals} >
              <div >
                <div className="item" >
                  {this.props.products[0] ? this.item(this.props.products[0]) : null}
                  {this.props.products[1] ? this.item(this.props.products[1]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[2] ? this.item(this.props.products[2]) : null}
                  {this.props.products[3] ? this.item(this.props.products[3]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[4] ? this.item(this.props.products[4]) : null}
                  {this.props.products[5] ? this.item(this.props.products[5]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[6] ? this.item(this.props.products[6]) : null}
                  {this.props.products[7] ? this.item(this.props.products[7]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[8] ? this.item(this.props.products[8]) : null}
                  {this.props.products[9] ? this.item(this.props.products[9]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[10] ? this.item(this.props.products[10]) : null}
                  {this.props.products[11] ? this.item(this.props.products[11]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[12] ? this.item(this.props.products[12]) : null}
                  {this.props.products[13] ? this.item(this.props.products[13]) : null}
                </div>
              </div>
              <div >
                <div className="item" >
                  {this.props.products[14] ? this.item(this.props.products[14]) : null}
                  {this.props.products[15] ? this.item(this.props.products[15]) : null}
                </div>
              </div>
            </Slider> : null
            }


          </Grid.Column>
        </Grid>

      </div>)

  }
}
const mapStateToProps = (state, Props) => {
  return {
    products: state.shop.products

  }

}

export default connect(mapStateToProps, { getProducts, setToCart, getProdDetails, addToWishList })(NewArivals);