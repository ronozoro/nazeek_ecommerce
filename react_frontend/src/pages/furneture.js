import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {get} from '../actions/header'
import { Menu, MenuItem, Icon,Sidebar,Segment,Dimmer,Image,Loader,Grid,GridColumn,GridRow} from 'semantic-ui-react'
const div=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['jhf','jhf','gfd'],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']}]
 class furneture extends React.Component {
  
  static propTypes = {
    get: PropTypes.func.isRequired,
};
componentWillMount() {
  console.log('ammount')
}

      render() {
        {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
 return <Segment style={{ margin: '20px', padding: '25px' }} >
                <Grid columns={3}>
    <Grid.Row columns={3}>
    {div.map((coulm,index)=>{
                                 
       return <Grid.Column>
         <GridRow><Image src= {coulm.img1} /></GridRow>
         <GridRow>{coulm.colors.map((color,index)=>{<GridColumn></GridColumn>})}</GridRow>
         {coulm.h.map((h,index)=>{<GridRow>{h.index}</GridRow>})}

       
      </Grid.Column>
    })}
      
      
    </Grid.Row>
  </Grid>


                </Segment>
                
                
           
        

              }}
const mapStateToProps = (state, Props) => {
      return {
      ...Props,
     
      }
    }
    
  
  export default connect(mapStateToProps, {get})(furneture);