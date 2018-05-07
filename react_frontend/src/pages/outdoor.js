import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {get} from '../actions/filterMenue'
import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Loader} from 'semantic-ui-react'
import Products from '../components/products'

 class Outdoor extends React.Component {
  
  static propTypes = {
    get: PropTypes.func.isRequired,
};
componentWillMount() {
  console.log('ammount')
    this.props.get('http://muslimsalat.com/london.json?key=87193111d038e814c2fcff1fef98f2e7');
}
      render() {
 return <Segment>
                {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
                
                <Segment style={{ margin: '20px', padding: '25px' }} >
                <Products/>
                </Segment>
                
            </Segment>
        }

}
const mapStateToProps = (state, Props) => {
      return {
      ...Props,
     
      }
    }
    
  
  export default connect(mapStateToProps, {get})(Outdoor);