import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
class Header extends Component {

    static propTypes = {
        authenticated: PropTypes.bool
    };
     renderCart() {
        return (
            <div className="col-md-3 col-sm-3">
                <div className="clearfix">
                    <ul className="menu-purches clearfix">
                        <li className="favorite-btn">
                            <a href="wishlist.html"><i
                                className="icon-heart icons"></i><span>0</span></a>
                        </li>
                        <li className="cart-purches-btn">
                            <a href="cart.html"><i className="icon-basket icons"></i><span>0</span></a>
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
                    <li  key="profile">
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
                    <li  key="login">
                        <Link  to="/login">Login</Link>
                    </li>,
                    <li  key="signup">
                        <Link  to="/signup">Sign Up</Link>
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
                                    <img src="/nazeek_ecommerce/" alt="" className="img-responsive"/>
                                </a>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <form className="form-search-head" action="#">
                                    <input className="form-control" placeholder="Search" type="text"/>
                                        <button type="submit" className="btn btn-submit-search"><i
                                            className="icon-magnifier icons" aria-hidden="true"></i></button>
                                </form>
                            </div>
                            {this.renderCart()}
                        </div>
                    </div>
                </div>
        );

    }


    renderHeaderBottom() {
        return (

            <div className="header-bottom">
                <div className="container">

                    <div className="hb-right clearfix">
                        <a href="#" className="btn-design">design your room</a>
                        <a href="#menu" className="hamburger is-closed">
                            <span className="hamb-top"></span>
                            <span className="hamb-middle"></span>
                            <span className="hamb-bottom"></span>
                        </a>
                    </div>

                    <div className="hb-left clearfix">
                        <ul className="menu-st search-by clearfix">
                            <li className="dropdown">
                                <a href="product-page.html" data-toggle="dropdown"><i className="icon-magnifier icons"
                                                                                      aria-hidden="true"></i> search
                                    by<span className="m-arrow"><i className="icon-arrow-down icons"></i></span></a>

                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">

                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">rooms</a>
                                        <div className="dropdown-menu">
                                            <h3>rooms</h3>
                                            <ul>
                                                <li><a href="#">Bedroom</a></li>
                                                <li><a href="#">Livingroom</a></li>
                                                <li><a href="#">Kids room</a></li>
                                                <li><a href="#">Kitchen</a></li>
                                                <li><a href="#">Bathroom</a></li>
                                                <li><a href="#">Dinning room</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">brands</a>
                                        <div className="dropdown-menu">
                                            <h3>brands</h3>
                                            <ul>
                                                <li><a href="product-page.html">Bedroom</a></li>
                                                <li><a href="product-page.html">Livingroom</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">styles</a>
                                        <div className="dropdown-menu">
                                            <h3>styles</h3>
                                            <ul>
                                                <li><a href="product-page.html">Bedroom</a></li>
                                                <li><a href="product-page.html">Livingroom</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">occasions</a>
                                        <div className="dropdown-menu">
                                            <h3>occasions</h3>
                                            <ul>
                                                <li><a href="product-page.html">Bedroom</a></li>
                                                <li><a href="product-page.html">Livingroom</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                        <ul className="menu-st main-menu clearfix">
                            <li className="dropdown">
                                <a href="product-page.html" data-toggle="dropdown">Furniture</a>
                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">

                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="#">Furniture</a></li>
                                                <li><a href="#">Furniture</a></li>
                                                <li><a href="#">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="product-page.html">Furniture</a></li>
                                                <li><a href="product-page.html">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="product-page.html">Furniture</a></li>
                                                <li><a href="product-page.html">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Furniture</a>
                                        <div className="dropdown-menu">
                                            <h3>Furniture</h3>
                                            <ul>
                                                <li><a href="product-page.html">Furniture</a></li>
                                                <li><a href="product-page.html">Furniture</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="product-page.html" data-toggle="dropdown">Home Decor</a>
                                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">

                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="#">Home Decor</a></li>
                                                <li><a href="#">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="product-page.html">Home Decor</a>
                                        <div className="dropdown-menu">
                                            <h3>Home Decor</h3>
                                            <ul>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                                <li><a href="product-page.html">Home Decor</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="product-page.html">Serve ware</a>
                            </li>
                            <li>
                                <a href="product-page.html">Outdoor</a>
                            </li>
                        </ul>
                        <ul className="menu-st offerMenu clearfix">
                            <li className="new-m">
                                <a href="product-page.html"><span>new</span> arrivals</a>
                            </li>
                            <li className="offers-m">
                                <a href="product-page.html"><span>offers</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <header>
                {this.renderHeaderTop()}
                {this.renderMiddle()}
                {/*{this.renderHeaderBottom()}*/}
            </header>

        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);