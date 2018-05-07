import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getsorteditems } from '../actions/filterMenue'
import Filtermenue from './filtermenue'

//import PropTypes from "prop-types";
//import { get } from '../actions/header'
import { Menu, MenuItem, Divider, Sidebar, Segment, Image, Loader, Grid, GridColumn, GridRow, Button,Select ,Dropdown} from 'semantic-ui-react'
const sortoptions = [
      { key: 1, text: 'title_ascending', value: 'title' },
      { key: 2, text: 'title_descending', value: '-title' },
      { key: 3, text: 'id_ascending', value: 'id' },
      { key: 4, text: 'id_descending', value: '-id' },
      { key: 5, text: ' price', value: 'price' },
      // { key: 6, text: 'last created', value: 'last created' }
]
class Products extends React.Component {
      constructor(props){
            super(props);
            this.state={
                products:props.products||[],
                value:""

            }
      }
      handleChange(e,data) {
       

           
          this.props.getsorteditems(data.value)
      }
      componentWillReceiveProps(nextProps){
            console.log({next:nextProps.products});
            
            this.setState({products:nextProps.products})
      }
     
      render() {
            console.log(this.props.products);
            console.log(this.state.products);
            

            {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
            return <Grid columns={2}>
            <Grid.Column width={4}>
                  <Filtermenue />

            </Grid.Column >
                              <Grid.Column width={12}>
                        <div class="sec-head clearfix" style={{ marginBottom: 10}}>
							<h2 class="sec-title f-left">Living Room</h2>
							<div class="col--right clearfix" >
								<div >
                                                      <Dropdown options={sortoptions} selection  style={{backgroundColor:'#13bfad',color:'black'}} placeholder='sort by' onChange={this.handleChange.bind(this)} />
									{/* <select  value={this.state.value} id="mySelect" onchange={this.handleChange(this)}>
										 <option>Sort by</option>
										<option value="title">title_ascending</option>
										<option value="-title">title_descending</option>
										<option value="id">id_ascending</option> 
                                                            <option value="-id">id_descending</option> 
										<option value="price">price</option> 
										

									</select> */}
								</div>
								
							</div>
						</div>
                              <Grid columns={3}>
                            
                              <Grid.Row>
                                    {
                                          this.state.products.map((coulm, index) => {
                                                return <Grid.Column>
                                                <div>
                                                      <div class="product-result-item">
                                                            <Link to="/" class="pro-resThumb">
                                                                  <img data-image="color1" class="active" src={'data:image/png;base64, '+ coulm.image} alt="" />
                                                            </Link>
                                                            <div class="pro-resCaption">
                                                                  <div class="color-choose">
                                                                        <div>
                                                                              <input data-image="color1" type="radio" id="color1" name="color" value="color1" checked="" />
                                                                              <label for="color1">
                                                                                    <span style={{ backgroundColor: '#f54236' }}>
                                                                                    </span>
                                                                              </label>
                                                                        </div>
                                                                    
                                                                   
                                                                  </div>
                                                                  <div class="pro-resTxt" style={{height:100}}>
                                                                        <h2 class="pr-title"><a href="#">{coulm.title}</a></h2>
                                                                        <p class="pr-shop">{coulm.Shop_Name}</p>
                                                                        <span class="pr-sa">{coulm.price}</span>
                                                                        <ul class="pro-resAction">
                                                                              <li>
                                                                                    <a href="#" class="heart-btn"><i class="icon-heart icons"></i></a>
                                                                              </li>
                                                                              <li>
                                                                                    <a href="#" class="basket-btn"><i class="icon-basket icons"></i></a>
                                                                              </li>
                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                </Grid.Column>
                                          })}
</Grid.Row>
                                          </Grid>
</Grid.Column>
                              
                        
            </Grid>
      }
}
const mapStateToProps = (state, Props) => {
      console.log(state)
      return {

             products: state.filterMenu.catagoryitms,

      }

}
            
var styles = {
      base: {
            width: 948,
            marginLeft: 100
      },
      h1: {
            fontSize: 22,
            display: 'inline-block',
            color: '#13bfad'
      },
      menue: {
            fontSize: 15,
            color: '#13bfad'
      }
}
            
            
            
            
            export default connect(mapStateToProps,{getsorteditems})(Products);