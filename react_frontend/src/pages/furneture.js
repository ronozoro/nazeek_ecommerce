import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Products from '../components/products'
import { Menu, MenuItem, Icon, Sidebar, Segment, Dimmer, Image, Loader, Grid, GridColumn, GridRow } from 'semantic-ui-react'
const div = [{ img1: 'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg', colors: ['', '', ''], h: ['fhffkkds', 'lfgdfdffd', 'jhgjdgfdj'] },
{ img1: 'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg', colors: ['jhf', 'jhf', 'gfd'], h: ['fhffkkds', 'lfgdfdffd', 'jhgjdgfdj'] },
{ img1: 'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg', colors: ['', '', ''], h: ['fhffkkds', 'lfgdfdffd', 'jhgjdgfdj'] },
{ img1: 'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg', colors: ['', '', ''], h: ['fhffkkds', 'lfgdfdffd', 'jhgjdgfdj'] }]
class Furneture extends React.Component {

  static propTypes = {
  };
 

  render() {
    return <div>
      <Products  products={this.props.categoryItems}/>
    </div>

  }

}
const mapStateToProps = (state, Props) => {
  return {
    categoryItems:state.filterMenu.GETCATAGORYITMS
  }
}


export default connect(mapStateToProps, {  })(Furneture);