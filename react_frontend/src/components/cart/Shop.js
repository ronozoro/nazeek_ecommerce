import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { getProducts } from "../../actions/shopActions";
import { getProdDetails ,getsorteditems} from '../../actions/shopActions';
import { setToCart } from '../../actions/cart'
import { getItemsOfCart } from '../../actions/cart'
import {addToWishList} from '../../actions/WishlistListActions'
import { Container, Divider, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Icon, Grid ,Dimmer,Loader} from 'semantic-ui-react'
import Filtermenue from '../filtermenue'

class ShopData extends Component {
    constructor(props){
        super(props);
        this.state={
            rating:0,
            maxRating:0,
            products:props.products
        }
        this.change=this.change.bind(this)
    }
    static propTypes = {
        getProducts: PropTypes.func.isRequired,
        getProdDetails :PropTypes.func.isRequired,
        setToCart: PropTypes.func.isRequired,
        getItemsOfCart: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getProducts();

    }
  
 
    handleClick(product) {
        // console.log(product);
        
        this.props.setToCart(product)
    }
    handleChange(e, object) {
        // console.log({ x: object.prod, xx: object.varId });
        this.props.setToCart(object)


    }
  

    wishListClisk(product){
        // console.log(product);
        
     this.props.addToWishList(product)
    }
    handleProdDetails(product){
    //   console.log(product);
      this.props.getProdDetails(product.object)
    }
    componentWillReceiveProps(nextPros){
      this.setState({products:nextPros.products})
    }
    renderProducts(object) {
        var thos = this
        return (
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                <div className="product-result-item">
                    <Link to="/productDetails" className="pro-resThumb">
                        <img data-image={object.object.id} className="active"
                            src={'data:image/png;base64, ' + object.object.image}
                            alt={object.object.name} onClick={this.handleProdDetails.bind(this,object)}/>
                    </Link>
                    <div className="pro-resCaption">
                        <div className="color-choose">
                            {
                                object.object.variation_set.map(function (product) {
                                    var style = {
                                        backgroundColor: product.color
                                    }

                                    return (
                                        <div>
                                            <input data-image={product.image} name={product.title}
                                                value={product.price} checked="" type="radio" />
                                            <label class="highlight" onClick={(e) => { thos.handleChange(e, { prod: object, varId: product }) }} style={style}>
                                                <span>
                                                </span>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="pro-resTxt">
                            <h2 className="pr-title"><a href="#">{object.object.title}</a></h2>
                            <p className="pr-shop">{object.object.seller_name}</p>
                            <span className="pr-sa">{object.object.price}</span>
                            <Rating icon='star' defaultRating={3} maxRating={5} />
                            <ul className="pro-resAction">
                                <li>
                                    <a href="#" className="heart-btn">
                                        <i className="icon-heart icons"  onClick={this.wishListClisk.bind(this,object)}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="basket-btn">
                                        <i className="icon-basket icons" onClick={this.handleClick.bind(this,{prod:object,varId:{id:1}})} />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderFilters() {
        return (
            <div>

            </div>
        )
    }
    change(event) {
        console.log(event.target.value);
        this.props.getsorteditems(event.target.value)

  }
    renderSortBy() {
        
        return (
            <div className="sec-head marg-b0 col-left-right clearfix">
                <h2 className="sec-title f-left">Products </h2>
                <div className="col--right clearfix">
                    <div className="filter-sortrg">
                        <i className="zmdi zmdi-unfold-more"></i>
                        <select className="form-control sort-s" id="lang" onChange={this.change} defaultValue={this.state.value}>
                                                      <option >Sort by</option>
                                                      <option value="title">title_ascending</option>
                                                      <option value="-title">title_descending</option>
                                                      <option value="id">id_ascending</option>
                                                      <option value="-id">id_descending</option>
                                                      <option value="price">price</option>


                                                </select>
                    </div>
                </div>
            </div>
        )
    }

    renderShop() {
        const products = this.state.products;
        if (products) {
            return (
                <div className="container">
                    <div className="row" style={{marginTop: 71}}>
                        <div className="col-lg-3 col-md-4">
                              <Filtermenue />
                        </div>
                        <div className="col-lg-9 col-md-8">
                            {this.renderSortBy()}
                            <div className="sec-warpper">
                                <p className="p-results">{products.length} Results</p>
                                <div className="product-result-list">
                                    <div className="row">
                                        {products.map((object, i) => this.renderProducts({ object }))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }

    render() {
        //  localStorage.clear('cart_token')
        if(!this.props.products){
          return  <Dimmer >
            <Loader/>
        </Dimmer>
        }
        else
        return (
            <div>
               
                {this.renderShop()}

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps, { getProducts,getsorteditems, setToCart, getItemsOfCart,addToWishList,getProdDetails })(ShopData);