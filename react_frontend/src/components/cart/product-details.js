import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setToCart } from '../../actions/cart'
import { getProducts } from "../../actions/shopActions";
import {getReviewForProduct} from '../../actions/ReviewListActions'
import {changeQuantity} from "../../actions/cart";
import {addToWishList} from '../../actions/WishlistListActions'
import Reviews from './reviewForm'
import { Container, Divider, Table, Rating, Header, Tab } from 'semantic-ui-react'
import { Button, Checkbox, Icon, Grid } from 'semantic-ui-react'
import $ from 'jquery'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    static propTypes = {
        setToCart:PropTypes.func.isRequired
    };
    componentWillReceiveProps(nextProps) {
        this.setState({ product: nextProps.product })
    }
    componentDidMount(){
        this.props.getReviewForProduct(this.props.product.id)
    }
    handleClick(product) {
        console.log(product);
        
        this.props.setToCart(product)
    }
    wishListClisk(product){
        console.log(product);
        
     this.props.addToWishList(product)
    }

    test(){
        var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
    }


    onHover(){
        $('.image-zoom')
      .wrap('<span style="display:inline-block"></span>')
      .css('display', 'block')
      .parent()
      .zoom({
        url: $(this).find('img').attr('data-zoom')
      });
    }
    handleChange(e, object) {
        console.log({ x: object.prod, xx: object.varId });
        this.props.setToCart(object)


    }
    handleChangeQuantity(quantity,id,prodId){  
        this.props.changeQuantity({quantity:quantity,id:id,prodId:prodId})
    }
    render() {
        //  localStorage.clear('cart_token')
        console.log(this.props.product);
        const panes = [
            {
                menuItem: ' OVERVIEW', render: () => <Tab.Pane attached={false}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Tab.Pane>
            },
            {
                menuItem: ' DETAILS', render: () => <Tab.Pane attached={false}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Tab.Pane>
            },
            {
                menuItem: 'REVIEWS', render: () => <Tab.Pane attached={false}>

                    <Reviews />
                </Tab.Pane>
            },
        ]
        var thos = this
        return (
            <div class="content-innerPage">
                <div class="container">
                    <div class="product-detail-primary">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="block-product-slide">

                                    <div class="slider slider-for" style={{marginLeft:20}}>

                                        <div class="pro-slide-item">

                                            <div  class="pro--Thumb slider-for__item ex1" data-src={'data:image/png;base64, ' + this.props.product.image}>
                                                <img data-image={this.props.product.id} className="active"  class="image-zoom" 
                                                    src={'data:image/png;base64, ' + this.props.product.image} data-zoom="{{ featured_image | img_url: '1024x1024', scale: 2 }}"
                                                   alt={this.props.product.name} />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="slider slider-nav clearfix">

                                        {this.props.product.variation_set.map(product => {

                                            return thos.props.product.productimage_set.map(prod => {
                                                if (product.id === prod.product) {
                                                   return <div class="sp-nav">
                                                        <img data-image={prod.product} className="active"
                                                            src={'data:image/png;base64, ' + prod.image}
                                                            alt={product.name} />
    								             </div>
                                                }
                                            })
                                        })}

                                    </div>

                                    <div class="bottom-slide-pro clearfix">
                                        <ul class="share-pro clearfix">
                                            <li class="sh-share"><i class="icon-share icons"></i></li>
                                            <li class="sh-instgram">
                                                <a href="#" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                            </li>
                                            <li class="sh-face">
                                                <a href="#" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                        <ul class="links-meta-left clearfix">
                                            <li>
                                                <a href="#"><i class="icon-printer icons"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-envelope icons"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="pdp-right">
                                    <h3>Shop Name<a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i> {this.props.product.seller_name}</a></h3>
                                    <div class="sec-head marg-b0 clearfix">
                                        <h2 class="sec-title">{this.props.product.title}</h2>
                                    </div>
                                    <div class="pdp--list">
                                        <div class="pdp-ro">
                                            <p class="f-rguler">PRICE  : <span class="pr-sa">{this.props.product.price}</span></p>
                                        </div>
                                        <div class="pdp-ro">
                                            <p class="f-rguler">COLOR : </p>
                                            <div class="color-choose">
                                                {this.props.product.variation_set.map(function (product) {
                                                    var style = {
                                                        backgroundColor: product.color
                                                    }

                                                    return <div>
                                                        <input data-image="color1" type="radio" id="color1" name="color" value="color1" checked="" />
                                                        <label for="color1" onClick={(e) => { thos.handleChange(e, { prod: {object:thos.props.product}, varId: product }) }} style={style}>
                                                            <span>

                                                            </span>
                                                        </label>
                                                    </div>
                                                })
                                                }

                                            </div>
                                        </div>
                                        <div class="pdp-ro">
                                            <p class="f-rguler">QUANTITY:</p>
                                            <div class="quantity">

                                                <input type="number" name="count-quat1" class="count-quat" defaultValue="1"  />
                                                {/* onChange={(e)=>{thos.handleChangeQuantity(e.targrt.value,1,thos.props.product.id)}} */}
                                                {/* <div class="btn button-count inc jsQuantityIncrease"><i class="fa fa-plus" aria-hidden="true"></i></div> */}
                                                {/* <div class="btn button-count dec jsQuantityDecrease" minimum="1"><i class="fa fa-minus" aria-hidden="true"></i></div> */}
                                            </div>
                                        </div>
                                        <div class="pdp-ro">
                                            <p>Item id : {this.props.product.id}</p>
                                        </div>
                                        <div class="pdp-ro">
                                            <p><i class="icon-check icons"></i>Stock Availbale</p>
                                        </div>
                                        <div class="pdp-ro">
                                            <p>Delivery Time: 34 Hours </p>
                                        </div>
                                        <div class="pdp-ro">
                                            <p class="f-rguler">Dimensions: 234 23*3434</p>
                                        </div>
                                    </div>
                                    <div class="pdp--action clearfix">
                                        <a href="#"  class="addCart"> <i className="icon-basket icons"  onClick={this.handleClick.bind(this,{prod:{object:this.props.product},varId:{id:1}})}/></a >
                                        <a href="#" class="favorite-pro-btn"><i class="icon-heart icons"  onClick={this.wishListClisk.bind(this,{object:this.props.product})}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-details-tab">
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

                    </div>
                    <div class="box-like-product">
                        <div class="sec-head clearfix">
                            <h2 class="sec-title">Similer Items</h2>
                        </div>

                        <div class="like-product-content">
                            <div class="owl-carousel style-owl" id="like-product-slider">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage" >
                                        <div class="owl-item cloned" style={{ width: 333.333, marginRight: 10 }}>

                                            {this.props.product.variation_set.map(product => {

                                                return thos.props.product.productimage_set.map(prod => {
                                                    if (product.id === prod.product) {
                                                        console.log("eualllll");

                                                        return <div class="item">
                                                                <div class="like-product-item clearfix">
                                                                    <a href="#" class="lp-thumb">
                                                                        <img data-image={prod.product} className="active"
                                                                            src={'data:image/png;base64, ' + prod.image}
                                                                            alt={product.name} />
                                                                    </a>
                                                                    <div class="lp-txt">
                                                                        <p class="desc-p">
                                                                            {product.title}
                                                                        </p>
                                                                        <div class="star-rating">
                                                                            <span style={{ width: '60%' }}><strong class="rating">3</strong> out of 5</span>
                                                                        </div>
                                                                        <span class="pr-sa">{product.price}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                    }
                                                })

                                            })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div class="owl-controls">
                                    <div class="owl-nav">
                                        <div class="owl-prev" style={{}}>
                                            <i class="fa fa-angle-left"></i>
                                        </div>
                                        <div class="owl-next" style={{}}>
                                            <i class="fa fa-angle-right"></i></div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {
        product: state.shop.product || {}
    }
}
var styles={
    img:{
        backgroundColor: "#aaaaaa",
        '&:hover':{
            transform: 'scale(1.5)',
            background:'red'
        }
    }
}
export default connect(mapStateToProps, {getReviewForProduct,setToCart,addToWishList,changeQuantity})(ProductDetails);




