import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, GridRow, GridColumn, Icon, Loader, Dimmer } from 'semantic-ui-react'
import { connect } from "react-redux";
import { Input } from 'semantic-ui-react'
import { getItemsOfCart } from '../actions/cart'
import { fetchWishlistItemCount } from '../actions/WishlistListActions'
import { getcatagorysitms } from '../actions/filterMenue'
import { categoryItems, getitemsbyFilter } from '../actions/shopActions'
import { getcatagorys } from '../actions/filterMenue'
import { getProducts } from '../actions/shopActions'
import history from "../utils/historyUtils";
import { aftersearsh } from '../actions/filterMenue'
require('jquery')
require('./cart/style.css')
require('../styles/menustyle.css')
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            count: props.count || 0,
            catagorys: props.catagorys || [],
            filteritems: [],
            windowWidth: window.innerWidth
        }
        this.openNav = this.openNav.bind(this),
            this.closeNav = this.closeNav.bind(this)
    }
    static propTypes = {
        authenticated: PropTypes.bool,
        fetchWishlistItemCount: PropTypes.func.isRequired,
        getItemsOfCart: PropTypes.func.isRequired
    };


    handleResize = () => this.setState({
        windowWidth: window.innerWidth
    });
    componentWillMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }
    openNav() {
        console.log("khgjgdf");
        var elment = document.getElementById("mySidenav")
        console.log(elment);
        elment.style.width = "393px";

        elment.style.position = 'absolute';
        elment.style.height = '822px';
        elment.style.backgroundColor = "whitesmoke"
    }

    closeNav() {
        console.log("khgjgdf");
        var elment = document.getElementById("mySidenav")
        if (elment) {
            console.log(elment);

            elment.style.width = "0";
        }
    }

    wishlist() {
        if (localStorage.getItem('token') == null) {
            history.push("/login")
        }
        else {
            history.push("/wishlist")
        }
    }
    gotocart() {
        if (localStorage.getItem('token') == null) {
            history.push("/login")
        }
        else {
            history.push("/cart")
        }
    }
    renderCart() {
        return (
            <div className="col-md-3 col-sm-3">
                <div className="clearfix">
                    <ul className="menu-purches clearfix">
                        <li style={{ fontSize: 20, color: '#13bfad' }}>
                            <Icon name="heart" onClick={this.wishlist.bind(this)}></Icon><span>{this.props.wishlistCount}</span>
                        </li>
                        <li style={{ fontSize: 20, color: '#13bfad' }}>
                            <Icon name="plus cart" onClick={this.gotocart.bind(this)} ></Icon><span>{this.state.count}</span>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
    renderLinks() {
        if (this.props.authenticated) {
            return (
                [
                    <li key="profile">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>,
                    <li key="logout">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                ]
            );

        } else {
            return (
                [
                    <li key="login">
                        <Link to="/login">Login</Link>
                    </li>,
                    <li key="signup">
                        <Link to="/signup">Sign Up</Link>
                    </li>
                ]
            );
        }
    }

    renderHeaderTop() {
        return (
            [
                <div className="header-top">
                    <div className="container">
                        <ul className="topHmenu-left clearfix">
                            <li><a href="contact.html"><i className="fa fa-envelope-o" aria-hidden="true"></i>mail@mail.com</a>
                            </li>
                            <li><i className="fa fa-mobile" aria-hidden="true"></i>+965-444-444-444</li>
                        </ul>
                        <ul className="topHmenu-right clearfix">
                            {this.renderLinks()}
                            <li>
                                <a href="index_ar.html"><i className="icon-globe icons"></i>Arabic</a>
                            </li>
                        </ul>

                    </div>
                </div>
            ]
        );

    }

    renderMiddle() {
        return (
            <div className="header-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <a href="index.html" className="logo-site">
                                <img src="/nazeek_ecommerce/" alt="" className="img-responsive" />
                            </a>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <form className="form-search-head" action="#">
                                <Input className="form-control" placeholder="Search" type="text" onChange={this.handlechange.bind(this)}></Input>
                                <button type="button" className="btn btn-submit-search" onClick={this.search.bind(this)}><i
                                    className="icon-magnifier icons" aria-hidden="true"></i></button>
                            </form>
                        </div>
                        {this.renderCart()}
                    </div>
                </div>
            </div>
        );

    }
    MenuSearchBy(item, sub) {
        console.log(item, sub);
        this.props.getitemsbyFilter()

    }
    renderCategory(category) {
        let id = category.id
        return <li className="dropdown" data-toggle="dropdown" id={index + 1} key={index} onClick={this.handleClick.bind(this, id, catagory.title)}>
            <a style={{ color: 'white' }} > {catagory.title}</a>
            {categoryitm.map(catitm => {
                console.log(catagory.title.toLowerCase(), catitm);

                if (catagory.title.toLowerCase() == catitm.id) {
                    return <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                        {catitm.sub.map(subitm => {
                            return <li >
                                <a tabindex="-1" href="/shop">{subitm}</a>

                            </li>
                        })
                        }


                    </ul>
                }

            })}

        </li>
    }
    //style={{position: 'absolute',top: 0,left: 11,height: 48}}
    renderHeaderBottom() {
        var searchby = [
            { id: 'Rooms', sub: ['All', 'Bedroom', 'Livingroom', 'Kids room', 'Kitchen', 'Bathroom', 'Dinning room'] },
            { id: 'Brands', sub: ['All', 'M square', 'Hellooo', 'Artistic circle', 'Frills', 'Just Paint', 'New', 'Best Seller'] },
            { id: 'Styles', sub: ['All', 'Contemporary', 'Modern', 'Classic', 'Arabic/Islamic'] },
            { id: 'Occasions', sub: ['All', 'Eid', 'Ramadan', 'Gifts', 'mothers Day'] }
        ]
        var categoryitm = [
            { id: 'outdoor ', sub: ['Duwwa/Burner', 'Tabels', 'Seating', 'Decoration', 'New', 'Best Sellers'] },
            { id: 'furniture', sub: ['All', 'Sofas', 'Tables', 'Chairs', 'TV units', 'New', 'BestSellers'] },
            { id: 'homedecore', sub: ['All', 'Decorative pillows', 'Throws', 'Wall arts', 'Wall accessories', 'Carpets/rugs', 'New', 'Best Seller'] },
            { id: 'sevewhere', sub: ['Trays', 'Tables', 'Tea/Coffee', 'Boxes', 'Others', 'New', 'Best Sellers'] },
            { id: 'outdoor ', sub: ['Duwwa/Burner', 'Tabels', 'Seating', 'Decoration', 'New', 'Best Sellers'] },
            { id: 'offers', sub: ['shop1Name', 'shop1Name'] },
            { id: 'newarrivals', sub: ['shop1Name', 'shop1Name'] }
        ]



        console.log(this.state.windowWidth)
        if (982 > this.state.windowWidth || this.state.windowWidth >= 1280) {
            return (

                <div className="header-bottom">

                    <div className="container">

                        <div className="hb-right clearfix">
                            <a href="#" className="btn-design">design your room</a>
                            {/* <a href="#menu" className="hamburger is-closed">
                                <span className="hamb-top"></span>
                                <span className="hamb-middle"></span>
                                <span className="hamb-bottom"></span>
                            </a> */}
                        </div>

                        <div className="hb-left clearfix" style={{ position: 'absolute', top: 0, left: 11, height: 48 }}>
                            <ul className="menu-st search-by clearfix">

                                <li class="dropdown">
                                    <a href="/shop" data-toggle="dropdown"><i class="icon-magnifier icons" aria-hidden="true"></i> search by<span class="m-arrow"><i class="icon-arrow-down icons"></i></span></a>

                                    <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                        {searchby.map(item => {
                                            return <li class="dropdown-submenu">
                                                <Link to="/shop" tabindex="-1" >{item.id}</Link>
                                                <div class="dropdown-menu">
                                                    <h3 style={{ background: '#f2f2f2' }}>{item.id}</h3>
                                                    <ul>
                                                        {item.sub.map(subitem => {
                                                            return <li onClick={this.MenuSearchBy.bind(this, item.id, subitem)}><a href="#" >{subitem}</a></li>

                                                        })}

                                                    </ul>
                                                </div>
                                            </li>
                                        })}

                                    </ul>

                                </li>



                            </ul>
                            <ul className="menu-st main-menu clearfix">

                                {this.state.catagorys.map((catagory, index) => {
                                    console.log(catagory);
//                                   var result=categoryitm.filter( item => item.id==catagory.title.toLowerCase())
// console.log(result);

                                    let id = catagory.id
                                    return <li className="dropdown" data-toggle="dropdown" id={index + 1} key={index} onClick={this.handleClick.bind(this, id, catagory.title)}>
                                        <a style={{ color: 'white' }} > {catagory.title}</a>
                                        
                                        {categoryitm.map(catitm => {
                                            // console.log(catagory.title.toLowerCase(), catitm);



                                            if (catagory.title.toLowerCase() == catitm.id) {
                                                return <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                                    {catitm.sub.map(subitm => {
                                                        return <li >
                                                            <a tabindex="-1" href="/shop">{subitm}</a>

                                                        </li>
                                                    })
                                                    }


                                                </ul>
                                            }

                                        })}

                                    </li>
                                })}


                                <li className="new-m">
                                    <a href="/offers"><span>new</span> arrivals</a>
                                </li>
                                <li className="offers-m">
                                    <a href="/offers"><span>offers</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div className="header-bottom">
                <div className="container">

                    <div className="hb-right clearfix" style={{ position: 'relative', left: '20%', width: '58%' }}>
                        <a href="#" className="btn-design" style={{ width: '54%' }}>design your room</a>
                        {/* <a href="#menu" className="hamburger is-closed">cjnkdjcnkdjcnkdj
                            <span className="hamb-top"></span>
                            <span className="hamb-middle"></span>
                            <span className="hamb-bottom"></span>
                        </a> */}
                    </div>
                    <div>
                        <div id="mySidenav" className="sidenav">
                            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                            <ul style={{ listStyleType: 'none' }}>
                                <li onClick={this.closeNav}>
                                    <a href="/Offers" >search by</a>
                                </li>

                                <li onClick={this.closeNav} >
                                    <a href="/Offers" >Furniture</a>
                                </li>
                                {this.state.catagorys.map((catagory, index) => {
                                    //  console.log(catagory);

                                    let id = catagory.id
                                    //  console.log(id);

                                    return <li id={index + 1} key={index} onClick={this.handleClick.bind(this, id, catagory.title)}>
                                        <a > {catagory.title}</a>

                                    </li>
                                })}

                                <li className="offers-m" onClick={this.closeNav}>
                                    <a href="/offers"><span>offers</span></a>
                                </li>
                            </ul>

                        </div>


                        <span style={{ fontSize: 30, cursor: 'pointer' }} onClick={this.openNav}>&#9776; </span>
                    </div>


                </div>
            </div>)
        }
    }
    handleClick(id, title) {
        console.log(id)

        this.closeNav();
        this.props.categoryItems(id)
        //this.props.getcatagorysitms(id,title)
    }

    handlechange(e, data) {
        console.log(e)
        console.log(data.value);

        if (this.props.products.length != 0) {
            console.log(this.props.products)
            this.props.products.map((product) => {
                if (product.title.toLowerCase().indexOf(data.value.toLowerCase()) !== -1) {
                    this.setState({ filteritems: this.state.filteritems.push(product) })
                }
            })
            // this.props.aftersearsh(filteritems)
            //         console.log(filteritems)

        }




    }
    search() {
        console.log(this.state.filteritems);

        if (this.state.filteritems.length != 0) {
            //this.props.aftersearsh(filteritems)
        }
    }
    componentDidMount() {
        console.log(window.innerWidth)
        console.log("didmount");

        this.props.fetchWishlistItemCount()
        this.props.getItemsOfCart()
        this.props.getcatagorys();
        this.props.getProducts()

    }
    componentWillReceiveProps(nextProps) {
        console.log({ nextPropsfomheader: nextProps });

        this.setState({ count: nextProps.count, catagorys: nextProps.catagorys, })
    }
    render() {
        console.log({ cartcount: this.props.count });
        let catagorys = this.props.catagorys

        return (
            <header>
                {this.renderHeaderTop()}
                {this.renderMiddle()}

                {this.renderHeaderBottom()}
            </header>

        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        count: state.cart.count,
        wishlistCount: state.wishList.count,
        catagorys: state.filterMenu.catagorys,
        products: state.shop.products
    }
}

const styles = {
    btn: {
        display: 'inline-block',
        color: ' #fefefe',
        fontSize: 16,
        fontWeight: 900,
        textTransform: 'uppercase',
        backgroundColor: ' #706f6f',
        padding: '11 10 9 20',
        //lineHeight: 28,
        textAlign: 'center',
        paddingTop: 10,
        height: 50,


    },
    right: {
        display: 'inline-block',
        color: ' #fefefe',
        fontSize: 16,
        fontWeight: 700,
        textTransform: 'uppercase',
        padding: '11 10 9 20',
        //lineHeight: 28,
        textAlign: 'center',
        paddingTop: 10,
        backgroundColor: '#13bfad',
        paddingLeft: 0,
        paddingRight: 0,
        height: 50,


    },
    span1: {
        backgroundColor: '#f54236',
        borderRadius: 3, padding: '1 5 0', lineHeight: 20
    }
}
export default connect(mapStateToProps, { getitemsbyFilter, categoryItems, fetchWishlistItemCount, getItemsOfCart, getcatagorys, getcatagorysitms, getProducts, aftersearsh })(Header);
