import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { getProducts } from "../../actions/shopActions";
import { getProdDetails ,getsorteditems} from '../../actions/shopActions';
import { setToCart } from '../../actions/cart'
import { getItemsOfCart } from '../../actions/cart'
import {addToWishList} from '../../actions/WishlistListActions'
import { Container, Divider, Table, Rating, Header ,Pagination} from 'semantic-ui-react'
import { Button, Checkbox,Menu,Item, Icon, Grid ,Dimmer,Loader} from 'semantic-ui-react'
import Filtermenue from '../filtermenue'

class ShopData extends Component {
    constructor(props){
        super(props);
        this.state={
            rating:0,
            maxRating:0,
            products:props.products,
            currentPage: 1,
            itemsPerPage: 3,
            currentitems:[],
            firstItem:0,
            lastItem:null
        }
        this.change=this.change.bind(this),
        this.nextPage=this.nextPage.bind(this),
        this.prevPage=this.prevPage.bind(this),
        this.handleClick=this.handleClick.bind(this)
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
  
 
    handleClick1(product) {
        // console.log(product);
        
        this.props.setToCart(product)
    }
    handleChange(e, object) {
        // console.log({ x: object.prod, xx: object.varId });
        this.props.setToCart(object)


    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      nextPage(){
        var items = this.state.products.slice(firstItem, this.state.itemsPerPage)
        this.setState({currentPage:this.state.currentPage+1,currentitems:items})
        console.log(this.state.currentPage);
        
      }
      prevPage(){
        this.setState({currentPage:this.state.currentPage-1})
        console.log(this.state.currentPage);
        
    
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
      if(this.state.products){
        var items = this.state.products.slice(firstItem, this.state.itemsPerPage)
        this.setState({currentitems:items,firstItem:this.state.itemsPerPage})
        console.log(this.state.currentitems);
        
        }
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
                                            <label className="highlight" onClick={(e) => { thos.handleChange(e, { prod: object, varId: product }) }} style={style}>
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
                                        <i className="icon-basket icons" onClick={this.handleClick1.bind(this,{prod:object,varId:object.object.variation_set[0]})} />
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
        const current=this.state.currentitems;

        const { data,currentPage,itemsPerPage,filteredDataList } = this.state;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
              return (
                <Menu.Item as='a'
                  key={number}
                  id={number}
                  onClick={this.handleClick}>{number}</Menu.Item>       
              );
            });
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
                                <p className="p-results">{current.length} Results</p>
                                <div className="product-result-list">
                                    <div className="row">
                                        {current.map((object, i) => this.renderProducts({ object }))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Menu floated='right'  pagination>
            <Menu.Item as='a' onClick={this. prevPage} icon>
              <Icon name='chevron left' />
            </Menu.Item>
               {renderPageNumbers}           
            <Menu.Item as='a' icon>
              <Icon name='chevron right' onClick={this.nextPage} />
            </Menu.Item>
          </Menu>
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
                {/* <Pagination
    defaultActivePage={1}
    firstItem={this.props.products[0]}
    lastItem={this.props.products[3]}
    pointing
    secondary
    totalPages={this.props.products.length/2}
  /> */}
    
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