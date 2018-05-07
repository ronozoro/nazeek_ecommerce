import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {get} from '../actions/filterMenue'
import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Loader} from 'semantic-ui-react'
import Products from '../components/products'

 class Homedecore extends React.Component {
  
 

      render() {
 return <Segment>
                {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
                
                <Products   products={this.props.categoryItems}/>
                
            </Segment>
        }

}
const mapStateToProps = (state, Props) => {
      return {
        categoryItems:state.filterMenu.GETCATAGORYITMS

     
      }
    }
    
  
  export default connect(mapStateToProps)(Homedecore);