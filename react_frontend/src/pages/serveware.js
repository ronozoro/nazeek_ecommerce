import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {get} from '../actions/filterMenue'
import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Loader} from 'semantic-ui-react'
import Products from '../components/products'

 class Servware extends React.Component {
  

      render() {
 return <Segment>
                {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
              
                <Products/>
            </Segment>
        }

}
const mapStateToProps = (state, Props) => {
      return {
      ...Props,
     
      }
    }
    
  
  export default connect(mapStateToProps, {get})(Servware);