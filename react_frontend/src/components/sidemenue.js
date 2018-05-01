import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get } from '../actions/header'
import { Rating, Menu, Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader, Dropdown, Table, TableBody, TableCell } from 'semantic-ui-react'

class Sidemenue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //     data:this.props.data
        }
    }
    static propTypes = {
        //     get: PropTypes.func.isRequired,
    };
    componentWillRecivePrpos() {
        //     this.setState({data:newprops.data})
    }
    render() {
        return <div style={{margin:10}} class="col-lg-3 col-md-4 col-sm-5">
            <div class="box-profile-side" style={{width: 261}}>
                <div class="bps-head clearfix">
                    <img src="images/av.png" alt="" class="avatar-img"/>
                        <div class="prof-txt">
                            <h2>Username</h2>
                            <a href="#" class="logout-link">Logout</a>
                        </div>
                </div>
                    <div class="bps-body">
                        <ul>
                            <li>
                                <a href="profile.html"><span><i class="icon-grid icons"></i></span>Account Home</a>
                            </li>
                            <li>
                                <a href="profile-info.html"><span><i class="icon-user icons"></i></span>Personal Information</a>
                            </li>
                            <li>
                                <a href="profile-order.html"><span><i class="icon-doc icons"></i></span>Order History</a>
                            </li>
                            <li>
                                <a href="address-book.html"><span><i class="icon-notebook icons"></i></span>Address book</a>
                            </li>
                            <li>
                                <a href="payment.html"><span><i class="icon-credit-card icons"></i></span>Way of Payments</a>
                            </li>
                            <li class="active">
                                <a href="wishlist.html"><span><i class="icon-heart icons"></i></span>Wishlist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      
        {/* </div> <Segment ><Menu secondary vertical>
              <Menu.Item name='account' onClick={this.handleItemClick} />
              <Menu.Item name='settings' onClick={this.handleItemClick} />
              <Dropdown item text='Display Options'>
                <Dropdown.Menu>
                  <Dropdown.Header>Text Size</Dropdown.Header>
                  <Dropdown.Item>Small</Dropdown.Item>
                  <Dropdown.Item>Medium</Dropdown.Item>
                  <Dropdown.Item>Large</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Menu>
            </Segment> */}

    }
}

export default Sidemenue;