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

        
          return (<div class="col-lg-4 col-md-6 col-sm-6 col-xs-6">
          <div class="product-result-item">
              <a href="#" class="pro-resThumb">
                  <img data-image="color1" class="active" src="images/kuu.png" alt=""/>
              </a>
              <div class="pro-resCaption">
                  <div class="color-choose">
                      <div>
                          <input data-image="color1" type="radio" id="color1" name="color" value="color1" checked=""/>
                          <label for="color1">
                            <span>
                            </span>
                          </label>
                      </div>
                      <div>
                          <input data-image="color2" type="radio" id="color2" name="color" value="color2"/>
                          <label for="color2">
                            <span>
                            </span>
                          </label>
                      </div>
                      <div>
                          <input data-image="color3" type="radio" id="color3" name="color" value="color3"/>
                          <label for="color3">
                            <span>
                            </span>
                          </label>
                      </div>
                      <div>
                          <input data-image="color4" type="radio" id="color4" name="color" value="color4"/>
                          <label for="color4">
                            <span>
                            </span>
                          </label>
                      </div>
                      <div>
                          <input data-image="color5" type="radio" id="color5" name="color" value="color5"/>
                          <label for="color5">
                            <span>
                            </span>
                          </label>
                      </div>
                  </div>
                  <div class="pro-resTxt">
                      <h2 class="pr-title"><a href="#">Item Name</a></h2>
                      <p class="pr-shop">Shop Name</p>
                      <span class="pr-sa">345 DK</span>
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
      )}
    }
    const mapStateToProps = (state, Props) => {
        console.log(state)
        return {
            
           products:state.filterMenu.products
           
            }
         
          }
        
            export default connect(mapStateToProps, {get})(Catgory1);