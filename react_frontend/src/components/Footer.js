import React, {Component} from "react";
import {connect} from "react-redux";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="f-box">
                                    <h2>Contact Us</h2>
                                    <ul className="f-menu">
                                        <li><a href="contact.html#Customer-Care">Customer Care</a></li>
                                        <li><a href="contact.html#Preducer-Designer">Producer/Designer</a></li>
                                        <li><a href="contact.html#Career">Career</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="f-box">
                                    <h2>Customer Service</h2>
                                    <ul className="f-menu">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privecy Policy</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="f-box">
                                    <h2>Delivery & Return</h2>
                                    <ul className="f-menu">
                                        <li><a href="#">Delivary Time</a></li>
                                        <li><a href="#">Exchange & Return</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="f-box">
                                    <h2>Payment Methods</h2>
                                    <ul className="f-menu">
                                        <li><i className="fa fa-cc-visa" aria-hidden="true"></i>Visa</li>
                                        <li><i className="fa fa-cc-mastercard" aria-hidden="true"></i>Master Card</li>
                                        <li><i className="fa fa-cc-visa" aria-hidden="true"></i>Lorem Ipsum</li>
                                        <li><i className="fa fa-cc-mastercard" aria-hidden="true"></i>Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="social-site">
                            <h2>Follow us on </h2>
                            <ul className="social-menu clearfix">
                                <li className="facebook">
                                    <a href="#" target="_blank"><i className="fa fa-facebook"
                                                                   aria-hidden="true"></i></a>
                                </li>
                                <li className="twitter">
                                    <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li className="instagram">
                                    <a href="#" target="_blank"><i className="fa fa-instagram"
                                                                   aria-hidden="true"></i></a>
                                </li>
                                <li className="snapchat">
                                    <a href="#" target="_blank"><i className="fa fa-snapchat-ghost"
                                                                   aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="copy-right">2018 Nazzek All rights Reserved | powered by line</div>
                    </div>
                </div>
            </footer>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(Footer);