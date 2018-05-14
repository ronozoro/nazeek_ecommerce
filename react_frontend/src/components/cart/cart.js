import * as React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeQuantity } from "../../actions/cart";
import { checkout } from '../../actions/checkout'
import { Link } from 'react-router-dom'
import { Input, Container, Divider, Table, Rating, Header } from 'semantic-ui-react'
import { Button, Checkbox, Image, Icon, Grid, Dimmer, Loader } from 'semantic-ui-react'
import $ from 'jquery'
import Slider from "react-slick";
require('../slideStyle.css')
export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: props.cart,
            value: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(quantity, id, prodId) {
        this.props.changeQuantity({ quantity: quantity, id: id, prodId: prodId })
    }
    componentWillReceiveProps(nextProps) {
        console.log({ nextPropsCart: nextProps });

        this.setState({ cartItems: nextProps.cart })
    }
    handlClick() {
        this.props.checkout()
    }
    item(object) {
        return <div className="like-product-item clearfix" style={{marginLeft:54,width:303}}>
            <a href="#" class="lp-thumb">
                <img src={'data:image/png;base64, ' + object.image} alt="" />
            </a>
            <div className="lp-txt">
                <p className="desc-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
                <div className="star-rating">
                    <span style={{ width: '60%' }}><strong class="rating">3</strong> out of 5</span>
                </div>
                <span className="pr-sa">{object.price}</span>
            </div>
        </div>
    }
    render() {
        var thos = this

        var count = 0, itemsPrices = 0
        this.state.cartItems.map(item => {
            count = count + item.quantity
            itemsPrices = (itemsPrices) + (item.price * item.quantity)
        })
        const columnsName = [
            { id: 'product', title: 'Product' },
            { id: 'item', title: 'ProductId' },
            { id: 'quantity', title: 'quantity' },
            { id: 'price', title: 'ItemPrice' },
            { id: 'subtotal', title: "SubTotal" },
            { id: 'color', title: 'color' },
            { id: 'actions', title: '' },

        ]
        var settings = {
            dots: false,
            arrows: true,
            infinite: true,
            slidesToScroll: 2,

            speed: 500,
            slidesToShow: 3,
        };
        if (this.state.cartItems && this.state.cartItems.length && this.props.products && this.props.products.length)
            return (
                <div>
                    <Container textAlign='justified' style={{ marginTop: 50 }}>
                        {/* <b style={{ fontSize: 23 }}>SHOPING CART</b>
                    <Divider /> */}
                       
                        <div className="sec-head clearfix">
                            <h2 className="sec-title ">Shoping cart</h2>
                            <div className="col--right">
                                <Link to="/shop" className="btn-primary-cus">Continue Shopping <i class="glyphicon glyphicon-share-alt"></i></Link>
                            </div>
                        </div>
                        <Table
                            fixed
                            striped
                            basic='very'
                            singleLine
                            padded
                            style={styles.table}
                        >
                            <Table.Header>
                                <Table.Row>
                                    {columnsName.map((coulm, index) => {
                                        if (coulm.id == "product")
                                            return <Table.HeaderCell width={5}>{coulm.title}</Table.HeaderCell>
                                        else
                                            return <Table.HeaderCell >{coulm.title}</Table.HeaderCell>

                                    })
                                    }
                                </Table.Row>
                            </Table.Header>

                            <Table.Body >
                                {this.state.cartItems.map((item, index) => {
                                    return <Table.Row>
                                        {columnsName.map((coulm) => {
                                            if (coulm.id == 'product') {
                                                return this.props.products.map(prod => {
                                                    console.log(prod);
                                                    if (item.product === prod.id) {
                                                        //    return prod.productimage_set.map(I=>{
                                                        //        console.log({I});                                           
                                                        //         if(I.product==item.product){
                                                        return <Table.Cell textAlign="center" title={[
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                                                            'et dolore magna aliqua.',
                                                        ].join(' ')}>
                                                            <div className="t-prItem clearfix" style={{ width: 50 }}>
                                                                <a href="#" className="tp-thumb">
                                                                    <img src={'data:image/png;base64, ' + prod.image} alt="" className="img-responsive" />
                                                                </a>
                                                                <div className="tp-desc">
                                                                    <h2><a href="#">Lorem ipsum dolor sit amet fdgffgkjfghfdjkghkdfjghdfj,</a></h2>
                                                                    <p>{prod.Description} this is description</p>
                                                                </div>
                                                            </div>

                                                            {/* <div style={styles.img}><Image width={150} src={'data:image/png;base64, '+prod.image} size='tiny' verticalAlign='middle' /></div> */}
                                                            {/* <div style={styles.contentImg}>Middle ;lk;flk;fkdf;kdf;skf;dlfk;dlfk;dlfk;dfkkflkfmldfkdlsfkdlkfAligned</div> */}
                                                        </Table.Cell>
                                                    }
                                                    //     })

                                                    // }
                                                })


                                            }
                                            if (coulm.id == 'item') {
                                                return <Table.Cell>
                                                    {item[coulm.id]}
                                                </Table.Cell>

                                            }
                                            // onClick={()=>{this.increase(item.item,item.product)}}
                                            // onClick={()=>{this.decrease(item.item,item.product)}}


                                            if (coulm.id == 'quantity') {
                                                return <Table.Cell>
                                                    <Input type="number" ref="input" style={{ width: '66%', textAlign: 'center' }} defaultValue={item[coulm.id]} onChange={(e, data) => { this.handleChange(data.value, item.item, item.product) }} />
                                                </Table.Cell>

                                            }
                                            if (coulm.id == 'price') {
                                                return <Table.Cell>
                                                    {item[coulm.id]}
                                                </Table.Cell>
                                            }
                                            if (coulm.id == 'subtotal') {
                                                return <Table.Cell>
                                                    {item.quantity * item.price}
                                                </Table.Cell>

                                            }
                                            if (coulm.id == 'color') {
                                                return this.props.products.map(prod => {
                                                    if (item.product === prod.id) {
                                                        return prod.variation_set.map(v => {
                                                            if (item.item === v.id) {
                                                                var style = {
                                                                    backgroundColor: v.color,
                                                                    width: 30, height: 30
                                                                }
                                                                return (
                                                                    <Table.Cell>
                                                                        <label style={style}>
                                                                            <span >

                                                                            </span>
                                                                        </label>
                                                                    </Table.Cell>)
                                                            }

                                                        })

                                                    }
                                                })

                                            }
                                            if (coulm.id == 'actions') {
                                                return <Table.Cell>
                                                    <Icon name="delete" onClick={() => { this.handleChange(0, item.item, item.product) }} />
                                                </Table.Cell>
                                            }
                                        })
                                        }

                                    </Table.Row>

                                })
                                }

                            </Table.Body>

                        </Table>

                        <br /><br />
                        <div className="clearfix">
                            <div className="ch-b-left">
                                <p className="cc-note">By countinu to checkout you accept of term of use and privecy policy </p>
                            </div>
                            <div className="ch-b-right">
                                <div className="without-div"><i class="icon-doc icons"></i><p>TOTAL (<span>without delivry fees</span>)  : {itemsPrices} KD</p></div>
                                <div className="cart-action clearfix">
                                    <Link to="shop" className="btn-primary-cus">Continue Shopping <i className="glyphicon glyphicon-share-alt"></i></Link>
                                    <a href="#" onClick={this.handlClick.bind(this)} class="btn-primary-cus primary-cus-active">Checkout</a>
                                </div>
                            </div>
                        </div>
                        {/* may be you like this */}
                        <div className="sec-head clearfix">
                            <h2 className="sec-title">may be you like this</h2>
                        </div>
                        <div>
                            <Slider {...settings} >
                                {this.props.products.map(prod => {
                                    return <div style={{marginLeft:45,width:303}}>
                                        {this.item(prod)}
                                    </div>
                                })}
                            </Slider>
                        </div>

                    </Container>
                </div>
            )
        else {
            return <div style={styles.emptycart}>
                this cart is empty
            </div>
        }
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartItems,
        products: state.shop.products,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {


    }

}

var styles = {
    btn: {
        borderRadius: 20,
        color: 'white',
        background: '#13bfad',
        fontSize: 17,
        textAlign: 'center',
        float: 'right'
    },
    emptycart: {
        textAlign: 'center',
        fontSize: 25,
        borderRadius: 13,
        border: '1px solid',
        width: 700,
        margin: 'auto',
        pading: 20,
        padding: 20,
        marginBottom: 30,
    },
    contentImg: {
        // display:'inline-block',
        // border: '1px solid',
        // width: 350,
        // margin: 'auto',
        // overflow: 'auto',

    },
    img: {
        // display: 'inline-block',
        border: '1px solid',
        // bottom: 47,
        // position: 'relative',
        // width: 50,
        width: 170,

    },
    table: {
        textAlign: 'center',
        fontSize: 15
    },
    p: {
        float: 'right',
        fontSize: 25,
        padding: 5,
        color: '#13bfad',
    }
}
export default connect(mapStateToProps, { changeQuantity, checkout })(Cart);