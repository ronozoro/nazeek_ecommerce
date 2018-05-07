import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from '../components/products'
import Sidemenue from '../components/sidemenue'
import Filtermenue from '../components/filtermenue'
 import { connect } from "react-redux";
// import PropTypes from "prop-types";
 import {get} from '../actions/filterMenue'
 import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Image,Loader,Grid,GridColumn,GridRow, Button} from 'semantic-ui-react'

 class Offers extends React.Component {
      constructor(){
        super();
      }
     
        
      
//   static propTypes = {
//     get: PropTypes.func.isRequired,
// };
componentDidMount(){
  this.props.get("localhost:8000")
}



render(){
  console.log(this.props.products)
  return <Grid>
  <Grid.Row>
     <Grid.Column width={4}>
    {/* <Filtermenue />  */}
    </Grid.Column> 
    <Grid.Column width={12} >
    <Products />
    </Grid.Column>
    </Grid.Row>
    </Grid>
}
 }
const mapStateToProps = (state, Props) => {
  console.log(state)
  return {
      
     products:state.filterMenu.products
     
      }
   
    }
  
      export default connect(mapStateToProps, {get})(Offers);