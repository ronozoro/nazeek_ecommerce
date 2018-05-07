import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from '../components/products'
import Sidemenue from '../components/sidemenue'
import Filtermenue from '../components/filtermenue'
 import { connect } from "react-redux";
// import PropTypes from "prop-types";
 import {get} from '../actions/filterMenue'
 import {createWishlistItem} from '../actions/WishlistItemListActions'
 import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Image,Loader,Grid,GridColumn,GridRow, Button} from 'semantic-ui-react'

 class NewA extends React.Component {
      constructor(){
        super();
      }
     
        
      
//   static propTypes = {
//     get: PropTypes.func.isRequired,
// };



render(){
  console.log(this.props.products)
  return   <Products/>
}
 }
const mapStateToProps = (state, Props) => {
  return {
      
     
      }
   
    }
  
      export default connect(mapStateToProps)(NewA);