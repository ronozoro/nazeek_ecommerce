import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getUserProfile} from '../actions/authActions'
import { Rating, Menu, Header, MenuItem, Icon, Sidebar, Segment, Dimmer, Loader, Dropdown, Table, TableBody, TableCell } from 'semantic-ui-react'
require('./cart/style.css')
class Sidemenue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                user:props.user
        }
    }
    static propTypes = {
        //     get: PropTypes.func.isRequired,
    };
    componentDidMount(){
        this.props.getUserProfile()
    }
    componentWillReceiveProps(nextProps) {
            this.setState({user:nextProps.user})
    }
    render() {       
        console.log(this.props.user);
         
        return <div style={{margin:10}} >
            <div class="box-profile-side" >
                <div class="bps-head clearfix">
                    <img src="../../src/styles/images/av.png" alt="" class="avatar-img"/>
                        <div class="prof-txt">
                            <h2>{this.state.user.username}</h2>
                            <Link to="/logout" class="logout-link">Logout</Link>
                        </div>
                </div>
                    <div class="bps-body" >
                        <ul style={{width:203}}>
                            <li >
                            <Link to="/profile"><span><i class="icon-grid icons"></i></span>Account Home</Link>
                            </li>
                            <li>
                            <Link to="/userProfile"><span><i class="icon-user icons"></i></span>Personal Information</Link>
                            </li>
                            <li>
                                <a href="profile-order.html"><span><i class="icon-doc icons"></i></span>Order History</a>
                            </li>
                            <li>
                            <Link to="/addressbook"><span><i class="icon-notebook icons"></i></span>Address book</Link>
                            </li>
                            <li>
                                <Link to="/payment" ><span><i class="icon-credit-card icons"></i></span>Way of Payments</Link>
                            </li>
                            <li >
                            <Link to="/wishlist"><span><i class="icon-heart icons"></i></span>Wishlist</Link>
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
const mapStateToProps=(state,props)=>{
    return{
        user:state.auth.user

    }
}
export default connect(mapStateToProps, { getUserProfile })(Sidemenue);
