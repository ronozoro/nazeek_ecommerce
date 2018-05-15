import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setToCart } from '../../actions/cart'
import { getProducts } from "../../actions/shopActions";
import { getReviewForProduct } from '../../actions/ReviewListActions'
import { changeQuantity } from "../../actions/cart";
import { addToWishList } from '../../actions/WishlistListActions'
import Reviews from './reviewForm'
import { Container, Divider, Table, Rating, Header, Tab } from 'semantic-ui-react'
import { Button, Checkbox, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react'
import $ from 'jquery'
import Slider from 'react-slick'
// import ZoomableImage from 'react-zoomable-image';
import ReactImageZoom from 'react-image-zoom';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            value: 1,

            nav1: null,
            nav2: null

        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    static propTypes = {
        setToCart: PropTypes.func.isRequired
    };
    componentWillReceiveProps(nextProps) {
        this.setState({ product: nextProps.product })
    }
    componentDidMount() {
        this.props.getReviewForProduct(this.props.product.id)
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    handleClick(product) {
        console.log(product);

        this.props.setToCart(product)
    }
    wishListClisk(product) {
        console.log(product);

        this.props.addToWishList(product)
    }

    handleChange(e, object) {
        console.log({ x: object.prod, xx: object.varId });
        this.props.setToCart(object)
    }
    // handleChangeQuantity(quantity, id, prodId) {
    //     this.props.changeQuantity({ quantity: quantity, id: id, prodId: prodId })
    // }
    handleInputChange(e) {
        console.log(e.target.value);

        this.setState({ value: e.target.value })
    }
    render() {
        //  localStorage.clear('cart_token')
        // responsive: [
        //     {
        //       breakpoint: 480,
        //       settings: {
        //         slidesToShow: 1
        //       }
        //     },
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 2
        //       }
        //     }
        //   ]
        var settings = {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            speed: 500,
        };
        var settingsNav = {
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            dots: true,
            dotsClass: "slick-dots slick-thumb",

            arrows: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            swipeToSlide: true,
            focusOnSelect: true

        }
        console.log(this.props.product);
        const propsss = {
            width: 200, height: 200,
            zoomWidth: 400, img: 'data:image/png;base64, ' + this.props.product.image, zoomStyle: 'opacity: 0.5;border: 1px solid black;',
        };


        const panes = [
            {
                menuItem: ' OVERVIEW', render: () => <Tab.Pane attached={false}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Tab.Pane>
            },
            // {
            //     menuItem: ' DETAILS', render: () => <Tab.Pane attached={false}>
            //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            // Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Tab.Pane>
            // },
            {
                menuItem: 'REVIEWS', render: () => <Tab.Pane attached={false}>

                    <Reviews />
                </Tab.Pane>
            },
        ]
        var thos = this
        return (
            <div class="content-innerPage">
                <Dimmer active={this.props.product === null}>
                    <Loader />
                </Dimmer>
                <div class="container">
                    <div class="product-detail-primary">
                        <div class="row">
                            <div class="col-md-7">
                                <div  style={{width:'85%'}}>
                                    <Slider
                                        asNavFor={this.state.nav2}
                                        ref={slider => (this.slider1 = slider)}
                                        autoplay={true}
                                        arrows={false}>
                            <div  style={{height:'100%'}} class="pro--Thumb slider-for__item ex1" data-src={'data:image/png;base64, ' + this.props.product.image}>
                                <img data-image={this.props.product.id} class="img-rounded zoom"
                                    src={'data:image/png;base64, ' + this.props.product.image}
                                    alt={this.props.product.name} />
                            </div>
                       
                        {this.props.product.variation_set.map(product => {
                            return thos.props.product.productimage_set.map(prod => {
                                if (product.id === prod.product) {
                                    return <div class="pro--Thumb slider-for__item ex1"  style={{border :'1px solid red'}}data-src={'data:image/png;base64, ' + product.image}>
                                        <img data-image={prod.product} className="active"
                                            src={'data:image/png;base64, ' + prod.image}
                                            alt={product.name} />
                                    </div>
                                }
                            })
                        })}
                                    </Slider>

                                    <div class="slider slider-nav clearfix slick-initialized slick-slider slick-vertical" style={{
                                        width: '35%',
                                        marginLeft: -132
                                    }}>
                                        <Slider
                                            asNavFor={this.state.nav1}
                                            ref={slider => (this.slider2 = slider)}
                                            slidesToShow={2}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                            vertical={true}
                                            arrows={false}
                                            autoplay={true}
                                            >

                                           <div style={{ marginLeft: 30 }}>
                            <div  data-src={'data:image/png;base64, ' + this.props.product.image}>
                                <img data-image={this.props.product.id} 
                                    src={'data:image/png;base64, ' + this.props.product.image}
                                    alt={this.props.product.name} />
                            </div>
                        </div>
                        {this.props.product.variation_set.map(product => {
                            return thos.props.product.productimage_set.map(prod => {
                                if (product.id === prod.product) {
                                    return <div  data-src={'data:image/png;base64, ' + product.image}>
                                        <img data-image={prod.product} 
                                            src={'data:image/png;base64, ' + prod.image}
                                            alt={product.name} />
                                    </div>
                                }
                            })
                        })}
                                        </Slider>


                                    </div>
                                    <div className="bottom-slide-pro clearfix">
                                        <ul className="share-pro clearfix">
                                            <li className="sh-share"><i className="icon-share icons"></i></li>
                                            <li className="sh-instgram">
                                                <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </li>
                                            <li className="sh-face">
                                                <a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                        </ul>
                                        <ul className="links-meta-left clearfix">
                                            <li>
                                                <a href="#"><i className="icon-printer icons"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="icon-envelope icons"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="pdp-right" >
                                    <h3 style={{ background: 'white' }}>Shop Name<a href="#" style={{ background: '#13bfa', color: 'black' }}><i className="fa fa-youtube-play" aria-hidden="true"></i> {this.props.product.seller_name}</a></h3>
                                    <div className="sec-head marg-b0 clearfix">
                                        <h2 className="sec-title">{this.props.product.title}</h2>
                                    </div>
                                    <div className="pdp--list">
                                        <div className="pdp-ro">
                                            <p className="f-rguler">PRICE  : <span className="pr-sa">{this.props.product.price}</span></p>
                                        </div>
                                        <div className="pdp-ro">
                                            <p className="f-rguler">COLOR : </p>
                                            <div className="color-choose">
                                                {this.props.product.variation_set.map(function (product) {
                                                    var style = {
                                                        backgroundColor: product.color
                                                    }

                                                    return <div>
                                                        <input data-image="color1" type="radio" id="color1" name="color" value="color1" checked="" />
                                                        <label for="color1" className="highlight" onClick={(e) => { thos.handleChange(e, { prod: { object: thos.props.product }, varId: product }) }} style={style}>
                                                            <span>

                                                            </span>
                                                        </label>
                                                    </div>
                                                })
                                                }

                                            </div>
                                        </div>
                                        <div className="pdp-ro">
                                            <p className="f-rguler">QUANTITY:</p>
                                            <div className="quantity">

                                                <input type="number" name="count-quat1" className="count-quat" defaultValue="1" onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="pdp-ro">
                                            <p>Item id : {this.props.product.id}</p>
                                        </div>
                                        <div className="pdp-ro">
                                            <p><i className="icon-check icons"></i>Stock Availbale</p>
                                        </div>
                                        <div className="pdp-ro">
                                            <p>Delivery Time: 34 Hours </p>
                                        </div>
                                        <div className="pdp-ro">
                                            <p className="f-rguler">Dimensions: 234 23*3434</p>
                                        </div>
                                    </div>
                                    <div className="pdp--action clearfix">
                                        <a href="#" className="addCart"> <i className="icon-basket icons" onClick={this.handleClick.bind(this, { prod: { object: this.props.product }, varId: this.props.product.variation_set[0], count: this.state.value })} /></a >
                                        <a href="#" className="favorite-pro-btn"><i className="icon-heart icons" onClick={this.wishListClisk.bind(this, { object: this.props.product })}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-tab">
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

                    </div>
                    <div className="box-like-product">
                        <div className="sec-head clearfix">
                            <h2 className="sec-title">Similer Items</h2>
                        </div>

                        {/* <div className="like-product-content">
                            <div className="owl-carousel style-owl" id="like-product-slider">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" >
                                        <div className="owl-item cloned" style={{ width: 333.333, marginRight: 10 }}> */}
                        <Slider {...settings}>
                            {this.props.product.variation_set.map(product => {

                                return thos.props.product.productimage_set.map(prod => {
                                    if (product.id === prod.product) {
                                        console.log("eualllll");

                                        return <div className="item">
                                            <div className="like-product-item clearfix">
                                                <a href="#" className="lp-thumb">
                                                    <img data-image={prod.product} className="active"
                                                        src={'data:image/png;base64, ' + prod.image}
                                                        alt={product.name} />
                                                </a>
                                                <div className="lp-txt">
                                                    <p className="desc-p">
                                                        {product.title}
                                                    </p>
                                                    <div className="star-rating">
                                                        <span style={{ width: '60%' }}><strong className="rating">3</strong> out of 5</span>
                                                    </div>
                                                    <span className="pr-sa">{product.price}</span>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                })

                            })
                            }
                        </Slider>
                        {/* </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

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
var styles = {
    img: {
        backgroundColor: "#aaaaaa",
        '&:hover': {
            transform: 'scale(1.5)',
            background: 'red'
        }
    },
    sliderwrapper: {
        width: 600
    },

    sliderforitemimg: {
        width: 100
    },

    slidernavitem: {
        height: 150
    }
}
export default connect(mapStateToProps, { getReviewForProduct, setToCart, addToWishList, changeQuantity })(ProductDetails);





{/* <ReactImageZoom {...propsss} /> */ }
{/* <ZoomableImage displayMap={false}
        baseImage={{
          alt: 'An image',
          src:'data:image/png;base64, ' + this.props.product.image ,
          width: 350,
          height: 550
        }}
        largeImage={{
          alt: 'A large image',
          src:'data:image/png;base64, ' + this.props.product.image ,
          width: 450,
          height: 707
        }}
        thumbnailImage={{
          alt: 'A small image',
          src:'../../src/styles/images/large/image1.jpg' ,
        }}
      /> */}