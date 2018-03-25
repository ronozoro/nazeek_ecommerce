import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component {

    static propTypes = {
        authenticated: PropTypes.bool
    };

    renderLinks() {
        if (this.props.authenticated) {
            return (
                [
                    <li className="nav-item" key="profile">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>,
                    <li className="nav-item" key="logout">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                ]
            );

        } else {
            return (
                [
                    <li className="nav-item" key="login">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>,
                    <li className="nav-item" key="signup">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                ]
            );
        }
    }

    render() {
        var ul_style = {
           marginLeft: '400px'
        };

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Nazeek Ecommerce</Link>
                <ul className=" topHmenu-left navbar-nav">
                    <li><Link to="/"><i className="fa fa-envelope-o" aria-hidden="true"/>mail@mail.com</Link></li>
                    <li><i className="fa fa-mobile" aria-hidden="true"/>+965-444-444-444</li>
                </ul>
                <ul className="topHmenu-right navbar-nav" style={ul_style}>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);