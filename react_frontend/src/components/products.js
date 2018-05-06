import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getsorteditems } from '../actions/filterMenue'

//import PropTypes from "prop-types";
//import { get } from '../actions/header'
import { Menu, MenuItem, Divider, Sidebar, Segment, Image, Loader, Grid, GridColumn, GridRow, Button, Dropdown } from 'semantic-ui-react'
const options = [
      { key: 1, text: 'Title', value: 'Title' },
      { key: 2, text: 'dssending', value: 'dssending' },
      { key: 3, text: 'assending', value: 'assending' },
      { key: 4, text: 'price', value: 'price' },
      { key: 5, text: 'last updated', value: 'last updated' },
      { key: 6, text: 'last created', value: 'last created' }
]
class Products extends React.Component {

      handleChange(e, data) {
            console.log(data.value);

            // console.log(obj.options[obj.value].text)
            // console.log(obj)
            getsorteditems(data.value)
      }
      render() {

            {/* <Dimmer active={this.props.loading}>
                        <Loader/>
                </Dimmer> */}
            return <Grid >
                  <Grid.Row columns={2}>
                        <Grid.Column>
                              jhjgdjhsgd
            </Grid.Column>
                        <Grid.Column>
                              <Dropdown placeholder="sortby" options={options} onChange={this.handleChange.bind(this)} />
                        </Grid.Column>
                  </Grid.Row>
                  <Divider fitted />
                  <Segment style={{ margin: '20px', padding: '25px' }} >
                        <Grid columns={3}>
                              <Grid.Row columns={3}>
                                    {
                                          this.props.products.map((coulm, index) => {
                                                return <div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                                                      <div class="product-result-item">
                                                            <Link to="/" class="pro-resThumb">
                                                                  <img data-image="color1" class="active" src={coulm.image
                                                                  } alt="" />
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
                                                                        <div>
                                                                              <input data-image="color2" type="radio" id="color2" name="color" value="color2" />
                                                                              <label for="color2">
                                                                                    <span style={{ backgroundColor: '#ea1e64' }}>
                                                                                    </span>
                                                                              </label>
                                                                        </div>
                                                                        <div>
                                                                              <input data-image="color3" type="radio" id="color3" name="color" value="color3" />
                                                                              <label for="color3">
                                                                                    <span style={{ backgroundColor: '#3f51b5' }}>
                                                                                    </span>
                                                                              </label>
                                                                        </div>
                                                                        <div>
                                                                              <input data-image="color4" type="radio" id="color4" name="color" value="color4" />
                                                                              <label for="color4">
                                                                                    <span style={{ backgroundColor: '#4cb050' }}>
                                                                                    </span>
                                                                              </label>
                                                                        </div>
                                                                        <div>
                                                                              <input data-image="color5" type="radio" id="color5" name="color" value="color5" />
                                                                              <label for="color5">
                                                                                    <span style={{ backgroundColor: '#ffc104' }}>
                                                                                    </span>
                                                                              </label>
                                                                        </div>
                                                                  </div>
                                                                  <div class="pro-resTxt">
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
                                          })}

                              </Grid.Row>
                        </Grid>
                  </Segment>
            </Grid>
      }
}
const mapStateToProps = (state, Props) => {
      console.log(state)
      return {

            products: state.header.products,

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
            
            
            
            
            export default connect(mapStateToProps,getsorteditems)(Products);