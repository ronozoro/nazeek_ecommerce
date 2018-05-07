import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from '../components/products'
import Sidemenue from '../components/sidemenue'
import Filtermenue from '../components/filtermenue'
 import { connect } from "react-redux";
// import PropTypes from "prop-types";
 import {get} from '../actions/filter'
 import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Image,Loader,Grid,GridColumn,GridRow, Button} from 'semantic-ui-react'

 class Catgory1 extends React.Component {
      constructor(){
        super();
      }

      render(){

        
          return (
      <div></div>
      )}
    }
    const mapStateToProps = (state, Props) => {
        console.log(state)
        return {
            
           products:state.filterMenu.products
           
            }
         
          }
        
            export default connect(mapStateToProps, {get})(Catgory1);