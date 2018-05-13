import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Grid,GridRow,GridColumn,Icon,Loader,Dimmer} from 'semantic-ui-react'
import {connect} from "react-redux";
import {Input} from 'semantic-ui-react'
import {getItemsOfCart} from '../actions/cart'
import {fetchWishlistItemCount} from '../actions/WishlistListActions'
import {getcatagorysitms} from '../actions/filterMenue'
import {categoryItems} from '../actions/shopActions'
import {getcatagorys} from '../actions/filterMenue'
import {getProducts} from '../actions/shopActions'
import history from "../utils/historyUtils";

// import {aftersearsh} '../actions/header'
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


    //   componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleResize)
    //   }
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
       if(elment){ console.log(elment);

        elment.style.width = "0";
       }
    }
    // renderCart() {
    //     fetchWishlistItemCount:PropTypes.func.isRequired,
    //     getItemsOfCart:PropTypes.func.isRequired,
    // };
   wishlist(){
if(localStorage.getItem('token')==null){
    history.push("/login")
}   
else{
    history.push("/wishlist")
}  
   }
   gotocart(){
    if(localStorage.getItem('token')==null){
        history.push("/login")
    }   
    else{
        history.push("/cart")
    } 
   }
     renderCart() {
        return (
            <div className="col-md-3 col-sm-3">
                <div className="clearfix">
                    <ul className="menu-purches clearfix">
                        <li style={{fontSize: 20,color: '#13bfad'}}>
                       <Icon   name="heart" onClick={this.wishlist.bind(this)}></Icon><span>{this.props.wishlistCount}</span>
                        </li>
                        <li  style={{fontSize: 20,color: '#13bfad'}}>
                           <Icon name="plus cart"  onClick={this.gotocart.bind(this)} ></Icon><span>{this.state.count}</span>
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

    //style={{position: 'absolute',top: 0,left: 11,height: 48}}
    renderHeaderBottom() {
        console.log(this.state.windowWidth)
        if (982 < this.state.windowWidth || this.state.windowWidth >= 1280) {
            return (

                <div class="header-bottom">
                <Dimmer active={this.props.catagorys===null}>
                    <Loader/>
                </Dimmer>
                    <div class="container">

                        <div class="hb-right clearfix">
                            <a href="#" class="btn-design">design your room</a>
                            <a href="#menu" class="hamburger is-closed">
                                <span class="hamb-top"></span>
                                <span class="hamb-middle"></span>
                                <span class="hamb-bottom"></span>
                            </a>
                        </div>

                        <div class="hb-left clearfix" style={{ position: 'absolute', top: 0, left: 11, height: 48 }}>
                            <ul class="menu-st search-by clearfix">
                                <li class="dropdown">
                                    <a href="/offers" data-toggle="dropdown"><i class="icon-magnifier icons" aria-hidden="true"></i> search by<span class="m-arrow"><i class="icon-arrow-down icons"></i></span></a>



                                </li>
                            </ul>
                            <ul class="menu-st main-menu clearfix">
                                <li class="dropdown">
                                    <a href="/offers" data-toggle="dropdown">Furniture</a>

                                </li>
                                {this.state.catagorys.map((catagory, index) => {
                                    //  console.log(catagory);

                                    let id = catagory.id
                                    //  console.log(id);

                                    return <li class="dropdown" id={index + 1} key={index} onClick={this.handleClick.bind(this, id, catagory.title)}>
                                        <a style={{color:'white'}} > {catagory.title}</a>

                                    </li>
                                })}
                     
                           
                                <li class="new-m">
                                    <a href="/offers"><span>new</span> arrivals</a>
                                </li>
                                <li class="offers-m">
                                    <a href="/offers"><span>offers</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div class="header-bottom">
                <div class="container">

                    <div class="hb-right clearfix" style={{ position: 'relative', left: '20%', width: '58%' }}>
                        <a href="#" class="btn-design" style={{width: '54%'}}>design your room</a>
                        <a href="#menu" class="hamburger is-closed">
                            <span class="hamb-top"></span>
                            <span class="hamb-middle"></span>
                            <span class="hamb-bottom"></span>
                        </a>
                    </div>
                    <div>
                        <div id="mySidenav" class="sidenav">
                            <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
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

                                <li class="offers-m" onClick={this.closeNav}>
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
export default connect(mapStateToProps,{categoryItems,fetchWishlistItemCount,getItemsOfCart,getcatagorys,getcatagorysitms,getProducts,aftersearsh})(Header);
